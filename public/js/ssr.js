/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/Components/Button.js":
/*!*******************************************!*\
  !*** ./resources/js/Components/Button.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function Button(_ref) {
  var _ref$type = _ref.type,
      type = _ref$type === void 0 ? "submit" : _ref$type,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? "" : _ref$className,
      processing = _ref.processing,
      children = _ref.children;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
    type: type,
    className: "w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-700 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 ".concat(processing && "opacity-25", " ") + className,
    disabled: processing,
    children: children
  });
}

/***/ }),

/***/ "./resources/js/Components/Checkbox.js":
/*!*********************************************!*\
  !*** ./resources/js/Components/Checkbox.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Checkbox)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function Checkbox(_ref) {
  var name = _ref.name,
      value = _ref.value,
      handleChange = _ref.handleChange;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
    type: "checkbox",
    name: name,
    value: value,
    className: "rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50",
    onChange: function onChange(e) {
      return handleChange(e);
    }
  });
}

/***/ }),

/***/ "./resources/js/Components/Dropdown.js":
/*!*********************************************!*\
  !*** ./resources/js/Components/Dropdown.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-react */ "@inertiajs/inertia-react");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @headlessui/react */ "@headlessui/react");
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var DropDownContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext();

var Dropdown = function Dropdown(_ref) {
  var children = _ref.children;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var toggleOpen = function toggleOpen() {
    setOpen(function (previousState) {
      return !previousState;
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(DropDownContext.Provider, {
    value: {
      open: open,
      setOpen: setOpen,
      toggleOpen: toggleOpen
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "relative",
      children: children
    })
  });
};

var Trigger = function Trigger(_ref2) {
  var children = _ref2.children;

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(DropDownContext),
      open = _useContext.open,
      setOpen = _useContext.setOpen,
      toggleOpen = _useContext.toggleOpen;

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      onClick: toggleOpen,
      children: children
    }), open && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "fixed inset-0 z-40",
      onClick: function onClick() {
        return setOpen(false);
      }
    })]
  });
};

var Content = function Content(_ref3) {
  var _ref3$align = _ref3.align,
      align = _ref3$align === void 0 ? "right" : _ref3$align,
      _ref3$width = _ref3.width,
      width = _ref3$width === void 0 ? "48" : _ref3$width,
      _ref3$contentClasses = _ref3.contentClasses,
      contentClasses = _ref3$contentClasses === void 0 ? "py-1 bg-white text-gray-700 dark:bg-neutral-800 dark:text-white dark:border dark:border-neutral-700" : _ref3$contentClasses,
      children = _ref3.children;

  var _useContext2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(DropDownContext),
      open = _useContext2.open,
      setOpen = _useContext2.setOpen;

  var alignmentClasses = "origin-top";

  if (align === "left") {
    alignmentClasses = "origin-top-left left-0";
  } else if (align === "right") {
    alignmentClasses = "origin-top-right right-0";
  }

  var widthClasses = "";

  if (width === "48") {
    widthClasses = "w-48";
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition, {
      show: open,
      enter: "transition ease-out duration-200",
      enterFrom: "transform opacity-0 scale-95",
      enterTo: "transform opacity-100 scale-100",
      leave: "transition ease-in duration-75",
      leaveFrom: "transform opacity-100 scale-100",
      leaveTo: "transform opacity-0 scale-95",
      children: open && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "absolute z-50 mt-2 rounded-md shadow-lg ".concat(alignmentClasses, " ").concat(widthClasses),
        onClick: function onClick() {
          return setOpen(false);
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "rounded-md ring-1 ring-black ring-opacity-5 " + contentClasses,
          children: children
        })
      })
    })
  });
};

var DropdownLink = function DropdownLink(_ref4) {
  var href = _ref4.href,
      _ref4$method = _ref4.method,
      method = _ref4$method === void 0 ? "get" : _ref4$method,
      _ref4$as = _ref4.as,
      as = _ref4$as === void 0 ? "a" : _ref4$as,
      children = _ref4.children;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
    href: href,
    method: method,
    as: as,
    className: "block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-700 focus:outline-none focus:bg-gray-100 dark:focus:bg-neutral-700 transition duration-150 ease-in-out",
    children: children
  });
};

Dropdown.Trigger = Trigger;
Dropdown.Content = Content;
Dropdown.Link = DropdownLink;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dropdown);

/***/ }),

/***/ "./resources/js/Components/Header.js":
/*!*******************************************!*\
  !*** ./resources/js/Components/Header.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-react */ "@inertiajs/inertia-react");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _HeaderUserNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HeaderUserNav */ "./resources/js/Components/HeaderUserNav.js");
/* harmony import */ var _HeaderNavs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HeaderNavs */ "./resources/js/Components/HeaderNavs.js");
/* harmony import */ var _Providers_HeaderHeightProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Providers/HeaderHeightProvider */ "./resources/js/Providers/HeaderHeightProvider.js");
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Logo */ "./resources/js/Components/Logo.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);








function Header(_ref) {
  var auth = _ref.auth,
      router = _ref.router;
  var headerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_Providers_HeaderHeightProvider__WEBPACK_IMPORTED_MODULE_4__.HeaderHeightContext),
      setHeaderHeight = _useContext.setHeaderHeight;

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setHeaderHeight(headerRef.current.clientHeight);
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
    ref: headerRef,
    className: "sticky top-0 z-40 border-b dark:border-neutral-700 border-gray-200",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("nav", {
      className: "bg-white dark:bg-neutral-800 max-w-7xl mx-auto",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "px-4 mx-auto sm:px-6 lg:px-8",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "flex justify-between h-16",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "flex items-center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
              href: route("home"),
              className: "items-center flex-shrink-0 hidden md:flex space-x-2",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Logo__WEBPACK_IMPORTED_MODULE_5__["default"], {
                className: "w-6 h-6"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                className: "text-xl font-bold whitespace-nowrap",
                children: "MadStone"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "hidden md:ml-16 md:flex md:items-center md:space-x-4",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_HeaderNavs__WEBPACK_IMPORTED_MODULE_3__["default"], {
                router: router
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "flex items-center md:hidden",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
              href: route("home"),
              className: "flex items-center flex-shrink-0 space-x-2",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Logo__WEBPACK_IMPORTED_MODULE_5__["default"], {
                className: "w-6 h-6"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                className: "text-xl font-bold whitespace-nowrap",
                children: "MadStone"
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_HeaderUserNav__WEBPACK_IMPORTED_MODULE_2__["default"], {
            auth: auth
          })]
        })
      })
    })
  });
}

/***/ }),

/***/ "./resources/js/Components/HeaderNavs.js":
/*!***********************************************!*\
  !*** ./resources/js/Components/HeaderNavs.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HeaderNav)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-react */ "@inertiajs/inertia-react");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);



function HeaderNav(_ref) {
  var router = _ref.router;
  var headerNavs = [{
    name: "홈",
    href: route("home")
  }, {
    name: "자유게시판",
    href: route("board")
  }, {
    name: "지역모임",
    href: route("local-gathering")
  }, {
    name: "중고거래",
    href: "#"
  }];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: headerNavs.map(function (item) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
        href: item.href,
        "aria-current": item.href === router.url ? "page" : undefined,
        className: "".concat(item.href === router.url ? "dark:bg-neutral-600 dark:text-white bg-gray-100 text-gray-900" : "text-gray-900 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-neutral-700", "\n                    px-5 py-2 rounded-md text-sm font-medium"),
        children: item.name
      }, item.name);
    })
  });
}

/***/ }),

/***/ "./resources/js/Components/HeaderUserNav.js":
/*!**************************************************!*\
  !*** ./resources/js/Components/HeaderUserNav.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HeaderUserNav)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-react */ "@inertiajs/inertia-react");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Utils_auth_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Utils/auth.utils */ "./resources/js/Utils/auth.utils.js");
/* harmony import */ var _Dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dropdown */ "./resources/js/Components/Dropdown.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/pro-regular-svg-icons */ "@fortawesome/pro-regular-svg-icons");
/* harmony import */ var _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);







function HeaderUserNav(_ref) {
  var auth = _ref.auth;
  var userNavs = [{
    name: "내 정보",
    href: "/profile",
    method: "get"
  }, {
    name: "로그아웃",
    href: route("logout"),
    method: "post"
  }];
  return auth.user ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
    className: "flex items-center",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "flex items-center flex-shrink-0",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_Dropdown__WEBPACK_IMPORTED_MODULE_2__["default"], {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Dropdown__WEBPACK_IMPORTED_MODULE_2__["default"].Trigger, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("button", {
            className: "flex text-sm rounded-full focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-offset-gray-300 focus:ring-white",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
              className: "sr-only",
              children: "Open user menu"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
              className: "object-cover rounded-full w-9 h-9",
              src: (0,_Utils_auth_utils__WEBPACK_IMPORTED_MODULE_1__.getAvatar)(auth.user.name),
              alt: "".concat(auth.user.name, "'s profile")
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Dropdown__WEBPACK_IMPORTED_MODULE_2__["default"].Content, {
          children: userNavs.map(function (item) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Dropdown__WEBPACK_IMPORTED_MODULE_2__["default"].Link, {
              method: item.method,
              href: item.href,
              as: item.method === "get" ? "a" : "button",
              children: item.name
            }, item.name);
          })
        })]
      })
    })
  }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
    className: "flex items-center",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "flex-shrink-0",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
        href: route("login"),
        className: "flex w-9 h-9 justify-center items-center text-sm rounded-full focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-offset-gray-300 focus:ring-white dark:focus:ring-offset-neutral-700 dark:focus:ring-neutral-700 bg-gray-100 dark:bg-neutral-600",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
          icon: _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faUser,
          className: "text-lg text-gray-400 dark:text-gray-300"
        })
      })
    })
  });
}

/***/ }),

/***/ "./resources/js/Components/Input.js":
/*!******************************************!*\
  !*** ./resources/js/Components/Input.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Input)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function Input(_ref) {
  var _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'text' : _ref$type,
      name = _ref.name,
      value = _ref.value,
      className = _ref.className,
      autoComplete = _ref.autoComplete,
      required = _ref.required,
      isFocused = _ref.isFocused,
      handleChange = _ref.handleChange;
  var input = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (isFocused) {
      input.current.focus();
    }
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: "flex flex-col items-start",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
      type: type,
      name: name,
      value: value,
      className: "border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm " + className,
      ref: input,
      autoComplete: autoComplete,
      required: required,
      onChange: function onChange(e) {
        return handleChange(e);
      }
    })
  });
}

/***/ }),

/***/ "./resources/js/Components/Label.js":
/*!******************************************!*\
  !*** ./resources/js/Components/Label.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Label)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function Label(_ref) {
  var forInput = _ref.forInput,
      value = _ref.value,
      className = _ref.className,
      children = _ref.children;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label", {
    htmlFor: forInput,
    className: "block font-medium text-sm text-gray-700 " + className,
    children: value ? value : children
  });
}

/***/ }),

/***/ "./resources/js/Components/Logo.js":
/*!*****************************************!*\
  !*** ./resources/js/Components/Logo.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Logo)
/* harmony export */ });
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/pro-solid-svg-icons */ "@fortawesome/pro-solid-svg-icons");
/* harmony import */ var _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



function Logo(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_0__.FontAwesomeIcon, {
    icon: _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faMountain,
    className: className
  });
}

/***/ }),

/***/ "./resources/js/Components/ValidationErrors.js":
/*!*****************************************************!*\
  !*** ./resources/js/Components/ValidationErrors.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ValidationErrors)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);



function ValidationErrors(_ref) {
  var errors = _ref.errors;
  return Object.keys(errors).length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "mb-4",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "font-medium text-red-600",
      children: "\uC557! \uBB34\uC5B8\uAC00 \uBB38\uC81C\uAC00 \uC788\uC2B5\uB2C8\uB2E4."
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("ul", {
      className: "mt-3 text-sm text-red-600 list-disc list-inside",
      children: Object.keys(errors).map(function (key, index) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
          children: errors[key]
        }, index);
      })
    })]
  });
}

/***/ }),

/***/ "./resources/js/Layouts/Guest.js":
/*!***************************************!*\
  !*** ./resources/js/Layouts/Guest.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Guest)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);


function Guest(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "flex min-h-screen",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "hidden lg:block relative w-0 flex-1",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
        className: "absolute inset-0 h-full w-full object-cover",
        src: "https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80",
        alt: ""
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "mx-auto w-full max-w-sm lg:w-96",
        children: children
      })
    })]
  });
}

/***/ }),

/***/ "./resources/js/Layouts/Layout.js":
/*!****************************************!*\
  !*** ./resources/js/Layouts/Layout.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var _Components_Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Components/Header */ "./resources/js/Components/Header.js");
/* harmony import */ var _Providers_HeaderHeightProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Providers/HeaderHeightProvider */ "./resources/js/Providers/HeaderHeightProvider.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




function Layout(_ref) {
  var auth = _ref.auth,
      router = _ref.ziggy,
      children = _ref.children;
  console.log(auth, "auth");
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "flex flex-col items-stretch w-full h-full min-h-screen bg-white text-gray-700 dark:bg-neutral-800 dark:text-white",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_Providers_HeaderHeightProvider__WEBPACK_IMPORTED_MODULE_1__.HeaderHeightProvider, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Components_Header__WEBPACK_IMPORTED_MODULE_0__["default"], {
        auth: auth,
        router: router
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "mx-auto max-w-7xl",
        children: children
      })]
    })
  });
}

/***/ }),

/***/ "./resources/js/Pages/Auth/ConfirmPassword.js":
/*!****************************************************!*\
  !*** ./resources/js/Pages/Auth/ConfirmPassword.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ConfirmPassword)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Components/Button */ "./resources/js/Components/Button.js");
/* harmony import */ var _Components_Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Components/Input */ "./resources/js/Components/Input.js");
/* harmony import */ var _Components_Label__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Components/Label */ "./resources/js/Components/Label.js");
/* harmony import */ var _Components_ValidationErrors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Components/ValidationErrors */ "./resources/js/Components/ValidationErrors.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @inertiajs/inertia-react */ "@inertiajs/inertia-react");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Layouts_Guest__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/Layouts/Guest */ "./resources/js/Layouts/Guest.js");
/* harmony import */ var _Components_Logo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/Components/Logo */ "./resources/js/Components/Logo.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);










function ConfirmPassword(props) {
  var _useForm = (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_5__.useForm)({
    password: ""
  }),
      data = _useForm.data,
      setData = _useForm.setData,
      post = _useForm.post,
      processing = _useForm.processing,
      errors = _useForm.errors,
      reset = _useForm.reset;

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    return function () {
      reset("password");
    };
  }, []);

  var onHandleChange = function onHandleChange(event) {
    setData(event.target.name, event.target.value);
  };

  var submit = function submit(e) {
    e.preventDefault();
    post(route("password.confirm"));
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_Layouts_Guest__WEBPACK_IMPORTED_MODULE_6__["default"], {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_5__.Head, {
      title: "\uBE44\uBC00\uBC88\uD638 \uD655\uC778"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: "w-full max-w-sm mx-auto lg:w-96",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: "flex items-center space-x-3",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Components_Logo__WEBPACK_IMPORTED_MODULE_7__["default"], {
            className: "w-12 h-12"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
            className: "text-4xl font-extrabold",
            children: "MadStone"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h2", {
          className: "mt-6 text-3xl font-extrabold text-gray-900",
          children: "\uBE44\uBC00\uBC88\uD638 \uC7AC\uC124\uC815"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: "mt-8",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
          className: "mb-4 text-sm text-gray-600",
          children: "\uBCF4\uC548\uC744 \uC704\uD574 \uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Components_ValidationErrors__WEBPACK_IMPORTED_MODULE_4__["default"], {
          errors: errors
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("form", {
          onSubmit: submit,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: "mt-4",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Components_Label__WEBPACK_IMPORTED_MODULE_3__["default"], {
              forInput: "password",
              value: "Password"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Components_Input__WEBPACK_IMPORTED_MODULE_2__["default"], {
              type: "password",
              name: "password",
              value: data.password,
              className: "block w-full mt-1",
              isFocused: true,
              handleChange: onHandleChange
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
            className: "flex items-center justify-end mt-6",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Components_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
              className: "ml-4",
              processing: processing,
              children: "\uD655\uC778"
            })
          })]
        })]
      })]
    })]
  });
}

/***/ }),

/***/ "./resources/js/Pages/Auth/ForgotPassword.js":
/*!***************************************************!*\
  !*** ./resources/js/Pages/Auth/ForgotPassword.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ForgotPassword)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Components/Button */ "./resources/js/Components/Button.js");
/* harmony import */ var _Components_Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Components/Input */ "./resources/js/Components/Input.js");
/* harmony import */ var _Components_ValidationErrors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Components/ValidationErrors */ "./resources/js/Components/ValidationErrors.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @inertiajs/inertia-react */ "@inertiajs/inertia-react");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Layouts_Guest__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/Layouts/Guest */ "./resources/js/Layouts/Guest.js");
/* harmony import */ var _Components_Logo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/Components/Logo */ "./resources/js/Components/Logo.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);









function ForgotPassword(props) {
  var status = props.status;

  var _useForm = (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_4__.useForm)({
    email: ""
  }),
      data = _useForm.data,
      setData = _useForm.setData,
      post = _useForm.post,
      processing = _useForm.processing,
      errors = _useForm.errors;

  var onHandleChange = function onHandleChange(event) {
    setData(event.target.name, event.target.value);
  };

  var submit = function submit(e) {
    e.preventDefault();
    post(route("password.email"));
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_Layouts_Guest__WEBPACK_IMPORTED_MODULE_5__["default"], {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_4__.Head, {
      title: "\uBE44\uBC00\uBC88\uD638 \uC7AC\uC124\uC815"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: "mx-auto w-full max-w-sm lg:w-96",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "flex space-x-3 items-center",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Components_Logo__WEBPACK_IMPORTED_MODULE_6__["default"], {
            className: "w-12 h-12"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
            className: "text-4xl font-extrabold",
            children: "MadStone"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h2", {
          className: "mt-6 text-3xl font-extrabold text-gray-900",
          children: "\uBE44\uBC00\uBC88\uD638 \uC7AC\uC124\uC815"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "mt-8",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "mb-4 text-sm text-gray-500 leading-normal",
          children: ["\uBE44\uBC00\uBC88\uD638\uB97C \uC78A\uC5B4 \uBC84\uB9AC\uC168\uB098\uC694?", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("br", {}), "\uC774\uBA54\uC77C \uC8FC\uC18C\uB97C \uC54C\uB824\uC8FC\uC2DC\uBA74 \uBE44\uBC00\uBC88\uD638 \uC7AC\uC124\uC815 \uB9C1\uD06C\uB97C \uC774\uBA54\uC77C\uB85C \uBCF4\uB0B4\uB4DC\uB9AC\uACA0\uC2B5\uB2C8\uB2E4."]
        }), status && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          className: "mb-4 font-medium text-sm text-green-600",
          children: status
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Components_ValidationErrors__WEBPACK_IMPORTED_MODULE_3__["default"], {
          errors: errors
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("form", {
          onSubmit: submit,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Components_Input__WEBPACK_IMPORTED_MODULE_2__["default"], {
            type: "text",
            name: "email",
            value: data.email,
            className: "mt-1 block w-full",
            isFocused: true,
            handleChange: onHandleChange
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
            className: "flex items-center justify-end mt-6",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Components_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
              processing: processing,
              children: "\uBE44\uBC00\uBC88\uD638 \uC7AC\uC124\uC815 \uB9C1\uD06C \uBCF4\uB0B4\uAE30"
            })
          })]
        })]
      })]
    })]
  });
}

/***/ }),

/***/ "./resources/js/Pages/Auth/Login.js":
/*!******************************************!*\
  !*** ./resources/js/Pages/Auth/Login.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Login)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Components/Button */ "./resources/js/Components/Button.js");
/* harmony import */ var _Components_Checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Components/Checkbox */ "./resources/js/Components/Checkbox.js");
/* harmony import */ var _Components_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Components/Input */ "./resources/js/Components/Input.js");
/* harmony import */ var _Components_ValidationErrors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Components/ValidationErrors */ "./resources/js/Components/ValidationErrors.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @inertiajs/inertia-react */ "@inertiajs/inertia-react");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Layouts_Guest__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/Layouts/Guest */ "./resources/js/Layouts/Guest.js");
/* harmony import */ var _Components_Logo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/Components/Logo */ "./resources/js/Components/Logo.js");
/* harmony import */ var _Components_Label__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/Components/Label */ "./resources/js/Components/Label.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);











function Login(props) {
  var status = props.status,
      canResetPassword = props.canResetPassword;

  var _useForm = (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_5__.useForm)({
    email: "",
    password: "",
    remember: ""
  }),
      data = _useForm.data,
      setData = _useForm.setData,
      post = _useForm.post,
      processing = _useForm.processing,
      errors = _useForm.errors,
      reset = _useForm.reset;

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    return function () {
      reset("password");
    };
  }, []);

  var onHandleChange = function onHandleChange(event) {
    setData(event.target.name, event.target.type === "checkbox" ? event.target.checked : event.target.value);
  };

  var submit = function submit(e) {
    e.preventDefault();
    post(route("login"));
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Layouts_Guest__WEBPACK_IMPORTED_MODULE_6__["default"], {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_5__.Head, {
      title: "\uB85C\uADF8\uC778"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
      className: "mx-auto w-full max-w-sm lg:w-96",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
          className: "flex space-x-3 items-center",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Components_Logo__WEBPACK_IMPORTED_MODULE_7__["default"], {
            className: "w-12 h-12"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
            className: "text-4xl font-extrabold",
            children: "MadStone"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("h2", {
          className: "mt-6 text-3xl font-extrabold text-gray-900",
          children: "\uB85C\uADF8\uC778 \uD558\uC138\uC694"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
        className: "mt-8",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
          className: "mt-6",
          children: [status && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
            className: "mb-4 font-medium text-sm text-green-600",
            children: status
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Components_ValidationErrors__WEBPACK_IMPORTED_MODULE_4__["default"], {
            errors: errors
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("form", {
            onSubmit: submit,
            className: "space-y-6",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Components_Label__WEBPACK_IMPORTED_MODULE_8__["default"], {
                htmlFor: "email",
                value: "\uC774\uBA54\uC77C",
                children: "\uC774\uBA54\uC77C"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
                className: "mt-1",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Components_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
                  type: "text",
                  name: "email",
                  value: data.email,
                  className: "mt-1 block w-full",
                  autoComplete: "username",
                  isFocused: true,
                  handleChange: onHandleChange
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
              className: "space-y-1",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Components_Label__WEBPACK_IMPORTED_MODULE_8__["default"], {
                htmlFor: "password",
                value: "\uBE44\uBC00\uBC88\uD638",
                children: "\uBE44\uBC00\uBC88\uD638"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
                className: "mt-1",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Components_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
                  type: "password",
                  name: "password",
                  value: data.password,
                  className: "mt-1 block w-full",
                  autoComplete: "current-password",
                  handleChange: onHandleChange
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
              className: "flex items-center justify-between",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
                className: "flex items-center",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("label", {
                  className: "flex items-center",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Components_Checkbox__WEBPACK_IMPORTED_MODULE_2__["default"], {
                    name: "remember",
                    value: data.remember,
                    handleChange: onHandleChange
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
                    className: "ml-2 text-sm text-gray-600",
                    children: "\uB85C\uADF8\uC778 \uC720\uC9C0"
                  })]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
                className: "text-sm",
                children: canResetPassword && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_5__.Link, {
                  href: route("password.request"),
                  className: "underline text-sm text-gray-600 hover:text-gray-900",
                  children: "\uBE44\uBC00\uBC88\uD638\uB97C \uC78A\uC73C\uC168\uB098\uC694?"
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Components_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
                processing: processing,
                children: "\uB85C\uADF8\uC778"
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
            className: "mt-6 relative",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
              className: "absolute inset-0 flex items-center",
              "aria-hidden": "true",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
                className: "w-full border-t border-gray-300"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
              className: "relative flex justify-center text-sm",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
                className: "px-2 bg-white text-gray-500",
                children: "\uC544\uC9C1 \uACC4\uC815\uC774 \uC5C6\uC73C\uC2E0\uAC00\uC694?"
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
            className: "flex justify-center my-6",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_5__.Link, {
              href: route("register"),
              className: "underline text-sm text-gray-600 hover:text-gray-900",
              children: "\uD68C\uC6D0\uAC00\uC785"
            })
          })]
        })
      })]
    })]
  });
}

/***/ }),

/***/ "./resources/js/Pages/Auth/Register.js":
/*!*********************************************!*\
  !*** ./resources/js/Pages/Auth/Register.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Register)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Components/Button */ "./resources/js/Components/Button.js");
/* harmony import */ var _Components_Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Components/Input */ "./resources/js/Components/Input.js");
/* harmony import */ var _Components_ValidationErrors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Components/ValidationErrors */ "./resources/js/Components/ValidationErrors.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @inertiajs/inertia-react */ "@inertiajs/inertia-react");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Layouts_Guest__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/Layouts/Guest */ "./resources/js/Layouts/Guest.js");
/* harmony import */ var _Components_Logo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/Components/Logo */ "./resources/js/Components/Logo.js");
/* harmony import */ var _Components_Label__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/Components/Label */ "./resources/js/Components/Label.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);










function Register(props) {
  var _useForm = (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_4__.useForm)({
    name: "",
    email: "",
    password: "",
    password_confirmation: ""
  }),
      data = _useForm.data,
      setData = _useForm.setData,
      post = _useForm.post,
      processing = _useForm.processing,
      errors = _useForm.errors,
      reset = _useForm.reset;

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    return function () {
      reset("password", "password_confirmation");
    };
  }, []);

  var onHandleChange = function onHandleChange(event) {
    setData(event.target.name, event.target.type === "checkbox" ? event.target.checked : event.target.value);
  };

  var submit = function submit(e) {
    e.preventDefault();
    post(route("register"));
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_Layouts_Guest__WEBPACK_IMPORTED_MODULE_5__["default"], {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_4__.Head, {
      title: "\uD68C\uC6D0\uAC00\uC785"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: "mx-auto w-full max-w-sm lg:w-96",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: "flex space-x-3 items-center",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Components_Logo__WEBPACK_IMPORTED_MODULE_6__["default"], {
            className: "w-12 h-12"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
            className: "text-4xl font-extrabold",
            children: "MadStone"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h2", {
          className: "mt-6 text-3xl font-extrabold text-gray-900",
          children: "\uD68C\uC6D0\uAC00\uC785"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
        className: "mt-8",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: "mt-6",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Components_ValidationErrors__WEBPACK_IMPORTED_MODULE_3__["default"], {
            errors: errors
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("form", {
            onSubmit: submit,
            className: "space-y-6",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Components_Label__WEBPACK_IMPORTED_MODULE_7__["default"], {
                htmlFor: "name",
                value: "\uC774\uB984",
                children: "\uC774\uB984"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                className: "mt-1",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Components_Input__WEBPACK_IMPORTED_MODULE_2__["default"], {
                  type: "text",
                  name: "name",
                  value: data.name,
                  className: "mt-1 block w-full",
                  autoComplete: "name",
                  isFocused: true,
                  handleChange: onHandleChange,
                  required: true
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Components_Label__WEBPACK_IMPORTED_MODULE_7__["default"], {
                htmlFor: "email",
                value: "\uC774\uBA54\uC77C",
                children: "\uC774\uBA54\uC77C"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                className: "mt-1",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Components_Input__WEBPACK_IMPORTED_MODULE_2__["default"], {
                  type: "text",
                  name: "email",
                  value: data.email,
                  className: "mt-1 block w-full",
                  autoComplete: "username",
                  isFocused: true,
                  handleChange: onHandleChange
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
              className: "space-y-1",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Components_Label__WEBPACK_IMPORTED_MODULE_7__["default"], {
                htmlFor: "password",
                value: "\uBE44\uBC00\uBC88\uD638",
                children: "\uBE44\uBC00\uBC88\uD638"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                className: "mt-1",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Components_Input__WEBPACK_IMPORTED_MODULE_2__["default"], {
                  type: "password",
                  name: "password",
                  value: data.password,
                  className: "mt-1 block w-full",
                  autoComplete: "current-password",
                  handleChange: onHandleChange
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
              className: "space-y-1",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Components_Label__WEBPACK_IMPORTED_MODULE_7__["default"], {
                htmlFor: "password_confirmation",
                value: "\uBE44\uBC00\uBC88\uD638 \uD655\uC778",
                children: "\uBE44\uBC00\uBC88\uD638 \uD655\uC778"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                className: "mt-1",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Components_Input__WEBPACK_IMPORTED_MODULE_2__["default"], {
                  type: "password",
                  name: "password_confirmation",
                  value: data.password_confirmation,
                  className: "mt-1 block w-full",
                  handleChange: onHandleChange,
                  required: true
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Components_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
                processing: processing,
                children: "\uD68C\uC6D0\uAC00\uC785"
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: "mt-6 relative",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
              className: "absolute inset-0 flex items-center",
              "aria-hidden": "true",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                className: "w-full border-t border-gray-300"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
              className: "relative flex justify-center text-sm",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
                className: "px-2 bg-white text-gray-500",
                children: "\uC774\uBBF8 \uACC4\uC815\uC774 \uC788\uC73C\uC2E0\uAC00\uC694?"
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
            className: "flex justify-center my-6",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_4__.Link, {
              href: route("login"),
              className: "underline text-sm text-gray-600 hover:text-gray-900",
              children: "\uB85C\uADF8\uC778"
            })
          })]
        })
      })]
    })]
  });
}

/***/ }),

/***/ "./resources/js/Pages/Auth/ResetPassword.js":
/*!**************************************************!*\
  !*** ./resources/js/Pages/Auth/ResetPassword.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ResetPassword)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Components/Button */ "./resources/js/Components/Button.js");
/* harmony import */ var _Components_Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Components/Input */ "./resources/js/Components/Input.js");
/* harmony import */ var _Components_Label__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Components/Label */ "./resources/js/Components/Label.js");
/* harmony import */ var _Components_ValidationErrors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Components/ValidationErrors */ "./resources/js/Components/ValidationErrors.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @inertiajs/inertia-react */ "@inertiajs/inertia-react");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Layouts_Guest__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/Layouts/Guest */ "./resources/js/Layouts/Guest.js");
/* harmony import */ var _Components_Logo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/Components/Logo */ "./resources/js/Components/Logo.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);










function ResetPassword(props) {
  var token = props.token,
      email = props.email;

  var _useForm = (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_5__.useForm)({
    token: token,
    email: email,
    password: "",
    password_confirmation: ""
  }),
      data = _useForm.data,
      setData = _useForm.setData,
      post = _useForm.post,
      processing = _useForm.processing,
      errors = _useForm.errors,
      reset = _useForm.reset;

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    return function () {
      reset("password", "password_confirmation");
    };
  }, []);

  var onHandleChange = function onHandleChange(event) {
    setData(event.target.name, event.target.value);
  };

  var submit = function submit(e) {
    e.preventDefault();
    post(route("password.update"));
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_Layouts_Guest__WEBPACK_IMPORTED_MODULE_6__["default"], {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_5__.Head, {
      title: "Reset Password"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: "mx-auto w-full max-w-sm lg:w-96",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: "flex space-x-3 items-center",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Components_Logo__WEBPACK_IMPORTED_MODULE_7__["default"], {
            className: "w-12 h-12"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
            className: "text-4xl font-extrabold",
            children: "MadStone"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h2", {
          className: "mt-6 text-3xl font-extrabold text-gray-900",
          children: "\uBE44\uBC00\uBC88\uD638 \uC7AC\uC124\uC815"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: "mt-8",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Components_ValidationErrors__WEBPACK_IMPORTED_MODULE_4__["default"], {
          errors: errors
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("form", {
          onSubmit: submit,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Components_Label__WEBPACK_IMPORTED_MODULE_3__["default"], {
              forInput: "email",
              value: "\uC774\uBA54\uC77C"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Components_Input__WEBPACK_IMPORTED_MODULE_2__["default"], {
              type: "email",
              name: "email",
              value: data.email,
              className: "mt-1 block w-full",
              autoComplete: "username",
              handleChange: onHandleChange
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: "mt-4",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Components_Label__WEBPACK_IMPORTED_MODULE_3__["default"], {
              forInput: "password",
              value: "\uBE44\uBC00\uBC88\uD638"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Components_Input__WEBPACK_IMPORTED_MODULE_2__["default"], {
              type: "password",
              name: "password",
              value: data.password,
              className: "mt-1 block w-full",
              autoComplete: "new-password",
              isFocused: true,
              handleChange: onHandleChange
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: "mt-4",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Components_Label__WEBPACK_IMPORTED_MODULE_3__["default"], {
              forInput: "password_confirmation",
              value: "\uBE44\uBC00\uBC88\uD638 \uD655\uC778"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Components_Input__WEBPACK_IMPORTED_MODULE_2__["default"], {
              type: "password",
              name: "password_confirmation",
              value: data.password_confirmation,
              className: "mt-1 block w-full",
              autoComplete: "new-password",
              handleChange: onHandleChange
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
            className: "flex items-center justify-end mt-6",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Components_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
              processing: processing,
              children: "\uBE44\uBC00\uBC88\uD638 \uC7AC\uC124\uC815"
            })
          })]
        })]
      })]
    })]
  });
}

/***/ }),

/***/ "./resources/js/Pages/Auth/VerifyEmail.js":
/*!************************************************!*\
  !*** ./resources/js/Pages/Auth/VerifyEmail.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ VerifyEmail)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Components/Button */ "./resources/js/Components/Button.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia-react */ "@inertiajs/inertia-react");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Layouts_Guest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Layouts/Guest */ "./resources/js/Layouts/Guest.js");
/* harmony import */ var _Components_Logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Components/Logo */ "./resources/js/Components/Logo.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);







function VerifyEmail(props) {
  var status = props.status;

  var _useForm = (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__.useForm)(),
      post = _useForm.post,
      processing = _useForm.processing;

  var submit = function submit(e) {
    e.preventDefault();
    post(route("verification.send"));
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_Layouts_Guest__WEBPACK_IMPORTED_MODULE_3__["default"], {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__.Head, {
      title: "\uC774\uBA54\uC77C \uD655\uC778"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "w-full max-w-sm mx-auto lg:w-96",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "flex items-center space-x-3",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Components_Logo__WEBPACK_IMPORTED_MODULE_4__["default"], {
            className: "w-12 h-12"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
            className: "text-4xl font-extrabold",
            children: "MadStone"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h2", {
          className: "mt-6 text-3xl font-extrabold text-gray-900",
          children: "\uC774\uBA54\uC77C \uD655\uC778"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "mt-8",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "mb-4 text-sm text-gray-600",
          children: "\uAC00\uC785\uD574\uC8FC\uC154\uC11C \uAC10\uC0AC\uD569\uB2C8\uB2E4! \uC2DC\uC791\uD558\uAE30 \uC804\uC5D0 \uC774\uBA54\uC77C\uB85C \uC804\uB2EC\uB41C \uB9C1\uD06C\uB97C \uD074\uB9AD\uD558\uC5EC \uC778\uC99D\uC744 \uC644\uB8CC\uD574\uC8FC\uC138\uC694. \uD639\uC2DC \uC774\uBA54\uC77C\uC744 \uBC1B\uC9C0 \uBABB\uD588\uB2E4\uBA74 \uC7AC\uC804\uC1A1 \uBC84\uD2BC\uC744 \uB20C\uB7EC\uC8FC\uC138\uC694."
        }), status === "verification-link-sent" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "mb-4 text-sm font-medium text-green-600",
          children: "\uB4F1\uB85D\uB41C \uC8FC\uC18C\uB85C \uC0C8 \uC774\uBA54\uC77C \uD655\uC778 \uB9C1\uD06C\uAC00 \uC804\uC1A1\uB418\uC5C8\uC2B5\uB2C8\uB2E4."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("form", {
          onSubmit: submit,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "flex items-center justify-between mt-4",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Components_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
              processing: processing,
              children: "\uC774\uBA54\uC77C \uD655\uC778 \uC7AC\uC804\uC1A1"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__.Link, {
              href: route("logout"),
              method: "post",
              as: "button",
              className: "text-sm text-gray-600 underline hover:text-gray-900",
              children: "\uB85C\uADF8\uC544\uC6C3"
            })]
          })
        })]
      })]
    })]
  });
}

/***/ }),

/***/ "./resources/js/Pages/Board.js":
/*!*************************************!*\
  !*** ./resources/js/Pages/Board.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Board)
/* harmony export */ });
/* harmony import */ var _Layouts_Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Layouts/Layout */ "./resources/js/Layouts/Layout.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-react */ "@inertiajs/inertia-react");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function Board(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_Layouts_Layout__WEBPACK_IMPORTED_MODULE_0__["default"], _objectSpread(_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.Head, {
      title: "\uC790\uC720 \uAC8C\uC2DC\uD310"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "relative flex items-top justify-center min-h-screen sm:items-center sm:pt-0",
      children: "SSR"
    })]
  }));
}

/***/ }),

/***/ "./resources/js/Pages/Dashboard.js":
/*!*****************************************!*\
  !*** ./resources/js/Pages/Dashboard.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Dashboard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-react */ "@inertiajs/inertia-react");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Layouts_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Layouts/Layout */ "./resources/js/Layouts/Layout.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function Dashboard(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_Layouts_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], _objectSpread(_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.Head, {
      title: "Dashboard"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "py-12",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "max-w-7xl mx-auto sm:px-6 lg:px-8",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "bg-white overflow-hidden shadow-sm sm:rounded-lg",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "p-6 bg-white border-b border-gray-200",
            children: "You're logged in!"
          })
        })
      })
    })]
  }));
}

/***/ }),

/***/ "./resources/js/Pages/Home.js":
/*!************************************!*\
  !*** ./resources/js/Pages/Home.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-react */ "@inertiajs/inertia-react");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Layouts_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Layouts/Layout */ "./resources/js/Layouts/Layout.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function Home(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_Layouts_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], _objectSpread(_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.Head, {
      title: "\uD648"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "relative flex items-top justify-center min-h-screen sm:items-center sm:pt-0",
      children: "SSR"
    })]
  }));
}

/***/ }),

/***/ "./resources/js/Pages/LocalGathering.js":
/*!**********************************************!*\
  !*** ./resources/js/Pages/LocalGathering.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LocalGathering)
/* harmony export */ });
/* harmony import */ var _Layouts_Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Layouts/Layout */ "./resources/js/Layouts/Layout.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-react */ "@inertiajs/inertia-react");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function LocalGathering(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_Layouts_Layout__WEBPACK_IMPORTED_MODULE_0__["default"], _objectSpread(_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.Head, {
      title: "\uC9C0\uC5ED\uBAA8\uC784"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "relative flex items-top justify-center min-h-screen sm:items-center sm:pt-0",
      children: "SSR"
    })]
  }));
}

/***/ }),

/***/ "./resources/js/Providers/HeaderHeightProvider.js":
/*!********************************************************!*\
  !*** ./resources/js/Providers/HeaderHeightProvider.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderHeightContext": () => (/* binding */ HeaderHeightContext),
/* harmony export */   "HeaderHeightProvider": () => (/* binding */ HeaderHeightProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var HeaderHeightContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
  headerHeight: 0,
  setHeaderHeight: function setHeaderHeight() {}
});
var HeaderHeightProvider = function HeaderHeightProvider(_ref) {
  var children = _ref.children;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      headerHeight = _useState2[0],
      setHeaderHeight = _useState2[1];

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(HeaderHeightContext.Provider, {
    value: {
      headerHeight: headerHeight,
      setHeaderHeight: setHeaderHeight
    },
    children: children
  });
};

/***/ }),

/***/ "./resources/js/Utils/auth.utils.js":
/*!******************************************!*\
  !*** ./resources/js/Utils/auth.utils.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAvatar": () => (/* binding */ getAvatar)
/* harmony export */ });
var getAvatar = function getAvatar(username) {
  return encodeURI("https://ui-avatars.com/api/?name=".concat(username, "&color=7F9CF5&background=EBF4FF"));
};

/***/ }),

/***/ "./resources/js/Pages sync recursive ^\\.\\/.*$":
/*!*******************************************!*\
  !*** ./resources/js/Pages/ sync ^\.\/.*$ ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./Auth/ConfirmPassword": "./resources/js/Pages/Auth/ConfirmPassword.js",
	"./Auth/ConfirmPassword.js": "./resources/js/Pages/Auth/ConfirmPassword.js",
	"./Auth/ForgotPassword": "./resources/js/Pages/Auth/ForgotPassword.js",
	"./Auth/ForgotPassword.js": "./resources/js/Pages/Auth/ForgotPassword.js",
	"./Auth/Login": "./resources/js/Pages/Auth/Login.js",
	"./Auth/Login.js": "./resources/js/Pages/Auth/Login.js",
	"./Auth/Register": "./resources/js/Pages/Auth/Register.js",
	"./Auth/Register.js": "./resources/js/Pages/Auth/Register.js",
	"./Auth/ResetPassword": "./resources/js/Pages/Auth/ResetPassword.js",
	"./Auth/ResetPassword.js": "./resources/js/Pages/Auth/ResetPassword.js",
	"./Auth/VerifyEmail": "./resources/js/Pages/Auth/VerifyEmail.js",
	"./Auth/VerifyEmail.js": "./resources/js/Pages/Auth/VerifyEmail.js",
	"./Board": "./resources/js/Pages/Board.js",
	"./Board.js": "./resources/js/Pages/Board.js",
	"./Dashboard": "./resources/js/Pages/Dashboard.js",
	"./Dashboard.js": "./resources/js/Pages/Dashboard.js",
	"./Home": "./resources/js/Pages/Home.js",
	"./Home.js": "./resources/js/Pages/Home.js",
	"./LocalGathering": "./resources/js/Pages/LocalGathering.js",
	"./LocalGathering.js": "./resources/js/Pages/LocalGathering.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./resources/js/Pages sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "@fortawesome/pro-regular-svg-icons":
/*!*****************************************************!*\
  !*** external "@fortawesome/pro-regular-svg-icons" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@fortawesome/pro-regular-svg-icons");

/***/ }),

/***/ "@fortawesome/pro-solid-svg-icons":
/*!***************************************************!*\
  !*** external "@fortawesome/pro-solid-svg-icons" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@fortawesome/pro-solid-svg-icons");

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "@headlessui/react":
/*!************************************!*\
  !*** external "@headlessui/react" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@headlessui/react");

/***/ }),

/***/ "@inertiajs/inertia-react":
/*!*******************************************!*\
  !*** external "@inertiajs/inertia-react" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@inertiajs/inertia-react");

/***/ }),

/***/ "@inertiajs/server":
/*!************************************!*\
  !*** external "@inertiajs/server" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@inertiajs/server");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom/server");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "ziggy-js":
/*!***************************!*\
  !*** external "ziggy-js" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("ziggy-js");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*****************************!*\
  !*** ./resources/js/ssr.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia-react */ "@inertiajs/inertia-react");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _inertiajs_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @inertiajs/server */ "@inertiajs/server");
/* harmony import */ var _inertiajs_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_server__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ziggy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ziggy-js */ "ziggy-js");
/* harmony import */ var ziggy_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ziggy_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







_inertiajs_server__WEBPACK_IMPORTED_MODULE_3___default()(function (page) {
  return (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__.createInertiaApp)({
    page: page,
    render: (react_dom_server__WEBPACK_IMPORTED_MODULE_1___default().renderToString),
    resolve: function resolve(name) {
      return __webpack_require__("./resources/js/Pages sync recursive ^\\.\\/.*$")("./".concat(name));
    },
    setup: function setup(_ref) {
      var App = _ref.App,
          props = _ref.props;

      var Ziggy = _objectSpread(_objectSpread({}, props.initialPage.props.ziggy), {}, {
        // Build the location, since there is
        // no window.location in Node.
        location: new URL(props.initialPage.props.ziggy.url)
      });

      global.route = function (name, params, absolute) {
        var config = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : Ziggy;
        return ziggy_js__WEBPACK_IMPORTED_MODULE_4___default()(name, params, absolute, config);
      };

      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(App, _objectSpread({}, props));
    }
  });
});
})();

/******/ })()
;