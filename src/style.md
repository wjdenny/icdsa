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

| CSS Class     | Description | Example |
| ------------- | ------- | ----------- |
| `.text-size-rxl` | set a extra large font size that scales with the width of the viewport (to a point) |  |
| `.text-shadow` | set a text shadow | <span class="text-shadow">.text-shadow</span> |
| `.text-justify` | justify text to the margins | <span class="text-justify">.text-justify</span> |
| `.text-line-sm` | set a small line height | <span class="text-line-sm">.text-line-sm</span> |
| `.text-line-lg` | set a large line height |  <span class="text-line-lg">.text-line-lg</span> |
| `.text-nowrap` | disable word wrapping | <span class="text-nowrap">.text-nowrap</span> |
| `.text-center` | center text in its parent element | <span style="display: block;" class="text-center">.text-center</span> |
| `.blur` | blur the text | <span style="blur">.blur</span> |


### Spacing
Margin sets varying levels of outside space around the element. This style provides options for small and medium margins.

| CSS Class     | Example |
| ------------- | ------- |
| `.m-sm`        | <div class="bg-red"><div class="text-center bg-red-4 m-sm">m-sm</div></div> |
| `.m-md`        | <div class="bg-red"><div class="text-center bg-red-4 m-md">m-md</div></div> |

Padding sets varying levels of inside space around the element. This style provides options for small and medium levels of padding.

| CSS Class     | Example |
| ------------- | ------- |
| `.p-sm`        | <div class="bg-red"><div class="text-center bg-red-4 p-sm">p-sm</div></div> |
| `.p-md`        | <div class="bg-red"><div class="text-center bg-red-4 p-md">p-md</div></div> |

### Block sizing
| CSS Class      | Description                             |
| -------------- | ---------------------------------------  |
| `.h-whole`      | sets element height to viewport height  | 
| `.w-whole`      | sets element width to viewport width    | 
| `.h-parent`    | sets element height to parent height    | 
| `.w-parent`    | sets element width to parent width      | 
| `.h-sm`        | sets height to small                    | 
| `.w-sm`        | sets width to small                     | 
| `.no-overflow` | hides overflowing content in an element |  

### Alignment
| CSS Class     | Description | Example |
| ------------- | ------- | ----------- |
| `.list-linear` | linearize a list | <ol class="list-linear"><li>Item 1</li><li>Item 2</li></ul> |
| `.list-spread` | spread list items; used with `.list-linear` | <ol class="list-linear list-spread"><li>Item 1</li><li>Item 2</li></ul> |
| `.flex`     | make element a flex container | |
| `.v-center` | vertically center child elements; used with `.flex` | <div class="flex v-center h-md"><ol class="list-linear list-spread"><li>Item 1</li><li>Item 2</li></ul></div> |
| `.h-center` | horizontally center child elements; used with `.flex` | <div class="flex h-center h-md"><ol class="list-linear list-spread"><li>Item 1</li><li>Item 2</li></ul></div> |
| `.v-base` | vertically place child elements along base; used with `.flex` | <div class="flex v-base h-md"><ol class="list-linear list-spread"><li>Item 1</li><li>Item 2</li></ul></div> |

### Image filters
| CSS Class     | Description | Example |
| ------------- | ------- | ----------- |
| `.blur` | blur the element | <img class="h-sm blur" src="https://robohash.org/.blur?set=set4" /> |
| `.obscure` | obscure the element | <img class="h-sm obscure" src="https://robohash.org/.obscure?set=set4" /> |
| `.image-fit` | center and expands an image within its dimensions | <img class="h-sm image-fit" src="https://robohash.org/.image-fit?set=set4" /> |
| `.image-background` | move an image to the background of its parent element | <div class="text-center"><img style="display: inline;" class="h-sm image-fit image-background" src="https://robohash.org/.image-background?set=set4" /><span>.image-background</span></div> |
