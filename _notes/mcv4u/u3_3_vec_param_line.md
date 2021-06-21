---
title: "Unit 3: Vector & Parametric Equations of a Line"
layout: math
course: MCV4U
date_clean: May 14 2021
author: Evan Pratten
last_page: ./u3_2_cart_coords
next_page: ./u3_4_cart_eq_plane
---

*[Full Note]({{site.baseurl}}/static/pdf/mcv4u/3.3%20Vector%20and%20Parametric%20Equations%20of%20a%20Line%20in%20R3%20(8.3)%20FILL%20(2).pdf)*

## Equations of a line

Where $r_O$ is the vector from $(0,0,0)$ and the point $(x_0,y_0,z_0)$ and $m$ is the direction vector with components $(a,b,c)$: 

Vector Equation of a Line:

$$
    \vec{r} = \vec{r_O} + t\vec{m}, t \in \R
$$

Vector equation of a line (component form):

$$
    (x,y,z) = (x_0, y_0, z_0) + t (a,b,c)
$$

Parametric Equation of a line:

$$
\begin{aligned}
    x &= x_0 + ta \\
    y &= y_0 + tb \\
    z &= z_0 + tc, t \in \R \\
\end{aligned}
$$

## The vector equation of a line through two points

Given the points $J$ and $K$:

$$
\begin{aligned}
    \vec{m} &= K-J \\
    \vec{r} &= J +t\vec{m}, t \in \R \\
    (x,y,z) &= (J_x, J_y, J_z) +t(\vec{m}_x, \vec{m}_y, \vec{m}_z), t \in \R \\

\end{aligned}
$$

## Intersection of lines

 - In $R^2$, any two non-parallel lines **must** intersect
 - In $R^3$, two lines are **unlikely** to intersect (skew lines)

## Determining if lines intersect in $R^3$

To find if lines intersect in $R^3$

 - Ensure each component is equal ($A_x = B_x$, ...)
 - If any of the components of each line are not equal, the line does not intersect


