---
title: "Unit 4: Intersection of Three Planes"
layout: math
course: MCV4U
date_clean: May 25 2021
author: Evan Pratten
last_page: ./u4_3_plane_intersect
next_page: ./u5_1_limit_function
---

*[Full Note]({{site.baseurl}}/static/pdf/mcv4u/4.4%20The%20Intersection%20of%20Three%20Planes%20(9.4)%20FILL%20(2).pdf)*

Given Three planes in $R^3$, there are six possible geometric models for the intersection of the planes.

## Consistent Systems

<table>
<thead>
<tr>
<td>Case</td>
<td>Characteristics</td>
<td>Normals</td>
</tr>
</thead>
<tbody>
<tr>
<td><strong>1</strong></td>
<td markdown="1">
 - The planes intersect at a point
 - There is exactly one solution
</td>
<td markdown="1">
 - Not parallel
 - Not coplanar
</td>
</tr>
<tr>
<td><strong>2</strong></td>
<td markdown="1">
 - The planes intersect in a line
 - There are an infinite number of solutions
 - Requires the use of $1$ parameter
</td>
<td markdown="1">
 - Not parallel
 - Coplanar
</td>
</tr>
<tr>
<td><strong>3</strong></td>
<td markdown="1">
 - The planes intersect in a plane ($3$ coincident planes)
 - There are an infinite number of solutions
 - Requires the use of $2$ parameters
</td>
<td markdown="1">
 - Parallel
 - Coplanar
</td>
</tr>
</tbody>
</table>

## Inconsistent Systems

<table>
<thead>
<tr>
<td>Case</td>
<td>Characteristics</td>
<td>Normals</td>
</tr>
</thead>
<tbody>
<tr>
<td><strong>4</strong></td>
<td markdown="1">
 - Three planes are parallel and at least $2$ are distinct
</td>
<td markdown="1">
 - Parallel
 - Coplanar
</td>
</tr>
<tr>
<td><strong>5</strong></td>
<td markdown="1">
 - Two planes are parallel and distinct
 - The third plane is not parallel to the other two
</td>
<td markdown="1">
 - Not parallel
 - Coplanar
</td>
</tr>
<tr>
<td><strong>6</strong></td>
<td markdown="1">
 - The planes intersect in pairs
 - The pairs intersect in lines that are parallel and distinct
</td>
<td markdown="1">
 - Not parallel
 - Coplanar
</td>
</tr>
</tbody>
</table>