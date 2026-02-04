"use strict";
exports.id = 734;
exports.ids = [734];
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

/***/ 6024:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_top)
});

// NAMESPACE OBJECT: ./src/pages/top/style.module.css
var style_module_namespaceObject = {};
__webpack_require__.r(style_module_namespaceObject);
__webpack_require__.d(style_module_namespaceObject, {
  zZ: () => (Visualsec),
  v7: () => (toptitle),
  Sf: () => (topvisual),
  xh: () => (verticalSec)
});

// NAMESPACE OBJECT: ./src/components/Vertical/style.module.css
var Vertical_style_module_namespaceObject = {};
__webpack_require__.r(Vertical_style_module_namespaceObject);
__webpack_require__.d(Vertical_style_module_namespaceObject, {
  pP: () => (BtnBox),
  NE: () => (leftOuter),
  ky: () => (rightOuter),
  Kq: () => (secondSec),
  EI: () => (text2),
  ze: () => (textBox),
  rt: () => (style_module_videoBox)
});

// NAMESPACE OBJECT: ./src/components/MainButton/style.module.css
var MainButton_style_module_namespaceObject = {};
__webpack_require__.r(MainButton_style_module_namespaceObject);
__webpack_require__.d(MainButton_style_module_namespaceObject, {
  $: () => (btnSvg)
});

// EXTERNAL MODULE: external "C:\\Users\\user\\Desktop\\roots\\node_modules\\react\\index.js"
var external_C_Users_user_Desktop_roots_node_modules_react_index_js_ = __webpack_require__(9179);
var external_C_Users_user_Desktop_roots_node_modules_react_index_js_default = /*#__PURE__*/__webpack_require__.n(external_C_Users_user_Desktop_roots_node_modules_react_index_js_);
// EXTERNAL MODULE: ./src/components/Layout/index.jsx + 8 modules
var Layout = __webpack_require__(1395);
;// CONCATENATED MODULE: ./src/pages/top/style.module.css
// Exports
var imgslide = "style-module--imgslide--dfee5";
var topvisual = "style-module--topvisual--fd696";
var toptitle = "style-module--toptitle--43a30";
var topSec = "style-module--topSec--23096";
var videoBox = "style-module--videoBox--bf221";
var txt = "style-module--txt--de40e";
var txt2 = "style-module--txt2--65008";
var txt3 = "style-module--txt3--31395";
var top_title = "style-module--top_title--9b536";
var Visualsec = "style-module--Visualsec--c886e";
var verticalSec = "style-module--verticalSec--4075c";

// EXTERNAL MODULE: ./src/setupJquery.js
var setupJquery = __webpack_require__(3665);
// EXTERNAL MODULE: ./node_modules/split-type/dist/index.js
var dist = __webpack_require__(5829);
// EXTERNAL MODULE: ./src/components/TopVisual/index.jsx + 2 modules
var TopVisual = __webpack_require__(7308);
// EXTERNAL MODULE: ./src/images/top/code1.jpg
var code1 = __webpack_require__(616);
// EXTERNAL MODULE: ./src/images/top/code2.jpg
var code2 = __webpack_require__(937);
// EXTERNAL MODULE: ./src/images/roots02.jpg
var roots02 = __webpack_require__(6411);
;// CONCATENATED MODULE: ./src/components/Slider/index.jsx
const imagesGroup1=[code1/* default */.Z,code2/* default */.Z,roots02/* default */.Z,roots02/* default */.Z];const Component=()=>{const scrollRef1=useRef(null);const{0:progress1,1:setProgress1}=useState(0);const isLockedRef=useRef(false);const lockTimeout=useRef(null);useEffect(()=>{const section=scrollRef1.current;if(!section)return;const scrollContainer=section.querySelector(`.${style.horizontal_scroll}`);const images=scrollContainer.querySelectorAll("img");const scrollRange=window.innerHeight*imagesGroup1.length;const offsetTop=section.offsetTop;const handleScroll=()=>{let y=window.scrollY-offsetTop;y=Math.max(0,Math.min(y,scrollRange));if(isLockedRef.current){window.scrollTo(0,offsetTop+y);return;}const percent=y/scrollRange;scrollContainer.style.transform=`translate3d(${-percent*100*imagesGroup1.length}vw, 0, 0)`;setProgress1(percent);images.forEach(img=>{const rect=img.getBoundingClientRect();const center=window.innerWidth/2;const distanceFromCenter=Math.abs(rect.left+rect.width/2-center);const maxDistance=window.innerWidth/2;const ratio=1-Math.min(distanceFromCenter/maxDistance,1);const scale=1+ratio*0.1;img.style.transform=`scale(${scale})`;img.style.transition="transform 0.2s ease-out";});// 中央で停止（ロック）演出
// const currentIndex = Math.min(
//   imagesGroup1.length - 1,
//   Math.round(percent * imagesGroup1.length)
// );
// const targetImage = scrollContainer.querySelectorAll(`.${style.imageWrapper}`)[currentIndex];
// if (targetImage) {
//   const rect = targetImage.getBoundingClientRect();
//   const center = window.innerWidth / 2;
//   const diff = Math.abs(rect.left + rect.width / 2 - center);
//   if (diff < 20 && !isLockedRef.current) {
//     isLockedRef.current = true;
//     lockTimeout.current = setTimeout(() => {
//       isLockedRef.current = false;
//     }, 800);
//   }
// }
};window.addEventListener("scroll",handleScroll);return()=>{window.removeEventListener("scroll",handleScroll);clearTimeout(lockTimeout.current);};},[]);return/*#__PURE__*/React.createElement("section",{className:style.photoSec},/*#__PURE__*/React.createElement("div",{className:style.scroll_container,ref:scrollRef1,style:{height:`${imagesGroup1.length*100}vh`}},/*#__PURE__*/React.createElement("div",{className:style.sticky_wrap},/*#__PURE__*/React.createElement("div",{className:style.dotIndicator},imagesGroup1.map((_,i)=>/*#__PURE__*/React.createElement("span",{key:i,className:`${style.dot} ${Math.floor(progress1*imagesGroup1.length+0.6)===i?style.active:""}`}))),/*#__PURE__*/React.createElement("div",{className:style.horizontal_scroll,style:{width:`${imagesGroup1.length*100}vw`}},imagesGroup1.map((img,index)=>/*#__PURE__*/React.createElement("div",{key:index,className:style.imageWrapper},/*#__PURE__*/React.createElement("img",{src:img,alt:`group1-img-${index+1}`}),/*#__PURE__*/React.createElement("p",{className:style.imageText},"\u5B9F\u7E3E ",index+1)))))));};/* harmony default export */ const Slider = ((/* unused pure expression or super */ null && (Component)));
// EXTERNAL MODULE: ./src/components/FadeIn/index.jsx
var FadeIn = __webpack_require__(6405);
;// CONCATENATED MODULE: ./src/components/SlideNew/index.jsx
const ScrollSlider=()=>{useEffect(()=>{const stickySections=[...document.querySelectorAll(`.${style.sticky_wrap}`)];const handleScroll=()=>{stickySections.forEach(section=>{const offsetTop=section.parentElement.offsetTop;const scrollSection=section.querySelector(`.${style.horizontal_scroll}`);let percentage=(window.scrollY-offsetTop)/window.innerHeight*100;percentage=Math.max(0,Math.min(300,percentage));scrollSection.style.transform=`translate3d(${-percentage}vw, 0, 0)`;// ★ 拡大アニメーション処理
const slides=scrollSection.querySelectorAll(`.${style.scroll_contents}`);slides.forEach(slide=>{const rect=slide.getBoundingClientRect();const center=rect.left+rect.width/2;const distanceToCenter=Math.abs(window.innerWidth/2-center);const scale=Math.max(0.7,1-distanceToCenter/(window.innerWidth/2)*0.1);slide.style.transform=`scale(${scale})`;});});};window.addEventListener("scroll",handleScroll);return()=>window.removeEventListener("scroll",handleScroll);},[]);const slide=[{img:img01,text:"style01"},{img:img02,text:"style02"},{img:img03,text:"style03"},{img:img04,text:"style04"}];return/*#__PURE__*/React.createElement("div",{className:style.scroll_container},/*#__PURE__*/React.createElement("div",{className:style.sticky_wrap},/*#__PURE__*/React.createElement("div",{className:style.horizontal_scroll},slide.map((slide,index)=>/*#__PURE__*/React.createElement("div",{key:index,className:style.scroll_contents},/*#__PURE__*/React.createElement("figure",null,/*#__PURE__*/React.createElement("img",{src:slide.img,alt:`Slide ${index+1}`,className:style.image})),/*#__PURE__*/React.createElement("p",{className:style.imagetext},slide.text))))));};/* harmony default export */ const SlideNew = ((/* unused pure expression or super */ null && (ScrollSlider)));
;// CONCATENATED MODULE: ./src/components/Vertical/style.module.css
// Exports
var secondSec = "style-module--secondSec--298ef";
var leftOuter = "style-module--leftOuter--d12a6";
var style_module_videoBox = "style-module--videoBox--c0795";
var rightOuter = "style-module--rightOuter--a09d9";
var text2 = "style-module--text2--58ac1";
var textBox = "style-module--textBox--cb0c7";
var BtnBox = "style-module--BtnBox--f7165";

// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 11 modules
var gatsby_browser_entry = __webpack_require__(7076);
;// CONCATENATED MODULE: ./src/components/MainButton/style.module.css
// Exports
var btnSvg = "style-module--btnSvg--9732a";

;// CONCATENATED MODULE: ./src/components/MainButton/index.jsx
const MainButton_Component=({link,text})=>{const isExternal=/^https?:\/\//.test(link);const commonContent=/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement((external_C_Users_user_Desktop_roots_node_modules_react_index_js_default()).Fragment,null,/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("svg",null,/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("rect",{x:"2",y:"2",rx:"0",fill:"none",width:"240",height:"50"})),/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("span",null,text));return isExternal?/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("a",{href:link,target:"_blank",rel:"noopener noreferrer",className:`${MainButton_style_module_namespaceObject.container} ${btnSvg}`},commonContent):/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement(gatsby_browser_entry.Link,{to:link,className:`${MainButton_style_module_namespaceObject.container} ${btnSvg}`},commonContent);};/* harmony default export */ const MainButton = (MainButton_Component);
// EXTERNAL MODULE: ./src/images/logo.png
var logo = __webpack_require__(1720);
;// CONCATENATED MODULE: ./src/images/movie/free.mp4
/* harmony default export */ const free = ("/static/free-10b0bc83029402d8581840cbf73053f1.mp4");
;// CONCATENATED MODULE: ./src/components/Vertical/index.jsx
const Vertical_Component=({})=>{const sectionRefs=(0,external_C_Users_user_Desktop_roots_node_modules_react_index_js_.useRef)([]);const{0:activeSections,1:setActiveSections}=(0,external_C_Users_user_Desktop_roots_node_modules_react_index_js_.useState)([]);const addToRefs=el=>{if(el&&!sectionRefs.current.includes(el)){sectionRefs.current.push(el);}};return/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("section",{ref:addToRefs,className:secondSec},/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("div",{className:leftOuter},/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("div",{className:Vertical_style_module_namespaceObject.leftFlex},/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("div",{className:style_module_videoBox},/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("video",{src:free,autoPlay:true,loop:true,muted:true,playsInline:true,id:"background-video"})))),/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("div",{className:rightOuter},/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("h3",null,/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("span",null,"\u30C6\u30AD\u30B9\u30C8\u30C6\u30AD\u30B9\u30C8"),/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("span",{className:text2},"\u30C6\u30AD\u30B9\u30C8\u30C6\u30AD\u30B9\u30C8\u30C6\u30AD\u30B9\u30C8")),/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("div",{className:textBox},/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("p",null,"\u6D3E\u624B\u3055\u3088\u308A\u201C\u5B8C\u6210\u5EA6\u201D\u3002",/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("br",null),"\u9078\u3073\u629C\u3044\u305F\u9ED2\u3068\u767D\u3060\u3051\u3067\u7D44\u307F\u7ACB\u3066\u305F\u30B9\u30C8\u30EA\u30FC\u30C8\u30B9\u30BF\u30A4\u30EB\u306F\u3001",/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("br",null),"\u4F59\u8A08\u306A\u88C5\u98FE\u3092\u6368\u3066\u3001\u30B7\u30EB\u30A8\u30C3\u30C8\u3068\u8CEA\u611F\u306E\u7F8E\u3057\u3055\u3060\u3051\u3092\u6B8B\u3057\u305F\u3002",/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("br",null),"\u9759\u304B\u306B\u4E3B\u5F35\u3057\u3001\u5F37\u304F\u9B45\u305B\u308B\u3002",/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("br",null),"\u30E2\u30CE\u30AF\u30ED\u30B9\u30C8\u30EA\u30FC\u30C8\u306E\u672C\u8CEA\u3092\u307E\u3068\u3046\u3001\u305D\u3093\u306A\u30D6\u30E9\u30F3\u30C9\u3002"),/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("div",{className:BtnBox},/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement(MainButton,{link:"/",text:"\u3054\u8CFC\u5165\u306F\u3053\u3061\u3089",target:"_blank",rel:"noopener noreferrer"}))),/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("img",{src:logo/* default */.Z,alt:""})));};/* harmony default export */ const Vertical = (Vertical_Component);
// EXTERNAL MODULE: ./node_modules/gsap/index.js + 2 modules
var gsap = __webpack_require__(6358);
// EXTERNAL MODULE: ./node_modules/gsap/ScrollTrigger.js + 1 modules
var ScrollTrigger = __webpack_require__(9092);
;// CONCATENATED MODULE: ./src/components/SlowTextAnime/index.jsx
gsap/* default */.ZP.registerPlugin(ScrollTrigger/* ScrollTrigger */.i);const TextAnime=({children,triggerClass,stagger=0.06,duration=1.4})=>{const wrapRef=(0,external_C_Users_user_Desktop_roots_node_modules_react_index_js_.useRef)(null);const splitRef=(0,external_C_Users_user_Desktop_roots_node_modules_react_index_js_.useRef)(null);(0,external_C_Users_user_Desktop_roots_node_modules_react_index_js_.useEffect)(()=>{const el=wrapRef.current;// SplitType
splitRef.current=new dist/* default */.Z(el.querySelectorAll("p"),{types:"chars"});// GSAP
gsap/* default */.ZP.from(splitRef.current.chars,{opacity:0,y:4,duration,ease:"power1.out",stagger,scrollTrigger:{trigger:triggerClass?`.${triggerClass}`:el,start:"top 80%",once:true}});return()=>{var _splitRef$current;(_splitRef$current=splitRef.current)===null||_splitRef$current===void 0?void 0:_splitRef$current.revert();};},[]);return/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("div",{ref:wrapRef},children);};/* harmony default export */ const SlowTextAnime = (TextAnime);
;// CONCATENATED MODULE: ./src/components/Instagram/style.module.css
// Exports
var instaSec = "style-module--instaSec--52a5c";
var postFlex = "style-module--postFlex--870d9";

// EXTERNAL MODULE: ./src/images/top/img01.jpg
var top_img01 = __webpack_require__(3264);
// EXTERNAL MODULE: ./src/images/top/img02.jpg
var top_img02 = __webpack_require__(873);
// EXTERNAL MODULE: ./src/images/top/img03.jpg
var top_img03 = __webpack_require__(174);
;// CONCATENATED MODULE: ./src/components/Instagram/index.jsx
const Instagram_Component=({})=>{const sectionRefs=(0,external_C_Users_user_Desktop_roots_node_modules_react_index_js_.useRef)([]);const{0:activeSections,1:setActiveSections}=(0,external_C_Users_user_Desktop_roots_node_modules_react_index_js_.useState)([]);const addToRefs=el=>{if(el&&!sectionRefs.current.includes(el)){sectionRefs.current.push(el);}};return/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("section",{ref:addToRefs,className:instaSec},/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("h3",null,"INSTAGRAM"),/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("ul",{className:postFlex},/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("li",null,/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("a",{href:""},/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("img",{src:code1/* default */.Z,alt:""}))),/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("li",null,/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("a",{href:""},/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("img",{src:code2/* default */.Z,alt:""}))),/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("li",null,/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("a",{href:""},/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("img",{src:top_img01/* default */.Z,alt:""}))),/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("li",null,/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("a",{href:""},/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("img",{src:top_img02/* default */.Z,alt:""}))),/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("li",null,/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("a",{href:""},/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("img",{src:top_img03/* default */.Z,alt:""}))),/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("li",null,/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("a",{href:""},/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("img",{src:code1/* default */.Z,alt:""})))));};/* harmony default export */ const Instagram = (Instagram_Component);
// EXTERNAL MODULE: ./src/components/ButtomContact/index.jsx + 1 modules
var ButtomContact = __webpack_require__(6941);
;// CONCATENATED MODULE: ./src/pages/top/index.jsx
const Page=()=>{return/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement(Layout/* default */.Z,null,/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("div",{className:topvisual},/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("div",{className:toptitle},/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("h2",null,"Title")),/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("figure",{className:style_module_namespaceObject.topkv},/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("img",{src:roots02/* default */.Z,className:style_module_namespaceObject.kv}))),/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("section",{className:Visualsec},/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("div",{className:style_module_namespaceObject.photobox},/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("h2",null,"Visual"),/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("p",null,"\u30B7\u30F3\u30D7\u30EB\u3067\u3042\u308A\u306A\u304C\u3089\u9AD8\u7D1A\u611F\u304C\u3042\u308A",/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("br",null),"\u7537\u6027\u5973\u6027\u554F\u308F\u305A\u7740\u3053\u306A\u3057\u3084\u3059\u304F",/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("br",null),"\u4ED6\u306E\u30A2\u30A4\u30C6\u30E0\u3068\u3082\u5408\u308F\u305B\u3084\u3059\u3044\u30C7\u30B6\u30A4\u30F3\u3092\u8FFD\u6C42\u3057\u3066\u3044\u307E\u3059\u3002"))),/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("section",{className:verticalSec},/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement(SlowTextAnime,{triggerClass:verticalSec},/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("ul",null,/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("li",null,/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("p",null,"\u90FD\u5E02\u306E\u9759\u3051\u3055\u306B\u5BBF\u308B\u7A7A\u6C17\u611F\u3084\u3001"),/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("p",null,"\u65E5\u5E38\u306E\u5F62\u306E\u4E2D\u306B\u6F5C\u3080\u7DCA\u5F35\u3068\u7DE9\u548C\u3092\u63AC\u3044\u53D6\u308A\u3001"),/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("p",null,"\u65B0\u3057\u3044\u88C5\u3044\u3068\u3057\u3066\u518D\u69CB\u7BC9\u3059\u308B\u3053\u3068\u3002")),/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("li",null,/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("p",null,"\u307E\u3063\u3059\u3050\u306A\u3082\u306E\u3002"),/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("p",null,"\u4F59\u767D\u3092\u611F\u3058\u308B\u3082\u306E\u3002"),/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("p",null,"\u524A\u304E\u843D\u3068\u3055\u308C\u305F\u3082\u306E\u3002")),/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("li",null,/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("p",null,"\u63A7\u3048\u3081\u306A\u5F37\u3055\u3053\u305D\u3001"),/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("p",null,"\u6700\u3082\u500B\u6027\u3092\u653E\u3064\u3068\u4FE1\u3058\u3001"),/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement("p",null,"\u76C6\u683D\u306E\u7CBE\u795E\u3092\u7E8F\u3063\u305F\u30DF\u30CB\u30DE\u30EB\u30A6\u30A7\u30A2\u3092\u3064\u304F\u308A\u307E\u3059\u3002"))))),/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement(Vertical,null),/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement(Instagram,null),/*#__PURE__*/external_C_Users_user_Desktop_roots_node_modules_react_index_js_default().createElement(ButtomContact/* default */.Z,null));};/* harmony default export */ const pages_top = (Page);

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
//# sourceMappingURL=component---src-pages-top-index-jsx.js.map