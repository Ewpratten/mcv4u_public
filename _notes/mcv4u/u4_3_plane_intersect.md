---
title: "Unit 4: Intersection of Two Planes"
layout: math
course: MCV4U
date_clean: May 25 2021
author: Evan Pratten
last_page: ./u4_2_linear_systems
next_page: ./u4_4_three_plane_intersect
---

*[Full Note]({{site.baseurl}}/static/pdf/mcv4u/4.3%20The%20Intersection%20of%20Two%20Planes%20(9.3)%20FILL%20(2).pdf)*

Given two planes in $R^3$, there are three possible geometric models for the intersection of the planes:

 1. Two planes intersect along a line
    - There is an infinite number of solutions
 2. Two parallel planes
    - Planes are parallel but non-coincident
    - There is no solution
 3. Two planes are coincident (same plane)
    - There are an infinite number of solutions

---

*See [Unit 3: Cartesian Equation of a Plane](./u3_4_cart_eq_plane) for more info on finding if planes are parallel or perpendicular*

---


## Line of intersection between two planes

Given two planes:

$$
\begin{aligned}
   A_1x + B_1y + C_1z + D_1 &= 0 \\
   A_2x + B_2y + C_2z + D_2 &= 0
\end{aligned}
$$

The parameters of their intersecting line is:

$$
\begin{aligned}
   x &= \frac{B_1 D_2 - B_2 D_1}{A_1 B_2 - A_2 B_1} - \mathbf{t}(B_1 C_2 - B_2 C_1) \\
   y &= \frac{A_1 D_2 - A_2 D_1}{A_1 B_2 - A_2 B_1} - \mathbf{t}(A_1 C_1 - A_2 C_2) \\
   z &= \mathbf{t}
\end{aligned}
$$