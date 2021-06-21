---
title: "Unit 6: The Chain Rule"
layout: math
course: MCV4U
date_clean: June 8 2021
author: Evan Pratten
last_page: ./u6_3_product_rule
next_page: ./u7_1_high_order_derivative
---

*[Full Note]({{site.baseurl}}/static/pdf/mcv4u/6.5%20Chain%20Rule%20(2.5)%20Day%201%20FILL%20(2).pdf)*


## The Chain Rule

| Newton | Liebniz |
| -- | -- |
| $ h^\prime(x)=f^\prime[g(x)]g^\prime(x)$ | $\frac{dy}{dx}=\frac{dy}{du}\cdot\frac{du}{dx}$ |

*Assuming $f(x)$, $g(x)$, $u$, and $y$ are differentiable functions*

Another way of writing this is:

$$
\frac{d}{dx}g(h(x)) = \frac{dg}{dh}(h(x))\frac{dh}{dx}(x)
$$

### Function composition

Function composition is when one function is put in another. For example:

$$
\begin{aligned}
    g(x) &= sin(x) \\
    h(x) &= x^2 \\
    g(h(x)) &= sin(x^2) \\
\end{aligned}
$$

