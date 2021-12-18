(this["webpackJsonpbuild-a-pomodoro-clock"]=this["webpackJsonpbuild-a-pomodoro-clock"]||[]).push([[0],[,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var s,c=n(1),a=n.n(c),r=n(4),i=n.n(r),o=(n(10),n(11),n(2)),l=n(5),u=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){var e=document.getElementById("beep");if(e)return n?(e.loop=!0,e.src="/assets/beep.wav",e.play().then((function(){s=setTimeout((function(){a(!1)}),2e3)})).catch((function(e){console.log(e)}))):(e.src="",e.loop=!1),function(){s&&clearInterval(s)}}),[n]),[a]},b=function(e){var t=Object(c.useCallback)((function(e){return e>3600||e<=0}),[]),n=Object(c.useReducer)((function(n,s){switch(s){case"increment":return t(n+60)?n:n+60;case"decrement":return t(n-60)?n:n-60;case"reset":return e;default:return n}}),e),s=Object(o.a)(n,2);return[s[0],s[1]]},j=null,d=function(e){var t=Object(c.useState)(e),n=Object(o.a)(t,2),s=n[0],a=n[1],r=Object(c.useState)({type:"reset",payload:e}),i=Object(o.a)(r,2),l=i[0],u=i[1];return Object(c.useEffect)((function(){var t,n;switch(l.type){case"play":j=setInterval((function(){a((function(e){return e-1}))}),1e3);break;case"pause":null!==j&&clearInterval(j);break;case"reset":null!==j&&clearInterval(j),a(null!==(t=l.payload)&&void 0!==t?t:e);break;case"resetAndPlay":null!==j&&clearInterval(j),a(null!==(n=l.payload)&&void 0!==n?n:e),u({type:"play"})}return function(){"play"===l.type&&j&&clearInterval(j)}}),[l,e]),[s,l.type,a,u]};var f=function(){var e=Object(c.useState)("session"),t=Object(o.a)(e,2),n=t[0],s=t[1],a=function(e){var t=Object(c.useRef)();return Object(c.useEffect)((function(){t.current=e}),[e]),t.current}(n),r=b(300),i=Object(o.a)(r,2),l=i[0],j=i[1],f=d(1500),m=Object(o.a)(f,4),O=m[0],p=m[1],h=m[2],v=m[3],x=b(1500),g=Object(o.a)(x,2),k=g[0],y=g[1],N=u(),L=Object(o.a)(N,1)[0];Object(c.useEffect)((function(){"reset"===p&&h(k)}),[k]),Object(c.useEffect)((function(){if(a!==n){if("reset"===p)return;L(!0),setTimeout((function(){v({type:"resetAndPlay",payload:"session"===n?k:l})}),1e3)}}),[n]),Object(c.useEffect)((function(){O<=0&&(s((function(e){return"break"===e?"session":"break"})),v({type:"pause"}))}),[O]);return{breakLength:l,sessionLength:k,timer:O,mode:n,timerState:p,playPause:function(){"reset"===p&&h(k),v({type:"play"!==p?"play":"pause"})},reset:function(){v({type:"reset"}),j("reset"),y("reset"),L(!1),s("session")},manageLength:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=t?"increment":"decrement";switch(e){case"break":j(n);break;case"session":y(n)}}}},m=(n(12),n(0)),O=function(e){Object(l.a)(e);var t=f(),n=Object(c.useState)(0),s=Object(o.a)(n,2),a=s[0],r=s[1];Object(c.useEffect)((function(){r(t.timer)}),[t.timer]);var i=Object(c.useMemo)((function(){for(var e="",n=t.timer+3600;n>=0;n--)Number.isInteger(n/60)?e+="|":e+=Number.isInteger(n/10)?".":"";return e}),[t.timer,a]);return Object(m.jsxs)("div",{className:"pomodoro",children:[Object(m.jsx)("div",{className:"timer",children:Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{id:"timer-label",className:"timer-label cursive",children:"break"===t.mode?"Break":"Session"}),Object(m.jsx)("span",{id:"time-left",className:"time-left cursive",children:function(){var e=Math.floor(t.timer/60),n=(e<10?"0":"")+(e+.01*Math.floor(t.timer-60*e)).toFixed(2);return"".concat(n.replace(".",":"))}()})]})}),Object(m.jsx)("span",{className:"time",children:i}),Object(m.jsx)("span",{className:"seperator"}),Object(m.jsx)("span",{className:"arrow",children:"\u2b9d"}),Object(m.jsx)("span",{className:"upper"}),Object(m.jsx)("span",{className:"lower"}),Object(m.jsxs)("div",{id:"break",className:"cursive",children:[Object(m.jsx)("div",{id:"break-label",children:"Break Length"}),Object(m.jsxs)("div",{className:"buttons",children:[Object(m.jsx)("button",{id:"break-decrement",onClick:function(){return t.manageLength("break")},children:Object(m.jsx)("i",{className:"fas fa-arrow-left"})}),Object(m.jsx)("div",{id:"break-length",children:t.breakLength/60}),Object(m.jsx)("button",{id:"break-increment",onClick:function(){return t.manageLength("break",!0)},children:Object(m.jsx)("i",{className:"fas fa-arrow-right"})})]})]}),Object(m.jsxs)("div",{id:"session",className:"cursive",children:[Object(m.jsx)("div",{id:"session-label",children:"Session Length"}),Object(m.jsxs)("div",{className:"buttons",children:[Object(m.jsx)("button",{id:"session-decrement",onClick:function(){return t.manageLength("session")},children:Object(m.jsx)("i",{className:"fas fa-arrow-left"})}),Object(m.jsx)("div",{id:"session-length",children:t.sessionLength/60}),Object(m.jsx)("button",{id:"session-increment",onClick:function(){return t.manageLength("session",!0)},children:Object(m.jsx)("i",{className:"fas fa-arrow-right"})})]})]}),Object(m.jsx)("div",{id:"timer",children:Object(m.jsxs)("div",{id:"actions",className:"buttons",children:[Object(m.jsx)("button",{id:"start_stop",onClick:function(){return t.playPause()},children:"play"!==t.timerState?Object(m.jsx)("i",{className:"fas fa-play"}):Object(m.jsx)("i",{className:"fas fa-pause"})}),Object(m.jsx)("button",{id:"reset",onClick:function(){return t.reset()},children:Object(m.jsx)("i",{className:"fas fa-sync-alt"})})]})})]})};var p=function(){return Object(m.jsxs)("div",{className:"App",id:"pomodora-clock",children:[Object(m.jsx)(O,{}),Object(m.jsx)("audio",{id:"beep",src:""})]})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),s(e),c(e),a(e),r(e)}))};i.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(p,{})}),document.getElementById("root")),h()}],[[14,1,2]]]);
//# sourceMappingURL=main.67927bae.chunk.js.map