---
title: CSS
---

## 元素实现居中的方式

### HTML布局

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

### 实现方法

#### absolute + transform

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

#### absolute + margin auto

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

#### flex
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

#### flex + margin auto
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

#### table-cell

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

#### grid
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