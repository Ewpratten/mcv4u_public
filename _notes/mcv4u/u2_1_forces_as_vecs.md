---
title: "Unit 2: Forces as Vectors"
layout: math
course: MCV4U
date_clean: May 10 2021
author: Evan Pratten
last_page: ./u1_7_operations_in_3d
next_page: ./u2_2_velocity_vec
---

*[Full Note]({{site.baseurl}}/static/pdf/mcv4u/2.1%20Force%20as%20a%20Vector%20(7.1)%20FILL%20(2).pdf)*

## The Resultant Vector

 - When two or more forces are applied, the net effect is the resultant of all forces
 - The resultant vector is the sum of all force vectors acting on the object.

## The Equilibrant Vector

 - The single force that opposes the resultant of the forces acting on the object
 - When the equilibrant is applied to the object it maintains the object in a state of equilibrium (no forces applied)
 - $\vec{E} = -\vec{r}$

## Vectors in a State of Equilibrium

 - When 3 non-collinear vectors are in a state of equilibrium and are arranged head to tail they form a triangle.
 - The resultant of any two of the forces is opposed by the third force.


## Coplanar points

*Coplanar: in the same plane*

 > In geometry, a set of points in space are coplanar if there exists a geometric plane that contains them all. For example, three points are always coplanar, and if the points are distinct and non-collinear, the plane they determine is unique. \[ [wikipedia](https://en.wikipedia.org/wiki/Coplanarity) \]

 - **Are 3 non-collinear vectors in a state of equilibrium coplanar?**
   -  Yes, a triangle **must** be coplanar

## Determining if a set of forces can produce a state of equilibrium

 - The largest of the forces must be $\leq$ the sum of the other forces

## Resolution of Vectors into Perpendicular Components

 - Takes a single vector or force and decomposes it into 2 component vectors
 - There are an infinite number of ways to resolve any vector, but it is most useful to use horizontal and vertical components

Given the vector $ \vec{f}$, we can produce the components $ \vec{f_x}$ and $ \vec{f_y}$ where:

 - $ \vec{f}$ is a force vector
 - $ \vec{f_x}$ is the horizontal component of $ \vec{f}$
 - $ \vec{f_y}$ is the vertical component of $ \vec{f}$

For the following vector:

{:refdef: style="text-align: center;"}
![]({{site.baseurl}}/static/img/mcv4u/u2-1-vector-res.png)
{:refdef}

We can solve for any of its components, given an angle $\theta$ from the vector to the *x axis*.

<table markdown="1">
<tr>
<td>

$$
\begin{aligned}
    \sin{\theta} &= \frac{\vert \vec{f_y} \vert}{\vert\vec{f}\vert} \\
    \cos{\theta} &= \frac{\vert \vec{f_x} \vert}{\vert\vec{f}\vert} \\
    \vert\vec{f}\vert\sin{\theta} &= \vert \vec{f_y} \vert \\
    \vert\vec{f}\vert\cos{\theta} &= \vert \vec{f_x} \vert \\
\end{aligned}
$$

</td>
<td>

$$
\begin{aligned}
    \sin{\beta} &= \frac{\vert \vec{f_x} \vert}{\vert\vec{f}\vert} \\
    \cos{\beta} &= \frac{\vert \vec{f_y} \vert}{\vert\vec{f}\vert} \\
    \vert\vec{f}\vert\sin{\beta} &= \vert \vec{f_x} \vert \\
    \vert\vec{f}\vert\cos{\beta} &= \vert \vec{f_y} \vert \\
\end{aligned}
$$

</td>
</tr>
</table>