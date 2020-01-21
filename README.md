# AngularJs-Chips

AngularJs-Chips is the angular based component. You can use it to add dynamic chips or free form tags. check samples directory for more information.

### Install:

`bower install angularjs-chips --save-dev`

Include js file

`<script type="text/javascript" src="/bower_components/angularjs-chips/dist/angularjs-chips.min.js"></script>`

Include css file:

`<link rel="stylesheet" type="text/css" href="/bower_components/angularjs-chips/dist/main.css">`

Include in you application module.

`angular.module('sample',['angularjs.chips']);`

Basic Markup

```
<chips ng-model="inputdemo.companies">
    <chip-tmpl>
        <div class="default-chip">
            {{chip}}
            <span class="glyphicon glyphicon-remove" remove-chip></span>
        </div>
    </chip-tmpl>
    <input chip-control></input>
</chips>
```

Using Promise Markup

```
<chips defer ng-model="usingPromiseObj.countries">
    <chip-tmpl>
        <div class="default-chip">
            {{chip.defer.name}}
            <span>({{chip.defer.fl}})</span>
            <span class="glyphicon glyphicon-remove" remove-chip></span>
        </div>
    </chip-tmpl>
    <input chip-control></input>
</chips>
```
<br>

### Examples:

<p><a href="https://codepen.io/vbauermann/pen/jOEXqgM" target="_blank">Edit</a></p>
<img src="others/Basic_example.gif" style="border: 1px solid #000000">

<p><a href="https://codepen.io/vbauermann/pen/wvBRWwK" target="_blank">Edit</a></p>
<img src="others/Custom_example.gif" style="border: 1px solid #000000">

<p><a href="https://codepen.io/vbauermann/pen/LYEMZPg" target="_blank">Edit</a></p>
<img src="others/Using_Promise_string_example.gif" style="border: 1px solid #000000">

<p><a href="https://codepen.io/vbauermann/pen/JjowKjB" target="_blank">Edit</a></p>
<img src="others/Using_Promise_obj_example.gif" style="border: 1px solid #000000">

<p><a href="https://codepen.io/vbauermann/pen/BayvzNo" target="_blank">Edit</a></p>
<img src="others/Using_typeahead_example2.gif" style="border: 1px solid #000000">


### MIT License (MIT)

Copyright (c) 2020 Vitor Bauermann (bauermannvitor@gmail.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
