<p>A clone of 
<br /><a href="https://github.com/PaulB-H/matrix-digital-rain" target="_blank">https://github.com/PaulB-H/matrix-digital-rain</a>
<br />...which is a fork from this commit:
<br /><a href="https://github.com/mavidser/matrix-digital-rain/commit/6e037f39bda5343ae749283fabb4a61361371e2d" target="_blank">https://github.com/mavidser/matrix-digital-rain/commit/6e037f39bda5343ae749283fabb4a61361371e2d</a>
<br />...of this project:
<br /><a href="https://github.com/mavidser/matrix-digital-rain" target="_blank">https://mavidser.github.io/matrix-digital-rain</a></p>

<hr />

<p>My goals with this:</p>
<ul>
<li><strike>Stop the gray trails that appear after a while</strike></li>
<li>Allow more columns to come down at once</li>
<li>Allow variable speeds between columns</li>
<li>Learn about canvas and how this effect works</li>
</ul>

<p>Stop gray trails:
<br />Commit - faf441b09090a7de8dd3ac6ca48020c6cb9fa66c
<br />Fix - Print a small semi-transparent black square on the space the new character will display, along with slightly darkening the canvas-wide layer that is applied every draw loop.</p>

<h4>Before</h4>
<img src="https://github.com/PaulB-H/digitalrain/blob/main/digitalrain-before.gif">

<h4>After</h4>
<img src="https://github.com/PaulB-H/digitalrain/blob/main/digitalrain-after.gif">

<sub>Original readme below:</sub>

<hr />

# Matrix

This is an implementation of the [Matrix digital rain](http://en.wikipedia.org/wiki/Matrix_digital_rain) in the browser, using HTML5 Canvas.

Built primarily to learn the basics of Canvas element.

---

Based on [Bareel's implementation](http://runnable.com/VIo70Vp1oIZ_yxO9/matrix-rain-html5-canvas-javascript-css) of the Matrix rain.
