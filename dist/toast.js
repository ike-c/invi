!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.Invi=n():t.Invi=n()}(window,function(){return function(t){var n={};function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}return e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:o})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)e.d(o,r,function(n){return t[n]}.bind(null,r));return o},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=2)}([function(t,n,e){"use strict";e.d(n,"j",function(){return r}),e.d(n,"g",function(){return i}),e.d(n,"e",function(){return u}),e.d(n,"f",function(){return c}),e.d(n,"h",function(){return a}),e.d(n,"b",function(){return f}),e.d(n,"i",function(){return s}),e.d(n,"c",function(){return d}),e.d(n,"d",function(){return l}),e.d(n,"a",function(){return v});var o=function(){return(o=Object.assign||function(t){for(var n,e=1,o=arguments.length;e<o;e++)for(var r in n=arguments[e])Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t}).apply(this,arguments)};function r(t){var n=Object.prototype.toString.call(t).split(" ")[1].slice(0,-1).toLowerCase();return n.match(/element$/)?"element":n}var i="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0;function u(t,n,e){var o=this;o.addEventListener(t,function(t){var r=function(t,n,e){void 0===e&&(e=document.body);for(var o,r=[],i=Array.from(e.querySelectorAll(n));t&&!~i.indexOf(t);)t=t!==e&&!(null!=(o=t)&&o.nodeType==o.DOCUMENT_NODE)&&t.parentNode;return t&&r.indexOf(t)<0&&r.push(t),r}(t.target,n,o)[0];r&&e(r,t)})}function c(t,n){return Array.prototype.forEach.call(t,n)}function a(t,n){var e=o({},t);if("object"!==r(n))return e;for(var i in n){var u=t[i],c=n[i],f=r(u);null!=u?f===r(c)&&(e[i]="object"===f?a(u,c):c):e[i]=c}return e}var f=void 0!==document.createElement("div").style.animation?"animationend":"webkitAnimationEnd",s=void 0!==document.createElement("div").style.transition?"transitionend":"webkittransitionEnd";function d(t,n,e,o){void 0===o&&(o={passive:!0});var r=function(){e(),t.removeEventListener(n,r,o)};t.addEventListener(n,r,o)}function l(t,n){for(var e in n)t.style[e]=n[e]}var v=function(){function t(){this.events={}}return t.prototype.on=function(t,n){(this.events[t]||(this.events[t]=[])).push(n)},t.prototype.off=function(t,n){this.events[t]&&this.events[t].splice(this.events[t].indexOf(n)>>>0,1)},t.prototype.removeAllListeners=function(){this.events={}},t.prototype.emit=function(t){for(var n=[],e=1;e<arguments.length;e++)n[e-1]=arguments[e];(this.events[t]||[]).slice().map(function(t){t.apply(void 0,n)})},t}()},,function(t,n,e){"use strict";e.r(n),e.d(n,"toast",function(){return i});var o=e(0),r={content:"",animation:!0,duration:1e3,unsafe:!1,host:document.body},i=function(t){return void 0===t&&(t={}),function(t){var n=document.createElement("div"),e=t.classes||{};return n[t.unsafe?"innerHTML":"innerText"]=t.content,e.host&&(n.className=e.host),t.host.appendChild(n),new Promise(function(r){function i(){setTimeout(function(){return r()},t.duration)}e.enter&&t.animation?(n.classList.add(e.enter),Object(o.c)(n,o.b,function(){n.classList.remove(e.enter),i()})):i()}).then(function(){if(e.leave&&t.animation)return new Promise(function(t){n.classList.add(e.leave),Object(o.c)(n,o.b,function(){n.classList.remove(e.leave),r(),t()})});function r(){t.host.removeChild(n),n=null}r()})}(Object(o.h)(r,"object"===Object(o.j)(t)?t:{content:String(t)}))};i.config=function(t){r=Object(o.h)(r,t)}}])});