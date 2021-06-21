---
title: "Unit 4: Line-Plane Intersection"
layout: math
course: MCV4U
date_clean: May 14 2021
author: Evan Pratten
last_page: ./u3_4_cart_eq_plane
next_page: ./u4_2_linear_systems
---

*[Full Note]({{site.baseurl}}/static/pdf/mcv4u/4.1%20Intersection%20of%20a%20line%20with%20a%20Plane,%202%20Lines%20(9.1)%20FILL%20(2).pdf)*

There are three types of intersection:

 - No intersect (parallel)
 - Point intersect
 - Line contained in plane

## Finding the Line-Plane intersection

Given a line with $x$, $y$ and $z$ parametric equations, they can be subbed in to the given plane equation.

With this new equation, solve for $t$. If:

 - There is a single $t$ value
   - There is an intersection point
   - Subbing $t$ back in to the line equations will tell where the intersect is
 - *LS* does not equal *RS*
   - There is no intersection (parallel)
 - *LS* equals *RS*, but there is no solution for $t$
   - The line is in the plane

## Finding the Line-Line intersection

There are four types of intersect:

 - Single-point
 - Coincident (all points)
 - Parallel (no intersect)
 - Skew (no intersect)

If two lines are non-parallel, they either intersect at a point, or are skew. Otherwise, they are coincident or parallel (duh)