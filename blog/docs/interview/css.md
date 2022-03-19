---
title: CSS
date: 2022-03-13 
---

## CSS属性

> 归纳总结开发中所遇到的不常见CSS属性

### `contain`

`contain`属性允许开发者声明当前元素和它的内容尽可能的独立于DOM树的其他部分，这使得浏览器在重新计算布局、样式、绘图、大小或这四项的组合时，只影响到有限的DOM区域，而不是整个页面，可以有效改善性能，防止某个小部件的CSS规则改变对页面上的其他东西造成影响。

#### 属性值

- `none`
表示元素将正常渲染，没有包含规则

- `strict`
表示除了`style`外的所有的包含规则应用于这个元素。等价于`contain: size layout paint`

- `content`
表示这个元素上有除了`size`和`style`外的所有包含规则。等价于`contain: layout paint`

- `size`
表示这个元素的尺寸计算不依赖于它的子孙元素的尺寸。

- `layout`
表示元素外部无法影响元素内部的布局，反之亦然。

- `style`
表示那些同时会影响这个元素和其子孙元素的属性，都在这个元素的包含范围内。

- `paint`
表示这个元素的子孙节点不会在它边缘外显示。如果一个元素在视窗外或因其他原因导致不可见，则同样保证它的子孙节点不会被显示。

### `text-tranform`

`text-transform`属性指定如何将元素的文本大写。它可以用于使文本显示为全大写或全小写，也可单独对每一个单词进行操作

#### 属性值

- `capitalize`
强制每个单词的首字母转换为大写，其他的字符保留不变（它们写在元素里的文本保留原始大小写）。字母是`Unicode`字符集或者数字里定义的字符，因此单词开头的任何标点符号或者特殊符号将会被忽略。

- `uppercase`
强制所有字符被转换为大写

- `lowercase`
强制所有字符被转换为小写

- `none`
阻止所有字符的大小写被转换


## 元素实现居中的方式

> HTML布局
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>实现水平居中</title>
</head>
<body>
  <div class="out">
    <div class="in"></div>
  </div>
</body>
</html>
```

### absolute + transform

```css
* {
  margin : 0;
  padding: 0;
}

.out {
  border: 1px solid red;
  width : 300px;
  height: 300px;
  
  position: relative;
}

.in {
  border: 1px solid green;
  width: 50px;
  height: 50px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

### absolute + margin auto

```css
* {
  margin : 0;
  padding: 0;
}

.out {
  border: 1px solid red;
  width : 300px;
  height: 300px;
  
  position: relative;
}

.in {
  border: 1px solid green;
  width: 50px;
  height: 50px;

  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
```

### flex
```css
* {
  margin : 0;
  padding: 0;
}

.out {
  border: 1px solid red;
  width : 300px;
  height: 300px;
  
  display: flex;
  justify-content: center;
  align-items: center;
}

.in {
  border: 1px solid green;
  width: 50px;
  height: 50px;
}
```

### flex + margin auto
```css
* {
  margin : 0;
  padding: 0;
}

.out {
  border: 1px solid red;
  width : 300px;
  height: 300px;
  
  display: flex;
}

.in {
  border: 1px solid green;
  width: 50px;
  height: 50px;
  
  margin: auto;
}
```

### table-cell

```css
* {
  margin : 0;
  padding: 0;
}

.out {
  border: 1px solid red;
  width : 300px;
  height: 300px;
  
  display: table-cell;
  text-align: center;
  vertical-align: middle;
}

.in {
  border: 1px solid green;
  width: 50px;
  height: 50px;
  
  display: inline-block;
}
```

### grid
```css
* {
  margin : 0;
  padding: 0;
}

.out {
  border: 1px solid red;
  width : 300px;
  height: 300px;
  
  display: grid;
}

.in {
  border: 1px solid green;
  width: 50px;
  height: 50px;
  
  align-self: center;
  justify-self: center;
}
```

## 清除浮动/解决盒子塌陷的方案

> 盒子塌陷：当所有的子元素浮动且父元素没有设置高度，这时候父元素就会产生高度塌陷，所有子元素都跑到了父元素外部

### 直接写死父元素宽高

- 优点：简单快速，兼容性好，适合只改动少量内容不涉及盒子排布的版面
- 缺点：无法进行响应式布局，浏览器的窗口大小直接影响用户体验

### 给父元素添加`overflow`属性

- `overflow: auto` 有可能出现滚动条，影响美观
- `voerflow: hidden`  可能会带来内容不可见的问题

### 给父元素添加浮动

- 优点：简单方便
- 缺点：对页面的布局不友好，不易维护

### 父元素里最下方引入清除浮动块

如：`<br style="clear:both;>`

- 缺点：引入不必要的冗余元素，不推荐

### 用`after`伪元素清除浮动

```css
/* .clearfix 为塌陷盒子 */
.clearfix:after {
  display: table;
  line-height: 0;
  content: "";
  clear: both;
}

```

## 参考资料

- [MDN](https://developer.mozilla.org/zh-CN/)
- [牛客前端面试宝典](https://www.nowcoder.com/tutorial/96/f5212664ab664984882b00635066ded2)