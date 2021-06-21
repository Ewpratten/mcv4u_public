---
title: "Unit 5: Limit of a Function"
layout: math
course: MCV4U
date_clean: May 25 2021
author: Evan Pratten
last_page: ./u4_4_three_plane_intersect
next_page: ./u5_2_limit_props
---

*[Full Note]({{site.baseurl}}/static/pdf/mcv4u/5.1%20The%20Limit%20of%20a%20Function%20no%20thght%20expmt%20(1.4).pdf)*

<div class="youtube-inject" data-video="kfF40MiS7zA" data-title="3B1B: Limits"></div>


Where a function has a *hole* (asymptote), a limit defines the $y$ values on either side of that hole.

The $a$ value is the $x$ coordinate of a hole's edge, and the sign on $a$ defines which side of the hole this limit refers to.

| Function | Sides | Description |
| -- | -- | -- |
| $\lim\limits_{\substack{x \rarr a^-}} f(x)$ | 1 | The limiting value of $f(x)$ as $x$ approaches $a$ from the left (a.k.a *left-hand limit*).|
| $\lim\limits_{\substack{x \rarr a^+}} f(x)$ | 1 | The limiting value of $f(x)$ as $x$ approaches $a$ from the right (a.k.a *right-hand limit*).|
| $\lim\limits_{\substack{x \rarr a}} f(x)$ | 2 | The limiting value of $f(x)$ as $x$ approaches $a$ from the **left and right**|

 - If the left and right limits are different, then $\lim\limits_{\substack{x \rarr a}} f(x)$ does not exist
 - $\pm\infin$ are not considered *limiting values*

## Quickly solving

A quick way to solve the limit of a function $f(x)$ is the following:

$$
\lim\limits_{x \rarr a^b} f(x) = c
$$

Just think: *"as $x$ approaches $a$ from the $b$ (negative: left, positive: right), what does $c$ become?"*

## Solving from equations

Plug $a$ into the $x$ of the equation.

 - If the result is not real, it does not exist