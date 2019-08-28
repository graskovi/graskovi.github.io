(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{194:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(208),s=a(211),o=a(206),l=a(221),c={astronaut:{maxWidth:"300px",marginBottom:"1.45rem"}};t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"Glenn Raskovich"}),r.a.createElement(l.a,{name:"About me",dates:"UC San Diego Class of 2020, Revelle College, B.S. Computer Science",description:"I started programming in Middle school with Scratch (see 'Games'), and since then I've been improving my ability to use programming to solve problems. From computer science tutoring & courses in AI, Machine Learning, Computer Vision & Computer Security at UC San Diego to frontend & backend app development to virtual reality to DevOps; I'm always looking to expand my skillset and do interesting work along the way!"}),r.a.createElement("h1",null,"Portfolio"),r.a.createElement(l.a,{name:"Mitchell International",dates:"Summer 2019",position:"DevOps Software Development Intern",linkUrl:"https://www.mitchell.com",description:"I wrote a C# .NET project to automate a PSI build process: the logic interfaces a Microsoft TFS repository with the local file system, builds a dependency graph of internal packages, and updates the files in topological order. Then, I configured a Docker image and hosted it on AWS ECS. This utility helped reduce build time from ~3 days to ~3 hours."}),r.a.createElement(l.a,{name:"Triton Software Engineering",dates:"October 2018 - Present",position:"React Native Project Lead",linkUrl:"https://tritonse.github.io",description:"I lead a small team of React Native developers to design and develop iOS/Android apps in TypeScript for nonprofits. I interface with medical customers and design collaborators to finalize functionality and design, and work with my developers to determine the architecture, workflow, and implementation of the codebase."}),r.a.createElement(l.a,{name:"UCSD Computer Science & Engineering Department",dates:"September 2017 - Present",position:"Computer Science Tutor",linkUrl:"https://www.cse.ucsd.edu",description:"I've used Java and C++ to help students design, write, and debug programs, and learn the fundamentals of object-oriented programming and data structures. I've led lab sections, done public speaking for discussion sections, and helped design and grade assignments."}),r.a.createElement(l.a,{name:"MechSuit VR",dates:"2018 - Present",position:"Lead C# Programmer",description:"Work in progress, coming soon to Oculus and Steam!"}),r.a.createElement(l.a,{name:"Virtual Reality Medical Center",dates:"March 2017 - October 2018",position:"Head Software Development Intern",linkUrl:"https://www.vrphobia.com",description:"I developed virtual reality projects in Unity3D to help patients cope with phobias in immersive environments. I wrote C# scripts, a custom shader in ShaderLab, and tweaked legacy animations for projects helping patients deal with a fear of heights, flying, and the outdoors."}),r.a.createElement(l.a,{name:"BendAR",dates:"February 2018",linkUrl:"https://www.devpost.com/software/bendar"}),r.a.createElement(l.a,{name:"UCSD Summer Program for Incoming Students",dates:"Summer 2016 & 2017",position:"Computer Science Mentor",linkUrl:"https://sites.google.com/a/eng.ucsd.edu/spis/",description:"As a student I wrote Python scripts to implement finite state machine logic on a Raspberry Pi and implement image manipulation and vector correlation for an optical character recognition (OCR) program. I returned the next Summer as a mentor when I used my knowledge of Python to teach students how to make Flask web applications, OpenCV robotics, and NumPy data science."}),r.a.createElement(l.a,{name:"Scavenging en-Nahas",dates:"April 2017",linkUrl:"https://www.devpost.com/software/scavenging-en-nahas"}),r.a.createElement(l.a,{name:"Boys & Girls Club of America",dates:"September 2012 - June 2016",position:"Volunteer STEM Instructor",linkUrl:"https://www.bgca.org",description:"I taught a beginner’s programming class using Scratch, helped teach students in a STEM workshop class, and tutored mathematics."}),r.a.createElement("div",{style:c.astronaut},r.a.createElement(s.a,null)))}},199:function(e,t,a){var n;e.exports=(n=a(203))&&n.default||n},200:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(66),s=a.n(i);a.d(t,"a",function(){return s.a});a(199),a(9).default.enqueue,r.a.createContext({})},203:function(e,t,a){"use strict";a.r(t);a(23);var n=a(0),r=a.n(n),i=a(94);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null}},204:function(e){e.exports={data:{site:{siteMetadata:{title:"Glenn Raskovich"}}}}},205:function(e,t,a){e.exports=a.p+"static/Glenn_AtLNH-2d13006d8ea8d1d4ee3169c07e5fec60.jpg"},206:function(e,t,a){"use strict";var n=a(207),r=a(0),i=a.n(r),s=a(216),o=a.n(s);function l(e){var t=e.description,a=e.lang,r=e.meta,s=e.title,l=n.data.site,c=t||l.siteMetadata.description;return i.a.createElement(o.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:s},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:c}].concat(r)})}l.defaultProps={lang:"en",meta:[],description:""},t.a=l},207:function(e){e.exports={data:{site:{siteMetadata:{title:"Glenn Raskovich",description:"Personal website of Glenn Raskovich",author:"@graskovi"}}}}},208:function(e,t,a){"use strict";var n=a(204),r=a(0),i=a.n(r),s=a(200),o=a(205),l=a.n(o),c="https://www.linkedin.com/in/glenn-raskovich",d={header:{background:"rebeccapurple",marginBottom:"1.45rem"},tab:{color:"white",textDecoration:"none"},row:{margin:"0 auto",maxWidth:960,alignContent:"center"},text:{color:"white",textDecoration:"none"},avatar:{width:100,height:100,borderRadius:100}},u=function(e){var t=e.siteTitle;return i.a.createElement("header",{style:d.header},i.a.createElement("div",{style:d.row},i.a.createElement("table",{cellpadding:"0",cellspacing:"0",border:"0"},i.a.createElement("tr",null,i.a.createElement("td",null,i.a.createElement("h1",{style:{margin:0}},i.a.createElement(s.a,{to:"/",style:d.text},t))),i.a.createElement("td",null,i.a.createElement(s.a,{to:"/games/",style:d.tab},"Games")),i.a.createElement("td",null,i.a.createElement("a",{href:"https://www.github.com/graskovi",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("div",{style:d.tab},"GitHub"))),i.a.createElement("td",null,i.a.createElement("a",{href:c,target:"_blank",rel:"noopener noreferrer"},i.a.createElement("div",{style:d.tab},"Contact"))),i.a.createElement("a",{href:c,target:"_blank",rel:"noopener noreferrer"},i.a.createElement("td",null,i.a.createElement("img",{src:l.a,style:d.avatar})))))))};u.defaultProps={siteTitle:""};var f=u;a(215),t.a=function(e){var t=e.children,a=n.data;return i.a.createElement(i.a.Fragment,null,i.a.createElement(f,{siteTitle:a.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",null,t),i.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))}},211:function(e,t,a){"use strict";var n=a(212),r=a(0),i=a.n(r),s=a(213),o=a.n(s);t.a=function(){var e=n.data;return i.a.createElement(o.a,{fluid:e.placeholderImage.childImageSharp.fluid})}},212:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACYklEQVQ4y42Uy28SQRjA+dM8efDmwYN6qF6qiSY+Y/WgQRMibY00TaWNBSRSCraYQtHl/bR0KyxQWCgWWAqU8izl/Sq7rLNsRHlVJpvJtzPfb77nDIOcZHSoqZSrp4+KtXIziubaLRysMCZiCYqOoVnhjNEi8RcztdxxeTzc6VBfT+5O2Vhpb+vw4wMdZ0ppWvP9xzLeJoDNThf2W+Nz1+XzNxQubSToSKKW+BDc+WOnkshhSVgeCiGpViZMEg1oxc26Knt+ae3bEtJTZwzE1kXLccG0+sOOlrcvZXvsczPkITfsa20vwIKnhsh+BnjUarT74Gb13CY7KBVJMv3z4N1NszQYsMWM62HNrCis/GxXn0iYls23uz5LPBcv0bH8hUH2XRoM85ySXv7JBtO87jMIvWq+H5GoYIHCLA1ZxD6Qap3Ak8IKfW7TJ50lK6uP9E6RgndHaODtCJ6Z5RyHfnE7j6gRbcKlCYNSt+rtETHTpUGgEP8FYmdNqd/Mo7aiVWTfuH2L9xASvfxxlqr01EYkrJszvNkgW9bH0OuFr+99m+y9IOeyU6zIp/Hubp/yMEztlzFPwOhdvq+nIoS1JNn4t2sugCmVsDvPe2KKolnZLCxhOcAKQRDDXTQaVi46lqYhIBwHTrl3oWqhMRDtaJge37lOBMKo4tfbqhVX0J7snTsWps8uZWuoOQY6CcjpSIF55UvmqNgr5wUwtV1IVdnXtnSfPEB2qjDNqnvczRl0m+j6Jn5lXb6nAQJqinmN0ZEBj03YLzghY8PnTRz80o/GRJZpOLCb0PM9BN7pvUEjx28V00WUg9jIVwAAAABJRU5ErkJggg==",aspectRatio:1,src:"/static/6d91c86c0fde632ba4cd01062fd9ccfa/fdbb0/gatsby-astronaut.png",srcSet:"/static/6d91c86c0fde632ba4cd01062fd9ccfa/e22c9/gatsby-astronaut.png 75w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/d3809/gatsby-astronaut.png 150w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/fdbb0/gatsby-astronaut.png 300w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/b5207/gatsby-astronaut.png 450w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/59139/gatsby-astronaut.png 600w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/af144/gatsby-astronaut.png 800w",sizes:"(max-width: 300px) 100vw, 300px"}}}}}},213:function(e,t,a){"use strict";a(29),a(30),a(13),a(92),a(133),a(214);var n=a(15);t.__esModule=!0,t.default=void 0;var r,i=n(a(69)),s=n(a(70)),o=n(a(135)),l=n(a(134)),c=n(a(0)),d=n(a(50)),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,n=t.sizes,r=t.critical;return a&&(t.fixed=a,delete t.resolutions),n&&(t.fluid=n,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=v([].concat(t.fluid))),t.fixed&&(t.fixed=v([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},p=Object.create({}),m=function(e){var t=u(e),a=f(t);return p[a]||!1},g="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,b=h&&window.IntersectionObserver,w=new WeakMap;function y(e){return e.map(function(e){var t=e.src,a=e.srcSet,n=e.srcSetWebp,r=e.media,i=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},n&&c.default.createElement("source",{type:"image/webp",media:r,srcSet:n,sizes:i}),c.default.createElement("source",{media:r,srcSet:a,sizes:i}))})}function v(e){var t=[],a=[];return e.forEach(function(e){return(e.media?t:a).push(e)}),t.concat(a)}function E(e){return e.map(function(e){var t=e.src,a=e.media,n=e.tracedSVG;return c.default.createElement("source",{key:t,media:a,srcSet:n})})}function S(e){return e.map(function(e){var t=e.src,a=e.media,n=e.base64;return c.default.createElement("source",{key:t,media:a,srcSet:n})})}function I(e,t){var a=e.srcSet,n=e.srcSetWebp,r=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?n:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var k=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){if(w.has(e.target)){var t=w.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),w.delete(e.target),t())}})},{rootMargin:"200px"})),r);return a&&(a.observe(e),w.set(e,t)),function(){a.unobserve(e),w.delete(e)}},R=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map(function(e){return(e.srcSetWebp?I(e,!0):"")+I(e)}).join("")+"<img "+c+s+o+a+n+t+i+r+l+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},C=function(e){var t=e.src,a=e.imageVariants,n=e.generateSources,r=e.spreadProps,i=c.default.createElement(L,(0,l.default)({src:t},r));return a.length>1?c.default.createElement("picture",null,n(a),i):i},L=c.default.forwardRef(function(e,t){var a=e.sizes,n=e.srcSet,r=e.src,i=e.style,s=e.onLoad,d=e.onError,u=e.loading,f=e.draggable,p=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return c.default.createElement("img",(0,l.default)({sizes:a,srcSet:n,src:r},p,{onLoad:s,onError:d,ref:t,loading:u,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))});L.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var A=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&m(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!g&&b&&!t.critical&&!a.seenBefore;var n=t.critical||h&&(g||!a.useIOSupport);return a.state={isVisible:n,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=k(e,function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),p[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,n=e.className,r=e.style,i=void 0===r?{}:r,s=e.imgStyle,o=void 0===s?{}:s,d=e.placeholderStyle,f=void 0===d?{}:d,p=e.placeholderClassName,m=e.fluid,g=e.fixed,h=e.backgroundColor,b=e.durationFadeIn,w=e.Tag,v=e.itemProp,I=e.loading,k=e.draggable,A=!1===this.state.fadeIn||this.state.imgLoaded,O=!0===this.state.fadeIn&&!this.state.imgCached,x=(0,l.default)({opacity:A?1:0,transition:O?"opacity "+b+"ms":"none"},o),T="boolean"==typeof h?"lightgray":h,V={transitionDelay:b+"ms"},z=(0,l.default)({opacity:this.state.imgLoaded?0:1},O&&V,o,f),M={title:t,alt:this.state.isVisible?"":a,style:z,className:p};if(m){var N=m,P=N[0];return c.default.createElement(w,{className:(n||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(P.srcSet)},c.default.createElement(w,{style:{width:"100%",paddingBottom:100/P.aspectRatio+"%"}}),T&&c.default.createElement(w,{title:t,style:(0,l.default)({backgroundColor:T,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},O&&V)}),P.base64&&c.default.createElement(C,{src:P.base64,spreadProps:M,imageVariants:N,generateSources:S}),P.tracedSVG&&c.default.createElement(C,{src:P.tracedSVG,spreadProps:M,imageVariants:N,generateSources:E}),this.state.isVisible&&c.default.createElement("picture",null,y(N),c.default.createElement(L,{alt:a,title:t,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:x,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:I,draggable:k})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,l.default)({alt:a,title:t,loading:I},P,{imageVariants:N}))}}))}if(g){var W=g,U=W[0],j=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:U.width,height:U.height},i);return"inherit"===i.display&&delete j.display,c.default.createElement(w,{className:(n||"")+" gatsby-image-wrapper",style:j,ref:this.handleRef,key:"fixed-"+JSON.stringify(U.srcSet)},T&&c.default.createElement(w,{title:t,style:(0,l.default)({backgroundColor:T,width:U.width,opacity:this.state.imgLoaded?0:1,height:U.height},O&&V)}),U.base64&&c.default.createElement(C,{src:U.base64,spreadProps:M,imageVariants:W,generateSources:S}),U.tracedSVG&&c.default.createElement(C,{src:U.tracedSVG,spreadProps:M,imageVariants:W,generateSources:E}),this.state.isVisible&&c.default.createElement("picture",null,y(W),c.default.createElement(L,{alt:a,title:t,width:U.width,height:U.height,sizes:U.sizes,src:U.src,crossOrigin:this.props.crossOrigin,srcSet:U.srcSet,style:x,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:I,draggable:k})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,l.default)({alt:a,title:t,loading:I},U,{imageVariants:W}))}}))}return null},t}(c.default.Component);A.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var O=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),x=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string});A.propTypes={resolutions:O,sizes:x,fixed:d.default.oneOfType([O,d.default.arrayOf(O)]),fluid:d.default.oneOfType([x,d.default.arrayOf(x)]),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var T=A;t.default=T},214:function(e,t,a){"use strict";a(209)("fixed",function(e){return function(){return e(this,"tt","","")}})},221:function(e,t,a){"use strict";a(226),a(38);var n=a(0),r=a.n(n),i=a(276),s=a(268),o=a(269),l=a(271),c=a(272),d=a(270),u=a(275),f=a(273),p=a(232),m=a.n(p),g={link:{color:"black",textDecoration:"none"},table:{width:"100%",margin:"1em"}};t.a=function(e){var t=e.name,a=e.dates,n=e.position,p=e.description,h=e.linkUrl,b=r.a.useState(!1),w=b[0],y=b[1];return r.a.createElement("div",null,r.a.createElement(i.a,null,r.a.createElement(s.a,null,r.a.createElement("table",{style:g.table},r.a.createElement("tr",null,r.a.createElement("td",null,h?h.startsWith("http")?r.a.createElement("a",{href:h,style:g.link,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(o.a,{title:t,subheader:a})):r.a.createElement("a",{href:h,style:g.link},r.a.createElement(o.a,{title:t,subheader:a})):r.a.createElement(o.a,{title:t,subheader:a})),p&&r.a.createElement("td",null,r.a.createElement(l.a,{disableSpacing:!0},r.a.createElement(c.a,{onClick:function(){y(!w)},"aria-expanded":w,"aria-label":"Show description"},r.a.createElement(m.a,null)))))),n&&r.a.createElement(d.a,{paragraph:!0,style:{marginLeft:"2em"}},n),p&&r.a.createElement(u.a,{in:w,timeout:"auto",unmountOnExit:!0},r.a.createElement(f.a,null,r.a.createElement(d.a,{paragraph:!0},p))))),r.a.createElement("br",null))}}}]);
//# sourceMappingURL=component---src-pages-index-js-1167463b3e5c04ab1bc8.js.map