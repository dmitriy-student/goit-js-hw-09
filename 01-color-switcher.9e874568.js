!function(){var t=document.querySelector("button[data-start]"),n=document.querySelector("button[data-stop]"),e=document.body,o=null;t.addEventListener("click",(function(){t.disabled=!0,o=setInterval((function(){e.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3)})),n.addEventListener("click",(function(){t.disabled=!1,clearInterval(o)}))}();
//# sourceMappingURL=01-color-switcher.9e874568.js.map
