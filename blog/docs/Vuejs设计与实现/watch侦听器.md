---
title: watch侦听器的实现原理
date: 2022-03-02
---

知我者谓我心忧，不知我者谓我何求

<!-- more -->

> 阅读本文前置知识：Vue.js数据响应的简单实现，可转阅此文[-Vue.js中不容易的数据响应实现](https://juejin.cn/post/7069644797778067487)

## 引言
计算属性允许我们声明性地计算推导值。然而，在有些情况下，为了应对一些状态的变化，我们需要运行一些“副作用”：例如更改 DOM，或者根据异步操作的结果，去修改另一处的状态，为了满足这一需求，Vue.js就设计了侦听器`watch`。接下来，让我们一起来探究一下`watch`的实现原理。

## 了解`watch`

所谓`watch`，其本质就是观测一个响应式数据，当数据发生变化时通知并执行响应的回调函数。其实在[Vue.js官方文档](https://vuejs.org/api/reactivity-core.html#watch)中对`watch`有详细的类型定义：

![carbon (87).png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a04b6a523ec24a8ca90b45a570bbb87a~tplv-k3u1fbpfcp-watermark.image?)

通过上图可初步窥见`watch`的内部实现：以“监听单个数据源”为例，`watch`函数提供了三个参数，`source`是被监听的响应式数据源，`callbak`是每当`source`变化时要执行的回调函数，`options`类似于`effect`函数的`options`，用来控制`callback`如何执行。

接下来，让我们以侦听单个数据源为例，简单探究一下Vue.js中侦听器`watch`的实现原理

## 利用`effect`封装`watch`

还记得`effect`函数吗？如下：

![carbon (88).png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/166a13a4ec11474aac06d772531eee49~tplv-k3u1fbpfcp-watermark.image?)

如果一个副作用函数`fn`读取了一个响应式的值`obj.text`，那么通过调用`effect(fn)`就可以简单实现`fn`与`obj.text`的简单绑定，即每当`obj.text`发生变化时，都会重新执行一次`fn`；又`effect`第二个选项参数`options`可以传入一个调度函数`scheduler`控制`fn`的执行，则当`options.scheduler`存在时，每次`obj.text`发生变化都会重新执行`scheduler(effectFn)`。其实，这个`scheduler`就相当于一个回调函数，`watch`的实现就利用了这一点，请看代码：

![carbon (91).png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fa6dbfb03f4d46f38f421ada1c3a22fa~tplv-k3u1fbpfcp-watermark.image?)

这段代码封装了一个简单的侦听器`watch`，在函数内部通过调用`effect`实现`source.foo`与副作用函数的绑定，通过设置`scheduler`来实现用回调函数`cb`替代原本应执行的副作用函数。此时，每当`source.foo`发生变化，都会执行回调函数`cb`。

## 实现侦听响应式数据所有属性

在上一节的实现中，是通过触发一个指定的属性值`source.foo`的读取来实现对响应式数据`source`的侦听，很明显，如果是`source`的其他属性，比如`source.bar`发生变化就并不会成功侦听到，即`source.bar`发生变化不会执行回调函数`cb`。接下来我们就需要解决这个问题：实现只要对`source`进行了侦听，那么`source`任意属性值发生变化都会触发`cb`的执行。

可以设计一个通用的`traverse`函数来实现对`source`所有属性的递归读取：

![carbon (92).png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/55372a7f6353478fba8eb7426e74e390~tplv-k3u1fbpfcp-watermark.image?)

如上述代码所示，`traverse(source)`会遍历读取`source`的所有属性值以实现对整个`source`的侦听

## 实现侦听计算属性

我在上一篇笔记-[简单实现Vue.js中的计算属性](https://juejin.cn/post/7070105283078406152#heading-1)中对计算属性作了初步的解析，计算属性实现的一个关键点就是`getter`。其实，在Vue.js实现的侦听器`watch`就可以侦听计算属性，但我们现在所实现的`watch`还做不到这一点，接下来让我们一起来探究一下如何简单实现对计算属性的侦听。

简化一下需求，假设此时传入`watch`的不再是一个响应式数据，而是一个`getter`函数，而在该函数内部指定了对一些响应式数据的依赖。现在的需求就是：只要`getter`函数内部所依赖的任意一个响应式数据发生了变化就执行回调函数`cb`。请问，怎么实现？

此时，我们可以设置一个类似`getter`变量来储存传入`effect`的参数。对传入`watch`的第一个参数进行判断，假如`source`是一个响应式数据，就将`() => traverse(source)`赋值给`getter`；而假如`source`是一个函数，那就不应该调用`traverse`，而是直接进行赋值`getter = source`，实现代码如下：

![carbon (93).png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/253263aeab3549efba4c07a4fccc2ed2~tplv-k3u1fbpfcp-watermark.image?)

这样就实现了对类似`getter`函数的侦听，增强了`watch`的功能。

## 实现在回调函数中拿到变化前后的值

在侦听器的实际应用之中，我们经常需要获取被侦听数据变化前后的值。其实要想实现获得新值`newValue`不难，每次在`scheduler`函数中重新执行的副作用函数返回的就是新值，难点在于旧值`oldValue`的获取：需要利用`effect`函数的`lazy`选项创建一个懒执行的`effect`，从而通过手动调用副作用函数来拿到旧值`oldValue`，具体实现如下：

![carbon (94).png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/eb4ea8d26bd646daa3cf2e5f560a3aa6~tplv-k3u1fbpfcp-watermark.image?)

请注意上述代码最后一部分，我们手动调用`effectFn`获得的返回值是旧值`oldValue`，新值`newValue`只能在`sechduler`中获得。

## 实现`watch`立即执行

上述我们已实现的`watch`只会在被侦听数据发生变化时才会执行回调函数，而实际上在Vue.js中可以通过选项参数`immediate`来指定回调函数是否立即执行，那这个功能应该怎么实现呢？事实上，你冷静分析一下就会发现，这个立即执行的回调函数和后续执行本质上没有任何差别，那么我们可不可以将调度器函数`scheduler`封装为一个通用的函数`job`，分别在被侦听数据初始化和变更的时候执行它呢？当然可以，如以下代码所示：

![carbon (95).png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/65f009d465304868bde8c1dd49295c5a~tplv-k3u1fbpfcp-watermark.image?)

以上修改后的`watch`代码实现了对`options.immediate`的支持，至于Vue.js的侦听器中还提供的其他`options`，如`flush`，在本文中就不一一实现了，感兴趣的朋友可以自己动手尝试实现一下。

## 后话
笔者毕竟是一个生物专业的学生，今天上午早八上分子生物，下午被生化综合实验室老师拉去实验室干了一整个下午的活，就这样，今天白天就这样没了，没了啊！其实侦听器`watch`的实现细节还有不少，如竞态问题的解决，但是因为今天时间太紧了，感觉很仓促，就不在本篇详说了。感兴趣的朋友可以去看看《Vue.js设计与实现》这本书，超级棒。

## 声明
-   本文属于读书笔记一类，是作者在拜读 霍春阳 大佬的新作《Vue.js设计与实现》途中，以书中内容为蓝本，辅以个人微末的道行“填写”完成，推荐购书阅读，定有收获
-   欢迎大佬斧正
-   日更