!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var r=o("h6c0i");function i(e,t){var n=Math.random()>.3;new Promise((function(o,r){setTimeout((function(){n?o({position:e,delay:t}):r({position:e,delay:t})}),t)})).then((function(e){var t=e.position,n=e.delay;r.Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(n,"ms"))})).catch((function(e){var t=e.position,n=e.delay;r.Notify.failure("❌ Rejected promise ".concat(t," in ").concat(n,"ms"))}))}document.querySelector("form").addEventListener("submit",(function(e){e.preventDefault();for(var t=e.target[0].valueAsNumber,n=e.target[1].valueAsNumber,o=e.target[2].valueAsNumber,r=1;r<=o;r++)i(r,t),t+=n;e.currentTarget.reset()}))}();
//# sourceMappingURL=03-promises.118089c8.js.map
