---
title: "Cross products"
layout: math
course: "3B1B Lectures: Linear Algebra"
date_clean: Aug 05 2020
author: Evan Pratten
last_page: ./2020_08_04_The_Determinant
next_page: ./2020_08_05_Dot_Products
---

If we have two vectors, $\vec{v}$ and $\vec{w}$, and we use them as two connecting sides of a parallelogram, the area of the resulting parallelogram is actually the cross product between $\vec{v}$ and $\vec{w}$ (see figure below). This operation follows the right-hand-rule, and the result is actually a vector along the thumb (where $\vec{v}$ is the pointer finger and $\vec{w}$ is the middle finger)


<div align="center">
<script type="text/tikz">
\begin{tikzpicture}

% Grid
\draw[thin,gray!40] (-2,-2) grid (2,2);
\draw[<->] (-2,0)--(2,0) node[right]{$x$};
\draw[<->] (0,-2)--(0,2) node[above]{$y$};

% Fill
\draw [blue, fill=yellow] (0,0) -- (0.2,1) -- (1.2,1.2) -- (1,0.2);

% Vectors
\draw[line width=2pt,blue,-stealth](0,0)--(0.2,1) node[anchor=south west]{$\vec{v}$};
\draw[line width=2pt,red,-stealth](0,0)--(1,0.2) node[anchor=north east]{$\vec{w}$};

\end{tikzpicture}
</script>
</div>

## Computing the scalar length of a cross product

$$
\begin{bmatrix}
    3\\
    1
\end{bmatrix} \times \begin{bmatrix}
    2\\
    -1
\end{bmatrix} = 
det(
    \begin{bmatrix}
        3 & 2\\
        1 & -1
    \end{bmatrix}
)
$$


## An example calculation

$$
\begin{bmatrix}
    -3\\
    1
\end{bmatrix} \times \begin{bmatrix}
    2\\
    1
\end{bmatrix} = 
det(
    \begin{bmatrix}
        -3 & 2\\
        1 & 1
    \end{bmatrix}
) = -3 \cdot 1 - 2 \cdot 1 = -5
$$

$$
(3\vec{v}) \times \vec{w} = 3(\vec{v}\times\vec{w})
$$

## Computing the actual vector of a cross product

The cross product of two vectors is not actually a number, but a vector in the 3rd dimension. Here is how to calculate this vector:

$$
\begin{bmatrix}
    v_1 \\
    v_2 \\
    v_3
\end{bmatrix} \times \begin{bmatrix}
    w_1 \\
    w_2 \\
    w_3
\end{bmatrix} = det(
    \begin{bmatrix}
        \hat{i} & v_1 & w_1 \\
        \hat{j} & v_2 & w_2 \\
        \hat{k} & v_3 & w_3 
    \end{bmatrix}
)
$$

Given this, the following calculation is true. See figure \ref{fig:cross_vector} for a 3D representation of this equation:

$$
\begin{bmatrix}
    0 \\
    0 \\
    2
\end{bmatrix} \times \begin{bmatrix}
    0 \\
    2 \\
    0
\end{bmatrix} = \begin{bmatrix}
    -4 \\
    0 \\
    0
\end{bmatrix}
$$

<div align="center">
<script type="text/tikz">
\begin{tikzpicture}

% Axes
\draw[thick,->] (0,0,0) -- (1,0,0) node[anchor=north east]{$x$};
\draw[thick,->] (0,0,0) -- (-5,0,0) node[anchor=north east]{$x$};
\draw[thick,->] (0,0,0) -- (0,3,0) node[anchor=north west]{$y$};
\draw[thick,->] (0,0,0) -- (0,-1,0) node[anchor=north west]{$y$};
\draw[thick,->] (0,0,0) -- (0,0,3) node[anchor=south]{$z$};
\draw[thick,->] (0,0,0) -- (0,0,-1) node[anchor=south]{$z$};

% Vectors
\draw[line width=2pt,blue,-stealth](0,0,0)--(0,0,2) node[anchor=south east]{$\vec{v}$};
\draw[line width=2pt,red,-stealth](0,0,0)--(0,2,0) node[anchor=north east]{$\vec{w}$};
\draw[line width=2pt,green,-stealth](0,0,0)--(-4,0,0) node[anchor=north east]{$\vec{u}$};

\end{tikzpicture}
</script>
</div>