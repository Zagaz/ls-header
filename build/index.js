(()=>{"use strict";var s,e={861:()=>{const s=window.wp.blocks,e=(window.wp.i18n,window.wp.blockEditor),l=window.React,n=window.ReactJSXRuntime,r=JSON.parse('{"UU":"create-block/ls-header"}');(0,s.registerBlockType)(r.UU,{edit:function(){return(0,l.useEffect)((()=>{const s=()=>{window.scrollY>100&&console.log("scroll ok")};return window.addEventListener("scroll",s),()=>{window.removeEventListener("scroll",s)}}),[]),(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{...(0,e.useBlockProps)(),children:(0,n.jsx)("h3",{children:"Aqui é o header"})})})},save:function(){const s=e.useBlockProps.save();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{...s,children:(0,n.jsx)("header",{className:"ud-header",children:(0,n.jsx)("div",{className:"container",children:(0,n.jsx)("div",{className:"row",children:(0,n.jsx)("div",{className:"col-lg-12",children:(0,n.jsxs)("nav",{className:"navbar navbar-expand-lg",children:[(0,n.jsx)("a",{className:"navbar-brand",href:"/",children:(0,n.jsx)("img",{src:window.udSettings.themeUrl+"/assets/images/logo/logo.svg",alt:"logo",className:"img-fluid"})}),(0,n.jsxs)("button",{className:"navbar-toggler ",title:"Toggle navigation menu",children:[(0,n.jsx)("span",{className:"toggler-icon",children:" "}),(0,n.jsx)("span",{className:"toggler-icon",children:" "}),(0,n.jsx)("span",{className:"toggler-icon",children:" "})]}),(0,n.jsx)("div",{className:"navbar-collapse",children:(0,n.jsxs)("ul",{id:"nav",class:"navbar-nav mx-auto",children:[(0,n.jsx)("li",{class:"nav-item",children:(0,n.jsx)("a",{class:"ud-menu-scroll",href:"/#home",children:"Home"})}),(0,n.jsx)("li",{class:"nav-item",children:(0,n.jsx)("a",{class:"ud-menu-scroll",href:"/#features",children:"Features"})}),(0,n.jsx)("li",{class:"nav-item",children:(0,n.jsx)("a",{class:"ud-menu-scroll",href:"/#about",children:"About"})}),(0,n.jsx)("li",{class:"nav-item",children:(0,n.jsx)("a",{class:"ud-menu-scroll",href:"/pricing",children:"Pricing"})}),(0,n.jsx)("li",{class:"nav-item",children:(0,n.jsx)("a",{class:"ud-menu-scroll",href:"/#target_audience",children:"Target audience"})}),(0,n.jsx)("li",{class:"nav-item",children:(0,n.jsx)("a",{class:"ud-menu-scroll",href:"/#contact",children:"Contact"})}),(0,n.jsx)("li",{class:"nav-item",children:(0,n.jsx)("a",{class:"ud-menu-scroll",href:"/posts",children:"Posts"})}),(0,n.jsxs)("li",{class:"nav-item nav-item-has-children",children:[(0,n.jsx)("a",{href:"javascript:void(0)",children:"Language"}),(0,n.jsxs)("ul",{class:"ud-submenu",children:[(0,n.jsx)("li",{class:"ud-submenu-item",children:(0,n.jsx)("a",{class:"ud-submenu-link",href:"/",children:"English"})}),(0,n.jsx)("li",{class:"ud-submenu-item",children:(0,n.jsx)("a",{class:"ud-submenu-link",href:"/fr",children:"Français"})}),(0,n.jsx)("li",{class:"ud-submenu-item",children:(0,n.jsx)("a",{class:"ud-submenu-link",href:"/nb-NO",children:"Norsk bokmål"})}),(0,n.jsx)("li",{class:"ud-submenu-item",children:(0,n.jsx)("a",{class:"ud-submenu-link",href:"/pt-BR",children:"Português Brasil"})})]})]})]})})]})})})})})}),(0,n.jsx)(e.InnerBlocks.Content,{})]})}})}},l={};function n(s){var r=l[s];if(void 0!==r)return r.exports;var a=l[s]={exports:{}};return e[s](a,a.exports,n),a.exports}n.m=e,s=[],n.O=(e,l,r,a)=>{if(!l){var i=1/0;for(t=0;t<s.length;t++){l=s[t][0],r=s[t][1],a=s[t][2];for(var c=!0,d=0;d<l.length;d++)(!1&a||i>=a)&&Object.keys(n.O).every((s=>n.O[s](l[d])))?l.splice(d--,1):(c=!1,a<i&&(i=a));if(c){s.splice(t--,1);var o=r();void 0!==o&&(e=o)}}return e}a=a||0;for(var t=s.length;t>0&&s[t-1][2]>a;t--)s[t]=s[t-1];s[t]=[l,r,a]},n.o=(s,e)=>Object.prototype.hasOwnProperty.call(s,e),(()=>{var s={57:0,350:0};n.O.j=e=>0===s[e];var e=(e,l)=>{var r,a,i=l[0],c=l[1],d=l[2],o=0;if(i.some((e=>0!==s[e]))){for(r in c)n.o(c,r)&&(n.m[r]=c[r]);if(d)var t=d(n)}for(e&&e(l);o<i.length;o++)a=i[o],n.o(s,a)&&s[a]&&s[a][0](),s[a]=0;return n.O(t)},l=self.webpackChunkls_header=self.webpackChunkls_header||[];l.forEach(e.bind(null,0)),l.push=e.bind(null,l.push.bind(l))})();var r=n.O(void 0,[350],(()=>n(861)));r=n.O(r)})();