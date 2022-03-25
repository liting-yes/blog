---
title: JavaScript
date: 2022-03-13
---

## 手写 new()
> 参考 [掘金-重学 JS 系列：聊聊 new 操作符](https://juejin.cn/post/6844903789070123021)

```js
function create (Con, ...args) {
    let obj = {}
    Object.setPrototypeOf(obj, Con.prototype)
    let result = Con.apply(obj, args)
    return result instanceof Object ? result : obj
}
```

## 手写 String.raw()

> 参考 [阮一峰-es6入门教程](https://es6.ruanyifeng.com/#docs/string-methods)

```js
String.raw = function (strings, ...values) {
    let optput = ''
    let index
    for (index = 0; index < values.length; index++)
        output += strings.raw[index] + values[index]
    output += strings.raw[index]
    return output
}
```

## 手写 Array.prototype.reduce
> 参考 [MDN-Array.prototype.reduce-Polyfill](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce#polyfill)

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
## 手写 Object.setPropertyOf()
> 参考 [MDN-Object.setProperty-polyfill](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf)

```js
function setPropertyOf (obj, proto) {
    if (obj.__proto__) {
        obj.__proto__ = proto
        return obj
    }   else {
        let Fn = function () {
            for (let key in obj) {
                Object.defineProperty(this, key, {
                    value: obj[key]
                })
            }
        }
        Fn.prototype = proto
        return new Fn()
    }
}
```

## 手写 Generator

> 参考 [掘金-手写generator核心原理，再也不怕面试官问我generator原理](https://juejin.cn/post/6859281096152973326)



## 手写 Promise

> 参考 [掘金-从一道让我失眠的 Promise 面试题开始，深入分析 Promise 实现细节](https://juejin.cn/post/6945319439772434469)

```js
// Promise 状态
const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

// Promise 本质上是一个类
class MyPromise {
    // executor 执行器，立即执行
    constructor(executor) {
        try {
            executor(this.resolve, this.reject);
        }   catch (error) {
            this.reject(error);
        }
    }

    // 内部 Promise 状态
    status = PENDING;
    // value 成功返回值
    value = null;
    // reason 失败返回信息
    reason = null;

    // 成功时的回调
    onFulfilledCallBacks = [];
    // 失败时的回调
    onRejectedCallBacks = [];

    // 更改成功后 Promise 状态
    resolve = (value) => {
        if (this.status === PENDING) {
            this.status = FULFILLED;
            this.value = value;
            while(this.onFulfilledCallBacks.length) {
                this.onFulfilledCallBacks.shift()(value);
            }
        }
    };

    // 更改失败后的状态
    reject = (reason) => {
        if (this.status === PENDING) {
            this.status = REJECTED;
            this.reason = reason;
            while(this.onRejectedCallBacks.length) {
                this.onRejectedCallBacks.shift()(reason);
            }
        }
    };

    // then 链式调用，返回 Promise 类型
    then(onFulfilled, onRejected) {
        // 实现 Promise 中参数可选
        const realOnFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
        const realOnRejected = typeof onRejected === 'function' ? onFulfilled : reason => { throw reason };

        // promise_ 为返回的 Promise 实例
        const promise_ = new MyPromise((resolve, reject) => {
            const fulfilledMicrotask = () => {
                // 创建微任务
                queueMicrotask(() => {
                    try {
                        const x = realOnFulfilled(this.value);
                        resolvePromise(promise_, x, resolve, reject);
                    }   catch (error) {
                        reject(error);
                    }
                })             
            };

            const rejectedMicrotask = () => {
                queueMicrotask(() => {
                    try {
                        const x = realOnRejected(this.reason);
                        resolvePromise(promise_, x, resolve, reject);
                    }   catch (error) {
                        reject(error);
                    }
                })
            };

            // 判断此时 Promise 状态
            if (this.status === FULFILLED) {
                fulfilledMicrotask();
            }   else if (this.status === REJECTED) {
                rejectedMicrotask()
            }   else {
                this.onFulfilledCallBacks.push(fulfilledMicrotask);
                this.onRejectedCallBacks.push(rejectedMicrotask);
            }
        })

        return promise_;
    }

    // resolve 静态方法
    static resolve (parameter) {
        if (parameter instanceof MyPromise) {
            return parameter;
        }

        return new MyPromise(resolve => {
            resolve(parameter);
        });
    }

    // reject 静态方法
    static reject (reason) {
        return new MyPromise((resolve, reject) => {
            reject(reason);
        });
    }
}

// 判断 x 是不是 Promise 实例
function resolvePromise(promise, x, resolve, reject) {
    // 避免返回自身
    if (promise === x) {
        return reject(new TypeError('The promise and the return value are the same'));
    }
    if (typeof x === 'object' || typeof x === 'function') {
        // typeof null === 'object'  ->  true
        if (x === null) {
            return resolve(x);
        }

        let then;
        try {
            then = x.then;
        }   catch (error) {
            return reject(error);
        }

        if (typeof then === 'function') {
            let called = false;
            try {
                then.call(
                    x,
                    // 如果 resolvePromise 以值 y 为参数被调用，则运行 [[Resolve]](promise, y)
                    y => {
                        if (called) return;
                        called = true;
                        resolvePromise(promise, y, resolve, reject);
                    },
                    // r 拒因
                    r => {
                        if (called) return;
                        called = true;
                        reject(r);
                    }
                );
            }   catch (error) {
                if (called) return;
                reject(error);
            }
        }   else {
            resolve(x);
        }
    }   else {
        resolve(x);
    }
}
```

## 手写 Promise.all

> 参考 [掘金-2021年前端各大公司都考了那些手写题(附带代码)](https://juejin.cn/post/7033275515880341512#heading-3)

```js
function PromiseAll (promises) {
    return new Promise((resolve, reject) => {
        // 只考虑到 promises 为数组的情况，实际上 promises 可以为任何 es6 的 iterable 类型
        if (!Array.isArray(promises))
            throw new TypeError('promises must be an array')
        
        let result = []
        let count = 0
        promises.forEach((promise, index) => {
            // 只考虑到 promise 为 Promise 实例
            promise.then(
                (res) => {
                    result[index] = res
                    count++
                    count === promises.length && resolve(result)
                },
                (err) => {
                    reject(err)
                }
            )
        })
    })
}
```

## 手写 Promise.finally

> 参考 [掘金-实现Promise的catch、finally、all、race方法](https://juejin.cn/post/6844904178897125389#heading-3)

```js
Promise.prototype.finally = function (cb) {
    return this.then(
        (value) => {
            return Promise.resolve(cb()).then(() => value)
        },
        (reason) => {
            return Promise.resolve(cb()).then(() => { throw reason })
        }
    )
}
```

## 手写 Promise.allSettled

> 参考 [掘金-2021年前端各大公司都考了那些手写题(附带代码)](https://juejin.cn/post/7033275515880341512#heading-5)

```js
function allSettled (promises) {
    if (promises.length === 0)
        return Promise.resolve([])
    
    const promises_ = promises.map(
        item => item instanceof Promise ? item : Promise.resolve(item)
    )

    return new Promise((resolve, reject) => {
        const result = []
        let unSettled = promises_.length

        promises_.forEach((promise, index) => {
            promise.then(
                (value) => {
                    result[index] = {
                        status: 'fulfilled',
                        value
                    }

                    if (--unSettled === 0)
                        resolve(result)
                },
                (reason) => {
                    result[index] = {
                        status: 'rejected',
                        reason
                    }

                    if (--unSettled === 0)
                        resolve(result)
                }
            )
        })
    })
}
```

## 手写 Promise.race

> 参考 [掘金-2021年前端各大公司都考了那些手写题(附带代码)](https://juejin.cn/post/7033275515880341512#heading-6)

```js
Promise.race = function (promises) {
    return new Promise((resolve, reject) => {
        promises.forEach(
            p => {
                Promise.resolve(p).then(
                    value => resolve(value),
                    reason => reject(reason)
                )
            }
        )
    })
}
```

## 手写 Promise.any

- 参考 [掘金-2021年前端各大公司都考了那些手写题(附带代码)](https://juejin.cn/post/7033275515880341512#heading-8)

```js
Promise.any = function (promises) {
    let index = 0

    return new Promise((resolve, reject) => {
        if (promises.length === 0)  return

        promises.forEach((p, i) => {
            Promise.resolve(p).then(
                value => resolve(value),
                () => {
                    index++
                    if (index === promises.length)
                        reject(new AggregateError('All promises were rejected'))
                }
            )
        })
    })
}
```