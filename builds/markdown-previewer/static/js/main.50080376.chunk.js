(this["webpackJsonpbuild-a-markdown-previewer"]=this["webpackJsonpbuild-a-markdown-previewer"]||[]).push([[0],{11:function(e,n,t){},12:function(e,n,t){},14:function(e,n,t){"use strict";t.r(n);var i=t(1),r=t.n(i),o=t(5),c=t.n(o),a=(t(11),t(4)),s=t(2),d=(t(12),t(0)),l=function(e){var n=e.icon,t=e.title,r=e.width,o=e.onZoom,c=Object(i.useState)(!1),a=Object(s.a)(c,2),l=a[0],u=a[1];return Object(i.useEffect)((function(){o(l)}),[l]),Object(d.jsxs)("div",{style:{display:"flex",flexDirection:"column",width:null!==r&&void 0!==r?r:"40vw",padding:5},children:[Object(d.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",backgroundColor:"lightslategray",border:"1px solid black",padding:2,color:"white"},children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{children:n}),Object(d.jsx)("span",{style:{fontFamily:"cursive"},children:t})]}),Object(d.jsx)("div",{onClick:function(){return u((function(e){return!e}))},style:{cursor:"pointer"},children:l?"\ud83d\udd0d":"\ud83d\udd0e"})]}),Object(d.jsx)("div",{children:e.children})]})},u=function(e){var n=e.onChange,t=e.markdown,i=e.width,r=e.onZoom;return Object(d.jsx)(l,{icon:"\ud83d\udcdd",title:"Editor",width:i,onZoom:r,children:Object(d.jsx)("textarea",{name:"markdown",id:"editor",value:t,style:{display:"flex",padding:"1rem"},onChange:function(e){return n(e.target.value)}})})},h=t(6),b=t.n(h),f=function(e){var n=e.markdown,t=e.width,i=e.onZoom;return Object(d.jsx)(l,{icon:"\ud83d\udcd2",title:"Preview",width:t,onZoom:i,children:Object(d.jsx)("div",{style:{fontSize:".8rem",width:"100%",height:"100vh",overflow:"auto",backgroundColor:"lavender"},children:Object(d.jsx)("div",{id:"preview",style:{padding:"0 1rem"},dangerouslySetInnerHTML:{__html:b()(n,{breaks:!0})}})})})},j={editor:"40vw",preview:"40vw"};var w=function(){var e=Object(i.useState)("# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n\nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.org), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbered lists too.\n1. Use just 1s if you want!\n1. And last but not least, let's not forget embedded images:\n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)"),n=Object(s.a)(e,2),t=n[0],r=n[1],o=Object(i.useState)(j),c=Object(s.a)(o,2),l=c[0],h=c[1],b=function(e,n){var t=e?Object(a.a)({},l):Object(a.a)({},j);if(e)switch(n){case"editor":t.editor="95vw",t.preview=0;break;case"preview":t.editor=0,t.preview="95vw"}h(t)};return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsxs)("header",{style:{padding:2,fontSize:18,fontWeight:"bold",display:"flex",justifyContent:"space-between",fontFamily:"cursive",width:Object.values(l).every((function(e){return e}))?"80vw":"95vw"},children:[Object(d.jsx)("span",{children:"Markdown Previewer"}),Object(d.jsx)("span",{children:Object(d.jsx)("a",{style:{color:"black",textDecoration:"none"},target:"_blank",rel:"noreferrer",href:"https://github.com/blaze0004/freeCodeCamps",children:"GitHub | @Blaze0004"})})]}),Object(d.jsxs)("main",{style:{display:"flex",flexDirection:"row",justifyContent:"center"},children:[l.editor?Object(d.jsx)(u,{onChange:function(e){r(e)},markdown:t,onZoom:function(e){return b(e,"editor")},width:l.editor}):null,l.preview?Object(d.jsx)(f,{markdown:t,onZoom:function(e){return b(e,"preview")},width:l.preview}):null]})]})},v=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,15)).then((function(n){var t=n.getCLS,i=n.getFID,r=n.getFCP,o=n.getLCP,c=n.getTTFB;t(e),i(e),r(e),o(e),c(e)}))};c.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(w,{})}),document.getElementById("root")),v()}},[[14,1,2]]]);
//# sourceMappingURL=main.50080376.chunk.js.map