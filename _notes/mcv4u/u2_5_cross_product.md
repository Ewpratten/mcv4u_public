---
title: "Unit 2: Algebraic Cross Product"
layout: math
course: MCV4U
date_clean: May 11 2021
author: Evan Pratten
last_page: ./u2_4_dot_product_algebra
next_page: ./u3_1_param_eqns
---

*[Full Note]({{site.baseurl}}/static/pdf/mcv4u/2.6%20The%20Cross%20Product%20of%20Algebraic%20Vectors%20(7.6)%20V2.pdf)*

*The cross product of two vectors $\vec{a}$ and $\vec{b}$ in $R^3$ is the vector that is perpendicular to both $\vec{a}$ and $\vec{b}$, such that $\vec{a} \times \vec{b}$ forms a right-handed system.*

*The cross product is not commutative, meaning $\vec{a} \times \vec{b} \neq \vec{b} \times \vec{a}$*

$$
\begin{aligned}
    \vec{a} \times \vec{b} &= \vec{c} \\
    \vec{b} \times \vec{a} &= -\vec{c}
\end{aligned}
$$

## Calculating the Cross Product: Simplified

$$
\vec{a} \times \vec{b} = \begin{bmatrix} 
    a_2 b_3 - a_3 b_2 \\
    a_3 b_1 - a_1 b_3 \\
    a_1 b_2 - a_2 b_1 \\
\end{bmatrix}
$$

or

$$
\vec{a} \times \vec{b} = \begin{bmatrix} 
    a_2 b_3 - \bold{b_2 a_3} \\
    a_3 b_1 - \bold{b_3 a_1} \\
    a_1 b_2 - \bold{b_1 a_2} \\
\end{bmatrix}
$$

## Calculating the Cross Product: Cofactor Expansion

$$
\begin{aligned}
    \vec{a} \times \vec{b} &= \begin{bmatrix} 
        \overset{+}{\hat{i}} &  \overset{-}{\hat{j}} &  \overset{+}{\hat{k}} \\
        a_1 & a_2 & a_3 \\
        b_1 & b_2 & b_3 
    \end{bmatrix} \\

    &= \begin{bmatrix} 
        a_2 & a_3 \\
        b_2 & b_3
    \end{bmatrix} \hat{i} - 
    \begin{bmatrix} 
        a_1 & a_3 \\
        b_1 & b_3
    \end{bmatrix} \hat{j} +
    \begin{bmatrix} 
        a_1 & a_2 \\
        b_1 & b_2
    \end{bmatrix} \hat{k} \\

    &=  (a_2 b_3 - a_3 b_2) \hat{i} - 
        (a_3 b_1 - a_1 b_3) \hat{j} +
        (a_1 b_2 - a_2 b_1) \hat{k} \\

\end{aligned}
$$

## Calculation visualized

{:refdef: style="text-align: center;"}
![](http://mechanicsmap.psu.edu/websites/A1_vector_math/crossproduct/images/crossproductmatrix.png)
{: refdef}

## Properties of the Cross Product

If $\vec{p}$, $\vec{q}$, and $\vec{r}$ are vectors in $R^3$ and $ k \in \R$:

| -- | -- |
| Scaler Multiplication | $k(\vec{p} \times \vec{q}) = (k\vec{p}) \times \vec{q} = \vec{p} \times (k \vec{q})$ |
| Distributive Property | $\vec{p} \times (\vec{q} + \vec{r}) = \vec{p} \times \vec{q} + \vec{p} \times \vec{r}$ |
| Non-commutative Property | $\vec{p} \times \vec{q} = -(\vec{q} \times \vec{p})$ |

## The Magnitude of the Cross Product of Geometric Vectors

$$
\begin{aligned}
    \vert\vec{a}\times\vec{b}\vert &= \vert\vec{a}\vert \vert\vec{b}\vert \sin{\theta} \\
    \sin{\theta} &= \frac{\vert\vec{a}\times\vec{b}\vert}{\vert\vec{a}\vert \vert\vec{b}\vert} \\
    \theta &= \sin^{-1}{\frac{\vert\vec{a}\times\vec{b}\vert}{\vert\vec{a}\vert \vert\vec{b}\vert}} \\
\end{aligned}
$$