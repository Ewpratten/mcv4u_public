---
title: "Unit 1: Vector Operations in 2D"
layout: math
course: MCV4U
date_clean: Apr 27 2021
author: Evan Pratten
last_page: ./u1_5_r2_r3
next_page: ./u1_7_operations_in_3d
---

*[Full Note]({{site.baseurl}}/static/pdf/mcv4u/1.6%20Operations%20of%20Vectors%20in%202-D%20(6.6)%20FILL%20(2).pdf)*

## Unit vectors

Every vector $ \vec{OP}$ in the plane can be written:
   - In component form: $ \vec{OP} = (a,b)$
   - Using unit vectors such that: $ \vec{OP} = a\hat{i} + b\hat{j}$

The following rules are true:

$$
\begin{aligned}
    (a,b) &= a\hat{i} + b\hat{j}\\
    \vert\vec{OP}\vert &= \sqrt{a^2 + b^2}
\end{aligned}
$$

## Vectors defined by two points

If a vector is defined by two points $A(x_1,y_1)$ and $B(x_2, y_2)$ then:

$$
\begin{aligned}
    \vec{AB} &= (x_2 - x_1, y_2 - y_1)\\
    \vert\vec{AB}\vert &= \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}
\end{aligned}
$$