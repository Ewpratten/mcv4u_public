---
title: "Dot products & duality"
layout: math
course: "3B1B Lectures: Linear Algebra"
date_clean: Aug 05 2020
author: Evan Pratten
last_page: ./2020_08_05_Cross_Products
next_page: ./2020_08_05_Nonsquare_Matrices
---

$$
\vec{v} \cdot \vec{w} = \vec{u}
$$

The dot product ($\vec{u}$) of the two vectors $\vec{v}$ and $\vec{w}$ is a scalar that follows the right-hand-rule, where $\vec{v}$ would be your pointer finger, and $\vec{w}$ would be your middle finger.

<div style="text-align:center;" class="colorinfo" data-title = "Note" data-color = "magenta" markdown = 1>
duality roughly refers to "natural but surprising correspondence"
</div>

## Calculating the dot of two vectors

The dot product of these vectors is the dots of the individual components, added together

$$
\begin{bmatrix}
    2\\
    7\\
    1
\end{bmatrix} \cdot \begin{bmatrix}
    8\\
    2\\
    8
\end{bmatrix} = 
2 \cdot 8 + 7 \cdot 2 + 1 \cdot 8
$$

## The sign of the dot

The sign of the dot product of $\vec{v}$ and $\vec{w}$ is determined by the relative positioning of the two vectors to eachother. This can simply be determined via the right hand rule. Although, if $\vec{v}$ and $\vec{w}$ are perfectly perpendicular to eachother, the dot product will be $0$.

## Interesting properties

$$
2\vec{v} \cdot \vec{w} = 2(\vec{v}\cdot\vec{w})
$$


## A visual explication

To visually determine the dot product of $\vec{v}$ and $\vec{w}$, cast $\vec{v}$ on to $\vec{w}$, then multiply the length of the casted vector ($\vec{u}$) by the length of $\vec{w}$ to get the result. This is demonstrated in figure \ref{fig:dot_casting}.

<div align="center">
<script type="text/tikz">
\begin{tikzpicture}

% Grid
\draw[thin,gray!40] (-3.5,-3.5) grid (3.5,3.5);
\draw[<->] (-3.5,0)--(3.5,0) node[right]{$x$};
\draw[<->] (0,-3.5)--(0,3.5) node[above]{$y$};

% Vectors
\draw[line width=2pt,blue,-stealth](0,0)--(1.5,2) node[anchor=south west]{${\vec{v}}$};
\draw[line width=2pt,orange,-stealth](0,0)--(3,0) node[anchor=north]{${\vec{u} \cdot \vec{w}}$};
\draw[line width=2pt,red,-stealth](0,0)--(2,0) node[anchor=north east]{${\vec{w}}$};
\draw[line width=2pt,green,-stealth](0,0)--(1.5,0) node[anchor=north east]{${\vec{u}}$};
\draw[dotted](1.5,2)--(1.5,0) node[midway, right]{cast};


\end{tikzpicture}
</script>
</div>

## Duality

If we have a linear transformation from the 2nd dimension down to the 1st, $\vec{w}$, this matrix can be flipped on it's side (effectively making a vector), and this new vector $\vec{u}$ is the "dual vector", and can be dotted with a vector $\vec{v}$ to get the same result as the transformation.


$$
\begin{gathered}
\vec{w} = \begin{bmatrix} 3 & 1 \end{bmatrix} \\
\vec{u} = \begin{bmatrix} 3 \\ 1 \end{bmatrix} \\
\vec{w}\vec{v} = \vec{u}\cdot\vec{v} 
\end{gathered}
$$
