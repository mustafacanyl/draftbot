(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{757:function(n,r,t){"use strict";function e(n,r){return r||(r=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(r)}}))}t.d(r,"a",(function(){return e}))},798:function(n,r,t){"use strict";t.d(r,"a",(function(){return k}));var e,o,c=function(){function n(n,r){for(var i=0;i<r.length;i++){var t=r[i];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}return function(r,t,e){return t&&n(r.prototype,t),e&&n(r,e),r}}(),f=(e=["",""],o=["",""],Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(o)}})));function l(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}var w=function(){function n(){for(var r=this,t=arguments.length,e=Array(t),o=0;o<t;o++)e[o]=arguments[o];return l(this,n),this.tag=function(n){for(var t=arguments.length,e=Array(t>1?t-1:0),o=1;o<t;o++)e[o-1]=arguments[o];return"function"==typeof n?r.interimTag.bind(r,n):"string"==typeof n?r.transformEndResult(n):(n=n.map(r.transformString.bind(r)),r.transformEndResult(n.reduce(r.processSubstitutions.bind(r,e))))},e.length>0&&Array.isArray(e[0])&&(e=e[0]),this.transformers=e.map((function(n){return"function"==typeof n?n():n})),this.tag}return c(n,[{key:"interimTag",value:function(n,template){for(var r=arguments.length,t=Array(r>2?r-2:0),e=2;e<r;e++)t[e-2]=arguments[e];return this.tag(f,n.apply(void 0,[template].concat(t)))}},{key:"processSubstitutions",value:function(n,r,t){var e=this.transformSubstitution(n.shift(),r);return"".concat(r,e,t)}},{key:"transformString",value:function(n){return this.transformers.reduce((function(n,r){return r.onString?r.onString(n):n}),n)}},{key:"transformSubstitution",value:function(n,r){return this.transformers.reduce((function(n,t){return t.onSubstitution?t.onSubstitution(n,r):n}),n)}},{key:"transformEndResult",value:function(n){return this.transformers.reduce((function(n,r){return r.onEndResult?r.onEndResult(n):n}),n)}}]),n}(),h=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{onEndResult:function(r){if(""===n)return r.trim();if("start"===(n=n.toLowerCase())||"left"===n)return r.replace(/^\s*/,"");if("end"===n||"right"===n)return r.replace(/\s*$/,"");throw new Error("Side not supported: "+n)}}};function d(n){if(Array.isArray(n)){for(var i=0,r=Array(n.length);i<n.length;i++)r[i]=n[i];return r}return Array.from(n)}var y=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"initial";return{onEndResult:function(r){if("initial"===n){var t=r.match(/^[^\S\n]*(?=\S)/gm),e=t&&Math.min.apply(Math,d(t.map((function(n){return n.length}))));if(e){var o=new RegExp("^.{"+e+"}","gm");return r.replace(o,"")}return r}if("all"===n)return r.replace(/^[^\S\n]+/gm,"");throw new Error("Unknown type: "+n)}}},m=function(n,r){return{onEndResult:function(t){if(null==n||null==r)throw new Error("replaceResultTransformer requires at least 2 arguments.");return t.replace(n,r)}}},v=function(n,r){return{onSubstitution:function(t,e){if(null==n||null==r)throw new Error("replaceSubstitutionTransformer requires at least 2 arguments.");return null==t?t:t.toString().replace(n,r)}}},S={separator:"",conjunction:"",serial:!1},j=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S;return{onSubstitution:function(r,t){if(Array.isArray(r)){var e=r.length,o=n.separator,c=n.conjunction,f=n.serial,l=t.match(/(\n?[^\S\n]+)$/);if(r=l?r.join(o+l[1]):r.join(o+" "),c&&e>1){var w=r.lastIndexOf(o);r=r.slice(0,w)+(f?o:"")+" "+c+r.slice(w+1)}}return r}}},E=function(n){return{onSubstitution:function(r,t){if(null==n||"string"!=typeof n)throw new Error("You need to specify a string character to split by.");return"string"==typeof r&&r.includes(n)&&(r=r.split(n)),r}}},A=function(n){return null!=n&&!Number.isNaN(n)&&"boolean"!=typeof n},R=function(){return{onSubstitution:function(n){return Array.isArray(n)?n.filter(A):A(n)?n:""}}},k=(new w(j({separator:","}),y,h),new w(j({separator:",",conjunction:"and"}),y,h),new w(j({separator:",",conjunction:"or"}),y,h),new w(E("\n"),R,j,y,h),new w(E("\n"),j,y,h,v(/&/g,"&amp;"),v(/</g,"&lt;"),v(/>/g,"&gt;"),v(/"/g,"&quot;"),v(/'/g,"&#x27;"),v(/`/g,"&#x60;")),new w(m(/(?:\n(?:\s*))+/g," "),h),new w(m(/(?:\n\s*)/g,""),h),new w(j({separator:","}),m(/(?:\s+)/g," "),h),new w(j({separator:",",conjunction:"or"}),m(/(?:\s+)/g," "),h),new w(j({separator:",",conjunction:"and"}),m(/(?:\s+)/g," "),h),new w(j,y,h),new w(j,m(/(?:\s+)/g," "),h),new w(y,h),new w(y("all"),h))}}]);