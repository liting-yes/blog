---
layout: Post
title: 螺旋矩阵
subtitle: LeetCode刷题题解记录
author: 将焕
date: 2022-03-08
useHeaderImage: true
headerImage: /img/in-post/2021-12-24/header.jpg
tags:
  - 算法
  - LeetCode
  - 中等
  - 模拟
---

知我者谓我心忧，不知我者谓我何求

<!-- more -->

[题目详情-力扣(LeetCode)](https://leetcode-cn.com/problems/spiral-matrix/)

## 题目简述

给你一个`m`行`n`列的矩阵`matrix`，请按照顺时针螺旋顺序，返回矩阵中的所有元素

## 参考题解

### 边界模拟
[题解详情-力扣(LeetCode)](https://leetcode-cn.com/problems/shun-shi-zhen-da-yin-ju-zhen-lcof/solution/mian-shi-ti-29-shun-shi-zhen-da-yin-ju-zhen-she-di/)

:::: code-group
::: code-group-item Java
```java
class Solution {
    public List<Integer> spiralOrder(int[][] matrix) {
        int l=0, r=matrix[0].length-1, t=0, b=matrix.length-1;
        List<Integer> res = new LinkedList<>();

        while (true) {
            for (int i=l; i<=r; ++i)    res.add(matrix[t][i]);
            if (++t > b)    break;
            for (int i=t; i<=b; ++i)    res.add(matrix[i][r]);
            if (--r < l)    break;
            for (int i=r; i>=l; --i)    res.add(matrix[b][i]);
            if (--b < t)    break;
            for (int i=b; i>=t; --i)    res.add(matrix[i][l]);
            if (++l > r)    break;
        }

        return res;
    }
}
```
:::
::: code-group-item Python
```python
class Solution:
    def spiralOrder(self, matrix:[[int]]) -> [int]:
        if not matrix: return []
        l, r, t, b, res = 0, len(matrix[0]) - 1, 0, len(matrix) - 1, []
        while True:
            for i in range(l, r + 1): res.append(matrix[t][i]) # left to right
            t += 1
            if t > b: break
            for i in range(t, b + 1): res.append(matrix[i][r]) # top to bottom
            r -= 1
            if l > r: break
            for i in range(r, l - 1, -1): res.append(matrix[b][i]) # right to left
            b -= 1
            if t > b: break
            for i in range(b, t - 1, -1): res.append(matrix[i][l]) # bottom to top
            l += 1
            if l > r: break
        return res
```
:::
::::