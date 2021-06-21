---
title: "Unit 1: Vector Operations in 3D"
layout: math
course: MCV4U
date_clean: Apr 28 2021
author: Evan Pratten
last_page: ./u1_6_operations_in_2d
next_page: ./u2_1_forces_as_vecs
---

*[Full Note]({{site.baseurl}}/static/pdf/mcv4u/1.7%20Operations%20of%20Vectors%20in%203-D%20(6.7)%20FILL%20(2).pdf)*

## Magnitude in 3D

To find the magnitude of a 3D position vector:

$$
\begin{aligned}
    \vec{OP} &= P(a,b,c)\\
    \vert\vec{OP}\vert &= \sqrt{c^2 + a^2 + b^2}
\end{aligned}
$$

This is used because the triangle of the vector may not fall directly on a standard 2D plane, so we must solve two faces of the triangle at once (see full note for reference).

## Unit vectors

In 3D, $\hat{i}$, $\hat{j}$, and $\hat{k}$ are the basis unit vectors for the positive $x$, $y$, and $z$ axes.

Every vector $ \vec{OP}$ in the plane can be written:
   - In component form: $ \vec{OP} = (a,b,c)$
   - Using unit vectors such that: $ \vec{OP} = a\hat{i} + b\hat{j} + c\hat{k}$

The following rules are true:

$$
\begin{aligned}
    (a,b, c) &= a\hat{i} + b\hat{j} + c\hat{k}\\
    \vert\vec{OP}\vert &= \sqrt{a^2 + b^2 + c^2}
\end{aligned}
$$

## Vectors defined by two points

If a vector is defined by two points $A(x_1,y_1,z_1)$ and $B(x_2, y_2,z_2)$ then:

$$
\begin{aligned}
    \vec{AB} &= (x_2 - x_1, y_2 - y_1, z_2 - z_1)\\
    \vert\vec{AB}\vert &= \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2  + (z_2 - z_1)^2}
\end{aligned}
$$