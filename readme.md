# `scoll-state.js`

`scroll-state.js` is a js library that provides a simple html api for checking of the useragent is currently scrolling up, down, is on top, bottom, how many pixels from the top, and if the user has scrolled once or if the user is currently scrolling.

## setup

```html
<body data-scroll-state>
    ... 
    <script src="scroll-state.js">    
</body>
```

## api

once the scroll-state attribute is set, the js will insert the following attributes onto the element:
- `data-scroll-state="{string}"`
- `data-scroll-state-scrolled="{int}"`
- `data-scroll-state-scrolled-relative="{float}"`
- `data-scroll-state-has-scroll="{bool}"`
- `data-scroll-state-is-scrolling="{bool}"`
- `data-scroll-state-document-height="{int}"`

the rendered DOM will look something like this:

```html
<body data-scroll-state="top" data-scroll-state-scrolled="0" data-scroll-state-scrolled-relative="0%"  data-scroll-state-has-scrolled="false"  data-scroll-state-is-scrolling="false" data-scroll-state-document-height="12305">
    ... 
    <script src="scroll-state.js">    
</body>
```