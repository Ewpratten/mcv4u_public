---
title: "Unit 7: Increasing & Decreasing Functions"
layout: math
course: MCV4U
date_clean: June 8 2021
author: Evan Pratten
last_page: ./u7_1_high_order_derivative
next_page: ./u7_3_critical_points
---

*[Full Note]({{site.baseurl}}/static/pdf/mcv4u/7.2%20Increasing-Decreasing%20Functions%20(4.1)%20FILL%20(2).pdf)*

## Local extrema

The local extrema of a function describe the *extremes* of the function inside a given viewing window. The extrema come in two forms:

 - Local maximum
   - Occurs when the function changes from positive to negative
 - Local minimum
   - Occurs when the function changes from negative to positive

<div class="desmos-graph" style="height:400px; width: 100%">
    <expression data-id ="base_fn" data-label="f(x)">f(x) = (((x+2)(x-2)^2)-5) *0.5</expression>
    <expression data-id="max" data-label="Local Max">y=2.241</expression>
    <expression data-id="min" data-label="Local Min">y=-2.5</expression>
</div>

<table><thead><tr><td>
Interval of Increase</td><td>
Interval of Decrease</td></tr></thead><tbody><tr><td markdown="1">
 - The graph rises from left to right
 - For any $x$ interval such that $x1 < x2$, it follows that $f(x_1) < f(x_2)$
 - The slope of the tangent is positive
 - $f^\prime(x) > 0$
</td><td markdown="1">
 - The graph falls from left to right
 - For any $x$ interval such that $x1 < x2$, it follows that $f(x_1) > f(x_2)$
 - The slope of the tangent is negative
 - $f^\prime(x) < 0$
</td></tr></tbody></table>

