(this["webpackJsonpjobportal"] = this["webpackJsonpjobportal"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.App {\n  text-align: center;\n  /* min-width:600px; */\n  max-width:1500px;\n  margin:auto;\n  width:100%;\n  overflow-x: hidden;\n  /* padding-top: 75px; */\n}\n\n.App-logo {\n  height: 40vmin;\n  pointer-events: none;\n}\n\n@media (prefers-reduced-motion: no-preference) {\n  .App-logo {\n    animation: App-logo-spin infinite 20s linear;\n  }\n}\n\n@media (prefers-reduced-motion: no-preference) {\n}\n\n.App-header {\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n}\n\n.App-link {\n  color: #61dafb;\n}\n\n.container-c{\n  padding: 20px;\n}\n\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/Loader.component/Loader.component.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/Components/Loader.component/Loader.component.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\r\n\r\n.folding-cube {\r\n    margin: 20px auto;\r\n    width: 40px;\r\n    height: 40px;\r\n    position: relative;\r\n    transform: rotateZ(45deg);\r\n  }\r\n  \r\n  .folding-cube .cube {\r\n    float: left;\r\n    width: 50%;\r\n    height: 50%;\r\n    position: relative;\r\n    transform: scale(1.1); \r\n  }\r\n  .folding-cube .cube:before {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: var(--TPrimary);\r\n    animation: foldCubeAngle 2.4s infinite linear both;\r\n    transform-origin: 100% 100%;\r\n  }\r\n  .folding-cube .cube2 {\r\n      transform: scale(1.1) rotateZ(90deg);\r\n    }\r\n    .folding-cube .cube3 {\r\n        transform: scale(1.1) rotateZ(180deg);\r\n    }\r\n    .folding-cube .cube4 {\r\n        transform: scale(1.1) rotateZ(270deg);\r\n    }\r\n    .folding-cube .cube2:before {\r\n        background-color: var(--TPrimary);\r\n        animation-delay: 0.3s;\r\n    }\r\n    .folding-cube .cube3:before {\r\n        background-color: var(--TPrimary);\r\n        animation-delay: 0.6s; \r\n    }\r\n    .folding-cube .cube4:before {\r\n        background-color: var(--TPrimary);\r\n        animation-delay: 0.9s;\r\n  }\r\n  \r\n  @keyframes foldCubeAngle {\r\n    0%, 10% {\r\n      transform: perspective(140px) rotateX(-180deg);\r\n      opacity: 0; \r\n    } 25%, 75% {\r\n      transform: perspective(140px) rotateX(0deg);\r\n      opacity: 1; \r\n    } 90%, 100% {\r\n      transform: perspective(140px) rotateY(180deg);\r\n      opacity: 0; \r\n    }\r\n  }", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/TextField.component/TextField.component.css":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/Components/TextField.component/TextField.component.css ***!
  \***********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_AT_RULE_IMPORT_0___ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!../../App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_0___);
// Module
exports.push([module.i, ".label {\r\n    margin-right: 20px\r\n};\r\n.inputWrap {\r\n    align-content: left\r\n};\r\n.input {\r\n    border-style: solid;\r\n    border-width: 1px;\r\n    border-radius: 5px;\r\n    outline: 0;\r\n};\r\n\r\n.input:focus {\r\n    border-color: blue !important;\r\n    box-shadow: 1px 1px 3px blue ;\r\n}\r\n.errorInput {\r\n    border-color: red;\r\n    box-shadow: 1px 1px 3px red;\r\n}\r\n.MuiFormLabel-root{\r\n    background-color: #fff;\r\n    z-index: 1;\r\n    padding: 0px 5px 0 0 !important;\r\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Pages/About.page/About.page.css":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/Pages/About.page/About.page.css ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "  /* about section start here */\r\n  .about-module {padding: 30px 0px 35px;font-family: 'Open Sans', 'sans-serif', Arial, Helvetica, sans-serif;}\r\n  .about-banner{background-image:url('/assets/bg-images/about-banner.jpg');background-size:100% 100%;background-repeat:no-repeat;\r\n  height: 300px;}\r\n  .about-module .about-top h1{padding:20px 0px 10px;color:var(--TText1);font-size:30px;font-weight:700;text-align:center;}\r\n  .about-module .about-top h1 span{color: var(--TPrimary);}\r\n  .about-module .about-top p {text-align: center;width: 80%;margin: 0 auto;font-size: 17px;}\r\n  .about-module .abt-inner {margin-top: 50px;}\r\n  .about-module .about-sec h2,.about-module .about-sec .counter {text-align: center;color: #ee2b4e;line-height: 1em;font-size: 40px;font-weight: 700;}\r\n  .about-module .about-sec h2 span {font-size: 18px;color: #000;}\r\n  .about-module .about-sec p.abtp {text-align: center;padding-top: 0px;font-size: 14px;}\r\n    /* about section end here */\r\n  \r\n    /* services section start here */\r\n  .services-sec {background: #2b3247;color: #fff;padding: 50px 0;position: relative;}\r\n  .services-sec .container{width: 100%;max-width: 1170px;}\r\n  .s-section {padding-bottom: 150px;background-position: 50% 100%;}\r\n  .service-bg-sec {background-image: url('/assets/bg-images/abt-service.png');background-repeat: no-repeat;background-size: auto;}\r\n  .services-sec h2{text-align: center; margin-bottom: 4%; position: relative; line-height: 1.5; font-size:24px; font-weight: 500;\r\n      color: #fff; width: 40%; display: block; margin: 0 auto 80px;}\r\n  .services-sec h2:after {position: absolute; content: ''; width: 120px; height: 3px; background-color: #fff; bottom: -10px;\r\n      left: 40%;}\r\n  \r\n  .services-sec .s-ser-sec {margin-bottom: 2rem; margin-left: 0%; margin-right: 0; display: flex; align-items: center;\r\n      justify-content: center; padding-right: 0%; padding-left: 19%; }\r\n  .services-sec .s-ser-sec:nth-child(2n-1) {margin-left: 0; margin-right: 0%; padding-right: 19%; padding-left: 0px;}\r\n  \r\n  .services-sec figure {padding: 0;}\r\n  .services-sec .s-ser-img {height: 40px; width: 40px; text-align: center; flex: 1 0 auto; align-self: flex-start; margin-right: 10px;\r\n      border: 1px solid #fff; margin-top: 20px;}\r\n  .services-sec .s-ser-sec:nth-child(2n-1) .s-ser-img { order: 2; margin: 0 0 0 1rem;\r\n      margin-left: 10px; border: 1px solid #fff; margin-top: 20px; }\r\n  .services-sec .s-ser-img img {width: 30px; height: 30px; display: block; margin: 4px auto; max-width: 100%;vertical-align: middle;border: 0;}\r\n  .services-sec .s-ser-sec .s-ser-text {align-self: flex-start;}\r\n  .services-sec .s-ser-sec:nth-child(2n-1) .s-ser-text {text-align: right;}\r\n  .services-sec .s-ser-text h3 {margin-top: 0; font-weight: 500; line-height: 24px; display: block; margin-bottom: 0.5rem;\r\n      color: #111; letter-spacing: -0.8px; font-size: 20px; color: #fff; }\r\n  .services-sec .s-ser-sec .s-ser-text p {display: block; margin-bottom: 0; font-size: 16px; line-height: 24px;\r\n      letter-spacing: -0.2px; color: inherit; }\r\n  \r\n  .com-brand{padding:30px 0px;background-color: #e8e8e8;}\r\n  .com-brand .com-content{margin-bottom: 20px;}\r\n  .com-brand h3{text-align:center;color:#031d29;line-height:1em;font-size:30px;font-weight:700;padding:20px 0px;}\r\n  .com-brand p{text-align:center;font-size:17px;}\r\n  .com-brand .c-brand{margin:20px auto;}\r\n  .com-brand .c-brand img{display:block;margin:0px auto;}\r\n  \r\n  @media(max-width: 767px){\r\n  .about-banner{height:180px;}\r\n  .about-module .about-top p{width: 100%;text-align: justify;}\r\n  .about-module .about-sec{margin-bottom: 20px;}\r\n  .about-module .about-sec:last-child{margin-bottom: 0px;}\r\n  /*.about-sec{margin:20px 0px;}*/\r\n  \r\n  .ser-img{margin-bottom:30px;}\r\n  .service-bg-sec{background-image: none;padding-bottom: 50px;margin:0px;padding:50px 0px 20px;}\r\n  .service-bg-sec .s-ser-sec{margin-bottom: 30px;}\r\n  .services-sec .s-ser-sec{padding-left: 4%;text-align: justify;}\r\n  .services-sec .s-ser-sec:nth-child(2n-1){padding-right: 4%;text-align: justify;}\r\n  .services-sec .s-ser-sec:nth-child(2n-1) .s-ser-text p{padding-left:20px;text-align: justify;padding-right: 0px;}\r\n  .services-sec .s-ser-sec:nth-child(2n-1) .s-ser-img {margin-left: 15px;}\r\n  .services-sec h2{width: 100%;margin-bottom: 60px;}\r\n  .services-sec .s-ser-text h3{padding-left: 5px;text-transform: uppercase;}\r\n  .services-sec .s-ser-sec .s-ser-text p{padding-right:15px;text-align: justify;padding-left: 5px;font-style: italic;}\r\n  }\r\n  \r\n  @media(max-width:576px){\r\n  .about-module .about-top h1{font-size: 26px;}\r\n  .services-sec h2 {line-height: 30px;font-size: 22px;}\r\n  .com-brand h3 {font-size: 26px}\r\n  .com-brand p{text-align: justify;}\r\n  }\r\n  \r\n  @media(max-width:480px){\r\n  .banner{height:200px;}\r\n  .about-sec{width:100%;}\r\n  .services-sec h2:after{left: 35%;}\r\n  .c-brand{width:100%;}\r\n  }", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Pages/Contact.page/Contact.page.css":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/Pages/Contact.page/Contact.page.css ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".contact-banner{border-bottom:1px solid #777;background-image: url('/assets/bg-images/contactBanner.jpg');height:300px;background-repeat: no-repeat;background-size: 100% 100%;}\r\n.contact-banner h1{color: #fff;font-size: 42px;text-align:center;font-weight: bold;padding-top:100px;}\r\n.contact-banner .breadcrumb{background:none;color: #fff;text-align: center;padding:0px; }\r\n.contact-banner .breadcrumb ul{list-style-type: none;margin:0 auto;}\r\n.contact-banner .breadcrumb ul li{list-style-type: none;display: inline-block;}\r\n.contact-banner .breadcrumb ul li a{color: #fff;text-decoration: none;}\r\n.contact-section{margin-top: -25px;margin-bottom: 0px;padding: 0px 0px 20px 0px;}\r\n.contact-section .contact-inner{background:#fff;border-radius:10px;box-shadow: 0px 2px 5px 3px #e1e1e1;padding:50px;}\r\n.contact-section .contact-info{background:#ee294f;color:#fff;padding:40px 20px;float: left;}\r\n.contact-section .contact-info ul.add-link{list-style-type:none;padding-top:20px;margin-left:0px;padding-left:0px;}\r\n.contact-section .contact-info ul.add-link li{list-style-type:none;line-height:22px;display:flex;margin-bottom:20px;text-align: left;}\r\n.contact-section .contact-info ul.add-link li a{color:#fff;text-decoration:none;}\r\n.contact-section .contact-info ul.add-link li svg{margin-right:10px;font-size:18px;margin-top:3px;}\r\n.contact-section .contact-info ul.social-link{list-style-type:none;padding-top:10px;margin-left:0px;padding-left:0px;text-align: left;}\r\n.contact-section .contact-info ul.social-link li{list-style-type: none;display: inline-block;}\r\n.contact-section .contact-info ul.social-link li a{display: block;color: #ee294f;background-color: #fff;\r\n    border-radius: 50%;height: 30px;width: 30px;line-height: 32px;text-align: center;margin: 3px;}\r\n.contact-section .contact-info ul.social-link li a svg.fa-instagram{font-weight: bold;}\r\n.contact-section .contact-form{background:#fff;padding:40px 20px 40px 40px;float: left;}\r\n.contact-section .contact-form h3{text-align: justify;}\r\n.contact-section .contact-form form{margin-top: 40px;}\r\n.contact-section .contact-form form .form-group.col-md-6{border: 1px solid #8080802e!important;padding: 0px;width: 48%;max-width: 48%;flex: 48% 1;margin: 0 5px 25px 5px;border-radius: 3px;display: inline-flex;}\r\n.contact-section .contact-form form .form-group.col-md-12{border: 1px solid #8080802e!important;padding: 0px;width: 100%;max-width: 100%;flex: 100% 1;margin: 0 5px 15px 5px;border-radius: 3px;}\r\n.contact-section .contact-form form .form-group input{border:none;outline:none;height:40px!important;padding-left:15px!important;width: 100%!important;}\r\n.contact-section .contact-form form .form-group span{ line-height: 40px;text-align: center;width: 40px;}\r\n.contact-section .contact-form form .form-group span svg{color: gray;font-size: 18px;line-height: 40px;}\r\n.contact-section .contact-form form .form-group textarea{border:none;outline:none;height:80px!important;padding-top:10px;padding-left:15px!important;width: 100%!important;}\r\ninput[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button {-webkit-appearance: none;margin: 0;}\r\n.contact-section .contact-form form .border-none{border: none;padding-left: 7px;padding-top: 10px;}\r\n/* .contact-section .contact-form form .border-none button{background:#ee294f;color:#fff;padding:5px 20px;outline:none;border:none;margin:0;border-radius:5px;transition: all 0.3s ease-in-out;} */\r\n.contact-section .contact-map{padding: 0px;}\r\n\r\n\r\n/* responsive site start here */\r\n\r\n\r\n@media(max-width: 991px){\r\n.contact-section .contact-inner{padding:30px 15px;}\r\n.contact-section .contact-form{padding:20px 15px;}\r\n.contact-section .contact-form h3{font-size: 26px;}\r\n.contact-section .contact-form form{margin-top: 20px;}\r\n.contact-section .contact-form form .form-group.col-md-6{width:100%;max-width:100%;flex:100% 1;}\r\n}\r\n\r\n@media(max-width: 767px){\r\n.contact-section .contact-inner{padding:20px 15px;}\r\n.contact-section .contact-form{padding: 40px 15px;}\r\n.contact-section .contact-form form{margin-top: 40px;}\r\n.contact-section .contact-form form .form-group.col-md-6{width:48%;max-width:48%;flex:48% 1;}\r\n.contact-section .contact-form form .form-group span svg {padding-right: 5px;}\r\n}\r\n\r\n@media(max-width: 576px){\r\n.contact-section .contact-info{padding: 40px 15px;}\r\n.contact-section .contact-form form .form-group.col-md-6{width: 100%;max-width: 100%;flex: 100% 1;}\r\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Pages/LoginRegister.page/LoginRegister.page.css":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/Pages/LoginRegister.page/LoginRegister.page.css ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".pageRoot{\r\n  --subContWidth:440px;\r\n  --NegativeSubContWidth:-440px;\r\n  --contWidth:700px;\r\n  --imageWidth:260px;\r\n}\r\n\r\n@media(max-width:600px){\r\n  .pageRoot{\r\n    --NegativeSubContWidth:-320px;\r\n    --subContWidth:320px;\r\n    --imageWidth:0px;\r\n\r\n    } \r\n}\r\n\r\n.cont {\r\n\toverflow: hidden;\r\n\tposition: relative;\r\n\tmax-width: var(--contWidth);\r\n\theight: 550px;\r\n\tmargin: 0 auto;\r\n  background: #fff;\r\n  box-shadow: 10px 10px 16px 4px #ccc;\r\n  border-radius: 8px;\r\n}\r\n\r\n.form{\r\n  width:320px;\r\n  margin:0 auto;\r\n}\r\n\r\n.sub-cont {\r\n  overflow: hidden;\r\n\tposition: absolute;\r\n\tleft: var(--subContWidth);\r\n\ttop: 0;\r\n\twidth: var(--contWidth);\r\n\theight: 100%;\r\n\tpadding-left: var(--imageWidth);\r\n\tbackground: #fff;\r\n\ttransition: transform 1.2s ease-in-out;\r\n}\r\n\r\n.sign-up>div, .sign-in>div{\r\n  width:var(--subContWidth);\r\n}\r\n\r\n.cont.s--signup .sub-cont {\r\n\ttransform: translate(var(--NegativeSubContWidth), 0);\r\n}\r\n\r\n.img {\r\n\toverflow: hidden;\r\n\tz-index: 2;\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\twidth: var(--imageWidth);\r\n\theight: 100%;\r\n\tpadding-top: 360px;\r\n}\r\n\r\n.img:before {\r\n\tcontent: '';\r\n\tposition: absolute;\r\n\tright: 0;\r\n\ttop: 0;\r\n\twidth: 900px;\r\n\theight: 100%;\r\n\tbackground-image: url(\"/assets/bg-images/formBack.jpg\");\r\n\tbackground-size: cover;\r\n\ttransition: transform 1.2s ease-in-out;\r\n}\r\n\r\n.img:after {\r\n\tcontent: '';\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tbackground: rgba(0, 0, 0, 0.6);\r\n}\r\n\r\n.cont.s--signup .img:before {\r\n\ttransform: translate(var(--subContWidth), 0);\r\n}\r\n\r\n.img__text {\r\n\tz-index: 2;\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\ttop: 50px;\r\n\twidth: 100%;\r\n\tpadding: 0 20px;\r\n\ttext-align: center;\r\n\tcolor: #fff;\r\n\ttransition: transform 1.2s ease-in-out;\r\n}\r\n\r\n.img__text h2 {\r\n\tmargin-bottom: 10px;\r\n\tfont-weight: normal;\r\n}\r\n\r\n.img__text p {\r\n\tfont-size: 14px;\r\n\tline-height: 1.5;\r\n}\r\n\r\n.cont.s--signup .img__text.m--up {\r\n\ttransform: translateX(520px);\r\n}\r\n\r\n.img__text.m--in {\r\n\ttransform: translateX(-520px);\r\n}\r\n\r\n.cont.s--signup .img__text.m--in {\r\n\ttransform: translateX(0);\r\n}\r\n\r\n.img__btn {\r\n\toverflow: hidden;\r\n\tz-index: 2;\r\n\tposition: relative;\r\n\twidth: 100px;\r\n\theight: 36px;\r\n\tmargin: 0 auto;\r\n\tbackground: transparent;\r\n\tcolor: #fff;\r\n\ttext-transform: uppercase;\r\n\tfont-size: 15px;\r\n\tcursor: pointer;\r\n}\r\n\r\n.img__btn:after {\r\n\tcontent: '';\r\n\tz-index: 2;\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tborder: 2px solid #fff;\r\n\tborder-radius: 30px;\r\n}\r\n\r\n.img__btn span {\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\ttransition: transform 1.2s;\r\n}\r\n\r\n/* form {\r\n  position: relative;\r\n  width: 740px;\r\n  height: 100%;\r\n  transition: transform 1.2s ease-in-out;\r\n  padding: 50px 30px 0;\r\n} */\r\n\r\n.img__btn span.m--in {\r\n\ttransform: translateY(-72px);\r\n}\r\n\r\n.cont.s--signup .img__btn span.m--in {\r\n\ttransform: translateY(0);\r\n}\r\n\r\n.cont.s--signup .img__btn span.m--up {\r\n\ttransform: translateY(72px);\r\n}\r\n\r\nh2 {\r\n\twidth: 100%;\r\n\tfont-size: 26px;\r\n\ttext-align: center;\r\n}\r\n\r\n\r\n\r\n\r\n.sign-in {\r\n  margin-right: var(--imageWidth);\r\n  transition: ease-out 1.2s;\r\n}\r\n\r\n.cont.s--signup .sign-in {\r\n\ttransform: translate(var(--subContWidth), 0);\r\n}\r\n\r\n.sign-up {\r\n  transition: ease-out 1.2s;\r\n\ttransform: translate(var(--NegativeSubContWidth), 0);\r\n}\r\n\r\n.cont.s--signup .sign-up {\r\n\ttransform: translate(0, 0);\r\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.push([module.i, "@import url(https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css);"]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@300;500&display=swap);"]);
// Module
exports.push([module.i, ":root{\n  /* --TPrimary: #44b4d6; */\n  --TPrimary: #ee294f;\n  --TPrimaryhover: #ff0737;\n  --TSecondary: #2c335d;\n  --TFontColor: #444;\n  --TError: #ff4444;\n  --TSuccess: #00C851;\n  --TWarning: #ffbb33;\n  --TInfo: #33b5e5;\n  --TDark: #3a3a3a;\n  --TLightDark: #b1b1b1;\n  --TGray: #757575;\n  --TPrimaryTransparent: #ee294f22\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nhtml{\n  scroll-behavior: smooth\n}\n\nbody {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n\n::-webkit-scrollbar {\n  width: 5px;\n  height: 5px;\n}\n\n\n::-webkit-scrollbar-track {\n  background: transparent;\n}\n\n\n::-webkit-scrollbar-thumb {\n  background-color:  #ee294faa;\n  border-radius: 5px;\n}\n\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n\n*:focus{\n  outline:none !important;\n}\n\n.container{\n  width: '100%';\n  max-width: 1250px !important;\n  padding-left: 15px;\n  padding-right: 15px;\n  margin: 0 auto !important;\n}\n\n.pageWrap{\n  padding: 10px 0px;\n}\n\n.fillParent{\nwidth: 100%;\nheight: 100%;\n}\n\n.fill{\n  width: 100%;\n  height: calc(100vh - 200px);\n  position: relative;\n\n  }\n\n.form {\n  padding: 20px;\n  font-size: 14px;\n}\n\n.inputFieldContainer {\n  padding: 20px 0;\n  width:100%;\n}\n\n.inputLabel{\n  padding-right: 5px;\n  background-color: '#fff';\n}\n\n.dotSeparator {\n  margin: 0 10px;\n  font-size: 18px;\n  font-weight: 900;\n  color: '#aaa';\n}\n\n.highlighted{\n  color: var(--TPrimary);\n  font-weight: 600;\n  font-size: 14;\n  cursor: pointer;\n}\n\n.spacing {\n  margin: 10px 0;\n}\n\n.error{\n  color: var(--TError);\n  margin-bottom: 0;\n  font-size: 14px;\n  line-height: 14px;\n  text-align: left;\n}\n\n.clearfix{clear: both;}\n\n.shiftUp{\n  animation: ShiftUp 2s ;\n}\n\n\n.pulse {\n  position: relative;\n  width: 100px;\n  height: 100px;\n  background: #fffc;\n  border-radius: 50%;\n}\n.pulse span {\n  position: absolute;\n  top: 0;\n  left: 0;\n  background: #fffc;\n  border-radius: 50%;\n  display: inline-block;\n  width: 100%;\n  height: 100%;\n  animation: animate 3s linear infinite;\n}\n.pulse span:nth-child(1){\n  animation-delay: calc(-0.5s * 3);\n}\n\n.pulse span:nth-child(2){\n  animation-delay: calc(-0.5s * 2);\n}\n\n.pulse span:nth-child(3){\n  animation-delay: calc(-0.5s *1);\n}\n\n@keyframes animate {\n  0% {\n    transform: scale(1);\n    opacity: 0.5;\n  }\n  100% {\n    transform: scale(4);\n    opacity: 0;\n  }\n}\n\n@keyframes UpDown {\n    0% {\n      transform: translate(0,0);\n    }\n    50% {\n      transform: translate(0,20px);\n    }\n    0% {\n      transform: translate(0,0);\n    }\n}\n\n\n@keyframes SwipeRight {\n  0% {\n    transform: translate(-100px,0);\n    opacity:0;\n  }\n  100% {\n    transform: translate(0,0);\n    opacity:1;\n  }\n}\n\n\n@keyframes SwipeLeft {\n  0% {\n    transform: translate(100px,0);\n    opacity:0;\n  }\n  100% {\n    transform: translate(0,0);\n    opacity:1;\n  }\n}\n\n@keyframes ShiftUp {\n  0% {\n    transform: translate(0,100px);\n    opacity:0;\n  }\n  100% {\n    transform: translate(0,0);\n    opacity:1;\n  }\n}\n\n@keyframes Rotate {\n  0% {\n    transform: rotate(0deg);\n  }\n  50% {\n    transform: rotate(60deg);\n  }\n  0% {\n    transform: rotate(0deg);\n  }\n}\n\n@keyframes SaveJob {\n  0% {\n    transform: scale(1);\n    opacity:1\n  }\n  50%{\n    transform: scale(1.5);\n    opacity:0;\n  }\n  100% {\n    transform: scale(1);\n    opacity:1\n  }\n}\n\n@keyframes SaveJob2 {\n  0% {\n    transform: translateY(0);\n    opacity:1\n  }\n  50%{\n    transform: translateY(-50);\n    opacity:0;\n  }\n}\n\n@keyframes Flip {\n  0% {\n    transform: scale(1) rotateY(0deg);\n  }\n  50%{\n    transform: scale(0.8) rotateY(90deg);\n  }\n  100% {\n    transform: scale(1) rotateY(180deg);\n    opacity:1;\n  }\n}\n\n@keyframes Typing {\n  from { width: 0 }\n  to { width: 100% }\n}\n\n/* The typewriter cursor effect */\n@keyframes BlinkCaret {\n  from, to { border-color: transparent }\n  50% { border-color: var(--TPrimary); }\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Context_FilterAttribs_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Context/FilterAttribs.context */ "./src/Context/FilterAttribs.context.tsx");
/* harmony import */ var _Context_User_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Context/User.context */ "./src/Context/User.context.tsx");
/* harmony import */ var _Routes_Main_route__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Routes/Main.route */ "./src/Routes/Main.route.tsx");
var _jsxFileName = "/home/balj/Documents/development-work/react-projects/jobPortal/src/App.tsx";






function App() {
  if (false) {}

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "App",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Context_User_context__WEBPACK_IMPORTED_MODULE_3__["UserContextProvider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Context_FilterAttribs_context__WEBPACK_IMPORTED_MODULE_2__["FilterAttribsContextProvider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Routes_Main_route__WEBPACK_IMPORTED_MODULE_4__["MainRoute"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/Components/AlertBox.component.tsx":
/*!***********************************************!*\
  !*** ./src/Components/AlertBox.component.tsx ***!
  \***********************************************/
/*! exports provided: AlertBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertBox", function() { return AlertBox; });
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _Services_App_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Services/App.service */ "./src/Services/App.service.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
var _jsxFileName = "/home/balj/Documents/development-work/react-projects/jobPortal/src/Components/AlertBox.component.tsx";






const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])({
  heading: {
    '& h2': {
      textTransform: 'capitalize',
      padding: '10px 24px 16px'
    }
  },
  icon: {
    width: 60,
    height: 60,
    margin: '20px auto 0px',
    borderRadius: 60,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    '& svg': {
      fontSize: 35
    }
  }
});
function AlertBox(props) {
  const [type, setType] = react__WEBPACK_IMPORTED_MODULE_1__["useState"]('info');
  const [show, setShow] = react__WEBPACK_IMPORTED_MODULE_1__["useState"](false);
  const [message, setMessage] = react__WEBPACK_IMPORTED_MODULE_1__["useState"]('Are You sure to continue this action?');
  const styles = useStyles();
  react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](() => {
    if (props.type && props.type !== type) {
      setType(props.type);
    }

    if (props.message && (props === null || props === void 0 ? void 0 : props.message) !== message) {
      setMessage(props.message);
    }

    if (props.show !== show) {
      setShow(props.show);
    }
  }, [props]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Dialog"], {
    open: show,
    onClose: () => {
      setShow(false);
      props.onClose && props.onClose();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: styles.icon,
    style: {
      backgroundColor: type === _Services_App_service__WEBPACK_IMPORTED_MODULE_4__["RequestStatusList"].Error ? _Services_App_service__WEBPACK_IMPORTED_MODULE_4__["Theme"].error + '44' : type === _Services_App_service__WEBPACK_IMPORTED_MODULE_4__["RequestStatusList"].Success ? _Services_App_service__WEBPACK_IMPORTED_MODULE_4__["Theme"].success + '44' : type === _Services_App_service__WEBPACK_IMPORTED_MODULE_4__["RequestStatusList"].Warning ? _Services_App_service__WEBPACK_IMPORTED_MODULE_4__["Theme"].warning + '44' : _Services_App_service__WEBPACK_IMPORTED_MODULE_4__["Theme"].info + '44'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: type === _Services_App_service__WEBPACK_IMPORTED_MODULE_4__["RequestStatusList"].Error ? _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faTimes"] : type === _Services_App_service__WEBPACK_IMPORTED_MODULE_4__["RequestStatusList"].Success ? _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faCheck"] : type === _Services_App_service__WEBPACK_IMPORTED_MODULE_4__["RequestStatusList"].Warning ? _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faExclamationTriangle"] : _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faInfo"],
    style: {
      color: type === _Services_App_service__WEBPACK_IMPORTED_MODULE_4__["RequestStatusList"].Error ? _Services_App_service__WEBPACK_IMPORTED_MODULE_4__["Theme"].error : type === _Services_App_service__WEBPACK_IMPORTED_MODULE_4__["RequestStatusList"].Success ? _Services_App_service__WEBPACK_IMPORTED_MODULE_4__["Theme"].success : type === _Services_App_service__WEBPACK_IMPORTED_MODULE_4__["RequestStatusList"].Warning ? _Services_App_service__WEBPACK_IMPORTED_MODULE_4__["Theme"].warning : _Services_App_service__WEBPACK_IMPORTED_MODULE_4__["Theme"].info
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["DialogTitle"], {
    className: styles.heading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }
  }, type), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["DialogContent"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["DialogContentText"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 17
    }
  }, message)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["DialogActions"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }
  }, props.actionButton ? props.actionButton : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    color: "primary",
    onClick: () => {
      setShow(false);
      props.onClose && props.onClose();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 25
    }
  }, "Ok")));
}

/***/ }),

/***/ "./src/Components/ConfirmBox.component.tsx":
/*!*************************************************!*\
  !*** ./src/Components/ConfirmBox.component.tsx ***!
  \*************************************************/
/*! exports provided: ConfirmBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmBox", function() { return ConfirmBox; });
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var _jsxFileName = "/home/balj/Documents/development-work/react-projects/jobPortal/src/Components/ConfirmBox.component.tsx";



const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])({
  heading: {
    '& h2': {
      textAlign: 'left'
    }
  }
});
function ConfirmBox(props) {
  const [heading, setHeading] = react__WEBPACK_IMPORTED_MODULE_1__["useState"]('Confirm');
  const [show, setShow] = react__WEBPACK_IMPORTED_MODULE_1__["useState"](false);
  const [onConfirm, setOnConfirm] = react__WEBPACK_IMPORTED_MODULE_1__["useState"](Function);
  const [message, setMessage] = react__WEBPACK_IMPORTED_MODULE_1__["useState"]('Are You sure to continue this action?');
  const styles = useStyles();
  react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](() => {
    if (props.heading && props.heading !== heading) {
      setHeading(props.heading);
    }

    if (props.message && (props === null || props === void 0 ? void 0 : props.message) !== message) {
      setMessage(props.message);
    }

    if (props.show !== show) {
      setShow(props.show);
    }

    if (props.onConfirm !== onConfirm) {
      setOnConfirm(() => props.onConfirm);
    }
  }, [props]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Dialog"], {
    open: show,
    onClose: () => {
      setShow(false);
      props.onClose && props.onClose();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, heading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["DialogTitle"], {
    className: styles.heading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 29
    }
  }, heading), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["DialogContent"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["DialogContentText"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  }, message)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["DialogActions"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    color: "default",
    onClick: () => {
      setShow(false);
      props.onClose && props.onClose();
      props.onCancel && props.onCancel();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    }
  }, "cancel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    color: "primary",
    onClick: () => {
      setShow(false);
      props.onClose && props.onClose();
      console.log(props.onConfirm);
      props.onConfirm && props.onConfirm();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 17
    }
  }, "Confirm")));
}

/***/ }),

/***/ "./src/Components/Counter.component.tsx":
/*!**********************************************!*\
  !*** ./src/Components/Counter.component.tsx ***!
  \**********************************************/
/*! exports provided: Counter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Counter", function() { return Counter; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Services_App_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Services/App.service */ "./src/Services/App.service.ts");
var _jsxFileName = "/home/balj/Documents/development-work/react-projects/jobPortal/src/Components/Counter.component.tsx";


function Counter(props) {
  const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](props.start ? props.start : 0);
  const [start, setStart] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](props.start ? props.start : 0);
  const [steps, setSteps] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](props.steps ? props.steps : 1);
  const [end, setEnd] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](props.end ? props.end : 0);
  const [duration, setDuration] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](props.duration ? props.duration : 500);
  var isCounted = false;

  const scrollHandler = element => {
    let isInView = IsElementInViewPort(element);

    if (isInView && !isCounted) {
      isCounted = true;
      AnimateValue();
    }
  };

  const IsElementInViewPort = element => {
    var _window;

    var position = element === null || element === void 0 ? void 0 : element.getBoundingClientRect(); // if(position.top >= 0 && position.bottom <= window.innerHeight) {
    // 	console.log('Element is fully visible in screen');
    // }

    if ((position === null || position === void 0 ? void 0 : position.top) < ((_window = window) === null || _window === void 0 ? void 0 : _window.innerHeight) && (position === null || position === void 0 ? void 0 : position.bottom) >= 0) {
      // console.log('Element is partially visible in screen');
      return true;
    } else {
      // console.log('Element is not visible in screen');
      return false;
    }
  };

  function AnimateValue() {
    if (start === end) return;
    var range = end - start;
    var current = start;
    var increment = end > start ? steps : -steps;
    var stepTime = Math.abs(Math.floor(duration / range));
    var timer = setInterval(() => {
      current += increment;
      setValue(current);

      if (current >= end) {
        setValue(end);
        clearInterval(timer);
      }
    }, stepTime);
  }

  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
    window.addEventListener('scroll', () => {
      // console.log(`scrolling - ${props.id}`)
      let counter = document.getElementById(`counter-${props === null || props === void 0 ? void 0 : props.id}`);
      scrollHandler(counter);
    });
  }, []);
  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
    if (props.start !== start) {
      setStart(props.start);
    }

    if (props.end !== end) {
      setEnd(props.end);
    }

    if (props.duration !== duration) {
      setDuration(props.duration);
    }

    if (props.steps !== steps) {
      setSteps(props.steps);
    }
  }, [props.start, props.end, props.duration, props.steps]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: "counter",
    id: `counter-${props === null || props === void 0 ? void 0 : props.id}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }
  }, Object(_Services_App_service__WEBPACK_IMPORTED_MODULE_1__["Format_INS"])(value));
}

/***/ }),

/***/ "./src/Components/CustomButton.component.tsx":
/*!***************************************************!*\
  !*** ./src/Components/CustomButton.component.tsx ***!
  \***************************************************/
/*! exports provided: CustomButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomButton", function() { return CustomButton; });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Services_App_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/App.service */ "./src/Services/App.service.ts");
var _jsxFileName = "/home/balj/Documents/development-work/react-projects/jobPortal/src/Components/CustomButton.component.tsx";




const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
  button: {
    border: `2px solid ${_Services_App_service__WEBPACK_IMPORTED_MODULE_3__["Theme"].primary}`,
    color: _Services_App_service__WEBPACK_IMPORTED_MODULE_3__["Theme"].primary,
    padding: '10px 20px',
    fontWeight: 400,
    margin: 5,
    cursor: 'pointer',
    transition: '.5s',
    textTransform: 'capitalize',
    borderRadius: 0,
    fontSize: 18,
    '&:focus': {
      outline: 'none'
    },
    '&:disabled': {
      border: `2px solid #ccc`
    },
    '&:hover': {
      color: 'white',
      backgroundColor: _Services_App_service__WEBPACK_IMPORTED_MODULE_3__["Theme"].primary + 'dd'
    }
  }
});
function CustomButton(props) {
  const [loading, setLoading] = react__WEBPACK_IMPORTED_MODULE_2__["useState"](false);
  const {
    loadingText,
    title
  } = props;
  react__WEBPACK_IMPORTED_MODULE_2__["useEffect"](() => {
    setLoading(props === null || props === void 0 ? void 0 : props.loading);
  }, [props === null || props === void 0 ? void 0 : props.loading]);
  const styles = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Button"], Object.assign({
    className: styles.button,
    style: props === null || props === void 0 ? void 0 : props.buttonStyles
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }), (props === null || props === void 0 ? void 0 : props.children) ? props.children : loading ? loadingText ? loadingText + '...' : 'Requesting...' : title));
}

/***/ }),

/***/ "./src/Components/ErrorBox.component.tsx":
/*!***********************************************!*\
  !*** ./src/Components/ErrorBox.component.tsx ***!
  \***********************************************/
/*! exports provided: ErrorBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorBox", function() { return ErrorBox; });
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _Services_App_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Services/App.service */ "./src/Services/App.service.ts");
var _jsxFileName = "/home/balj/Documents/development-work/react-projects/jobPortal/src/Components/ErrorBox.component.tsx";






const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])({
  container: {
    marginTop: 10,
    maxHeight: 150,
    overflowY: 'scroll',
    transition: 'ease-in-out .3s',
    '& h6': {
      fontWeight: 400
    }
  },
  containerFill: {
    height: 'auto'
  },
  containerBlank: {
    height: 0
  },
  icon: {
    color: _Services_App_service__WEBPACK_IMPORTED_MODULE_5__["Theme"].error,
    marginRight: 5
  }
});
function ErrorBox(props) {
  const [errors, setErrors] = react__WEBPACK_IMPORTED_MODULE_1__["useState"]((props === null || props === void 0 ? void 0 : props.errors) ? props === null || props === void 0 ? void 0 : props.errors : []);
  var isCounted = false;
  const styles = useStyles();
  react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](() => {
    setErrors(props === null || props === void 0 ? void 0 : props.errors);
  }, [props === null || props === void 0 ? void 0 : props.errors]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(styles.container, (errors === null || errors === void 0 ? void 0 : errors.length) ? styles.containerFill : styles.containerBlank),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, errors === null || errors === void 0 ? void 0 : errors.map((message, index) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("p", {
      key: index,
      className: "error",
      style: {
        lineHeight: '16px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 29
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      className: styles.icon,
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faExclamationCircle"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 35
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 29
      }
    }, message));
  }));
}

/***/ }),

/***/ "./src/Components/Filter.component.tsx":
/*!*********************************************!*\
  !*** ./src/Components/Filter.component.tsx ***!
  \*********************************************/
/*! exports provided: Filters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Filters", function() { return Filters; });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Chip */ "./node_modules/@material-ui/core/esm/Chip/index.js");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "./node_modules/@material-ui/core/esm/Checkbox/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Context_FilterAttribs_context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Context/FilterAttribs.context */ "./src/Context/FilterAttribs.context.tsx");
/* harmony import */ var _Services_App_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Services/App.service */ "./src/Services/App.service.ts");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
var _jsxFileName = "/home/balj/Documents/development-work/react-projects/jobPortal/src/Components/Filter.component.tsx";











const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_10__["makeStyles"])({
  container: {
    margin: '10px 20px',
    width: 'calc(100% - 40px)',
    overflowX: 'hidden',
    '&>div': {
      margin: '0 -5px',
      display: 'flex',
      overflowX: 'scroll',
      flexDirection: 'row',
      paddingBottom: 10,
      justifyContent: 'flex-start',
      flexWrap: 'nowrap',
      '&::-webkit-scrollbar': {
        height: 5,
        borderRadius: 5
      },
      '&::-webkit-scrollbar-track': {
        backgroundColor: '#eee'
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: _Services_App_service__WEBPACK_IMPORTED_MODULE_8__["Theme"].primary + 'aa'
      }
    }
  },
  listItem: {
    padding: '0px 10px',
    fontSize: '14px !important',
    fontWeight: 100
  },
  checkbox: {
    padding: 5
  },
  list: {
    paddingTop: 40
  },
  submitButtonWrap: {
    position: 'fixed',
    zIndex: 9,
    margin: 10
  }
});
const Filters = props => {
  const {
    getFilterOptions
  } = react__WEBPACK_IMPORTED_MODULE_6__["useContext"](_Context_FilterAttribs_context__WEBPACK_IMPORTED_MODULE_7__["FilterAttribsContext"]);
  const styles = useStyles();
  const [filterFields, setFilterFields] = react__WEBPACK_IMPORTED_MODULE_6__["useState"]({
    location: {
      anchor: null,
      name: 'location',
      label: 'Location',
      defaultLabel: 'Location',
      value: [],
      options: []
    },
    skill: {
      anchor: null,
      name: 'skill',
      label: 'Skill',
      defaultLabel: 'Skill',
      value: [],
      options: []
    },
    industry: {
      anchor: null,
      name: 'industry',
      label: 'Industry',
      defaultLabel: 'Industry',
      value: [],
      options: []
    },
    jobType: {
      anchor: null,
      name: 'jobType',
      label: 'Job-type',
      defaultLabel: 'Job-type',
      value: [],
      options: []
    },
    education: {
      anchor: null,
      name: 'education',
      label: 'Education',
      defaultLabel: 'Education',
      value: [],
      options: []
    },
    remote: {
      anchor: null,
      name: 'remote',
      label: 'Remote',
      defaultLabel: 'Remote',
      value: [],
      options: [// { value: true, label: 'temprorily remote (COVID-19)' },
        // { value: false, label: 'In office' },
      ]
    },
    company: {
      anchor: null,
      name: 'company',
      label: 'company',
      defaultLabel: 'company',
      value: [],
      options: []
    }
  });
  const filters = Object.keys(filterFields);

  const getFilterFields = async () => {
    let _filterOptions = await getFilterOptions();

    if (_filterOptions) {
      setFilterOptions(_filterOptions);
    }
  };

  const setFilterOptions = options => {
    let fields = Object.keys(options);

    if (fields.length) {
      fields.forEach(field => {
        updateFieldOption(field, options[field]);
      });
    }
  };

  react__WEBPACK_IMPORTED_MODULE_6__["useEffect"](() => {
    getFilterFields();
  }, []);

  const makeFilterForm = (newFilters = filterFields) => {
    let form = {};
    filters.forEach(field => {
      form[field] = newFilters[field].value;
    });
    return form;
  };

  const handleOpen = (event, filterField) => {
    var _filterFields$filterF, _filterFields$filterF2;

    if ((_filterFields$filterF = filterFields[filterField]) === null || _filterFields$filterF === void 0 ? void 0 : (_filterFields$filterF2 = _filterFields$filterF.options) === null || _filterFields$filterF2 === void 0 ? void 0 : _filterFields$filterF2.length) {
      setFilterFields(prev => {
        return { ...prev,
          [filterField]: { ...prev[filterField],
            anchor: event.currentTarget
          }
        };
      });
    }
  };

  const handleClose = filterField => {
    setFilterFields(prev => {
      return { ...prev,
        [filterField]: { ...prev[filterField],
          anchor: null
        }
      };
    });
  };

  const handleSelect = filterField => {
    let newFilters = [];
    setFilterFields(prev => {
      newFilters = { ...prev,
        [filterField]: { ...prev[filterField],
          anchor: null
        }
      };
      return newFilters;
    });
    let form = makeFilterForm(newFilters);
    props.onChange(form);
  };

  const findIndex = (array, value) => {
    for (let i = 0; i < array.length; i++) {
      if (value === array[i]) {
        return i;
      } else if (i === array.length - 1) {
        return null;
      }
    }
  };

  const handleSelect2 = (filterField, text, value) => {
    setFilterFields(prev => {
      let values = prev[filterField].value;
      let valueIndex = findIndex(values, value);
      let toDelete = valueIndex || valueIndex === 0 ? true : false;

      if (toDelete) {
        values.splice(valueIndex, 1);
      } else {
        values.push(value);
      }

      let newFilters = { ...prev,
        [filterField]: { ...prev[filterField],
          label: text,
          value: values
        }
      };
      return newFilters;
    });
  };

  const updateFieldOption = (filterField, options) => {
    if (options === null || options === void 0 ? void 0 : options.length) {
      setFilterFields(prev => {
        return { ...prev,
          [filterField]: { ...prev[filterField],
            options: options
          }
        };
      });
    }
  };

  const handleDelete = field => {
    let newFilters = {};
    setFilterFields(prev => {
      newFilters = { ...prev,
        [field]: { ...prev[field],
          label: prev[field].defaultLabel,
          value: []
        }
      };
      return newFilters;
    });
    let form = makeFilterForm(newFilters);
    props.onChange(form);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    container: true,
    className: styles.container,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 13
    }
  }, filters.map(field => {
    var _currentField$value, _currentField$value2, _currentField$value3, _currentField$value4, _currentField$value5, _filterFields$field, _filterFields$field$o;

    let currentField = filterFields[field];
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("span", {
      key: field,
      style: {
        margin: 5,
        display: 'inline-block'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 277,
        columnNumber: 29
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_4__["default"], {
      variant: (currentField === null || currentField === void 0 ? void 0 : (_currentField$value = currentField.value) === null || _currentField$value === void 0 ? void 0 : _currentField$value.length) ? 'default' : 'outlined',
      color: 'primary',
      size: "medium",
      style: {
        padding: '5px 10px',
        borderRadius: _Services_App_service__WEBPACK_IMPORTED_MODULE_8__["Theme"].radius1
      },
      label: (currentField === null || currentField === void 0 ? void 0 : (_currentField$value2 = currentField.value) === null || _currentField$value2 === void 0 ? void 0 : _currentField$value2.length) > 1 ? `${currentField.defaultLabel} (${currentField === null || currentField === void 0 ? void 0 : (_currentField$value3 = currentField.value) === null || _currentField$value3 === void 0 ? void 0 : _currentField$value3.length})` : (currentField === null || currentField === void 0 ? void 0 : (_currentField$value4 = currentField.value) === null || _currentField$value4 === void 0 ? void 0 : _currentField$value4.length) === 1 ? currentField === null || currentField === void 0 ? void 0 : currentField.label : currentField.defaultLabel,
      deleteIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
        icon: (currentField === null || currentField === void 0 ? void 0 : (_currentField$value5 = currentField.value) === null || _currentField$value5 === void 0 ? void 0 : _currentField$value5.length) ? _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faTimes"] : _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faCaretDown"],
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 292,
          columnNumber: 49
        }
      }),
      onClick: event => handleOpen(event, field),
      onDelete: event => {
        var _currentField$value6;

        if (currentField === null || currentField === void 0 ? void 0 : (_currentField$value6 = currentField.value) === null || _currentField$value6 === void 0 ? void 0 : _currentField$value6.length) {
          handleDelete(field);
        } else {
          handleOpen(event, field);
        }
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 280,
        columnNumber: 33
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Popover"], {
      id: field,
      anchorEl: filterFields[field].anchor,
      keepMounted: true,
      open: Boolean(filterFields[field].anchor),
      onClose: () => handleClose(field),
      getContentAnchorEl: null,
      style: {
        marginTop: 10
      },
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'left'
      },
      transformOrigin: {
        vertical: 'top',
        horizontal: 'left'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 303,
        columnNumber: 33
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("div", {
      className: styles.submitButtonWrap,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 315,
        columnNumber: 37
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
      onClick: () => handleSelect(field),
      variant: "contained",
      size: "small",
      color: "secondary",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 316,
        columnNumber: 41
      }
    }, "Done")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["List"], {
      className: styles.list,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 319,
        columnNumber: 37
      }
    }, (_filterFields$field = filterFields[field]) === null || _filterFields$field === void 0 ? void 0 : (_filterFields$field$o = _filterFields$field.options) === null || _filterFields$field$o === void 0 ? void 0 : _filterFields$field$o.map(option => {
      var _filterFields$field2;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["ListItem"], {
        button: true,
        dense: true,
        key: option.value,
        className: styles.listItem,
        onClick: () => handleSelect2(field, option === null || option === void 0 ? void 0 : option.label, option.value),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 324,
          columnNumber: 56
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: styles.checkbox,
        checked: (_filterFields$field2 = filterFields[field]) === null || _filterFields$field2 === void 0 ? void 0 : _filterFields$field2.value.includes(option.value),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 327,
          columnNumber: 53
        }
      }), option.label);
    }))));
  })));
};

/***/ }),

/***/ "./src/Components/Footer.component.tsx":
/*!*********************************************!*\
  !*** ./src/Components/Footer.component.tsx ***!
  \*********************************************/
/*! exports provided: CopyRightStrip, Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CopyRightStrip", function() { return CopyRightStrip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return Footer; });
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Services_App_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Services/App.service */ "./src/Services/App.service.ts");
var _jsxFileName = "/home/balj/Documents/development-work/react-projects/jobPortal/src/Components/Footer.component.tsx";









const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])({
  fSection: {
    width: '100%',
    backgroundColor: '#1f2732'
  },
  footer: {
    color: '#fff',
    padding: '50px 5% 40px',
    '& h6': {
      textAlign: 'left',
      paddingTop: 15
    },
    '& ul': {
      listStyle: 'none',
      textAlign: 'left',
      marginTop: 35,
      '& a': {
        color: '#ccc',
        textDecoration: 'none'
      }
    },
    '& li': {
      marginBottom: 8,
      cursor: 'pointer',
      '& svg': {
        marginRight: 8,
        fontSize: 8
      }
    },
    '& li *': {
      transition: '.3s'
    },
    '& li:hover>a': {
      color: _Services_App_service__WEBPACK_IMPORTED_MODULE_8__["Theme"].primary
    },
    '& .contact-list': {
      '& li': {
        display: 'flex',
        flexDirection: 'row'
      },
      '& svg': {
        height: '100%',
        margin: '7px 10px 0 0',
        fontSize: 15
      }
    }
  },
  fAbout: {
    '& img': {
      display: 'block',
      paddingBottom: 20
    },
    '& p': {
      fontSize: 16,
      margin: '10px 0',
      paddingRight: 20,
      textAlign: 'justify'
    }
  },
  fLink: {},
  fIndustries: {},
  fCities: {
    '& li': {
      width: '50%',
      textAlign: 'left',
      float: 'left'
    }
  },
  smIconWrap: {
    display: 'flex',
    flexDirection: 'row',
    margin: '20px 0',
    justifyContent: 'flex-start',
    fontSize: 16,
    '& span': {
      width: 36,
      height: 36,
      backgroundColor: '#fff',
      borderRadius: 36,
      marginRight: 10,
      textAlign: 'center',
      lineHeight: '36px',
      transition: '.3s',
      '& svg': {
        color: '#1f2732'
      },
      '&:hover': {
        backgroundColor: _Services_App_service__WEBPACK_IMPORTED_MODULE_8__["Theme"].primary + '33',
        '& svg': {
          color: _Services_App_service__WEBPACK_IMPORTED_MODULE_8__["Theme"].primary
        }
      }
    }
  },
  copyRight: {
    borderTop: '1px solid #777',
    padding: '10px 0',
    textAlign: 'center',
    fontSize: 13,
    color: '#fff',
    '& p': {
      marginBottom: 5,
      fontSize: 12
    }
  },
  scrollTopButton: {
    zIndex: 999,
    backgroundColor: _Services_App_service__WEBPACK_IMPORTED_MODULE_8__["Theme"].primary,
    padding: '5px 6px',
    borderRadius: _Services_App_service__WEBPACK_IMPORTED_MODULE_8__["Theme"].radius1,
    right: 20,
    position: 'fixed',
    bottom: 20,
    transition: '.5s',
    opacity: .8,
    color: '#fff',
    '& svg': {
      width: '22px !important',
      height: 22
    },
    '&:hover': {
      opacity: .5
    }
  },
  subscribeForm: {
    '& div': {
      height: 35,
      display: 'flex',
      width: '100%',
      maxWidth: 230,
      flexDirection: 'row'
    },
    '& input': {
      padding: 5,
      width: 'calc(100% - 35px)',
      '&::placeholder': {
        fontSize: 14
      }
    },
    '& span': {
      height: '100%',
      width: 35,
      textAlign: 'center',
      lineHeight: '35px',
      fontSize: 14,
      backgroundColor: _Services_App_service__WEBPACK_IMPORTED_MODULE_8__["Theme"].primary,
      color: '#fff',
      '&:hover': {
        opacity: .8
      }
    }
  }
});
const CopyRightStrip = props => {
  const [isOnTop, setIsOnTop] = react__WEBPACK_IMPORTED_MODULE_6__["useState"](true);
  const styles = useStyles();
  react__WEBPACK_IMPORTED_MODULE_6__["useEffect"](() => {
    window.onscroll = event => {
      if (window.pageYOffset > 100) {
        setIsOnTop(false);
      } else {
        setIsOnTop(true);
      }
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("div", {
    className: styles.copyRight,
    style: {
      color: (props === null || props === void 0 ? void 0 : props.color) ? props.color : '#fff'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 17
    }
  }, "Preparing for Interview | CV Writing | How to get a Job | Policy"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 17
    }
  }, "Copyright 2020. Newjobshub. Designed & Developed by Balj Technology")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("span", {
    onClick: () => scrollToTop(),
    className: styles.scrollTopButton,
    style: {
      display: isOnTop ? 'none' : 'unset'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faAngleUp"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 133
    }
  })));
};
const Footer = props => {
  const styles = useStyles();
  react__WEBPACK_IMPORTED_MODULE_6__["useEffect"](() => {}, []);
  const popularCities = ['AGRA', 'GOA', 'AJMER ', 'HARIDWAR', 'AURANGABAD ', 'JAIPUR', 'BANGALORE ', 'KOTA', 'CHENNAI', 'LUCKNOW', 'FARIDABAD ', 'MUMBAI', 'GHAZIABAD ', 'NEW DELHI', 'GREATER NOIDA', 'NOIDA'];
  const quickLinks = [{
    label: 'About Us',
    link: _Services_App_service__WEBPACK_IMPORTED_MODULE_8__["Routes"].About
  }, {
    label: 'How to get a Job?',
    link: ''
  }, {
    label: 'New Job Openings',
    link: ''
  }, {
    label: 'Resume Search',
    link: ''
  }, {
    label: 'Contact Us',
    link: _Services_App_service__WEBPACK_IMPORTED_MODULE_8__["Routes"].Contact
  }];
  const popularJobs = ['Popular Jobs', 'Accounting Jobs', 'Advertising jobs', 'Banking Jobs', 'Customer Service Jobs', 'Graphic / Web Design Jobs', 'HR/ Industrial Relations Jobs', 'IT-Software Jobs', 'IT Hardware Jobs', 'Teaching / Education Jobs'];
  const contactInfo = {
    number: '9319311003',
    email: 'info@Newjobhub123.com'
  };

  const renderLink = (label, link) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("li", {
      key: label,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 232,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"], {
      to: link,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 232,
        columnNumber: 33
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCircle"],
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 13
      }
    }), label));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("div", {
    className: styles.fSection,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("footer", {
    className: styles.footer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    container: true,
    spacing: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    item: true,
    md: 3,
    sm: 6,
    xs: 12,
    className: styles.fAbout,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("img", {
    src: 'assets/images/fLogo.png',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 29
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 29
    }
  }, "With our New Jobs Hub, you can search for your dream job online which may take your career to new heights. You can use our exclusive tools to personalise your job search. You will get to add your resume for free, review a company and much more."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("div", {
    className: styles.smIconWrap,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 33
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faFacebookF"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 37
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 33
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faTwitter"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 37
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 33
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faLinkedinIn"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 37
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    item: true,
    md: 3,
    sm: 6,
    xs: 12,
    className: styles.fLink,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: 'h6',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 29
    }
  }, "Quick Links"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 29
    }
  }, quickLinks.map(link => renderLink(link.label, link.link)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    item: true,
    md: 3,
    sm: 6,
    xs: 12,
    className: styles.fLink,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: 'h6',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 29
    }
  }, "Get In Touch"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("ul", {
    className: 'contact-list',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 33
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 37
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faMapMarkerAlt"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 41
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("span", {
    style: {
      display: 'inline-block'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 41
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 45
    }
  }, "B-48, First floor, Sector-63,"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 45
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 45
    }
  }, "Noida, U.P., 201301"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 37
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPhoneAlt"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 41
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 41
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("a", {
    href: `tel:${contactInfo.number}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 47
    }
  }, "+91-", contactInfo.number))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 37
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faEnvelope"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 41
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 41
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("a", {
    href: `mailto:${contactInfo.email}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 47
    }
  }, contactInfo.email)))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    item: true,
    md: 3,
    sm: 6,
    xs: 12,
    className: styles.fLink,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: 'h6',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 29
    }
  }, "Subscribe"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 33
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304,
      columnNumber: 37
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("p", {
    style: {
      textAlign: 'justify'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 41
    }
  }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis eligendi accusantium voluptatibus quis iusto neque distinct")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("form", {
    className: styles.subscribeForm,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 37
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 41
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("input", {
    placeholder: "Email Address",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 45
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 45
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPaperPlane"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311,
      columnNumber: 49
    }
  }))))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__["createElement"](CopyRightStrip, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
      columnNumber: 13
    }
  }));
};

/***/ }),

/***/ "./src/Components/FormHead.component.tsx":
/*!***********************************************!*\
  !*** ./src/Components/FormHead.component.tsx ***!
  \***********************************************/
/*! exports provided: FormHead */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormHead", function() { return FormHead; });
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/balj/Documents/development-work/react-projects/jobPortal/src/Components/FormHead.component.tsx";



const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
  title: {
    fontSize: 18
  },
  subtitle: {},
  imageWrapper: {
    width: 70,
    height: 70,
    margin: '0 auto 10px',
    '& img': {
      width: '100%'
    }
  }
});
function FormHead(props) {
  const [loading, setLoading] = react__WEBPACK_IMPORTED_MODULE_2__["useState"](false);
  const {
    loadingText,
    title
  } = props;
  react__WEBPACK_IMPORTED_MODULE_2__["useEffect"](() => {
    setLoading(props === null || props === void 0 ? void 0 : props.loading);
  }, [props === null || props === void 0 ? void 0 : props.loading]);
  const styles = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, (props === null || props === void 0 ? void 0 : props.headImage) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
    className: styles.imageWrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("img", {
    src: '/assets/images/FormHeadImage.png',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 25
    }
  })), (props === null || props === void 0 ? void 0 : props.title) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_0__["default"], {
    className: styles.title,
    variant: 'subtitle1',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 34
    }
  }, props.title), (props === null || props === void 0 ? void 0 : props.subtitle) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_0__["default"], {
    className: styles.subtitle,
    variant: 'caption',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 37
    }
  }, props.subtitle));
}

/***/ }),

/***/ "./src/Components/JobDetailSkeleton.component.tsx":
/*!********************************************************!*\
  !*** ./src/Components/JobDetailSkeleton.component.tsx ***!
  \********************************************************/
/*! exports provided: JobDetailSkeleton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobDetailSkeleton", function() { return JobDetailSkeleton; });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/lab/Skeleton */ "./node_modules/@material-ui/lab/esm/Skeleton/index.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Services_App_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Services/App.service */ "./src/Services/App.service.ts");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
var _jsxFileName = "/home/balj/Documents/development-work/react-projects/jobPortal/src/Components/JobDetailSkeleton.component.tsx";







const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])({
  container: {
    width: '100%',
    height: '100%',
    textAlign: 'left',
    boxSizing: 'border-box',
    padding: '0 20px 40px',
    maxHeight: '100vh',
    overflowY: 'scroll' // border: `1px solid #ccc`,

  },
  head: {
    padding: '15px',
    borderRadius: _Services_App_service__WEBPACK_IMPORTED_MODULE_4__["Theme"].radius2,
    border: `1px solid #ccc`,
    position: 'sticky',
    top: 0,
    backgroundColor: '#fff',
    zIndex: 99
  },
  title: {
    fontSize: 20
  },
  subTitle: {
    fontSize: 16,
    fontWeight: 100
  },
  logoWrap: {
    textAlign: 'left'
  },
  logo: {
    alignItems: 'left',
    borderRadius: _Services_App_service__WEBPACK_IMPORTED_MODULE_4__["Theme"].radius1 // border: '1px solid #ccc8'

  },
  logo_S: {
    width: 65,
    height: 65
  },
  logo_L: {
    width: 100,
    height: 100
  },
  contentBody: {
    padding: '0 20px',
    '& ul': {
      listStyle: 'none'
    }
  },
  iconButton: {
    marginLeft: 10,
    '& svg': {
      fontSize: 16
    },
    '&:focus': {
      outline: 'none'
    }
  },
  icons: {
    color: _Services_App_service__WEBPACK_IMPORTED_MODULE_4__["Theme"].secondary,
    marginRight: 10
  },
  buttonsWrap: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  specificationContainer: {
    padding: '30px 0'
  },
  specification: {
    '& h6': {
      marginBottom: 10
    },
    '& p': {
      fontWeight: 100
    }
  },
  skeleton_S: {
    width: '100%'
  },
  skeleton_L: {
    width: '50%'
  }
});
const JobDetailSkeleton = props => {
  const styles = useStyles();
  const isMobile = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["useMediaQuery"])('(max-width:767px');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {
    className: styles.container,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {
    className: styles.head,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
    container: true,
    spacing: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
    item: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: isMobile ? styles.skeleton_S : styles.skeleton_L,
    variant: "rect",
    width: isMobile ? 65 : 100,
    height: isMobile ? 65 : 100,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 29
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
    item: true,
    style: {
      flexGrow: 1
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: isMobile ? styles.skeleton_S : styles.skeleton_L,
    variant: "text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 33
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: isMobile ? styles.skeleton_S : styles.skeleton_L,
    variant: "text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 33
    }
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {
    className: styles.contentBody,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
    container: true,
    spacing: 1,
    className: styles.specificationContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
    item: true,
    md: 6,
    className: styles.specification,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    variant: 'subtitle2',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
    className: styles.icons,
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faBriefcase"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 29
    }
  }), "Job Type"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: isMobile ? styles.skeleton_S : styles.skeleton_L,
    variant: "text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 25
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
    item: true,
    md: 6,
    className: styles.specification,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    variant: 'subtitle2',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
    className: styles.icons,
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faBriefcase"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 29
    }
  }), "Exerience Required"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: isMobile ? styles.skeleton_S : styles.skeleton_L,
    variant: "text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 25
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
    item: true,
    md: 6,
    className: styles.specification,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    variant: 'subtitle2',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
    className: styles.icons,
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faMapMarkerAlt"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 29
    }
  }), "Location"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: isMobile ? styles.skeleton_S : styles.skeleton_L,
    variant: "text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 25
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Grid"], {
    item: true,
    md: 6,
    className: styles.specification,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    variant: 'subtitle2',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
    className: styles.icons,
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faMoneyBill"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 29
    }
  }), "Salary"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: isMobile ? styles.skeleton_S : styles.skeleton_L,
    variant: "text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 25
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    variant: "subtitle1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 21
    }
  }, "Job Description :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: isMobile ? styles.skeleton_S : styles.skeleton_L,
    variant: "text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: isMobile ? styles.skeleton_S : styles.skeleton_L,
    variant: "text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: isMobile ? styles.skeleton_S : styles.skeleton_L,
    variant: "text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 21
    }
  }))));
};

/***/ }),

/***/ "./src/Components/Loader.component/Loader.component.css":
/*!**************************************************************!*\
  !*** ./src/Components/Loader.component/Loader.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Loader.component.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/Loader.component/Loader.component.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Loader.component.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/Loader.component/Loader.component.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Loader.component.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/Loader.component/Loader.component.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/Components/Loader.component/Loader.component.tsx":
/*!**************************************************************!*\
  !*** ./src/Components/Loader.component/Loader.component.tsx ***!
  \**************************************************************/
/*! exports provided: Loader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Loader", function() { return Loader; });
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Loader_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Loader.component.css */ "./src/Components/Loader.component/Loader.component.css");
/* harmony import */ var _Loader_component_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Loader_component_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/balj/Documents/development-work/react-projects/jobPortal/src/Components/Loader.component/Loader.component.tsx";



const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(theme => Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_0__["createStyles"])({
  root: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  }
}));
const Loader = props => {
  const classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    style: {
      width: '100%',
      height: '100%',
      backgroundColor: '#0004',
      position: 'absolute',
      top: 0,
      left: 0,
      borderRadius: 10,
      zIndex: 9
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: classes.root,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: "folding-cube-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: "folding-cube",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: "cube1 cube",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 25
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: "cube2 cube",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 25
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: "cube4 cube",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 25
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: "cube3 cube",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 25
    }
  })))));
};

/***/ }),

/***/ "./src/Components/NavLink.component.tsx":
/*!**********************************************!*\
  !*** ./src/Components/NavLink.component.tsx ***!
  \**********************************************/
/*! exports provided: Navlink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Navlink", function() { return Navlink; });
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Services_App_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/App.service */ "./src/Services/App.service.ts");
var _jsxFileName = "/home/balj/Documents/development-work/react-projects/jobPortal/src/Components/NavLink.component.tsx";




const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])({
  link: {
    color: _Services_App_service__WEBPACK_IMPORTED_MODULE_3__["Theme"].fontColor,
    display: 'flex',
    fontWeight: 600,
    fontStyle: 'none',
    padding: 5,
    margin: '0 5px',
    borderRadius: 5,
    textDecoration: 'none !important',
    '&:hover': {
      color: _Services_App_service__WEBPACK_IMPORTED_MODULE_3__["Theme"].primary
    }
  }
});
function Navlink(props) {
  const styles = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], Object.assign({}, props, {
    className: styles.link,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }), props.children));
}

/***/ }),

/***/ "./src/Components/Navbar.component.tsx":
/*!*********************************************!*\
  !*** ./src/Components/Navbar.component.tsx ***!
  \*********************************************/
/*! exports provided: NavBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBar", function() { return NavBar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _NavLink_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NavLink.component */ "./src/Components/NavLink.component.tsx");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _Services_App_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Services/App.service */ "./src/Services/App.service.ts");
/* harmony import */ var _Context_User_context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Context/User.context */ "./src/Context/User.context.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Search_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Search.component */ "./src/Components/Search.component.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _UserMenu_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./UserMenu.component */ "./src/Components/UserMenu.component.tsx");
/* harmony import */ var _Services_Api_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Services/Api.service */ "./src/Services/Api.service.ts");
var _jsxFileName = "/home/balj/Documents/development-work/react-projects/jobPortal/src/Components/Navbar.component.tsx";














const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
  navBar: {
    padding: '8px calc(5% - 10px)',
    // boxShadow: `0px 2px 10px 0px #ccc`,
    backgroundColor: '#fff !important'
  },
  collapsible: {// backgroundColor: '#fff',
  },
  menuIcon: {
    marginRight: 10,
    color: 'gray',
    fontSize: 14
  },
  UserMenuIcon: {
    width: 40,
    height: 40,
    marginLeft: 10
  },
  logo_S: {
    width: 100
  },
  logo_L: {
    width: 160
  },
  profileImageButtonWrap: {
    cursor: 'pointer',
    "& div": {
      display: 'flex',
      flexDirection: 'row',
      color: 'gray',
      justifyContent: 'center',
      alignItems: 'center'
    },
    '& p': {
      fontSize: 12,
      fontWeight: 600,
      margin: 0
    },
    '& .arrow': {
      transition: '.5s',
      marginLeft: 5
    },
    '& .arrow-down': {
      transform: 'rotate(180deg)'
    }
  },
  profileImageButton: {
    width: 40,
    height: 40,
    padding: 0,
    minWidth: 0,
    overflow: 'hidden',
    "& img": {
      width: '100%'
    }
  },
  row: {
    display: 'flex',
    flexDirection: 'row'
  },
  LoginRegisterButton: {
    '& .tiltLine': {
      fontSize: 20
    },
    '& a': {
      color: _Services_App_service__WEBPACK_IMPORTED_MODULE_6__["Theme"].fontColor,
      fontWeight: 500,
      transition: '.3s',
      textDecoration: 'none',
      '&:hover': {
        color: _Services_App_service__WEBPACK_IMPORTED_MODULE_6__["Theme"].primary
      }
    },
    '&>Span ': {
      padding: 8,
      '& svg': {
        marginRight: 10
      },
      '& span': {
        fontSize: 16
      }
    }
  },
  LoginRegisterButton_S: {
    '& .tiltLine': {
      fontSize: 16
    },
    '&>Span ': {
      padding: 5,
      '& svg': {
        marginRight: 5
      },
      '& span': {
        fontSize: 14
      }
    }
  }
});
function NavBar(props) {
  const styles = useStyles();
  const customStyles = {
    toggleButton: {
      border: 'none',
      fontSize: '20px',
      color: _Services_App_service__WEBPACK_IMPORTED_MODULE_6__["Theme"].fontColor
    }
  };
  const [isNavOpen, setIsNavOpen] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
  const [profileMenuRef, setProfileMenuRef] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](null);
  const {
    user,
    logout
  } = react__WEBPACK_IMPORTED_MODULE_0__["useContext"](_Context_User_context__WEBPACK_IMPORTED_MODULE_7__["UserContext"]);
  const isMobile = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["useMediaQuery"])('(max-width:769px)');
  const isTablet = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["useMediaQuery"])('(max-width:992px)');
  const location = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["useLocation"])();
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["useHistory"])();

  const toggleNav = () => {
    setIsNavOpen(prev => {
      return !prev;
    });
  };

  const handleClose = event => {
    if (profileMenuRef.current && profileMenuRef.current.contains(event.target)) {
      return;
    }

    setIsNavOpen(false);
  };

  const openMenu = event => {
    setProfileMenuRef(event.currentTarget);
  };

  const closeMenu = () => {
    setProfileMenuRef(null);
  };

  const handleListKeyDown = event => {
    if (event.key === 'Tab') {
      event.preventDefault();
      setIsNavOpen(false);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"], {
    className: styles.navBar,
    bg: "light",
    expand: "lg",
    variant: "light",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: styles.row,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 7
    }
  }, props.home && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"].Toggle, {
    as: () => {
      if (isTablet) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["IconButton"], {
          style: customStyles.toggleButton,
          onClick: toggleNav,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 186,
            columnNumber: 25
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faBars"],
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 186,
            columnNumber: 92
          }
        }));
      } else {
        return null;
      }
    },
    "aria-controls": "basic-navbar-nav",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_NavLink_component__WEBPACK_IMPORTED_MODULE_3__["Navlink"], {
    to: _Services_App_service__WEBPACK_IMPORTED_MODULE_6__["Routes"].Home,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
    className: classnames__WEBPACK_IMPORTED_MODULE_11___default()(isMobile ? styles.logo_S : styles.logo_L),
    src: "/assets/images/ph-logo.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 35
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"].Collapse, {
    in: isNavOpen,
    className: styles.collapsible,
    id: "basic-navbar-nav",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
    className: "mr-auto",
    style: {
      margin: props.home ? 'unset' : 'auto',
      ...props.rightContainerStyle
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 9
    }
  }, props.home ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, location.pathname !== _Services_App_service__WEBPACK_IMPORTED_MODULE_6__["Routes"].Home && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_NavLink_component__WEBPACK_IMPORTED_MODULE_3__["Navlink"], {
    to: _Services_App_service__WEBPACK_IMPORTED_MODULE_6__["Routes"].Home,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 57
    }
  }, "Home"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_NavLink_component__WEBPACK_IMPORTED_MODULE_3__["Navlink"], {
    to: _Services_App_service__WEBPACK_IMPORTED_MODULE_6__["Routes"].Recruiters,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 17
    }
  }, "Recruiters"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_NavLink_component__WEBPACK_IMPORTED_MODULE_3__["Navlink"], {
    to: {
      pathname: _Services_App_service__WEBPACK_IMPORTED_MODULE_6__["Routes"].Jobs,
      query: {
        jobType: ''
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 17
    }
  }, "Search a Job"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_NavLink_component__WEBPACK_IMPORTED_MODULE_3__["Navlink"], {
    to: {
      pathname: _Services_App_service__WEBPACK_IMPORTED_MODULE_6__["Routes"].Jobs,
      query: {
        jobType: 'gov'
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 17
    }
  }, "Govt. Job"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_NavLink_component__WEBPACK_IMPORTED_MODULE_3__["Navlink"], {
    to: _Services_App_service__WEBPACK_IMPORTED_MODULE_6__["Routes"].WalkInJobs,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 17
    }
  }, "Walk in Jobs")) : !isTablet ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Search_component__WEBPACK_IMPORTED_MODULE_9__["Search"], {
    height: 40,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 29
    }
  }) : null)), (user === null || user === void 0 ? void 0 : user.id) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: styles.profileImageButtonWrap,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["IconButton"], {
    className: styles.profileImageButton,
    "aria-controls": "simple-menu",
    "aria-haspopup": "true",
    onClick: () => history.push(_Services_App_service__WEBPACK_IMPORTED_MODULE_6__["Routes"].Profile),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
    src: (user === null || user === void 0 ? void 0 : user.profilePicture) ? _Services_Api_service__WEBPACK_IMPORTED_MODULE_13__["Domain"] + user.profilePicture : '/assets/images/defaultProfile.png',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 17
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["IconButton"], {
    className: styles.UserMenuIcon,
    "aria-controls": "simple-menu",
    "aria-haspopup": "true",
    onClick: openMenu,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faEllipsisV"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 15
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Menu"], {
    id: "simple-menu",
    anchorEl: profileMenuRef,
    keepMounted: true,
    open: Boolean(profileMenuRef),
    onClose: closeMenu,
    style: {
      marginTop: 10
    },
    getContentAnchorEl: null,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'right'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_UserMenu_component__WEBPACK_IMPORTED_MODULE_12__["UserMenu"], {
    closeMenu: closeMenu,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 15
    }
  }))) :
  /*#__PURE__*/
  // < div style={{ display: 'flex', flexDirection: 'row', }}>
  //   <CustomButton buttonStyles={isMobile ? customStyles.button_S : customStyles.button_L} size='small' onClick={() => navigateTo({
  //     pathname: Routes.User,
  //     hash: Routes.SignInHashes.exist
  //   })} title='Log In' />
  //   <CustomButton buttonStyles={isMobile ? customStyles.button_S : customStyles.button_L} onClick={() => navigateTo({
  //     pathname: Routes.User,
  //     hash: Routes.SignInHashes.new
  //   })} title='Register' />
  // </div>
  react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_11___default()(styles.LoginRegisterButton, {
      [styles.LoginRegisterButton_S]: isMobile
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Link"], {
    to: {
      pathname: _Services_App_service__WEBPACK_IMPORTED_MODULE_6__["Routes"].User,
      hash: _Services_App_service__WEBPACK_IMPORTED_MODULE_6__["Routes"].SignInHashes.exist
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faLock"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 17
    }
  }, "Login"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", {
    className: 'tiltLine',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 13
    }
  }, "/"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Link"], {
    to: {
      pathname: _Services_App_service__WEBPACK_IMPORTED_MODULE_6__["Routes"].User,
      hash: _Services_App_service__WEBPACK_IMPORTED_MODULE_6__["Routes"].SignInHashes.new
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faUser"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 17
    }
  }, "Register")))), isTablet && !props.home && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    style: {
      width: '100%',
      margin: '10px 0px 10px 10px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Search_component__WEBPACK_IMPORTED_MODULE_9__["Search"], {
    animate: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 13
    }
  })));
}

/***/ }),

/***/ "./src/Components/NoResult.component.tsx":
/*!***********************************************!*\
  !*** ./src/Components/NoResult.component.tsx ***!
  \***********************************************/
/*! exports provided: NoResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoResult", function() { return NoResult; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/balj/Documents/development-work/react-projects/jobPortal/src/Components/NoResult.component.tsx";




const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'calc(100vh - 200px)'
  },
  wrapper: {
    width: 600,
    maxWidth: '100%',
    padding: 30,
    '& p': {
      fontSize: 14,
      lineHeight: '24px'
    }
  },
  imageWrapper: {
    width: 100,
    height: 100,
    margin: '0 auto 20px',
    '& img': {
      width: '100%'
    }
  }
});
function NoResult(props) {
  const [message, setMessage] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](props === null || props === void 0 ? void 0 : props.message);
  const styles = useStyles();
  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
    setMessage(props.message);
  }, [props.message]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('container', styles.container),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: styles.wrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: styles.imageWrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
    src: '/assets/images/somethingWrong.png',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    style: {
      fontSize: 18,
      fontWeight: 400,
      padding: '30px 0'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, message), (props === null || props === void 0 ? void 0 : props.button) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: () => props.history.replace('/'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }, "Search Another")));
}

/***/ }),

/***/ "./src/Components/Search.component.tsx":
/*!*********************************************!*\
  !*** ./src/Components/Search.component.tsx ***!
  \*********************************************/
/*! exports provided: Search */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Search", function() { return Search; });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Services_App_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Services/App.service */ "./src/Services/App.service.ts");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/home/balj/Documents/development-work/react-projects/jobPortal/src/Components/Search.component.tsx";







 // const useStyles = ;

const Search = props => {
  const [Form, setForm] = react__WEBPACK_IMPORTED_MODULE_4__["useState"]({
    keyword: '',
    location: ''
  });
  const [collapsed, setCollapsed] = react__WEBPACK_IMPORTED_MODULE_4__["useState"](false);
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["useHistory"])();
  const isMobile = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["useMediaQuery"])('(max-width:767px');
  console.log('isMibile', isMobile);
  react__WEBPACK_IMPORTED_MODULE_4__["useEffect"](() => {
    var _location$state, _location$state2;

    const _location = history.location;
    setForm({
      keyword: (_location$state = _location.state) === null || _location$state === void 0 ? void 0 : _location$state.keyword,
      location: (_location$state2 = _location.state) === null || _location$state2 === void 0 ? void 0 : _location$state2.location
    });
  }, [history.location.state]);
  react__WEBPACK_IMPORTED_MODULE_4__["useEffect"](() => {
    if ((props === null || props === void 0 ? void 0 : props.animate) && isMobile) {
      setCollapsed(true);
    }
  }, [isMobile]);

  const showFields = () => {
    setCollapsed(false);
  };

  const hideFields = () => {
    setCollapsed(true);
  };

  const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])({
    form: {
      // padding: 5,
      backgroundColor: '#ccc9',
      width: '100%',
      borderRadius: _Services_App_service__WEBPACK_IMPORTED_MODULE_6__["Theme"].radius2,
      transition: '.4s'
    },
    inputContainer: {
      backgroundColor: '#fff',
      borderRadius: _Services_App_service__WEBPACK_IMPORTED_MODULE_6__["Theme"].radius2,
      justifyContent: 'center',
      display: 'flex',
      '& input': {
        height: (props === null || props === void 0 ? void 0 : props.height) ? props.height : isMobile ? 40 : 50,
        width: 'calc(100% - 50px)',
        border: 'none',
        '&:focus': {
          border: 'none',
          outline: 'none'
        }
      },
      '& svg': {
        margin: '0 10px',
        width: isMobile ? 40 : 50,
        height: (props === null || props === void 0 ? void 0 : props.height) ? props.height : isMobile ? 40 : 50
      }
    },
    submitButton: {
      width: '100%',
      height: '100%',
      borderRadius: _Services_App_service__WEBPACK_IMPORTED_MODULE_6__["Theme"].radius2
    },
    item: {
      padding: 5
    },
    collapsed: {
      height: 50,
      overflow: 'hidden',
      padding: 0 // animation:'SizeUp .5s '

    }
  });
  const styles = useStyles();

  const fieldChangeHandler = (field, value) => {
    setForm(prev => {
      return { ...prev,
        [field]: value
      };
    });
  };

  const search = event => {
    event.preventDefault();
    hideFields();
    history.push({
      pathname: _Services_App_service__WEBPACK_IMPORTED_MODULE_6__["Routes"].Jobs,
      state: {
        keyword: Form.keyword,
        location: Form.location
      }
    });
  };

  return (
    /*#__PURE__*/
    // <div >
    react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("form", {
      className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(styles.form, {
        [styles.collapsed]: collapsed
      }),
      onSubmit: search,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
      container: true,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
      item: true,
      xs: 12,
      sm: 10,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
      container: true,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
      item: true,
      className: styles.item,
      xs: 12,
      sm: 6,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
      className: styles.inputContainer,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 29
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
      color: _Services_App_service__WEBPACK_IMPORTED_MODULE_6__["Theme"].primary,
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faBriefcase"],
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 33
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("input", {
      // autoFocus={!isMobile}
      onFocus: showFields,
      placeholder: isMobile && collapsed ? 'Click to search job' : 'Job title or skill',
      value: Form.keyword,
      onChange: event => fieldChangeHandler('keyword', event === null || event === void 0 ? void 0 : event.target.value),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 33
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
      item: true,
      className: styles.item,
      xs: 12,
      sm: 6,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
      className: styles.inputContainer,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 29
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
      color: _Services_App_service__WEBPACK_IMPORTED_MODULE_6__["Theme"].primary,
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faMapMarkerAlt"],
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 33
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("input", {
      placeholder: "Select city",
      value: Form.location,
      onChange: event => fieldChangeHandler('location', event === null || event === void 0 ? void 0 : event.target.value),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 33
      }
    }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
      item: true,
      xs: 12,
      sm: 2,
      className: styles.item,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      className: styles.submitButton,
      variant: "contained",
      color: "primary",
      type: "submit",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faSearch"],
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 25
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
      variant: "button",
      style: {
        paddingLeft: 10,
        textTransform: 'capitalize'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 25
      }
    }, "Search"))))) // </div>

  );
};

/***/ }),

/***/ "./src/Components/SomethingWrong.component.tsx":
/*!*****************************************************!*\
  !*** ./src/Components/SomethingWrong.component.tsx ***!
  \*****************************************************/
/*! exports provided: SomethingWentWrong */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SomethingWentWrong", function() { return SomethingWentWrong; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/balj/Documents/development-work/react-projects/jobPortal/src/Components/SomethingWrong.component.tsx";




const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'calc(100vh - 200px)'
  },
  wrapper: {
    width: 600,
    maxWidth: '100%',
    padding: 30,
    '& p': {
      fontSize: 14,
      lineHeight: '24px'
    }
  },
  imageWrapper: {
    width: 100,
    height: 100,
    margin: '0 auto 20px',
    '& img': {
      width: '100%'
    }
  }
});
function SomethingWentWrong(props) {
  const [message, setMessage] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](props === null || props === void 0 ? void 0 : props.message);
  const styles = useStyles();
  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
    setMessage(props.message);
  }, [props.message]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('container', styles.container),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: styles.wrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: styles.imageWrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
    src: '/assets/images/somethingWrong.png',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    style: {
      fontSize: 18,
      fontWeight: 400,
      padding: '30px 0'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, message), (props === null || props === void 0 ? void 0 : props.button) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: () => props.history.replace('/'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }, "Retry")));
}

/***/ }),

/***/ "./src/Components/TextField.component/TextField.component.css":
/*!********************************************************************!*\
  !*** ./src/Components/TextField.component/TextField.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./TextField.component.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/TextField.component/TextField.component.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./TextField.component.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/TextField.component/TextField.component.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./TextField.component.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Components/TextField.component/TextField.component.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/Components/TextField.component/TextField.component.tsx":
/*!********************************************************************!*\
  !*** ./src/Components/TextField.component/TextField.component.tsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TextField_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TextField.component.css */ "./src/Components/TextField.component/TextField.component.css");
/* harmony import */ var _TextField_component_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_TextField_component_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
var _jsxFileName = "/home/balj/Documents/development-work/react-projects/jobPortal/src/Components/TextField.component/TextField.component.tsx";




const styles = {
  lightFont: {
    fontSize: 12,
    color: 'gray'
  }
};

class InputField extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    this.touchField = () => {
      if (!this.state.isTouched) {
        this.setState({
          isTouched: true
        });
      }
    };

    this.makeDirty = () => {
      if (!this.state.isDirty) {
        console.log('dirting');
        this.setState({
          isDirty: true
        });
      }
    };

    this.focusHandler = () => {
      this.touchField();
    };

    this.keyDownHandler = () => {
      this.makeDirty();
    };

    this.state = {
      error: props === null || props === void 0 ? void 0 : props.error,
      isTouched: false,
      isDirty: false
    };
  }

  static getDerivedStateFromProps(state, props) {
    return { ...state,
      error: props.error
    };
  }

  render() {
    var _this$props;

    const {
      errorMessage
    } = this.props;
    const isError = this.props.error && this.state.isDirty;
    let newProps = { ...this.props,
      error: isError
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      style: this.props.containerStyle,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], Object.assign({
      color: "secondary",
      style: {
        width: '100%'
      }
    }, newProps, {
      onFocus: () => this.focusHandler(),
      InputLabelProps: {
        classes: {
          focused: 'inputLabel',
          root: 'inputLabel'
        }
      },
      InputProps: {
        style: styles.lightFont,
        startAdornment: ((_this$props = this.props) === null || _this$props === void 0 ? void 0 : _this$props.icon) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["InputAdornment"], {
          position: "start",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 29
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
          style: styles.lightFont,
          icon: this.props.icon,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 33
          }
        })) : null
      },
      onKeyDown: event => {
        this.keyDownHandler();
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 17
      }
    })), this.props.error && this.state.isDirty ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
      className: "error",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("small", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 46
      }
    }, errorMessage)) : null);
  }

}

InputField.propTypes = void 0;
/* harmony default export */ __webpack_exports__["default"] = (InputField);

/***/ }),

/***/ "./src/Components/UserMenu.component.tsx":
/*!***********************************************!*\
  !*** ./src/Components/UserMenu.component.tsx ***!
  \***********************************************/
/*! exports provided: UserMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserMenu", function() { return UserMenu; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _Services_App_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/App.service */ "./src/Services/App.service.ts");
/* harmony import */ var _Context_User_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Context/User.context */ "./src/Context/User.context.tsx");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
var _jsxFileName = "/home/balj/Documents/development-work/react-projects/jobPortal/src/Components/UserMenu.component.tsx";








const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])({
  container: {
    maxWidth: 150
  },
  P_info_Container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    padding: '0px 8px 8px 8px'
  },
  imageWrap: {
    width: 40,
    height: 40,
    borderRadius: 40,
    overflow: 'hidden',
    marginRight: 8,
    '& img': {
      width: '100%',
      height: '100%'
    }
  },
  name: {
    "& p": {
      margin: 0,
      paddingRight: 7,
      textTransform: 'capitalize',
      fontWeight: 500
    }
  },
  listItem: {
    color: '#888',
    padding: '2px 10px'
  },
  listIcon: {
    minWidth: 30,
    '& svg': {
      textAlign: 'center',
      color: '#888',
      fontSize: 14
    }
  }
});
function UserMenu(props) {
  const {
    user,
    logout,
    loading
  } = react__WEBPACK_IMPORTED_MODULE_0__["useContext"](_Context_User_context__WEBPACK_IMPORTED_MODULE_3__["UserContext"]);
  const [isLoggedOut, setIsLoggedOut] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](null);
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["useHistory"])(); // const user: any = {
  //     full_name: 'dev trehan',
  // }

  const styles = useStyles();

  const navigateTo = route => {
    history.push(route);
    props.closeMenu();
  };

  let _logout = async () => {
    var promise = new Promise(function (resolve, reject) {
      window.setTimeout(function () {
        resolve(true);
      }, 10);
    });
    return promise;
  };

  const logoutUser = async () => {
    let response = await logout(); // let response = await _logout();

    console.log(response);

    if (response) {
      history.replace(_Services_App_service__WEBPACK_IMPORTED_MODULE_2__["Routes"].Home);
      props.closeMenu();
      setIsLoggedOut(null);
    } else {
      setIsLoggedOut(false);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: styles.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["List"], {
    dense: true,
    style: {
      padding: 0
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: styles.P_info_Container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: styles.name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 25
    }
  }, user.full_name))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    button: true,
    className: styles.listItem,
    onClick: () => navigateTo(_Services_App_service__WEBPACK_IMPORTED_MODULE_2__["Routes"].Profile),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemIcon"], {
    className: styles.listIcon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faEdit"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 25
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemText"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 25
    }
  }, "Edit Profile"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    button: true,
    className: styles.listItem,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemIcon"], {
    className: styles.listIcon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faQuestion"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 25
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemText"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 25
    }
  }, "Help"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
    button: true,
    className: styles.listItem,
    onClick: logoutUser,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 17
    }
  }, loading && isLoggedOut === null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemIcon"], {
    className: styles.listIcon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CircularProgress"], {
    style: {
      width: 15,
      height: 15
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 33
    }
  })) : isLoggedOut === false ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemIcon"], {
    className: styles.listIcon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 33
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faExclamationCircle"],
    style: {
      color: _Services_App_service__WEBPACK_IMPORTED_MODULE_2__["Theme"].error
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 37
    }
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemIcon"], {
    className: styles.listIcon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 35
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faSignOutAlt"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 37
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemText"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 25
    }
  }, "Log out")))));
}

/***/ }),

/***/ "./src/Context/App.context.tsx":
/*!*************************************!*\
  !*** ./src/Context/App.context.tsx ***!
  \*************************************/
/*! exports provided: AppContext, AppContextProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppContext", function() { return AppContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppContextProvider", function() { return AppContextProvider; });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/lab */ "./node_modules/@material-ui/lab/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Components_AlertBox_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/AlertBox.component */ "./src/Components/AlertBox.component.tsx");
var _jsxFileName = "/home/balj/Documents/development-work/react-projects/jobPortal/src/Context/App.context.tsx";




const AppContext = react__WEBPACK_IMPORTED_MODULE_2__["createContext"]({});
function AppContextProvider(props) {
  const [alertVisible, setAlertVisible] = react__WEBPACK_IMPORTED_MODULE_2__["useState"](false);
  const [alertType, setAlertType] = react__WEBPACK_IMPORTED_MODULE_2__["useState"]('');
  const [alertMessage, setAlertMessage] = react__WEBPACK_IMPORTED_MODULE_2__["useState"]('');
  const [alertActionButton, setAlertActionButton] = react__WEBPACK_IMPORTED_MODULE_2__["useState"](null);
  const [snackOpen, setSnackOpen] = react__WEBPACK_IMPORTED_MODULE_2__["useState"](false);
  const [errorMessages, setErrorMessages] = react__WEBPACK_IMPORTED_MODULE_2__["useState"]({
    errors: [],
    type: 'error'
  });

  const showAlert = (message, type, actionButton) => {
    setAlertMessage(message);
    setAlertActionButton(actionButton);
    setAlertVisible(true);
  };

  const hideAlert = () => {
    setAlertVisible(false);
    setAlertMessage('');
  };

  const closeSnakbar = () => {
    setSnackOpen(false);
  };

  const openSnackbar = (errors, type = 'error') => {
    setSnackOpen(true);
    setErrorMessages({
      errors: errors,
      type: type
    });
    setTimeout(() => {
      closeSnakbar();
    }, 5 * 1000);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](AppContext.Provider, {
    value: {
      showAlert: showAlert,
      hideAlert: hideAlert,
      openSnackbar: openSnackbar
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, props.children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_Components_AlertBox_component__WEBPACK_IMPORTED_MODULE_3__["AlertBox"], {
    show: alertVisible,
    type: alertType,
    message: alertMessage,
    actionButton: alertActionButton,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Snackbar"], {
    style: {
      position: 'fixed'
    },
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    open: snackOpen,
    autoHideDuration: 10000,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_material_ui_lab__WEBPACK_IMPORTED_MODULE_1__["Alert"], {
    onClose: closeSnakbar,
    severity: errorMessages.type,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_material_ui_lab__WEBPACK_IMPORTED_MODULE_1__["AlertTitle"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 21
    }
  }, errorMessages.type == 'success' ? 'Success' : 'Failed'), errorMessages === null || errorMessages === void 0 ? void 0 : errorMessages.errors.map((message, index) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("p", {
      key: index,
      style: {
        lineHeight: '16px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 33
      }
    }, message);
  }))));
}

/***/ }),

/***/ "./src/Context/FilterAttribs.context.tsx":
/*!***********************************************!*\
  !*** ./src/Context/FilterAttribs.context.tsx ***!
  \***********************************************/
/*! exports provided: FilterAttribsContext, FilterAttribsContextProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterAttribsContext", function() { return FilterAttribsContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterAttribsContextProvider", function() { return FilterAttribsContextProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Services_Api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Services/Api.service */ "./src/Services/Api.service.ts");
/* harmony import */ var _User_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./User.context */ "./src/Context/User.context.tsx");
var _jsxFileName = "/home/balj/Documents/development-work/react-projects/jobPortal/src/Context/FilterAttribs.context.tsx";



const FilterAttribsContext = react__WEBPACK_IMPORTED_MODULE_0__["createContext"]({});
function FilterAttribsContextProvider(props) {
  const [filterAttribs, setFilterAttribs] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]({});
  const [cities, setCities] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]([]);
  const [skills, setSkills] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]([]);
  const [loading, setLoading] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](true);
  const {
    token
  } = react__WEBPACK_IMPORTED_MODULE_0__["useContext"](_User_context__WEBPACK_IMPORTED_MODULE_2__["UserContext"]);

  const getFilterOptions = async () => {
    if (!Object.keys(filterAttribs).length) {
      console.log('filter options loading');
      let response = await Object(_Services_Api_service__WEBPACK_IMPORTED_MODULE_1__["GetFilterOptions"])(token === null || token === void 0 ? void 0 : token.access);

      if (response === null || response === void 0 ? void 0 : response.data) {
        setFilterAttribs(response.data);
        makeCityOption(response.data.location);
        makeSkillOption(response.data.skill);
        return response.data;
      } else {
        return null;
      }
    }
  };

  const makeCityOption = list => {
    // let userCity = null;
    let cities = list === null || list === void 0 ? void 0 : list.map(city => {
      return city.label.split(',')[0];
    });
    setCities(cities);
  };

  const makeSkillOption = list => {
    // let userCity = null;
    let skills = list === null || list === void 0 ? void 0 : list.map(city => {
      return city.label.replace('(', '--').split('--')[0];
    });
    setSkills(skills);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](FilterAttribsContext.Provider, {
    value: {
      filterOptions: filterAttribs,
      cities: cities,
      skills: skills,
      getFilterOptions: getFilterOptions
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, props.children);
}

/***/ }),

/***/ "./src/Context/JobList.context.tsx":
/*!*****************************************!*\
  !*** ./src/Context/JobList.context.tsx ***!
  \*****************************************/
/*! exports provided: JobListContext, JobListContextProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobListContext", function() { return JobListContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobListContextProvider", function() { return JobListContextProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Services_Api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Services/Api.service */ "./src/Services/Api.service.ts");
/* harmony import */ var _User_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./User.context */ "./src/Context/User.context.tsx");
var _jsxFileName = "/home/balj/Documents/development-work/react-projects/jobPortal/src/Context/JobList.context.tsx";



const JobListContext = react__WEBPACK_IMPORTED_MODULE_0__["createContext"]({});
function JobListContextProvider(props) {
  const [joblist, setJoblist] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]([// { "id": 1, "job_title_name": "Python Developer", "job_description_summary": "Job Description\r\n\r\nWe are looking for a Python Developer responsible for managing the interchange of data between the server and the users. Your primary focus will be the development of all server-sid", "salary_offered": "4-8 Lakh INR per Year", "time_difference": "18 days ago", "type": "FULLTIME", "experience_required": "1-3 years", "company_name": "Test Company", "industry_list": ["Information & Technology", "Software"], "city_list": ["Ghaziabad", "New Delhi", "Hyderabad"], "education_list": ["Bachelor of Technology"], "slug": "python-developer-test-company-1-3-years7ghdj" },
    // { "id": 2, "job_title_name": "Software Developer", "job_description_summary": "Job Description\r\n\r\nWe are looking for a Python Developer responsible for managing the interchange of data between the server and the users. Your primary focus will be the development of all server-sid", "salary_offered": "2-3 Lakh INR per Year", "time_difference": "22 days ago", "type": "FULLTIME", "experience_required": "4-8 years", "company_name": "Test Company", "industry_list": ["Information & Technology", "Software"], "city_list": ["New Delhi", "Hyderabad"], "education_list": ["Bachelor of Technology", "M.Tech"], "slug": "software-developer-test-company-4-8-yearsri7l6" },
    // { "id": 3, "job_title_name": "Tax Manager", "job_description_summary": "Delivering a full range of tax services in compliance with laws and regulations within timeframe\r\nBuilding relationships and interacting with clients to provide excellent planning, consulting and expe", "salary_offered": "3-5 Lakh INR per Year", "time_difference": "30+ days ago", "type": "FULLTIME", "experience_required": "2-3 years", "company_name": "Test Company", "industry_list": ["Accounting", "Banking"], "city_list": ["Ghaziabad", "Pune"], "education_list": ["Bachelor of Commerce"], "slug": "tax-manager-test-company-2-3-yearsc70ha" },
    // { "id": 4, "job_title_name": "Hardware Engineer", "job_description_summary": "Designing and developing hardware components including circuit boards, processors, and memory cards.\r\nTesting hardware components individually and in tandem with external computer systems.\r\nAnalyzing ", "salary_offered": "4-6 Lakh INR per Year", "time_difference": "14 days ago", "type": "FULLTIME", "experience_required": "1-5 years", "company_name": "Test Company", "industry_list": ["Information & Technology"], "city_list": ["Bangalore", "Hyderabad"], "education_list": ["Bachelor of Technology", "M.Tech"], "slug": "hardware-engineer-test-company-1-5-yearspz1c7" },
    // { "id": 4, "job_title_name": "Hardware Engineer", "job_description_summary": "Designing and developing hardware components including circuit boards, processors, and memory cards.\r\nTesting hardware components individually and in tandem with external computer systems.\r\nAnalyzing ", "salary_offered": "4-6 Lakh INR per Year", "time_difference": "14 days ago", "type": "FULLTIME", "experience_required": "1-5 years", "company_name": "Test Company", "industry_list": ["Information & Technology"], "city_list": ["Bangalore", "Hyderabad"], "education_list": ["Bachelor of Technology", "M.Tech"], "slug": "hardware-engineer-test-company-1-5-yearspz1c7" },
    // { "id": 4, "job_title_name": "Hardware Engineer", "job_description_summary": "Designing and developing hardware components including circuit boards, processors, and memory cards.\r\nTesting hardware components individually and in tandem with external computer systems.\r\nAnalyzing ", "salary_offered": "4-6 Lakh INR per Year", "time_difference": "14 days ago", "type": "FULLTIME", "experience_required": "1-5 years", "company_name": "Test Company", "industry_list": ["Information & Technology"], "city_list": ["Bangalore", "Hyderabad"], "education_list": ["Bachelor of Technology", "M.Tech"], "slug": "hardware-engineer-test-company-1-5-yearspz1c7" },
    // { "id": 4, "job_title_name": "Hardware Engineer", "job_description_summary": "Designing and developing hardware components including circuit boards, processors, and memory cards.\r\nTesting hardware components individually and in tandem with external computer systems.\r\nAnalyzing ", "salary_offered": "4-6 Lakh INR per Year", "time_difference": "14 days ago", "type": "FULLTIME", "experience_required": "1-5 years", "company_name": "Test Company", "industry_list": ["Information & Technology"], "city_list": ["Bangalore", "Hyderabad"], "education_list": ["Bachelor of Technology", "M.Tech"], "slug": "hardware-engineer-test-company-1-5-yearspz1c7" },
    // { "id": 4, "job_title_name": "Hardware Engineer", "job_description_summary": "Designing and developing hardware components including circuit boards, processors, and memory cards.\r\nTesting hardware components individually and in tandem with external computer systems.\r\nAnalyzing ", "salary_offered": "4-6 Lakh INR per Year", "time_difference": "14 days ago", "type": "FULLTIME", "experience_required": "1-5 years", "company_name": "Test Company", "industry_list": ["Information & Technology"], "city_list": ["Bangalore", "Hyderabad"], "education_list": ["Bachelor of Technology", "M.Tech"], "slug": "hardware-engineer-test-company-1-5-yearspz1c7" },
  ]);
  const [message, setMessage] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]('');
  const [loading, setLoding] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
  const {
    token,
    user
  } = react__WEBPACK_IMPORTED_MODULE_0__["useContext"](_User_context__WEBPACK_IMPORTED_MODULE_2__["UserContext"]);

  const JobResponseHandler = response => {
    console.log('jobs', response);

    if (response) {
      if (response.is_authenticated) {
        if ((response === null || response === void 0 ? void 0 : response.status) == false) {
          setMessage(response.message);
        }

        if (response === null || response === void 0 ? void 0 : response.status) {
          var _response$data;

          if (response === null || response === void 0 ? void 0 : (_response$data = response.data) === null || _response$data === void 0 ? void 0 : _response$data.length) {
            setMessage('');
            setJoblist(response === null || response === void 0 ? void 0 : response.data);
          } else {
            setJoblist([]);
            setMessage('Sorry? \n No Job found');
          }
        }
      } else {
        setJoblist(null);
        setMessage('You are not authorized to access');
      }
    } else {
      setJoblist(null);
      setMessage('Sorry! \n Something went wrong');
    }
  };

  const getJobList = async filters => {
    setLoding(true);
    let response = await Object(_Services_Api_service__WEBPACK_IMPORTED_MODULE_1__["GetJobList"])(token === null || token === void 0 ? void 0 : token.access, filters, user === null || user === void 0 ? void 0 : user.id);
    setLoding(false);
    JobResponseHandler(response);
    return showFirstJob(response);
  };

  const FindJobIndex = (jobs, slug) => {
    for (let i = 0; i < jobs.length; i++) {
      if (slug === jobs[i].slug) {
        return i;
      } else if (i === jobs.length - 1) {
        return -1;
      }
    }

    return -1;
  };

  const updateJob = (slug, updateObject) => {
    console.log('id', slug, updateObject);
    setJoblist(prev => {
      // let list = [...prev];
      let index = FindJobIndex(prev, slug);
      console.log('index', index);

      if (index >= 0) {
        prev[index] = { ...prev[index],
          ...updateObject
        };
      }

      let newList = [...prev];
      console.log(newList[index]);
      return newList;
    });
  };

  const showFirstJob = response => {
    var _response$data2;

    let windowWidth = window.innerWidth;

    if ((response === null || response === void 0 ? void 0 : (_response$data2 = response.data) === null || _response$data2 === void 0 ? void 0 : _response$data2.length) && windowWidth > 960) {
      var _response$data$;

      return {
        toShow: true,
        slug: response === null || response === void 0 ? void 0 : (_response$data$ = response.data[0]) === null || _response$data$ === void 0 ? void 0 : _response$data$.slug,
        isDesktop: true
      };
    } else {
      return {
        toShow: false
      };
    }
  };

  const getSearchedJobList = async (keyword, location) => {
    console.log('search', keyword, location);
    setLoding(true);
    let response = await Object(_Services_Api_service__WEBPACK_IMPORTED_MODULE_1__["GetSearchedJobList"])(token === null || token === void 0 ? void 0 : token.access, keyword, location, user === null || user === void 0 ? void 0 : user.id);
    setLoding(false);
    JobResponseHandler(response);
    return showFirstJob(response);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](JobListContext.Provider, {
    value: {
      joblist: joblist,
      loading: loading,
      message: message,
      getJobList: getJobList,
      updateJob: updateJob,
      getSearchedJobList: getSearchedJobList
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 9
    }
  }, props.children);
}

/***/ }),

/***/ "./src/Context/User.context.tsx":
/*!**************************************!*\
  !*** ./src/Context/User.context.tsx ***!
  \**************************************/
/*! exports provided: UserContext, UserContextProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserContext", function() { return UserContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserContextProvider", function() { return UserContextProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Services_Api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Services/Api.service */ "./src/Services/Api.service.ts");
/* harmony import */ var _Services_App_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/App.service */ "./src/Services/App.service.ts");
var _jsxFileName = "/home/balj/Documents/development-work/react-projects/jobPortal/src/Context/User.context.tsx";




const UserContext = react__WEBPACK_IMPORTED_MODULE_0__["createContext"]({});
function UserContextProvider(props) {
  const [user, setUser] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]({});
  const [Tokens, setTokens] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]({});
  const [loading, setLoading] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](true);

  const get_User = async () => {
    setLoading(true);
    let user = await Object(_Services_App_service__WEBPACK_IMPORTED_MODULE_2__["getUser"])();
    setUser(user);
    setLoading(false);
    return user;
  };

  const AsyncTokenRefresh = async () => {
    let user = await get_User();
    TokenHandler(user);
  };

  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
    AsyncTokenRefresh();
  }, []);

  const refreshToken = async (token = Tokens) => {
    let response = await fetch(_Services_Api_service__WEBPACK_IMPORTED_MODULE_1__["GetAccessTokenUrl"], {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        refresh: token === null || token === void 0 ? void 0 : token.refresh
      })
    }).then(responseJson => responseJson.json());

    if (response === null || response === void 0 ? void 0 : response.detail) {
      console.log(response);
    } else if (response === null || response === void 0 ? void 0 : response.access) {
      console.log('refreshed tokens', response);
      setTokens(response);
    }
  };

  const TokenHandler = (_user = user) => {
    let Token = Object(_Services_App_service__WEBPACK_IMPORTED_MODULE_2__["getToken"])();
    setTokens(Token);
    console.log('refreshing tokens');
    console.log('user id', _user.id);

    if (_user === null || _user === void 0 ? void 0 : _user.id) {
      refreshToken(Token);
    }

    let tokenTimer = setInterval(() => {
      var _Token;

      Token = ((_Token = Token) === null || _Token === void 0 ? void 0 : _Token.refresh) ? Token : Tokens;

      if (_user === null || _user === void 0 ? void 0 : _user.id) {
        refreshToken(Token);
      }
    }, 60 * 60 * 1000);
  };

  const updateUser = user => {
    Object(_Services_App_service__WEBPACK_IMPORTED_MODULE_2__["StoreUser"])(user);
    setUser(user);
  };

  const logout = async () => {
    setLoading(true);
    let response = await Object(_Services_Api_service__WEBPACK_IMPORTED_MODULE_1__["Logout"])(user === null || user === void 0 ? void 0 : user.id, Tokens === null || Tokens === void 0 ? void 0 : Tokens.refresh);
    setLoading(false); // console.log('logout response', response)

    if ((response === null || response === void 0 ? void 0 : response.status) == false) {
      return false;
    } else if (response === null || response === void 0 ? void 0 : response.status) {
      Object(_Services_App_service__WEBPACK_IMPORTED_MODULE_2__["clearStore"])(_Services_App_service__WEBPACK_IMPORTED_MODULE_2__["Storages"].Token);
      Object(_Services_App_service__WEBPACK_IMPORTED_MODULE_2__["clearStore"])(_Services_App_service__WEBPACK_IMPORTED_MODULE_2__["Storages"].User);
      updateUser({});
      return true;
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](UserContext.Provider, {
    value: {
      user: user,
      logout: logout,
      setUser: updateUser,
      token: Tokens,
      loading: loading,
      setToken: tokens => setTokens(tokens)
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 9
    }
  }, !loading && props.children);
}

/***/ }),

/***/ "./src/Pages/About.page/About.page.css":
/*!*********************************************!*\
  !*** ./src/Pages/About.page/About.page.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./About.page.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Pages/About.page/About.page.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./About.page.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Pages/About.page/About.page.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./About.page.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Pages/About.page/About.page.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/Pages/About.page/About.page.tsx":
/*!*********************************************!*\
  !*** ./src/Pages/About.page/About.page.tsx ***!
  \*********************************************/
/*! exports provided: About */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "About", function() { return About; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_Footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Components/Footer.component */ "./src/Components/Footer.component.tsx");
/* harmony import */ var _Components_Navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Components/Navbar.component */ "./src/Components/Navbar.component.tsx");
/* harmony import */ var _Components_Counter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Components/Counter.component */ "./src/Components/Counter.component.tsx");
/* harmony import */ var _About_page_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./About.page.css */ "./src/Pages/About.page/About.page.css");
/* harmony import */ var _About_page_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_About_page_css__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/home/balj/Documents/development-work/react-projects/jobPortal/src/Pages/About.page/About.page.tsx";





function About(props) {
  const Brands = [{
    name: '',
    link: ''
  }, {
    name: '',
    link: ''
  }, {
    name: '',
    link: ''
  }, {
    name: '',
    link: ''
  }, {
    name: '',
    link: ''
  }, {
    name: '',
    link: ''
  }, {
    name: '',
    link: ''
  }, {
    name: '',
    link: ''
  }, {
    name: '',
    link: ''
  }, {
    name: '',
    link: ''
  }, {
    name: '',
    link: ''
  }, {
    name: '',
    link: ''
  }];

  const renderBrands = () => {
    return Brands.map((brand, index) => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "col-lg-3 col-md-4 col-sm-6 col-12 c-brand",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 68
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
        src: `/assets/images/com-brand/${index + 1}.webp`,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 80
        }
      })));
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Components_Navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavBar"], {
    home: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "about-banner",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "clearfix",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "module-section about-module",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "col-md-12 col-sm-12 col-xs-12 about-top",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  }, "About New Jobs- ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 37
    }
  }, "HUB")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }, "Indeed is the #1 job site in the world with over 25 crore unique visitors every month. Indeed strives to put job seekers first, giving them free access to search for jobs, post resumes, and research companies. Every day, we connect millions of people to new opportunities."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "clearfix",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "row abt-inner",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "col-lg-3 col-md-6 col-sm-6 col-12 about-sec",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Components_Counter_component__WEBPACK_IMPORTED_MODULE_3__["Counter"], {
    end: 250,
    id: 1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 21
    }
  }), "+ ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 51
    }
  }, "Million")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    className: "abtp",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  }, "unique monthly visitors2")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "col-lg-3 col-md-6 col-sm-6 col-12 about-sec",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Components_Counter_component__WEBPACK_IMPORTED_MODULE_3__["Counter"], {
    end: 15,
    id: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 21
    }
  }), "+ ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 50
    }
  }, "Million")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    className: "abtp",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 17
    }
  }, "resumes")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "col-lg-3 col-md-6 col-sm-6 col-12 about-sec",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Components_Counter_component__WEBPACK_IMPORTED_MODULE_3__["Counter"], {
    end: 15,
    id: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 21
    }
  }), "+ ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 50
    }
  }, "Million")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    className: "abtp",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 17
    }
  }, "total ratings and reviews")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "col-lg-3 col-md-6 col-sm-6 col-12 about-sec",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Components_Counter_component__WEBPACK_IMPORTED_MODULE_3__["Counter"], {
    end: 10,
    id: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 21
    }
  }), "+ ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 50
    }
  }, "Million")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    className: "abtp",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 17
    }
  }, "jobs added per second globally"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "clearfix",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "module-sec services-sec s-section service-bg-sec",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 11
    }
  }, "A platform where talent finds spotlight."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "col-lg-6 col-md-6 col-sm-6 col-12 s-ser-sec",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("figure", {
    className: "s-ser-img",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
    src: "/assets/images/icons/trust.svg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 47
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "s-ser-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 19
    }
  }, "Credibility"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 19
    }
  }, "We verify Freelancers, publish their feedback scores and All-Time Transaction Data to help you identify time-tested professionals across."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "col-lg-6 col-md-6 col-sm-6 col-12 s-ser-sec",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("figure", {
    className: "s-ser-img",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
    src: "/assets/images/icons/clock.svg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 47
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "s-ser-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 19
    }
  }, "Flexibility"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 19
    }
  }, "We verify Freelancers, publish their feedback scores and All-Time Transaction Data to help you identify time-tested professionals across."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "col-lg-6 col-md-6 col-sm-6 col-12 s-ser-sec",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("figure", {
    className: "s-ser-img",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
    src: "/assets/images/icons/shield.svg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 47
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "s-ser-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 19
    }
  }, "Security"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 19
    }
  }, "We provide multiple Payment terms and flexible Agreements to enable you to work the way you want."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "col-lg-6 col-md-6 col-sm-6 col-12 s-ser-sec",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("figure", {
    className: "s-ser-img",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
    src: "/assets/images/icons/payment.svg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 47
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "s-ser-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 19
    }
  }, "Value"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 19
    }
  }, "We provide multiple Payment terms and flexible Agreements to enable you to work the way you want."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "col-lg-6 col-md-6 col-sm-6 col-12 s-ser-sec",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("figure", {
    className: "s-ser-img",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
    src: "/assets/images/icons/support.svg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 47
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "s-ser-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 19
    }
  }, "Support"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 19
    }
  }, "Our dedicated support team works 24/7 to resolve all of your queries over the phone or email, no matter where you are located."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "col-lg-6 col-md-6 col-sm-6 col-12 s-ser-sec",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("figure", {
    className: "s-ser-img",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
    src: "/assets/images/icons/progress.svg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 47
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "s-ser-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 19
    }
  }, "Progress"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 19
    }
  }, "Our dedicated support team works 24/7 to resolve all of your queries over the phone or email, no matter where you are located.")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "clearfix",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "module-sec com-brand",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "col-md-12 com-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 17
    }
  }, "30,000+ Paying Customers"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 17
    }
  }, "The world\u2019s most forward-thinking companies are growing their business with ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("b", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 96
    }
  }, "New jobs-HUB")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 13
    }
  }, renderBrands())))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Components_Footer_component__WEBPACK_IMPORTED_MODULE_1__["Footer"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 7
    }
  }));
}

/***/ }),

/***/ "./src/Pages/Contact.page/Contact.page.css":
/*!*************************************************!*\
  !*** ./src/Pages/Contact.page/Contact.page.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Contact.page.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Pages/Contact.page/Contact.page.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Contact.page.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Pages/Contact.page/Contact.page.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Contact.page.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Pages/Contact.page/Contact.page.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/Pages/Contact.page/Contact.page.tsx":
/*!*************************************************!*\
  !*** ./src/Pages/Contact.page/Contact.page.tsx ***!
  \*************************************************/
/*! exports provided: Contact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contact", function() { return Contact; });
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Components_Footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Components/Footer.component */ "./src/Components/Footer.component.tsx");
/* harmony import */ var _Components_Loader_component_Loader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Components/Loader.component/Loader.component */ "./src/Components/Loader.component/Loader.component.tsx");
/* harmony import */ var _Components_Navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Components/Navbar.component */ "./src/Components/Navbar.component.tsx");
/* harmony import */ var _Services_Api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Services/Api.service */ "./src/Services/Api.service.ts");
/* harmony import */ var _Contact_page_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Contact.page.css */ "./src/Pages/Contact.page/Contact.page.css");
/* harmony import */ var _Contact_page_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_Contact_page_css__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "/home/balj/Documents/development-work/react-projects/jobPortal/src/Pages/Contact.page/Contact.page.tsx";










function Contact(props) {
  const initialData = {
    name: '',
    subject: '',
    email: '',
    phone: '',
    query: ''
  };
  const [Form, setForm] = react__WEBPACK_IMPORTED_MODULE_4__["useState"](initialData);
  const [loading, setLoading] = react__WEBPACK_IMPORTED_MODULE_4__["useState"](false);
  let inputRefs = [];

  const fieldChangeHandler = (field, value) => {
    setForm(prev => {
      return { ...prev,
        [field]: value
      };
    });
  };

  const SendQuery = async event => {
    event.preventDefault();
    let isAnyError = !Form.name || !Form.email || !Form.subject || !Form.phone || !Form.query; // if (1) {

    if (!isAnyError) {
      setLoading(true);
      console.log('login request', Form);
      let response = await Object(_Services_Api_service__WEBPACK_IMPORTED_MODULE_8__["Login"])(Form);
      setLoading(false);
      console.log('login response', response);

      if ((response === null || response === void 0 ? void 0 : response.status) == false) {
        if (props.onMessage) {
          props.onMessage(response === null || response === void 0 ? void 0 : response.message, 'error');
        }
      }

      if (response === null || response === void 0 ? void 0 : response.status) {
        if (props.onMessage) {
          props.onMessage(response === null || response === void 0 ? void 0 : response.message, 'error');
        }
      } else {
        if (props.onMessage) {
          props.onMessage(['Sorry! \n Something went wrong'], 'error');
        }
      }
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_Components_Navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavBar"], {
    home: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
    className: "contact-banner",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
    className: "col-md-12 col-sm-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 17
    }
  }, "CONTACT US"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
    className: "breadcrumb",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("a", {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 25
    }
  }, "Home"), " /"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 21
    }
  }, "Contact"))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
    className: "clearfix",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
    className: "contact-section",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
    className: "col-md-12 col-sm-12 contact-inner",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
    className: "col-lg-4 col-md-6 col-sm-12 col-12 contact-info",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 19
    }
  }, "Contact Information"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("ul", {
    className: "add-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faMapMarkerAlt"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 25
    }
  }), " B-48 Sector 63(B) Noida ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 91
    }
  }), " (UP) INDIA "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faEnvelope"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 25
    }
  }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("a", {
    href: "mailto:info@Newjobhub123.com",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 63
    }
  }, "info@Newjobhub123.com")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPhoneAlt"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 25
    }
  }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("a", {
    href: "tel:9319311003",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 63
    }
  }, "+91-9319311003"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
    className: "clearfix",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 19
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("ul", {
    className: "social-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("a", {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faFacebookF"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 37
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("a", {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    className: "fa-instagram",
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faInstagram"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 37
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("a", {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faLinkedinIn"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 37
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("a", {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faTwitter"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 37
    }
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
    className: "col-lg-8 col-md-6 col-sm-12 col-12 contact-form",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 19
    }
  }, "We want to hear from you!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("form", {
    onSubmit: SendQuery,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
    className: "row mx-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
    className: "col-md-6 col-sm-6 col-12 form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 23
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("input", {
    type: "text",
    required: true,
    name: "name",
    value: Form.name,
    onChange: event => fieldChangeHandler('name', event === null || event === void 0 ? void 0 : event.target.value),
    placeholder: "Enter Your Name *",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 25
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faUser"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 31
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
    className: "col-md-6 col-sm-6 col-12 form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 23
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("input", {
    type: "text",
    required: true,
    name: "subject",
    value: Form.subject,
    onChange: event => fieldChangeHandler('subject', event === null || event === void 0 ? void 0 : event.target.value),
    placeholder: "Enter Your Subject *",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 25
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faEdit"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 31
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
    className: "col-md-6 col-sm-6 col-12 form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 23
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("input", {
    type: "email",
    required: true,
    name: "email",
    value: Form.email,
    onChange: event => fieldChangeHandler('email', event === null || event === void 0 ? void 0 : event.target.value),
    placeholder: "Enter Your E-Mail Address *",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 25
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faEnvelope"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 31
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
    className: "col-md-6 col-sm-6 col-12 form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 23
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("input", {
    type: "number",
    required: true,
    name: "phone-number",
    value: Form.phone,
    onChange: event => fieldChangeHandler('phone', event === null || event === void 0 ? void 0 : event.target.value),
    placeholder: "Enter Your Phone Number *",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 25
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPhone"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 31
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
    className: "col-md-12 col-sm-12 col-12 form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 23
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("textarea", {
    name: "msg",
    value: Form.query,
    onChange: event => fieldChangeHandler('query', event === null || event === void 0 ? void 0 : event.target.value),
    required: true,
    placeholder: "Write Your Query Here...",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 25
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
    style: {
      textAlign: 'left',
      margin: '10px 5px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 23
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    variant: "contained",
    size: "small",
    type: "submit",
    color: "primary",
    value: "submit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 25
    }
  }, "SUBMIT"))), loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_Components_Loader_component_Loader_component__WEBPACK_IMPORTED_MODULE_6__["Loader"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 25
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
    className: "clearfix",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
    className: "col-md-12 col-sm-12 col-12 contact-map",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("iframe", {
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.4323099306525!2d77.37498531460365!3d28.616802691544546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfab660337499%3A0xa23a31cd784f2da0!2sBALJ%20Technology%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1605850181179!5m2!1sen!2sin",
    width: "100%",
    height: "300",
    style: {
      border: 'none'
    },
    "aria-hidden": "false",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 19
    }
  }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_Components_Footer_component__WEBPACK_IMPORTED_MODULE_5__["Footer"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 7
    }
  }));
}

/***/ }),

/***/ "./src/Pages/EmailVerification.page.tsx":
/*!**********************************************!*\
  !*** ./src/Pages/EmailVerification.page.tsx ***!
  \**********************************************/
/*! exports provided: EmailVerification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailVerification", function() { return EmailVerification; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_TextField_component_TextField_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/TextField.component/TextField.component */ "./src/Components/TextField.component/TextField.component.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _Services_App_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/App.service */ "./src/Services/App.service.ts");
/* harmony import */ var _Context_User_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Context/User.context */ "./src/Context/User.context.tsx");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Components_FormHead_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Components/FormHead.component */ "./src/Components/FormHead.component.tsx");
var _jsxFileName = "/home/balj/Documents/development-work/react-projects/jobPortal/src/Pages/EmailVerification.page.tsx";









const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])({
  checkBox: {
    paddingRight: 5
  },
  lightFont: {
    fontSize: 14,
    color: 'gray'
  }
});
function EmailVerification(props) {
  const [Form, setForm] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]({
    email: ''
  });
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["useHistory"])();
  const {
    updateUser,
    setToken,
    token
  } = react__WEBPACK_IMPORTED_MODULE_0__["useContext"](_Context_User_context__WEBPACK_IMPORTED_MODULE_4__["UserContext"]);
  let inputRefs = [];
  const styles = useStyles();

  const fieldChangeHandler = (field, value) => {
    setForm(prev => {
      return { ...prev,
        [field]: value
      };
    });
  };

  const verifyMail = async event => {// event.preventDefault();
    // let isAnyError = !Form.email;
    // if (!isAnyError) {
    //   console.log('login request', Form)
    //   let response = await MailVerify(Form);
    //   console.log('login response', response)
    //   if (response?.status == false) {
    //     if (props.onMessage) {
    //       props.onMessage(response?.message, 'error')
    //     }
    //   } if (response?.status) {
    //     StoreToken(response.additional_data);
    //     setToken(response.additional_data);
    //     setUser({
    //       id: response.data?.id
    //     });
    //     updateUser({
    //       id: response.data?.id
    //     })
    //     props.history.replace(Routes.Home);
    //   } else {
    //     if (props.onMessage) {
    //       props.onMessage(['Sorry! \n Something went wrong'], 'error')
    //     }
    //   }
    // } else {
    //   ValidateFields([!Form.email], inputRefs);
    // }
  };

  const navigateTo = () => {
    props.onSuccess(Form.email);
    history.push({
      pathname: _Services_App_service__WEBPACK_IMPORTED_MODULE_3__["Routes"].Verification,
      hash: _Services_App_service__WEBPACK_IMPORTED_MODULE_3__["Routes"].verificationHashes.otp
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("form", {
    className: 'form',
    onSubmit: event => verifyMail(event),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Components_FormHead_component__WEBPACK_IMPORTED_MODULE_8__["FormHead"], {
    title: 'Verify your E-mail',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    className: 'inputFieldContainer ',
    container: true,
    spacing: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Components_TextField_component_TextField_component__WEBPACK_IMPORTED_MODULE_1__["default"], {
    ref: ref => {
      inputRefs[0] = ref;
    },
    label: "Email",
    error: Form.email === '',
    isrequired: true,
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faEnvelope"],
    type: "email",
    size: 'small',
    variant: 'outlined',
    errorMessage: 'Email is required',
    value: Form.email,
    onChange: event => fieldChangeHandler('email', event === null || event === void 0 ? void 0 : event.target.value),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 13
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "contained",
    style: {
      width: '100%'
    },
    disabled: !Form.email,
    color: "primary",
    type: "submit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 9
    }
  }, "Verify")));
}

/***/ }),

/***/ "./src/Pages/Home.page/Home.css.tsx":
/*!******************************************!*\
  !*** ./src/Pages/Home.page/Home.css.tsx ***!
  \******************************************/
/*! exports provided: HeaderStyles, ContentCardStyles, BrowseTabStyles, StatStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderStyles", function() { return HeaderStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentCardStyles", function() { return ContentCardStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowseTabStyles", function() { return BrowseTabStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatStyles", function() { return StatStyles; });
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _Services_App_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Services/App.service */ "./src/Services/App.service.ts");


const HeaderStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])({
  HeadWrapper: {
    backgroundImage: `url('${""}/assets/bg-images/bannerHome.webp')`,
    padding: '0 5%',
    textAlign: 'left',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  },
  banner1: {
    position: 'absolute'
  },
  banner2: {
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url('${""}/assets/bg-images/bannerHome2.png')`,
    animation: 'UpDown infinite 3.5s'
  },
  headLeftContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  HeadContainer: {
    margin: '6% 0',
    '& h3:last-child': {
      display: 'inline-block',
      overflow: 'hidden',
      borderRight: `3px solid #fff`,
      whiteSpace: 'nowrap',
      margin: '0 auto',
      paddingBottom: 10,
      letterSpacing: '1px',
      animation: 'Typing 8s steps(40, end), BlinkCaret .75s step-end infinite'
    }
  },
  imageWrap: {
    position: 'relative',
    maxWidth: 100,
    backgroundSize: 'cover'
  },
  userTypeImage: {
    width: '100%'
  },
  filledImageAddon: {
    position: 'absolute'
  },
  userTypeWrap: {
    backgroundColor: '#fff',
    borderRadius: _Services_App_service__WEBPACK_IMPORTED_MODULE_1__["Theme"].radius3,
    height: 'auto',
    margin: '5% 0',
    padding: '10px 20px',
    boxShadow: '6px 6px 15px 0px #aaa5',
    '& p': {
      fontSize: 14
    }
  },
  userTypeItem: {
    cursor: 'pointer',
    width: '100%',
    '& h6': {
      transition: '1s'
    },
    '& p': {
      transition: '1s'
    },
    '&:hover img': {
      animation: 'Rotate infinite 4s linear'
    },
    '&:hover h6': {
      color: _Services_App_service__WEBPACK_IMPORTED_MODULE_1__["Theme"].primary
    },
    '&:hover p': {
      color: _Services_App_service__WEBPACK_IMPORTED_MODULE_1__["Theme"].secondary
    }
  },
  userTypeHead: {
    color: _Services_App_service__WEBPACK_IMPORTED_MODULE_1__["Theme"].secondary,
    fontWeight: 600
  },
  downButton: {
    margin: 'auto',
    width: 60,
    height: 60,
    borderRadius: '50%',
    color: '#fff',
    backgroundColor: _Services_App_service__WEBPACK_IMPORTED_MODULE_1__["Theme"].primary,
    marginBottom: '-35px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 24
  }
});
const ContentCardStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])({
  pageContent: {
    marginTop: 70,
    padding: '0 5%'
  },
  cardsWrapper: {
    padding: '30px 0 50px',
    alignItems: 'flex-start',
    textAlign: 'left'
  },
  cardContainer: {
    margin: '30px -20px',
    '& .left': {
      animation: 'SwipeLeft 2s'
    },
    '& .right': {
      animation: 'SwipeRight 2s'
    }
  },
  cardHead: {
    marginBottom: '6%',
    textTransform: 'uppercase',
    fontWeight: 400 // fontSize: 60

  },
  cardItemWrap2: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    '& h6': {
      color: _Services_App_service__WEBPACK_IMPORTED_MODULE_1__["Theme"].fontColor
    },
    '& img': {
      marginTop: 20,
      width: '100%',
      margin: '0 auto'
    },
    '& video': {
      marginTop: 20,
      width: '100%',
      margin: '0 auto'
    }
  },
  imageRight: {
    float: 'right'
  },
  imageLeft: {
    float: 'right'
  },
  contentRight: {
    float: 'right',
    width: '100%'
  },
  cardItemWrap: {
    marginTop: 10,
    maxWidth: '70%',
    backgroundColor: _Services_App_service__WEBPACK_IMPORTED_MODULE_1__["Theme"].tertiary,
    padding: 15,
    borderRadius: _Services_App_service__WEBPACK_IMPORTED_MODULE_1__["Theme"].radius2,
    color: '#fff',
    alignItems: 'center',
    verticalAlign: 'middle'
  },
  cardItemIcon: {
    width: 45,
    height: 45,
    textAlign: 'center',
    backgroundColor: '#fff',
    color: 'red',
    borderRadius: '50%',
    lineHeight: '45px'
  },
  cardItemText: {
    paddingLeft: 20,
    width: '85%',
    fontSize: 18,
    '&>p': {
      margin: '0px'
    }
  }
});
const BrowseTabStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])({
  mainContainer: {
    padding: '30px 5% 0'
  },
  tabsContainer: {
    overflowX: 'scroll',
    marginTop: 10
  },
  tab: {
    '&:focus': {
      outline: 'none'
    }
  },
  browseWrap: {
    display: 'flex',
    '& ul': {
      listStyle: 'none',
      padding: 0,
      margin: '20px 0 50px 0 ',
      '& li': {
        width: '25%',
        textAlign: 'left',
        float: 'left',
        paddingRight: 10,
        lineHeight: '40px',
        '& a': {
          color: _Services_App_service__WEBPACK_IMPORTED_MODULE_1__["Theme"].fontColor
        }
      }
    }
  }
});
const StatStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])({
  statsBackground: {
    backgroundImage: `url(${""}/assets/bg-images/stats-bg.jpg)`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  },
  statsContainer: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    backgroundColor: _Services_App_service__WEBPACK_IMPORTED_MODULE_1__["Theme"].primary + 'cc',
    padding: '80px 5%',
    justifyContent: 'center',
    color: '#fff',
    textAlign: 'left',
    '& p': {
      fontSize: 24,
      marginBottom: 5,
      fontWeight: 400
    }
  },
  deviceMockupWrap: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    '& img': {
      position: 'absolute',
      top: -60,
      left: -150,
      animation: 'UpDown infinite 3s'
    }
  }
});

/***/ }),

/***/ "./src/Pages/Home.page/Home.page.tsx":
/*!*******************************************!*\
  !*** ./src/Pages/Home.page/Home.page.tsx ***!
  \*******************************************/
/*! exports provided: Home */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Home", function() { return Home; });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Components_Search_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Components/Search.component */ "./src/Components/Search.component.tsx");
/* harmony import */ var _Components_Footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Components/Footer.component */ "./src/Components/Footer.component.tsx");
/* harmony import */ var _Components_Navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../Components/Navbar.component */ "./src/Components/Navbar.component.tsx");
/* harmony import */ var _Home_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Home.css */ "./src/Pages/Home.page/Home.css.tsx");
/* harmony import */ var _Components_Counter_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../Components/Counter.component */ "./src/Components/Counter.component.tsx");
var _jsxFileName = "/home/balj/Documents/development-work/react-projects/jobPortal/src/Pages/Home.page/Home.page.tsx";












let pageContentRef = react__WEBPACK_IMPORTED_MODULE_5__["createRef"]();

const pulseEffect = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("div", {
    className: "pulse",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("img", {
    src: "assets/bg-images/device-mockup.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }));
};

const Header = () => {
  const styles = Object(_Home_css__WEBPACK_IMPORTED_MODULE_10__["HeaderStyles"])();
  const isMobile = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["useMediaQuery"])('(max-width:600px)');

  const scrollTo = () => {
    pageContentRef.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    className: styles.HeadWrapper,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    className: styles.headLeftContainer,
    xs: 12,
    md: 8,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("div", {
    className: styles.HeadContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }, "Fastest growing job portal..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("div", {
    style: {
      display: 'inline-block'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h3",
    style: {
      fontWeight: 900
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }, "Direction towards growth!"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_Components_Search_component__WEBPACK_IMPORTED_MODULE_7__["Search"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    className: styles.userTypeWrap,
    spacing: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    className: styles.userTypeItem,
    item: true,
    sm: 6,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    spacing: 2,
    alignItems: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 3,
    sm: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("div", {
    className: styles.imageWrap,
    style: {
      backgroundImage: `url('${""}/assets/bg-images/usertype-1.png')`
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("img", {
    className: styles.userTypeImage,
    src: "assets/bg-images/usertype-2-addon.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 19
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 9,
    sm: 8,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h6",
    className: styles.userTypeHead,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 19
    }
  }, "I'm looking for a job"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    color: "primary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 19
    }
  }, "Post CV and apply job you love"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    className: styles.userTypeItem,
    item: true,
    sm: 6,
    xs: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    spacing: 2,
    alignItems: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Hidden"], {
    xsDown: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 3,
    sm: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("div", {
    className: styles.imageWrap,
    style: {
      backgroundImage: `url('${""}/assets/bg-images/usertype-2.png')`
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("img", {
    className: styles.userTypeImage,
    src: "assets/bg-images/usertype-1-addon.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 21
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 9,
    sm: 8,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("div", {
    style: {
      textAlign: isMobile ? 'right' : 'left'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h6",
    className: styles.userTypeHead,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 19
    }
  }, "I want to post job"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    color: "primary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 19
    }
  }, "Post job and hire professionals"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Hidden"], {
    smUp: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 3,
    sm: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("div", {
    className: styles.imageWrap,
    style: {
      backgroundImage: `url('${""}/assets/bg-images/usertype-2.png')`
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("img", {
    className: styles.userTypeImage,
    src: "assets/bg-images/usertype-1-addon.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 21
    }
  })))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Hidden"], {
    mdDown: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    className: styles.banner2,
    md: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 9
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(styles.downButton),
    onClick: () => scrollTo(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faArrowDown"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 9
    }
  })));
};

const AnimatedSection = props => {
  const [toAnimate, setToAnimate] = react__WEBPACK_IMPORTED_MODULE_5__["useState"](false);

  const scrollHandler = element => {
    let isInView = IsElementInViewPort(element);

    if (isInView && !toAnimate) {
      setToAnimate(true);
    }
  };

  const IsElementInViewPort = element => {
    var _window;

    var position = element === null || element === void 0 ? void 0 : element.getBoundingClientRect();

    if ((position === null || position === void 0 ? void 0 : position.top) < ((_window = window) === null || _window === void 0 ? void 0 : _window.innerHeight) && (position === null || position === void 0 ? void 0 : position.bottom) >= 0) {
      return true;
    } else {
      return false;
    }
  };

  react__WEBPACK_IMPORTED_MODULE_5__["useEffect"](() => {
    window.addEventListener('scroll', () => {
      console.log('scrolling');
      let element = document.getElementById(`animated-${props === null || props === void 0 ? void 0 : props.id}`);
      scrollHandler(element);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("div", {
    id: `animated-${props === null || props === void 0 ? void 0 : props.id}`,
    style: {
      width: '100%'
    },
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()({
      [props.animationClass]: toAnimate
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 5
    }
  }, props.children);
};

const ContentCards = () => {
  const cardLists = {
    list1: ['Sign Up for free quickly', 'Post your updated resume', 'Get connected with top employers'],
    list2: ['Sign Up for free within no time', 'Post your job for free', 'Reach out to the most suitable candidate'],
    list3: ['Login to your profile- As a Job Seeker/ As an Employer', 'Use relevant filters', 'Get personalized updates and save your time']
  };
  const styles = Object(_Home_css__WEBPACK_IMPORTED_MODULE_10__["ContentCardStyles"])();

  const renderCard = (text, index, alignment = 'right') => {
    // const { text } = item;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()({
        [styles.cardItemWrap]: true,
        [styles.contentRight]: alignment !== 'right'
      }),
      container: true,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
      className: styles.cardItemIcon,
      item: true,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faCheck"],
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 11
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
      item: true,
      className: styles.cardItemText,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("p", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 11
      }
    }, text)));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("div", {
    ref: ref => pageContentRef = ref,
    className: styles.pageContent,
    id: "pageContent",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](AnimatedSection, {
    id: 'Content-1',
    animationClass: 'shiftUp',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "body1",
    style: {
      fontSize: 20,
      fontWeight: 400,
      letterSpacing: .5
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 9
    }
  }, "New Job Hub is the leading career destination for tech experts at every stage of their careers")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("div", {
    className: styles.cardsWrapper,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    className: styles.cardContainer,
    spacing: 5,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    sm: 6,
    className: styles.cardItemWrap2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](AnimatedSection, {
    id: '1',
    animationClass: 'left',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: 'h3',
    className: styles.cardHead,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 15
    }
  }, "GET A PERFECT JOB FOR YOURSELF "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: 'h6',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 15
    }
  }, "Stay connected with us for the latest job opportunities matching your profile. Share with us what kind of job you are looking for and we will connect you with the relevant employer."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    sm: 6,
    className: styles.cardItemWrap2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](AnimatedSection, {
    id: '2',
    animationClass: 'right',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("img", {
    className: styles.imageRight,
    src: "assets/bg-images/card1image.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 15
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    className: styles.cardContainer,
    spacing: 5,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Hidden"], {
    xsDown: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    sm: 6,
    className: styles.cardItemWrap2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](AnimatedSection, {
    id: '3',
    animationClass: 'left',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("img", {
    src: "assets/bg-images/card2image.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 17
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    sm: 6,
    className: styles.cardItemWrap2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](AnimatedSection, {
    id: '4',
    animationClass: 'right',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: 'h3',
    className: styles.cardHead,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 15
    }
  }, "HIRE GREAT TALENT FASTER"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: 'h6',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 15
    }
  }, "Hire the best candidate easily. Post your job update and we will help you get a number of applications from finest & deserving jobseekers."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Hidden"], {
    smUp: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    sm: 6,
    className: styles.cardItemWrap2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](AnimatedSection, {
    id: '5',
    animationClass: 'left',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("img", {
    src: "assets/bg-images/card2image.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 17
    }
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    className: styles.cardContainer,
    spacing: 5,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    sm: 6,
    className: styles.cardItemWrap2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](AnimatedSection, {
    id: '6',
    animationClass: 'left',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: 'h3',
    className: styles.cardHead,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 15
    }
  }, "PERSONALIZE YOUR SEARCH RESULTS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: 'h6',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 15
    }
  }, "Use our data tools to access personalized search results suiting to your requirements only."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    sm: 6,
    className: styles.cardItemWrap2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](AnimatedSection, {
    id: '7',
    animationClass: 'right',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("img", {
    className: styles.imageRight,
    src: "assets/bg-images/card3image.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 15
    }
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("div", {
    style: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      margin: '20px 0',
      alignItems: 'center'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("div", {
    style: {
      position: 'absolute',
      width: '80%',
      height: 2,
      backgroundColor: '#ccc'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("div", {
    style: {
      position: 'absolute',
      padding: 10,
      backgroundColor: '#fff'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "contained",
    size: "large",
    color: "primary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 11
    }
  }, "Get Started For Free"))));
};

const BrowseSection = () => {
  const [tabIndex, setTabIndex] = react__WEBPACK_IMPORTED_MODULE_5__["useState"](0);
  const isMobile = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["useMediaQuery"])('(max-width:767px)');
  const BrowseJobsData = {
    title: ['Project Manager', 'Data Analyst', 'DBA', 'Scrum Master', 'Web Developer', 'Product Manager', 'Full Stack Developer', 'Android Developer', 'Program Manager', 'SQL Developer', 'Frontend Developer', 'Network Engineer', 'Systems Administrator', 'Solution Architect', '.Net Developer', 'PHP Developer', 'Python Developer', 'Mobile Developer', 'Linux Administrator'],
    skill: ['Project Manager', 'Data Analyst', 'DBA', 'Scrum Master', 'Web Developer', 'Product Manager', 'Full Stack Developer', 'Android Developer', 'Program Manager', 'SQL Developer', 'Frontend Developer', 'Network Engineer', 'Systems Administrator', 'Solution Architect', 'DevOps Engineer', 'Game Developer', 'Network Administrator', 'Salesforce Developer', 'Backend Developer'],
    cities: ['AGRA', 'GOA', 'AJMER ', 'HARIDWAR', 'AURANGABAD ', 'JAIPUR', 'BANGALORE ', 'KOTA', 'CHENNAI', 'LUCKNOW', 'FARIDABAD ', 'MUMBAI', 'GHAZIABAD ', 'NEW DELHI', 'GREATER NOIDA', 'NOIDA'],
    category: ['Project Manager', 'Android Developer', 'Program Manager', 'SQL Developer', 'Frontend Developer', 'Network Engineer', 'Systems Administrator', 'Solution Architect', 'DevOps Engineer', 'Game Developer', 'Network Administrator', 'Salesforce Developer', 'Backend Developer', 'Machine Learning Engineer', '.Net Developer', 'PHP Developer', 'Python Developer', 'Mobile Developer', 'Linux Administrator'],
    popular: ['Android Developer', 'Program Manager', 'SQL Developer', 'Frontend Developer', 'Network Engineer', 'Systems Administrator', 'Solution Architect', 'DevOps Engineer', 'Game Developer', 'Network Administrator', 'Salesforce Developer', 'Backend Developer', 'Machine Learning Engineer', '.Net Developer', 'PHP Developer', 'Python Developer', 'Mobile Developer', 'Linux Administrator']
  };
  const BrowseJobsCategories = Object.keys(BrowseJobsData);
  const styles = Object(_Home_css__WEBPACK_IMPORTED_MODULE_10__["BrowseTabStyles"])();

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  function TabPanel(props) {
    const {
      children,
      value,
      index,
      ...other
    } = props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("div", Object.assign({
      role: "tabpanel",
      hidden: value !== index,
      id: `simple-tabpanel-${index}`
    }, other, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 320,
        columnNumber: 7
      }
    }), value === index && children);
  }

  function TabProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`
    };
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(styles.mainContainer),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](AnimatedSection, {
    id: 'browse-1',
    animationClass: 'shiftUp',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h4",
    align: "left",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345,
      columnNumber: 9
    }
  }, "BROWSE JOBS")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](AnimatedSection, {
    id: 'browse-2',
    animationClass: 'shiftUp',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("div", {
    className: styles.tabsContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 349,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Tabs"], {
    textColor: 'inherit',
    indicatorColor: "primary",
    value: tabIndex,
    variant: "scrollable",
    scrollButtons: "auto",
    onChange: handleTabChange,
    "aria-label": "simple tabs example",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 350,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Tab"], Object.assign({
    className: styles.tab,
    label: "By Title"
  }, TabProps(0), {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Tab"], Object.assign({
    className: styles.tab,
    label: "By Skill"
  }, TabProps(1), {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 360,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Tab"], Object.assign({
    className: styles.tab,
    label: "By City"
  }, TabProps(4), {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 361,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Tab"], Object.assign({
    className: styles.tab,
    label: "By Category"
  }, TabProps(2), {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 362,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Tab"], Object.assign({
    className: styles.tab,
    label: "Popular Searches"
  }, TabProps(3), {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363,
      columnNumber: 13
    }
  }))), BrowseJobsCategories.map((category, index) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](TabPanel, {
      key: index,
      className: styles.browseWrap,
      value: tabIndex,
      index: index,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 369,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("ul", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 370,
        columnNumber: 19
      }
    }, BrowseJobsData[category].map((item, _index) => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("li", {
        key: _index,
        style: {
          width: isMobile ? '50%' : '25%'
        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 374,
          columnNumber: 27
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
        to: "/jobs",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 374,
          columnNumber: 88
        }
      }, item));
    })));
  }))));
};

const StatSection = () => {
  const [stats, setStats] = react__WEBPACK_IMPORTED_MODULE_5__["useState"]({});
  const styles = Object(_Home_css__WEBPACK_IMPORTED_MODULE_10__["StatStyles"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("div", {
    className: styles.statsBackground,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 399,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("div", {
    className: styles.statsContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 402,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    spacing: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 403,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Hidden"], {
    smDown: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 405,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    className: styles.deviceMockupWrap,
    item: true,
    md: 5,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 406,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 407,
      columnNumber: 15
    }
  }, pulseEffect()))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    style: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column'
    },
    item: true,
    xs: 12,
    md: 7,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 414,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: 'h4',
    style: {
      paddingBottom: 20,
      lineHeight: '35px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 415,
      columnNumber: 13
    }
  }, "Our Success & Award"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("div", {
    className: 'clearfix',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 416,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    spacing: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 417,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 6,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 418,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 418,
      columnNumber: 40
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_Components_Counter_component__WEBPACK_IMPORTED_MODULE_11__["Counter"], {
    end: 4250,
    id: "stat-1",
    duration: 100,
    steps: 5,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 418,
      columnNumber: 43
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 418,
      columnNumber: 106
    }
  }, "Job Posted")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 6,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 419,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 419,
      columnNumber: 40
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_Components_Counter_component__WEBPACK_IMPORTED_MODULE_11__["Counter"], {
    end: 1742,
    id: "stat-2",
    duration: 100,
    steps: 5,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 419,
      columnNumber: 43
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 419,
      columnNumber: 106
    }
  }, "Candidates")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 6,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 420,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 420,
      columnNumber: 40
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_Components_Counter_component__WEBPACK_IMPORTED_MODULE_11__["Counter"], {
    end: 450,
    id: "stat-3",
    duration: 100,
    steps: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 420,
      columnNumber: 43
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 420,
      columnNumber: 105
    }
  }, "Companies")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 6,
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 421,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 421,
      columnNumber: 40
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_Components_Counter_component__WEBPACK_IMPORTED_MODULE_11__["Counter"], {
    end: 300,
    id: "stat-4",
    duration: 100,
    steps: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 421,
      columnNumber: 43
    }
  }), "+"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 421,
      columnNumber: 106
    }
  }, "Happy Clients")))))));
};

function Home(props) {
  const getHomePageData = () => {};

  let theme = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["createMuiTheme"])(Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_3__["useTheme"])());
  theme = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["responsiveFontSizes"])(theme);
  let inputRefs = [];
  react__WEBPACK_IMPORTED_MODULE_5__["useEffect"](() => {}, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["MuiThemeProvider"], {
    theme: theme,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 449,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 451,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_Components_Navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavBar"], {
    home: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 452,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](Header, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 454,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](ContentCards, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 456,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](BrowseSection, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 458,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](StatSection, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 460,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_Components_Footer_component__WEBPACK_IMPORTED_MODULE_8__["Footer"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 462,
      columnNumber: 9
    }
  })));
}

/***/ }),

/***/ "./src/Pages/JobDetail.page.tsx":
/*!**************************************!*\
  !*** ./src/Pages/JobDetail.page.tsx ***!
  \**************************************/
/*! exports provided: JobDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobDetail", function() { return JobDetail; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _Services_Api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/Api.service */ "./src/Services/Api.service.ts");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _Components_CustomButton_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Components/CustomButton.component */ "./src/Components/CustomButton.component.tsx");
/* harmony import */ var _Services_App_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Services/App.service */ "./src/Services/App.service.ts");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Context_User_context__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Context/User.context */ "./src/Context/User.context.tsx");
/* harmony import */ var _Components_JobDetailSkeleton_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Components/JobDetailSkeleton.component */ "./src/Components/JobDetailSkeleton.component.tsx");
/* harmony import */ var _Components_SomethingWrong_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Components/SomethingWrong.component */ "./src/Components/SomethingWrong.component.tsx");
/* harmony import */ var _Components_NoResult_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Components/NoResult.component */ "./src/Components/NoResult.component.tsx");
/* harmony import */ var _Context_JobList_context__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Context/JobList.context */ "./src/Context/JobList.context.tsx");
/* harmony import */ var _Context_App_context__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Context/App.context */ "./src/Context/App.context.tsx");
/* harmony import */ var _Components_ConfirmBox_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../Components/ConfirmBox.component */ "./src/Components/ConfirmBox.component.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/home/balj/Documents/development-work/react-projects/jobPortal/src/Pages/JobDetail.page.tsx";

















const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
  container: {
    width: '100%',
    height: 'auto',
    textAlign: 'left',
    boxSizing: 'border-box',
    padding: '0 20px 40px'
  },
  container_L: {
    maxHeight: 'calc(100vh - 180px)',
    overflowY: 'scroll'
  },
  head: {
    padding: '15px',
    borderRadius: _Services_App_service__WEBPACK_IMPORTED_MODULE_7__["Theme"].radius2,
    border: `1px solid #ccc`,
    position: 'sticky',
    top: 0,
    backgroundColor: '#fff',
    zIndex: 99
  },
  title: {
    fontSize: 20
  },
  subTitle: {
    fontSize: 16,
    fontWeight: 100
  },
  logoWrap: {
    textAlign: 'left'
  },
  logo: {
    alignItems: 'left',
    borderRadius: _Services_App_service__WEBPACK_IMPORTED_MODULE_7__["Theme"].radius1 // border: '1px solid #ccc8'

  },
  logo_S: {
    width: 65,
    height: 65
  },
  logo_L: {
    width: 100,
    height: 100
  },
  contentBody: {
    padding: '0 20px',
    '& ul': {
      listStyle: 'none'
    }
  },
  iconButton: {
    marginLeft: 10,
    '& svg': {
      fontSize: 16
    },
    '&:focus': {
      outline: 'none'
    }
  },
  favoriteButton: {
    '& svg': {
      fontSize: '24px'
    }
  },
  menuButton: {
    position: 'absolute',
    right: 10,
    top: 10
  },
  savedJob: {
    backgroundColor: '#FF000022',
    color: '#FF0000',
    animation: 'SaveJob .6s linear' // '&::after':{
    //   animation: 'SaveJob2 .6s linear',
    // }

  },
  icons: {
    color: _Services_App_service__WEBPACK_IMPORTED_MODULE_7__["Theme"].secondary,
    marginRight: 10
  },
  buttonsWrap: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    '&>div': {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    },
    '& .loader': {
      width: 50,
      height: 50,
      padding: 5,
      marginLeft: 10
    }
  },
  specificationContainer: {
    padding: '30px 0'
  },
  specification: {
    '& h6': {
      marginBottom: 10
    },
    '& p': {
      fontWeight: 100
    }
  }
});
function JobDetail(props) {
  const [jobDetail, setJobDetail] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]({//  job_title_name: "Python Developer", is_applied: false, time_difference: "23  days ago", skills_list: ["Python", "Application Development", "Software Architecture", "Artificial Intelligence", "Python"], job_description: "Job Description\r\n\r\nWe are looking for a Python Developer responsible for managing the interchange of data between the server and the users. Your primary focus will be the development of all server-side logic, api, ensuring high performance and responsiveness to requests from the front-end. You will also be responsible for integrating the front-end elements built by your co-workers into the application; therefore, a basic understanding of front-end technologies is necessary as well.\r\n\r\nResponsibilities\r\n\r\nWriting reusable, testable, and efficient code\r\n\r\nDesign and implementation of low-latency, high-availability, and performant applications\r\n\r\nIntegration of user-facing elements developed by front-end developers with server side logic\r\n\r\nImplementation of security and data protection\r\n\r\nIntegration of data storage solutions with the apps\r\n\r\nWrite and implement software solutions that integrate different systems.\r\n\r\nIdentify and suggest various opportunities to improve efficiency and functionality.\r\n\r\nWrite reusable and testable code.", salary_offered: "4-8 Lakh INR per Year", type: "FULLTIME", experience_required: "1-3 years", company_name: "Test Company", industry_list: ["Information & Technology", "Software"], city_list: ["Ghaziabad", "New Delhi", "Hyderabad"], education_list: ["Bachelor of Technology"], slug: "python-developer-test-company-1-3-years7ghdj", is_remote: false, total_applicants: 3 
  }); // const [jobId, setJobId] = React.useState('');
  // const [RequestState, setrequestState] = React.useState(false);

  const [message, setMessage] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]('');
  const [confirmBoxOpen, setConfirmBoxOpen] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
  const [loading, setLoding] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
  const [Applying, setApplying] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
  const [Saving, setSaving] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
  const isDesktop = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["useMediaQuery"])('(min-width:960px)');
  const {
    token,
    user
  } = react__WEBPACK_IMPORTED_MODULE_0__["useContext"](_Context_User_context__WEBPACK_IMPORTED_MODULE_9__["UserContext"]);
  const {
    updateJob
  } = react__WEBPACK_IMPORTED_MODULE_0__["useContext"](_Context_JobList_context__WEBPACK_IMPORTED_MODULE_13__["JobListContext"]);
  const {
    openSnackbar,
    showAlert,
    hideAlert
  } = react__WEBPACK_IMPORTED_MODULE_0__["useContext"](_Context_App_context__WEBPACK_IMPORTED_MODULE_14__["AppContext"]);
  const isMobile = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["useMediaQuery"])('(max-width:767px');
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_16__["useHistory"])(); // const { jobId } = useParams();

  const styles = useStyles();
  const {
    id,
    job_title_name,
    job_description,
    salary_offered,
    time_difference,
    type,
    experience_required,
    company_name,
    total_applicants,
    reported_by,
    industry_list,
    city_list,
    education_list,
    slug,
    is_saved,
    application_status,
    company_logo
  } = jobDetail;

  const ResponseHandler = (response, callback) => {
    console.log('jobs', response);

    if (response) {
      if (response.is_authenticated) {
        if ((response === null || response === void 0 ? void 0 : response.status) == false) {
          var _response$additional_;

          let missingSections = response === null || response === void 0 ? void 0 : (_response$additional_ = response.additional_data) === null || _response$additional_ === void 0 ? void 0 : _response$additional_.missing_sections;

          if (missingSections.length) {
            showAlert(response.message, _Services_App_service__WEBPACK_IMPORTED_MODULE_7__["RequestStatusList"].Error, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Button"], {
              color: "primary",
              onClick: () => {
                hideAlert();
                history.push({
                  pathname: _Services_App_service__WEBPACK_IMPORTED_MODULE_7__["Routes"].Profile,
                  hash: missingSections[0]
                });
              },
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 188,
                columnNumber: 15
              }
            }, "Add"));
          }
        }

        if (response === null || response === void 0 ? void 0 : response.status) {
          callback();
        }
      } else {
        openSnackbar(['You are not authorized to access']);
      }
    } else {
      openSnackbar(['Sorry! \n Something went wrong']);
    }
  };

  const openConfirmBox = () => {
    setConfirmBoxOpen(true);
  };

  const getJobDetail = async slug => {
    console.time('detail');
    console.timeLog('start');
    setLoding(true);
    let response = await Object(_Services_Api_service__WEBPACK_IMPORTED_MODULE_2__["GetJobDetail"])(token === null || token === void 0 ? void 0 : token.access, slug, user === null || user === void 0 ? void 0 : user.id);
    console.timeEnd('detail');
    setLoding(false);

    if (response) {
      if (response.is_authenticated) {
        if ((response === null || response === void 0 ? void 0 : response.status) == false) {
          setMessage(response.message);
        }

        if (response === null || response === void 0 ? void 0 : response.status) {
          setMessage('');
          setJobDetail(response === null || response === void 0 ? void 0 : response.data);
        }
      } else {
        setMessage('You are not authorized to access');
      }
    } else {
      setMessage('Sorry! \n Something went wrong');
    }
  };

  const updateJobInList = (response, updateObject) => {
    setJobDetail(response === null || response === void 0 ? void 0 : response.data);
    updateJob(response === null || response === void 0 ? void 0 : response.data.slug, updateObject);
  };

  const ConfirmApplyJob = () => {
    if (application_status === _Services_App_service__WEBPACK_IMPORTED_MODULE_7__["JobStatusList"].Applied) {
      openConfirmBox();
    } else {
      ApplyForJob();
    }
  };

  const ApplyForJob = async () => {
    if (user === null || user === void 0 ? void 0 : user.id) {
      setApplying(true);
      let response = await Object(_Services_Api_service__WEBPACK_IMPORTED_MODULE_2__["ApplyToJob"])(token === null || token === void 0 ? void 0 : token.access, user === null || user === void 0 ? void 0 : user.id, jobDetail.slug);
      setApplying(false);
      console.log('save response', response);
      ResponseHandler(response, () => {
        updateJobInList(response, {
          application_status: response === null || response === void 0 ? void 0 : response.data.application_status
        });
      });
    } else {}
  };

  const saveJob = async () => {
    if (user === null || user === void 0 ? void 0 : user.id) {
      setSaving(true);
      let response = await Object(_Services_Api_service__WEBPACK_IMPORTED_MODULE_2__["SaveJob"])(token === null || token === void 0 ? void 0 : token.access, user === null || user === void 0 ? void 0 : user.id, jobDetail.slug);
      setSaving(false);
      console.log('save response', response);
      ResponseHandler(response, () => {
        updateJobInList(response, {
          is_saved: response === null || response === void 0 ? void 0 : response.data.is_saved
        });
      });
    } else {}
  };

  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
    var _props$match$params, _props$match$params2, _props$match$params3;

    console.log('fetching job details 2');
    console.log(`${(_props$match$params = props.match.params) === null || _props$match$params === void 0 ? void 0 : _props$match$params.job} !== ${jobDetail === null || jobDetail === void 0 ? void 0 : jobDetail.slug}`, ((_props$match$params2 = props.match.params) === null || _props$match$params2 === void 0 ? void 0 : _props$match$params2.job) !== (jobDetail === null || jobDetail === void 0 ? void 0 : jobDetail.slug));

    if (((_props$match$params3 = props.match.params) === null || _props$match$params3 === void 0 ? void 0 : _props$match$params3.job) !== (jobDetail === null || jobDetail === void 0 ? void 0 : jobDetail.slug)) {
      var _props$match$params4;

      setLoding(true);
      let job = (_props$match$params4 = props.match.params) === null || _props$match$params4 === void 0 ? void 0 : _props$match$params4.job;
      getJobDetail(job);
    }
  }, [props.match.params]);

  const setButtontext = () => {
    if (Applying) {
      if (application_status === _Services_App_service__WEBPACK_IMPORTED_MODULE_7__["JobStatusList"].Applied) {
        return 'Unapplying';
      } else {
        return 'Applying...';
      }
    } else {
      if (application_status === _Services_App_service__WEBPACK_IMPORTED_MODULE_7__["JobStatusList"].Applied) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 301,
            columnNumber: 16
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 302,
            columnNumber: 11
          }
        }, "Applied"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
          style: {
            marginLeft: 5,
            fontSize: 14
          },
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faCheck"],
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 303,
            columnNumber: 11
          }
        }));
      } else {
        return 'Apply Now';
      }
    }
  };

  const defaultLogo = '/assets/bg-images/companyDefault.png';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Components_JobDetailSkeleton_component__WEBPACK_IMPORTED_MODULE_10__["JobDetailSkeleton"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318,
      columnNumber: 19
    }
  }) : message && jobDetail === null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Components_SomethingWrong_component__WEBPACK_IMPORTED_MODULE_11__["SomethingWentWrong"], {
    message: message,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 47
    }
  }) : message && !(jobDetail === null || jobDetail === void 0 ? void 0 : jobDetail.id) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Components_NoResult_component__WEBPACK_IMPORTED_MODULE_12__["NoResult"], {
    message: message,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 43
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(styles.container, {
      [styles.container_L]: isDesktop
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: styles.head,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    container: true,
    spacing: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 23
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
    className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(styles.logo, isMobile ? styles.logo_S : styles.logo_L),
    src: company_logo ? company_logo : defaultLogo,
    alt: "company_logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331,
      columnNumber: 25
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    style: {
      flexGrow: 1
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334,
      columnNumber: 23
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(styles.title),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336,
      columnNumber: 27
    }
  }, job_title_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_8___default()('spacing', styles.subTitle),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337,
      columnNumber: 27
    }
  }, company_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: 'spacing',
    style: {
      fontWeight: 400,
      color: 'gray'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338,
      columnNumber: 27
    }
  }, time_difference, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: 'dotSeparator',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340,
      columnNumber: 29
    }
  }, "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: 'highlighted',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341,
      columnNumber: 29
    }
  }, total_applicants, " applicants")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["IconButton"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(styles.iconButton, styles.menuButton),
    style: {
      padding: '7px 15px'
    },
    "aria-label": "Delete",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346,
      columnNumber: 23
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faEllipsisV"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347,
      columnNumber: 25
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    className: styles.buttonsWrap,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 350,
      columnNumber: 23
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Components_CustomButton_component__WEBPACK_IMPORTED_MODULE_6__["CustomButton"], {
    style: {
      padding: '5px 20px',
      marginLeft: 0
    },
    color: "default",
    onClick: ConfirmApplyJob,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 353,
      columnNumber: 27
    }
  }, setButtontext()), Saving ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["CircularProgress"], {
    className: "loader",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 364,
      columnNumber: 31
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["IconButton"], {
    onClick: () => saveJob(),
    size: 'medium',
    className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(styles.favoriteButton, {
      [styles.iconButton]: true,
      [styles.savedJob]: is_saved
    }),
    "aria-label": "Delete",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365,
      columnNumber: 33
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faHeart"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370,
      columnNumber: 33
    }
  }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: styles.contentBody,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 382,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    container: true,
    spacing: 1,
    className: styles.specificationContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 384,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    md: 6,
    className: styles.specification,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 385,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    variant: 'subtitle2',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 386,
      columnNumber: 23
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    className: styles.icons,
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faBriefcase"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 387,
      columnNumber: 25
    }
  }), "Job Type"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    variant: 'body1',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 390,
      columnNumber: 23
    }
  }, type)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    md: 6,
    className: styles.specification,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 392,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    variant: 'subtitle2',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 393,
      columnNumber: 23
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    className: styles.icons,
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faBriefcase"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 394,
      columnNumber: 25
    }
  }), "Exerience Required"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    variant: 'body1',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 397,
      columnNumber: 23
    }
  }, experience_required)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    md: 6,
    className: styles.specification,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 399,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    variant: 'subtitle2',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 400,
      columnNumber: 23
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    className: styles.icons,
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faMapMarkerAlt"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 401,
      columnNumber: 25
    }
  }), "Location"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    variant: 'body1',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 404,
      columnNumber: 23
    }
  }, city_list === null || city_list === void 0 ? void 0 : city_list.map((city, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 407,
      columnNumber: 29
    }
  }, city, index < city_list.length - 1 ? ', ' : '')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    md: 6,
    className: styles.specification,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 414,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    variant: 'subtitle2',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 415,
      columnNumber: 23
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    className: styles.icons,
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faMoneyBill"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 416,
      columnNumber: 25
    }
  }), "Salary"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    variant: 'body1',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 419,
      columnNumber: 23
    }
  }, salary_offered))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 438,
      columnNumber: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    variant: "subtitle1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 439,
      columnNumber: 21
    }
  }, "Job Description :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 440,
      columnNumber: 21
    }
  }, job_description)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Components_ConfirmBox_component__WEBPACK_IMPORTED_MODULE_15__["ConfirmBox"], {
    show: confirmBoxOpen,
    onConfirm: ApplyForJob,
    onClose: () => setConfirmBoxOpen(false),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 448,
      columnNumber: 7
    }
  }));
}

/***/ }),

/***/ "./src/Pages/Jobs.page.tsx":
/*!*********************************!*\
  !*** ./src/Pages/Jobs.page.tsx ***!
  \*********************************/
/*! exports provided: Jobs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Jobs", function() { return Jobs; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_Loader_component_Loader_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/Loader.component/Loader.component */ "./src/Components/Loader.component/Loader.component.tsx");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _JobDetail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./JobDetail.page */ "./src/Pages/JobDetail.page.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Services_App_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Services/App.service */ "./src/Services/App.service.ts");
/* harmony import */ var _Components_Filter_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Components/Filter.component */ "./src/Components/Filter.component.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _Components_Footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Components/Footer.component */ "./src/Components/Footer.component.tsx");
/* harmony import */ var _Components_Navbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Components/Navbar.component */ "./src/Components/Navbar.component.tsx");
/* harmony import */ var _Context_User_context__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Context/User.context */ "./src/Context/User.context.tsx");
/* harmony import */ var _Components_SomethingWrong_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Components/SomethingWrong.component */ "./src/Components/SomethingWrong.component.tsx");
/* harmony import */ var _Components_NoResult_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../Components/NoResult.component */ "./src/Components/NoResult.component.tsx");
/* harmony import */ var _Context_JobList_context__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../Context/JobList.context */ "./src/Context/JobList.context.tsx");
var _jsxFileName = "/home/balj/Documents/development-work/react-projects/jobPortal/src/Pages/Jobs.page.tsx";


















const drawerWidth = 240;
const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])({
  pageWrap: {
    padding: '0 calc(5% - 20px)',
    '& .fill': {
      margin: '20px',
      width: 'calc(100% - 40px)'
    }
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: '20px 0'
  },
  jobContainer: {
    padding: '0 20px',
    textAlign: 'left',
    width: '100%',
    height: 'auto'
  },
  jobContainer_L: {
    maxHeight: 'calc(100vh - 180px)',
    overflowY: 'scroll'
  },
  jobCard: {
    border: '1px solid #ccc8',
    borderRadius: 10,
    marginBottom: '15px',
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    '& h5': {
      margin: 0
    },
    '& p': {
      margin: 0
    } // width:'100%'

  },
  selectedJob: {
    boxShadow: '4px 4px 10px 0px #ccc9',
    borderColor: _Services_App_service__WEBPACK_IMPORTED_MODULE_8__["Theme"].primary + '88'
  },
  body: {// float: 'right'
  },
  footerUl: {
    listStyle: 'none',
    padding: 0,
    '&>li': {
      textAlign: 'start'
    }
  },
  icons: {
    color: _Services_App_service__WEBPACK_IMPORTED_MODULE_8__["Theme"].secondary,
    marginRight: 10
  },
  logo: {
    margin: '0 10px 0 0'
  },
  logo_S: {
    width: 65,
    height: 65
  },
  logo_L: {
    width: 100,
    height: 100
  }
});
function Jobs(props) {
  const [currentJob, setCurrentJob] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]('');
  const {
    token
  } = react__WEBPACK_IMPORTED_MODULE_0__["useContext"](_Context_User_context__WEBPACK_IMPORTED_MODULE_13__["UserContext"]);
  const {
    joblist,
    message,
    loading,
    getJobList,
    getSearchedJobList
  } = react__WEBPACK_IMPORTED_MODULE_0__["useContext"](_Context_JobList_context__WEBPACK_IMPORTED_MODULE_16__["JobListContext"]);
  const isMobile = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["useMediaQuery"])('(max-width:767px');
  let isDesktop = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["useMediaQuery"])('(min-width:960px)');
  let jobContainerRef = react__WEBPACK_IMPORTED_MODULE_0__["createRef"]();

  const _getJobList = async (form = {}) => {
    let response = await getJobList(form);

    if (response === null || response === void 0 ? void 0 : response.toShow) {
      ShowJob(response.slug, response.isDesktop);
    }
  };

  const _getSearchedJobList = async (keyword, location) => {
    let response = await getSearchedJobList(keyword, location);

    if (response === null || response === void 0 ? void 0 : response.toShow) {
      ShowJob(response.slug, response.isDesktop);
    }
  };

  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
    _getJobList();
  }, []);
  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
    var _props$location$state, _props$location$state2;

    console.log(props.location);
    let keyword = (_props$location$state = props.location.state) === null || _props$location$state === void 0 ? void 0 : _props$location$state.keyword;
    let location = (_props$location$state2 = props.location.state) === null || _props$location$state2 === void 0 ? void 0 : _props$location$state2.location;

    if (keyword) {
      _getSearchedJobList(keyword, location);
    }
  }, [props.location.state]);
  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
    let currentPath = props.location.pathname.split('/');
    console.log('pages', currentPath);

    if (currentPath[3]) {
      setCurrentJob(currentPath[3]);
    } else {
      setCurrentJob('');
    }
  }, [props.location.pathname]);
  const styles = useStyles();
  const {
    path,
    url
  } = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["useRouteMatch"])();

  const filterChangeHandler = form => {
    _getJobList(form);
  };

  const ShowJob = (slug, _isDesktop = isDesktop) => {
    if (currentJob !== slug) {
      window.scrollTo(0, 0); // setCurrentJob(slug);

      if (_isDesktop) {
        props.history.push(`${path}/details/${slug}`);
      } else {
        props.history.push(`/details/${slug}`);
      }
    }
  };

  const renderJob = data => {
    const {
      id,
      job_title_name,
      time_difference,
      experience_required,
      company_name,
      city_list,
      slug,
      company_logo,
      is_saved,
      application_status
    } = data;
    const defaultLogo = '/assets/bg-images/companyDefault.png';
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()({
        [styles.jobCard]: true,
        [styles.selectedJob]: currentJob === slug
      }),
      key: id,
      onClick: () => ShowJob(slug),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(styles.logo, isMobile ? styles.logo_S : styles.logo_L),
      src: company_logo ? company_logo : defaultLogo,
      alt: "company_logo",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 11
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: styles.body,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h5", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 11
      }
    }, job_title_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 11
      }
    }, company_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", {
      className: styles.footerUl,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      className: styles.icons,
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faMapMarkerAlt"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 19
      }
    }), city_list === null || city_list === void 0 ? void 0 : city_list.map((city, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
      key: index,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 21
      }
    }, city, index < city_list.length - 1 ? ', ' : ''))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      className: styles.icons,
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faBriefcase"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213,
        columnNumber: 19
      }
    }), " ", experience_required))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 11
      }
    }, time_difference, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
      className: 'dotSeparator',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218,
        columnNumber: 13
      }
    }, "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
      className: 'highlighted',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 219,
        columnNumber: 13
      }
    }, application_status && application_status !== _Services_App_service__WEBPACK_IMPORTED_MODULE_8__["JobStatusList"].NotAvailable ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222,
        columnNumber: 19
      }
    }, application_status, " ") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223,
        columnNumber: 21
      }
    }, "Apply Now"), is_saved && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 226,
        columnNumber: 30
      }
    }, "& Saved")))));
  };

  const containerClass = classnames__WEBPACK_IMPORTED_MODULE_5___default()(styles.jobContainer, {
    [styles.jobContainer_L]: isDesktop
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    style: {
      height: '100vh',
      overflowY: 'scroll'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Components_Navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavBar"], {
    rightContainerStyle: {
      padding: '0 30px',
      flexGrow: 1
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: styles.pageWrap,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Components_Filter_component__WEBPACK_IMPORTED_MODULE_9__["Filters"], {
    onChange: form => filterChangeHandler(form),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 9
    }
  }), loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: 'fill',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Components_Loader_component_Loader_component__WEBPACK_IMPORTED_MODULE_1__["Loader"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 13
    }
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 15
    }
  }, message && joblist === null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Components_SomethingWrong_component__WEBPACK_IMPORTED_MODULE_14__["SomethingWentWrong"], {
    message: message,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 49
    }
  }) : message && !(joblist === null || joblist === void 0 ? void 0 : joblist.length) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Components_NoResult_component__WEBPACK_IMPORTED_MODULE_15__["NoResult"], {
    message: message,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 51
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
    container: true,
    className: styles.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 23
    }
  }, (isDesktop || !currentJob) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
    item: true,
    md: 5,
    className: containerClass,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 27
    }
  }, joblist === null || joblist === void 0 ? void 0 : joblist.map(job => renderJob(job))), currentJob ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
    item: true,
    xs: 12,
    md: 7,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 27
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Route"], {
    path: `${path}/details/:job`,
    component: _JobDetail_page__WEBPACK_IMPORTED_MODULE_6__["JobDetail"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 29
    }
  })) : null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: 'clearfix',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Components_Footer_component__WEBPACK_IMPORTED_MODULE_11__["CopyRightStrip"], {
    color: '#000',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 7
    }
  }));
}

/***/ }),

/***/ "./src/Pages/Login.page.tsx":
/*!**********************************!*\
  !*** ./src/Pages/Login.page.tsx ***!
  \**********************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_TextField_component_TextField_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/TextField.component/TextField.component */ "./src/Components/TextField.component/TextField.component.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _Services_App_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/App.service */ "./src/Services/App.service.ts");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Context_User_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Context/User.context */ "./src/Context/User.context.tsx");
/* harmony import */ var _Services_Api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Services/Api.service */ "./src/Services/Api.service.ts");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _Components_FormHead_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Components/FormHead.component */ "./src/Components/FormHead.component.tsx");
/* harmony import */ var _Components_Loader_component_Loader_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Components/Loader.component/Loader.component */ "./src/Components/Loader.component/Loader.component.tsx");
/* harmony import */ var _Components_ErrorBox_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Components/ErrorBox.component */ "./src/Components/ErrorBox.component.tsx");
var _jsxFileName = "/home/balj/Documents/development-work/react-projects/jobPortal/src/Pages/Login.page.tsx";












const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])({
  checkBox: {
    paddingRight: 5
  },
  lightFont: {
    fontSize: 14,
    color: 'gray'
  }
});
function LoginPage(props) {
  const [Form, setForm] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]({
    email: '',
    password: '',
    toRemember: true
  });
  const [loading, setLoading] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
  const [errorMessages, setErrorMessages] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]([]);
  const {
    setUser,
    setToken,
    token
  } = react__WEBPACK_IMPORTED_MODULE_0__["useContext"](_Context_User_context__WEBPACK_IMPORTED_MODULE_5__["UserContext"]);
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["useHistory"])();
  let inputRefs = [];
  const styles = useStyles();

  const fieldChangeHandler = (field, value) => {
    setForm(prev => {
      return { ...prev,
        [field]: value
      };
    });
  };

  const login = async event => {
    event.preventDefault();
    let isAnyError = !Form.email || !Form.password; // if (1) {

    if (!isAnyError) {
      setLoading(true);
      console.log('login request', Form);
      let response = await Object(_Services_Api_service__WEBPACK_IMPORTED_MODULE_6__["Login"])(Form);
      setLoading(false);
      console.log('login response', response);

      if ((response === null || response === void 0 ? void 0 : response.status) == false) {
        if (props.onMessage) {
          props.onMessage(response === null || response === void 0 ? void 0 : response.message, 'error');
        }
      }

      if (response === null || response === void 0 ? void 0 : response.status) {
        var _response$data, _response$data2;

        Object(_Services_App_service__WEBPACK_IMPORTED_MODULE_3__["StoreToken"])(response.additional_data);
        setToken(response.additional_data);
        setUser({
          id: (_response$data = response.data) === null || _response$data === void 0 ? void 0 : _response$data.id,
          profilePicture: (_response$data2 = response.data) === null || _response$data2 === void 0 ? void 0 : _response$data2.profile_picture,
          full_name: response.data.full_name,
          email: response.data.email
        });
        history.replace(_Services_App_service__WEBPACK_IMPORTED_MODULE_3__["Routes"].Home);
      } else if ((response === null || response === void 0 ? void 0 : response.statusCode) === 401) {
        setErrorMessages(['Email or password is incorrect !']);
      } else {
        if (props.onMessage) {
          props.onMessage(['Sorry! \n Something went wrong'], 'error');
        }
      }
    } else {
      Object(_Services_App_service__WEBPACK_IMPORTED_MODULE_3__["ValidateFields"])([!Form.email, !Form.password], inputRefs);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("form", {
    className: 'form',
    onSubmit: event => login(event),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Components_FormHead_component__WEBPACK_IMPORTED_MODULE_9__["FormHead"], {
    headImage: true,
    title: 'Hey, good to see You again!',
    subtitle: 'Log In to get going',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Components_ErrorBox_component__WEBPACK_IMPORTED_MODULE_11__["ErrorBox"], {
    errors: errorMessages,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    className: 'inputFieldContainer ',
    container: true,
    spacing: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Components_TextField_component_TextField_component__WEBPACK_IMPORTED_MODULE_1__["default"], {
    ref: ref => {
      inputRefs[0] = ref;
    },
    label: "Email",
    error: Form.email === '',
    isrequired: true,
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faEnvelope"],
    type: "email",
    color: "primary",
    size: 'small',
    variant: 'outlined',
    errorMessage: 'Email is required',
    value: Form.email,
    onChange: event => fieldChangeHandler('email', event === null || event === void 0 ? void 0 : event.target.value),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 15
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Components_TextField_component_TextField_component__WEBPACK_IMPORTED_MODULE_1__["default"], {
    ref: ref => {
      inputRefs[1] = ref;
    },
    label: "Password",
    error: Form.password === '',
    isrequired: true,
    variant: 'outlined',
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faLock"],
    size: 'small',
    type: "password",
    color: "primary",
    errorMessage: 'Password is required',
    value: Form.password,
    onChange: event => fieldChangeHandler('password', event === null || event === void 0 ? void 0 : event.target.value),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 15
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 6,
    style: {
      textAlign: 'left',
      verticalAlign: 'middle'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Checkbox"], {
    color: "primary",
    className: styles.checkBox,
    checked: Form.toRemember,
    onChange: event => fieldChangeHandler('toRemember', event.target.checked),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 17
    }
  }, "Remember me"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 6,
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    to: {
      pathname: _Services_App_service__WEBPACK_IMPORTED_MODULE_3__["Routes"].Verification,
      hash: _Services_App_service__WEBPACK_IMPORTED_MODULE_3__["Routes"].verificationHashes.email
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 15
    }
  }, "Forget password?"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "contained",
    style: {
      width: '100%'
    },
    disabled: !Form.email || !Form.password,
    color: "primary",
    type: "submit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 11
    }
  }, "Log In")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 11
    }
  }, "Do not have an account? "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    replace: true,
    to: {
      pathname: _Services_App_service__WEBPACK_IMPORTED_MODULE_3__["Routes"].User,
      hash: _Services_App_service__WEBPACK_IMPORTED_MODULE_3__["Routes"].SignInHashes.new
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 13
    }
  }, "Register")))), loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Components_Loader_component_Loader_component__WEBPACK_IMPORTED_MODULE_10__["Loader"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 11
    }
  }));
}

/***/ }),

/***/ "./src/Pages/LoginRegister.page/LoginRegister.page.css":
/*!*************************************************************!*\
  !*** ./src/Pages/LoginRegister.page/LoginRegister.page.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./LoginRegister.page.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Pages/LoginRegister.page/LoginRegister.page.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./LoginRegister.page.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Pages/LoginRegister.page/LoginRegister.page.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./LoginRegister.page.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Pages/LoginRegister.page/LoginRegister.page.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/Pages/LoginRegister.page/LoginRegister.page.tsx":
/*!*************************************************************!*\
  !*** ./src/Pages/LoginRegister.page/LoginRegister.page.tsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Login.page */ "./src/Pages/Login.page.tsx");
/* harmony import */ var _Register_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Register.page */ "./src/Pages/Register.page.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Services_App_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Services/App.service */ "./src/Services/App.service.ts");
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/lab */ "./node_modules/@material-ui/lab/esm/index.js");
/* harmony import */ var _LoginRegister_page_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./LoginRegister.page.css */ "./src/Pages/LoginRegister.page/LoginRegister.page.css");
/* harmony import */ var _LoginRegister_page_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_LoginRegister_page_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Components_Navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../Components/Navbar.component */ "./src/Components/Navbar.component.tsx");
/* harmony import */ var _Components_Footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../Components/Footer.component */ "./src/Components/Footer.component.tsx");
var _jsxFileName = "/home/balj/Documents/development-work/react-projects/jobPortal/src/Pages/LoginRegister.page/LoginRegister.page.tsx";











const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])({
  container: {
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    perspective: 500
  }
});

const LoginRegisterPage = props => {
  const [isFlipped, setIsFlipped] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [snackOpen, setSnackOpen] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const [errorMessages, setErrorMessages] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({
    errors: [],
    type: ''
  });
  const styles = useStyles();
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["useHistory"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    let hash = props.location.hash;

    if (hash == `#${_Services_App_service__WEBPACK_IMPORTED_MODULE_5__["Routes"].SignInHashes.exist}`) {
      setSnackOpen(false);
      setErrorMessages({
        errors: [],
        type: ''
      });
      setIsFlipped(false);
    } else if (hash == `#${_Services_App_service__WEBPACK_IMPORTED_MODULE_5__["Routes"].SignInHashes.new}`) {
      setSnackOpen(false);
      setErrorMessages({
        errors: [],
        type: ''
      });
      setIsFlipped(true);
    }
  }, [props.location.hash]);

  const flip = () => {
    let targetPage = null;
    let currentLocation = history.location;

    if (currentLocation.hash === `#${_Services_App_service__WEBPACK_IMPORTED_MODULE_5__["Routes"].SignInHashes.new}`) {
      targetPage = _Services_App_service__WEBPACK_IMPORTED_MODULE_5__["Routes"].SignInHashes.exist;
    } else {
      targetPage = _Services_App_service__WEBPACK_IMPORTED_MODULE_5__["Routes"].SignInHashes.new;
    }

    history.replace({
      pathname: _Services_App_service__WEBPACK_IMPORTED_MODULE_5__["Routes"].User,
      hash: targetPage
    });
  };

  const onMessageRecieved = (errors, type) => {
    setErrorMessages({
      errors: errors,
      type: type
    });
    setSnackOpen(true);
  };

  const closeSnakbar = () => {
    setSnackOpen(false);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_Navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavBar"], {
    home: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()('container', 'pageRoot', styles.container),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Snackbar"], {
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    open: snackOpen,
    autoHideDuration: 30000,
    onClose: closeSnakbar,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_lab__WEBPACK_IMPORTED_MODULE_6__["Alert"], {
    onClose: closeSnakbar,
    severity: errorMessages.type,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_lab__WEBPACK_IMPORTED_MODULE_6__["AlertTitle"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 25
    }
  }, "Errors"), errorMessages === null || errorMessages === void 0 ? void 0 : errorMessages.errors.map((message, index) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: 'error',
      key: index,
      style: {
        lineHeight: '16px'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 37
      }
    }, message);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("cont", {
      's--signup': isFlipped
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sign-in",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Login_page__WEBPACK_IMPORTED_MODULE_1__["LoginPage"], {
    onMessage: (errors, type) => onMessageRecieved(errors, type),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 29
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sub-cont",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "img",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "img__text m--up",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 33
    }
  }, "New here?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 33
    }
  }, "Sign up and discover great amount of new opportunities!")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "img__text m--in",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 33
    }
  }, "One of us?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 33
    }
  }, "If you already has an account, just sign in. We've missed you!")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "img__btn",
    onClick: flip,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "m--up",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 33
    }
  }, "Register"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "m--in",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 33
    }
  }, "Log In"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sign-up",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Register_page__WEBPACK_IMPORTED_MODULE_2__["RegisterPage"], {
    onMessage: (errors, type) => onMessageRecieved(errors, type),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 33
    }
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_Footer_component__WEBPACK_IMPORTED_MODULE_10__["CopyRightStrip"], {
    color: _Services_App_service__WEBPACK_IMPORTED_MODULE_5__["Theme"].fontColor,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (LoginRegisterPage);

/***/ }),

/***/ "./src/Pages/MailSent.page.tsx":
/*!*************************************!*\
  !*** ./src/Pages/MailSent.page.tsx ***!
  \*************************************/
/*! exports provided: MailSent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailSent", function() { return MailSent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _Services_App_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/App.service */ "./src/Services/App.service.ts");
/* harmony import */ var _Context_User_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Context/User.context */ "./src/Context/User.context.tsx");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/home/balj/Documents/development-work/react-projects/jobPortal/src/Pages/MailSent.page.tsx";







const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
  },
  wrapper: {
    width: 600,
    maxWidth: '100%',
    padding: 30,
    // margin: '100px auto',
    borderRadius: _Services_App_service__WEBPACK_IMPORTED_MODULE_2__["Theme"].radius1,
    boxShadow: '2px 2px 8px 0 #ccc',
    '& p': {
      fontSize: 14,
      lineHeight: '24px'
    }
  },
  heading: {},
  imageWrapper: {
    width: 100,
    height: 100,
    margin: '0 auto 20px',
    '& img': {
      width: '100%'
    }
  },
  bodyText: {
    padding: '50px 0'
  },
  footer: {
    width: '100%',
    borderTop: '1px solid #ccc',
    paddingTop: 30
  },
  highlighted: {
    color: _Services_App_service__WEBPACK_IMPORTED_MODULE_2__["Theme"].primary,
    cursor: 'pointer'
  }
});
function MailSent(props) {
  const [loading, setLoading] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
  const [email, setEmail] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]('devashish931.dk@gmail.com');
  const [message, setMessage] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]('');
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["useHistory"])();
  const {
    updateUser,
    user
  } = react__WEBPACK_IMPORTED_MODULE_0__["useContext"](_Context_User_context__WEBPACK_IMPORTED_MODULE_3__["UserContext"]);
  let inputRefs = [];
  const styles = useStyles();
  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {}, []);

  const sendMail = () => {};

  const IsUserLoggedIn = () => {
    if (user === null || user === void 0 ? void 0 : user.id) {} else {
      setMessage('Login to verify yourself');
    }
  };

  const renderMailSent = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: styles.wrapper,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: styles.imageWrapper,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
      src: '/assets/images/mailConfirm.png',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 11
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      variant: 'h5',
      className: styles.heading,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 9
      }
    }, "Email Confirmation"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      className: styles.bodyText,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 9
      }
    }, "We have sent email to", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
      className: styles.highlighted,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 5
      }
    }, " ", email, " "), "to confirm the validity of your email address. After the email follow the link provided to complete your registration"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: styles.footer,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 11
      }
    }, "If you have not got any email,", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
      className: styles.highlighted,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 5
      }
    }, " Resend Email"))));
  };

  const renderMailVerified = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: styles.wrapper,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: styles.imageWrapper,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
      src: '/assets/images/mailVerified.png',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 11
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      variant: 'h5',
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(styles.heading, styles.highlighted),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 9
      }
    }, "Email has verified"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
      style: {
        fontSize: 18,
        fontWeight: 400,
        padding: '30px 0'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 9
      }
    }, "Your Email has been varified successfully."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      onClick: () => props.history.replace('/'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 9
      }
    }, "Go to homepage"));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()('container', styles.container),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 5
    }
  }, // renderMailSent()
  renderMailVerified());
}

/***/ }),

/***/ "./src/Pages/MailVerify.page.tsx":
/*!***************************************!*\
  !*** ./src/Pages/MailVerify.page.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Services_App_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/App.service */ "./src/Services/App.service.ts");
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/lab */ "./node_modules/@material-ui/lab/esm/index.js");
/* harmony import */ var _EmailVerification_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./EmailVerification.page */ "./src/Pages/EmailVerification.page.tsx");
/* harmony import */ var _OTPVerification_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./OTPVerification.page */ "./src/Pages/OTPVerification.page.tsx");
var _jsxFileName = "/home/balj/Documents/development-work/react-projects/jobPortal/src/Pages/MailVerify.page.tsx";







const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
  container: {
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    perspective: 500
  },
  flipper: {
    position: 'relative',
    height: 500,
    width: 320,
    transition: `transform 1s`,
    transformStyle: 'preserve-3d'
  },
  cardFace: {
    position: 'absolute',
    backgroundColor: '#fff',
    backfaceVisibility: 'hidden',
    borderRadius: _Services_App_service__WEBPACK_IMPORTED_MODULE_3__["Theme"].radius2,
    border: `1px solid #ccc`
  },
  flipped: {
    // animation: 'Flip .8s linear forwards',
    transform: `rotateY(180deg) translate(0)`
  },
  mailContainer: {
    width: '100%',
    zIndex: 2
  },
  otpContainer: {
    transform: `rotateY(180deg)`
  }
});

const MailVerify = props => {
  const [isFlipped, setIsFlipped] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [snackOpen, setSnackOpen] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(true);
  const [errorMessages, setErrorMessages] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState({
    errors: [],
    type: ''
  });
  const [email, setEmail] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState('');
  const styles = useStyles();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    let hash = props.location.hash;
    console.log(hash);

    if (hash == `#${_Services_App_service__WEBPACK_IMPORTED_MODULE_3__["Routes"].verificationHashes.email}`) {
      setSnackOpen(false);
      setErrorMessages({
        errors: [],
        type: ''
      });
      setIsFlipped(false);
    } else if (hash == `#${_Services_App_service__WEBPACK_IMPORTED_MODULE_3__["Routes"].verificationHashes.otp}`) {
      setSnackOpen(false);
      setErrorMessages({
        errors: [],
        type: ''
      });
      setIsFlipped(true);
    }
  }, [props.location.hash]);

  const flip = () => {};

  const onMessageRecieved = (errors, type) => {
    setErrorMessages({
      errors: errors,
      type: type
    });
    setSnackOpen(true);
  };

  const closeSnakbar = () => {
    setSnackOpen(false);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('container', styles.container),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Snackbar"], {
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    open: snackOpen,
    autoHideDuration: 30000,
    onClose: closeSnakbar,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_lab__WEBPACK_IMPORTED_MODULE_4__["Alert"], {
    onClose: closeSnakbar,
    severity: errorMessages.type,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_lab__WEBPACK_IMPORTED_MODULE_4__["AlertTitle"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 21
    }
  }, "Errors"), errorMessages === null || errorMessages === void 0 ? void 0 : errorMessages.errors.map((message, index) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: 'error',
      key: index,
      style: {
        lineHeight: '16px'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 33
      }
    }, message);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
      [styles.flipper]: true,
      [styles.flipped]: isFlipped
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(styles.cardFace, styles.mailContainer),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_EmailVerification_page__WEBPACK_IMPORTED_MODULE_5__["EmailVerification"], {
    onSuccess: email => setEmail(email),
    onMessage: (errors, type) => onMessageRecieved(errors, type),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 21
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(styles.cardFace, styles.otpContainer),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_OTPVerification_page__WEBPACK_IMPORTED_MODULE_6__["OTPVerification"], {
    email: email,
    onMessage: (errors, type) => onMessageRecieved(errors, type),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 21
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (MailVerify);

/***/ }),

/***/ "./src/Pages/MobileVerification.page.tsx":
/*!***********************************************!*\
  !*** ./src/Pages/MobileVerification.page.tsx ***!
  \***********************************************/
/*! exports provided: MoblileVerification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoblileVerification", function() { return MoblileVerification; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/balj/Documents/development-work/react-projects/jobPortal/src/Pages/MobileVerification.page.tsx";

function MoblileVerification(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, "MoblileVerification");
}

/***/ }),

/***/ "./src/Pages/NotFound.page.tsx":
/*!*************************************!*\
  !*** ./src/Pages/NotFound.page.tsx ***!
  \*************************************/
/*! exports provided: NotFoundPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundPage", function() { return NotFoundPage; });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Components_Footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/Footer.component */ "./src/Components/Footer.component.tsx");
/* harmony import */ var _Components_Navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/Navbar.component */ "./src/Components/Navbar.component.tsx");
/* harmony import */ var _Services_App_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Services/App.service */ "./src/Services/App.service.ts");
var _jsxFileName = "/home/balj/Documents/development-work/react-projects/jobPortal/src/Pages/NotFound.page.tsx";






function NotFoundPage(props) {
  const [time, setTime] = react__WEBPACK_IMPORTED_MODULE_1__["useState"](10);
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();
  const styles = {
    width: '100%',
    padding: '50px 0'
  };
  react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](() => {
    let _time = time;
    let interval = setInterval(() => {
      if (_time > 1) {
        _time -= 1;
        setTime(_ => _time);
      } else {
        clearInterval(interval);
        history.replace(_Services_App_service__WEBPACK_IMPORTED_MODULE_5__["Routes"].Home);
      }
    }, 1000);
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Components_Navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavBar"], {
    home: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    style: styles,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("img", {
    style: {
      maxWidth: '430px',
      display: 'block',
      margin: '0 auto'
    },
    src: "/assets/bg-images/notFound.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    variant: 'h4',
    style: {
      marginBottom: 15
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, "Requested page doesn't exist"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    variant: 'body1',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, "This page will be ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("span", {
    style: {
      color: _Services_App_service__WEBPACK_IMPORTED_MODULE_5__["Theme"].primary
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 58
    }
  }, "redirect after ", time, " seconds"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Components_Footer_component__WEBPACK_IMPORTED_MODULE_3__["Footer"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }));
}

/***/ }),

/***/ "./src/Pages/OTPVerification.page.tsx":
/*!********************************************!*\
  !*** ./src/Pages/OTPVerification.page.tsx ***!
  \********************************************/
/*! exports provided: OTPVerification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OTPVerification", function() { return OTPVerification; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_TextField_component_TextField_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/TextField.component/TextField.component */ "./src/Components/TextField.component/TextField.component.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _Services_App_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/App.service */ "./src/Services/App.service.ts");
/* harmony import */ var _Context_User_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Context/User.context */ "./src/Context/User.context.tsx");
/* harmony import */ var _Services_Api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Services/Api.service */ "./src/Services/Api.service.ts");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Components_FormHead_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Components/FormHead.component */ "./src/Components/FormHead.component.tsx");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
var _jsxFileName = "/home/balj/Documents/development-work/react-projects/jobPortal/src/Pages/OTPVerification.page.tsx";











const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])({
  checkBox: {
    paddingRight: 5
  },
  lightFont: {
    fontSize: 14,
    color: 'gray'
  }
});
function OTPVerification(props) {
  const [Form, setForm] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]({
    OTP: ''
  });
  const [email, setEmail] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]('');
  const {
    setToken,
    setUser
  } = react__WEBPACK_IMPORTED_MODULE_0__["useContext"](_Context_User_context__WEBPACK_IMPORTED_MODULE_4__["UserContext"]);
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["useHistory"])();
  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](() => {
    setEmail(props.email);
  }, [props.email]);
  let inputRefs = [];
  const styles = useStyles();

  const fieldChangeHandler = (field, value) => {
    setForm(prev => {
      return { ...prev,
        [field]: value
      };
    });
  };

  const verifyMail = async event => {
    event.preventDefault();
    let isAnyError = !Form.OTP; // if (1) {

    if (!isAnyError) {
      console.log('login request', Form); // let response = await MailVerify(Form);

      let response = await Object(_Services_Api_service__WEBPACK_IMPORTED_MODULE_5__["Login"])(Form);
      console.log('login response', response);

      if ((response === null || response === void 0 ? void 0 : response.status) == false) {
        if (props.onMessage) {
          props.onMessage(response === null || response === void 0 ? void 0 : response.message, 'error');
        }
      }

      if (response === null || response === void 0 ? void 0 : response.status) {
        Object(_Services_App_service__WEBPACK_IMPORTED_MODULE_3__["StoreToken"])(response.additional_data);
        setToken(response.additional_data);
        props.history.replace(_Services_App_service__WEBPACK_IMPORTED_MODULE_3__["Routes"].Home);
      } else {
        if (props.onMessage) {
          props.onMessage(['Sorry! \n Something went wrong'], 'error');
        }
      }
    } else {
      Object(_Services_App_service__WEBPACK_IMPORTED_MODULE_3__["ValidateFields"])([!Form.OTP], inputRefs);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("form", {
    className: 'form',
    onSubmit: event => verifyMail(event),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Components_FormHead_component__WEBPACK_IMPORTED_MODULE_9__["FormHead"], {
    title: 'Verify One Time Password',
    subtitle: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 21
      }
    }, "Enter Otp, sent to ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
      style: {
        color: _Services_App_service__WEBPACK_IMPORTED_MODULE_3__["Theme"].primary
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 46
      }
    }, email)),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    className: 'inputFieldContainer ',
    container: true,
    spacing: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Components_TextField_component_TextField_component__WEBPACK_IMPORTED_MODULE_1__["default"], {
    ref: ref => {
      inputRefs[0] = ref;
    },
    label: "One time password",
    error: Form.OTP === '',
    isrequired: true,
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faEnvelope"],
    type: "OTP",
    size: 'small',
    variant: 'outlined',
    errorMessage: 'OTP is required',
    value: Form.OTP,
    onChange: event => fieldChangeHandler('OTP', event === null || event === void 0 ? void 0 : event.target.value),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "contained",
    style: {
      width: '100%'
    },
    disabled: !Form.OTP,
    color: "primary",
    type: "submit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 9
    }
  }, "Verify"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    style: {
      display: 'flex',
      paddingTop: 10
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
    color: 'primary',
    style: {
      fontSize: 18
    },
    onClick: () => history.push({
      pathname: _Services_App_service__WEBPACK_IMPORTED_MODULE_3__["Routes"].Verification,
      hash: _Services_App_service__WEBPACK_IMPORTED_MODULE_3__["Routes"].verificationHashes.email
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faArrowLeft"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 13
    }
  })))));
}

/***/ }),

/***/ "./src/Pages/PasswordChange.page.tsx":
/*!*******************************************!*\
  !*** ./src/Pages/PasswordChange.page.tsx ***!
  \*******************************************/
/*! exports provided: PasswordChange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordChange", function() { return PasswordChange; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/balj/Documents/development-work/react-projects/jobPortal/src/Pages/PasswordChange.page.tsx";

function PasswordChange(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, "PasswordChange");
}

/***/ }),

/***/ "./src/Pages/Recruiters.page.tsx":
/*!***************************************!*\
  !*** ./src/Pages/Recruiters.page.tsx ***!
  \***************************************/
/*! exports provided: Recruiters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Recruiters", function() { return Recruiters; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/balj/Documents/development-work/react-projects/jobPortal/src/Pages/Recruiters.page.tsx";

function Recruiters(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, "Recruiters"));
}

/***/ }),

/***/ "./src/Pages/Register.page.tsx":
/*!*************************************!*\
  !*** ./src/Pages/Register.page.tsx ***!
  \*************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Components_TextField_component_TextField_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/TextField.component/TextField.component */ "./src/Components/TextField.component/TextField.component.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _Services_Api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Services/Api.service */ "./src/Services/Api.service.ts");
/* harmony import */ var _Services_App_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Services/App.service */ "./src/Services/App.service.ts");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _Components_FormHead_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Components/FormHead.component */ "./src/Components/FormHead.component.tsx");
/* harmony import */ var _Context_User_context__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Context/User.context */ "./src/Context/User.context.tsx");
/* harmony import */ var _Components_Loader_component_Loader_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Components/Loader.component/Loader.component */ "./src/Components/Loader.component/Loader.component.tsx");
var _jsxFileName = "/home/balj/Documents/development-work/react-projects/jobPortal/src/Pages/Register.page.tsx";











const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])({});
function RegisterPage(props) {
  const [Form, setForm] = react__WEBPACK_IMPORTED_MODULE_0__["useState"]({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false);
  const {
    token
  } = react__WEBPACK_IMPORTED_MODULE_0__["useContext"](_Context_User_context__WEBPACK_IMPORTED_MODULE_9__["UserContext"]);
  const styles = useStyles();
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useHistory"])();
  let inputRefs = [];

  const fieldChangeHandler = (field, value) => {
    setForm(prev => {
      return { ...prev,
        [field]: value
      };
    });
  };

  const register = async event => {
    event.preventDefault();
    let isAnyError = !Form.firstName || !Form.lastName || !Form.email || !Form.password || !Form.confirmPassword;

    if (!isAnyError) {
      // if (1) {
      setLoading(true);
      let response = await Object(_Services_Api_service__WEBPACK_IMPORTED_MODULE_4__["Register"])(Form);
      setLoading(false);
      console.log('register response', response);

      if ((response === null || response === void 0 ? void 0 : response.status) == false) {
        if (props.onMessage) {
          props.onMessage(response === null || response === void 0 ? void 0 : response.message, 'error');
        }
      } else if (response === null || response === void 0 ? void 0 : response.status) {
        history.replace({
          pathname: _Services_App_service__WEBPACK_IMPORTED_MODULE_5__["Routes"].User,
          hash: _Services_App_service__WEBPACK_IMPORTED_MODULE_5__["Routes"].SignInHashes.exist
        });
      } else {
        if (props.onMessage) {
          props.onMessage(['Sorry! \n Something went wrong'], 'error');
        }
      }
    } else {
      Object(_Services_App_service__WEBPACK_IMPORTED_MODULE_5__["ValidateFields"])([!Form.firstName, !Form.lastName, !Form.email, !Form.password, !Form.confirmPassword], inputRefs);
    }
  };

  return (
    /*#__PURE__*/
    // <Grid  md={6}>
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 5
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("form", {
      className: 'form',
      onSubmit: event => register(event),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Components_FormHead_component__WEBPACK_IMPORTED_MODULE_8__["FormHead"], {
      headImage: true,
      title: 'Register Yourself',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
      className: 'inputFieldContainer ',
      container: true,
      spacing: 2,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
      item: true,
      xs: 12,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Components_TextField_component_TextField_component__WEBPACK_IMPORTED_MODULE_2__["default"], {
      ref: ref => {
        inputRefs[0] = ref;
      },
      label: "First name",
      error: Form.firstName === '',
      errorMessage: "First name is required",
      isrequired: true,
      size: 'small',
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faUser"],
      color: "primary",
      variant: 'outlined',
      value: Form.firstName,
      onChange: event => fieldChangeHandler('firstName', event === null || event === void 0 ? void 0 : event.target.value),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 13
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
      item: true,
      xs: 12,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Components_TextField_component_TextField_component__WEBPACK_IMPORTED_MODULE_2__["default"], {
      ref: ref => {
        inputRefs[1] = ref;
      },
      label: "Last name",
      error: Form.lastName === '',
      errorMessage: "Last name is required",
      isrequired: true,
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faUser"],
      color: "primary",
      size: 'small',
      variant: 'outlined',
      value: Form.lastName,
      onChange: event => fieldChangeHandler('lastName', event === null || event === void 0 ? void 0 : event.target.value),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 13
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
      item: true,
      xs: 12,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Components_TextField_component_TextField_component__WEBPACK_IMPORTED_MODULE_2__["default"], {
      ref: ref => inputRefs[2] = ref,
      label: "Email",
      error: Form.email === '',
      errorMessage: "Email is required",
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faEnvelope"],
      isrequired: true,
      type: "email",
      color: "primary",
      size: 'small',
      variant: 'outlined',
      value: Form.email,
      onChange: event => fieldChangeHandler('email', event === null || event === void 0 ? void 0 : event.target.value),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 13
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
      item: true,
      xs: 12,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Components_TextField_component_TextField_component__WEBPACK_IMPORTED_MODULE_2__["default"], {
      ref: ref => inputRefs[3] = ref,
      label: "Password",
      error: Form.password === '',
      isrequired: true,
      type: "password",
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faLock"],
      size: 'small',
      color: "primary",
      variant: 'outlined',
      errorMessage: "Password is required",
      value: Form.password,
      onChange: event => fieldChangeHandler('password', event === null || event === void 0 ? void 0 : event.target.value),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 13
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
      item: true,
      xs: 12,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Components_TextField_component_TextField_component__WEBPACK_IMPORTED_MODULE_2__["default"], {
      ref: ref => inputRefs[4] = ref,
      label: "Confirm Password",
      error: Form.password !== Form.confirmPassword,
      errorMessage: "Passwords does not match",
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faLock"],
      isrequired: true,
      type: "password",
      size: 'small',
      color: "primary",
      variant: 'outlined',
      value: Form.confirmPassword,
      onChange: event => fieldChangeHandler('confirmPassword', event === null || event === void 0 ? void 0 : event.target.value),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 13
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      variant: "contained",
      style: {
        width: '100%'
      },
      disabled: !Form.firstName || !Form.lastName || !Form.email || !Form.password || !Form.confirmPassword,
      color: "primary",
      type: "submit",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 9
      }
    }, "Register")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 9
      }
    }, "Have an account? "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      replace: true,
      to: {
        pathname: _Services_App_service__WEBPACK_IMPORTED_MODULE_5__["Routes"].User,
        hash: _Services_App_service__WEBPACK_IMPORTED_MODULE_5__["Routes"].SignInHashes.exist
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 11
      }
    }, "Log In"))), loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Components_Loader_component_Loader_component__WEBPACK_IMPORTED_MODULE_10__["Loader"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 11
      }
    })) // </Grid>

  );
}

/***/ }),

/***/ "./src/Pages/WalkInJobs.page.tsx":
/*!***************************************!*\
  !*** ./src/Pages/WalkInJobs.page.tsx ***!
  \***************************************/
/*! exports provided: WalkInJobs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalkInJobs", function() { return WalkInJobs; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/balj/Documents/development-work/react-projects/jobPortal/src/Pages/WalkInJobs.page.tsx";

function WalkInJobs(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, "WalkInJobs");
}

/***/ }),

/***/ "./src/Routes/Main.route.tsx":
/*!***********************************!*\
  !*** ./src/Routes/Main.route.tsx ***!
  \***********************************/
/*! exports provided: MainRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainRoute", function() { return MainRoute; });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Pages_Home_page_Home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Pages/Home.page/Home.page */ "./src/Pages/Home.page/Home.page.tsx");
/* harmony import */ var _Pages_JobDetail_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Pages/JobDetail.page */ "./src/Pages/JobDetail.page.tsx");
/* harmony import */ var _Pages_Jobs_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Pages/Jobs.page */ "./src/Pages/Jobs.page.tsx");
/* harmony import */ var _Pages_LoginRegister_page_LoginRegister_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Pages/LoginRegister.page/LoginRegister.page */ "./src/Pages/LoginRegister.page/LoginRegister.page.tsx");
/* harmony import */ var _Pages_MailSent_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Pages/MailSent.page */ "./src/Pages/MailSent.page.tsx");
/* harmony import */ var _Pages_MailVerify_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Pages/MailVerify.page */ "./src/Pages/MailVerify.page.tsx");
/* harmony import */ var _Pages_MobileVerification_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Pages/MobileVerification.page */ "./src/Pages/MobileVerification.page.tsx");
/* harmony import */ var _Pages_OTPVerification_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Pages/OTPVerification.page */ "./src/Pages/OTPVerification.page.tsx");
/* harmony import */ var _Pages_PasswordChange_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Pages/PasswordChange.page */ "./src/Pages/PasswordChange.page.tsx");
/* harmony import */ var _Pages_Recruiters_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Pages/Recruiters.page */ "./src/Pages/Recruiters.page.tsx");
/* harmony import */ var _Pages_NotFound_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Pages/NotFound.page */ "./src/Pages/NotFound.page.tsx");
/* harmony import */ var _Pages_Register_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Pages/Register.page */ "./src/Pages/Register.page.tsx");
/* harmony import */ var _Pages_WalkInJobs_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../Pages/WalkInJobs.page */ "./src/Pages/WalkInJobs.page.tsx");
/* harmony import */ var _Services_App_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../Services/App.service */ "./src/Services/App.service.ts");
/* harmony import */ var _Components_Loader_component_Loader_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../Components/Loader.component/Loader.component */ "./src/Components/Loader.component/Loader.component.tsx");
/* harmony import */ var _Pages_About_page_About_page__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../Pages/About.page/About.page */ "./src/Pages/About.page/About.page.tsx");
/* harmony import */ var _Pages_Contact_page_Contact_page__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../Pages/Contact.page/Contact.page */ "./src/Pages/Contact.page/Contact.page.tsx");
/* harmony import */ var _Context_JobList_context__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../Context/JobList.context */ "./src/Context/JobList.context.tsx");
/* harmony import */ var _Context_App_context__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../Context/App.context */ "./src/Context/App.context.tsx");
/* harmony import */ var _Components_Navbar_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../Components/Navbar.component */ "./src/Components/Navbar.component.tsx");
/* harmony import */ var _Components_Footer_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../Components/Footer.component */ "./src/Components/Footer.component.tsx");
var _jsxFileName = "/home/balj/Documents/development-work/react-projects/jobPortal/src/Routes/Main.route.tsx";
























const Profile = react__WEBPACK_IMPORTED_MODULE_1__["lazy"](() => Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(2)]).then(__webpack_require__.bind(null, /*! ../Pages/Profile.page/Profile.page */ "./src/Pages/Profile.page/Profile.page.tsx")));
const theme = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["createMuiTheme"])({
  palette: {
    primary: {
      main: _Services_App_service__WEBPACK_IMPORTED_MODULE_16__["Theme"].primary
    },
    secondary: {
      main: _Services_App_service__WEBPACK_IMPORTED_MODULE_16__["Theme"].secondary
    }
  },
  typography: {
    fontFamily: `'Poppins', 'sans-serif'`
  }
});

const jobDetailPage = props => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Components_Navbar_component__WEBPACK_IMPORTED_MODULE_22__["NavBar"], {
    rightContainerStyle: {
      padding: '0 30px',
      flexGrow: 1
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    style: {
      padding: '0 calc(5% - 20px)'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Pages_JobDetail_page__WEBPACK_IMPORTED_MODULE_4__["JobDetail"], Object.assign({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Components_Footer_component__WEBPACK_IMPORTED_MODULE_23__["CopyRightStrip"], {
    color: _Services_App_service__WEBPACK_IMPORTED_MODULE_16__["Theme"].fontColor,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }));
};

function MainRoute(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Suspense"], {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Components_Loader_component_Loader_component__WEBPACK_IMPORTED_MODULE_17__["Loader"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 39
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["ThemeProvider"], {
    theme: theme,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Context_App_context__WEBPACK_IMPORTED_MODULE_21__["AppContextProvider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Context_JobList_context__WEBPACK_IMPORTED_MODULE_20__["JobListContextProvider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 33
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    exact: true,
    path: _Services_App_service__WEBPACK_IMPORTED_MODULE_16__["Routes"].Home,
    component: _Pages_Home_page_Home_page__WEBPACK_IMPORTED_MODULE_3__["Home"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 37
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    path: _Services_App_service__WEBPACK_IMPORTED_MODULE_16__["Routes"].User,
    component: _Pages_LoginRegister_page_LoginRegister_page__WEBPACK_IMPORTED_MODULE_6__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 37
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    path: _Services_App_service__WEBPACK_IMPORTED_MODULE_16__["Routes"].Register,
    component: _Pages_Register_page__WEBPACK_IMPORTED_MODULE_14__["RegisterPage"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 37
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    path: _Services_App_service__WEBPACK_IMPORTED_MODULE_16__["Routes"].Profile,
    component: Profile,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 37
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    path: _Services_App_service__WEBPACK_IMPORTED_MODULE_16__["Routes"].passwordChange,
    component: _Pages_PasswordChange_page__WEBPACK_IMPORTED_MODULE_11__["PasswordChange"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 37
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    path: _Services_App_service__WEBPACK_IMPORTED_MODULE_16__["Routes"].Mobileverification,
    component: _Pages_MobileVerification_page__WEBPACK_IMPORTED_MODULE_9__["MoblileVerification"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 37
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    path: _Services_App_service__WEBPACK_IMPORTED_MODULE_16__["Routes"].OtpVerification,
    component: _Pages_OTPVerification_page__WEBPACK_IMPORTED_MODULE_10__["OTPVerification"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 37
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    path: _Services_App_service__WEBPACK_IMPORTED_MODULE_16__["Routes"].Verification,
    component: _Pages_MailVerify_page__WEBPACK_IMPORTED_MODULE_8__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 37
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    path: _Services_App_service__WEBPACK_IMPORTED_MODULE_16__["Routes"].MailSent,
    component: _Pages_MailSent_page__WEBPACK_IMPORTED_MODULE_7__["MailSent"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 37
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    path: _Services_App_service__WEBPACK_IMPORTED_MODULE_16__["Routes"].WalkInJobs,
    component: _Pages_WalkInJobs_page__WEBPACK_IMPORTED_MODULE_15__["WalkInJobs"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 37
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    path: _Services_App_service__WEBPACK_IMPORTED_MODULE_16__["Routes"].Jobs,
    component: _Pages_Jobs_page__WEBPACK_IMPORTED_MODULE_5__["Jobs"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 37
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    path: _Services_App_service__WEBPACK_IMPORTED_MODULE_16__["Routes"].jobDetail,
    component: jobDetailPage,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 37
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    path: _Services_App_service__WEBPACK_IMPORTED_MODULE_16__["Routes"].Recruiters,
    component: _Pages_Recruiters_page__WEBPACK_IMPORTED_MODULE_12__["Recruiters"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 37
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    path: _Services_App_service__WEBPACK_IMPORTED_MODULE_16__["Routes"].About,
    component: _Pages_About_page_About_page__WEBPACK_IMPORTED_MODULE_18__["About"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 37
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    path: _Services_App_service__WEBPACK_IMPORTED_MODULE_16__["Routes"].Contact,
    component: _Pages_Contact_page_Contact_page__WEBPACK_IMPORTED_MODULE_19__["Contact"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 37
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    path: '*',
    component: _Pages_NotFound_page__WEBPACK_IMPORTED_MODULE_13__["NotFoundPage"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 37
    }
  }))))))));
}

/***/ }),

/***/ "./src/Services/Api.service.ts":
/*!*************************************!*\
  !*** ./src/Services/Api.service.ts ***!
  \*************************************/
/*! exports provided: BASE_URL, Domain, GetAccessTokenUrl, Register, Login, ForgetPassword, Logout, GetJobList, GetSearchedJobList, GetJobDetail, ApplyToJob, SaveJob, GetProfileData, UpdatePersonalInfo, UpdateSkills, UpdateProfileSummary, UpdateProfileHeadline, UpdateExperience, UpdateEducation, DeleteUserEducation, DeleteUserEmployment, UpdateProjects, DeleteUserProjects, UpdateProfileImage, UpdateCoverImage, UpdateResume, GetFilterOptions, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_URL", function() { return BASE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Domain", function() { return Domain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAccessTokenUrl", function() { return GetAccessTokenUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Register", function() { return Register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return Login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetPassword", function() { return ForgetPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logout", function() { return Logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetJobList", function() { return GetJobList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetSearchedJobList", function() { return GetSearchedJobList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetJobDetail", function() { return GetJobDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplyToJob", function() { return ApplyToJob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveJob", function() { return SaveJob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetProfileData", function() { return GetProfileData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePersonalInfo", function() { return UpdatePersonalInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateSkills", function() { return UpdateSkills; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateProfileSummary", function() { return UpdateProfileSummary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateProfileHeadline", function() { return UpdateProfileHeadline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateExperience", function() { return UpdateExperience; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateEducation", function() { return UpdateEducation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteUserEducation", function() { return DeleteUserEducation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteUserEmployment", function() { return DeleteUserEmployment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateProjects", function() { return UpdateProjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteUserProjects", function() { return DeleteUserProjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateProfileImage", function() { return UpdateProfileImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateCoverImage", function() { return UpdateCoverImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateResume", function() { return UpdateResume; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetFilterOptions", function() { return GetFilterOptions; });
/////////////////------------ for production -----------\\\\\\\\\\\\\
// export const BASE_URL = 'https://newjobshub.com/web-service/api/';
// export const Domain = 'https://newjobshub.com';
/////////////////------------ for development -----------\\\\\\\\\\\\\
const BASE_URL = 'http://127.0.0.1:8000/api/';
const Domain = 'http://127.0.0.1:8000'; /////////////////------------ for testing -----------\\\\\\\\\\\\\
// export const BASE_URL = 'http://192.168.1.11/web-service/api/';
// export const Domain = 'http://192.168.1.11';

const UserUrl = BASE_URL + 'user/';
const JobUrl = BASE_URL + 'jobs/';
const FilterOptionUrl = BASE_URL + 'attribs/';
const CandidateUrl = UserUrl + 'candidate/';
const profileUrl = CandidateUrl + 'profile/';
const profileUpdateUrl = CandidateUrl + 'profile/update/';
const GetAccessTokenUrl = UserUrl + 'token/refresh/';
const ApiRoutes = {
  JobListUrl: JobUrl + 'list/',
  JobSearchUrl: JobUrl + 'search/',
  JobDetailUrl: JobUrl + 'details/',
  JobApplyUrl: JobUrl + 'apply/',
  JobSaveUrl: JobUrl + 'save/',
  RegisterUrl: UserUrl + 'register/',
  LoginUrl: UserUrl + 'login/',
  LogoutUrl: UserUrl + 'logout/',
  ForgetPasswordUrl: UserUrl + '/',
  ProfileUrl: profileUrl,
  SkillsUpdateUrl: profileUpdateUrl + 'skills/',
  ProfileSummaryUpdateUrl: profileUpdateUrl + 'summary/',
  ProfileHeadlineUpdateUrl: profileUpdateUrl + 'headline/',
  ExperienceUpdateUrl: profileUpdateUrl + 'experience/',
  EducationUpdateUrl: profileUpdateUrl + 'education/',
  ProjectsUpdateUrl: profileUpdateUrl + 'projects/',
  ProfileImageUpdateUrl: profileUpdateUrl + 'image/',
  CoverImageUpdateUrl: profileUpdateUrl + 'cover_image/',
  ResumeUpdateUrl: profileUpdateUrl + 'resume/'
};

const setHeader = (token = '') => {
  let header = new Headers(); // header.append('authorization', token);

  if (token) {
    header.append('authorization', `Bearer ${token}`);
  }

  header.append('Content-Type', 'application/json');
  return header;
};

setHeader();
const ApiService = {};

const PostRequestObject = (data, token = '') => ({
  headers: setHeader(token),
  method: 'post',
  body: JSON.stringify(data)
});

const Register = async data => {
  return fetch(ApiRoutes.RegisterUrl, PostRequestObject(data)).then(response => response.json()).then(responseJson => responseJson).catch(error => console.log('error', error));
};
const Login = async data => {
  let statusCode = null;
  return fetch(ApiRoutes.LoginUrl, PostRequestObject(data)).then(response => {
    statusCode = response.status;
    return response.json();
  }).then(responseJson => {
    responseJson.statusCode = statusCode;
    return responseJson;
  }).catch(error => console.log('error', error));
};
const ForgetPassword = async (token, data, stage = 1) => {
  return fetch(ApiRoutes.ForgetPasswordUrl + `?stage=${stage}`, PostRequestObject(data, token)).then(response => response.json()).then(responseJson => responseJson).catch(error => console.log('error', error));
};
const Logout = async (token, id) => {
  return fetch(ApiRoutes.LogoutUrl + `?userId=${id}&token=${token}`).then(response => response.json()).then(responseJson => responseJson).catch(error => console.log('error', error));
};
const GetJobList = async (token, filters, userId) => {
  let query;

  if (userId) {
    query = ApiRoutes.JobListUrl + `?filters=${JSON.stringify(filters)}&id=${userId}`;
  } else {
    query = ApiRoutes.JobListUrl + `?filters=${JSON.stringify(filters)}`;
  }

  console.log('jobs request', query);
  return fetch(query, {
    headers: setHeader(token)
  }).then(response => response.json()).then(responseJson => responseJson).catch(error => console.log('error', error));
};
const GetSearchedJobList = async (token, keyword, location, userId) => {
  let query;

  if (userId) {
    query = ApiRoutes.JobSearchUrl + `?keyword=${keyword}&city=${location}&id=${userId}`;
  } else {
    query = ApiRoutes.JobSearchUrl + `?keyword=${keyword}&city=${location}`;
  }

  console.log('jobs request', query);
  return fetch(query, {
    headers: setHeader(token)
  }).then(response => response.json()).then(responseJson => responseJson).catch(error => console.log('error', error));
};
const GetJobDetail = async (token, slug, userId) => {
  console.log(userId);
  let query;

  if (userId) {
    query = ApiRoutes.JobDetailUrl + `?job=${slug}&id=${userId}`;
  } else {
    query = ApiRoutes.JobDetailUrl + `?job=${slug}`;
  }

  console.log('jobs request', query);
  return fetch(query, {
    headers: setHeader(token)
  }).then(response => response.json()).then(responseJson => responseJson).catch(error => console.log('error', error));
};
const ApplyToJob = async (token, userId, slug) => {
  let query;

  if (userId) {
    query = ApiRoutes.JobApplyUrl + `?jobIdentifier=${slug}&id=${userId}`;
  } else {
    query = ApiRoutes.JobApplyUrl + `?jobIdentifier=${slug}`;
  }

  console.log('jobs request', query);
  return fetch(query, {
    headers: setHeader(token)
  }).then(response => response.json()).then(responseJson => responseJson).catch(error => console.log('error', error));
};
const SaveJob = async (token, userId, slug) => {
  let query;

  if (userId) {
    query = ApiRoutes.JobSaveUrl + `?jobIdentifier=${slug}&id=${userId}`;
  } else {
    query = ApiRoutes.JobSaveUrl + `?jobIdentifier=${slug}`;
  }

  console.log('jobs request', query);
  return fetch(query, {
    headers: setHeader(token)
  }).then(response => response.json()).then(responseJson => responseJson).catch(error => console.log('error', error));
};
const GetProfileData = async (token, userId) => {
  console.log('profile url', ApiRoutes.ProfileUrl + `?id=${userId}`);
  return fetch(ApiRoutes.ProfileUrl + `?id=${userId}`, {
    headers: setHeader(token)
  }).then(response => response.json()).then(responseJson => responseJson).catch(error => console.log('error', error));
};
const UpdatePersonalInfo = async (token, userId, data) => {
  console.log('profile url', profileUpdateUrl + `?id=${userId}`);
  console.log('request data', data);
  return fetch(profileUpdateUrl + `?id=${userId}`, PostRequestObject(data, token)).then(response => response.json()).then(responseJson => responseJson).catch(error => console.log('error', error));
};
const UpdateSkills = async (token, userId, data) => {
  console.log('profile url', ApiRoutes.SkillsUpdateUrl + `?id=${userId}`);
  return fetch(ApiRoutes.SkillsUpdateUrl + `?id=${userId}`, PostRequestObject(data, token)).then(response => response.json()).then(responseJson => responseJson).catch(error => console.log('error', error));
};
const UpdateProfileSummary = async (token, userId, data) => {
  console.log('summary url', ApiRoutes.ProfileSummaryUpdateUrl + `?id=${userId}`);
  return fetch(ApiRoutes.ProfileSummaryUpdateUrl + `?id=${userId}`, PostRequestObject(data, token)).then(response => response.json()).then(responseJson => responseJson).catch(error => console.log('error', error));
};
const UpdateProfileHeadline = async (token, userId, data) => {
  console.log('headline url', ApiRoutes.ProfileHeadlineUpdateUrl + `?id=${userId}`);
  return fetch(ApiRoutes.ProfileHeadlineUpdateUrl + `?id=${userId}`, PostRequestObject(data, token)).then(response => response.json()).then(responseJson => responseJson).catch(error => console.log('error', error));
};
const UpdateExperience = async (token, userId, data, employmentId = 0) => {
  console.log('experience url', ApiRoutes.ExperienceUpdateUrl + `?id=${userId}&experienceIdentifier=${employmentId}`);
  return fetch(ApiRoutes.ExperienceUpdateUrl + `?id=${userId}&experienceIdentifier=${employmentId}`, PostRequestObject(data, token)).then(response => response.json()).then(responseJson => responseJson).catch(error => console.log('error', error));
};
const UpdateEducation = async (token, userId, data, educationId = 0) => {
  console.log('education url', ApiRoutes.EducationUpdateUrl + `?id=${userId}&educationIdentifier=${educationId}`);
  return fetch(ApiRoutes.EducationUpdateUrl + `?id=${userId}&educationIdentifier=${educationId}`, PostRequestObject(data, token)).then(response => response.json()).then(responseJson => responseJson).catch(error => console.log('error', error));
};
const DeleteUserEducation = async (token, userId, educationId = 0) => {
  console.log('education url', ApiRoutes.EducationUpdateUrl + `?id=${userId}&educationIdentifier=${educationId}`);
  return fetch(ApiRoutes.EducationUpdateUrl + `?id=${userId}&educationIdentifier=${educationId}`, {
    headers: setHeader(token),
    method: 'delete'
  }).then(response => response.json()).then(responseJson => responseJson).catch(error => console.log('error', error));
};
const DeleteUserEmployment = async (token, userId, employmentId = 0) => {
  console.log('education url', ApiRoutes.ExperienceUpdateUrl + `?id=${userId}&experienceIdentifier=${employmentId}`);
  return fetch(ApiRoutes.ExperienceUpdateUrl + `?id=${userId}&experienceIdentifier=${employmentId}`, {
    headers: setHeader(token),
    method: 'delete'
  }).then(response => response.json()).then(responseJson => responseJson).catch(error => console.log('error', error));
};
const UpdateProjects = async (token, userId, data, projectId = 0) => {
  console.log('projects url', ApiRoutes.ProjectsUpdateUrl + `?id=${userId}&projectIdentifier=${projectId}`);
  return fetch(ApiRoutes.ProjectsUpdateUrl + `?id=${userId}`, PostRequestObject(data, token)).then(response => response.json()).then(responseJson => responseJson).catch(error => console.log('error', error));
};
const DeleteUserProjects = async (token, userId, projectId = 0) => {
  console.log('projects url', ApiRoutes.ProjectsUpdateUrl + `?id=${userId}&projectIdentifier=${projectId}`);
  return fetch(ApiRoutes.ProjectsUpdateUrl + `?id=${userId}`, {
    headers: setHeader(token),
    method: 'delete'
  }).then(response => response.json()).then(responseJson => responseJson).catch(error => console.log('error', error));
};
const UpdateProfileImage = async (token, userId, data) => {
  console.log('projects url', ApiRoutes.ProfileImageUpdateUrl + `?id=${userId}`);
  return fetch(ApiRoutes.ProfileImageUpdateUrl + `?id=${userId}`, PostRequestObject(data, token)).then(response => response.json()).then(responseJson => responseJson).catch(error => console.log('error', error));
};
const UpdateCoverImage = async (token, userId, data) => {
  console.log('projects url', ApiRoutes.CoverImageUpdateUrl + `?id=${userId}`);
  return fetch(ApiRoutes.CoverImageUpdateUrl + `?id=${userId}`, PostRequestObject(data, token)).then(response => response.json()).then(responseJson => responseJson).catch(error => console.log('error', error));
};
const UpdateResume = async (token, userId, data) => {
  console.log('projects url', ApiRoutes.ResumeUpdateUrl + `?id=${userId}`);
  return fetch(ApiRoutes.ResumeUpdateUrl + `?id=${userId}`, PostRequestObject(data, token)).then(response => response.json()).then(responseJson => responseJson).catch(error => console.log('error', error));
};
const GetFilterOptions = async token => {
  console.log('filterOption url', ApiRoutes.JobDetailUrl);
  return fetch(FilterOptionUrl, {
    headers: setHeader(token)
  }).then(response => response.json()).then(responseJson => responseJson).catch(error => console.log('error', error));
};
/* harmony default export */ __webpack_exports__["default"] = (ApiService);

/***/ }),

/***/ "./src/Services/App.service.ts":
/*!*************************************!*\
  !*** ./src/Services/App.service.ts ***!
  \*************************************/
/*! exports provided: Theme, Months, Routes, ValidateFields, Storages, getUser, StoreToken, getToken, clearStore, StoreUser, JobStatusList, RequestStatusList, Format_INS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Theme", function() { return Theme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Months", function() { return Months; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routes", function() { return Routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateFields", function() { return ValidateFields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Storages", function() { return Storages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return getUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreToken", function() { return StoreToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getToken", function() { return getToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearStore", function() { return clearStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreUser", function() { return StoreUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobStatusList", function() { return JobStatusList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestStatusList", function() { return RequestStatusList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Format_INS", function() { return Format_INS; });
const Theme = {
  // primary: '#44b4d6',
  primary: '#ee294f',
  // secondary: '#1ba6df',
  secondary: '#2c335d',
  tertiary: '#385a64',
  fontColor: '#444',
  error: '#ff4444',
  success: '#00C851',
  warning: '#ffbb33',
  info: '#33b5e5',
  radius1: 5,
  radius2: 10,
  radius3: 20
};
const Months = {
  '01': 'Jan',
  '02': 'Feb',
  '03': 'Mar',
  '04': 'Apr',
  '05': 'May',
  '06': 'Jun',
  '07': 'Jul',
  '08': 'Aug',
  '09': 'Sep',
  '10': 'Oct',
  '11': 'Nov',
  '12': 'Dec'
};
const Routes = {
  Home: '/',
  Jobs: '/jobs',
  WalkInJobs: '/walkInJobs',
  Recruiters: '/recruiters',
  Login: '/login',
  User: '/user',
  About: '/about-us',
  Contact: '/contact-us',
  Register: '/register',
  Profile: '/profile',
  MailSent: '/mailSent',
  Emailverification: '/emailVerication',
  OtpVerification: '/otpVerication',
  Verification: '/verification',
  Mobileverification: '/mobileverification',
  passwordChange: '/passwordChange',
  jobDetail: '/details/:job',
  JobList: '/list',
  SignInHashes: {
    exist: 'exists',
    new: 'new'
  },
  verificationHashes: {
    email: 'email',
    otp: 'otp'
  }
};
const ValidateFields = (conditions, refs) => {
  conditions === null || conditions === void 0 ? void 0 : conditions.forEach((condition, index) => {
    if (condition) {
      refs[index].makeDirty();
    }
  });
};
const Storages = {
  Token: 'token',
  User: 'user'
};
const getUser = async () => {
  let user = await localStorage.getItem(Storages.User);

  if (user) {
    user = JSON.parse(user);
    return user;
  } else {
    return false;
  }
};
const StoreToken = async token => {
  localStorage.setItem(Storages.Token, JSON.stringify(token));
};
const getToken = () => {
  let tokenString = localStorage.getItem(Storages.Token);

  if (tokenString) {
    let tokens = JSON.parse(tokenString);
    return tokens;
  } else {
    return null;
  }
};
const clearStore = async field => {
  localStorage.removeItem(field);
};
const StoreUser = async data => {
  let user = JSON.stringify(data);
  localStorage.setItem(Storages.User, user);
};
const JobStatusList = {
  NotAvailable: 'NA',
  Viewed: 'Viewed',
  Applied: 'Applied',
  Saved: 'Saved',
  Reviewed: 'Reviewed',
  Shortlisted: 'Shortlisted',
  Rejected: 'Rejected'
};
const RequestStatusList = {
  Error: 'error',
  Success: 'success',
  Warning: 'warning',
  Info: 'info'
}; //---------- The function changes formats to Indian Number system-------\\

const Format_INS = number => {
  number = number.toString();
  var lastThree = number.substring(number.length - 3);
  var otherNumbers = number.substring(0, number.length - 3);
  if (otherNumbers != '') lastThree = ',' + lastThree;
  var result = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
  return result;
};

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.tsx");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.ts");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/home/balj/Documents/development-work/react-projects/jobPortal/src/index.tsx";






react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 3
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }
})), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/serviceWorker.ts":
/*!******************************!*\
  !*** ./src/serviceWorker.ts ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.0/8 are considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl, {
    headers: {
      'Service-Worker': 'script'
    }
  }).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    }).catch(error => {
      console.error(error.message);
    });
  }
}

/***/ }),

/***/ 1:
/*!***************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.tsx ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/balj/Documents/development-work/react-projects/jobPortal/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /home/balj/Documents/development-work/react-projects/jobPortal/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /home/balj/Documents/development-work/react-projects/jobPortal/src/index.tsx */"./src/index.tsx");


/***/ })

},[[1,"runtime-main",3]]]);
//# sourceMappingURL=main.chunk.js.map