---
layout: Post
title: 路径总和II
subtitle: LeetCode刷题题解记录
author: 将焕
date: 2022-02-26
useHeaderImage: true
headerImage: /img/in-post/2021-12-24/header.jpg
tags:
  - 算法
  - LeetCode
  - 中等
  - 回溯
---

知我者谓我心忧，不知我者谓我何求

<!-- more -->

[题目详情-力扣(LeetCode)](https://leetcode-cn.com/problems/path-sum-ii/)

## 题目简述

给你二叉树的根节点`root`和一个整数目标和`targetSum`，找出所有从根节点到叶子节点路径总和等于给定目标和的路径。

## 参考题解

### DFS+剪枝

[题解详情-力扣(LeetCode)](https://leetcode-cn.com/problems/er-cha-shu-zhong-he-wei-mou-yi-zhi-de-lu-jing-lcof/solution/mian-shi-ti-34-er-cha-shu-zhong-he-wei-mou-yi-zh-5/)

:::: code-group
::: code-group-item Java
```java
class Solution {
    LinkedList<List<Integer>> res = new LinkedList<>();
    LinkedList<Integer> path = new LinkedList<>(); 
    public List<List<Integer>> pathSum(TreeNode root, int sum) {
        recur(root, sum);
        return res;
    }
    void recur(TreeNode root, int tar) {
        if(root == null) return;
        path.add(root.val);
        tar -= root.val;
        if(tar == 0 && root.left == null && root.right == null)
            res.add(new LinkedList(path));
        recur(root.left, tar);
        recur(root.right, tar);
        path.removeLast();
    }
}
```
:::
::: code-group-item Python
```python
class Solution:
    def pathSum(self, root: TreeNode, sum: int) -> List[List[int]]:
        res, path = [], []
        def recur(root, tar):
            if not root: return
            path.append(root.val)
            tar -= root.val
            if tar == 0 and not root.left and not root.right:
                res.append(list(path))
            recur(root.left, tar)
            recur(root.right, tar)
            path.pop()

        recur(root, sum)
        return res
```
:::
::::