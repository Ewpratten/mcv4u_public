---
title: "The determinant"
layout: math
course: "3B1B Lectures: Linear Algebra"
date_clean: Aug 04 2020
author: Evan Pratten
last_page: ./2020_08_03_Null_Space
next_page: ./2020_08_05_Cross_Products
---

A measurement how much a linear transformation stretches an area or volume.

If we take a unit vector, and transform it by only $\hat{i}$ and $\hat{j}$:

$$
det(\begin{bmatrix}
    3 & 0\\
    0 & 2
\end{bmatrix}) = 6
$$

The resulting vector's area has grown by $6$. This is the determinant. Now, look at a simple transform that only shears:

$$
det(\begin{bmatrix}
    1 & 1\\
    0 & 1
\end{bmatrix}) = 1
$$

Since there is no scaling of $\hat{i}$ or $\hat{j}$, the determinant remains $1$.

## Calculating the determinant of non-squares

Like a derivative, we can simply fill an irregular / curvy shape with small squares to the desired precision to determine its determinant.

## Determinant of 0

If a transform goes down a dimension, the determinant will always be $0$ (since the lower dimension removes one of the required axes to measure volume in the original dimension)

## Other notes

 - Any transform that looks like it "flips over" is called "inverting orientation". If this happens, the determinant will always be less than $0$. But $abs(det(...))$ is still the correct scaling factor
 - As the angle between $\hat{i}$ and $\hat{j}$ approaches $0 \text{\textdegree}$, the determinant gets closer to $0$. Once it passes, it get negative.
 - If the "right hand rule" stops working after a transformation, the determinant has become negative

## Calculating the determinant of a 2D linear transform

$$
det(\begin{bmatrix}
    a & b\\
    c & d
\end{bmatrix}) = ad - bc
$$


## Interesting property

Here is an interesting property of the determinant of two matrices ($m_1$ and $m_2$) that grant raised:

$$
det(m_1 \cdot m_2) = det(m_1) \cdot det(m_2)
$$
