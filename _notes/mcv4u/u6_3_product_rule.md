---
title: "Unit 6: The Product Rule"
layout: math
course: MCV4U
date_clean: June 7 2021
author: Evan Pratten
last_page: ./u6_2_differentiation
next_page: ./u6_4_chain_rule
---

*[Full Note]({{site.baseurl}}/static/pdf/mcv4u/6.3%20Product%20&%20Quotient%20Rule%20(2.3%202.4).pdf)*

## The Product Rule

| Newton | Liebniz |
| -- | -- |
| $p^\prime(x)=f^\prime(x)g(x)+f(x)g^\prime(x)$ | $\frac{d}{dx}(uv)=\frac{du}{dx}v+\frac{dv}{dx}u$ |

*Assuming $f(x)$, $g(x)$, $u$, and $v$ are differentiable functions*

### Thinking using area

Given a square who's side lengths are defined by the functions $f(x)$ and $g(x)$, the derivative is equal to the sum of the extra area added by $dx$.

From 3B1B:

![]({{site.baseurl}}/static/img/mcv4u/u6-3-product-area.png)

Generalized as:

![]({{site.baseurl}}/static/img/mcv4u/u6-3-product-area-general.png)


## Extended Product Rule

For a product of three functions. If $p(x) = f(x)g(x)h(x)$, then:

$$
p^\prime(x) = f^\prime(x) g(x) h(x) + f(x) g^\prime(x) h(x) + f(x) g(x) h^\prime(x)
$$

## The Quotient Rule

<table><thead><tr>
<td>Newton</td>
<td>Liebniz</td>
</tr></thead><tbody><tr>
<td markdown="1">
If $h(x) = \frac{f(x)}{g(x)}$, then:

$$
    h^\prime(x) = \frac{f^\prime(x)g(x) - f(x)g^\prime(x)}{[g(x)]^2}
$$
</td>
<td markdown="1">
If $u$ and $v$ are functions of $x$:

$$
\frac{d}{dx}(\frac{u}{v}) = \frac{\frac{du}{dx}v - \frac{dv}{dx}u}{v^2}
$$
</td>
</tr></tbody></table>

*Assuming $f(x)$, $g(x)$, $u$, and $v$ are differentiable functions*

