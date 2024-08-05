---
title: Authoring Style Guide
layout: base.njk
---

This document provides examples of the Iowa City DSA style guide, as well as the classes and the template functions used for various parts of a website. This is intended to be documentation for Iowa City DSA members to write updates to the website. Cat images lovingly delivered by [Robohash.org](https://robohash.org).

## CSS classes
### Text color
These CSS classes can be used to set the colors of text in a template or Markdown file. It is recommended to stick to the DSA color palette defined here.

| CSS Class       | Example |
| --------------- | ------- |
| `.text-red`     | <span class="text-red">.text-red</span> |
| `.text-red-1`   | <span class="text-red-1">.text-red-1</span> |
| `.text-red-2`   | <span class="text-red-2">.text-red-2</span> |
| `.text-red-3`   | <span class="text-red-3">.text-red-3</span> |
| `.text-red-4`   | <span class="text-red-4">.text-red-4</span> |
| `.text-black`   | <span class="text-black">.text-black</span> |
| `.text-black-1` | <span class="text-black-1">.text-black-1</span> |
| `.text-black-2` | <span class="text-black-2">.text-black-2</span> |
| `.text-black-3` | <span class="text-black-3">.text-black-3</span> |
| `.text-black-4` | <span class="text-black-4">.text-black-4</span> |
| `.text-white` | <span class="text-white">.text-white</span> |

### Background colors
These CSS classes can be used to set the background colors of elements in a template or Markdown file. It is recommended to stick to the DSA color palette defined here.

| CSS Class     | Example |
| ------------- | ------- |
| `.bg-red`     | <span class="bg-red">.bg-red</span> |
| `.bg-red-1`   | <span class="bg-red-1">.bg-red-1</span> |
| `.bg-red-2`   | <span class="bg-red-2">.bg-red-2</span> |
| `.bg-red-3`   | <span class="bg-red-3">.bg-red-3</span> |
| `.bg-red-4`   | <span class="bg-red-4">.bg-red-4</span> |
| `.bg-black`   | <span class="bg-black">.bg-black</span> |
| `.bg-black-1` | <span class="bg-black-1">.bg-black-1</span> |
| `.bg-black-2` | <span class="bg-black-2">.bg-black-2</span> |
| `.bg-black-3` | <span class="bg-black-3">.bg-black-3</span> |
| `.bg-black-4` | <span class="bg-black-4">.bg-black-4</span> |

### Link colors
These CSS classes can be used to set the colors of links in a template or Markdown file. It is recommended to stick to the DSA color palette defined here. These classes must be set on the parent element where the links are; this makes it possible to use for templates.

| CSS Class     | Example |
| ------------- | ------- |
| `.link-red`     | <span class="link-red"><a href="#">.link-red</a></span> |
| `.link-red-1`   | <span class="link-red-1"><a href="#">.link-red-1</a></span> |
| `.link-red-2`   | <span class="link-red-2"><a href="#">.link-red-2</a></span> |
| `.link-red-3`   | <span class="link-red-3"><a href="#">.link-red-3</a></span> |
| `.link-red-4`   | <span class="link-red-4"><a href="#">.link-red-4</a></span> |
| `.link-black`   | <span class="link-black text-black-4"><a href="#">.link-black</a></span> |
| `.link-black-1` | <span class="link-black-1 text-black-4"><a href="#">.link-black-1</a></span> |
| `.link-black-2` | <span class="link-black-2 text-black-4"><a href="#">.link-black-2</a></span> |
| `.link-black-3` | <span class="link-black-3 text-black"><a href="#">.link-black-3</a></span> |
| `.link-black-4` | <span class="link-black-4 text-black"><a href="#">.link-black-4</a></span> |

### Typography classes
These are other CSS classes related to typography that might be useful.

#### Relative font size
Set text to an extra large font size that is relative to the width of the screen.

<div class="text-center text-size-rxl">.text-size-rxl</div>

#### Text shadow
Set a text shadow.

<div class="text-center text-shadow">.text-shadow</div>

#### Align text
Justify text along the margins.

```
<p class="text-justify">Lorem...</p>
```

<p class="text-justify">Lorem ipsum odor amet, consectetuer adipiscing elit. Leo velit dui rhoncus vestibulum velit. Arcu hendrerit suscipit penatibus senectus placerat taciti eget. Sollicitudin conubia aenean dignissim at tempor himenaeos luctus curabitur varius. Nec laoreet ligula tempor magna sit semper. Enim hac platea amet curabitur maximus nulla. Sollicitudin torquent suscipit blandit eu ex quis magna. Euismod facilisi at sollicitudin enim suscipit.</p>

Center text.
```
<p class="text-center">Lorem...</p>
```

<p class="text-center">Lorem ipsum odor amet, consectetuer adipiscing elit. Leo velit dui rhoncus vestibulum velit. Arcu hendrerit suscipit penatibus senectus placerat taciti eget. Sollicitudin conubia aenean dignissim at tempor himenaeos luctus curabitur varius. Nec laoreet ligula tempor magna sit semper. Enim hac platea amet curabitur maximus nulla. Sollicitudin torquent suscipit blandit eu ex quis magna. Euismod facilisi at sollicitudin enim suscipit.</p>

#### Line height adjustments
Adjust line heights in small and large sizing. 

```
<p class="text-line-sm">Lorem...</p>
```

<p class="text-line-sm">Lorem ipsum odor amet, consectetuer adipiscing elit. Leo velit dui rhoncus vestibulum velit. Arcu hendrerit suscipit penatibus senectus placerat taciti eget. Sollicitudin conubia aenean dignissim at tempor himenaeos luctus curabitur varius. Nec laoreet ligula tempor magna sit semper. Enim hac platea amet curabitur maximus nulla. Sollicitudin torquent suscipit blandit eu ex quis magna. Euismod facilisi at sollicitudin enim suscipit.</p>

```
<p class="text-line-lg">Lorem...</p>
```

<p class="text-line-lg">Lorem ipsum odor amet, consectetuer adipiscing elit. Leo velit dui rhoncus vestibulum velit. Arcu hendrerit suscipit penatibus senectus placerat taciti eget. Sollicitudin conubia aenean dignissim at tempor himenaeos luctus curabitur varius. Nec laoreet ligula tempor magna sit semper. Enim hac platea amet curabitur maximus nulla. Sollicitudin torquent suscipit blandit eu ex quis magna. Euismod facilisi at sollicitudin enim suscipit.</p>

<!-- #### Text wraping
Disable word wrapping.

```
<p class="text-nowrap">Lorem...</p>
```

<p class="text-nowrap">Lorem ipsum odor amet, consectetuer adipiscing elit. Leo velit dui rhoncus vestibulum velit. Arcu hendrerit suscipit penatibus senectus placerat taciti eget. Sollicitudin conubia aenean dignissim at tempor himenaeos luctus curabitur varius. Nec laoreet ligula tempor magna sit semper. Enim hac platea amet curabitur maximus nulla. Sollicitudin torquent suscipit blandit eu ex quis magna. Euismod facilisi at sollicitudin enim suscipit.</p> -->

#### Blur
Blur text.

```
<p class="blur">Lorem...</p>
```

<p class="blur">Lorem ipsum odor amet, consectetuer adipiscing elit. Leo velit dui rhoncus vestibulum velit. Arcu hendrerit suscipit penatibus senectus placerat taciti eget. Sollicitudin conubia aenean dignissim at tempor himenaeos luctus curabitur varius. Nec laoreet ligula tempor magna sit semper. Enim hac platea amet curabitur maximus nulla. Sollicitudin torquent suscipit blandit eu ex quis magna. Euismod facilisi at sollicitudin enim suscipit.</p>

### Margins
Margin sets varying levels of outside space around the element. This style provides options for small and medium margins.

<table>
    <tr><pre>.m-sm</pre></tr>
    <tr><td class="bg-red-4"><img class="border m-sm w-sm h-sm" src="https://robohash.org/.m-sm?set=set4"></img></td></tr>
</table>
<table>
    <tr><pre>.m-md</pre></tr>
    <tr><td class="bg-red-4"><img class="border m-md w-sm h-sm" src="https://robohash.org/.m-md?set=set4"></img></td></tr>
</tr></table>

### Padding 
Padding sets varying levels of inside space around the element. This style provides options for small and medium levels of padding.

<table>
    <tr><td class="bg-red-4"><img class="border p-sm w-sm h-sm" src="https://robohash.org/.p-sm?set=set4"></img></td></tr>
    <tr><pre>.p-sm</pre></tr>
</table>
<table>
    <tr><td class="bg-red-4"><img class="border p-md w-sm h-sm" src="https://robohash.org/.p-md?set=set4"></img></td></tr>
    <tr><pre>.p-md</pre></tr>
</tr></table>

### Block sizing
#### .h-whole
Set element height to viewport height.

```
<div class="h-whole"></div>
```

<div class="h-whole bg-red-4"></div>

#### .w-whole
Set element width to viewport width.

```
<div class="w-whole"></div>
```

<i>Not shown here so it doesn't break the page</i>

#### .h-quarter
Set element height to a quarter of the viewport height.

```
<div class="h-quarter"></div>
```

<div class="h-quarter bg-red-4"></div>

#### .h-sm, .w-sm
Set element height (or width) to a small size.

```
<div class="h-sm w-sm"></div>
```

<div class="h-sm w-sm bg-red-4"></div>

### Alignment
| CSS Class     | Description |
| ------------- | ------- | 
| `.list-linear` | linearize a list | 
| `.list-spread` | spread list items; used with `.list-linear` |
| `.flex`     | make element a flex container | 
| `.v-center` | vertically center child elements; used with `.flex` |
| `.h-center` | horizontally center child elements; used with `.flex` |
| `.v-base` | vertically place child elements along base; used with `.flex` |

### Image filters
#### .blur
Blur the element.

<div><img class="h-sm blur" src="https://robohash.org/.blur?set=set4" /></div>

#### .obscure
Obscure the image.

<div><img class="h-sm obscure" src="https://robohash.org/.obscure?set=set4" /></div>

#### .image-fit
Cover, center and fit the image within its dimensions.

<div>
    <img class="h-sm image-fit" src="https://robohash.org/.image-fit?set=set4" />
</div>

#### .image-background
Move the image to the background with its parent element.

<div style="height: 8rem;">
    <img class="h-sm image-background" src="https://robohash.org/.image-background?set=set4" />
    <code>.image-background</code>
</div>