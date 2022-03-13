---
title: JavaScript
date: 2022-03-13 
---

## 手写Array.prototype.reduce

[MDN-Array.prototype.reduce-Polyfill](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce#polyfill)

```js
if (!Array.prototype.reduce) {
  Object.defineProperty(Array.prototype, 'reduce', {
    value: function(callback) {
      if (this === null) {
        throw new TypeError('Array.prototype.reduce ' + 'called on null or undefined');
      }
      if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
      }
      
      var o = Object(this);
      var len = o.length >>> 0; // 确保 len 为 number 类型
      var k = 0;
      var value;
      
      if (arguments.length >= 2) {
        value = arguments[1];
      } else {
        while (k < len && !(k in o)) {
          k++;
        }
        
        if (k >= len) {
          throw new TypeError('Reduce of empty array with no initial value');
        }
        
        value = o[k++];
      }
      
      while (k < len) {
        if (k in o) {
          value = callback(value, o[k], k, o);
        }
        k++;
      }
      
      return value;
    }
  });
}
```