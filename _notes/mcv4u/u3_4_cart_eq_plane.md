---
title: "Unit 3: Cartesian Equation of a Plane"
layout: math
course: MCV4U
date_clean: May 14 2021
author: Evan Pratten
last_page: ./u3_3_vec_param_line
next_page: ./u4_1_l_p_intersect
---

*[Full Note]({{site.baseurl}}/static/pdf/mcv4u/3.5%20The%20Cartesian%20Equation%20of%20a%20Plane%20(8.5)%20FILL%20(2).pdf)*

The normal vector is a nonzero vector perpendicular to all vectors in the plane. It is useful when:

 - Determining the Cartesian equation of a plane
 - Determining the angle between planes

## Cartesian Equation of $\pi$

he Cartesian (or scalar) equation of a plane in $R^3$:

$$
    Ax +By +Cz +D = 0
$$

With a normal vector:

$$
    \vec{n} = (A,B,C)
$$

## Finding the Cartesian equation of a plane from a normal and point

First, substitute the values of $\vec{n}$ into the equation:

$$
    \vec{n}_Ax + \vec{n}_By + \vec{n}_Cz +D = 0
$$

Then substitute in the given point as the $x$, $y$, and $z$ values to solve for $D$.

<div style="text-align:center;" class="colorinfo" data-title="Note" data-color="magenta" markdown=1>
To determine an equation for a plane you will need two nonzero, non-collinear vectors and a point on the plane.  If you are given the vector or parametric equations then you have all the information you need.
</div>

## Direction vector from non-collinear points

Given points $A$, $B$ and $C$, possible direction vectors would be $\vec{AB}$ and $\vec{AC}$

## Normal of the plane containing multiple points

Given points $A$, $B$ and $C$:

$$
    \vec{n} = \vec{AB} \times \vec{AC}
$$

## Vector equation of a plane

You will need to find any three points on the plane ($A$, $B$ and $C$).

$$
\begin{aligned}
    \vec{m_1} &= B - A \\
    \vec{m_2} &= C - B \\
    \pi (x, y, z) &= A + s (m_{1x}, m_{1y}, m_{1z}) + t (m_{2x}, m_{2y}, m_{2z}) \\
\end{aligned}
$$

## Perpendicular and Parallel planes

 - Perpendicular planes have perpendicular normals
   - $\vec{n_1} \cdot \vec{n_2} = 0$
 - Parallel planes have Parallel normals
   - Normals must be scalar multiples of eachother

## Coincidental planes

Coincidental must:
 - Be parallel
 - Share all points
   - Find a point on one plane, and make sure it works for the other's equation

## Angle between intersecting planes

Use the dot product of the normals of two planes to calculate the angle between them

$$
\begin{aligned}
    \cos{\theta} &= \frac{\vec{n_1} \cdot \vec{n_2}}{\vert\vec{n_1}\vert \vert\vec{n_2}\vert} \\
    \theta &= \cos^{-1}{\frac{\vec{n_1} \cdot \vec{n_2}}{\vert\vec{n_1}\vert \vert\vec{n_2}\vert}} \\
\end{aligned}
$$
