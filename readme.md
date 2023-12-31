# Scroll-State.js

## Version 1.0

### Author: Luca Mack

`scroll-state.js` is a lightweight JavaScript utility designed to monitor and reflect the scroll state of a web page. It targets elements with the `[data-scroll-state]` attribute and dynamically updates various data attributes to reflect the current scroll position and state.

### Description

This script observes the scroll behavior of the page and provides real-time feedback on the scroll position, direction, and the presence of scrolling. It's particularly useful for creating dynamic and responsive UI effects based on the user's scroll actions.

### Features

- **Scroll Position Tracking**: Tracks and reports the vertical scroll position as a raw number and a percentage of the total document height.
- **Scroll Direction Detection**: Detects and indicates the scroll direction as 'up' or 'down'.
- **Top/Bottom Range Detection**: Identifies when the user has scrolled to the top or bottom of the page.
- **Scroll State Indicators**: Provides boolean flags indicating whether the page is currently being scrolled and whether any scroll has occurred.

### Attributes Inserted

- `data-scroll-state-scrolled`: The current scroll position from the top of the document (in pixels).
- `data-scroll-state-scrolled-relative`: The current scroll position relative to the total document height (as a percentage).
- `data-scroll-state-has-scroll`: Boolean indicating whether any scroll has occurred (`true` or `false`).
- `data-scroll-state-is-scrolling`: Boolean indicating whether the page is currently being scrolled (`true` or `false`).
- `data-scroll-state-document-height`: The total height of the document (in pixels).

### Implementation

1. **Include the Script**: Include `scroll-state.js` in your HTML file before the closing `</body>` tag.
   ```html
   <script src="path/to/scroll-state.js"></script>
   ```
2. **Mark Elements**: Add the `data-scroll-state` attribute to any elements you want to monitor.
   ```html
   <div data-scroll-state></div>
    ```
3. **Customization**: (Optional) Customize the topRange and bottomRange variables within the script to adjust the thresholds for detecting the top and bottom scroll positions.

### Usage Notes

- The script uses a debounce mechanism to optimize performance and reduce excessive function calls during rapid scrolling.
- Custom styles or behaviors can be applied by targeting the elements with the updated data attributes in your CSS or JavaScript.


