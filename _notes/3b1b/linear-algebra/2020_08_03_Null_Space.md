---
title: "Vector space & Null space"
layout: math
course: "3B1B Lectures: Linear Algebra"
date_clean: Aug 03 2020
author: Evan Pratten
last_page: ./2020_08_02_Eigen
next_page: ./2020_08_04_The_Determinant
---

## Rank

| Rank      | Meaning                             |
|-----------|--------------------------------------|
| Full Rank | Rank number = column count of matrix |
| Rank 1    | Transforms to a line                 |
| Rank 2    | Transforms to a plane                |
| Rank 3    | Transforms to a cube                 |
| ...       | ...                                  |

 - Column space means: 
   - All possible values in $A \vec{v}$
 - Null space (kernel) means:
   - All values a long a line or plane that get "squished" to $(0,0)$ after a transform to a lower rank

## Rewriting a system of equations as a matrix

Say we have the following system

$$
\begin{gathered}
2x +5y +3z = -3 \\
4x + 8x = 0 \\
1x + 3y = 2
\end{gathered}
$$

If we subs in some 0s, we can line up all the variables

$$
\begin{gathered}
2x + 5y + 3z = -3 \\
4x + 0y + 8z = 0 \\
1x + 3y + 0z = 2
\end{gathered}
$$

Then convert it to a matrix

$$
\begin{bmatrix}2 & 5 & 3 \\ 4 & 0 & 8 \\ 1 & 3 & 0\end{bmatrix}\begin{bmatrix}x\\y\\z\end{bmatrix} = \begin{bmatrix}-3\\0\\2\end{bmatrix}
$$

This matrix is layed out in the form of $A\vec{x}=\vec{v}$. To solve for all variables, we just need to do the following:

$$
\begin{gathered}
A^{-1} A \vec{x} = A^{-1} \vec{v} \\
\vec{x} = A^{-1} \vec{v}
\end{gathered}
$$
