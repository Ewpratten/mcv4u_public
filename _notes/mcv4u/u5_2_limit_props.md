---
title: "Unit 5: Properties of Limits"
layout: math
course: MCV4U
date_clean: May 28 2021
author: Evan Pratten
last_page: ./u5_1_limit_function
next_page: ./u5_3_tangent_slope
---

*[Full Note]({{site.baseurl}}/static/pdf/mcv4u/5.2%20Properties%20of%20Limits%20(1.5)%20FILL%20(2)%20(2).pdf)*

For any real number $a$, $f$ and $g$ are functions with limits that exist at $x=a$:

$$
\begin{aligned}
    \lim\limits_{x \rarr a} k &= k \\
    \lim\limits_{x \rarr a} x &= a \\
    \lim\limits_{x \rarr a} [f(x) \pm g(x)] &=  \lim\limits_{x \rarr a} f(x) \pm \lim\limits_{x \rarr a} g(x) \\
    \lim\limits_{x \rarr a} c \cdot f(x) &= c[\lim\limits_{x \rarr a} f(x)] \\
    \lim\limits_{x \rarr a} [f(x)g(x)] &= [\lim\limits_{x \rarr a} f(x)]  [\lim\limits_{x \rarr a} g(x)] \\
    \lim\limits_{x \rarr a} \frac{f(x)}{g(x)} &= \frac{\lim\limits_{x \rarr a} f(x)}{\lim\limits_{x \rarr a} g(x)} \\ 
    \lim\limits_{x \rarr a} [f(x)]^n &= [\lim\limits_{x \rarr a} f(x)]^n \\
\end{aligned}
$$

## Calculating a limit of a continuous function

The limit of a continuous function at a point is just its value at that point.

$$
    \lim\limits_{x \rarr a} f(x) = f(a)
$$

When a direct substitution of $x = a$ results in $\frac{0}{0}$ (a hole) this is called an indeterminate form. When this happens we look for an equivalent function that has all the same values as $f(x)$ except at $x = a$.

When direct substitution fails, try:

 - Factoring
 - Rationalizing
 - Change of variable
   - Wiggle the variable around a bit to get a value "close enough"
 - Think graphically and reason it out
