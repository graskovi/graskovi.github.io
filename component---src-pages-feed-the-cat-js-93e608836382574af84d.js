(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{192:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(200),s=a(208),o=a(211),l=a(206);t.default=function(){return n.a.createElement(s.a,null,n.a.createElement(l.a,{title:"Feed-the-Cat"}),n.a.createElement("h1",null,"Hi people"),n.a.createElement("p",null,"Welcome to the game Feed the Cat!, written by Glenn Raskovich!"),n.a.createElement("p",null,"WIP, come back for a simple but fun game!"),n.a.createElement("div",{style:{maxWidth:"300px",marginBottom:"1.45rem"}},n.a.createElement(o.a,null)),n.a.createElement(i.a,{to:"/"},"Return home"),n.a.createElement("br",null),n.a.createElement(i.a,{to:"/games"},"Go to my games!"))}},199:function(e,t,a){var r;e.exports=(r=a(203))&&r.default||r},200:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(66),s=a.n(i);a.d(t,"a",function(){return s.a});a(199),a(9).default.enqueue,n.a.createContext({})},203:function(e,t,a){"use strict";a.r(t);a(23);var r=a(0),n=a.n(r),i=a(94);t.default=function(e){var t=e.location,a=e.pageResources;return a?n.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null}},204:function(e){e.exports={data:{site:{siteMetadata:{title:"Glenn Raskovich"}}}}},205:function(e,t,a){e.exports=a.p+"static/Glenn_AtLNH-2d13006d8ea8d1d4ee3169c07e5fec60.jpg"},206:function(e,t,a){"use strict";var r=a(207),n=a(0),i=a.n(n),s=a(216),o=a.n(s);function l(e){var t=e.description,a=e.lang,n=e.meta,s=e.title,l=r.data.site,d=t||l.siteMetadata.description;return i.a.createElement(o.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:s},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:d}].concat(n)})}l.defaultProps={lang:"en",meta:[],description:""},t.a=l},207:function(e){e.exports={data:{site:{siteMetadata:{title:"Glenn Raskovich",description:"Personal website of Glenn Raskovich",author:"@graskovi"}}}}},208:function(e,t,a){"use strict";var r=a(204),n=a(0),i=a.n(n),s=a(200),o=a(205),l=a.n(o),d="https://www.linkedin.com/in/glenn-raskovich",c={header:{background:"rebeccapurple",marginBottom:"1.45rem"},tab:{color:"white",textDecoration:"none"},row:{margin:"0 auto",maxWidth:960,alignContent:"center"},text:{color:"white",textDecoration:"none"},avatar:{width:100,height:100,borderRadius:100}},u=function(e){var t=e.siteTitle;return i.a.createElement("header",{style:c.header},i.a.createElement("div",{style:c.row},i.a.createElement("table",{cellpadding:"0",cellspacing:"0",border:"0"},i.a.createElement("tr",null,i.a.createElement("td",null,i.a.createElement("h1",{style:{margin:0}},i.a.createElement(s.a,{to:"/",style:c.text},t))),i.a.createElement("td",null,i.a.createElement(s.a,{to:"/games/",style:c.tab},"Games")),i.a.createElement("td",null,i.a.createElement("a",{href:"https://www.github.com/graskovi",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("div",{style:c.tab},"GitHub"))),i.a.createElement("td",null,i.a.createElement("a",{href:d,target:"_blank",rel:"noopener noreferrer"},i.a.createElement("div",{style:c.tab},"Contact"))),i.a.createElement("a",{href:d,target:"_blank",rel:"noopener noreferrer"},i.a.createElement("td",null,i.a.createElement("img",{src:l.a,style:c.avatar})))))))};u.defaultProps={siteTitle:""};var f=u;a(215),t.a=function(e){var t=e.children,a=r.data;return i.a.createElement(i.a.Fragment,null,i.a.createElement(f,{siteTitle:a.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",null,t),i.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))}},209:function(e,t,a){var r=a(1),n=a(7),i=a(32),s=/"/g,o=function(e,t,a,r){var n=String(i(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(r).replace(s,"&quot;")+'"'),o+">"+n+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),r(r.P+r.F*n(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},211:function(e,t,a){"use strict";var r=a(212),n=a(0),i=a.n(n),s=a(213),o=a.n(s);t.a=function(){var e=r.data;return i.a.createElement(o.a,{fluid:e.placeholderImage.childImageSharp.fluid})}},212:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACYklEQVQ4y42Uy28SQRjA+dM8efDmwYN6qF6qiSY+Y/WgQRMibY00TaWNBSRSCraYQtHl/bR0KyxQWCgWWAqU8izl/Sq7rLNsRHlVJpvJtzPfb77nDIOcZHSoqZSrp4+KtXIziubaLRysMCZiCYqOoVnhjNEi8RcztdxxeTzc6VBfT+5O2Vhpb+vw4wMdZ0ppWvP9xzLeJoDNThf2W+Nz1+XzNxQubSToSKKW+BDc+WOnkshhSVgeCiGpViZMEg1oxc26Knt+ae3bEtJTZwzE1kXLccG0+sOOlrcvZXvsczPkITfsa20vwIKnhsh+BnjUarT74Gb13CY7KBVJMv3z4N1NszQYsMWM62HNrCis/GxXn0iYls23uz5LPBcv0bH8hUH2XRoM85ySXv7JBtO87jMIvWq+H5GoYIHCLA1ZxD6Qap3Ak8IKfW7TJ50lK6uP9E6RgndHaODtCJ6Z5RyHfnE7j6gRbcKlCYNSt+rtETHTpUGgEP8FYmdNqd/Mo7aiVWTfuH2L9xASvfxxlqr01EYkrJszvNkgW9bH0OuFr+99m+y9IOeyU6zIp/Hubp/yMEztlzFPwOhdvq+nIoS1JNn4t2sugCmVsDvPe2KKolnZLCxhOcAKQRDDXTQaVi46lqYhIBwHTrl3oWqhMRDtaJge37lOBMKo4tfbqhVX0J7snTsWps8uZWuoOQY6CcjpSIF55UvmqNgr5wUwtV1IVdnXtnSfPEB2qjDNqnvczRl0m+j6Jn5lXb6nAQJqinmN0ZEBj03YLzghY8PnTRz80o/GRJZpOLCb0PM9BN7pvUEjx28V00WUg9jIVwAAAABJRU5ErkJggg==",aspectRatio:1,src:"/static/6d91c86c0fde632ba4cd01062fd9ccfa/fdbb0/gatsby-astronaut.png",srcSet:"/static/6d91c86c0fde632ba4cd01062fd9ccfa/e22c9/gatsby-astronaut.png 75w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/d3809/gatsby-astronaut.png 150w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/fdbb0/gatsby-astronaut.png 300w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/b5207/gatsby-astronaut.png 450w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/59139/gatsby-astronaut.png 600w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/af144/gatsby-astronaut.png 800w",sizes:"(max-width: 300px) 100vw, 300px"}}}}}},213:function(e,t,a){"use strict";a(29),a(30),a(13),a(92),a(133),a(214);var r=a(15);t.__esModule=!0,t.default=void 0;var n,i=r(a(69)),s=r(a(70)),o=r(a(135)),l=r(a(134)),d=r(a(0)),c=r(a(50)),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=E([].concat(t.fluid))),t.fixed&&(t.fixed=E([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},g=Object.create({}),p=function(e){var t=u(e),a=f(t);return g[a]||!1},m="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,b=h&&window.IntersectionObserver,y=new WeakMap;function v(e){return e.map(function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:n,srcSet:r,sizes:i}),d.default.createElement("source",{media:n,srcSet:a,sizes:i}))})}function E(e){var t=[],a=[];return e.forEach(function(e){return(e.media?t:a).push(e)}),t.concat(a)}function S(e){return e.map(function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})})}function w(e){return e.map(function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})})}function R(e,t){var a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?r:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var I=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver(function(e){e.forEach(function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),y.delete(e.target),t())}})},{rootMargin:"200px"})),n);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},L=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map(function(e){return(e.srcSetWebp?R(e,!0):"")+R(e)}).join("")+"<img "+d+s+o+a+r+t+i+n+l+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},x=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,n=e.spreadProps,i=d.default.createElement(z,(0,l.default)({src:t},n));return a.length>1?d.default.createElement("picture",null,r(a),i):i},z=d.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,i=e.style,s=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,g=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return d.default.createElement("img",(0,l.default)({sizes:a,srcSet:r,src:n},g,{onLoad:s,onError:c,ref:t,loading:u,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))});z.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var A=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&p(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!m&&b&&!t.critical&&!a.seenBefore;var r=t.critical||h&&(m||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=I(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),g[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,g=e.placeholderClassName,p=e.fluid,m=e.fixed,h=e.backgroundColor,b=e.durationFadeIn,y=e.Tag,E=e.itemProp,R=e.loading,I=e.draggable,A=!1===this.state.fadeIn||this.state.imgLoaded,O=!0===this.state.fadeIn&&!this.state.imgCached,V=(0,l.default)({opacity:A?1:0,transition:O?"opacity "+b+"ms":"none"},o),C="boolean"==typeof h?"lightgray":h,T={transitionDelay:b+"ms"},k=(0,l.default)({opacity:this.state.imgLoaded?0:1},O&&T,o,f),W={title:t,alt:this.state.isVisible?"":a,style:k,className:g};if(p){var N=p,M=N[0];return d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(M.srcSet)},d.default.createElement(y,{style:{width:"100%",paddingBottom:100/M.aspectRatio+"%"}}),C&&d.default.createElement(y,{title:t,style:(0,l.default)({backgroundColor:C,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},O&&T)}),M.base64&&d.default.createElement(x,{src:M.base64,spreadProps:W,imageVariants:N,generateSources:w}),M.tracedSVG&&d.default.createElement(x,{src:M.tracedSVG,spreadProps:W,imageVariants:N,generateSources:S}),this.state.isVisible&&d.default.createElement("picture",null,v(N),d.default.createElement(z,{alt:a,title:t,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:R,draggable:I})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:L((0,l.default)({alt:a,title:t,loading:R},M,{imageVariants:N}))}}))}if(m){var q=m,P=q[0],j=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:P.width,height:P.height},i);return"inherit"===i.display&&delete j.display,d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:j,ref:this.handleRef,key:"fixed-"+JSON.stringify(P.srcSet)},C&&d.default.createElement(y,{title:t,style:(0,l.default)({backgroundColor:C,width:P.width,opacity:this.state.imgLoaded?0:1,height:P.height},O&&T)}),P.base64&&d.default.createElement(x,{src:P.base64,spreadProps:W,imageVariants:q,generateSources:w}),P.tracedSVG&&d.default.createElement(x,{src:P.tracedSVG,spreadProps:W,imageVariants:q,generateSources:S}),this.state.isVisible&&d.default.createElement("picture",null,v(q),d.default.createElement(z,{alt:a,title:t,width:P.width,height:P.height,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:R,draggable:I})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:L((0,l.default)({alt:a,title:t,loading:R},P,{imageVariants:q}))}}))}return null},t}(d.default.Component);A.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var O=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),V=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});A.propTypes={resolutions:O,sizes:V,fixed:c.default.oneOfType([O,c.default.arrayOf(O)]),fluid:c.default.oneOfType([V,c.default.arrayOf(V)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var C=A;t.default=C},214:function(e,t,a){"use strict";a(209)("fixed",function(e){return function(){return e(this,"tt","","")}})}}]);
//# sourceMappingURL=component---src-pages-feed-the-cat-js-93e608836382574af84d.js.map