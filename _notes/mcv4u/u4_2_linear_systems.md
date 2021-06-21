---
title: "Unit 4: Linear Systems of Equations"
layout: math
course: MCV4U
date_clean: May 14 2021
author: Evan Pratten
last_page: ./u4_1_l_p_intersect
next_page: ./u4_3_plane_intersect
---

*[Full Note]({{site.baseurl}}/static/pdf/mcv4u/4.2%20Solving%20Linear%20Systems%20of%20Equations%20(9.2)%20MATRICES.pdf)*

## Properties of linear systems

 - A linear system of equations can have **zero**, **one** or an **infinite number** of solutions
 - A system of equations is **consistent** if it has either **one** solution or an **infinite number** of solutions
 - A system of equations is **inconsistent** if it has **no** solutions.
 - Two systems are defined as **equivalent** if every solution to one system is also a solution to the second system of equations, and vice versa.

## Solving a system

We must create a simplified *equivalent* system using elementary operations.

### Elementary operations

 - Equations are allowed to be multiplied by a nonzero constant
 - Any pair of equations may be interchanged
 - Any equation may be added to another equation in non-zero multiples

### Example

Given the equations $3x +2y = 8$ and $2x -5y = -12$, we can start by building a matrix:

$$
\left[
\begin{array}{cc|c}
    3 & 2 & 8 \\
    2 & -5 & -12
\end{array}
\right]
$$

The goal is to simplify. We can multiply by $2$ and $-3$ to produce a matrix where one colum is of the same multiple:

$$
    
\left[
\begin{array}{cc|c}
    3 & 2 & 8 \\
    2 & -5 & -12
\end{array}
\right]

\begin{array}{c} ^\times2\\^\times3 \end{array}

=

\left[
\begin{array}{cc|c}
    6 & 4 & 16 \\
    -6 & 15 & 36
\end{array}
\right]

$$

With this new matrix, the $x$ colum cancels itself out:

$$
\left[
\begin{array}{cc|c}
    0 & 4 & 16 \\
    0 & 15 & 36
\end{array}
\right]
$$

We can add the remaining rows together:

$$
\left[
\begin{array}{cc|c}
    0 & 19 & 52
\end{array}
\right]
$$

Producing the new equation:

$$
\begin{aligned}
    19y &= 52 \\
    y &= \frac{52}{19}
\end{aligned}
$$

{:refdef: style="text-align: center;"}
![]({{site.baseurl}}/static/img/mcv4u/u4-2-2x3matrix.png)
{: refdef}

### How to solve three equations

Let's say we end up with the following matrix to solve:

$$
\left[
\begin{array}{ccc|c}
    1 & -2 & -2 & -9\\
    2 & -5 & 1 & 3 \\
    -3 & 6 & 2 & 8
\end{array}
\right]
$$

We are looking for an end result similar to an identity matrix, where the first row is the only row with an $x$ value, the second row does not have an $x$, and the third only has a $z$.

We can do this by applying $R_2 -2R_1$ and $R_3 + 3R_1$ to the matrix

$$
\left[
\begin{array}{ccc|c}
    1 & -3 & -2 & -9\\
    2 & -5 & 1 & 3 \\
    -3 & 6 & 2 & 8
\end{array}
\right]

\xrightarrow[R_3 + 3R_1]{R_2 -2R_1}

\left[
\begin{array}{ccc|c}
    1 & -3 & -2 & -9\\
    0 & 1 & 5 & 21 \\
    0 & -3 & -4 & -19
\end{array}
\right]
$$

Now, the first and second rows are good, and we just need to get rid of the $y$ of the third row. This can be done with $R_3 +3R_2$

$$
\left[
\begin{array}{ccc|c}
    1 & -3 & -2 & -9\\
    0 & 1 & 5 & 21 \\
    0 & -3 & -4 & -19
\end{array}
\right]

\xrightarrow[R_3 +3R_2]{}

\left[
\begin{array}{ccc|c}
    1 & -3 & -2 & -9\\
    0 & 1 & 5 & 21 \\
    0 & 0 & 11 & 44
\end{array}
\right]
$$

This leaves us with the following equations:

$$
\begin{aligned}
    x - 3y - 2z &= -9 \\
    y + 5z &= 21 \\
    11z &= 44 \\
\end{aligned}
$$

Solving and substituting these in the correct order (bottom to top) will produce the answer:

$$
(x, y, z) = (2, 1, 4)
$$

{:refdef: style="text-align: center;"}
![]({{site.baseurl}}/static/img/mcv4u/u4-2-3x4matrix.png)
{: refdef}
