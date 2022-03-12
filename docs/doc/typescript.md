---
title: TypeScript
date: 2022-03-12
---

# TypeScript

## `interface`与`type`的异同

### 相同点

- 都可以定义一个对象或函数
- 都允许继承

### 不同点

- `interface`（接口）是TS设计出来用于定义对象类型的，可以对对象的形状进行描述
- `type`是**类型别名**，用于给各种类型定义别名，让TS写起来更简洁、清晰
- `type`可以声明基本类型、联合类型、交叉类型、元组，而`interface`不行
- `interface`可以重复声明，而`type`不行