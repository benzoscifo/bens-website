exports.id = 678;
exports.ids = [678];
exports.modules = {

/***/ 3204:
/***/ ((module) => {

"use strict";


const UPPERCASE = /[\p{Lu}]/u;
const LOWERCASE = /[\p{Ll}]/u;
const LEADING_CAPITAL = /^[\p{Lu}](?![\p{Lu}])/gu;
const IDENTIFIER = /([\p{Alpha}\p{N}_]|$)/u;
const SEPARATORS = /[_.\- ]+/;

const LEADING_SEPARATORS = new RegExp('^' + SEPARATORS.source);
const SEPARATORS_AND_IDENTIFIER = new RegExp(SEPARATORS.source + IDENTIFIER.source, 'gu');
const NUMBERS_AND_IDENTIFIER = new RegExp('\\d+' + IDENTIFIER.source, 'gu');

const preserveCamelCase = (string, toLowerCase, toUpperCase) => {
	let isLastCharLower = false;
	let isLastCharUpper = false;
	let isLastLastCharUpper = false;

	for (let i = 0; i < string.length; i++) {
		const character = string[i];

		if (isLastCharLower && UPPERCASE.test(character)) {
			string = string.slice(0, i) + '-' + string.slice(i);
			isLastCharLower = false;
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = true;
			i++;
		} else if (isLastCharUpper && isLastLastCharUpper && LOWERCASE.test(character)) {
			string = string.slice(0, i - 1) + '-' + string.slice(i - 1);
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = false;
			isLastCharLower = true;
		} else {
			isLastCharLower = toLowerCase(character) === character && toUpperCase(character) !== character;
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = toUpperCase(character) === character && toLowerCase(character) !== character;
		}
	}

	return string;
};

const preserveConsecutiveUppercase = (input, toLowerCase) => {
	LEADING_CAPITAL.lastIndex = 0;

	return input.replace(LEADING_CAPITAL, m1 => toLowerCase(m1));
};

const postProcess = (input, toUpperCase) => {
	SEPARATORS_AND_IDENTIFIER.lastIndex = 0;
	NUMBERS_AND_IDENTIFIER.lastIndex = 0;

	return input.replace(SEPARATORS_AND_IDENTIFIER, (_, identifier) => toUpperCase(identifier))
		.replace(NUMBERS_AND_IDENTIFIER, m => toUpperCase(m));
};

const camelCase = (input, options) => {
	if (!(typeof input === 'string' || Array.isArray(input))) {
		throw new TypeError('Expected the input to be `string | string[]`');
	}

	options = {
		pascalCase: false,
		preserveConsecutiveUppercase: false,
		...options
	};

	if (Array.isArray(input)) {
		input = input.map(x => x.trim())
			.filter(x => x.length)
			.join('-');
	} else {
		input = input.trim();
	}

	if (input.length === 0) {
		return '';
	}

	const toLowerCase = options.locale === false ?
		string => string.toLowerCase() :
		string => string.toLocaleLowerCase(options.locale);
	const toUpperCase = options.locale === false ?
		string => string.toUpperCase() :
		string => string.toLocaleUpperCase(options.locale);

	if (input.length === 1) {
		return options.pascalCase ? toUpperCase(input) : toLowerCase(input);
	}

	const hasUpperCase = input !== toLowerCase(input);

	if (hasUpperCase) {
		input = preserveCamelCase(input, toLowerCase, toUpperCase);
	}

	input = input.replace(LEADING_SEPARATORS, '');

	if (options.preserveConsecutiveUppercase) {
		input = preserveConsecutiveUppercase(input, toLowerCase);
	} else {
		input = toLowerCase(input);
	}

	if (options.pascalCase) {
		input = toUpperCase(input.charAt(0)) + input.slice(1);
	}

	return postProcess(input, toUpperCase);
};

module.exports = camelCase;
// TODO: Remove this for the next major release
module.exports["default"] = camelCase;


/***/ }),

/***/ 3040:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Jv": () => (/* binding */ U)
/* harmony export */ });
/* unused harmony exports GatsbyImage, MainImage, Placeholder, generateImageData, getImage, getImageData, getLowResolutionImageURL, getSrc, getSrcSet, withArtDirection */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6894);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var camelcase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3204);
/* harmony import */ var camelcase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(camelcase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i]);}return e;},n.apply(this,arguments);}function o(e,t){if(null==e)return{};var a,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)t.indexOf(a=n[i])>=0||(r[a]=e[a]);return r;}var s=(/* unused pure expression or super */ null && ([.25,.5,1,2])),l=(/* unused pure expression or super */ null && ([750,1080,1366,1920])),u=(/* unused pure expression or super */ null && ([320,654,768,1024,1366,1600,1920,2048,2560,3440,3840,4096])),d=(/* unused pure expression or super */ null && (4/3)),c=function(e){return console.warn(e);},h=function(e,t){return e-t;},g=function(e){return e.map(function(e){return e.src+" "+e.width+"w";}).join(",\n");};function p(e){var t=e.lastIndexOf(".");if(-1!==t){var a=e.slice(t+1);if("jpeg"===a)return"jpg";if(3===a.length||4===a.length)return a;}}function m(e){var t=e.layout,i=void 0===t?"constrained":t,r=e.width,o=e.height,s=e.sourceMetadata,l=e.breakpoints,u=e.aspectRatio,c=e.formats,h=void 0===c?["auto","webp"]:c;return h=h.map(function(e){return e.toLowerCase();}),i=a(i),r&&o?n({},e,{formats:h,layout:i,aspectRatio:r/o}):(s.width&&s.height&&!u&&(u=s.width/s.height),"fullWidth"===i?(r=r||s.width||l[l.length-1],o=o||Math.round(r/(u||d))):(r||(r=o&&u?o*u:s.width?s.width:o?Math.round(o/d):800),u&&!o?o=Math.round(r/u):u||(u=r/o)),n({},e,{width:r,height:o,aspectRatio:u,layout:i,formats:h}));}function f(e,t){var a;return void 0===t&&(t=20),null==(a=(0,(e=m(e)).generateImageSource)(e.filename,t,Math.round(t/e.aspectRatio),e.sourceMetadata.format||"jpg",e.fit,e.options))?void 0:a.src;}function v(e){var t,a=(e=m(e)).pluginName,i=e.sourceMetadata,r=e.generateImageSource,o=e.layout,u=e.fit,d=e.options,h=e.width,f=e.height,v=e.filename,k=e.reporter,E=void 0===k?{warn:c}:k,M=e.backgroundColor,S=e.placeholderURL;if(a||E.warn('[gatsby-plugin-image] "generateImageData" was not passed a plugin name'),"function"!=typeof r)throw new Error("generateImageSource must be a function");i&&(i.width||i.height)?i.format||(i.format=p(v)):i={width:h,height:f,format:(null==(t=i)?void 0:t.format)||p(v)||"auto"};var N=new Set(e.formats);(0===N.size||N.has("auto")||N.has(""))&&(N.delete("auto"),N.delete(""),N.add(i.format)),N.has("jpg")&&N.has("png")&&(E.warn("["+a+"] Specifying both 'jpg' and 'png' formats is not supported. Using 'auto' instead"),N.delete("jpg"===i.format?"png":"jpg"));var x=function(e){var t=e.filename,a=e.layout,i=void 0===a?"constrained":a,r=e.sourceMetadata,o=e.reporter,u=void 0===o?{warn:c}:o,d=e.breakpoints,h=void 0===d?l:d,g=Object.entries({width:e.width,height:e.height}).filter(function(e){var t=e[1];return"number"==typeof t&&t<1;});if(g.length)throw new Error("Specified dimensions for images must be positive numbers (> 0). Problem dimensions you have are "+g.map(function(e){return e.join(": ");}).join(", "));return"fixed"===i?function(e){var t=e.filename,a=e.sourceMetadata,i=e.width,r=e.height,n=e.fit,o=void 0===n?"cover":n,l=e.outputPixelDensities,u=e.reporter,d=void 0===u?{warn:c}:u,h=a.width/a.height,g=w(void 0===l?s:l);if(i&&r){var p=b(a,{width:i,height:r,fit:o});i=p.width,r=p.height,h=p.aspectRatio;}i?r||(r=Math.round(i/h)):i=r?Math.round(r*h):800;var m=i;if(a.width<i||a.height<r){var f=a.width<i?"width":"height";d.warn("\nThe requested "+f+' "'+("width"===f?i:r)+'px" for the image '+t+" was larger than the actual image "+f+" of "+a[f]+"px. If possible, replace the current image with a larger one."),"width"===f?(i=a.width,r=Math.round(i/h)):i=(r=a.height)*h;}return{sizes:g.filter(function(e){return e>=1;}).map(function(e){return Math.round(e*i);}).filter(function(e){return e<=a.width;}),aspectRatio:h,presentationWidth:m,presentationHeight:Math.round(m/h),unscaledWidth:i};}(e):"constrained"===i?y(e):"fullWidth"===i?y(n({breakpoints:h},e)):(u.warn("No valid layout was provided for the image at "+t+". Valid image layouts are fixed, fullWidth, and constrained. Found "+i),{sizes:[r.width],presentationWidth:r.width,presentationHeight:r.height,aspectRatio:r.width/r.height,unscaledWidth:r.width});}(n({},e,{sourceMetadata:i})),I={sources:[]},W=e.sizes;W||(W=function(e,t){switch(t){case"constrained":return"(min-width: "+e+"px) "+e+"px, 100vw";case"fixed":return e+"px";case"fullWidth":return"100vw";default:return;}}(x.presentationWidth,o)),N.forEach(function(e){var t=x.sizes.map(function(t){var i=r(v,t,Math.round(t/x.aspectRatio),e,u,d);if(null!=i&&i.width&&i.height&&i.src&&i.format)return i;E.warn("["+a+"] The resolver for image "+v+" returned an invalid value.");}).filter(Boolean);if("jpg"===e||"png"===e||"auto"===e){var i=t.find(function(e){return e.width===x.unscaledWidth;})||t[0];i&&(I.fallback={src:i.src,srcSet:g(t),sizes:W});}else{var n;null==(n=I.sources)||n.push({srcSet:g(t),sizes:W,type:"image/"+e});}});var j={images:I,layout:o,backgroundColor:M};switch(S&&(j.placeholder={fallback:S}),o){case"fixed":j.width=x.presentationWidth,j.height=x.presentationHeight;break;case"fullWidth":j.width=1,j.height=1/x.aspectRatio;break;case"constrained":j.width=e.width||x.presentationWidth||1,j.height=(j.width||1)/x.aspectRatio;}return j;}var w=function(e){return Array.from(new Set([1].concat(e))).sort(h);};function y(e){var t,a=e.sourceMetadata,i=e.width,r=e.height,n=e.fit,o=void 0===n?"cover":n,l=e.outputPixelDensities,u=e.breakpoints,d=e.layout,c=a.width/a.height,g=w(void 0===l?s:l);if(i&&r){var p=b(a,{width:i,height:r,fit:o});i=p.width,r=p.height,c=p.aspectRatio;}i=i&&Math.min(i,a.width),r=r&&Math.min(r,a.height),i||r||(r=(i=Math.min(800,a.width))/c),i||(i=r*c);var m=i;return(a.width<i||a.height<r)&&(i=a.width,r=a.height),i=Math.round(i),(null==u?void 0:u.length)>0?(t=u.filter(function(e){return e<=a.width;})).length<u.length&&!t.includes(a.width)&&t.push(a.width):t=(t=g.map(function(e){return Math.round(e*i);})).filter(function(e){return e<=a.width;}),"constrained"!==d||t.includes(i)||t.push(i),{sizes:t=t.sort(h),aspectRatio:c,presentationWidth:m,presentationHeight:Math.round(m/c),unscaledWidth:i};}function b(e,t){var a=e.width/e.height,i=t.width,r=t.height;switch(t.fit){case"fill":i=t.width?t.width:e.width,r=t.height?t.height:e.height;break;case"inside":var n=t.width?t.width:Number.MAX_SAFE_INTEGER,o=t.height?t.height:Number.MAX_SAFE_INTEGER;i=Math.min(n,Math.round(o*a)),r=Math.min(o,Math.round(n/a));break;case"outside":var s=t.width?t.width:0,l=t.height?t.height:0;i=Math.max(s,Math.round(l*a)),r=Math.max(l,Math.round(s/a));break;default:t.width&&!t.height&&(i=t.width,r=Math.round(t.width/a)),t.height&&!t.width&&(i=Math.round(t.height*a),r=t.height);}return{width:i,height:r,aspectRatio:i/r};}var k=(/* unused pure expression or super */ null && (["baseUrl","urlBuilder","sourceWidth","sourceHeight","pluginName","formats","breakpoints","options"])),E=(/* unused pure expression or super */ null && (["images","placeholder"]));function M(){return true&&true;}var S=function(e){var t;return function(e){var t,a;return Boolean(null==e||null==(t=e.images)||null==(a=t.fallback)?void 0:a.src);}(e)?e:function(e){return Boolean(null==e?void 0:e.gatsbyImageData);}(e)?e.gatsbyImageData:function(e){return Boolean(null==e?void 0:e.gatsbyImage);}(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData;},N=function(e){var t,a,i;return null==(t=S(e))||null==(a=t.images)||null==(i=a.fallback)?void 0:i.src;},x=function(e){var t,a,i;return null==(t=S(e))||null==(a=t.images)||null==(i=a.fallback)?void 0:i.srcSet;};function I(e){var t,a=e.baseUrl,i=e.urlBuilder,r=e.sourceWidth,s=e.sourceHeight,l=e.pluginName,d=void 0===l?"getImageData":l,c=e.formats,h=void 0===c?["auto"]:c,g=e.breakpoints,p=e.options,m=o(e,k);return null!=(t=g)&&t.length||"fullWidth"!==m.layout&&"FULL_WIDTH"!==m.layout||(g=u),v(n({},m,{pluginName:d,generateImageSource:function(e,t,a,r){return{width:t,height:a,format:r,src:i({baseUrl:e,width:t,height:a,options:p,format:r})};},filename:a,formats:h,breakpoints:g,sourceMetadata:{width:r,height:s,format:"auto"}}));}function W(e,t){var a,i,r,s=e.images,l=e.placeholder,u=n({},o(e,E),{images:n({},s,{sources:[]}),placeholder:l&&n({},l,{sources:[]})});return t.forEach(function(t){var a,i=t.media,r=t.image;i?(r.layout!==e.layout&&"development"==="production"&&0,(a=u.images.sources).push.apply(a,r.images.sources.map(function(e){return n({},e,{media:i});}).concat([{media:i,srcSet:r.images.fallback.srcSet}])),u.placeholder&&u.placeholder.sources.push({media:i,srcSet:r.placeholder.fallback})): false&&0;}),(a=u.images.sources).push.apply(a,s.sources),null!=l&&l.sources&&(null==(i=u.placeholder)||(r=i.sources).push.apply(r,l.sources)),u;}var j,R=["src","srcSet","loading","alt","shouldLoad"],_=["fallback","sources","shouldLoad"],A=function(t){var a=t.src,i=t.srcSet,r=t.loading,s=t.alt,l=void 0===s?"":s,u=t.shouldLoad,d=o(t,R);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img",n({},d,{decoding:"async",loading:r,src:u?a:void 0,"data-src":u?void 0:a,srcSet:u?i:void 0,"data-srcset":u?void 0:i,alt:l}));},O=function(t){var a=t.fallback,i=t.sources,r=void 0===i?[]:i,s=t.shouldLoad,l=void 0===s||s,u=o(t,_),d=u.sizes||(null==a?void 0:a.sizes),c=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(A,n({},u,a,{sizes:d,shouldLoad:l}));return r.length?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("picture",null,r.map(function(t){var a=t.media,i=t.srcSet,r=t.type;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("source",{key:a+"-"+r+"-"+i,type:r,media:a,srcSet:l?i:void 0,"data-srcset":l?void 0:i,sizes:d});}),c):c;};A.propTypes={src:prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,alt:prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,sizes:prop_types__WEBPACK_IMPORTED_MODULE_2__.string,srcSet:prop_types__WEBPACK_IMPORTED_MODULE_2__.string,shouldLoad:prop_types__WEBPACK_IMPORTED_MODULE_2__.bool},O.displayName="Picture",O.propTypes={alt:prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,shouldLoad:prop_types__WEBPACK_IMPORTED_MODULE_2__.bool,fallback:prop_types__WEBPACK_IMPORTED_MODULE_2__.exact({src:prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,srcSet:prop_types__WEBPACK_IMPORTED_MODULE_2__.string,sizes:prop_types__WEBPACK_IMPORTED_MODULE_2__.string}),sources:prop_types__WEBPACK_IMPORTED_MODULE_2__.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2__.exact({media:prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,type:prop_types__WEBPACK_IMPORTED_MODULE_2__.string,sizes:prop_types__WEBPACK_IMPORTED_MODULE_2__.string,srcSet:prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired}),prop_types__WEBPACK_IMPORTED_MODULE_2__.exact({media:prop_types__WEBPACK_IMPORTED_MODULE_2__.string,type:prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,sizes:prop_types__WEBPACK_IMPORTED_MODULE_2__.string,srcSet:prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired})]))};var T=["fallback"],z=function(t){var a=t.fallback,i=o(t,T);return a?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(O,n({},i,{fallback:{src:a},"aria-hidden":!0,alt:""})):/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",n({},i));};z.displayName="Placeholder",z.propTypes={fallback:prop_types__WEBPACK_IMPORTED_MODULE_2__.string,sources:null==(j=O.propTypes)?void 0:j.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null;}};var L=function(t){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment),null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(O,n({},t)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("noscript",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(O,n({},t,{shouldLoad:!0}))));};L.displayName="MainImage",L.propTypes=O.propTypes;var q=["children"],C=function(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("script",{type:"module",dangerouslySetInnerHTML:{__html:'const t="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;if(t){const t=document.querySelectorAll("img[data-main-image]");for(let e of t){e.dataset.src&&(e.setAttribute("src",e.dataset.src),e.removeAttribute("data-src")),e.dataset.srcset&&(e.setAttribute("srcset",e.dataset.srcset),e.removeAttribute("data-srcset"));const t=e.parentNode.querySelectorAll("source[data-srcset]");for(let e of t)e.setAttribute("srcset",e.dataset.srcset),e.removeAttribute("data-srcset");e.complete&&(e.style.opacity=1,e.parentNode.parentNode.querySelector("[data-placeholder-image]").style.opacity=0)}}'}});},D=function(t){var a=t.layout,i=t.width,r=t.height;return"fullWidth"===a?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{"aria-hidden":!0,style:{paddingTop:r/i*100+"%"}}):"constrained"===a?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{style:{maxWidth:i,display:"block"}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+r+"'%20width='"+i+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null;},P=function(a){var i=a.children,r=o(a,q);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(D,n({},r)),i,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(C,null));},H=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],F=["style","className"],B=function(e){return e.replace(/\n/g,"");},G=function(t){var a=t.as,i=void 0===a?"div":a,r=t.className,s=t.class,l=t.style,u=t.image,d=t.loading,c=void 0===d?"lazy":d,h=t.imgClassName,g=t.imgStyle,p=t.backgroundColor,m=t.objectFit,f=t.objectPosition,v=o(t,H);if(!u)return console.warn("[gatsby-plugin-image] Missing image prop"),null;s&&(r=s),g=n({objectFit:m,objectPosition:f,backgroundColor:p},g);var w=u.width,y=u.height,b=u.layout,k=u.images,E=u.placeholder,S=u.backgroundColor,N=function(e,t,a){var i={},r="gatsby-image-wrapper";return M()||(i.position="relative",i.overflow="hidden"),"fixed"===a?(i.width=e,i.height=t):"constrained"===a&&(M()||(i.display="inline-block",i.verticalAlign="top"),r="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:r,"data-gatsby-image-wrapper":"",style:i};}(w,y,b),x=N.style,I=N.className,W=o(N,F),j={fallback:void 0,sources:[]};return k.fallback&&(j.fallback=n({},k.fallback,{srcSet:k.fallback.srcSet?B(k.fallback.srcSet):void 0})),k.sources&&(j.sources=k.sources.map(function(e){return n({},e,{srcSet:B(e.srcSet)});})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(i,n({},W,{style:n({},x,l,{backgroundColor:p}),className:I+(r?" "+r:"")}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(P,{layout:b,width:w,height:y},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(z,n({},function(e,t,a,i,r,o,s,l){var u={};o&&(u.backgroundColor=o,"fixed"===a?(u.width=i,u.height=r,u.backgroundColor=o,u.position="relative"):("constrained"===a||"fullWidth"===a)&&(u.position="absolute",u.top=0,u.left=0,u.bottom=0,u.right=0)),s&&(u.objectFit=s),l&&(u.objectPosition=l);var d=n({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:n({opacity:1,transition:"opacity 500ms linear"},u)});return M()||(d.style={height:"100%",left:0,position:"absolute",top:0,width:"100%"}),d;}(E,0,b,w,y,S,m,f))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(L,n({"data-gatsby-image-ssr":"",className:h},v,function(e,t,a,i,r){return void 0===r&&(r={}),M()||(r=n({height:"100%",left:0,position:"absolute",top:0,transform:"translateZ(0)",transition:"opacity 250ms linear",width:"100%",willChange:"opacity"},r)),n({},a,{loading:i,shouldLoad:e,"data-main-image":"",style:n({},r,{opacity:0})});}("eager"===c,0,j,c,g)))));},V=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],U=function(t){return function(a){var i=a.src,r=a.__imageData,s=a.__error,l=o(a,V);return s&&console.warn(s),r?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(t,n({image:r},l)):(console.warn("Image not loaded",i),s||"development"!=="production"||0,null);};}(G),X=function(e,t){return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?prop_types__WEBPACK_IMPORTED_MODULE_2___default().number.apply((prop_types__WEBPACK_IMPORTED_MODULE_2___default()),[e,t].concat([].slice.call(arguments,2))):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.");},Y=new Set(["fixed","fullWidth","constrained"]),Z={src:(prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),alt:function(e,t,a){return e.alt||""===e.alt?prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.apply((prop_types__WEBPACK_IMPORTED_MODULE_2___default()),[e,t,a].concat([].slice.call(arguments,3))):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html');},width:X,height:X,sizes:(prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),layout:function(e){if(void 0!==e.layout&&!Y.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".');}};U.displayName="StaticImage",U.propTypes=Z;

/***/ }),

/***/ 6053:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: external "/Users/Ben.Cranwell/website-3/node_modules/react/index.js"
var index_js_ = __webpack_require__(6894);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 11 modules
var gatsby_browser_entry = __webpack_require__(7076);
;// CONCATENATED MODULE: ./src/components/Navbar.js
function Navbar(){return/*#__PURE__*/index_js_default().createElement("div",{className:"hidden md:block"},/*#__PURE__*/index_js_default().createElement("div",{className:"text-gray-700 body-font border-b border-gray-200"},/*#__PURE__*/index_js_default().createElement("div",{className:"h-full w-auto max-w-screen-xl py-4 px-10 mx-auto"},/*#__PURE__*/index_js_default().createElement("div",{className:"flex flex-col md:flex-row justify-between"},/*#__PURE__*/index_js_default().createElement("div",{className:"flex justify-center text-center md:text-left"},/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{className:"title-font font-medium items-center text-gray-900 mb-4 md:mb-0",href:"/"},/*#__PURE__*/index_js_default().createElement("div",{className:"flex items-center"},/*#__PURE__*/index_js_default().createElement("span",{className:"ml-3 text-xl text-gray-400 hover:text-pastelGreen hover:underline"},"Benjamin Cranwell")))),/*#__PURE__*/index_js_default().createElement("div",{className:"flex justify-center"},/*#__PURE__*/index_js_default().createElement("nav",{className:"md:ml-auto flex flex-col space-y-2 sm:space-y-0 md:flex-row items-center text-base"},/*#__PURE__*/index_js_default().createElement("div",null,/*#__PURE__*/index_js_default().createElement("a",{href:"/caseStudies",className:"mr-0 sm:mr-5 text-pastelGreen hover:text-brickRed hover:underline decoration-1 font-medium"},"Case Studies")),/*#__PURE__*/index_js_default().createElement("div",null,/*#__PURE__*/index_js_default().createElement("a",{href:"/about",className:"mr-0 sm:mr-5 text-pastelGreen hover:text-brickRed hover:underline decoration-1 font-medium"},"About")),/*#__PURE__*/index_js_default().createElement("div",null,/*#__PURE__*/index_js_default().createElement("a",{href:"/contact",className:"mr-0 sm:mr-5 text-pastelGreen hover:text-brickRed hover:underline decoration-1 font-medium"},"Contact"))))))));}
;// CONCATENATED MODULE: ./src/components/TitleBar.js
function TitleBar(){return/*#__PURE__*/index_js_default().createElement("div",{className:"block md:hidden"},/*#__PURE__*/index_js_default().createElement("div",{className:"text-gray-700 body-font border-b border-gray-200 rounded-b-lg"},/*#__PURE__*/index_js_default().createElement("div",{className:"h-full w-auto max-w-screen-xl pt-4 px-10 mx-auto"},/*#__PURE__*/index_js_default().createElement("div",{className:"flex flex-row justify-between"},/*#__PURE__*/index_js_default().createElement("div",{className:"flex justify-start text-center md:text-left"},/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{className:"title-font font-medium items-center text-gray-900 mb-4 md:mb-0",href:"/"},/*#__PURE__*/index_js_default().createElement("div",{className:"flex items-center"},/*#__PURE__*/index_js_default().createElement("span",{className:"ml-3 text-xl text-gray-400 hover:text-pastelGreen hover:underline"},"Benjamin Cranwell")))),/*#__PURE__*/index_js_default().createElement("div",{className:"flex flex-row mt-4"},/*#__PURE__*/index_js_default().createElement("a",{href:"https://www.linkedin.com/in/benjamin-cranwell-5945101a3",target:"_blank"},/*#__PURE__*/index_js_default().createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},/*#__PURE__*/index_js_default().createElement("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"}))),/*#__PURE__*/index_js_default().createElement("a",{href:"https://medium.com/@benjamin_51824/developer-to-ux-designer-portfolio-d508cdbfeb6a",target:"_blank"},/*#__PURE__*/index_js_default().createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6 mx-3"},/*#__PURE__*/index_js_default().createElement("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"}))))))));}
;// CONCATENATED MODULE: ./src/components/Layout.js
function Layout({children}){return/*#__PURE__*/index_js_default().createElement("div",{className:"layout min-h-screen"},/*#__PURE__*/index_js_default().createElement(Navbar,null),/*#__PURE__*/index_js_default().createElement(TitleBar,null),/*#__PURE__*/index_js_default().createElement("div",{className:"contentBasic"}),children);}

/***/ }),

/***/ 6558:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6894);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6053);
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3040);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7076);
/* harmony import */ var react_rough_notation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(350);
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1113);
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_parallax__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _images_darkBackground_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9997);
/* harmony import */ var _images_backgroundLight_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4430);
const Home=()=>{const{0:show}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_parallax__WEBPACK_IMPORTED_MODULE_4__.Parallax,{className:"parallaxImage",bgImage:_images_darkBackground_jpg__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,bgImageAlt:"argos logo",strength:800},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section",{className:"content text-gray-700 body-font my-0 md:my-20"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"flex flex-wrap mx-auto py-0 px-6 w-full max-w-screen-xl"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"w-full lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1",{className:" sm:text-4xl text-3xl mb-32 font-medium text-gray-400"},"I build web pages to be sleek, sharp and"," ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_rough_notation__WEBPACK_IMPORTED_MODULE_3__/* .RoughNotation */ .c,{type:"underline",show:show,color:"red"},"sustainable")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"flex w-full lg:w-1/4 justify-center pb-6"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__.Link,{className:"block w-full text-center bg-darkPastelGreen text-white font-bold hover:text-pastelGreen border-2 border-darkPastelGreen py-2 px-6 hover:bg-white rounded text-lg",to:"/caseStudies"},"My work"))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"w-full lg:max-w-lg lg:w-full md:w-1/2 w-5/6 rounded-lg mb-20"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__.Link,{to:"/about"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_6__/* .StaticImage */ .Jv,{className:"object-cover object-center rounded",alt:"hero",src:"../images/benjamin.jpg",rotate:"90",__imageData:__webpack_require__(8783)}))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"flex justify-center absolute left-1/2 bottom-40 md:inline hidden"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"animate-bounce bg-greyWhite dark:bg-slate-800 p-2 w-10 h-10 ring-1 ring-white dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_6__/* .StaticImage */ .Jv,{src:"../images/down-arrow.svg",width:45,aspectRatio:1,__imageData:__webpack_require__(6720)})))))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_parallax__WEBPACK_IMPORTED_MODULE_4__.Parallax,{className:"parallaxImage",bgImage:_images_backgroundLight_jpg__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,bgImageAlt:"background lite",strength:800},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section",{className:"content text-gray-700 body-font"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"flex flex-wrap mx-auto pb-20 px-6 w-full max-w-screen-xl"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"flex flex-col text-center w-full mb-8 sm:mb-16"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2",{className:"sm:text-3xl text-2xl font-semibold text-white mt-20"},"Projects")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"mini-card-grid overflow-x-scroll sm:overflow-hidden"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("article",{className:"mini-card module module-article article",id:"mini-post-342750"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("time",{datetime:"2021-06-23",title:"Originally published Jun 23, 2021"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong",null,"Project")," Mar 01, 2022"," "),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3",{className:"mini-card-title"},"Next: Fashion, Kids and Homeware Store"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__.Link,{className:"pt-4",to:"/caseStudies/next"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_6__/* .StaticImage */ .Jv,{src:"../images/next-home.png",layout:"constrained",className:"rounded-lg",__imageData:__webpack_require__(3537)})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"author-row"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__.Link,{className:"author-name",to:"/caseStudies/next"},"Heuristic Evaluation"," "))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("article",{className:"mini-card module module-article article",id:"mini-post-342448"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("time",{datetime:"2021-06-23",title:"Originally published Jun 23, 2021"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong",null,"Project")," 14 Feb 2022"," "),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3",{className:"mini-card-title"},"British Broadcasting Corporation News"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__.Link,{to:"/caseStudies/bbc"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_6__/* .StaticImage */ .Jv,{src:"../images/bbc-home.png",layout:"constrained",className:"rounded-lg",__imageData:__webpack_require__(4274)})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"author-row"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__.Link,{className:"author-name",to:"/caseStudies/bbc"},"Accessibility Evaluation"," "))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("article",{className:"mini-card module module-article article",id:"mini-post-342448"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("time",{datetime:"2021-06-23",title:"Originally published Jun 23, 2021"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong",null,"Project")," Feb 23, 2022"," "),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3",{className:"mini-card-title"},"An app to help employers during the hiring process"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__.Link,{to:"/caseStudies/bloodhound"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_6__/* .StaticImage */ .Jv,{src:"../images/bloodhound-home.png",layout:"fullWidth",className:"rounded-lg",__imageData:__webpack_require__(4368)})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"author-row"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__.Link,{className:"author-name",to:"/caseStudies/bloodhound"},"Case Study"," "))))))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section",{className:"flex flex-wrap mx-auto py-20 px-6 w-full max-w-screen-xl justify-around hidden md:flex"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"block text-center text-pastelGreen hover:text-white border-2 border-pastelGreen py-2 px-6 focusring hover:bg-darkPastelGreen rounded text-lg"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a",{href:"https://www.linkedin.com/in/benjamin-cranwell-5945101a3",target:"_blank"},"LinkedIn")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"block text-center text-pastelGreen hover:text-white border-2 border-pastelGreen py-2 px-6 focusring hover:bg-darkPastelGreen rounded text-lg"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a",{href:"https://medium.com/@benjamin_51824/developer-to-ux-designer-portfolio-d508cdbfeb6a",target:"_blank"},"Blog"))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("footer",{class:"inline md:hidden w-full bg-darkPastelGreen h-24 rounded-t-lg fixed left-0 bottom-0 flex justify-center items-center text-white text-xl h-screen py-2"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"flex justify-evenly"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"border-r-2 border-white px-4 py-3"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__.Link,{to:"/",className:"underline underline-offset-8"},"Home")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"border-r-2 border-white px-4 py-3"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__.Link,{to:"/caseStudies"},"Work")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"border-r-2 border-white px-4 py-3"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__.Link,{to:"/about"},"About")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"border-white px-4 py-3"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__.Link,{to:"/contact"},"Contact")))));};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ 1113:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function webpackUniversalModuleDefinition(e,t){ true?module.exports=t(__webpack_require__(6894)):0}("undefined"!=typeof self?self:this,(function(e){return function(e){var t={};function __nested_webpack_require_387__(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,__nested_webpack_require_387__),r.l=!0,r.exports}return __nested_webpack_require_387__.m=e,__nested_webpack_require_387__.c=t,__nested_webpack_require_387__.d=function(e,t,n){__nested_webpack_require_387__.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},__nested_webpack_require_387__.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__nested_webpack_require_387__.t=function(e,t){if(1&t&&(e=__nested_webpack_require_387__(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(__nested_webpack_require_387__.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)__nested_webpack_require_387__.d(n,r,function(t){return e[t]}.bind(null,r));return n},__nested_webpack_require_387__.n=function(e){var t=e&&e.__esModule?function getDefault(){return e.default}:function getModuleExports(){return e};return __nested_webpack_require_387__.d(t,"a",t),t},__nested_webpack_require_387__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},__nested_webpack_require_387__.p="",__nested_webpack_require_387__(__nested_webpack_require_387__.s=3)}([function(t,n){t.exports=e},function(e,t,n){"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var n,r=_getPrototypeOf(e);if(t){var o=_getPrototypeOf(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return _possibleConstructorReturn(this,n)}}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Background=t.Parallax=void 0;var o=r(n(0)),i=function(e){_inherits(Parallax,e);var t=_createSuper(Parallax);function Parallax(){return _classCallCheck(this,Parallax),t.apply(this,arguments)}return Parallax}(o.default.Component);t.Parallax=i;var a=function(e){_inherits(Background,e);var t=_createSuper(Background);function Background(){return _classCallCheck(this,Background),t.apply(this,arguments)}return Background}(o.default.Component);t.Background=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.canUseDOM=t.getNodeHeight=t.isScrolledIntoView=t.getWindowHeight=void 0,t.getWindowHeight=function(e){if(!e)return 0;var t=window,n=document,r=n.documentElement,o=n.getElementsByTagName("body")[0];return t.innerHeight||r.clientHeight||o.clientHeight},t.isScrolledIntoView=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2?arguments[2]:void 0;if(!r)return!1;var o=e.getBoundingClientRect().top-n,i=e.getBoundingClientRect().bottom+n;return o<=t.getWindowHeight(r)&&i>=0},t.getNodeHeight=function(e,n){return e?n&&"clientHeight"in n?n.clientHeight:t.getWindowHeight(e):0},t.canUseDOM=function(){return!("undefined"==typeof window||!window.document||!window.document.createElement)}},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Background=t.Parallax=void 0;var o=r(n(4));t.Parallax=o.default;var i=r(n(7));t.Background=i.default},function(e,t,n){"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var n,r=_getPrototypeOf(e);if(t){var o=_getPrototypeOf(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return _possibleConstructorReturn(this,n)}}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(0)),i=n(1),a=n(5),c=n(2),u=r(n(6)),s={position:"absolute",left:"50%",WebkitTransform:"translate3d(-50%, 0, 0)",transform:"translate3d(-50%, 0, 0)",WebkitTransformStyle:"preserve-3d",WebkitBackfaceVisibility:"hidden",MozBackfaceVisibility:"hidden",MsBackfaceVisibility:"hidden"},l=function(e){!function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}(Parallax,e);var t=_createSuper(Parallax);function Parallax(e){var n;return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Parallax),(n=t.call(this,e)).onWindowResize=function(){n.parentHeight=c.getNodeHeight(n.canUseDOM,n.parent),n.updatePosition()},n.onWindowLoad=function(){n.updatePosition()},n.onScroll=function(){if(n.canUseDOM){var e=Date.now();e-n.timestamp>=10&&c.isScrolledIntoView(n.node,100,n.canUseDOM)&&(window.requestAnimationFrame(n.updatePosition),n.timestamp=e)}},n.onContentMount=function(e){n.content=e},n.updatePosition=function(){if(n.content){var e=!1;n.contentHeight=n.content.getBoundingClientRect().height,n.contentWidth=n.node.getBoundingClientRect().width,n.img&&n.img.naturalWidth/n.img.naturalHeight<n.contentWidth/n.getImageHeight()&&(e=!0);var t=a.getRelativePosition(n.node,n.canUseDOM),r=!!n.img,o=n.bg&&n.state.splitChildren.bgChildren.length>0;r&&n.setImagePosition(t,e),o&&n.setBackgroundPosition(t),r||o||n.setState({percentage:t})}},n.state={bgImage:e.bgImage,bgImageSrcSet:e.bgImageSrcSet,bgImageSizes:e.bgImageSizes,imgStyle:s,bgStyle:Object.assign(Object.assign({},s),e.bgStyle),percentage:0,splitChildren:a.getSplitChildren(e)},n.canUseDOM=c.canUseDOM(),n.node=null,n.content=null,n.bgImageLoaded=!1,n.bgImageRef=void 0,n.parent=e.parent,n.parentHeight=c.getNodeHeight(n.canUseDOM,n.parent),n.timestamp=Date.now(),n.isDynamicBlur=a.getHasDynamicBlur(e.blur),n}return function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(Parallax,[{key:"componentDidMount",value:function componentDidMount(){var e=this.props.parent,t=this.state,n=t.bgImage,r=t.bgImageSrcSet,o=t.bgImageSizes;this.parent=e||document,this.addListeners(),n?this.loadImage(n,r,o):this.updatePosition()}},{key:"componentDidUpdate",value:function componentDidUpdate(e){var t=this.props,n=t.parent,r=t.bgImage,o=t.bgImageSrcSet,i=t.bgImageSizes,a=this.state.bgImage;e.parent!==n&&(this.removeListeners(this.parent),this.parent=n,n&&this.addListeners()),this.parentHeight=c.getNodeHeight(this.canUseDOM,this.parent),a!==r&&this.loadImage(r,o,i)}},{key:"componentWillUnmount",value:function componentWillUnmount(){this.removeListeners(this.parent),this.releaseImage()}},{key:"setBackgroundPosition",value:function setBackgroundPosition(e){var t=this.props,n=t.disabled,r=t.strength,o=Object.assign({},this.state.bgStyle);if(!n){var i="translate3d(-50%, ".concat((r<0?r:0)-r*e,"px, 0)");o.WebkitTransform=i,o.transform=i}this.setState({bgStyle:o,percentage:e})}},{key:"setImagePosition",value:function setImagePosition(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.props,r=n.disabled,o=n.strength,i=n.blur,c=t?"auto":"".concat(this.getImageHeight(),"px"),u=t?"".concat(this.contentWidth,"px"):"auto",s=Object.assign(Object.assign({},this.state.imgStyle),{height:c,width:u});if(!r){var l=o<0,f=(l?o:0)-o*e,p="translate3d(-50%, ".concat(f,"px, 0)"),d="none";i&&(d="blur(".concat(a.getBlurValue(this.isDynamicBlur,i,e),"px)")),s.WebkitTransform=p,s.transform=p,s.WebkitFilter=d,s.filter=d}this.setState({imgStyle:s,percentage:e})}},{key:"getImageHeight",value:function getImageHeight(){var e=this.props.strength,t=(e<0?2.5:1)*Math.abs(e);return Math.floor(this.contentHeight+t)}},{key:"loadImage",value:function loadImage(e,t,n){var r=this;this.releaseImage(),this.bgImageRef=new Image,this.bgImageRef.onload=function(o){r.setState({bgImage:e,bgImageSrcSet:t,bgImageSizes:n},(function(){return r.updatePosition()})),r.props.onLoad&&r.props.onLoad(o)},this.bgImageRef.onerror=this.bgImageRef.onload,this.bgImageRef.src=e,this.bgImageRef.srcset=t||"",this.bgImageRef.sizes=n||""}},{key:"releaseImage",value:function releaseImage(){this.bgImageRef&&(this.bgImageRef.onload=null,this.bgImageRef.onerror=null,delete this.bgImageRef)}},{key:"addListeners",value:function addListeners(){this.canUseDOM&&this.parent&&(this.parent.addEventListener("scroll",this.onScroll,!1),window.addEventListener("resize",this.onWindowResize,!1),window.addEventListener("load",this.onWindowLoad,!1))}},{key:"removeListeners",value:function removeListeners(e){this.canUseDOM&&(e&&e.removeEventListener("scroll",this.onScroll,!1),window.removeEventListener("resize",this.onWindowResize,!1),window.removeEventListener("load",this.onWindowLoad,!1))}},{key:"render",value:function render(){var e=this,t=this.props,n=t.className,r=t.style,i=t.bgClassName,a=t.contentClassName,c=t.bgImageAlt,s=t.renderLayer,l=t.bgImageStyle,f=t.lazy,p=this.state,d=p.bgImage,g=p.bgImageSrcSet,_=p.bgImageSizes,y=p.percentage,h=p.imgStyle,b=p.bgStyle,m=p.splitChildren;return o.default.createElement("div",{className:"react-parallax ".concat(n),style:Object.assign({position:"relative",overflow:"hidden"},r),ref:function ref(t){e.node=t}},d?o.default.createElement("img",{className:i,src:d,srcSet:g,sizes:_,ref:function ref(t){e.img=t},alt:c,style:Object.assign(Object.assign({},h),l),loading:f?"lazy":"eager"}):null,s?s(-(y-1)):null,m.bgChildren.length>0?o.default.createElement("div",{className:"react-parallax-background-children",ref:function ref(t){e.bg=t},style:b},m.bgChildren):null,o.default.createElement(u.default,{onMount:this.onContentMount,className:a},m.children))}}],[{key:"getDerivedStateFromProps",value:function getDerivedStateFromProps(e){return{splitChildren:a.getSplitChildren(e)}}}]),Parallax}(i.Parallax);l.defaultProps={bgClassName:"react-parallax-bgimage",bgImageAlt:"",className:"",contentClassName:"",disabled:!1,strength:100},t.default=l},function(e,t,n){"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.setBlur=t.getBlurValue=t.getHasDynamicBlur=t.getSplitChildren=t.getRelativePosition=t.getPercentage=void 0;var r=n(0),o=n(2);t.getPercentage=function(e,t,n){return(n-e)/(t-e)||0},t.getRelativePosition=function(e,n){if(!n)return 0;var r=e.getBoundingClientRect(),i=r.top,a=r.height,c=o.getNodeHeight(n),u=a>c?a:c,s=Math.round(i>u?u:i);return t.getPercentage(0,u,s)},t.getSplitChildren=function(e){var t=[],n=r.Children.toArray(e.children);return n.forEach((function(e,r){var o=e;o.type&&o.type.isParallaxBackground&&(t=t.concat(n.splice(r,1)))})),{bgChildren:t,children:n}},t.getHasDynamicBlur=function(e){return"object"===_typeof(e)&&void 0!==e.min&&void 0!==e.max},t.getBlurValue=function(e,t,n){return e?t.min+(1-n)*t.max:t},t.setBlur=function(e,t){e.style.webkitFilter="blur(".concat(t,"px)"),e.style.filter="blur(".concat(t,"px)")}},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(0));t.default=function ParallaxChildren(e){var t=e.children,n=e.onMount,r=e.className;return o.default.createElement("div",{ref:function ref(e){return n(e)},className:r||"react-parallax-content",style:{position:"relative"}},t)}},function(e,t,n){"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var n,r=_getPrototypeOf(e);if(t){var o=_getPrototypeOf(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return _possibleConstructorReturn(this,n)}}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(0)),i=function(e){!function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}(Background,e);var t=_createSuper(Background);function Background(){return _classCallCheck(this,Background),t.apply(this,arguments)}return function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(Background,[{key:"render",value:function render(){var e=this.props,t=e.className,n=e.children;return o.default.createElement("div",{className:"react-parallax-background ".concat(t)},n)}}]),Background}(n(1).Background);i.defaultProps={className:""},i.isParallaxBackground=!0,t.default=i}])}));

/***/ }),

/***/ 350:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "c": () => (/* binding */ RoughNotation)
});

// UNUSED EXPORTS: RoughNotationGroup

// EXTERNAL MODULE: external "/Users/Ben.Cranwell/website-3/node_modules/react/index.js"
var index_js_ = __webpack_require__(6894);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
;// CONCATENATED MODULE: ./node_modules/rough-notation/lib/rough-notation.esm.js
const t="http://www.w3.org/2000/svg";class e{constructor(t){this.seed=t}next(){return this.seed?(2**31-1&(this.seed=Math.imul(48271,this.seed)))/2**31:Math.random()}}function s(t,e,s,i,n){return{type:"path",ops:c(t,e,s,i,n)}}function i(t,e,i){const n=(t||[]).length;if(n>2){const s=[];for(let e=0;e<n-1;e++)s.push(...c(t[e][0],t[e][1],t[e+1][0],t[e+1][1],i));return e&&s.push(...c(t[n-1][0],t[n-1][1],t[0][0],t[0][1],i)),{type:"path",ops:s}}return 2===n?s(t[0][0],t[0][1],t[1][0],t[1][1],i):{type:"path",ops:[]}}function n(t,e,s,n,o){return function(t,e){return i(t,!0,e)}([[t,e],[t+s,e],[t+s,e+n],[t,e+n]],o)}function o(t,e,s,i,n){return function(t,e,s,i){const[n,o]=l(i.increment,t,e,i.rx,i.ry,1,i.increment*h(.1,h(.4,1,s),s),s);let r=f(n,null,s);if(!s.disableMultiStroke){const[n]=l(i.increment,t,e,i.rx,i.ry,1.5,0,s),o=f(n,null,s);r=r.concat(o)}return{estimatedPoints:o,opset:{type:"path",ops:r}}}(t,e,n,function(t,e,s){const i=Math.sqrt(2*Math.PI*Math.sqrt((Math.pow(t/2,2)+Math.pow(e/2,2))/2)),n=Math.max(s.curveStepCount,s.curveStepCount/Math.sqrt(200)*i),o=2*Math.PI/n;let r=Math.abs(t/2),h=Math.abs(e/2);const c=1-s.curveFitting;return r+=a(r*c,s),h+=a(h*c,s),{increment:o,rx:r,ry:h}}(s,i,n)).opset}function r(t){return t.randomizer||(t.randomizer=new e(t.seed||0)),t.randomizer.next()}function h(t,e,s,i=1){return s.roughness*i*(r(s)*(e-t)+t)}function a(t,e,s=1){return h(-t,t,e,s)}function c(t,e,s,i,n,o=!1){const r=o?n.disableMultiStrokeFill:n.disableMultiStroke,h=u(t,e,s,i,n,!0,!1);if(r)return h;const a=u(t,e,s,i,n,!0,!0);return h.concat(a)}function u(t,e,s,i,n,o,h){const c=Math.pow(t-s,2)+Math.pow(e-i,2),u=Math.sqrt(c);let f=1;f=u<200?1:u>500?.4:-.0016668*u+1.233334;let l=n.maxRandomnessOffset||0;l*l*100>c&&(l=u/10);const g=l/2,d=.2+.2*r(n);let p=n.bowing*n.maxRandomnessOffset*(i-e)/200,_=n.bowing*n.maxRandomnessOffset*(t-s)/200;p=a(p,n,f),_=a(_,n,f);const m=[],w=()=>a(g,n,f),v=()=>a(l,n,f);return o&&(h?m.push({op:"move",data:[t+w(),e+w()]}):m.push({op:"move",data:[t+a(l,n,f),e+a(l,n,f)]})),h?m.push({op:"bcurveTo",data:[p+t+(s-t)*d+w(),_+e+(i-e)*d+w(),p+t+2*(s-t)*d+w(),_+e+2*(i-e)*d+w(),s+w(),i+w()]}):m.push({op:"bcurveTo",data:[p+t+(s-t)*d+v(),_+e+(i-e)*d+v(),p+t+2*(s-t)*d+v(),_+e+2*(i-e)*d+v(),s+v(),i+v()]}),m}function f(t,e,s){const i=t.length,n=[];if(i>3){const o=[],r=1-s.curveTightness;n.push({op:"move",data:[t[1][0],t[1][1]]});for(let e=1;e+2<i;e++){const s=t[e];o[0]=[s[0],s[1]],o[1]=[s[0]+(r*t[e+1][0]-r*t[e-1][0])/6,s[1]+(r*t[e+1][1]-r*t[e-1][1])/6],o[2]=[t[e+1][0]+(r*t[e][0]-r*t[e+2][0])/6,t[e+1][1]+(r*t[e][1]-r*t[e+2][1])/6],o[3]=[t[e+1][0],t[e+1][1]],n.push({op:"bcurveTo",data:[o[1][0],o[1][1],o[2][0],o[2][1],o[3][0],o[3][1]]})}if(e&&2===e.length){const t=s.maxRandomnessOffset;n.push({op:"lineTo",data:[e[0]+a(t,s),e[1]+a(t,s)]})}}else 3===i?(n.push({op:"move",data:[t[1][0],t[1][1]]}),n.push({op:"bcurveTo",data:[t[1][0],t[1][1],t[2][0],t[2][1],t[2][0],t[2][1]]})):2===i&&n.push(...c(t[0][0],t[0][1],t[1][0],t[1][1],s));return n}function l(t,e,s,i,n,o,r,h){const c=[],u=[],f=a(.5,h)-Math.PI/2;u.push([a(o,h)+e+.9*i*Math.cos(f-t),a(o,h)+s+.9*n*Math.sin(f-t)]);for(let r=f;r<2*Math.PI+f-.01;r+=t){const t=[a(o,h)+e+i*Math.cos(r),a(o,h)+s+n*Math.sin(r)];c.push(t),u.push(t)}return u.push([a(o,h)+e+i*Math.cos(f+2*Math.PI+.5*r),a(o,h)+s+n*Math.sin(f+2*Math.PI+.5*r)]),u.push([a(o,h)+e+.98*i*Math.cos(f+r),a(o,h)+s+.98*n*Math.sin(f+r)]),u.push([a(o,h)+e+.9*i*Math.cos(f+.5*r),a(o,h)+s+.9*n*Math.sin(f+.5*r)]),[u,c]}function g(t,e){return{maxRandomnessOffset:2,roughness:"highlight"===t?3:1.5,bowing:1,stroke:"#000",strokeWidth:1.5,curveTightness:0,curveFitting:.95,curveStepCount:9,fillStyle:"hachure",fillWeight:-1,hachureAngle:-41,hachureGap:-1,dashOffset:-1,dashGap:-1,zigzagOffset:-1,combineNestedSvgPaths:!1,disableMultiStroke:"double"!==t,disableMultiStrokeFill:!1,seed:e}}function d(e,r,h,a,c,u){const f=[];let l=h.strokeWidth||2;const d=function(t){const e=t.padding;if(e||0===e){if("number"==typeof e)return[e,e,e,e];if(Array.isArray(e)){const t=e;if(t.length)switch(t.length){case 4:return[...t];case 1:return[t[0],t[0],t[0],t[0]];case 2:return[...t,...t];case 3:return[...t,t[1]];default:return[t[0],t[1],t[2],t[3]]}}}return[5,5,5,5]}(h),p=void 0===h.animate||!!h.animate,_=h.iterations||2,m=h.rtl?1:0,w=g("single",u);switch(h.type){case"underline":{const t=r.y+r.h+d[2];for(let e=m;e<_+m;e++)e%2?f.push(s(r.x+r.w,t,r.x,t,w)):f.push(s(r.x,t,r.x+r.w,t,w));break}case"strike-through":{const t=r.y+r.h/2;for(let e=m;e<_+m;e++)e%2?f.push(s(r.x+r.w,t,r.x,t,w)):f.push(s(r.x,t,r.x+r.w,t,w));break}case"box":{const t=r.x-d[3],e=r.y-d[0],s=r.w+(d[1]+d[3]),i=r.h+(d[0]+d[2]);for(let o=0;o<_;o++)f.push(n(t,e,s,i,w));break}case"bracket":{const t=Array.isArray(h.brackets)?h.brackets:h.brackets?[h.brackets]:["right"],e=r.x-2*d[3],s=r.x+r.w+2*d[1],n=r.y-2*d[0],o=r.y+r.h+2*d[2];for(const h of t){let t;switch(h){case"bottom":t=[[e,r.y+r.h],[e,o],[s,o],[s,r.y+r.h]];break;case"top":t=[[e,r.y],[e,n],[s,n],[s,r.y]];break;case"left":t=[[r.x,n],[e,n],[e,o],[r.x,o]];break;case"right":t=[[r.x+r.w,n],[s,n],[s,o],[r.x+r.w,o]]}t&&f.push(i(t,!1,w))}break}case"crossed-off":{const t=r.x,e=r.y,i=t+r.w,n=e+r.h;for(let o=m;o<_+m;o++)o%2?f.push(s(i,n,t,e,w)):f.push(s(t,e,i,n,w));for(let o=m;o<_+m;o++)o%2?f.push(s(t,n,i,e,w)):f.push(s(i,e,t,n,w));break}case"circle":{const t=g("double",u),e=r.w+(d[1]+d[3]),s=r.h+(d[0]+d[2]),i=r.x-d[3]+e/2,n=r.y-d[0]+s/2,h=Math.floor(_/2),a=_-2*h;for(let r=0;r<h;r++)f.push(o(i,n,e,s,t));for(let t=0;t<a;t++)f.push(o(i,n,e,s,w));break}case"highlight":{const t=g("highlight",u);l=.95*r.h;const e=r.y+r.h/2;for(let i=m;i<_+m;i++)i%2?f.push(s(r.x+r.w,e,r.x,e,t)):f.push(s(r.x,e,r.x+r.w,e,t));break}}if(f.length){const s=function(t){const e=[];for(const s of t){let t="";for(const i of s.ops){const s=i.data;switch(i.op){case"move":t.trim()&&e.push(t.trim()),t=`M${s[0]} ${s[1]} `;break;case"bcurveTo":t+=`C${s[0]} ${s[1]}, ${s[2]} ${s[3]}, ${s[4]} ${s[5]} `;break;case"lineTo":t+=`L${s[0]} ${s[1]} `}}t.trim()&&e.push(t.trim())}return e}(f),i=[],n=[];let o=0;const r=(t,e,s)=>t.setAttribute(e,s);for(const a of s){const s=document.createElementNS(t,"path");if(r(s,"d",a),r(s,"fill","none"),r(s,"stroke",h.color||"currentColor"),r(s,"stroke-width",""+l),p){const t=s.getTotalLength();i.push(t),o+=t}e.appendChild(s),n.push(s)}if(p){let t=0;for(let e=0;e<n.length;e++){const s=n[e],r=i[e],h=o?c*(r/o):0,u=a+t,f=s.style;f.strokeDashoffset=""+r,f.strokeDasharray=""+r,f.animation=`rough-notation-dash ${h}ms ease-out ${u}ms forwards`,t+=h}}}}class p{constructor(t,e){this._state="unattached",this._resizing=!1,this._seed=Math.floor(Math.random()*2**31),this._lastSizes=[],this._animationDelay=0,this._resizeListener=()=>{this._resizing||(this._resizing=!0,setTimeout(()=>{this._resizing=!1,"showing"===this._state&&this.haveRectsChanged()&&this.show()},400))},this._e=t,this._config=JSON.parse(JSON.stringify(e)),this.attach()}get animate(){return this._config.animate}set animate(t){this._config.animate=t}get animationDuration(){return this._config.animationDuration}set animationDuration(t){this._config.animationDuration=t}get iterations(){return this._config.iterations}set iterations(t){this._config.iterations=t}get color(){return this._config.color}set color(t){this._config.color!==t&&(this._config.color=t,this.refresh())}get strokeWidth(){return this._config.strokeWidth}set strokeWidth(t){this._config.strokeWidth!==t&&(this._config.strokeWidth=t,this.refresh())}get padding(){return this._config.padding}set padding(t){this._config.padding!==t&&(this._config.padding=t,this.refresh())}attach(){if("unattached"===this._state&&this._e.parentElement){!function(){if(!window.__rno_kf_s){const t=window.__rno_kf_s=document.createElement("style");t.textContent="@keyframes rough-notation-dash { to { stroke-dashoffset: 0; } }",document.head.appendChild(t)}}();const e=this._svg=document.createElementNS(t,"svg");e.setAttribute("class","rough-annotation");const s=e.style;s.position="absolute",s.top="0",s.left="0",s.overflow="visible",s.pointerEvents="none",s.width="100px",s.height="100px";const i="highlight"===this._config.type;if(this._e.insertAdjacentElement(i?"beforebegin":"afterend",e),this._state="not-showing",i){const t=window.getComputedStyle(this._e).position;(!t||"static"===t)&&(this._e.style.position="relative")}this.attachListeners()}}detachListeners(){window.removeEventListener("resize",this._resizeListener),this._ro&&this._ro.unobserve(this._e)}attachListeners(){this.detachListeners(),window.addEventListener("resize",this._resizeListener,{passive:!0}),!this._ro&&"ResizeObserver"in window&&(this._ro=new window.ResizeObserver(t=>{for(const e of t)e.contentRect&&this._resizeListener()})),this._ro&&this._ro.observe(this._e)}haveRectsChanged(){if(this._lastSizes.length){const t=this.rects();if(t.length!==this._lastSizes.length)return!0;for(let e=0;e<t.length;e++)if(!this.isSameRect(t[e],this._lastSizes[e]))return!0}return!1}isSameRect(t,e){const s=(t,e)=>Math.round(t)===Math.round(e);return s(t.x,e.x)&&s(t.y,e.y)&&s(t.w,e.w)&&s(t.h,e.h)}isShowing(){return"not-showing"!==this._state}refresh(){this.isShowing()&&!this.pendingRefresh&&(this.pendingRefresh=Promise.resolve().then(()=>{this.isShowing()&&this.show(),delete this.pendingRefresh}))}show(){switch(this._state){case"unattached":break;case"showing":this.hide(),this._svg&&this.render(this._svg,!0);break;case"not-showing":this.attach(),this._svg&&this.render(this._svg,!1)}}hide(){if(this._svg)for(;this._svg.lastChild;)this._svg.removeChild(this._svg.lastChild);this._state="not-showing"}remove(){this._svg&&this._svg.parentElement&&this._svg.parentElement.removeChild(this._svg),this._svg=void 0,this._state="unattached",this.detachListeners()}render(t,e){let s=this._config;e&&(s=JSON.parse(JSON.stringify(this._config)),s.animate=!1);const i=this.rects();let n=0;i.forEach(t=>n+=t.w);const o=s.animationDuration||800;let r=0;for(let e=0;e<i.length;e++){const h=o*(i[e].w/n);d(t,i[e],s,r+this._animationDelay,h,this._seed),r+=h}this._lastSizes=i,this._state="showing"}rects(){const t=[];if(this._svg)if(this._config.multiline){const e=this._e.getClientRects();for(let s=0;s<e.length;s++)t.push(this.svgRect(this._svg,e[s]))}else t.push(this.svgRect(this._svg,this._e.getBoundingClientRect()));return t}svgRect(t,e){const s=t.getBoundingClientRect(),i=e;return{x:(i.x||i.left)-(s.x||s.left),y:(i.y||i.top)-(s.y||s.top),w:i.width,h:i.height}}}function _(t,e){return new p(t,e)}function m(t){let e=0;for(const s of t){const t=s;t._animationDelay=e;e+=0===t.animationDuration?0:t.animationDuration||800}const s=[...t];return{show(){for(const t of s)t.show()},hide(){for(const t of s)t.hide()}}}

;// CONCATENATED MODULE: ./node_modules/react-rough-notation/dist/module.es.js



/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

var GroupContext = (0,index_js_.createContext)(null);
var GroupDispatchContext = (0,index_js_.createContext)(null);
var initialState = {
    annotations: [],
};
function reducer(state, _a) {
    var type = _a.type, payload = _a.payload;
    switch (type) {
        case 'ADD': {
            var annotations = __spreadArrays(state.annotations, [payload]);
            var annotationsToSort = annotations.reduce(function (toSort, annotation) {
                var newAnnotations = __assign({}, toSort);
                if (typeof annotation.order === 'number') {
                    newAnnotations.withOrder = __spreadArrays(newAnnotations.withOrder, [
                        annotation,
                    ]).sort(function (a, b) { return a.order - b.order; });
                }
                else {
                    newAnnotations.withoutOrder = __spreadArrays(newAnnotations.withoutOrder, [
                        annotation,
                    ]);
                }
                return newAnnotations;
            }, {
                withOrder: [],
                withoutOrder: [],
            });
            return __assign(__assign({}, state), { annotations: __spreadArrays(annotationsToSort.withOrder, annotationsToSort.withoutOrder) });
        }
        default:
            return state;
    }
}
var RoughNotationGroup = function (_a) {
    var children = _a.children, show = _a.show;
    var _b = useReducer(reducer, initialState), state = _b[0], dispatch = _b[1];
    var timeouts = useRef([]);
    useEffect(function () {
        var nextTimeout = 0;
        state.annotations.forEach(function (_a) {
            var annotation = _a.annotation;
            if (show) {
                var timeout = setTimeout(function () {
                    annotation.show();
                }, nextTimeout);
                timeouts.current.push(timeout);
                nextTimeout += annotation.getAnnotation().animationDuration || 800;
            }
            else {
                annotation.hide();
                timeouts.current.forEach(function (timeout) {
                    clearTimeout(timeout);
                    timeouts.current = timeouts.current.filter(function (currentTimeout) { return currentTimeout !== timeout; });
                });
            }
        });
    }, [show, state, timeouts]);
    return (React.createElement(GroupContext.Provider, { value: state },
        React.createElement(GroupDispatchContext.Provider, { value: dispatch }, children)));
};
var useGroupContext = function (annotation, order) {
    var context = (0,index_js_.useContext)(GroupContext);
    var dispatch = (0,index_js_.useContext)(GroupDispatchContext);
    var initialProps = (0,index_js_.useRef)({ annotation: annotation, context: context, dispatch: dispatch, order: order });
    (0,index_js_.useEffect)(function () {
        var _a = initialProps.current, currentAnnotation = _a.annotation, currentContext = _a.context, currentDispatch = _a.dispatch, currentOrder = _a.order;
        if (!currentContext) {
            return;
        }
        if (currentDispatch) {
            return currentDispatch({
                type: 'ADD',
                payload: { annotation: currentAnnotation, order: currentOrder },
            });
        }
    }, []);
};

var RoughNotation = function (_a) {
    var _b = _a.animate, animate = _b === void 0 ? true : _b, _c = _a.animationDelay, animationDelay = _c === void 0 ? 0 : _c, _d = _a.animationDuration, animationDuration = _d === void 0 ? 800 : _d, brackets = _a.brackets, children = _a.children, color = _a.color, _e = _a.customElement, customElement = _e === void 0 ? 'span' : _e, getAnnotationObject = _a.getAnnotationObject, _f = _a.iterations, iterations = _f === void 0 ? 2 : _f, _g = _a.multiline, multiline = _g === void 0 ? false : _g, order = _a.order, _h = _a.padding, padding = _h === void 0 ? 5 : _h, _j = _a.show, show = _j === void 0 ? false : _j, _k = _a.strokeWidth, strokeWidth = _k === void 0 ? 1 : _k, _l = _a.type, type = _l === void 0 ? 'underline' : _l, rest = __rest(_a, ["animate", "animationDelay", "animationDuration", "brackets", "children", "color", "customElement", "getAnnotationObject", "iterations", "multiline", "order", "padding", "show", "strokeWidth", "type"]);
    var element = (0,index_js_.useRef)(null);
    var annotation = (0,index_js_.useRef)();
    var innerVars = (0,index_js_.useRef)({
        playing: false,
        timeout: null,
    });
    var initialOptions = (0,index_js_.useRef)({
        animate: animate,
        animationDuration: animationDuration,
        brackets: brackets,
        color: color,
        getAnnotationObject: getAnnotationObject,
        iterations: iterations,
        multiline: multiline,
        padding: padding,
        strokeWidth: strokeWidth,
        type: type,
    });
    var showAnnotation = (0,index_js_.useCallback)(function () {
        if (!innerVars.current.timeout) {
            innerVars.current.timeout = window.setTimeout(function () {
                var _a, _b;
                innerVars.current.playing = true;
                (_b = (_a = annotation.current) === null || _a === void 0 ? void 0 : _a.show) === null || _b === void 0 ? void 0 : _b.call(_a);
                window.setTimeout(function () {
                    innerVars.current.playing = false;
                    innerVars.current.timeout = null;
                }, animationDuration);
            }, animationDelay);
        }
    }, [animationDelay, animationDuration]);
    var hideAnnotation = (0,index_js_.useCallback)(function () {
        var _a, _b;
        (_b = (_a = annotation.current) === null || _a === void 0 ? void 0 : _a.hide) === null || _b === void 0 ? void 0 : _b.call(_a);
        innerVars.current.playing = false;
        if (innerVars.current.timeout) {
            clearTimeout(innerVars.current.timeout);
            innerVars.current.timeout = null;
        }
    }, []);
    var getAnnotation = (0,index_js_.useCallback)(function () {
        return annotation.current;
    }, [annotation]);
    useGroupContext({
        getAnnotation: getAnnotation,
        show: showAnnotation,
        hide: hideAnnotation,
    }, typeof order === 'string' ? parseInt(order) : order);
    (0,index_js_.useEffect)(function () {
        var options = initialOptions.current;
        var getAnnotationObjectFromOptions = options.getAnnotationObject;
        annotation.current = _(element.current, options);
        if (getAnnotationObjectFromOptions) {
            getAnnotationObjectFromOptions(annotation.current);
        }
        return function () {
            var _a, _b;
            (_b = (_a = annotation.current) === null || _a === void 0 ? void 0 : _a.remove) === null || _b === void 0 ? void 0 : _b.call(_a);
        };
    }, []);
    (0,index_js_.useEffect)(function () {
        if (show) {
            showAnnotation();
        }
        else {
            hideAnnotation();
        }
    }, [
        annotation,
        show,
        animationDelay,
        innerVars,
        animationDuration,
        showAnnotation,
        hideAnnotation,
    ]);
    (0,index_js_.useEffect)(function () {
        if (annotation.current) {
            annotation.current.animate = animate;
            annotation.current.animationDuration = animationDuration;
            annotation.current.color = color;
            annotation.current.strokeWidth = strokeWidth;
            annotation.current.padding = padding;
        }
    }, [annotation, animate, animationDuration, color, strokeWidth, padding]);
    return index_js_default().createElement(customElement, __assign({ ref: element }, rest), children);
};


//# sourceMappingURL=module.es.js.map


/***/ }),

/***/ 4430:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/backgroundLight-07d135b609705ee7b2f4fd2a69ce6b24.jpg");

/***/ }),

/***/ 9997:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/darkBackground-9a7c14947ed6b8cf0f53d3f94b7fa338.jpg");

/***/ }),

/***/ 4274:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#98c8e8","images":{"fallback":{"src":"/static/b371e795c14e786d62a7730bd6bea4bd/aa820/bbc-home.png","srcSet":"/static/b371e795c14e786d62a7730bd6bea4bd/ece90/bbc-home.png 104w,\\n/static/b371e795c14e786d62a7730bd6bea4bd/d9e01/bbc-home.png 208w,\\n/static/b371e795c14e786d62a7730bd6bea4bd/aa820/bbc-home.png 415w","sizes":"(min-width: 415px) 415px, 100vw"},"sources":[{"srcSet":"/static/b371e795c14e786d62a7730bd6bea4bd/090d6/bbc-home.webp 104w,\\n/static/b371e795c14e786d62a7730bd6bea4bd/ca9a7/bbc-home.webp 208w,\\n/static/b371e795c14e786d62a7730bd6bea4bd/6f4c6/bbc-home.webp 415w","type":"image/webp","sizes":"(min-width: 415px) 415px, 100vw"}]},"width":415,"height":208}');

/***/ }),

/***/ 3537:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#68a898","images":{"fallback":{"src":"/static/f46edd7398c9c2edb3e8cebb3460da6a/aa820/next-home.png","srcSet":"/static/f46edd7398c9c2edb3e8cebb3460da6a/ece90/next-home.png 104w,\\n/static/f46edd7398c9c2edb3e8cebb3460da6a/d9e01/next-home.png 208w,\\n/static/f46edd7398c9c2edb3e8cebb3460da6a/aa820/next-home.png 415w","sizes":"(min-width: 415px) 415px, 100vw"},"sources":[{"srcSet":"/static/f46edd7398c9c2edb3e8cebb3460da6a/090d6/next-home.webp 104w,\\n/static/f46edd7398c9c2edb3e8cebb3460da6a/ca9a7/next-home.webp 208w,\\n/static/f46edd7398c9c2edb3e8cebb3460da6a/6f4c6/next-home.webp 415w","type":"image/webp","sizes":"(min-width: 415px) 415px, 100vw"}]},"width":415,"height":208}');

/***/ }),

/***/ 6720:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/1e1a71b6f0c355c1bd575b9b7183e5f3/94f1a/down-arrow.svg","srcSet":"/static/1e1a71b6f0c355c1bd575b9b7183e5f3/da5d9/down-arrow.svg 11w,\\n/static/1e1a71b6f0c355c1bd575b9b7183e5f3/00485/down-arrow.svg 23w,\\n/static/1e1a71b6f0c355c1bd575b9b7183e5f3/94f1a/down-arrow.svg 45w,\\n/static/1e1a71b6f0c355c1bd575b9b7183e5f3/c8dba/down-arrow.svg 90w","sizes":"(min-width: 45px) 45px, 100vw"},"sources":[{"srcSet":"/static/1e1a71b6f0c355c1bd575b9b7183e5f3/32806/down-arrow.webp 11w,\\n/static/1e1a71b6f0c355c1bd575b9b7183e5f3/65086/down-arrow.webp 23w,\\n/static/1e1a71b6f0c355c1bd575b9b7183e5f3/29677/down-arrow.webp 45w,\\n/static/1e1a71b6f0c355c1bd575b9b7183e5f3/5d191/down-arrow.webp 90w","type":"image/webp","sizes":"(min-width: 45px) 45px, 100vw"}]},"width":45,"height":45}');

/***/ }),

/***/ 8783:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#e8e8d8","images":{"fallback":{"src":"/static/d8d07c7eea1630f098c9446541e3b055/7723d/benjamin.jpg","srcSet":"/static/d8d07c7eea1630f098c9446541e3b055/03f1d/benjamin.jpg 751w,\\n/static/d8d07c7eea1630f098c9446541e3b055/d881a/benjamin.jpg 1503w,\\n/static/d8d07c7eea1630f098c9446541e3b055/7723d/benjamin.jpg 3005w","sizes":"(min-width: 3005px) 3005px, 100vw"},"sources":[{"srcSet":"/static/d8d07c7eea1630f098c9446541e3b055/b4316/benjamin.webp 751w,\\n/static/d8d07c7eea1630f098c9446541e3b055/052c4/benjamin.webp 1503w,\\n/static/d8d07c7eea1630f098c9446541e3b055/f3d64/benjamin.webp 3005w","type":"image/webp","sizes":"(min-width: 3005px) 3005px, 100vw"}]},"width":3005,"height":2504}');

/***/ }),

/***/ 4368:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"layout":"fullWidth","backgroundColor":"#285898","images":{"fallback":{"src":"/static/aad18464344ec7e290a36a23956e8cfe/fe5eb/bloodhound-home.png","srcSet":"/static/aad18464344ec7e290a36a23956e8cfe/fe5eb/bloodhound-home.png 415w","sizes":"100vw"},"sources":[{"srcSet":"/static/aad18464344ec7e290a36a23956e8cfe/a234f/bloodhound-home.webp 415w","type":"image/webp","sizes":"100vw"}]},"width":1,"height":0.5614457831325301}');

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-js.js.map