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
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/styles */ "./resources/js/styles.js");
/* harmony import */ var _Utils_commons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Utils/commons */ "./resources/js/Utils/commons.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




function Button(_ref) {
  var _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'submit' : _ref$type,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      processing = _ref.processing,
      children = _ref.children;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
    type: type,
    className: (0,_Utils_commons__WEBPACK_IMPORTED_MODULE_1__.classNames)('w-full flex justify-center py-2 px-4 rounded-md text-sm font-medium', className, _styles__WEBPACK_IMPORTED_MODULE_0__.buttonColor.solid, processing && 'opacity-25'),
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
    className: "border-gray-300 rounded shadow-sm text-neutral-600 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50",
    onChange: function onChange(e) {
      return handleChange(e);
    }
  });
}

/***/ }),

/***/ "./resources/js/Components/CreatePost/GifPreview.js":
/*!**********************************************************!*\
  !*** ./resources/js/Components/CreatePost/GifPreview.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GifPreview)
/* harmony export */ });
/* harmony import */ var _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/pro-solid-svg-icons */ "@fortawesome/pro-solid-svg-icons");
/* harmony import */ var _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




function GifPreview(_ref) {
  var image = _ref.image,
      deleteImage = _ref.deleteImage;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "flex w-full space-x-2 overflow-x-auto bg-transparent flex-nowrap",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "relative inline-block w-full overflow-hidden border border-gray-300 rounded-md dark:border-neutral-700 bg-gray-50 dark:bg-neutral-800 max-h-80 shrink-0",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
        onClick: function onClick() {
          return deleteImage(image.id);
        },
        type: "button",
        className: "absolute z-10 inline-flex items-center p-1 text-white bg-gray-600 border border-transparent rounded-full shadow-sm top-1 left-1 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
          icon: _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faXmark,
          className: "w-5 h-5"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
        src: image.preview,
        alt: image.file.name,
        className: "object-contain w-full h-full"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
        className: "absolute z-10 bottom-3 right-3 inline-flex items-center px-2 py-0.5 rounded text-xs bg-gray-600 text-white font-semibold",
        children: "GIF"
      })]
    })
  });
}

/***/ }),

/***/ "./resources/js/Components/CreatePost/ImagePreview.js":
/*!************************************************************!*\
  !*** ./resources/js/Components/CreatePost/ImagePreview.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ImagePreview)
/* harmony export */ });
/* harmony import */ var _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/pro-solid-svg-icons */ "@fortawesome/pro-solid-svg-icons");
/* harmony import */ var _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




function ImagePreview(_ref) {
  var image = _ref.image,
      deleteImage = _ref.deleteImage;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "relative inline-block w-32 h-32 overflow-hidden rounded-md shrink-0",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
      onClick: function onClick() {
        return deleteImage(image.id);
      },
      type: "button",
      className: "absolute inline-flex items-center p-1 text-white bg-gray-600 border border-transparent rounded-full shadow-sm top-1 left-1 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
        icon: _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faXmark,
        className: "w-5 h-5"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
      src: image.preview,
      alt: image.file.name,
      className: "object-cover w-full h-full"
    })]
  });
}

/***/ }),

/***/ "./resources/js/Components/CreatePost/SelectBoard.js":
/*!***********************************************************!*\
  !*** ./resources/js/Components/CreatePost/SelectBoard.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SelectBoard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @heroicons/react/solid */ "@heroicons/react/solid");
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @headlessui/react */ "@headlessui/react");
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Utils_commons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Utils/commons */ "./resources/js/Utils/commons.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);








function SelectBoard(_ref) {
  var boards = _ref.boards,
      board = _ref.board,
      setData = _ref.setData;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Listbox, {
    value: board,
    onChange: function onChange(value) {
      return setData('board', value);
    },
    children: function children(_ref2) {
      var open = _ref2.open;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "relative w-64 mt-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Listbox.Button, {
            className: "w-full py-2 pl-3 pr-10 text-left bg-white border border-gray-300 rounded-md relativew-full dark:border-neutral-700 dark:bg-neutral-800 focus:outline-none focus:text-gray-900 dark:focus:text-white focus:placeholder-gray-400 focus:ring-1 focus:ring-gray-500 focus:border-gray-500 sm:text-sm",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "flex items-center dark:text-gray-300",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                icon: board.icon,
                className: "w-4 h-4"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                className: "ml-3 truncate",
                children: board.title
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
              className: "absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1__.SelectorIcon, {
                className: "w-5 h-5 text-gray-400",
                "aria-hidden": "true"
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition, {
            show: open,
            as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
            leave: "transition ease-in duration-100",
            leaveFrom: "opacity-100",
            leaveTo: "opacity-0",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Listbox.Options, {
              className: "absolute z-20 w-full py-1 mt-1 overflow-auto text-base text-gray-700 bg-white rounded-md shadow-lg dark:bg-neutral-800 dark:text-white dark:border dark:border-neutral-700 max-h-56 ring-1 ring-black ring-opacity-5 focus:outline-none",
              children: boards.map(function (board) {
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Listbox.Option, {
                  className: function className(_ref3) {
                    var selected = _ref3.selected;
                    return (0,_Utils_commons__WEBPACK_IMPORTED_MODULE_4__.classNames)('relative py-2 pl-3 text-gray-700 cursor-default select-none pr-9 dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-700 focus:outline-none focus:bg-gray-100 dark:focus:bg-neutral-700', selected ? 'bg-gray-100 dark:bg-neutral-700' : '');
                  },
                  value: board,
                  children: function children(_ref4) {
                    var selected = _ref4.selected;
                    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                        className: "flex items-center",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                          icon: board.icon,
                          className: "w-4 h-4"
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                          className: (0,_Utils_commons__WEBPACK_IMPORTED_MODULE_4__.classNames)('ml-3 truncate', selected && 'font-semibold'),
                          children: board.title
                        })]
                      }), selected && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                        className: "absolute inset-y-0 right-0 flex items-center pr-4 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-700 focus:outline-none focus:bg-gray-100 dark:focus:bg-neutral-700",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1__.CheckIcon, {
                          className: "w-5 h-5",
                          "aria-hidden": "true"
                        })
                      })]
                    });
                  }
                }, board.id);
              })
            })
          })]
        })
      });
    }
  });
}

/***/ }),

/***/ "./resources/js/Components/CreatePost/VideoThumbnail.js":
/*!**************************************************************!*\
  !*** ./resources/js/Components/CreatePost/VideoThumbnail.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ VideoThumbnail)
/* harmony export */ });
/* harmony import */ var _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/pro-solid-svg-icons */ "@fortawesome/pro-solid-svg-icons");
/* harmony import */ var _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




function VideoThumbnail(_ref) {
  var video = _ref.video,
      setData = _ref.setData,
      shouldSticky = _ref.shouldSticky;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "flex w-full space-x-2 overflow-x-auto bg-transparent flex-nowrap",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "relative inline-block w-full overflow-hidden border border-gray-300 rounded-md dark:border-neutral-700 bg-gray-50 dark:bg-neutral-800 max-h-80 shrink-0",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
        onClick: function onClick() {
          return setData('video', null);
        },
        type: "button",
        className: "absolute z-10 inline-flex items-center p-1 text-white bg-gray-600 border border-transparent rounded-full shadow-sm top-1 left-1 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
          icon: _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faXmark,
          className: "w-5 h-5"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("video", {
        src: video.preview,
        alt: video.file.name,
        className: "w-full h-full max-w-full",
        onLoadedData: function onLoadedData() {
          return shouldSticky();
        },
        muted: true,
        autoPlay: true,
        loop: true
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
        className: "absolute z-10 bottom-3 right-3 inline-flex items-center px-2 py-0.5 rounded text-xs bg-gray-600 text-white font-semibold",
        children: "VIDEO"
      })]
    })
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
      align = _ref3$align === void 0 ? 'right' : _ref3$align,
      _ref3$width = _ref3.width,
      width = _ref3$width === void 0 ? '48' : _ref3$width,
      _ref3$contentClasses = _ref3.contentClasses,
      contentClasses = _ref3$contentClasses === void 0 ? 'py-1 bg-white text-gray-700 dark:bg-neutral-800 dark:text-white dark:border dark:border-neutral-700' : _ref3$contentClasses,
      children = _ref3.children;

  var _useContext2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(DropDownContext),
      open = _useContext2.open,
      setOpen = _useContext2.setOpen;

  var alignmentClasses = 'origin-top';

  if (align === 'left') {
    alignmentClasses = 'origin-top-left left-0';
  } else if (align === 'right') {
    alignmentClasses = 'origin-top-right right-0';
  }

  var widthClasses = '';

  if (width === '48') {
    widthClasses = 'w-48';
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
      method = _ref4$method === void 0 ? 'get' : _ref4$method,
      _ref4$as = _ref4.as,
      as = _ref4$as === void 0 ? 'a' : _ref4$as,
      children = _ref4.children;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
    href: href,
    method: method,
    as: as,
    className: "block w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 transition duration-150 ease-in-out dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-700 focus:outline-none focus:bg-gray-100 dark:focus:bg-neutral-700",
    children: children
  });
};

Dropdown.Trigger = Trigger;
Dropdown.Content = Content;
Dropdown.Link = DropdownLink;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dropdown);

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
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/styles */ "./resources/js/styles.js");
/* harmony import */ var _Utils_commons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Utils/commons */ "./resources/js/Utils/commons.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




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
  var input = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    if (isFocused) {
      input.current.focus();
    }
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    className: "flex flex-col items-start",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input", {
      type: type,
      name: name,
      value: value,
      className: (0,_Utils_commons__WEBPACK_IMPORTED_MODULE_1__.classNames)('rounded-md', className, _styles__WEBPACK_IMPORTED_MODULE_0__.selection.primary, _styles__WEBPACK_IMPORTED_MODULE_0__.inputColor.outline),
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

/***/ "./resources/js/Components/PostList.js":
/*!*********************************************!*\
  !*** ./resources/js/Components/PostList.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PostList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @headlessui/react */ "@headlessui/react");
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/pro-solid-svg-icons */ "@fortawesome/pro-solid-svg-icons");
/* harmony import */ var _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Utils_commons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Utils/commons */ "./resources/js/Utils/commons.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/styles */ "./resources/js/styles.js");
/* harmony import */ var _Utils_auth_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/Utils/auth.utils */ "./resources/js/Utils/auth.utils.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @inertiajs/inertia-react */ "@inertiajs/inertia-react");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var moment_locale_ko__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment/locale/ko */ "moment/locale/ko");
/* harmony import */ var moment_locale_ko__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment_locale_ko__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ShowPost_Video__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ShowPost/Video */ "./resources/js/Components/ShowPost/Video.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);













var MemoVideo = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(function (_ref) {
  var video = _ref.video;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_ShowPost_Video__WEBPACK_IMPORTED_MODULE_10__["default"], {
    video: video
  });
});
function PostList(_ref2) {
  var data = _ref2.data;
  var current_page = data.current_page,
      posts = data.data,
      total = data.total;
  console.log(posts);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("h1", {
      className: "sr-only",
      children: "\uCD5C\uADFC \uAC8C\uC2DC\uBB3C"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("ul", {
      role: "list",
      className: "space-y-4 divide-y dark:divide-neutral-700",
      children: posts.map(function (post, index) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("li", {
          className: "p-6",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("article", {
            "aria-labelledby": "".concat(post.user.name, "\uC758 \uAC8C\uC2DC\uAE00"),
            className: "flex space-x-4",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
              className: "flex-shrink-0",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("img", {
                className: "w-12 h-12 rounded-full",
                src: (0,_Utils_auth_utils__WEBPACK_IMPORTED_MODULE_6__.getAvatar)(post.user.name),
                alt: "".concat(post.user.name, "\uC758 \uD504\uB85C\uD544")
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
              className: "flex-1",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
                  className: "flex space-x-3",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
                    className: "flex-1 min-w-0",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("p", {
                      className: (0,_Utils_commons__WEBPACK_IMPORTED_MODULE_4__.classNames)('text-base font-medium', _styles__WEBPACK_IMPORTED_MODULE_5__.textColor.primary),
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_7__.Link, {
                        href: '#',
                        className: "hover:underline",
                        children: post.user.name
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("p", {
                      className: "text-sm text-gray-500 dark:text-gray-300",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("time", {
                        dateTime: post.created_at,
                        children: moment__WEBPACK_IMPORTED_MODULE_8___default()(post.created_at).fromNow()
                      })
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
                    className: "flex self-center flex-shrink-0",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Menu, {
                      as: "div",
                      className: "relative inline-block text-left",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Menu.Button, {
                          className: (0,_Utils_commons__WEBPACK_IMPORTED_MODULE_4__.classNames)('flex items-center p-2 -m-2 rounded-full', _styles__WEBPACK_IMPORTED_MODULE_5__.iconColor.solid),
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", {
                            className: "sr-only",
                            children: "\uBA54\uB274 \uC5F4\uAE30"
                          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                            icon: _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faEllipsis,
                            className: "w-5 h-5",
                            "aria-hidden": "true"
                          })]
                        })
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Transition, {
                        as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
                        enter: "transition ease-out duration-100",
                        enterFrom: "transform opacity-0 scale-95",
                        enterTo: "transform opacity-100 scale-100",
                        leave: "transition ease-in duration-75",
                        leaveFrom: "transform opacity-100 scale-100",
                        leaveTo: "transform opacity-0 scale-95",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Menu.Items, {
                          className: "absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg dark:bg-neutral-800 ring-1 ring-black ring-opacity-5 focus:outline-none",
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
                            className: "py-1",
                            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Menu.Item, {
                              children: function children(_ref3) {
                                var active = _ref3.active;
                                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("button", {
                                  className: (0,_Utils_commons__WEBPACK_IMPORTED_MODULE_4__.classNames)(active ? "bg-gray-100 dark:bg-neutral-700 ".concat(_styles__WEBPACK_IMPORTED_MODULE_5__.textColor.primary) : _styles__WEBPACK_IMPORTED_MODULE_5__.textColor.secondary, 'flex px-4 py-2 text-sm w-full'),
                                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", {
                                    children: "Add to favorites"
                                  })
                                });
                              }
                            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Menu.Item, {
                              children: function children(_ref4) {
                                var active = _ref4.active;
                                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("button", {
                                  className: (0,_Utils_commons__WEBPACK_IMPORTED_MODULE_4__.classNames)(active ? "bg-gray-100 dark:bg-neutral-700 ".concat(_styles__WEBPACK_IMPORTED_MODULE_5__.textColor.primary) : _styles__WEBPACK_IMPORTED_MODULE_5__.textColor.secondary, 'flex px-4 py-2 text-sm w-full'),
                                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", {
                                    children: "Embed"
                                  })
                                });
                              }
                            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Menu.Item, {
                              children: function children(_ref5) {
                                var active = _ref5.active;
                                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("button", {
                                  className: (0,_Utils_commons__WEBPACK_IMPORTED_MODULE_4__.classNames)(active ? "bg-gray-100 dark:bg-neutral-700 ".concat(_styles__WEBPACK_IMPORTED_MODULE_5__.textColor.primary) : _styles__WEBPACK_IMPORTED_MODULE_5__.textColor.secondary, 'flex px-4 py-2 text-sm w-full'),
                                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", {
                                    children: "Report content"
                                  })
                                });
                              }
                            })]
                          })
                        })
                      })]
                    })
                  })]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
                className: (0,_Utils_commons__WEBPACK_IMPORTED_MODULE_4__.classNames)('mt-4 space-y-4 text-sm', _styles__WEBPACK_IMPORTED_MODULE_5__.textColor.primary),
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
                  children: post.content
                }), post.video && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(MemoVideo, {
                  video: post.video
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
                className: "flex justify-between mt-6 space-x-8",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
                  className: "flex space-x-6",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", {
                    className: "inline-flex items-center text-sm",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("button", {
                      type: "button",
                      className: (0,_Utils_commons__WEBPACK_IMPORTED_MODULE_4__.classNames)('inline-flex space-x-2', _styles__WEBPACK_IMPORTED_MODULE_5__.iconColor.solid),
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                        icon: _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faThumbsUp,
                        className: "w-5 h-5",
                        "aria-hidden": "true"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", {
                        className: (0,_Utils_commons__WEBPACK_IMPORTED_MODULE_4__.classNames)('font-medium', _styles__WEBPACK_IMPORTED_MODULE_5__.textColor.secondary),
                        children: "29"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", {
                        className: "sr-only",
                        children: "likes"
                      })]
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", {
                    className: "inline-flex items-center text-sm",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("button", {
                      type: "button",
                      className: (0,_Utils_commons__WEBPACK_IMPORTED_MODULE_4__.classNames)('inline-flex space-x-2', _styles__WEBPACK_IMPORTED_MODULE_5__.iconColor.solid),
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                        icon: _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faMessageDots,
                        className: "w-5 h-5",
                        "aria-hidden": "true"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", {
                        className: (0,_Utils_commons__WEBPACK_IMPORTED_MODULE_4__.classNames)('font-medium', _styles__WEBPACK_IMPORTED_MODULE_5__.textColor.secondary),
                        children: "11"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", {
                        className: "sr-only",
                        children: "replies"
                      })]
                    })
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
                  className: "flex text-sm",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", {
                    className: "inline-flex items-center text-sm",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("button", {
                      type: "button",
                      className: (0,_Utils_commons__WEBPACK_IMPORTED_MODULE_4__.classNames)('inline-flex space-x-2', _styles__WEBPACK_IMPORTED_MODULE_5__.iconColor.solid),
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                        icon: _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faShareNodes,
                        className: "w-5 h-5",
                        "aria-hidden": "true"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", {
                        className: (0,_Utils_commons__WEBPACK_IMPORTED_MODULE_4__.classNames)('font-medium', _styles__WEBPACK_IMPORTED_MODULE_5__.textColor.secondary),
                        children: "\uACF5\uC720"
                      })]
                    })
                  })
                })]
              })]
            })]
          })
        }, index);
      })
    })]
  });
}

/***/ }),

/***/ "./resources/js/Components/ShowPost/Video.js":
/*!***************************************************!*\
  !*** ./resources/js/Components/ShowPost/Video.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Video)
/* harmony export */ });
/* harmony import */ var _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/pro-solid-svg-icons */ "@fortawesome/pro-solid-svg-icons");
/* harmony import */ var _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var formatTime = function formatTime(seconds) {
  var date = new Date(seconds * 1000);
  var mm = date.getUTCMinutes();
  var ss = date.getSeconds();
  var formattedMinute = mm + ':';
  var formattedSecond = (ss < 10 ? '0' : '') + ss;
  return formattedMinute + formattedSecond;
};

function Video(_ref) {
  var video = _ref.video;
  var videoRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isPlaying = _useState2[0],
      setIsPlaying = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isMuted = _useState4[0],
      setIsMuted = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),
      _useState6 = _slicedToArray(_useState5, 2),
      currentTime = _useState6[0],
      setCurrentTime = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),
      _useState8 = _slicedToArray(_useState7, 2),
      duration = _useState8[0],
      setDuration = _useState8[1];

  var togglePlay = function togglePlay() {
    setIsPlaying(!isPlaying);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    if (videoRef.current) {
      isPlaying ? videoRef.current.play() : videoRef.current.pause();
    }
  }, [isPlaying, videoRef.current]);

  var onTimeUpdate = function onTimeUpdate() {
    setCurrentTime(Math.floor(videoRef.current.currentTime));
  };

  var handleSeek = function handleSeek(event) {
    var progress = Math.floor(Number(event.target.value));
    setCurrentTime(progress);
    videoRef.current.currentTime = currentTime;
  };

  var toggleMute = function toggleMute() {
    setIsMuted(!isMuted);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    if (videoRef.current) {
      isMuted ? videoRef.current.muted = true : videoRef.current.muted = false;
    }
  }, [isMuted, videoRef.current]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    className: "flex",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "relative inline-flex justify-center w-full overflow-hidden border border-gray-300 rounded-md dark:border-neutral-700 bg-gray-50 dark:bg-neutral-800 shrink-0",
      style: {
        maxHeight: '400px'
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("video", {
        ref: videoRef,
        className: "h-full max-w-full",
        src: '/storage/' + video.path,
        onClick: togglePlay,
        onTimeUpdate: onTimeUpdate,
        onLoadedData: function onLoadedData(event) {
          return setDuration(Math.ceil(event.target.duration));
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("source", {
          poster: '/storage/' + video.thumbnail_path
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "absolute w-full px-8 bottom-7",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "flex flex-wrap items-center w-full p-3 space-x-3 bg-black bg-opacity-25 rounded-lg shadow",
          style: {
            border: '1px solid rgba(255,255,255,0.2)'
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
              onClick: togglePlay,
              children: !isPlaying ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
                icon: _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faPlay,
                className: "w-5 h-5 text-white"
              }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
                icon: _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faPause,
                className: "w-5 h-5 text-white"
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "space-x-1 text-white",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
              children: formatTime(currentTime)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
              children: "/"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
              children: formatTime(duration)
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input", {
            className: "flex-1 h-1 bg-white appearance-none bg-opacity-20 rounded-2xl",
            type: "range",
            min: "0",
            step: "1",
            max: duration,
            value: currentTime,
            onChange: function onChange(event) {
              return handleSeek(event);
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
            className: "mute-btn",
            onClick: toggleMute,
            children: !isMuted ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
              icon: _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faVolume,
              className: "w-5 h-5 text-white"
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
              icon: _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faVolumeXmark,
              className: "w-5 h-5 text-white"
            })
          })]
        })
      })]
    })
  });
} // converted: "0"
// created_at: "2022-03-10T15:11:49.000000Z"
// id: 2
// path: "videos/XVCRDk1646925108.mp4"
// post_id: 19
// thumbnail_path: "video_thumbnails/4RnaLQ1646925108.jpg"
// updated_at: "2022-03-10T15:11:59.000000Z"

/***/ }),

/***/ "./resources/js/Components/ValidationError.js":
/*!****************************************************!*\
  !*** ./resources/js/Components/ValidationError.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ValidationError)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function ValidationError(_ref) {
  var error = _ref.error;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: "mb-4 text-sm text-red-600",
    children: error
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

/***/ "./resources/js/Components/aside/LeftAside.js":
/*!****************************************************!*\
  !*** ./resources/js/Components/aside/LeftAside.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LeftAside)
/* harmony export */ });
/* harmony import */ var _Layouts_Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Layouts/Layout */ "./resources/js/Layouts/Layout.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles */ "./resources/js/styles.js");
/* harmony import */ var _Utils_commons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Utils/commons */ "./resources/js/Utils/commons.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @inertiajs/inertia-react */ "@inertiajs/inertia-react");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);







function LeftAside(_ref) {
  var router = _ref.router;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: "sticky",
    style: {
      top: '5.5rem'
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("nav", {
      className: "space-y-4",
      children: _Layouts_Layout__WEBPACK_IMPORTED_MODULE_0__.navigation.map(function (item) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_4__.Link, {
          href: item.href,
          "aria-current": item.current ? 'page' : undefined,
          className: "".concat(item.href === router.url ? 'dark:bg-neutral-600 dark:text-white bg-gray-100 text-gray-900' : 'text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-neutral-700', "\n            px-4 py-2 rounded-md text-lg font-semibold flex items-center group"),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
            icon: item.icon,
            className: "".concat(item.href === router.url ? 'dark:bg-neutral-600 dark:text-white bg-gray-100 text-gray-900' : 'text-gray-400 group-hover:text-gray-500 dark:group-hover:text-gray-300 dark:text-gray-300 group-hover:bg-gray-50 dark:group-hover:bg-neutral-700', "\n              flex-shrink-0 mr-3 h-6 w-6\n            "),
            "aria-hidden": "true"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
            className: "truncate",
            children: item.name
          })]
        }, item.name);
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "p-2 mt-8",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_4__.Link, {
        href: route('posts.create'),
        className: (0,_Utils_commons__WEBPACK_IMPORTED_MODULE_2__.classNames)('inline-flex justify-center w-3/4 p-2 px-6 py-3 text-base font-semibold text-center rounded-full', _styles__WEBPACK_IMPORTED_MODULE_1__.buttonColor.solid),
        children: "\uAE00 \uC791\uC131\uD558\uAE30"
      })
    })]
  });
}

/***/ }),

/***/ "./resources/js/Components/aside/RightAside.js":
/*!*****************************************************!*\
  !*** ./resources/js/Components/aside/RightAside.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RightAside)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);


function RightAside() {
  var whoToFollow = [{
    name: 'Leonard Krasner',
    handle: 'leonardkrasner',
    href: '#',
    imageUrl: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  } // More people...
  ];
  var trendingPosts = [{
    id: 1,
    user: {
      name: 'Floyd Miles',
      imageUrl: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    body: 'What books do you have on your bookshelf just to look smarter than you actually are?',
    comments: 291
  } // More posts...
  ];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "sticky space-y-4",
    style: {
      top: '5.5rem'
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("section", {
      "aria-labelledby": "who-to-follow-heading",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "bg-white rounded-lg shadow dark:bg-neutral-800 dark:bg-opacity-75",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "p-6",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", {
            id: "who-to-follow-heading",
            className: "text-base font-medium text-gray-900 dark:text-white",
            children: "Who to follow"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: "flow-root mt-6",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul", {
              role: "list",
              className: "-my-4 divide-y divide-gray-200",
              children: whoToFollow.map(function (user) {
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                  className: "flex items-center py-4 space-x-3",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                    className: "flex-shrink-0",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
                      className: "w-8 h-8 rounded-full",
                      src: user.imageUrl,
                      alt: ""
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex-1 min-w-0",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                      className: "text-sm font-medium text-gray-900 dark:text-white",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
                        href: user.href,
                        children: user.name
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                      className: "text-sm text-gray-500 dark:text-gray-300",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
                        href: user.href,
                        children: '@' + user.handle
                      })
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                    className: "flex-shrink-0",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                      type: "button",
                      className: "inline-flex items-center px-3 py-0.5 rounded-full bg-rose-50 text-sm font-medium text-rose-700 hover:bg-rose-100",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                        children: "Follow"
                      })
                    })
                  })]
                }, user.handle);
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: "mt-6",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
              href: "#",
              className: "block w-full px-4 py-2 text-sm font-medium text-center text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm dark:text-gray-300 dark:bg-neutral-800 dark:bg-opacity-75 hover:bg-gray-50 dark:hover:bg-gray-800",
              children: "View all"
            })
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("section", {
      "aria-labelledby": "trending-heading",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "bg-white rounded-lg shadow dark:bg-neutral-800 dark:bg-opacity-75",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "p-6",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", {
            id: "trending-heading",
            className: "text-base font-medium text-gray-900 dark:text-white",
            children: "Trending"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: "flow-root mt-6",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul", {
              role: "list",
              className: "-my-4 divide-y divide-gray-200",
              children: trendingPosts.map(function (post) {
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                  className: "flex py-4 space-x-3",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                    className: "flex-shrink-0",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
                      className: "w-8 h-8 rounded-full",
                      src: post.user.imageUrl,
                      alt: post.user.name
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex-1 min-w-0",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                      className: "text-sm text-gray-800 dark:text-gray-300",
                      children: post.body
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                      className: "flex mt-2",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                        className: "inline-flex items-center text-sm",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                          type: "button",
                          className: "inline-flex space-x-2 text-gray-400 hover:text-gray-500 dark:text-gray-300",
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                            className: "font-medium text-gray-900 dark:text-gray-300",
                            children: post.comments
                          })
                        })
                      })
                    })]
                  })]
                }, post.id);
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: "mt-6",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
              href: "#",
              className: "block w-full px-4 py-2 text-sm font-medium text-center text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm dark:text-gray-300 dark:bg-neutral-800 dark:bg-opacity-75 hover:bg-gray-50 dark:hover:bg-gray-800",
              children: "View all"
            })
          })]
        })
      })
    })]
  });
}

/***/ }),

/***/ "./resources/js/Components/header/Header.js":
/*!**************************************************!*\
  !*** ./resources/js/Components/header/Header.js ***!
  \**************************************************/
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
/* harmony import */ var _HeaderUserNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HeaderUserNav */ "./resources/js/Components/header/HeaderUserNav.js");
/* harmony import */ var _Providers_HeaderStyleProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Providers/HeaderStyleProvider */ "./resources/js/Providers/HeaderStyleProvider.js");
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Logo */ "./resources/js/Components/Logo.js");
/* harmony import */ var _constances__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/constances */ "./resources/js/constances.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/pro-regular-svg-icons */ "@fortawesome/pro-regular-svg-icons");
/* harmony import */ var _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Utils_commons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/Utils/commons */ "./resources/js/Utils/commons.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/styles */ "./resources/js/styles.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);












function Header(_ref) {
  var auth = _ref.auth;
  var headerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_Providers_HeaderStyleProvider__WEBPACK_IMPORTED_MODULE_3__.HeaderStyleContext),
      setHeight = _useContext.setHeight,
      show = _useContext.show;

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (headerRef.current) {
      setHeight(headerRef.current.clientHeight);
    }

    return function () {
      setHeight(0);
    };
  }, [headerRef.current]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
    ref: headerRef,
    className: (0,_Utils_commons__WEBPACK_IMPORTED_MODULE_8__.classNames)('sticky top-0 z-40 bg-white border-b border-gray-200 bg-opacity-90 dark:bg-neutral-900 dark:border-neutral-700', !show && 'hidden'),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("nav", {
      className: "mx-auto max-w-7xl",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
        className: "flex w-full h-16 px-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
          className: "flex items-center lg:w-64 sm:px-4 shrink-0",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
            href: route(_constances__WEBPACK_IMPORTED_MODULE_5__.routes.HOME),
            className: "flex items-center flex-shrink-0 space-x-2",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Logo__WEBPACK_IMPORTED_MODULE_4__["default"], {
              className: "w-6 h-6"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("span", {
              className: "hidden text-xl font-bold whitespace-nowrap md:inline-block",
              children: "MadStone"
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
          className: "flex flex-1 grid-cols-11 lg:grid",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
            className: "flex items-center justify-center flex-1 px-4 sm:px-0 md:col-span-7 sm:col-span-9",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
              className: "w-full max-w-lg",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("label", {
                htmlFor: "search",
                className: "sr-only",
                children: "\uAC80\uC0C9"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
                className: "relative",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
                  className: "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FontAwesomeIcon, {
                    icon: _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faSearch,
                    className: "w-5 h-5 text-gray-400",
                    "aria-hidden": "true"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("input", {
                  id: "search",
                  name: "search",
                  className: (0,_Utils_commons__WEBPACK_IMPORTED_MODULE_8__.classNames)('block w-full py-2 pl-10 pr-3 text-sm sm:text-sm', _styles__WEBPACK_IMPORTED_MODULE_9__.inputColor.outline, _styles__WEBPACK_IMPORTED_MODULE_9__.selection.primary),
                  placeholder: "\uD53C\uB4DC \uAC80\uC0C9",
                  type: "search",
                  autoComplete: "off"
                })]
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
            className: "flex items-center justify-end md:col-span-4 sm:col-span-2",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_HeaderUserNav__WEBPACK_IMPORTED_MODULE_2__["default"], {
              auth: auth
            })
          })]
        })]
      })
    })
  });
}

/***/ }),

/***/ "./resources/js/Components/header/HeaderUserNav.js":
/*!*********************************************************!*\
  !*** ./resources/js/Components/header/HeaderUserNav.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HeaderUserNav)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-react */ "@inertiajs/inertia-react");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/pro-regular-svg-icons */ "@fortawesome/pro-regular-svg-icons");
/* harmony import */ var _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constances__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/constances */ "./resources/js/constances.js");
/* harmony import */ var _Dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Dropdown */ "./resources/js/Components/Dropdown.js");
/* harmony import */ var _user_UserProfile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user/UserProfile */ "./resources/js/Components/user/UserProfile.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);








function HeaderUserNav(_ref) {
  var auth = _ref.auth;
  var headerUserNavs = [{
    name: '내 정보',
    href: "/profile",
    method: 'get'
  }, {
    name: '로그아웃',
    href: route(_constances__WEBPACK_IMPORTED_MODULE_3__.routes.LOGOUT),
    method: 'post'
  }];
  return auth.user ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
    className: "flex items-center",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: "flex items-center flex-shrink-0",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_Dropdown__WEBPACK_IMPORTED_MODULE_4__["default"], {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Dropdown__WEBPACK_IMPORTED_MODULE_4__["default"].Trigger, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("button", {
            className: "flex text-sm rounded-full focus:outline-none focus:ring-offset-2 focus:ring-2 focus:ring-gray-500 focus:border-gray-500 dark:ring-offset-black",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
              className: "sr-only",
              children: "Open user menu"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_user_UserProfile__WEBPACK_IMPORTED_MODULE_5__["default"], {
              auth: auth,
              className: "object-cover rounded-full w-9 h-9"
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Dropdown__WEBPACK_IMPORTED_MODULE_4__["default"].Content, {
          children: headerUserNavs.map(function (item) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Dropdown__WEBPACK_IMPORTED_MODULE_4__["default"].Link, {
              method: item.method,
              href: item.href,
              as: item.method === 'get' ? 'a' : 'button',
              children: item.name
            }, item.name);
          })
        })]
      })
    })
  }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
    className: "flex items-center",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: "flex-shrink-0",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
        href: route(_constances__WEBPACK_IMPORTED_MODULE_3__.routes.LOGIN),
        className: "flex items-center justify-center text-sm bg-gray-100 rounded-full w-9 h-9 focus:outline-none focus:ring-offset-2 focus:ring-2 focus:ring-gray-500 focus:border-gray-500 dark:ring-offset-black dark:bg-neutral-600",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
          icon: _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faUser,
          className: "text-lg text-gray-400 dark:text-gray-300"
        })
      })
    })
  });
}

/***/ }),

/***/ "./resources/js/Components/user/UserProfile.js":
/*!*****************************************************!*\
  !*** ./resources/js/Components/user/UserProfile.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserProfile)
/* harmony export */ });
/* harmony import */ var _Utils_auth_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Utils/auth.utils */ "./resources/js/Utils/auth.utils.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function UserProfile(_ref) {
  var auth = _ref.auth,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? 'object-cover rounded-full w-9 h-9' : _ref$className;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
    className: className,
    src: (0,_Utils_auth_utils__WEBPACK_IMPORTED_MODULE_0__.getAvatar)(auth.user.name),
    alt: "".concat(auth.user.name, "'\uC758 \uD504\uB85C\uD544")
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
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/styles */ "./resources/js/styles.js");
/* harmony import */ var _Utils_commons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Utils/commons */ "./resources/js/Utils/commons.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




function Guest(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: (0,_Utils_commons__WEBPACK_IMPORTED_MODULE_1__.classNames)('flex min-h-screen', _styles__WEBPACK_IMPORTED_MODULE_0__.layoutBg),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "relative flex-1 hidden w-0 lg:block",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
        className: "absolute inset-0 object-cover w-full h-full",
        src: "https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80",
        alt: ""
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "flex flex-col justify-center flex-1 px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "w-full max-w-sm mx-auto lg:w-96",
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
/* harmony export */   "navigation": () => (/* binding */ navigation),
/* harmony export */   "default": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_header_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Components/header/Header */ "./resources/js/Components/header/Header.js");
/* harmony import */ var _Components_aside_LeftAside__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Components/aside/LeftAside */ "./resources/js/Components/aside/LeftAside.js");
/* harmony import */ var _Components_aside_RightAside__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Components/aside/RightAside */ "./resources/js/Components/aside/RightAside.js");
/* harmony import */ var _constances__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/constances */ "./resources/js/constances.js");
/* harmony import */ var _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/pro-solid-svg-icons */ "@fortawesome/pro-solid-svg-icons");
/* harmony import */ var _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Utils_commons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/Utils/commons */ "./resources/js/Utils/commons.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/styles */ "./resources/js/styles.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @inertiajs/inertia-react */ "@inertiajs/inertia-react");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);











var navigation = [{
  name: '피드 홈',
  href: route(_constances__WEBPACK_IMPORTED_MODULE_4__.routes.HOME),
  icon: _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faHome
}, {
  name: '지역모임',
  href: route(_constances__WEBPACK_IMPORTED_MODULE_4__.routes.LOCAL_GATHERING),
  icon: _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faLocationDot
}, {
  name: '중고거래',
  href: '#',
  icon: _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faBoxTaped
}, {
  name: '메세지',
  href: '#',
  icon: _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faEnvelope
}];
var MemoHeader = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(function (_ref) {
  var auth = _ref.auth,
      router = _ref.router;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Components_header_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    auth: auth,
    router: router
  });
});
var MemoLeft = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(function (_ref2) {
  var router = _ref2.router;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("aside", {
    className: "hidden w-64 py-6 pr-6 lg:block shrink-0 sm:pl-4",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Components_aside_LeftAside__WEBPACK_IMPORTED_MODULE_2__["default"], {
      router: router
    })
  });
});
var MemoRight = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(function () {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("aside", {
    className: "hidden py-6 pl-6 xl:block xl:col-span-4 sm:pr-4",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Components_aside_RightAside__WEBPACK_IMPORTED_MODULE_3__["default"], {})
  });
});
function Layout(_ref3) {
  var children = _ref3.children;

  var _usePage = (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_8__.usePage)(),
      _usePage$props = _usePage.props,
      auth = _usePage$props.auth,
      router = _usePage$props.ziggy;

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
    className: (0,_Utils_commons__WEBPACK_IMPORTED_MODULE_6__.classNames)('flex flex-col w-full min-h-screen', _styles__WEBPACK_IMPORTED_MODULE_7__.layoutBg),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(MemoHeader, {
      auth: auth,
      router: router
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
      className: "flex-1 w-full mx-auto lg:divide-x dark:divide-neutral-700 max-w-7xl sm:flex",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(MemoLeft, {
        router: router
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
        className: "flex-1 w-full divide-x dark:divide-neutral-700 xl:grid xl:grid-cols-11",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("main", {
          className: "bg-opacity-75 xl:col-span-7 dark:bg-neutral-900",
          children: children
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(MemoRight, {})]
      })]
    })]
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
/* harmony import */ var _constances__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/constances */ "./resources/js/constances.js");
/* harmony import */ var _Utils_commons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/Utils/commons */ "./resources/js/Utils/commons.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/styles */ "./resources/js/styles.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);













function ConfirmPassword(props) {
  var _useForm = (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_5__.useForm)({
    password: ''
  }),
      data = _useForm.data,
      setData = _useForm.setData,
      post = _useForm.post,
      processing = _useForm.processing,
      errors = _useForm.errors,
      reset = _useForm.reset;

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    return function () {
      reset('password');
    };
  }, []);

  var onHandleChange = function onHandleChange(event) {
    setData(event.target.name, event.target.value);
  };

  var submit = function submit(e) {
    e.preventDefault();
    post(route(_constances__WEBPACK_IMPORTED_MODULE_8__.routes.PASSWORD_CONFIRM));
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_Layouts_Guest__WEBPACK_IMPORTED_MODULE_6__["default"], {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_5__.Head, {
      title: "\uBE44\uBC00\uBC88\uD638 \uD655\uC778"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
      className: "w-full max-w-sm mx-auto lg:w-96",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_5__.Link, {
          href: route(_constances__WEBPACK_IMPORTED_MODULE_8__.routes.HOME),
          className: "flex items-center space-x-3",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Components_Logo__WEBPACK_IMPORTED_MODULE_7__["default"], {
            className: "w-12 h-12"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", {
            className: "text-4xl font-extrabold",
            children: "MadStone"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("h2", {
          className: (0,_Utils_commons__WEBPACK_IMPORTED_MODULE_9__.classNames)('mt-6 text-3xl font-extrabold', _styles__WEBPACK_IMPORTED_MODULE_10__.textColor.secondary),
          children: "\uBE44\uBC00\uBC88\uD638 \uD655\uC778"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
        className: "mt-8",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
          className: (0,_Utils_commons__WEBPACK_IMPORTED_MODULE_9__.classNames)('mb-4 text-sm', _styles__WEBPACK_IMPORTED_MODULE_10__.textColor.secondary),
          children: "\uBCF4\uC548\uC744 \uC704\uD574 \uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Components_ValidationErrors__WEBPACK_IMPORTED_MODULE_4__["default"], {
          errors: errors
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("form", {
          onSubmit: submit,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
            className: "mt-4",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Components_Label__WEBPACK_IMPORTED_MODULE_3__["default"], {
              forInput: "password",
              value: "Password"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Components_Input__WEBPACK_IMPORTED_MODULE_2__["default"], {
              type: "password",
              name: "password",
              value: data.password,
              className: "block w-full mt-1",
              isFocused: true,
              handleChange: onHandleChange
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
            className: "flex items-center justify-end mt-6",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Components_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
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
/* harmony import */ var _constances__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/constances */ "./resources/js/constances.js");
/* harmony import */ var _Utils_commons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/Utils/commons */ "./resources/js/Utils/commons.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/styles */ "./resources/js/styles.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);












function ForgotPassword(props) {
  var status = props.status;

  var _useForm = (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_4__.useForm)({
    email: ''
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
    post(route(_constances__WEBPACK_IMPORTED_MODULE_7__.routes.PASSWORD_EMAIL));
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_Layouts_Guest__WEBPACK_IMPORTED_MODULE_5__["default"], {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_4__.Head, {
      title: "\uBE44\uBC00\uBC88\uD638 \uC7AC\uC124\uC815"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
      className: "w-full max-w-sm mx-auto lg:w-96",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_4__.Link, {
          href: route(_constances__WEBPACK_IMPORTED_MODULE_7__.routes.HOME),
          className: "flex items-center space-x-3",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Components_Logo__WEBPACK_IMPORTED_MODULE_6__["default"], {
            className: "w-12 h-12"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("span", {
            className: "text-4xl font-extrabold",
            children: "MadStone"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("h2", {
          className: (0,_Utils_commons__WEBPACK_IMPORTED_MODULE_8__.classNames)('mt-6 text-3xl font-extrabold', _styles__WEBPACK_IMPORTED_MODULE_9__.textColor.secondary),
          children: "\uBE44\uBC00\uBC88\uD638 \uC7AC\uC124\uC815"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
        className: "mt-8",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
          className: (0,_Utils_commons__WEBPACK_IMPORTED_MODULE_8__.classNames)('mb-4 text-sm leading-normal', _styles__WEBPACK_IMPORTED_MODULE_9__.textColor.secondary),
          children: ["\uBE44\uBC00\uBC88\uD638\uB97C \uC78A\uC5B4 \uBC84\uB9AC\uC168\uB098\uC694?", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("br", {}), "\uC774\uBA54\uC77C \uC8FC\uC18C\uB97C \uC54C\uB824\uC8FC\uC2DC\uBA74 \uBE44\uBC00\uBC88\uD638 \uC7AC\uC124\uC815 \uB9C1\uD06C\uB97C \uC774\uBA54\uC77C\uB85C \uBCF4\uB0B4\uB4DC\uB9AC\uACA0\uC2B5\uB2C8\uB2E4."]
        }), status && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
          className: "mb-4 text-sm font-medium text-green-600",
          children: status
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Components_ValidationErrors__WEBPACK_IMPORTED_MODULE_3__["default"], {
          errors: errors
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("form", {
          onSubmit: submit,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Components_Input__WEBPACK_IMPORTED_MODULE_2__["default"], {
            type: "text",
            name: "email",
            value: data.email,
            className: "block w-full mt-1",
            isFocused: true,
            handleChange: onHandleChange
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
            className: "flex items-center justify-end mt-6",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Components_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
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
/* harmony import */ var _constances__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/constances */ "./resources/js/constances.js");
/* harmony import */ var _Utils_commons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/Utils/commons */ "./resources/js/Utils/commons.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/styles */ "./resources/js/styles.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__);














function Login(props) {
  var status = props.status,
      canResetPassword = props.canResetPassword;

  var _useForm = (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_5__.useForm)({
    email: '',
    password: '',
    remember: ''
  }),
      data = _useForm.data,
      setData = _useForm.setData,
      post = _useForm.post,
      processing = _useForm.processing,
      errors = _useForm.errors,
      reset = _useForm.reset;

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    return function () {
      reset('password');
    };
  }, []);

  var onHandleChange = function onHandleChange(event) {
    setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
  };

  var submit = function submit(e) {
    e.preventDefault();
    post(route(_constances__WEBPACK_IMPORTED_MODULE_9__.routes.LOGIN));
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Layouts_Guest__WEBPACK_IMPORTED_MODULE_6__["default"], {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_5__.Head, {
      title: "\uB85C\uADF8\uC778"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
      className: "w-full max-w-sm mx-auto lg:w-96",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_5__.Link, {
          href: route(_constances__WEBPACK_IMPORTED_MODULE_9__.routes.HOME),
          className: "flex items-center space-x-3",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Components_Logo__WEBPACK_IMPORTED_MODULE_7__["default"], {
            className: "w-12 h-12"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span", {
            className: "text-4xl font-extrabold",
            children: "MadStone"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("h2", {
          className: (0,_Utils_commons__WEBPACK_IMPORTED_MODULE_10__.classNames)('mt-6 text-3xl font-extrabold', _styles__WEBPACK_IMPORTED_MODULE_11__.textColor.secondary),
          children: "\uB85C\uADF8\uC778 \uD558\uC138\uC694"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
        className: "mt-8",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
          className: "mt-6",
          children: [status && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
            className: "mb-4 text-sm font-medium text-green-600",
            children: status
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Components_ValidationErrors__WEBPACK_IMPORTED_MODULE_4__["default"], {
            errors: errors
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("form", {
            onSubmit: submit,
            className: "space-y-6",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Components_Label__WEBPACK_IMPORTED_MODULE_8__["default"], {
                htmlFor: "email",
                value: "\uC774\uBA54\uC77C",
                className: _styles__WEBPACK_IMPORTED_MODULE_11__.textColor.secondary,
                children: "\uC774\uBA54\uC77C"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
                className: "mt-1",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Components_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
                  type: "text",
                  name: "email",
                  value: data.email,
                  className: "block w-full mt-1",
                  autoComplete: "username",
                  isFocused: true,
                  handleChange: onHandleChange
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
              className: "space-y-1",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Components_Label__WEBPACK_IMPORTED_MODULE_8__["default"], {
                htmlFor: "password",
                value: "\uBE44\uBC00\uBC88\uD638",
                className: _styles__WEBPACK_IMPORTED_MODULE_11__.textColor.secondary,
                children: "\uBE44\uBC00\uBC88\uD638"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
                className: "mt-1",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Components_Input__WEBPACK_IMPORTED_MODULE_3__["default"], {
                  type: "password",
                  name: "password",
                  value: data.password,
                  className: "block w-full mt-1",
                  autoComplete: "current-password",
                  handleChange: onHandleChange
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
              className: "flex items-center justify-between",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
                className: "flex items-center",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("label", {
                  className: "flex items-center",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Components_Checkbox__WEBPACK_IMPORTED_MODULE_2__["default"], {
                    name: "remember",
                    value: data.remember,
                    handleChange: onHandleChange
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span", {
                    className: (0,_Utils_commons__WEBPACK_IMPORTED_MODULE_10__.classNames)('ml-2 text-sm', _styles__WEBPACK_IMPORTED_MODULE_11__.textColor.secondary),
                    children: "\uB85C\uADF8\uC778 \uC720\uC9C0"
                  })]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
                className: "text-sm",
                children: canResetPassword && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_5__.Link, {
                  href: route(_constances__WEBPACK_IMPORTED_MODULE_9__.routes.PASSWORD_REQUEST),
                  className: (0,_Utils_commons__WEBPACK_IMPORTED_MODULE_10__.classNames)('text-sm underline', _styles__WEBPACK_IMPORTED_MODULE_11__.textColor.secondary),
                  children: "\uBE44\uBC00\uBC88\uD638\uB97C \uC78A\uC73C\uC168\uB098\uC694?"
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Components_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
                processing: processing,
                children: "\uB85C\uADF8\uC778"
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
            className: "relative mt-6",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
              className: "absolute inset-0 flex items-center",
              "aria-hidden": "true",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
                className: "w-full border-t border-gray-300"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
              className: "relative flex justify-center text-sm",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span", {
                className: (0,_Utils_commons__WEBPACK_IMPORTED_MODULE_10__.classNames)('px-2 bg-white dark:bg-neutral-900', _styles__WEBPACK_IMPORTED_MODULE_11__.textColor.secondary),
                children: "\uC544\uC9C1 \uACC4\uC815\uC774 \uC5C6\uC73C\uC2E0\uAC00\uC694?"
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
            className: "flex justify-center my-6",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_5__.Link, {
              href: route(_constances__WEBPACK_IMPORTED_MODULE_9__.routes.REGISTER),
              className: (0,_Utils_commons__WEBPACK_IMPORTED_MODULE_10__.classNames)('text-sm underline', _styles__WEBPACK_IMPORTED_MODULE_11__.textColor.secondary),
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
/* harmony import */ var _constances__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/constances */ "./resources/js/constances.js");
/* harmony import */ var _Utils_commons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/Utils/commons */ "./resources/js/Utils/commons.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/styles */ "./resources/js/styles.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);













function Register(props) {
  var _useForm = (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_4__.useForm)({
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
  }),
      data = _useForm.data,
      setData = _useForm.setData,
      post = _useForm.post,
      processing = _useForm.processing,
      errors = _useForm.errors,
      reset = _useForm.reset;

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    return function () {
      reset('password', 'password_confirmation');
    };
  }, []);

  var onHandleChange = function onHandleChange(event) {
    setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
  };

  var submit = function submit(e) {
    e.preventDefault();
    post(route(_constances__WEBPACK_IMPORTED_MODULE_8__.routes.REGISTER));
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_Layouts_Guest__WEBPACK_IMPORTED_MODULE_5__["default"], {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_4__.Head, {
      title: "\uD68C\uC6D0\uAC00\uC785"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
      className: "w-full max-w-sm mx-auto lg:w-96",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_4__.Link, {
          href: route(_constances__WEBPACK_IMPORTED_MODULE_8__.routes.HOME),
          className: "flex items-center space-x-3",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Components_Logo__WEBPACK_IMPORTED_MODULE_6__["default"], {
            className: "w-12 h-12"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", {
            className: "text-4xl font-extrabold",
            children: "MadStone"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("h2", {
          className: (0,_Utils_commons__WEBPACK_IMPORTED_MODULE_9__.classNames)('mt-6 text-3xl font-extrabold', _styles__WEBPACK_IMPORTED_MODULE_10__.textColor.secondary),
          children: "\uD68C\uC6D0\uAC00\uC785"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
        className: "mt-8",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
          className: "mt-6",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Components_ValidationErrors__WEBPACK_IMPORTED_MODULE_3__["default"], {
            errors: errors
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("form", {
            onSubmit: submit,
            className: "space-y-6",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Components_Label__WEBPACK_IMPORTED_MODULE_7__["default"], {
                htmlFor: "name",
                value: "\uC774\uB984",
                className: _styles__WEBPACK_IMPORTED_MODULE_10__.textColor.secondary,
                children: "\uC774\uB984"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
                className: "mt-1",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Components_Input__WEBPACK_IMPORTED_MODULE_2__["default"], {
                  type: "text",
                  name: "name",
                  value: data.name,
                  className: "block w-full mt-1",
                  autoComplete: "name",
                  isFocused: true,
                  handleChange: onHandleChange,
                  required: true
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Components_Label__WEBPACK_IMPORTED_MODULE_7__["default"], {
                htmlFor: "email",
                value: "\uC774\uBA54\uC77C",
                className: _styles__WEBPACK_IMPORTED_MODULE_10__.textColor.secondary,
                children: "\uC774\uBA54\uC77C"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
                className: "mt-1",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Components_Input__WEBPACK_IMPORTED_MODULE_2__["default"], {
                  type: "text",
                  name: "email",
                  value: data.email,
                  className: "block w-full mt-1",
                  autoComplete: "username",
                  isFocused: true,
                  handleChange: onHandleChange
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
              className: "space-y-1",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Components_Label__WEBPACK_IMPORTED_MODULE_7__["default"], {
                htmlFor: "password",
                value: "\uBE44\uBC00\uBC88\uD638",
                className: _styles__WEBPACK_IMPORTED_MODULE_10__.textColor.secondary,
                children: "\uBE44\uBC00\uBC88\uD638"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
                className: "mt-1",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Components_Input__WEBPACK_IMPORTED_MODULE_2__["default"], {
                  type: "password",
                  name: "password",
                  value: data.password,
                  className: "block w-full mt-1",
                  autoComplete: "current-password",
                  handleChange: onHandleChange
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
              className: "space-y-1",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Components_Label__WEBPACK_IMPORTED_MODULE_7__["default"], {
                htmlFor: "password_confirmation",
                value: "\uBE44\uBC00\uBC88\uD638 \uD655\uC778",
                className: _styles__WEBPACK_IMPORTED_MODULE_10__.textColor.secondary,
                children: "\uBE44\uBC00\uBC88\uD638 \uD655\uC778"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
                className: "mt-1",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Components_Input__WEBPACK_IMPORTED_MODULE_2__["default"], {
                  type: "password",
                  name: "password_confirmation",
                  value: data.password_confirmation,
                  className: "block w-full mt-1",
                  handleChange: onHandleChange,
                  required: true
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Components_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
                processing: processing,
                children: "\uD68C\uC6D0\uAC00\uC785"
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
            className: "relative mt-6",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
              className: "absolute inset-0 flex items-center",
              "aria-hidden": "true",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
                className: "w-full border-t border-gray-300"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
              className: "relative flex justify-center text-sm",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", {
                className: (0,_Utils_commons__WEBPACK_IMPORTED_MODULE_9__.classNames)('px-2 bg-white dark:bg-neutral-900', _styles__WEBPACK_IMPORTED_MODULE_10__.textColor.secondary),
                children: "\uC774\uBBF8 \uACC4\uC815\uC774 \uC788\uC73C\uC2E0\uAC00\uC694?"
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
            className: "flex justify-center my-6",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_4__.Link, {
              href: route(_constances__WEBPACK_IMPORTED_MODULE_8__.routes.LOGIN),
              className: (0,_Utils_commons__WEBPACK_IMPORTED_MODULE_9__.classNames)('text-sm underline', _styles__WEBPACK_IMPORTED_MODULE_10__.textColor.secondary),
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
/* harmony import */ var _constances__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/constances */ "./resources/js/constances.js");
/* harmony import */ var _Utils_commons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/Utils/commons */ "./resources/js/Utils/commons.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/styles */ "./resources/js/styles.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);













function ResetPassword(props) {
  var token = props.token,
      email = props.email;

  var _useForm = (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_5__.useForm)({
    token: token,
    email: email,
    password: '',
    password_confirmation: ''
  }),
      data = _useForm.data,
      setData = _useForm.setData,
      post = _useForm.post,
      processing = _useForm.processing,
      errors = _useForm.errors,
      reset = _useForm.reset;

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    return function () {
      reset('password', 'password_confirmation');
    };
  }, []);

  var onHandleChange = function onHandleChange(event) {
    setData(event.target.name, event.target.value);
  };

  var submit = function submit(e) {
    e.preventDefault();
    post(route(_constances__WEBPACK_IMPORTED_MODULE_8__.routes.PASSWORD_UPDATE));
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_Layouts_Guest__WEBPACK_IMPORTED_MODULE_6__["default"], {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_5__.Head, {
      title: "\uBE44\uBC00\uBC88\uD638 \uC7AC\uC124\uC815"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
      className: "w-full max-w-sm mx-auto lg:w-96",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_5__.Link, {
          href: route(_constances__WEBPACK_IMPORTED_MODULE_8__.routes.HOME),
          className: "flex items-center space-x-3",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Components_Logo__WEBPACK_IMPORTED_MODULE_7__["default"], {
            className: "w-12 h-12"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", {
            className: "text-4xl font-extrabold",
            children: "MadStone"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("h2", {
          className: (0,_Utils_commons__WEBPACK_IMPORTED_MODULE_9__.classNames)('mt-6 text-3xl font-extrabold', _styles__WEBPACK_IMPORTED_MODULE_10__.textColor.secondary),
          children: "\uBE44\uBC00\uBC88\uD638 \uC7AC\uC124\uC815"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
        className: "mt-8",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Components_ValidationErrors__WEBPACK_IMPORTED_MODULE_4__["default"], {
          errors: errors
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("form", {
          onSubmit: submit,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Components_Label__WEBPACK_IMPORTED_MODULE_3__["default"], {
              forInput: "email",
              value: "\uC774\uBA54\uC77C",
              className: _styles__WEBPACK_IMPORTED_MODULE_10__.textColor.secondary
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Components_Input__WEBPACK_IMPORTED_MODULE_2__["default"], {
              type: "email",
              name: "email",
              value: data.email,
              className: "block w-full mt-1",
              autoComplete: "username",
              handleChange: onHandleChange
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
            className: "mt-4",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Components_Label__WEBPACK_IMPORTED_MODULE_3__["default"], {
              forInput: "password",
              value: "\uBE44\uBC00\uBC88\uD638",
              className: _styles__WEBPACK_IMPORTED_MODULE_10__.textColor.secondary
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Components_Input__WEBPACK_IMPORTED_MODULE_2__["default"], {
              type: "password",
              name: "password",
              value: data.password,
              className: "block w-full mt-1",
              autoComplete: "new-password",
              isFocused: true,
              handleChange: onHandleChange
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
            className: "mt-4",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Components_Label__WEBPACK_IMPORTED_MODULE_3__["default"], {
              forInput: "password_confirmation",
              value: "\uBE44\uBC00\uBC88\uD638 \uD655\uC778",
              className: _styles__WEBPACK_IMPORTED_MODULE_10__.textColor.secondary
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Components_Input__WEBPACK_IMPORTED_MODULE_2__["default"], {
              type: "password",
              name: "password_confirmation",
              value: data.password_confirmation,
              className: "block w-full mt-1",
              autoComplete: "new-password",
              handleChange: onHandleChange
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
            className: "flex items-center justify-end mt-6",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Components_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
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
/* harmony import */ var _constances__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/constances */ "./resources/js/constances.js");
/* harmony import */ var _Utils_commons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/Utils/commons */ "./resources/js/Utils/commons.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/styles */ "./resources/js/styles.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);










function VerifyEmail(props) {
  var status = props.status;

  var _useForm = (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__.useForm)(),
      post = _useForm.post,
      processing = _useForm.processing;

  var submit = function submit(e) {
    e.preventDefault();
    post(route(_constances__WEBPACK_IMPORTED_MODULE_5__.routes.VERIFICATION_SEND));
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_Layouts_Guest__WEBPACK_IMPORTED_MODULE_3__["default"], {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__.Head, {
      title: "\uC774\uBA54\uC77C \uD655\uC778"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: "w-full max-w-sm mx-auto lg:w-96",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__.Link, {
          href: route(_constances__WEBPACK_IMPORTED_MODULE_5__.routes.HOME),
          className: "flex items-center space-x-3",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Components_Logo__WEBPACK_IMPORTED_MODULE_4__["default"], {
            className: "w-12 h-12"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
            className: "text-4xl font-extrabold",
            children: "MadStone"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h2", {
          className: (0,_Utils_commons__WEBPACK_IMPORTED_MODULE_6__.classNames)('mt-6 text-3xl font-extrabold', _styles__WEBPACK_IMPORTED_MODULE_7__.textColor.secondary),
          children: "\uC774\uBA54\uC77C \uD655\uC778"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: "mt-8",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
          className: (0,_Utils_commons__WEBPACK_IMPORTED_MODULE_6__.classNames)('mb-4 text-sm', _styles__WEBPACK_IMPORTED_MODULE_7__.textColor.secondary),
          children: "\uAC00\uC785\uD574\uC8FC\uC154\uC11C \uAC10\uC0AC\uD569\uB2C8\uB2E4! \uC2DC\uC791\uD558\uAE30 \uC804\uC5D0 \uC774\uBA54\uC77C\uB85C \uC804\uB2EC\uB41C \uB9C1\uD06C\uB97C \uD074\uB9AD\uD558\uC5EC \uC778\uC99D\uC744 \uC644\uB8CC\uD574\uC8FC\uC138\uC694. \uD639\uC2DC \uC774\uBA54\uC77C\uC744 \uBC1B\uC9C0 \uBABB\uD588\uB2E4\uBA74 \uC7AC\uC804\uC1A1 \uBC84\uD2BC\uC744 \uB20C\uB7EC\uC8FC\uC138\uC694."
        }), status === 'verification-link-sent' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
          className: "mb-4 text-sm font-medium text-green-600",
          children: "\uB4F1\uB85D\uB41C \uC8FC\uC18C\uB85C \uC0C8 \uC774\uBA54\uC77C \uD655\uC778 \uB9C1\uD06C\uAC00 \uC804\uC1A1\uB418\uC5C8\uC2B5\uB2C8\uB2E4."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("form", {
          onSubmit: submit,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: "flex flex-col items-center justify-between mt-4 space-y-3",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Components_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
              processing: processing,
              children: "\uC774\uBA54\uC77C \uD655\uC778 \uC7AC\uC804\uC1A1"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__.Link, {
              href: route(_constances__WEBPACK_IMPORTED_MODULE_5__.routes.LOGOUT),
              method: "post",
              as: "button",
              className: (0,_Utils_commons__WEBPACK_IMPORTED_MODULE_6__.classNames)('text-sm underline', _styles__WEBPACK_IMPORTED_MODULE_7__.textColor.secondary),
              children: "\uB85C\uADF8\uC544\uC6C3"
            })]
          })
        })]
      })]
    })]
  });
}

/***/ }),

/***/ "./resources/js/Pages/CreatePost.js":
/*!******************************************!*\
  !*** ./resources/js/Pages/CreatePost.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-react */ "@inertiajs/inertia-react");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Layouts_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Layouts/Layout */ "./resources/js/Layouts/Layout.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Utils_commons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Utils/commons */ "./resources/js/Utils/commons.js");
/* harmony import */ var _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/pro-solid-svg-icons */ "@fortawesome/pro-solid-svg-icons");
/* harmony import */ var _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_textarea_autosize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-textarea-autosize */ "react-textarea-autosize");
/* harmony import */ var react_textarea_autosize__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/styles */ "./resources/js/styles.js");
/* harmony import */ var _Providers_HeaderStyleProvider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/Providers/HeaderStyleProvider */ "./resources/js/Providers/HeaderStyleProvider.js");
/* harmony import */ var _Components_ValidationError__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/Components/ValidationError */ "./resources/js/Components/ValidationError.js");
/* harmony import */ var _Components_CreatePost_VideoThumbnail__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/Components/CreatePost/VideoThumbnail */ "./resources/js/Components/CreatePost/VideoThumbnail.js");
/* harmony import */ var _Components_CreatePost_ImagePreview__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/Components/CreatePost/ImagePreview */ "./resources/js/Components/CreatePost/ImagePreview.js");
/* harmony import */ var _Components_CreatePost_GifPreview__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/Components/CreatePost/GifPreview */ "./resources/js/Components/CreatePost/GifPreview.js");
/* harmony import */ var _Components_CreatePost_SelectBoard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/Components/CreatePost/SelectBoard */ "./resources/js/Components/CreatePost/SelectBoard.js");
/* harmony import */ var _Utils_post_utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/Utils/post.utils */ "./resources/js/Utils/post.utils.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


















var boards = [{
  id: 1,
  title: '피드 홈',
  icon: _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faHome
}, {
  id: 2,
  title: '지역 모임',
  icon: _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faLocationDot
}, {
  id: 3,
  title: '중고거래',
  icon: _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faBoxTaped
}];
function Home() {
  var _useForm = (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.useForm)({
    board: boards[0],
    images: [],
    video: null,
    content: ''
  }),
      data = _useForm.data,
      setData = _useForm.setData,
      post = _useForm.post,
      progress = _useForm.progress,
      errors = _useForm.errors,
      clearErrors = _useForm.clearErrors;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      existGif = _useState2[0],
      setExistGif = _useState2[1];

  var contentAreaCover = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();
  var pageArea = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_Providers_HeaderStyleProvider__WEBPACK_IMPORTED_MODULE_9__.HeaderStyleContext),
      headerHeight = _useContext.height;

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isSticky = _useState4[0],
      setIsSticky = _useState4[1];

  var shouldSticky = function shouldSticky() {
    if (pageArea.current) {
      setIsSticky(window.innerHeight - pageArea.current.clientHeight - headerHeight < 0);
    }
  };

  var checkExistGif = function checkExistGif() {
    var images = data.images;
    var hasGif = false;
    images.forEach(function (image) {
      var _file$name$split$pop;

      var file = image.file;
      var extension = (_file$name$split$pop = file.name.split('.').pop()) === null || _file$name$split$pop === void 0 ? void 0 : _file$name$split$pop.toLowerCase();

      if (extension === 'gif') {
        hasGif = true;
      }
    });
    setExistGif(hasGif);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    checkExistGif();
  }, [data.images]);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    clearErrors();

    if (window) {
      window.addEventListener('resize', shouldSticky);
    }

    shouldSticky();
    return function () {
      if (window) {
        window.removeEventListener('resize', shouldSticky);
      }
    };
  }, [pageArea.current, data.images, data.video]);

  var imageChange = function imageChange(event) {
    var files = event.target.files;
    var images = data.images;

    if (images.length + files.length > 10 || existGif) {
      alert('최대 10개의 이미지 또는 1개의 gif만 사용가능합니다.');
      event.target.value = '';
      return;
    }

    var newImages = [];
    var hasGif = existGif;
    Array.from(files).forEach(function (file) {
      var _file$name$split$pop2;

      var extension = (_file$name$split$pop2 = file.name.split('.').pop()) === null || _file$name$split$pop2 === void 0 ? void 0 : _file$name$split$pop2.toLowerCase();

      if (extension === 'gif') {
        hasGif = true;
      }
    });

    if (hasGif && images.length + files.length > 1) {
      alert('최대 10개의 이미지 또는 1개의 gif만 사용가능합니다.');
      event.target.value = '';
      return;
    }

    Array.from(files).forEach(function (file) {
      var id = images.length > 0 ? images[images.length - 1].id + 1 : 0;

      if (newImages.length > 0) {
        id = newImages[newImages.length - 1].id + 1;
      }

      var newImage = {
        id: id,
        file: file,
        preview: URL.createObjectURL(file)
      };
      newImages.push(newImage);
    });
    setData('images', [].concat(_toConsumableArray(images), newImages));
    event.target.value = '';
  };

  var deleteImage = function deleteImage(id) {
    var images = data.images;
    var newImages = images.filter(function (image) {
      return image.id !== id;
    });
    setData('images', newImages);
  };

  var videoChange = function videoChange(event) {
    var files = event.target.files;

    if (!files[0]) {
      return;
    }

    var newVideo = {
      file: files[0],
      preview: URL.createObjectURL(files[0])
    };
    setData('video', newVideo);
    event.target.value = '';
  };

  var submitPost = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (data.content) {
                post(route('posts.store'), data, {
                  forceFormData: true
                });
              }

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function submitPost() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_Layouts_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.Head, {
      title: "\uAE00 \uC791\uC131\uD558\uAE30"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
      ref: pageArea,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
        className: "px-6 pt-6",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
          className: "space-y-4",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
            className: "flex space-x-3",
            children: [errors.board && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_Components_ValidationError__WEBPACK_IMPORTED_MODULE_10__["default"], {
              error: errors.board
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_Components_CreatePost_SelectBoard__WEBPACK_IMPORTED_MODULE_14__["default"], {
              boards: boards,
              board: data.board,
              setData: setData
            })]
          }), errors.content && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_Components_ValidationError__WEBPACK_IMPORTED_MODULE_10__["default"], {
            error: errors.content
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
            className: "relative block w-full group",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
              ref: contentAreaCover,
              className: "absolute top-0 left-0 z-0 w-full h-full p-3 text-gray-900 whitespace-pre bg-white border border-transparent group:focus:text-gray-900 dark:group:focus:text-white dark:text-white dark:bg-neutral-800",
              dangerouslySetInnerHTML: {
                __html: (0,_Utils_post_utils__WEBPACK_IMPORTED_MODULE_15__.replaceHashtag)(data.content)
              }
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)((react_textarea_autosize__WEBPACK_IMPORTED_MODULE_7___default()), {
              className: (0,_Utils_commons__WEBPACK_IMPORTED_MODULE_4__.classNames)('relative z-10 block w-full p-3 text-transparent placeholder-gray-500 bg-transparent border border-gray-300 rounded-md resize-none dark:border-neutral-700 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-gray-500 focus:border-gray-500', _styles__WEBPACK_IMPORTED_MODULE_8__.selection.primary),
              placeholder: '내용을 입력하세요.',
              minRows: 5,
              onChange: function onChange(event) {
                return setData('content', event.target.value);
              }
            })]
          }), errors['images.0.file'] && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_Components_ValidationError__WEBPACK_IMPORTED_MODULE_10__["default"], {
            error: errors['images.0.file']
          }), data.images.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
            className: "flex w-full space-x-2 overflow-x-auto bg-transparent flex-nowrap",
            children: existGif ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_Components_CreatePost_GifPreview__WEBPACK_IMPORTED_MODULE_13__["default"], {
              image: data.images[0],
              deleteImage: deleteImage
            }) : data.images.map(function (image, index) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_Components_CreatePost_ImagePreview__WEBPACK_IMPORTED_MODULE_12__["default"], {
                image: image,
                deleteImage: deleteImage
              }, index);
            })
          }), errors['video.file'] && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_Components_ValidationError__WEBPACK_IMPORTED_MODULE_10__["default"], {
            error: errors['video.file']
          }), data.video && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_Components_CreatePost_VideoThumbnail__WEBPACK_IMPORTED_MODULE_11__["default"], {
            video: data.video,
            shouldSticky: shouldSticky,
            setData: setData
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
        className: (0,_Utils_commons__WEBPACK_IMPORTED_MODULE_4__.classNames)('sticky bottom-0 flex flex-wrap justify-between px-6 pb-4 z-20', isSticky && 'shadow border-t border-gray-200 dark:border-neutral-700 mt-6 bg-white dark:bg-neutral-900'),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
          className: "flex mt-4 space-x-2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("label", {
            className: (0,_Utils_commons__WEBPACK_IMPORTED_MODULE_4__.classNames)('inline-flex items-center p-2 space-x-2 rounded-md whitespace-nowrap cursor-pointer', _styles__WEBPACK_IMPORTED_MODULE_8__.buttonColor.outline, data.video && 'pointer-events-none opacity-30'),
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FontAwesomeIcon, {
              icon: _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faImage,
              className: "w-5 h-5",
              "aria-hidden": "true"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("span", {
              className: "text-sm font-medium",
              children: "\uC774\uBBF8\uC9C0 \uCD94\uAC00"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("input", {
              type: "file",
              className: "hidden",
              accept: "image/jpg,impge/png,image/jpeg,image/gif",
              multiple: true,
              onChange: imageChange
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("label", {
            className: (0,_Utils_commons__WEBPACK_IMPORTED_MODULE_4__.classNames)('inline-flex items-center p-2 space-x-2 rounded-md whitespace-nowrap cursor-pointer', _styles__WEBPACK_IMPORTED_MODULE_8__.buttonColor.outline, data.images.length > 0 && 'pointer-events-none opacity-30'),
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FontAwesomeIcon, {
              icon: _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faVideoPlus,
              className: "w-5 h-5",
              "aria-hidden": "true"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("span", {
              className: "text-sm font-medium",
              children: ["\uBE44\uB514\uC624 ", data.video ? '변경' : '추가']
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("input", {
              type: "file",
              className: "hidden",
              accept: "video/*",
              onChange: videoChange
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
          className: "mt-4",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("button", {
            type: "button",
            className: (0,_Utils_commons__WEBPACK_IMPORTED_MODULE_4__.classNames)('inline-flex items-center px-3 py-2 rounded-md whitespace-nowrap', _styles__WEBPACK_IMPORTED_MODULE_8__.buttonColor.solid, !data.content && 'opacity-30 pointer-events-none'),
            onClick: submitPost,
            disabled: !data.content,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("span", {
              className: "text-sm font-medium",
              children: "\uB4F1\uB85D\uD558\uAE30"
            })
          })
        })]
      })]
    })]
  });
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





function Dashboard() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_Layouts_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.Head, {
      title: "Dashboard"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "py-12",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "overflow-hidden bg-white shadow-sm sm:rounded-lg",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "p-6 bg-white border-b border-gray-200",
          children: "You're logged in!"
        })
      })
    })]
  });
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
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-react */ "@inertiajs/inertia-react");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Layouts_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Layouts/Layout */ "./resources/js/Layouts/Layout.js");
/* harmony import */ var _Components_PostList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/PostList */ "./resources/js/Components/PostList.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);





function Home(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_Layouts_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__.Head, {
      title: "\uD53C\uB4DC"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Components_PostList__WEBPACK_IMPORTED_MODULE_2__["default"], {
      data: props.posts
    })]
  });
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




function LocalGathering() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_Layouts_Layout__WEBPACK_IMPORTED_MODULE_0__["default"], {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.Head, {
      title: "\uC9C0\uC5ED\uBAA8\uC784"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "relative flex justify-center min-h-screen items-top sm:items-center sm:pt-0",
      children: "SSR"
    })]
  });
}

/***/ }),

/***/ "./resources/js/Pages/Trade.js":
/*!*************************************!*\
  !*** ./resources/js/Pages/Trade.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Trade)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-react */ "@inertiajs/inertia-react");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Layouts_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Layouts/Layout */ "./resources/js/Layouts/Layout.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




function Trade() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_Layouts_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__.Head, {
      title: "\uC790\uC720 \uAC8C\uC2DC\uD310"
    }), "SSR"]
  });
}

/***/ }),

/***/ "./resources/js/Providers/HeaderStyleProvider.js":
/*!*******************************************************!*\
  !*** ./resources/js/Providers/HeaderStyleProvider.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderStyleContext": () => (/* binding */ HeaderStyleContext),
/* harmony export */   "HeaderStyleProvider": () => (/* binding */ HeaderStyleProvider)
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



var HeaderStyleContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
  height: 0,
  setHeight: function setHeight() {},
  show: true,
  setShow: function setShow() {}
});
var HeaderStyleProvider = function HeaderStyleProvider(_ref) {
  var children = _ref.children;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      height = _useState2[0],
      setHeight = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
      _useState4 = _slicedToArray(_useState3, 2),
      show = _useState4[0],
      setShow = _useState4[1];

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(HeaderStyleContext.Provider, {
    value: {
      height: height,
      setHeight: setHeight,
      show: show,
      setShow: setShow
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
  return encodeURI("https://ui-avatars.com/api/?name=".concat(username));
};

/***/ }),

/***/ "./resources/js/Utils/commons.js":
/*!***************************************!*\
  !*** ./resources/js/Utils/commons.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "classNames": () => (/* binding */ classNames)
/* harmony export */ });
var classNames = function classNames() {
  for (var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++) {
    classes[_key] = arguments[_key];
  }

  return classes.filter(Boolean).join(' ');
};

/***/ }),

/***/ "./resources/js/Utils/post.utils.js":
/*!******************************************!*\
  !*** ./resources/js/Utils/post.utils.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "replaceHashtag": () => (/* binding */ replaceHashtag)
/* harmony export */ });
var replaceHashtag = function replaceHashtag(str) {
  return str.replace(/#([0-9a-zA-Z가-힣]*)/gi, function (word) {
    return "<span class=\"text-blue-500\">".concat(word, "</span>");
  });
};

/***/ }),

/***/ "./resources/js/constances.js":
/*!************************************!*\
  !*** ./resources/js/constances.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
var routes = {
  REGISTER: 'register',
  LOGIN: 'login',
  LOGOUT: 'logout',
  PASSWORD_CONFIRM: 'password.confirm',
  PASSWORD_EMAIL: 'password.email',
  PASSWORD_REQUEST: 'password.request',
  PASSWORD_UPDATE: 'password.update',
  VERIFICATION_SEND: 'verification.send',
  HOME: 'home',
  BOARD: 'board',
  LOCAL_GATHERING: 'local-gathering',
  TRADE: 'trade'
};

/***/ }),

/***/ "./resources/js/styles.js":
/*!********************************!*\
  !*** ./resources/js/styles.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buttonColor": () => (/* binding */ buttonColor),
/* harmony export */   "inputColor": () => (/* binding */ inputColor),
/* harmony export */   "layoutBg": () => (/* binding */ layoutBg),
/* harmony export */   "textColor": () => (/* binding */ textColor),
/* harmony export */   "iconColor": () => (/* binding */ iconColor),
/* harmony export */   "selection": () => (/* binding */ selection)
/* harmony export */ });
var buttonColor = {
  outline: 'text-gray-700 bg-white border border-gray-300 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-neutral-800 dark:hover:text-gray-300 dark:border-neutral-700 dark:bg-neutral-800 focus:outline-none focus:text-gray-900 dark:focus:text-gray-300 focus:placeholder-gray-400 focus:ring-1 focus:ring-gray-500 focus:border-gray-500 sm:text-sm',
  solid: 'text-white bg-gray-700 border border-transparent shadow-sm hover:bg-gray-800 focus:outline-none active:bg-gray-900 focus:ring-1 focus:ring-gray-500 focus:border-gray-500'
};
var inputColor = {
  outline: 'placeholder-gray-500 bg-white border border-gray-300 rounded-md dark:border-neutral-700 dark:bg-neutral-800 focus:outline-none focus:text-gray-900 dark:text-gray-300 dark:focus:text-white focus:placeholder-gray-400 focus:ring-1 focus:ring-gray-500 focus:border-gray-500'
};
var layoutBg = 'text-gray-700 bg-white bg-opacity-75 dark:bg-neutral-900 dark:text-white';
var textColor = {
  primary: 'text-gray-900 dark:text-white',
  secondary: 'text-gray-700 dark:text-gray-300'
};
var iconColor = {
  solid: 'text-gray-400 hover:text-gray-500 dark:hover:text-gray-300'
};
var selection = {
  primary: 'focus:selection:bg-sky-200 selection:bg-gray-300 caret-gray-900 selection:text-gray-900 dark:selection:text-gray-700'
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
	"./CreatePost": "./resources/js/Pages/CreatePost.js",
	"./CreatePost.js": "./resources/js/Pages/CreatePost.js",
	"./Dashboard": "./resources/js/Pages/Dashboard.js",
	"./Dashboard.js": "./resources/js/Pages/Dashboard.js",
	"./Home": "./resources/js/Pages/Home.js",
	"./Home.js": "./resources/js/Pages/Home.js",
	"./LocalGathering": "./resources/js/Pages/LocalGathering.js",
	"./LocalGathering.js": "./resources/js/Pages/LocalGathering.js",
	"./Trade": "./resources/js/Pages/Trade.js",
	"./Trade.js": "./resources/js/Pages/Trade.js"
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

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime/regenerator");

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

/***/ "@heroicons/react/solid":
/*!*****************************************!*\
  !*** external "@heroicons/react/solid" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@heroicons/react/solid");

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

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("moment");

/***/ }),

/***/ "moment/locale/ko":
/*!***********************************!*\
  !*** external "moment/locale/ko" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("moment/locale/ko");

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

/***/ "react-textarea-autosize":
/*!******************************************!*\
  !*** external "react-textarea-autosize" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-textarea-autosize");

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