---
layout: Post
title: 整数拆分
subtitle: LeetCode刷题题解记录
author: 将焕
date: 2022-02-22
useHeaderImage: true
headerImage: /img/in-post/2021-12-24/header.jpg
tags:
  - 算法
  - LeetCode
  - 中等
  - 数学方法
---

知我者谓我心忧，不知我者谓我何求

<!-- more -->

[题目详情-力扣(LeetCode)](https://leetcode-cn.com/problems/integer-break/)

## 题目简述

给定一个正整数`n`，将其拆分为`k`个正整数的和（ k >= 2 ），并使这些整数的乘积最大化，返回可以获得的最大乘积

## 参考题解

### 数学推导

[题解详情-力扣(LeetCode)](https://leetcode-cn.com/problems/integer-break/solution/343-zheng-shu-chai-fen-tan-xin-by-jyd/)

:::: code-group
::: code-group-item Java
```java
class Solution {
    public int integerBreak(int n) {
        if(n <= 3) return n - 1;
        int a = n / 3, b = n % 3;
        if(b == 0) return (int)Math.pow(3, a);
        if(b == 1) return (int)Math.pow(3, a - 1) * 4;
        return (int)Math.pow(3, a) * 2;
    }
}
```
:::
::: code-group-item Python
```python
class Solution:
    def integerBreak(self, n: int) -> int:
        if n <= 3: return n - 1
        a, b = n // 3, n % 3
        if b == 0: return int(math.pow(3, a))
        if b == 1: return int(math.pow(3, a - 1) * 4)
        return int(math.pow(3, a) * 2)
```
:::
::::