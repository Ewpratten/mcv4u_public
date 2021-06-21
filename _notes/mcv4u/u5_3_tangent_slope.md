---
title: "Unit 5: Slope of Tangent & RoC"
layout: math
course: MCV4U
date_clean: May 28 2021
author: Evan Pratten
last_page: ./u5_2_limit_props
next_page: ./u5_4_poly_derivative
---

*[Full Note]({{site.baseurl}}/static/pdf/mcv4u/5.3%20Slope%20of%20the%20Tangent%20and%20Rate%20of%20Change(1.2,1.3)%20FILL%20(2).pdf)*

How do we determine the tangent of a curve at point P?
 - The tangent is a straight line that is constructed at point P on the curve in such a way, that it has the exact slope of the curve at that particular point.

How do we get the tangent at just *one* point if the slope requires *two* points?

 - Recall: The slope of a line. $m = \frac{y_2 - y_1}{x_2 - x_1}$
 - Since two points are needed, we use secants with
point Q sliding closer to point P
 - The slope of a tangent to a curve at point P is simply the limit of the slopes of the secants PQ as Q moves closer to P
   - $m_{tangent} = \lim\limits_{Q \rarr P} m_{secant PQ}$

<div class="desmos-graph" style="height:600px">
    <expression data-id = "curve">f(x) = -(x - 3)^2 + 5</expression>
    <expression data-id ="point_p_x">p_x = 0</expression>
    <expression data-id ="point_p" data-label="P">p = (p_x, f(p_x))</expression>
    <expression data-id ="point_q_x">q_x = 3.5</expression>
    <expression data-id ="point_q" data-label="Q">q = (q_x, f(q_x))</expression>
    <expression data-id ="secant_m">m = \frac{f(q_x) - f(p_x)}{q_x - p_x}</expression>
    <expression data-id="secant" data-label="secant">y-f(p_x) = m(x - p_x)</expression>
</div>

Let $Q$ be a point that is a horizontal distance of $h$ units away from point $P$

{:refdef: style="text-align: center;"}
![]({{site.baseurl}}/static/img/mcv4u/u5-3-tangent.png)
{:refdef}

<table>
<thead>
<tr>
<td>Slope of the secant</td>
<td>Slope of the tangent</td>
</tr>
</thead>
<tbody>
<tr>
<td>
$$
\begin{aligned}
    m &= \frac{y_2 - y_1}{x_2 - x_1} \\
    &= \frac{f(a +h) - f(a)}{(a+h) - a} \\
    &= \frac{f(a +h) - f(a)}{h} \\
\end{aligned}
$$
</td>
<td>
$$
\begin{aligned}
    m &= \lim\limits_{\Delta x \rarr 0} \frac{\Delta y}{\Delta x} \\
     &= \lim\limits_{h \rarr 0} \frac{f(a +h) - f(a)}{h} \\
\end{aligned}
$$

If the limit exists.
</td>
</tr>
</tbody>
</table>