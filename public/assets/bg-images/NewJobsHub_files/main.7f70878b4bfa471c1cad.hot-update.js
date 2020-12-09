webpackHotUpdate("main",{

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

/***/ })

})
//# sourceMappingURL=main.7f70878b4bfa471c1cad.hot-update.js.map