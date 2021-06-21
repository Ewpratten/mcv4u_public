---
title: "Unit 2: Geometric Dot Product"
layout: math
course: MCV4U
date_clean: May 10 2021
author: Evan Pratten
last_page: ./u2_2_velocity_vec
next_page: ./u2_4_dot_product_algebra
---

*[Full Note]({{site.baseurl}}/static/pdf/mcv4u/2.3%20Dot%20Product%20of%20Geometric%20Vectors%20&%20Applications%20(7.3).pdf)* | 
*[See Also]({{site.baseurl}}/notes/3b1b/linear-algebra/2020_08_05_Dot_Products.html)*

## The Dot Product

 - *aka*: the "scalar product" because the result is a scalar
 - Produces a positive scalar result when $0 \leq \theta \lt 90\degree$ because $\cos{\theta} \gt 0$
 - Produces zero when $\theta = 90\degree$ because $\cos{\theta} = 0$
 - Produces a negative scalar result when $90 \lt \theta \leq 180\degree$ because $\cos{\theta} \lt 0$

### Formula

$$
\vec{a} \cdot \vec{b} = \vert\vec{a}\vert\vert\vec{b}\vert\cos{\theta} \\
\{0 \leq \theta \leq 180\}
$$

### Properties of the Dot Product

| -- | -- |
| Commutative Property | $\vec{u} \cdot \vec{v} = \vec{v} \cdot \vec{u}$ |
| Associative Property | $(k\vec{u}) \cdot \vec{v} = k(\vec{u} \cdot \vec{v}) = \vec{u} \cdot (k\vec{v})$ |
| Distributive Property | $\vec{p} \cdot (\vec{q} + \vec{r}) = \vec{p} \cdot \vec{q} + \vec{p} \cdot \vec{r}$ |
| For any vector $\vec{u}$ | $\vec{u} \cdot \vec{u} = \vert\vec{u}\vert^2$ <br> $\vec{u} \cdot \vec{u} = \vert\vec{u}\vert \vert\vec{u}\vert \cos{0}$|
| For perpendicular vectors $\vec{u}$ and $\vec{v}$ | $\vec{u} \cdot \vec{v} = 0$ |

## Applications of Dot Product - Work

 - Work is defined as the product of the displacement $\vec{s}$ under and applied force $\vec{f}$ along the line of displacement. The resulting unit is joules (J).
 - The component of $\vec{f}$ in the direct of $\vec{s}$ can be calculated using $\vert\vec{f}\vert\cos{\theta}$. This calculation is also referred to as the scalar "projection of $\vec{f}$  onto $\vec{s}$".


$$
\begin{aligned}
    W &= displacement \cdot force \\
    W &= \vec{s} \cdot \vec{f} \\
    W &= \vert\vec{s}\vert\vert\vec{f}\vert\cos{\theta}
\end{aligned}
$$

### An example

*A crate on a ramp is hauled $8m$ up the ramp under a constant force of $20N$ applied at an angle of $30\degree$ to the ramp. Find the work done.*

$$
\begin{aligned}
    W &= \vec{f} \cdot \vec{s} \\
    &= (20)(8)\cos{30} \\
    &= 138.6J
\end{aligned}
$$