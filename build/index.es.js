import React, { memo, useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import ReactDOM from 'react-dom';

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var ToastStore = /*#__PURE__*/function () {
  function ToastStore() {
    _classCallCheck(this, ToastStore);

    _defineProperty(this, "toastList", []);

    _defineProperty(this, "toastQueue", []);

    this.toastList = [];
    this.toastQueue = [];
    this.timer = null;
    this.delay = 3000;
    this.subscriptions = {};
  }

  _createClass(ToastStore, [{
    key: "addToast",
    value: function addToast(el, timer) {
      var _this = this;

      if (this.toastList.length >= 3) {
        this.toastQueue.push(_objectSpread2(_objectSpread2({}, el), {}, {
          id: Date.now()
        }));
      } else {
        this.toastList.push(_objectSpread2(_objectSpread2({}, el), {}, {
          id: Date.now()
        }));
        this.publish('TOAST');
        clearInterval(this.timer);
        this.timer = setInterval(function () {
          _this.removeToast();
        }, timer || this.delay);
      }
    }
  }, {
    key: "removeToast",
    value: function removeToast() {
      var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      this.toastList.splice(id, 1);
      this.toastQueue.length && this.toastList.push(this.toastQueue.shift());
      console.log('predel');
      this.publish("TOAST");
      console.log('del');

      if (this.toastList.length === 0) {
        clearInterval(this.timer);
      }
    }
  }, {
    key: "subscribe",
    value: function subscribe(eventType, callback) {
      var _this2 = this;

      if (!this.subscriptions[eventType]) {
        this.subscriptions[eventType] = new Set();
      }

      var callbacks = this.subscriptions[eventType];
      callbacks.add(callback);
      return function () {
        callbacks["delete"](callback);

        if (callbacks.size === 0) {
          delete _this2.subscriptions[eventType];
        }
      };
    }
  }, {
    key: "publish",
    value: function publish(eventType) {
      var _this3 = this;

      if (!this.subscriptions[eventType]) {
        return console.warn(eventType + " not found!");
      }

      var callbacks = this.subscriptions[eventType];
      callbacks.forEach(function (callback) {
        // eslint-disable-next-line standard/no-callback-literal
        callback(_toConsumableArray(_this3.toastList));
      });
    }
  }], [{
    key: "getInstance",
    value: function getInstance() {
      if (!this.instance) {
        this.instance = new this();
      }

      return this.instance;
    }
  }]);

  return ToastStore;
}();

var toastStore = new ToastStore();

var Close = styled.button.withConfig({
  displayName: "components__Close",
  componentId: "sc-1big9qe-0"
})(["padding:0;border:none;font:inherit;color:inherit;background-color:transparent;cursor:pointer;position:absolute;top:32px;right:32px;width:32px;height:32px;"]);

function CloseIcon(_ref) {
  var fontSize = _ref.fontSize,
      onClick = _ref.onClick;
  return /*#__PURE__*/React.createElement(Close, {
    onClick: onClick
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: fontSize,
    height: fontSize,
    viewBox: "0 0 32 32"
  }, /*#__PURE__*/React.createElement("defs", null), /*#__PURE__*/React.createElement("g", {
    transform: "translate(0 -0.001)"
  }, /*#__PURE__*/React.createElement("path", {
    className: "a",
    d: "M18.83,16,31.414,3.417a2,2,0,0,0-2.83-2.83L16,13.172,3.416.587a2,2,0,0,0-2.83,2.83L13.171,16,.586,28.585a2,2,0,1,0,2.83,2.829L16,18.83,28.584,31.415a2,2,0,0,0,2.83-2.83Z"
  }))));
}

function WarningIcon(_ref) {
  var _ref$fontSize = _ref.fontSize,
      fontSize = _ref$fontSize === void 0 ? 32 : _ref$fontSize;
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: fontSize * 2,
    height: fontSize * 2,
    viewBox: "0 0 64 64"
  }, /*#__PURE__*/React.createElement("g", {
    transform: "translate(0 -20.882)"
  }, /*#__PURE__*/React.createElement("g", {
    transform: "translate(0 20.882)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M221.823,333.382a3.6,3.6,0,0,0,0,7.2,3.6,3.6,0,0,0,0-7.2Z",
    transform: "translate(-189.82 -288.408)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M62.442,78.607a13.288,13.288,0,0,0,.026-12.434l-20.6-39.03a10.891,10.891,0,0,0-19.708-.014L1.529,66.2a13.4,13.4,0,0,0,.039,12.506A11.117,11.117,0,0,0,11.4,84.882H52.549A11.2,11.2,0,0,0,62.442,78.607Zm-4.473-2.821a6.142,6.142,0,0,1-5.433,3.44H11.383a6.054,6.054,0,0,1-5.368-3.368A7.366,7.366,0,0,1,6,68.993L26.631,29.934a5.944,5.944,0,0,1,10.762.014L58.009,69.008A7.268,7.268,0,0,1,57.969,75.786Z",
    transform: "translate(0 -20.882)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M220.5,157.278a3.913,3.913,0,0,0-2.778,3.929c.086,1.137.158,2.288.245,3.425.245,4.332.489,8.577.734,12.909a2.636,2.636,0,0,0,2.691,2.533,2.691,2.691,0,0,0,2.691-2.619c0-.892,0-1.713.086-2.619.158-2.778.331-5.555.489-8.333.086-1.8.245-3.6.331-5.4a4.444,4.444,0,0,0-.331-1.8A3.607,3.607,0,0,0,220.5,157.278Z",
    transform: "translate(-189.392 -137.561)"
  }))));
}

function InfoIcon(_ref) {
  var _ref$fontSize = _ref.fontSize,
      fontSize = _ref$fontSize === void 0 ? 32 : _ref$fontSize;
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: fontSize * 2,
    height: fontSize * 2,
    viewBox: "0 0 64 64"
  }, /*#__PURE__*/React.createElement("defs", null), /*#__PURE__*/React.createElement("circle", {
    className: "a",
    cx: "3.442",
    cy: "3.442",
    r: "3.442",
    transform: "translate(28.558 43.702)"
  }), /*#__PURE__*/React.createElement("path", {
    className: "a",
    d: "M32,0A32,32,0,1,0,64,32,31.983,31.983,0,0,0,32,0Zm0,59A27,27,0,1,1,59,32,26.985,26.985,0,0,1,32,59Z"
  }), /*#__PURE__*/React.createElement("path", {
    className: "a",
    d: "M187.016,128.5A11.028,11.028,0,0,0,176,139.516a2.754,2.754,0,0,0,5.508,0,5.508,5.508,0,1,1,5.508,5.508,2.754,2.754,0,0,0-2.754,2.754v6.885a2.754,2.754,0,0,0,5.508,0v-4.479a11.016,11.016,0,0,0-2.754-21.683Z",
    transform: "translate(-155.016 -113.572)"
  }));
}

function ErrorIcon(_ref) {
  var _ref$fontSize = _ref.fontSize,
      fontSize = _ref$fontSize === void 0 ? 32 : _ref$fontSize;
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: fontSize * 2,
    height: fontSize * 2,
    viewBox: "0 0 64 64"
  }, /*#__PURE__*/React.createElement("defs", null), /*#__PURE__*/React.createElement("g", {
    transform: "translate(0.198 0.198)"
  }, /*#__PURE__*/React.createElement("path", {
    className: "a",
    d: "M63.8,59.986,52.321,48.5a29.7,29.7,0,1,0-3.816,3.816L59.988,63.8ZM5.262,29.533A24.271,24.271,0,1,1,29.533,53.8,24.271,24.271,0,0,1,5.262,29.533Z",
    transform: "translate(0 0)"
  }), /*#__PURE__*/React.createElement("path", {
    className: "a",
    d: "M67.251,55.566a2.734,2.734,0,0,0-2.445-1.511h-.784a18.942,18.942,0,0,0,.59-2.734h5.661V45.853H64.612a18.941,18.941,0,0,0-.59-2.734h.784a2.734,2.734,0,0,0,2.445-1.511l2.734-5.468L65.094,33.7l-1.978,3.956h-1.8a14.916,14.916,0,0,0-2.49-2.619,8.2,8.2,0,1,0-15.375,0,14.924,14.924,0,0,0-2.489,2.619h-1.8L37.179,33.7l-4.89,2.445,2.734,5.468a2.734,2.734,0,0,0,2.445,1.511h.784a18.942,18.942,0,0,0-.59,2.734H32v5.468h5.661a18.942,18.942,0,0,0,.59,2.734h-.784a2.734,2.734,0,0,0-2.445,1.511l-2.734,5.468,4.89,2.445,1.978-3.956h1.8A12.778,12.778,0,0,0,51.137,64.99a12.778,12.778,0,0,0,10.177-5.468h1.8l1.978,3.956,4.89-2.445ZM48.4,32.184a2.734,2.734,0,0,1,5.468,0,2.768,2.768,0,0,1-.025.325,11.461,11.461,0,0,0-5.417,0A2.766,2.766,0,0,1,48.4,32.184Zm2.734,27.338c-4.522,0-8.2-4.905-8.2-10.935s3.679-10.935,8.2-10.935,8.2,4.905,8.2,10.935S55.659,59.522,51.137,59.522Z",
    transform: "translate(-21.558 -15.912)"
  })));
}

function SuccessIcon(_ref) {
  var _ref$fontSize = _ref.fontSize,
      fontSize = _ref$fontSize === void 0 ? 32 : _ref$fontSize;
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: fontSize * 2,
    height: fontSize * 2,
    viewBox: "0 0 64 64"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M32,0A32,32,0,1,0,64,32,32.036,32.036,0,0,0,32,0Zm0,61.538A29.538,29.538,0,1,1,61.538,32,29.573,29.573,0,0,1,32,61.538Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M49.5,15.336,27.547,32.626,14.32,25.219a1.873,1.873,0,0,0-2.007.156.817.817,0,0,0,.223,1.406l14.286,8a1.846,1.846,0,0,0,.893.219,1.748,1.748,0,0,0,1.069-.336l22.857-18a.809.809,0,0,0-.119-1.411A1.882,1.882,0,0,0,49.5,15.336Z",
    transform: "translate(0 5.625)"
  }));
}

function Icon(_ref) {
  var fontSize = _ref.fontSize,
      type = _ref.type;
  return /*#__PURE__*/React.createElement(React.Fragment, null, type === 'error' && /*#__PURE__*/React.createElement(ErrorIcon, {
    fontSize: fontSize
  }), type === 'info' && /*#__PURE__*/React.createElement(InfoIcon, {
    fontSize: fontSize
  }), type === 'warning' && /*#__PURE__*/React.createElement(WarningIcon, {
    fontSize: fontSize
  }), type === 'success' && /*#__PURE__*/React.createElement(SuccessIcon, {
    fontSize: fontSize
  }));
}

var font = 'Helvetica Neue, sans-serif';
var black = '#000000';
var white = '#ffffff';
var error = '#E25837';
var success = '#37E29A';
var warning = '#F4E048';
var info = '#9A40D3';
var boxShadow = 'box-shadow: 4px 4px 8px #00000029;';
var startX = keyframes(["from{transform:translateX(-100%);opacity:0.25;}to{transform:translateX(0);opacity:1;}"]);
var startY = keyframes(["from{transform:translateY(100%);opacity:0.25;}to{transform:translateY(0);opacity:1;}"]);
var theme = {
  boxShadow: boxShadow,
  font: font,
  animations: {
    startX: startX,
    startY: startY
  },
  colors: {
    black: black,
    white: white,
    error: error,
    warning: warning,
    info: info,
    success: success
  }
};

var ToastWrapper = styled.div.withConfig({
  displayName: "components__ToastWrapper",
  componentId: "sc-cn87nn-0"
})(["position:relative;overflow:hidden;margin:", "px;width:660px;height:180px;bottom:0;display:flex;justify-content:flex-start;align-items:center;border-radius:24px;padding:", "px;background-color:", ";color:", ";svg{fill:", ";;}animation:", " 1s;"], function (props) {
  return props.margin;
}, function (props) {
  return props.fontSize;
}, function (props) {
  return theme.colors[props.type];
}, function (props) {
  return props.type === 'warning' ? theme.colors.black : theme.colors.white;
}, function (props) {
  return props.type === 'warning' ? theme.colors.black : theme.colors.white;
}, function (props) {
  return theme.animations[props.animation];
});
var Message = styled.h3.withConfig({
  displayName: "components__Message",
  componentId: "sc-cn87nn-1"
})(["margin:0;font-size:", "px;font-family:", ";font-weight:500;padding:0px ", "px;"], function (props) {
  return props.fontSize;
}, theme.font, function (props) {
  return props.fontSize;
});
var Description = styled.h4.withConfig({
  displayName: "components__Description",
  componentId: "sc-cn87nn-2"
})(["margin:0;font-size:", "px;font-family:", ";font-weight:500;padding:0px ", "px;padding-top:", "px;"], function (props) {
  return props.fontSize * 0.75;
}, theme.font, function (props) {
  return props.fontSize;
}, function (props) {
  return props.fontSize;
});

function Toast(_ref) {
  var _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'success' : _ref$type,
      _ref$fontSize = _ref.fontSize,
      fontSize = _ref$fontSize === void 0 ? 32 : _ref$fontSize,
      _ref$animation = _ref.animation,
      animation = _ref$animation === void 0 ? 'startX' : _ref$animation,
      message = _ref.message,
      description = _ref.description,
      margin = _ref.margin,
      id = _ref.id;

  var deleteToast = function deleteToast() {
    console.log(id);
    toastStore.removeToast(id);
  };

  return /*#__PURE__*/React.createElement(ToastWrapper, {
    type: type,
    margin: margin,
    fontSize: fontSize,
    animation: animation
  }, /*#__PURE__*/React.createElement(Icon, {
    type: type,
    fontSize: fontSize
  }), /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      return console.log('dd');
    }
  }, /*#__PURE__*/React.createElement(Message, {
    fontSize: fontSize
  }, message), description && /*#__PURE__*/React.createElement(Description, {
    fontSize: fontSize
  }, description)), /*#__PURE__*/React.createElement(CloseIcon, {
    fontSize: fontSize,
    onClick: deleteToast
  }));
}

var Portal = /*#__PURE__*/memo(function Portal(_ref) {
  var children = _ref.children;
  var el = document.createElement('div');
  useEffect(function () {
    document.body.appendChild(el);
    return function () {
      document.body.removeChild(el);
    };
  });
  return /*#__PURE__*/ReactDOM.createPortal(children, el);
});

function useToast() {
  var _useState = useState(toastStore.toastList),
      _useState2 = _slicedToArray(_useState, 2),
      toastList = _useState2[0],
      setToastList = _useState2[1];

  useEffect(function () {
    var unsubscribe = toastStore.subscribe('TOAST', setToastList);
    return function () {
      unsubscribe();
    };
  }, []);
  return toastList;
}

var ToasterWrapper = styled.div.withConfig({
  displayName: "components__ToasterWrapper",
  componentId: "sc-13csuii-0"
})(["position:absolute;overflow:hidden;", ""], function (props) {
  if (props.position === 'bottom-right') {
    return "bottom:  ".concat(props.margin, "px;\n  right: ").concat(props.margin, "px;");
  }

  if (props.position === 'bottom-left') {
    return "bottom:  ".concat(props.margin, "px;\n  left: ").concat(props.margin, "px;");
  }

  if (props.position === 'top-right') {
    return "top:  ".concat(props.margin, "px;\n  right: ").concat(props.margin, "px;");
  }

  if (props.position === 'top-left') {
    return "top:  ".concat(props.margin, "px;\n  left: ").concat(props.margin, "px;");
  }
});

var Toaster = /*#__PURE__*/memo(function Toaster(_ref) {
  var _ref$position = _ref.position,
      position = _ref$position === void 0 ? 'bottom-left' : _ref$position,
      _ref$margin = _ref.margin,
      margin = _ref$margin === void 0 ? 16 : _ref$margin,
      delay = _ref.delay;
  var toastList = useToast();
  return /*#__PURE__*/React.createElement(Portal, null, /*#__PURE__*/React.createElement(ToasterWrapper, {
    position: position,
    margin: margin
  }, toastList.map(function (toast, index) {
    return /*#__PURE__*/React.createElement(Toast, _extends({}, toast, {
      margin: margin,
      key: toast.id,
      delay: delay,
      id: index
    }));
  })));
});

export { Toast, Toaster, toastStore };
//# sourceMappingURL=index.es.js.map
