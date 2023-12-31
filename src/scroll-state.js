/**
 * @name scroll-state.js
 * @version 1.0
 * @author luca mack
 * @description 
 * looks for [data-scroll-state] element on page and inserts the correct values (top/bottom, up/down)
 * inserts the following attributes
 *  - data-scroll-state-scrolled="{int}"
 *  - data-scroll-state-scrolled-relative="{float}"
 *  - data-scroll-state-has-scroll="{bool}"
 *  - data-scroll-state-is-scrolling="{bool}"
 *  - data-scroll-state-document-height="{int}"
*/

(function () {
  var scrollStateElements = document.querySelectorAll('[data-scroll-state]');
  var topRange = 1;
  var bottomRange = 1;
  var debounceTimeout = null;
  var debounceDelay = 100; // Delay in milliseconds
  // Set initial is-scrolling and has-scrolled to false after DOMContentLoaded
  debounce(() => {
    Array.prototype.forEach.call(scrollStateElements, (element) => {
      element.setAttribute('data-scroll-state-is-scrolling', 'false');
      element.setAttribute('data-scroll-state-has-scrolled', 'false');
      element.setAttribute('data-scroll-state-scrolled', window.scrollY);
      element.setAttribute('data-scroll-state-scrolled-relative', `0%`);
      element.setAttribute('data-scroll-state-document-height', document.body.offsetHeight);

    });
  }, debounceDelay);
  /**
   * @name setScrollState
   * @param {string} element 
   * @param {string} state 
   */
  function setScrollState(element, state) {
    element.setAttribute('data-scroll-state', state);
  }
  /**
   * @name debounce
   * @param {function} func 
   * @param {integer} delay 
   */
  function debounce(func, delay) {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(func, delay);
  }
  /**
   * @name handleScroll
   */
  function handleScroll() {
    var currentScrollPosition = window.scrollY;
    var scrollState;

    // Set is-scrolling to true when scrolling
    Array.prototype.forEach.call(scrollStateElements, (element) => {
      element.setAttribute('data-scroll-state-is-scrolling', 'true');
    });

    if (currentScrollPosition > lastScrollPosition) {
      scrollState = 'down';
    } else if (currentScrollPosition < lastScrollPosition) {
      scrollState = 'up';
    } else {
      return; // No change in scroll position
    }

    if (currentScrollPosition < topRange) {
      scrollState = 'top';
    } else if (currentScrollPosition > document.documentElement.scrollHeight - window.innerHeight - bottomRange) {
      scrollState = 'bottom';
    }

    Array.prototype.forEach.call(scrollStateElements, (element) => {
      element.setAttribute('data-scroll-state-scrolled', `${currentScrollPosition}`);
      element.setAttribute('data-scroll-state-has-scrolled', 'true');
      element.setAttribute('data-scroll-state-scrolled-relative', `${Math.floor(currentScrollPosition / document.body.offsetHeight * 100)}%`);
      setScrollState(element, scrollState);
    });

    lastScrollPosition = currentScrollPosition;

    // Set is-scrolling to false after scrolling stops
    debounce(() => {
      Array.prototype.forEach.call(scrollStateElements, (element) => {
        element.setAttribute('data-scroll-state-is-scrolling', 'false');
      });
    }, debounceDelay);
  }

  var lastScrollPosition = window.scrollY;
  window.addEventListener('DOMContentLoaded', handleScroll);
  window.addEventListener('scroll', handleScroll);
})();

