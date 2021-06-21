---
title: "Unit 1: Vector Addition"
layout: math
course: MCV4U
date_clean: Apr 26 2021
author: Evan Pratten
last_page: ./u1_1_intro
next_page: ./u1_3_vec_scal_mul
---

*[Full Note]({{site.baseurl}}/static/pdf/mcv4u/1.2%20Vector%20Addition%20(6.2)%20FILL%20(2).pdf)*

During vector addition, the *resultant* ($ \vec{a} + \vec{b}$) is constructed from the tail of one vector to the tip of the other vector.

$$
\begin{bmatrix} 1\\3 \end{bmatrix} + 
\begin{bmatrix} 4\\2 \end{bmatrix} = 
\begin{bmatrix} 5\\5 \end{bmatrix}

$$

## The Zero Vector

 - When two vectors are added that are equal in magnitude and opposite in direction, the resultant is the *zero vector*
 - The *zero vector* has a magnitude of 0 and no defined direction.

## Finding $\vert\vec{u} + \vec{v}\vert$ given an angle

 > Example Q: *Given vectors $\vec{u}$ and $\vec{v}$ such that the angle between them is 52ᵒ, $\vert\vec{u}\vert = 6$ and $\vert\vec{v}\vert = 9$, determine $\vert\vec{u} + \vec{v}\vert$*

We can solve this problem with a general rule. Assume the angle between $\vec{u}$ and $\vec{v}$ is $\gamma$:

$$
    \vert\vec{u} + \vec{v}\vert = \sqrt{
    {\vert\vec{u}\vert}^2 + {\vert\vec{v}\vert}^2 -
    2 \vert\vec{u}\vert \vert\vec{v}\vert \cos{(180 - \gamma)}}
$$

A similar rule applies for subtraction:

$$
    \vert\vec{u} - \vec{v}\vert = 
    \sqrt{ {\vert\vec{u}\vert}^2 + {\vert\vec{v}\vert}^2 - 2 \vert\vec{u}\vert \vert\vec{v}\vert \cos{\gamma}}
$$

Essentially, you are solving for a triangle with two known side lengths, and the interior angle between the two.

## Finding the angle $\gamma$ between $ \vec{u}$ and $ \vec{v}$

Given the vectors $ \vec{u}$ and $ \vec{v}$, we can find the angle between them by finding the magnitude of their resultant, and using the cosine law.

$$
\begin{aligned}
    \gamma &= \cos^{-1}(\frac{\vert\vec{u}\vert^2 + \vert\vec{v}\vert^2 - \vert\vec{u + v}\vert^2}{2\vert\vec{u}\vert\vert\vec{v}\vert})
\end{aligned}
$$

This angle will be the interior of the triangle. Make sure to flip it to get the real result.