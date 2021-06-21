---
title: "Unit 6: The Power Rule"
layout: math
course: MCV4U
date_clean: June 7 2021
author: Evan Pratten
last_page: ./u5_5_derivative_fn
next_page: ./u6_2_differentiation
---

*[Full Note]({{site.baseurl}}/static/pdf/mcv4u/6.1%20The%20Power%20Rule%20(2.1)%20FILL%20(2).pdf)*

**Using a formula to determine the derivative that eliminates the tedious and
time consuming method that requires calculating limits from first principles.**

$\lim\limits_{h \rarr 0}\frac{f(a+h)-f(a)}{h}$ represents:

 - The slope of the tangent to the curve $f(x)$ where $x = a$
 - The instantaneous rate of change of $f(x)$ where $x = a$
 - **The derivative of $f(x)$ at $x = a$, written as $f^\prime(a)$ or $\frac{d}{dx}f(a)$**

**Recall:** The derivative of $f(x)$ with respect to $x$ is $f^\prime(x) = \lim\limits_{h \rarr 0}\frac{f(a+h)-f(a)}{h}$, provided that the limit exists.

## Deriving a formula for the derivative of $f(x)=x^n$

$$
\begin{aligned}
    f^\prime(x) &= \lim\limits_{h \rarr 0}\frac{f(a+h)-f(a)}{h} \\
    &= \lim\limits_{h \rarr 0}\frac{(x+h)^n - x^n}{h} \\
    &= \lim\limits_{h \rarr 0}\frac{(x + h - x)[(x+h)^{n-1}x^0 + (x+h)^{n-2}x^1 + \dots (x+h)x^{n-2} + x^{n-2}]}{h} \\
    &= \lim\limits_{h \rarr 0}(x+h)^{n-1} + (x+h)^{n-2}x + \dots (x+h)x^{n-2} + x^{n-2} \\
    &= x^{n-1} + x^{n-2}x + \dots (x)x^{n-2} + x^{n-1} \\
    &= x^{n-1} + x^{n-1} + \dots (x)x^{n-1} + x^{n-1} \\
    &= nx^{n-1} \\
\end{aligned}
$$

## The Power Rule

If $f(x) = cx^n$, where $n$ is a real number, then:

$$
f^\prime(x) = \underbrace{c}_{\text{coeff}} nx^{n-1}
$$

## A video for this unit

This video covers basically everything under U6.

<div class="youtube-inject" data-video="YG15m2VwSjA" data-title="3B1B: Chain and Product rules"></div>