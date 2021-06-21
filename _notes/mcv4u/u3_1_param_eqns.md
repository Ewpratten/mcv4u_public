---
title: "Unit 3: Vector & Parametric Equations"
layout: math
course: MCV4U
date_clean: May 11 2021
author: Evan Pratten
last_page: ./u2_5_cross_product
next_page: ./u3_2_cart_coords
---

*[Full Note]({{site.baseurl}}/static/pdf/mcv4u/3.1%20Vector%20and%20Parametric%20Equations%20of%20a%20Line%20(8.1)%20FILL%20(2).pdf)*

 - We will use a model similar to $y = mx + b$, i.e. we will need to define a slope and a point
 - We will use a **direction** vector to describe the slope of the line and a **position** vector to indicate a point that can be found on the line

<table>
<tr>
<td>Direction Vector</td>
<td><ul>
<li>Same vector in many positions</li>
<li>the x and y components of the direction vector are called <strong>direction numbers</strong> and are used describe the vector</li>
</ul></td>
</tr>
<tr>
<td>Position Vector</td>
<td><ul>
<li>A vector that runs from the origin to any point on the line</li>
</ul></td>
</tr>
</table>

## Equations

For the following:
 - $t$ is some parameter
 - $\vec{r_0}$ is the vector from $(0,0)$
 - The point $(x_0, y_0)$  and $\vec{m}$ form the direction vector with components $(a, b)$

### Vector equation of a line

$$
    \vec{r} = \vec{r_O} + t\vec{m}, t \in \R
$$

### Vector equation of a line (component form)

$$
(x,y) = \underbrace{(x_0, y_0)}_{\text{Initial Point}} + t \underbrace{(a, b)}_{\text{"Slope Direction"}}
$$


### Parametric Equation of a line

$$
\begin{aligned}
    x &= x_0 + ta \\
    y &= y_0 + tb, t \in \R
\end{aligned}
$$

## Finding the vector equation of a line

Given a line through points $w$ and $v$:

$$
\begin{aligned}
    \vec{m} &= \vec{wv} \\
    (a, b) &= v - w \\
    (x, y) &= w + \underbrace{t(a, b)}_{t = 1}
\end{aligned}
$$

$(x, y)$ may also be:

$$
    (x, y) = \bold{v} + \underbrace{t(a, b)}_{t = 1}
$$

## Finding a random point on the line of a Parametric Equation

$t$ can be subbed for anything to find a random point on a line.

## Finding where a line crosses the $X$ axis

Given an equation:

$$
    (x, y) = (x_0, y_0) + t(a, b)
$$

We can split it into separate equations for each component:

$$
\begin{aligned}
    x &= x_0 + at\\
    y &= y_0 + bt
\end{aligned}
$$

In the case of finding intersection with the $x$ axis, we can solve for $t$ with:

$$
\begin{aligned}
    y &= y_0 + bt\\
    0 &= y_0 + bt\\
    t &= \frac{-y_0}{b}\\
\end{aligned}
$$

Then sub $t$ back in to either the $(x, y)$ or $x$ equations.