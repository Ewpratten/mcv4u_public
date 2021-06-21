---
title: "Unit 5: The Derivative Function"
layout: math
course: MCV4U
date_clean: May 28 2021
author: Evan Pratten
last_page: ./u5_4_poly_derivative
next_page: ./u6_1_power_rule
---

*[Full Note]({{site.baseurl}}/static/pdf/mcv4u/5.6%20The%20Derivative%20Function%20FILL%20(2).pdf)*

For a given function, $f(x)$, imagine determining the instantaneous rate of change (tangent slope
or $m_{tan}$) of the function for every $x$ value of the function. The relationship between $x$ and its corresponding tangent slope $m_{tan}$ creates a new function
called the *derivative function*. This derivative function is denoted as one of $f^\prime(x)$, $\frac{dy}{dx}$, or $y^\prime$.

## What do derivative functions look like?

### Constant functions

<table style="width:100%">
<tr><td>
<p style="text-align:center">$f(x) = 2$</p>
<div class="desmos-graph" style="height:400px; width: 100%">
    <expression data-id ="base_fn" data-label="f(x)">f(x) = 2</expression>
    <expression data-id ="deriv_fn" data-label="f'(x)">g(x) = \frac{d}{dx}f(x)</expression>
</div>
</td><td>
<p style="text-align:center">$f(x) = -4$</p>
<div class="desmos-graph" style="height:400px; width: 100%">
    <expression data-id ="base_fn" data-label="f(x)">f(x) = -4</expression>
    <expression data-id ="deriv_fn" data-label="f'(x)">g(x) = \frac{d}{dx}f(x)</expression>
</div>
</td></tr>
</table>


### Linear functions

<table style="width:100%">
<tr><td>
<p style="text-align:center">$f(x) = 2x-5$</p>
<div class="desmos-graph" style="height:400px; width: 100%">
    <expression data-id ="base_fn" data-label="f(x)">f(x) = 2x-5</expression>
    <expression data-id ="deriv_fn" data-label="f'(x)">g(x) = \frac{d}{dx}f(x)</expression>
</div>
</td><td>
<p style="text-align:center">$f(x) = -0.5x +3$</p>
<div class="desmos-graph" style="height:400px; width: 100%">
    <expression data-id ="base_fn" data-label="f(x)">f(x) = -0.5x +3</expression>
    <expression data-id ="deriv_fn" data-label="f'(x)">g(x) = \frac{d}{dx}f(x)</expression>
</div>
</td></tr>
</table>

### Quadratic functions

<table style="width:100%">
<tr><td>
<p style="text-align:center">$f(x) = x^2$</p>
<div class="desmos-graph" style="height:400px; width: 100%">
    <expression data-id ="base_fn" data-label="f(x)">f(x) = x^2</expression>
    <expression data-id ="deriv_fn" data-label="f'(x)">g(x) = \frac{d}{dx}f(x)</expression>
</div>
</td><td>
<p style="text-align:center">$f(x) = -(x+3)(x-4)$</p>
<div class="desmos-graph" style="height:400px; width: 100%">
    <expression data-id ="base_fn" data-label="f(x)">f(x) = -(x+3)(x-4)</expression>
    <expression data-id ="deriv_fn" data-label="f'(x)">g(x) = \frac{d}{dx}f(x)</expression>
</div>
</td></tr>
</table>

### Cubic functions

<table style="width:100%">
<tr><td>
<p style="text-align:center">$f(x) = 0.5(x+4)(x+1)(x-3)$</p>
<div class="desmos-graph" style="height:400px; width: 100%">
    <expression data-id ="base_fn" data-label="f(x)">f(x) = 0.5(x+4)(x+1)(x-3)</expression>
    <expression data-id ="deriv_fn" data-label="f'(x)">g(x) = \frac{d}{dx}f(x)</expression>
</div>
</td><td>
<p style="text-align:center">$f(x) = -0.25(x+2)^2(x-3)$</p>
<div class="desmos-graph" style="height:400px; width: 100%">
    <expression data-id ="base_fn" data-label="f(x)">f(x) = -0.25(x+2)^2(x-3)</expression>
    <expression data-id ="deriv_fn" data-label="f'(x)">g(x) = \frac{d}{dx}f(x)</expression>
</div>
</td></tr>
</table>

## Summary

| Input type | Derivative type |
| ---------- | --------------- |
| Constant   | Zero            |
| Linear     | Constant        |
| Quadratic  | Linear          |
| Cubic      | Quadratic       |