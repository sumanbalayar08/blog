(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{9361:function(e,t){"use strict";t.Z=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}},1118:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(4076)}])},1210:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8045:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(9361).Z,i=n(4941).Z,o=n(3929).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.src,n=e.sizes,a=e.unoptimized,s=void 0!==a&&a,x=e.priority,p=void 0!==x&&x,j=e.loading,C=e.lazyRoot,L=void 0===C?null:C,_=e.lazyBoundary,z=e.className,O=e.quality,R=e.width,E=e.height,M=e.style,N=e.objectFit,P=e.objectPosition,I=e.onLoadingComplete,T=e.placeholder,B=void 0===T?"empty":T,D=e.blurDataURL,U=c(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),q=d.useContext(m.ImageConfigContext),H=d.useMemo((function(){var e=g||q||f.imageConfigDefault,t=o(e.deviceSizes).concat(o(e.imageSizes)).sort((function(e,t){return e-t})),n=e.deviceSizes.sort((function(e,t){return e-t}));return l({},e,{allSizes:t,deviceSizes:n})}),[q]),W=U,Z=n?"responsive":"intrinsic";"layout"in W&&(W.layout&&(Z=W.layout),delete W.layout);var V=S;if("loader"in W){if(W.loader){var J=W.loader;V=function(e){e.config;var t=c(e,["config"]);return J(t)}}delete W.loader}var G="";if(function(e){return"object"===typeof e&&(y(e)||function(e){return void 0!==e.src}(e))}(t)){var F=y(t)?t.default:t;if(!F.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(F)));if(D=D||F.blurDataURL,G=F.src,(!Z||"fill"!==Z)&&(E=E||F.height,R=R||F.width,!F.height||!F.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(F)))}var K=!p&&("lazy"===j||"undefined"===typeof j);((t="string"===typeof t?t:G).startsWith("data:")||t.startsWith("blob:"))&&(s=!0,K=!1);v.has(t)&&(K=!1);H.unoptimized&&(s=!0);var X,Q=i(d.useState(!1),2),Y=Q[0],$=Q[1],ee=i(h.useIntersection({rootRef:L,rootMargin:_||"200px",disabled:!K}),3),te=ee[0],ne=ee[1],re=ee[2],ie=!K||ne,oe={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},le={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ae=!1,se={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:N,objectPosition:P},ce=k(R),de=k(E),ue=k(O);0;var fe=Object.assign({},M,se),he="blur"!==B||Y?{}:{backgroundSize:N||"cover",backgroundPosition:P||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(D,'")')};if("fill"===Z)oe.display="block",oe.position="absolute",oe.top=0,oe.left=0,oe.bottom=0,oe.right=0;else if("undefined"!==typeof ce&&"undefined"!==typeof de){var me=de/ce,xe=isNaN(me)?"100%":"".concat(100*me,"%");"responsive"===Z?(oe.display="block",oe.position="relative",ae=!0,le.paddingTop=xe):"intrinsic"===Z?(oe.display="inline-block",oe.position="relative",oe.maxWidth="100%",ae=!0,le.maxWidth="100%",X="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(ce,"%27%20height=%27").concat(de,"%27/%3e")):"fixed"===Z&&(oe.display="inline-block",oe.position="relative",oe.width=ce,oe.height=de)}else 0;var pe={src:b,srcSet:void 0,sizes:void 0};ie&&(pe=w({config:H,src:t,unoptimized:s,layout:Z,width:ce,quality:ue,sizes:n,loader:V}));var ge=t;0;var ve,be="imagesrcset",je="imagesizes";be="imageSrcSet",je="imageSizes";var ye=(r(ve={},be,pe.srcSet),r(ve,je,pe.sizes),r(ve,"crossOrigin",W.crossOrigin),ve),we=d.default.useLayoutEffect,ke=d.useRef(I),Se=d.useRef(t);d.useEffect((function(){ke.current=I}),[I]),we((function(){Se.current!==t&&(re(),Se.current=t)}),[re,t]);var Ce=l({isLazy:K,imgAttributes:pe,heightInt:de,widthInt:ce,qualityInt:ue,layout:Z,className:z,imgStyle:fe,blurStyle:he,loading:j,config:H,unoptimized:s,placeholder:B,loader:V,srcString:ge,onLoadingCompleteRef:ke,setBlurComplete:$,setIntersection:te,isVisible:ie,noscriptSizes:n},W);return d.default.createElement(d.default.Fragment,null,d.default.createElement("span",{style:oe},ae?d.default.createElement("span",{style:le},X?d.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:X}):null):null,d.default.createElement(A,Object.assign({},Ce))),p?d.default.createElement(u.default,null,d.default.createElement("link",Object.assign({key:"__nimg-"+pe.src+pe.srcSet+pe.sizes,rel:"preload",as:"image",href:pe.srcSet?void 0:pe.src},ye))):null)};var l=n(6495).Z,a=n(2648).Z,s=n(1598).Z,c=n(7273).Z,d=s(n(7294)),u=a(n(5443)),f=n(9309),h=n(7190),m=n(9977),x=(n(3794),n(2392));function p(e){return"/"===e[0]?e.slice(1):e}var g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1},v=new Set,b=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var j=new Map([["default",function(e){var t=e.config,n=e.src,r=e.width,i=e.quality;return n.endsWith(".svg")&&!t.dangerouslyAllowSVG?n:"".concat(x.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(i||75)}],["imgix",function(e){var t=e.config,n=e.src,r=e.width,i=e.quality,o=new URL("".concat(t.path).concat(p(n))),l=o.searchParams;return l.set("auto",l.getAll("auto").join(",")||"format"),l.set("fit",l.get("fit")||"max"),l.set("w",l.get("w")||r.toString()),i&&l.set("q",i.toString()),o.href}],["cloudinary",function(e){var t=e.config,n=e.src,r=["f_auto","c_limit","w_"+e.width,"q_"+(e.quality||"auto")].join(",")+"/";return"".concat(t.path).concat(r).concat(p(n))}],["akamai",function(e){var t=e.config,n=e.src,r=e.width;return"".concat(t.path).concat(p(n),"?imwidth=").concat(r)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function y(e){return void 0!==e.default}function w(e){var t=e.config,n=e.src,r=e.unoptimized,i=e.layout,l=e.width,a=e.quality,s=e.sizes,c=e.loader;if(r)return{src:n,srcSet:void 0,sizes:void 0};var d=function(e,t,n,r){var i=e.deviceSizes,l=e.allSizes;if(r&&("fill"===n||"responsive"===n)){for(var a,s=/(^|\s)(1?\d?\d)vw/g,c=[];a=s.exec(r);a)c.push(parseInt(a[2]));if(c.length){var d,u=.01*(d=Math).min.apply(d,o(c));return{widths:l.filter((function(e){return e>=i[0]*u})),kind:"w"}}return{widths:l,kind:"w"}}return"number"!==typeof t||"fill"===n||"responsive"===n?{widths:i,kind:"w"}:{widths:o(new Set([t,2*t].map((function(e){return l.find((function(t){return t>=e}))||l[l.length-1]})))),kind:"x"}}(t,l,i,s),u=d.widths,f=d.kind,h=u.length-1;return{sizes:s||"w"!==f?s:"100vw",srcSet:u.map((function(e,r){return"".concat(c({config:t,src:n,quality:a,width:e})," ").concat("w"===f?e:r+1).concat(f)})).join(", "),src:c({config:t,src:n,quality:a,width:u[h]})}}function k(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function S(e){var t,n=(null==(t=e.config)?void 0:t.loader)||"default",r=j.get(n);if(r)return r(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(f.VALID_LOADERS.join(", "),". Received: ").concat(n))}function C(e,t,n,r,i,o){e&&e.src!==b&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.parentNode&&(v.add(t),"blur"===r&&o(!0),null==i?void 0:i.current)){var n=e.naturalWidth,l=e.naturalHeight;i.current({naturalWidth:n,naturalHeight:l})}})))}var A=function(e){var t=e.imgAttributes,n=(e.heightInt,e.widthInt),r=e.qualityInt,i=e.layout,o=e.className,a=e.imgStyle,s=e.blurStyle,u=e.isLazy,f=e.placeholder,h=e.loading,m=e.srcString,x=e.config,p=e.unoptimized,g=e.loader,v=e.onLoadingCompleteRef,b=e.setBlurComplete,j=e.setIntersection,y=e.onLoad,k=e.onError,S=(e.isVisible,e.noscriptSizes),A=c(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return h=u?"lazy":h,d.default.createElement(d.default.Fragment,null,d.default.createElement("img",Object.assign({},A,t,{decoding:"async","data-nimg":i,className:o,style:l({},a,s),ref:d.useCallback((function(e){j(e),(null==e?void 0:e.complete)&&C(e,m,0,f,v,b)}),[j,m,i,f,v,b]),onLoad:function(e){C(e.currentTarget,m,0,f,v,b),y&&y(e)},onError:function(e){"blur"===f&&b(!0),k&&k(e)}})),(u||"blur"===f)&&d.default.createElement("noscript",null,d.default.createElement("img",Object.assign({},A,w({config:x,src:m,unoptimized:p,layout:i,width:n,quality:r,sizes:S,loader:g}),{decoding:"async","data-nimg":i,style:a,className:o,loading:h}))))};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4941).Z;n(5753).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(2648).Z,o=n(7273).Z,l=i(n(7294)),a=n(6273),s=n(2725),c=n(3462),d=n(1018),u=n(7190),f=n(1210),h=n(8684),m={};function x(e,t,n,r){if(e&&a.isLocalURL(t)){Promise.resolve(e.prefetch(t,n,r)).catch((function(e){0}));var i=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;m[t+"%"+n+(i?"%"+i:"")]=!0}}var p=l.default.forwardRef((function(e,t){var n,i=e.href,p=e.as,g=e.children,v=e.prefetch,b=e.passHref,j=e.replace,y=e.shallow,w=e.scroll,k=e.locale,S=e.onClick,C=e.onMouseEnter,A=e.onTouchStart,L=e.legacyBehavior,_=void 0===L?!0!==Boolean(!1):L,z=o(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=g,!_||"string"!==typeof n&&"number"!==typeof n||(n=l.default.createElement("a",null,n));var O=!1!==v,R=l.default.useContext(c.RouterContext),E=l.default.useContext(d.AppRouterContext);E&&(R=E);var M,N=l.default.useMemo((function(){var e=r(a.resolveHref(R,i,!0),2),t=e[0],n=e[1];return{href:t,as:p?a.resolveHref(R,p):n||t}}),[R,i,p]),P=N.href,I=N.as,T=l.default.useRef(P),B=l.default.useRef(I);_&&(M=l.default.Children.only(n));var D=_?M&&"object"===typeof M&&M.ref:t,U=r(u.useIntersection({rootMargin:"200px"}),3),q=U[0],H=U[1],W=U[2],Z=l.default.useCallback((function(e){B.current===I&&T.current===P||(W(),B.current=I,T.current=P),q(e),D&&("function"===typeof D?D(e):"object"===typeof D&&(D.current=e))}),[I,D,P,W,q]);l.default.useEffect((function(){var e=H&&O&&a.isLocalURL(P),t="undefined"!==typeof k?k:R&&R.locale,n=m[P+"%"+I+(t?"%"+t:"")];e&&!n&&x(R,P,I,{locale:t})}),[I,P,H,k,O,R]);var V={ref:Z,onClick:function(e){_||"function"!==typeof S||S(e),_&&M.props&&"function"===typeof M.props.onClick&&M.props.onClick(e),e.defaultPrevented||function(e,t,n,r,i,o,s,c,d,u){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(n)){e.preventDefault();var f=function(){"beforePopState"in t?t[i?"replace":"push"](n,r,{shallow:o,locale:c,scroll:s}):t[i?"replace":"push"](n,{forceOptimisticNavigation:!u})};d?l.default.startTransition(f):f()}}(e,R,P,I,j,y,w,k,Boolean(E),O)},onMouseEnter:function(e){_||"function"!==typeof C||C(e),_&&M.props&&"function"===typeof M.props.onMouseEnter&&M.props.onMouseEnter(e),!O&&E||a.isLocalURL(P)&&x(R,P,I,{priority:!0})},onTouchStart:function(e){_||"function"!==typeof A||A(e),_&&M.props&&"function"===typeof M.props.onTouchStart&&M.props.onTouchStart(e),!O&&E||a.isLocalURL(P)&&x(R,P,I,{priority:!0})}};if(!_||b||"a"===M.type&&!("href"in M.props)){var J="undefined"!==typeof k?k:R&&R.locale,G=R&&R.isLocaleDomain&&f.getDomainLocale(I,J,R.locales,R.domainLocales);V.href=G||h.addBasePath(s.addLocale(I,J,R&&R.defaultLocale))}return _?l.default.cloneElement(M,V):l.default.createElement("a",Object.assign({},z,V),n)}));t.default=p,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,c=e.disabled||!l,d=r(i.useState(!1),2),u=d[0],f=d[1],h=r(i.useState(null),2),m=h[0],x=h[1];i.useEffect((function(){if(l){if(c||u)return;if(m&&m.tagName){var e=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=s.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(r&&(t=a.get(r)))return t;var i=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=i.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:o,elements:i},s.push(n),a.set(n,t),t}(n),i=r.id,o=r.observer,l=r.elements;return l.set(e,t),o.observe(e),function(){if(l.delete(e),o.unobserve(e),0===l.size){o.disconnect(),a.delete(i);var t=s.findIndex((function(e){return e.root===i.root&&e.margin===i.margin}));t>-1&&s.splice(t,1)}}}(m,(function(e){return e&&f(e)}),{root:null==t?void 0:t.current,rootMargin:n});return e}}else if(!u){var r=o.requestIdleCallback((function(){return f(!0)}));return function(){return o.cancelIdleCallback(r)}}}),[m,c,n,t,u]);var p=i.useCallback((function(){f(!1)}),[]);return[x,u,p]};var i=n(7294),o=n(9311),l="function"===typeof IntersectionObserver,a=new Map,s=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateContext=t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var r=(0,n(2648).Z)(n(7294)),i=r.default.createContext(null);t.AppRouterContext=i;var o=r.default.createContext(null);t.LayoutRouterContext=o;var l=r.default.createContext(null);t.GlobalLayoutRouterContext=l;var a=r.default.createContext(null);t.TemplateContext=a},4076:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){r(e,t,n[t])}))}return e}n.r(t),n.d(t,{default:function(){return h}});var o=n(5893),l=(n(906),n(1664)),a=n.n(l),s=(n(5675),n(7294));function c(){var e=(0,s.useState)(!1),t=e[0],n=e[1];return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("nav",{className:"w-full bg-white",children:[(0,o.jsxs)("div",{className:"justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8",children:[(0,o.jsx)("div",{children:(0,o.jsxs)("div",{className:"flex items-center justify-between py-3",children:[(0,o.jsx)("a",{className:"flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0",children:(0,o.jsxs)("span",{className:"ml-3 text-xl font-bold",children:["CODING",(0,o.jsx)("span",{className:"text-blue-800",children:"JUNK"})]})}),(0,o.jsx)("div",{className:"md:hidden flex flex-wrap",children:(0,o.jsx)("button",{className:"p-2 text-gray-900700 rounded-md outline-none focus:border-gray-400 focus:border",onClick:function(){return n(!t)},children:t?(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-6 h-6 text-gray-900",viewBox:"0 0 20 20",fill:"currentColor",children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.2707a1 1 0 010-1.414z",clipRule:"evenodd"})}):(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-6 h-6 text-gray-900",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:(0,o.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4 6h16M4 12h16M4 18h16"})})})})]})}),(0,o.jsx)("div",{children:(0,o.jsx)("div",{className:"flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ".concat(t?"block":"hidden"),children:(0,o.jsxs)("ul",{className:"items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 font-base",children:[(0,o.jsx)("li",{class:"text-gray-900 hover:border-b-2 hover:border-gray-900 font-sans text-lg md:font-medium",children:(0,o.jsx)(a(),{href:"/",children:"Home"})}),(0,o.jsx)("li",{class:"text-gray-900 hover:border-b-2 hover:border-gray-900 font-sans text-lg md:font-medium",children:(0,o.jsx)(a(),{href:"/courses",children:"Courses"})}),(0,o.jsx)("li",{class:"text-gray-900 hover:border-b-2 hover:border-gray-900 font-sans text-lg md:font-medium",children:(0,o.jsx)(a(),{href:"/blogs",children:"Blogs"})}),(0,o.jsx)("li",{class:"text-gray-900 hover:border-b-2 hover:border-gray-900 font-sans text-lg md:font-medium",children:(0,o.jsx)(a(),{href:"/practice",children:"Practice"})}),(0,o.jsx)("li",{class:"text-gray-900 hover:border-b-2 hover:border-gray-900 font-sans text-lg md:font-medium",children:(0,o.jsx)(a(),{href:"/interview",children:"Interview"})}),(0,o.jsx)("button",{className:"text-white bg-blue-800 hover:bg-blue-900 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center mx-1",children:(0,o.jsx)(a(),{href:"/Subscribe",children:"Subscribe"})})]})})})]}),(0,o.jsx)("div",{className:"flex-grow border-t border-gray-200"})]}),(0,o.jsx)("header",{className:"text-gray-600 body-font top-0 shadow-md invisible lg:visible",children:(0,o.jsx)("div",{className:"container mx-auto flex flex-wrap py-2 flex-col md:flex-row items-center",children:(0,o.jsxs)("ul",{class:"md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center",children:[(0,o.jsx)("li",{class:" hover:text-green-700 font-serif text-black md:mr-5",children:(0,o.jsx)(a(),{href:"/",children:"Data Structures"})}),(0,o.jsx)("li",{class:" hover:text-green-700 font-serif text-black md:mr-5",children:(0,o.jsx)(a(),{href:"/",children:"Algorithms"})}),(0,o.jsx)("li",{class:" hover:text-green-700 font-serif text-black md:mr-5",children:(0,o.jsx)(a(),{href:"/",children:"C++"})}),(0,o.jsx)("li",{class:" hover:text-green-700 font-serif text-black md:mr-5",children:(0,o.jsx)(a(),{href:"/",children:"Interview"})}),(0,o.jsx)("li",{class:" hover:text-green-700 font-serif text-black md:mr-5",children:(0,o.jsx)(a(),{href:"/",children:"Java"})}),(0,o.jsx)("li",{class:" hover:text-green-700 font-serif text-black md:mr-5",children:(0,o.jsx)(a(),{href:"/",children:"Python"})}),(0,o.jsx)("li",{class:" hover:text-green-700 font-serif text-black md:mr-5",children:(0,o.jsx)(a(),{href:"/",children:"Competitive"})}),(0,o.jsx)("li",{class:" hover:text-green-700 font-serif text-black md:mr-5",children:(0,o.jsx)(a(),{href:"/",children:"Machine Learning"})}),(0,o.jsx)("li",{class:" hover:text-green-700 font-serif text-black md:mr-5",children:(0,o.jsx)(a(),{href:"/",children:"Projects"})}),(0,o.jsx)("li",{class:" hover:text-green-700 font-serif text-black md:mr-5",children:(0,o.jsx)(a(),{href:"/",children:"Javascript"})}),(0,o.jsx)("li",{class:" hover:text-green-700 font-serif text-black md:mr-5",children:(0,o.jsx)(a(),{href:"/",children:"Puzzle"})})]})})})]})}var d=n(9008),u=n.n(d),f=function(){return(0,o.jsxs)("footer",{class:"text-white bg-gray-900 body-font",children:[(0,o.jsxs)("div",{class:"container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col",children:[(0,o.jsxs)("div",{class:"w-64 flex-shrink-0 mx-auto text-center md:text-left",children:[(0,o.jsx)("a",{class:"flex title-font font-medium items-center md:justify-start justify-center text-white",children:(0,o.jsxs)("span",{class:"ml-3 font-bold text-2xl",children:["CODING",(0,o.jsx)("span",{className:"text-blue-900",children:"JUNK"})]})}),(0,o.jsx)("p",{class:"mt-2 text-xl font-semibold text-white",children:"Start your programming journey now!!"})]}),(0,o.jsxs)("div",{class:"flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center",children:[(0,o.jsxs)("div",{class:"lg:w-1/4 md:w-1/2 w-full px-4",children:[(0,o.jsx)("h2",{class:"title-font font-semibold text-lg text-white tracking-widest mb-3",children:"LEARN TUTORIALS"}),(0,o.jsxs)("nav",{class:"list-none mb-10 space-y-2 font-medium",children:[(0,o.jsx)("li",{children:(0,o.jsx)("a",{children:"Learn JAVA"})}),(0,o.jsx)("li",{children:(0,o.jsx)("a",{children:"Learn C++"})}),(0,o.jsx)("li",{children:(0,o.jsx)("a",{children:"Learn PYTHON"})}),(0,o.jsx)("li",{children:(0,o.jsx)("a",{children:"Learn JAVASCRIPT"})}),(0,o.jsx)("li",{children:(0,o.jsx)("a",{children:"Learn ALGORITHMS"})}),(0,o.jsx)("li",{children:(0,o.jsx)("a",{children:"Learn DSA"})}),(0,o.jsx)("li",{children:(0,o.jsx)("a",{children:"Learn HTML"})})]})]}),(0,o.jsxs)("div",{class:"lg:w-1/4 md:w-1/2 w-full px-4",children:[(0,o.jsx)("h2",{class:"title-font font-semibold text-lg text-white tracking-widest mb-3",children:"OUR SERVICES"}),(0,o.jsxs)("nav",{class:"list-none mb-10 space-y-2 font-medium",children:[(0,o.jsx)("li",{children:(0,o.jsx)("a",{children:"Web Designing"})}),(0,o.jsx)("li",{children:(0,o.jsx)("a",{children:"Website Development"})}),(0,o.jsx)("li",{children:(0,o.jsx)("a",{children:"App Development"})}),(0,o.jsx)("li",{children:(0,o.jsx)("a",{children:"Digital Marketing"})}),(0,o.jsx)("li",{children:(0,o.jsx)("a",{children:"SEO Optimization"})})]})]}),(0,o.jsxs)("div",{class:"lg:w-1/4 md:w-1/2 w-full px-4",children:[(0,o.jsx)("h2",{class:"title-font font-semibold text-lg text-white tracking-widest mb-3",children:"TERMS"}),(0,o.jsxs)("nav",{class:"list-none mb-10 space-y-2 font-medium",children:[(0,o.jsx)("li",{children:(0,o.jsx)(a(),{href:"/terms",children:"Terms of Use"})}),(0,o.jsx)("li",{children:(0,o.jsx)(a(),{href:"/privacy",children:"Privacy Policy"})}),(0,o.jsx)("li",{children:(0,o.jsx)(a(),{href:"/aboutus",children:"About Us"})}),(0,o.jsx)("li",{children:(0,o.jsx)(a(),{href:"/contact",children:"Contact Us"})})]})]}),(0,o.jsxs)("div",{class:"lg:w-1/4 md:w-1/2 w-full pr-4 space-y-2",children:[(0,o.jsx)("h2",{class:"title-font text-white font-semibold text-lg tracking-widest mb-3",children:"CONTACT"}),(0,o.jsx)("p",{children:"Address: Chakupat, Pulchowk"}),(0,o.jsx)("p",{children:"Lalitpur, 44600, Nepal"}),(0,o.jsx)("p",{children:"Contact No: (+977) 9880691680"}),(0,o.jsx)("p",{children:"Sitemaps"}),(0,o.jsx)(a(),{href:"/aboutme",children:(0,o.jsx)("p",{className:"cursor-pointer",children:"About Me"})})]})]})]}),(0,o.jsx)("div",{class:"bg-gray00",children:(0,o.jsxs)("div",{class:"container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row",children:[(0,o.jsxs)("p",{class:"text-white text-sm text-center sm:text-left",children:["Copyrights \xa9 2022 Coding Junk",(0,o.jsx)("a",{class:"text-white ml-1",target:"_blank",children:"| All Rights Reserved"})]}),(0,o.jsxs)("span",{class:"inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start",children:[(0,o.jsx)(a(),{href:"https://www.facebook.com/codingjunk",children:(0,o.jsx)("a",{class:"text-blue-500",target:"_blank",children:(0,o.jsx)("svg",{fill:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",class:"w-5 h-5",viewBox:"0 0 24 24",children:(0,o.jsx)("path",{d:"M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"})})})}),(0,o.jsx)(a(),{href:"https://www.instagram.com/codingjunk/",children:(0,o.jsx)("a",{class:"ml-3 text-pink-500",target:"_blank",children:(0,o.jsxs)("svg",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",class:"w-5 h-5",viewBox:"0 0 24 24",children:[(0,o.jsx)("rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5"}),(0,o.jsx)("path",{d:"M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"})]})})}),(0,o.jsx)(a(),{href:"https://www.linkedin.com/in/balayar07/",children:(0,o.jsx)("a",{class:"ml-3 text-sky-500",target:"_blank",children:(0,o.jsxs)("svg",{fill:"currentColor",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"0",class:"w-5 h-5",viewBox:"0 0 24 24",children:[(0,o.jsx)("path",{stroke:"none",d:"M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"}),(0,o.jsx)("circle",{cx:"4",cy:"4",r:"2",stroke:"none"})]})})})]})]})})]})};var h=function(e){var t=e.Component,n=e.pageProps;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(u(),{children:(0,o.jsx)("link",{rel:"shortcut icon",href:"/favicon.png"})}),(0,o.jsx)(c,{}),(0,o.jsx)(t,i({},n)),(0,o.jsx)(f,{})]})}},906:function(){},9008:function(e,t,n){e.exports=n(5443)},5675:function(e,t,n){e.exports=n(8045)},1664:function(e,t,n){e.exports=n(8418)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(1118),t(387)}));var n=e.O();_N_E=n}]);