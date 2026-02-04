"use strict";
exports.id = 493;
exports.ids = [493];
exports.modules = {

/***/ 6941:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ ButtomContact)
});

// EXTERNAL MODULE: external "C:\\Users\\user\\Desktop\\roots\\node_modules\\react\\index.js"
var external_C_Users_user_Desktop_roots_node_modules_react_index_js_ = __webpack_require__(9179);
var external_C_Users_user_Desktop_roots_node_modules_react_index_js_default = /*#__PURE__*/__webpack_require__.n(external_C_Users_user_Desktop_roots_node_modules_react_index_js_);
// EXTERNAL MODULE: ./node_modules/jquery/dist/jquery.js
var jquery = __webpack_require__(7526);
var jquery_default = /*#__PURE__*/__webpack_require__.n(jquery);
// EXTERNAL MODULE: ./src/setupJquery.js
var setupJquery = __webpack_require__(3665);
;// CONCATENATED MODULE: ./src/components/ButtomContact/style.module.css
// Exports
var ripple = "style-module--ripple--8c1d2";

;// CONCATENATED MODULE: ./src/components/ButtomContact/index.jsx
const Component=()=>{(0,external_C_Users_user_Desktop_roots_node_modules_react_index_js_.useEffect)(()=>{jquery_default()(".ripple").ripples({resolution:512,// 描画解像度（大きすぎると重くなる）
dropRadius:10,// 波紋の半径（大きさ）
perturbance:0.009// 揺れの強さ
});return()=>{try{jquery_default()(".ripple").ripples("destroy");}catch(e){console.warn("Ripples destroy failed:",e);}};},[]);return/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("div",{className:`ripple ${ripple}`},/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("a",{href:"/"},"\u3054\u8CFC\u5165\u306F\u3053\u3061\u3089"));};/* harmony default export */ const ButtomContact = (Component);

/***/ }),

/***/ 6405:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9179);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3793);
const defaultCustom={y:100,x:0,scale:1,blur:0,once:true,amount:0.2,duration:0.8,delay:0};const config=custom=>{const{y,x,scale,blur,once,amount,duration,delay}={...defaultCustom,...custom};return{initial:{opacity:0,y,x,scale,filter:`blur(${blur}px)`},whileInView:{opacity:1,y:0,x:0,scale:1,filter:'blur(0px)'},viewport:{once,amount},transition:{duration,delay}};};const FadeIn=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(({children,custom={}},forwardedRef)=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__/* .motion */ .E.div,Object.assign({},config(custom),{ref:forwardedRef}),children));FadeIn.displayName='FadeIn';/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FadeIn);

/***/ }),

/***/ 1395:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ components_Layout)
});

// NAMESPACE OBJECT: ./src/components/Header/style.module.css
var Header_style_module_namespaceObject = {};
__webpack_require__.r(Header_style_module_namespaceObject);
__webpack_require__.d(Header_style_module_namespaceObject, {
  M0: () => (hamburger),
  bh: () => (header_inner),
  O9: () => (l_nav_body),
  aP: () => (l_nav_image),
  dv: () => (l_nav_inner),
  a1: () => (l_nav_nav),
  cx: () => (l_nav_outer),
  yD: () => (l_nav_wrap),
  jY: () => (logo),
  r$: () => (logoinner),
  bA: () => (style_module_open),
  $Z: () => (show),
  aw: () => (sp_menu),
  NM: () => (sp_nav)
});

// EXTERNAL MODULE: external "C:\\Users\\user\\Desktop\\roots\\node_modules\\react\\index.js"
var external_C_Users_user_Desktop_roots_node_modules_react_index_js_ = __webpack_require__(9179);
var external_C_Users_user_Desktop_roots_node_modules_react_index_js_default = /*#__PURE__*/__webpack_require__.n(external_C_Users_user_Desktop_roots_node_modules_react_index_js_);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 11 modules
var gatsby_browser_entry = __webpack_require__(7076);
;// CONCATENATED MODULE: ./src/components/Footer/style.module.css
// Exports
var footer = "style-module--footer--d5b7f";
var footerTop = "style-module--footerTop--d0274";
var footer_logo = "style-module--footer_logo--4f629";
var nav = "style-module--nav--30f57";
var nav_list = "style-module--nav_list--262d7";
var nav_item = "style-module--nav_item--38ea7";
var headercontact = "style-module--headercontact--527f4";
var companySec = "style-module--companySec--222ce";
var accessBoxOuter = "style-module--accessBoxOuter--ee996";
var accessBox = "style-module--accessBox--256b1";
var textBox = "style-module--textBox--d1a25";
var titleFlex = "style-module--titleFlex--8e6af";
var accessTextBox = "style-module--accessTextBox--17220";
var privacy_policy_link = "style-module--privacy_policy_link--ff712";
var copyright = "style-module--copyright--21ba2";

;// CONCATENATED MODULE: ./src/components/Footer/index.jsx
const Component=()=>{return/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement((external_C_Users_user_Desktop_roots_node_modules_react_index_js_default()).Fragment,null,/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("footer",{className:footer},/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("div",{className:"content"},/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("div",{className:footerTop},/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("nav",{className:nav},/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("ul",{className:nav_list},/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("li",{className:nav_item},/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement(gatsby_browser_entry.Link,{to:"/"},"\u30DB\u30FC\u30E0"))))))));};/* harmony default export */ const Footer = (Component);
;// CONCATENATED MODULE: ./src/components/Header/style.module.css
// Exports
var header_inner = "style-module--header_inner--b7e5c";
var logo = "style-module--logo--c43db";
var hamburger = "style-module--hamburger--0d67f";
var style_module_open = "style-module--open--2fed0";
var sp_menu = "style-module--sp_menu--6aedd";
var sp_nav = "style-module--sp_nav--7d27a";
var sp_nav_item = "style-module--sp_nav_item--c9a81";
var nav_img = "style-module--nav_img--6b2d0";
var l_nav_wrap = "style-module--l_nav_wrap--037e7";
var l_nav_outer = "style-module--l_nav_outer--f6094";
var l_nav_inner = "style-module--l_nav_inner--51aaa";
var l_nav_image = "style-module--l_nav_image--a0fd4";
var item = "style-module--item--1c27f";
var show = "style-module--show--44401";
var l_nav_body = "style-module--l_nav_body--92ea5";
var logoinner = "style-module--logoinner--be612";
var l_nav_nav = "style-module--l_nav_nav--a187c";
var pcnav = "style-module--pcnav--afc63";
var style_module_nav_list = "style-module--nav_list--79a33";
var style_module_nav_item = "style-module--nav_item--1e669";
var nav_inst = "style-module--nav_inst--a74b7";
var insta = "style-module--insta--a7722";
var menu = "style-module--menu--88109";
var sns_link = "style-module--sns_link--0b1ce";
var style_module_headercontact = "style-module--headercontact--42d3c";
var menu_item = "style-module--menu_item--42772";
var drop_menu_list = "style-module--drop_menu_list--6ced1";
var linkbox = "style-module--linkbox--c597e";
var spcontact = "style-module--spcontact--f37ab";

// EXTERNAL MODULE: ./src/images/logo.png
var images_logo = __webpack_require__(1720);
// EXTERNAL MODULE: ./src/components/FadeIn/index.jsx
var FadeIn = __webpack_require__(6405);
// EXTERNAL MODULE: ./src/images/top/code1.jpg
var code1 = __webpack_require__(616);
// EXTERNAL MODULE: ./src/images/top/code2.jpg
var code2 = __webpack_require__(937);
// EXTERNAL MODULE: ./src/images/top/img01.jpg
var img01 = __webpack_require__(3264);
// EXTERNAL MODULE: ./src/images/top/img02.jpg
var img02 = __webpack_require__(873);
;// CONCATENATED MODULE: ./src/components/Header/index.jsx
// import json from "/src/siteData.json"
// import { getPathFromTemplateType } from "/src/utils/getPathFromTemplateType"
const Header_Component=()=>{const{0:isOpen,1:setIsOpen}=(0,external_C_Users_user_Desktop_roots_node_modules_react_index_js_.useState)(false);const{0:isScrolled,1:setIsScrolled}=(0,external_C_Users_user_Desktop_roots_node_modules_react_index_js_.useState)(false);const toggleMenu=()=>setIsOpen(!isOpen);const{0:hoverId,1:setHoverId}=(0,external_C_Users_user_Desktop_roots_node_modules_react_index_js_.useState)("1");(0,external_C_Users_user_Desktop_roots_node_modules_react_index_js_.useEffect)(()=>{const handleScroll=()=>{if(typeof window!=="undefined"){setIsScrolled(window.scrollY>50);}};if(typeof window!=="undefined"){window.addEventListener("scroll",handleScroll);}return()=>{if(typeof window!=="undefined"){window.removeEventListener("scroll",handleScroll);}};},[]);return/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("header",{className:Header_style_module_namespaceObject.header},/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("div",{className:header_inner},/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("h1",null,/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement(gatsby_browser_entry.Link,{to:"/",className:logo},/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("img",{src:images_logo/* default */.Z,alt:"Roots"}))),/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("button",{className:`${hamburger} ${isOpen?style_module_open:""}`,onClick:toggleMenu,"aria-label":"\u30E1\u30CB\u30E5\u30FC\u3092\u958B\u9589"},/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("span",null),/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("span",null))),/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("div",{className:sp_menu,style:{opacity:isOpen?1:0,visibility:isOpen?"visible":"hidden",transition:"opacity 0.3s ease, visibility 0.3s ease",position:"fixed",top:0,right:0,width:"100%",height:"100vh",backgroundColor:"#fff",zIndex:1000// ハンバーガーより低く
}},/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("nav",{className:sp_nav},/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("div",{className:l_nav_wrap},/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("div",{className:l_nav_outer},/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("div",{className:l_nav_inner},/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("div",{className:l_nav_image},/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("ul",{className:Header_style_module_namespaceObject.images},/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("li",{className:hoverId==="1"?show:""},/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("img",{src:code1/* default */.Z,alt:""})),/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("li",{className:hoverId==="2"?show:""},/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("img",{src:code2/* default */.Z,alt:""})),/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("li",{className:hoverId==="3"?show:""},/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("img",{src:img01/* default */.Z,alt:""})),/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("li",{className:hoverId==="4"?show:""},/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("img",{src:img02/* default */.Z,alt:""})))),/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("div",{className:l_nav_body},/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("a",{className:logoinner,href:""},/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("img",{src:images_logo/* default */.Z,alt:""})),/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement(FadeIn/* default */.Z,null,/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("ul",{className:l_nav_nav},/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("li",null,/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("a",{href:"/Roots","data-id":"2",onMouseEnter:()=>setHoverId("2")},"visual")),/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("li",null,/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("a",{href:"/","data-id":"3",onMouseEnter:()=>setHoverId("3")},"visual2")),/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("li",null,/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("a",{href:"/","data-id":"4",onMouseEnter:()=>setHoverId("4")},"visual3")))))))))));};/* harmony default export */ const Header = (Header_Component);
;// CONCATENATED MODULE: ./src/components/Layout/style.module.css
// Exports
var main = "style-module--main--33332";

;// CONCATENATED MODULE: ./src/components/CustomCursor/style.module.css
// Exports
var cursor_dot = "style-module--cursor_dot--a60e2";
var cursor_follower = "style-module--cursor_follower--d0bf9";

;// CONCATENATED MODULE: ./src/components/CustomCursor/index.jsx
const CustomCursor=()=>{const cursorRef=(0,external_C_Users_user_Desktop_roots_node_modules_react_index_js_.useRef)(null);const followerRef=(0,external_C_Users_user_Desktop_roots_node_modules_react_index_js_.useRef)(null);(0,external_C_Users_user_Desktop_roots_node_modules_react_index_js_.useEffect)(()=>{const cursor=cursorRef.current;const follower=followerRef.current;let mouseX=0;let mouseY=0;let posX=0;let posY=0;const speed=0.1;// 追従速度。0.1〜0.2くらいが自然
const animate=()=>{posX+=(mouseX-posX)*speed;posY+=(mouseY-posY)*speed;follower.style.transform=`translate(${posX}px, ${posY}px)`;cursor.style.transform=`translate(${mouseX}px, ${mouseY}px)`;requestAnimationFrame(animate);};const mouseMove=e=>{mouseX=e.clientX;mouseY=e.clientY;};window.addEventListener("mousemove",mouseMove);animate();return()=>{window.removeEventListener("mousemove",mouseMove);};},[]);return/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement((external_C_Users_user_Desktop_roots_node_modules_react_index_js_default()).Fragment,null,/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("div",{ref:followerRef,className:cursor_follower}),/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("div",{ref:cursorRef,className:cursor_dot}));};/* harmony default export */ const components_CustomCursor = (CustomCursor);
// EXTERNAL MODULE: ./node_modules/@studio-freight/lenis/dist/lenis.mjs
var dist_lenis = __webpack_require__(2172);
;// CONCATENATED MODULE: ./src/components/SmoothScroll/index.jsx
const ScrollEffect=()=>{(0,external_C_Users_user_Desktop_roots_node_modules_react_index_js_.useEffect)(()=>{// クライアントサイドのみで実行
if(typeof window!=="undefined"){const lenis=new dist_lenis/* default */.Z();const raf=time=>{lenis.raf(time);requestAnimationFrame(raf);};requestAnimationFrame(raf);// クリーンアップ
return()=>{lenis.destroy();};}},[]);return null;// UIはレンダリングしない
};/* harmony default export */ const SmoothScroll = (ScrollEffect);
;// CONCATENATED MODULE: ./src/components/Layout/index.jsx
const Layout=({children})=>{return/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_.createElement(external_C_Users_user_Desktop_roots_node_modules_react_index_js_.Fragment,null,/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_.createElement(components_CustomCursor,null),/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_.createElement(SmoothScroll,null),/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_.createElement(Header,null),/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_.createElement("main",{className:main},children),/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_.createElement(Footer,null));};/* harmony default export */ const components_Layout = (Layout);

/***/ }),

/***/ 7308:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ TopVisual)
});

// NAMESPACE OBJECT: ./src/components/TopVisual/style.module.css
var style_module_namespaceObject = {};
__webpack_require__.r(style_module_namespaceObject);
__webpack_require__.d(style_module_namespaceObject, {
  Sf: () => (topvisual),
  JN: () => (tvImgBox),
  iK: () => (tvimg02)
});

// EXTERNAL MODULE: external "C:\\Users\\user\\Desktop\\roots\\node_modules\\react\\index.js"
var external_C_Users_user_Desktop_roots_node_modules_react_index_js_ = __webpack_require__(9179);
var external_C_Users_user_Desktop_roots_node_modules_react_index_js_default = /*#__PURE__*/__webpack_require__.n(external_C_Users_user_Desktop_roots_node_modules_react_index_js_);
;// CONCATENATED MODULE: ./src/components/TopVisual/style.module.css
// Exports
var topvisual = "style-module--topvisual--0dc70";
var zoomOut = "style-module--zoomOut--68ceb";
var tvImgBox = "style-module--tvImgBox--df7f5";
var tvimg02 = "style-module--tvimg02--4ae62";

// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/utils/use-in-view.mjs + 1 modules
var use_in_view = __webpack_require__(425);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs + 253 modules
var proxy = __webpack_require__(3793);
;// CONCATENATED MODULE: ./src/components/ZoomOut/index.jsx
const defaultCustom={// 位置は変えない（0 にする）
y:0,x:0,// 初期は少し大きめ -> in-view で 1 に戻す
scale:1.2,blur:0,once:true,amount:0.2,duration:0.8,delay:0};const ZoomOut=/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().forwardRef(({children,custom={}},forwardedRef)=>{const localRef=(0,external_C_Users_user_Desktop_roots_node_modules_react_index_js_.useRef)(null);const options={...defaultCustom,...custom};const{scale,blur,duration,delay,once,amount}=options;const isInView=(0,use_in_view/* useInView */.Y)(localRef,{once,amount});// 初期は scale: options.scale, opacity:0。
// in-view になったら scale:1, opacity:1 にする（位置は触らない）
return/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement(proxy/* motion */.E.div,{ref:el=>{localRef.current=el;if(forwardedRef)forwardedRef.current=el;},initial:{opacity:0,scale,filter:`blur(${blur}px)`},animate:isInView?{opacity:1,scale:1,filter:"blur(0px)"}:{},transition:{duration,delay},style:{transformOrigin:"center center",willChange:"transform, opacity"}},children);});ZoomOut.displayName="ZoomOut";/* harmony default export */ const components_ZoomOut = ((/* unused pure expression or super */ null && (ZoomOut)));
// EXTERNAL MODULE: ./src/images/top/code1.jpg
var code1 = __webpack_require__(616);
// EXTERNAL MODULE: ./src/images/top/img02.jpg
var img02 = __webpack_require__(873);
;// CONCATENATED MODULE: ./src/components/TopVisual/index.jsx
const Component=({kv})=>{return/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("div",{className:topvisual},/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("div",{className:tvImgBox},/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("img",{className:style_module_namespaceObject.tvimg01,src:code1/* default */.Z,alt:""}),/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("img",{className:tvimg02,src:img02/* default */.Z,alt:""})),/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("h2",null,"VISUAL"));};/* harmony default export */ const TopVisual = (Component);

/***/ }),

/***/ 8195:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home)
});

// EXTERNAL MODULE: external "C:\\Users\\user\\Desktop\\roots\\node_modules\\react\\index.js"
var external_C_Users_user_Desktop_roots_node_modules_react_index_js_ = __webpack_require__(9179);
var external_C_Users_user_Desktop_roots_node_modules_react_index_js_default = /*#__PURE__*/__webpack_require__.n(external_C_Users_user_Desktop_roots_node_modules_react_index_js_);
// EXTERNAL MODULE: ./src/components/Layout/index.jsx + 8 modules
var Layout = __webpack_require__(1395);
;// CONCATENATED MODULE: ./src/pages/Roots/style.module.css
// Exports
var vs_bk = "style-module--vs_bk--70cc4";
var Visualsec = "style-module--Visualsec--fce97";
var codeSec = "style-module--codeSec--df09c";
var codeTitle = "style-module--codeTitle--8a797";
var enBox = "style-module--enBox--bb4a4";
var en = "style-module--en--761b2";
var en2 = "style-module--en2--dd6e2";
var codeOuter = "style-module--codeOuter--60b54";
var codeBox = "style-module--codeBox--abe22";
var texyBox = "style-module--texyBox--4d80f";
var number = "style-module--number--2701d";
var codeBox01 = "style-module--codeBox01--aa9b1";
var right_en = "style-module--right_en--a8fb5";
var codeBox02 = "style-module--codeBox02--99cad";
var codeBox03 = "style-module--codeBox03--51fb0";
var left_en = "style-module--left_en--518b9";
var imgGrid = "style-module--imgGrid--0786d";
var gridItem = "style-module--gridItem--7bfb1";
var price = "style-module--price--6792f";
var gridItem01 = "style-module--gridItem01--b5740";
var gridItem02 = "style-module--gridItem02--9e716";
var gridItem03 = "style-module--gridItem03--50f1d";
var textBox = "style-module--textBox--af28b";

// EXTERNAL MODULE: ./src/components/ButtomContact/index.jsx + 1 modules
var ButtomContact = __webpack_require__(6941);
// EXTERNAL MODULE: ./src/components/TopVisual/index.jsx + 2 modules
var TopVisual = __webpack_require__(7308);
// EXTERNAL MODULE: ./src/components/FadeIn/index.jsx
var FadeIn = __webpack_require__(6405);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs + 253 modules
var proxy = __webpack_require__(3793);
// EXTERNAL MODULE: ./src/images/roots02.jpg
var roots02 = __webpack_require__(6411);
// EXTERNAL MODULE: ./src/images/top/code1.jpg
var code1 = __webpack_require__(616);
// EXTERNAL MODULE: ./src/images/top/code2.jpg
var code2 = __webpack_require__(937);
// EXTERNAL MODULE: ./src/images/top/img01.jpg
var img01 = __webpack_require__(3264);
// EXTERNAL MODULE: ./src/images/top/img02.jpg
var img02 = __webpack_require__(873);
// EXTERNAL MODULE: ./src/images/top/img03.jpg
var img03 = __webpack_require__(174);
;// CONCATENATED MODULE: ./src/pages/Roots/index.jsx
function Home(){const code=[{img:img01/* default */.Z},{img:img02/* default */.Z},{img:img03/* default */.Z}];const container={hidden:{opacity:1},show:{opacity:1,transition:{staggerChildren:0.35}}};const item={hidden:{opacity:0,y:30},show:{opacity:1,y:0,transition:{duration:1.4,ease:"easeOut"}}};return/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement(Layout/* default */.Z,null,/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement(TopVisual/* default */.Z,{kv:roots02/* default */.Z}),/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("div",{className:vs_bk},/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("section",{className:Visualsec},/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("p",null,"\u3053\u3053\u306B\u30C6\u30AD\u30B9\u30C8\u304C\u306F\u3044\u308A\u307E\u3059\u3053\u3053\u306B\u30C6\u30AD\u30B9\u30C8\u304C\u306F\u3044\u308A\u307E\u3059",/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("br",null),"\u3053\u3053\u306B\u30C6\u30AD\u30B9\u30C8\u304C\u306F\u3044\u308A\u307E\u3059",/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("br",null),"\u3053\u3053\u306B\u30C6\u30AD\u30B9\u30C8\u304C\u306F\u3044\u308A\u307E\u3057\u305F")),/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("section",{className:codeSec},/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("div",{className:codeTitle},/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("div",{className:enBox},/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("span",{className:en},"Look Book"),/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("span",{className:en2},"Look Book")),/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("h3",null,"\u30B3\u30FC\u30C7\u7D39\u4ECB")),/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("div",{className:codeOuter},/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement(FadeIn/* default */.Z,null,/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("div",{className:`${codeBox} ${codeBox01}`},/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("figure",null,/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("img",{src:code1/* default */.Z,alt:""})),/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement(FadeIn/* default */.Z,{custom:{delay:0.3,x:70,y:0}},/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("div",{className:texyBox},/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("span",{className:number},"01"),/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("h4",null,"Sweatshirt"),/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("p",null,"\u3053\u3053\u306B\u30C6\u30AD\u30B9\u30C8\u304C\u306F\u3044\u308A\u307E\u3059\u3053\u3053\u306B\u30C6\u30AD\u30B9\u30C8\u304C\u306F\u3044\u308A\u307E\u3059",/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("br",null),"\u3053\u3053\u306B\u30C6\u30AD\u30B9\u30C8\u304C\u306F\u3044\u308A\u307E\u3059"))),/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("p",{className:right_en},"Please pour the sun on my forehead Stay cool, open the window",/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("br",null),"and say hi That's how we always say good morning It's a blue",/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("br",null),"morning, ashio and toteto"))),/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement(FadeIn/* default */.Z,null,/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("div",{className:`${codeBox} ${codeBox02}`},/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("figure",null,/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("img",{src:code2/* default */.Z,alt:""})),/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement(FadeIn/* default */.Z,{custom:{delay:0.3,x:-70,y:0}},/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("div",{className:texyBox},/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("span",{className:number},"02"),/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("h4",null,"Trackjacket"),/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("p",null,"\u3053\u3053\u306B\u30C6\u30AD\u30B9\u30C8\u304C\u306F\u3044\u308A\u307E\u3059\u3053\u3053\u306B\u30C6\u30AD\u30B9\u30C8\u304C\u306F\u3044\u308A\u307E\u3059",/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("br",null),"\u3053\u3053\u306B\u30C6\u30AD\u30B9\u30C8\u304C\u306F\u3044\u308A\u307E\u3059"))))),/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("div",{className:codeBox03},/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("p",{className:left_en},"It's a blue morning,ashio and tototeto ",/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("br",null),"I stroll along the bank"),/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement(proxy/* motion */.E.div,{className:imgGrid,variants:container,initial:"hidden",whileInView:"show",viewport:{once:true}},/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement(proxy/* motion */.E.div,{className:`${gridItem} ${gridItem01}`,variants:item},/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("img",{src:img01/* default */.Z,alt:""}),/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("p",{className:price},"pullover",/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("br",null),"\uFFE54,000-")),/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement(proxy/* motion */.E.div,{className:`${gridItem} ${gridItem02}`,variants:item},/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("img",{src:img02/* default */.Z,alt:""}),/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("p",{className:price},"zip up",/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("br",null),"\uFFE53,000-")),/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement(proxy/* motion */.E.div,{className:`${gridItem} ${gridItem03}`,variants:item},/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("img",{src:img03/* default */.Z,alt:""}),/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("p",{className:price},"half zip",/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("br",null),"\uFFE55,000-"))),/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement(FadeIn/* default */.Z,{custom:{delay:0.3,x:70,y:0}},/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("div",{className:textBox},/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("span",{className:number},"03"),/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("h4",null,"hoodie"),/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("p",null,"\u3053\u3053\u306B\u30C6\u30AD\u30B9\u30C8\u304C\u306F\u3044\u308A\u307E\u3059",/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("br",null),"\u3053\u3053\u306B\u30C6\u30AD\u30B9\u30C8\u304C\u306F\u3044\u308A\u307E\u3059"))))))),/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement(ButtomContact/* default */.Z,null));}

/***/ }),

/***/ 3665:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7526);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
// src/setupJquery.js
// jQueryをグローバルに登録
if(typeof window!=="undefined"){window.jQuery=(jquery__WEBPACK_IMPORTED_MODULE_0___default());window.$=(jquery__WEBPACK_IMPORTED_MODULE_0___default());__webpack_require__(8437);}

/***/ }),

/***/ 1720:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/logo-b50eb89c8b72880a76968c067b223cc6.png");

/***/ }),

/***/ 6411:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/roots02-e1868b077e1b506701fd9420c8f0f267.jpg");

/***/ }),

/***/ 616:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/code1-d3b7743bc4df6ad774f3f00d2106bbe5.jpg");

/***/ }),

/***/ 937:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/code2-a8430de4c6cfbef5b243e4fc9bc206ae.jpg");

/***/ }),

/***/ 3264:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/img01-c715765dd4a37d32919527b51c7faba1.jpg");

/***/ }),

/***/ 873:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/img02-03c9ed1e0286fb01306b6768d5191a15.jpg");

/***/ }),

/***/ 174:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/img03-8f4787b6f1c3cd1a73cfd76247dac708.jpg");

/***/ })

};
;
//# sourceMappingURL=component---src-pages-roots-index-jsx.js.map