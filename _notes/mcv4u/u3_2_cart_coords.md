---
title: "Unit 3: Cartesian Equation of a Line"
layout: math
course: MCV4U
date_clean: May 12 2021
author: Evan Pratten
last_page: ./u3_1_param_eqns
next_page: ./u3_3_vec_param_line
---

*[Full Note]({{site.baseurl}}/static/pdf/mcv4u/3.2%20Cartesian%20Equations%20of%20a%20Line%20(8.2)%20FILL%20(2).pdf)*


The *slope-y-intercept form* equation of a line is:

$$
y = mx + b
$$

The *Cartesian* equation of a line is:

$$
ax+by+c = 0
$$

Every line needs an **initial point** and a **direction** to form a vector describing it.

## Determining the Vector and Parametric equations of a line

Given the equation $y=mx+b$, we can find the initial point by setting $x$ to $0$.

$$
\begin{aligned}
    y &= mx + b\\
    x &= 0\\
    y &= 0m + b\\
    \vec{r_0} &= \begin{bmatrix} 0 \\ 0m+b \end{bmatrix}
\end{aligned}
$$

The direction vector is the slope of the equation, so the following $m$ value would have this conversion:

$$
\begin{aligned}
    m &= -2 \\
    m &= \frac{-2}{1} \\
    \vec{m} &= \begin{bmatrix} -2 \\ 1 \end{bmatrix}
\end{aligned}
$$

These values can then be filled in to:

$$
    \vec{r} = \vec{r_O} + t\vec{m}, t \in \R 
$$

The resulting parametric equations would be:

$$
\begin{aligned}
    x &= \vec{r_O}_x + \vec{m}_x t \\
    y &= \vec{r_O}_y + \vec{m}_y t \\
    t &\in \R
\end{aligned}
$$

## Determining the *Cartesian* equation of a line

Given the line formula from the last note:

$$
\begin{aligned}
    \vec{r} &= \vec{r_O} + t\vec{m}, t \in \R \\
    (x,y) &= (x_0, y_0) + t (a, b)
\end{aligned}
$$

We know:

 - A point on the line ($\vec{r_O}$)
 - The $m$ value ($m = \frac{b}{a}$)

With these, our line equation becomes:

$$
\begin{aligned}
    y &= \frac{B}{A} x + b
\end{aligned}
$$

With this, just reorder the equation to solve $b$, then reorder again into the following form:

$$
    - mx + y - b = 0
$$

## The Normal Vector $\vec{n}$

The normal vector:

 - A line is drawn perpendicular to the line L from the origin. This perpendicular line is called the **normal axis**
 - There are an infinite number of normal vectors on the normal axis
 - The normal is perpendicular to any vector on the given line
 - The Cartesian equation and the normal are related through the coefficients $A$ and $B$

$$
\begin{aligned}
    Ax + By + C &= 0 \\
    \vec{n} &= (A,B)
\end{aligned}
$$

Some notes about lines and their normals:

 - If $L_1$ and $L_2$ are parallel, then their normals are scalar multiples
 - If $L_1$ and $L_2$ are perpendicular, then their normals are also perpendicular

$$
\vec{n_1} \cdot \vec{n_2} = 0
$$