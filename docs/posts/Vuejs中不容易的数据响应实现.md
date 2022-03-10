---
tag: [vuejs, hsy]
categories: [读书笔记, 前端]
---

# 不容易的数据响应实现

## 引言

如果你对Vue.js中数据响应的简单实现还不熟悉的话，请在参看本文之前先起身看看我昨天写的读书笔记[Vue.js响应式数据的简单实现](https://juejin.cn/post/7069312716371918879)，因为今天的内容可以说是在昨天内容的基础上对实现数据响应所作的进一步探究与完善，今天所有的代码演示也都是基于昨天的代码。

## 分支切换Bug

首先，我们来看看在数据响应中，什么叫做分支切换：

![carbon (48).png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/09763493de904d93821754042c4ac1aa~tplv-k3u1fbpfcp-watermark.image?)

如上图所示，当`obj.ok`布尔值变化时，副作用函数`effectFn`所依赖的数据也会随之变化，即代码的执行会发生变化，这就是本文所指的**分支切换**。

回顾一下昨天所实现的简单数据响应，你会发现**分支切换**会产生遗留的副作用函数。以上图代码举例，当`data.ok == true`时，副作用函数`effectFn`会与响应式数据对象`obj`的`text`属性建立明确的联系：每次修改`obj.text`都会重新执行一次`effectFn`。到现在为止，好像还没发现什么问题。但如果，此时执行代码`obj.ok = false`修改了`obj.ok`的值时，意外发生了！

理论上，因为此时`obj.ok`的值为`false`，所以`obj.text`值的修改不应该再触发副作用函数`effectFn`的执行；但在实际测试中，函数`effectFn`却执行了。原因很简单：早在`obj.ok == true`的时候，`effectFn`就与`obj.text`建立了明确的联系，虽然后来将`obj.ok`的值修改为`false`，但是`effectFn`与`obj.text`的联系并没有因此被切断。所以要想修复这个漏洞，应该在每次`obj.ok`被修改为`false`的时候，切断`effectFn`与`obj.text`的联系。那，如何实现呢？

其实解决思路很简单：在每次副作用函数执行前，把它从所有与之关联的依赖集合中删除；而每当副作用函数执行完毕后，再与依赖项建立新的联系。顺着这个思路，我们需要重新定义副作用函数注册函数`effect`，在其中实现为当前的副作用函数关联一个数组用来储存所有包含该副作用函数的依赖集合，代码如下：
- 重新定义`effect`

![carbon (50).png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/54723907fd5f49dbaa02676fbe925b2c~tplv-k3u1fbpfcp-watermark.image?)

- `cleanup`函数实现

![carbon (51).png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2f5eec99a3f64a4580f48e339daee3e8~tplv-k3u1fbpfcp-watermark.image?)

- `track` 函数修正-收集当前副作用函数的依赖集合

![carbon (52).png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c2baf14473e64faf8fd4b160330c2c80~tplv-k3u1fbpfcp-watermark.image?)

至此，我们实现的响应系统已经成功解决了**分支切换**导致的副作用函数遗留问题了，是不是感觉大功告成了？试一试运行测试一下？嘿，炸了，无限循环了！在前文中，我们修改了函数`effect`、`track`，添加了函数`cleanup`，但是`trigger`函数我们没有碰过。请注意，每次对代码的修改都请考虑到是否会对其他部分造成影响。

这次的问题就出在`trigger`函数上，请看源码：

![carbon (53).png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bc6f9533b6674e32862a83b435b20ef7~tplv-k3u1fbpfcp-watermark.image?)

用`forEach`遍历集合`effects`本来是没有问题的（这个`effects`就是前面的`deps`），但是，前文不是说了嘛：要想解决**分支切换**的问题，就要在当前副作用函数执行前先调用`cleanup`函数清除，即执行`deps.delete(effect)`；而在副作用函数执行完毕后，当前副作用函数又会与依赖项重新建立联系，即执行了`deps.add(effect)`。这一删一添，就没完没了了，`forEach`永远都遍历不完，当然死循环啦~简单直观的代码体现如下：

![carbon (54).png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3ac27b7d37304756b509b23f02a7a271~tplv-k3u1fbpfcp-watermark.image?)

如果你有经验的话，你会马上想到解决办法：另外构造一个集合Set()用来遍历就行了，`trigger`函数修改后代码如下：

![carbon (55).png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6be423a07be24d6389ebf40dc6780f31~tplv-k3u1fbpfcp-watermark.image?)

## 副作用函数嵌套Bug
如果我在一个副作用函数里再嵌套一个副作用函数，如下所示：

![carbon (57).png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8bca5836097549289fb34f0b069906b2~tplv-k3u1fbpfcp-watermark.image?)

理想情况下，我们希望每次修改`obj.foo`都会执行`effectFn1`以及`effectFn2`，而当修改`obj.bar`时只执行`effectFn2`。但是事实上是这样吗？读者大可自己试一试。事实上，当再次修改`obj.foo`的值时，只有`effectFn2`执行了，这显然是不符合预期的。

那问题出在哪里呢？不知道读者是否还记得我们先前是怎么储存当前副作用函数的，我们用的是`activeEffect`，显然，同一时刻`activeEffect`只能储存一个副作用函数，那当副作用函数发生嵌套时，内部的副作用函数就会覆盖掉外部的副作用函数，这会使原本应该与外层副作用函数建立联系的响应式数据收集到的副作用函数变成了内层的副作用函数。

怎么解决这个问题呢？我们可以定义一个模拟栈的数组`effectStack`，至于`activeEffect`则保持不变，这样，当发生副作用函数嵌套时，会先将外层副作用函数压入栈底，而最内层副作用函数会被压入栈顶，`activeEffect`则永远指向栈顶元素代码实现如下：

![carbon (58).png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/793de65d83b6417489e5e2ed1ab0932c~tplv-k3u1fbpfcp-watermark.image?)


## 无限递归循环bug

我承认，我就是来找茬的，就看你能不能接住了，示例代码如下：

![carbon (59).png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/360bb433739b47529bff31e7c83a7229~tplv-k3u1fbpfcp-watermark.image?)

这种情况会直接导致栈溢出，分析如下：`obj.foo++`既会读取`obj.foo`的值触发`track`，从而将当前副作用函数收集到`bucket`中；紧接着又设置`obj.foo`的值，触发`trigger`执行刚放入`bucket`中的副作用函数。而很不巧的是，此时导致该现象的副作用函数本身都还没有执行完毕呢，这就导致了副作用函数无限调用自己，产生栈溢出。就好比用递归或者迭代写个算法题，结果没设置`return`出口，直接玩完。

解决思路也不难，有点类似**节流**：当`trigger`触发的副作用函数与当前正在执行的副作用函数相同，则不触发执行。修改后的`trigger`函数如下：


![carbon (60).png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/328144c1f03d4a24913ea54df03d1ddd~tplv-k3u1fbpfcp-watermark.image?)

## 添加调度执行功能

**可调度**指的是当`trigger`动作触发副作用函数重新执行时，有能力决定副作用函数执行的时机、次数以及方式。可调度性是响应式系统一个非常重要的特性，比如在Vue.js中要想实现“连续多次修改响应式数据但只触发一次更新”这个功能，支持可调度就是关键所在。可以直白地说，**可调度**就是让副作用函数受到用户的主动控制，根据用户的意愿来决定如何执行。

为了实现这个功能，我们可以在副作用函数注册的时候为每一个副作用函数添加一个`options`属性用来接受用户传入的额外值，从而实现让用户自己控制副作用函数执行的时机、次数以及方式。重新设计的`effect`函数如下：

![carbon (61).png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ac28e698e30f4daf8e8b3994d2238a3b~tplv-k3u1fbpfcp-watermark.image?)

对`trigger`做相应的修改如下：

![carbon (70).png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/11a585eebd924976a4cdf321ebe8c686~tplv-k3u1fbpfcp-watermark.image?)

至此，我们就可以自行控制副作用函数执行的时机、次数以及方式，示例如下；

原代码：

![carbon (71).png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0965e517bf4a4ffdb300a819a3421f86~tplv-k3u1fbpfcp-watermark.image?)

现在，假设需求有变，需要先输出字符串`'结束了'`，然后再输出数字`2`。为了实现这个需求，我们可以利用选项参数`options`设计一个调度器函数`scheduler`，示例代码如下：

![carbon (67).png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3b11a69d19f343abb8605ec907b29d9b~tplv-k3u1fbpfcp-watermark.image?)

这个`scheduler`调度器函数就是实现**可调度性**的精髓所在，用户通过重构`scheduler`函数，可以按照自己的需求来调度副作用函数的执行。

## 总结
至此，数据响应的实现及完善基本介绍完毕，在此附上完整代码：

![carbon (69).png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/67efae0af7714ad7a2c9fe90de853ccd~tplv-k3u1fbpfcp-watermark.image?)

## 后话
我最近写的读数笔记都贴了不少《Vue.js设计与实现》书上的代码，其实感觉在文章里代码图片的量一多确实不讨喜。但是，我觉得这是有必要的。因为我觉得代码比文字表现的更加直观，甚至考虑到读者在看不懂或者还不熟悉的地方应该对着我附上的代码多敲几遍，毕竟，模仿学习在某种程度上是最高效的、入门速度最快的学习方式。

