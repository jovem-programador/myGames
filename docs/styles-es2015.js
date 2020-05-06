(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* CSS reset */\n\n* {\n  box-sizing: border-box;\n  outline: none;\n}\n\nhtml, body {\n  width: 100%;\n  padding: 0%;\n  margin: 0;\n  font-family: 'Comic Neue', cursive;\n  font-size: 16px;\n}\n\nbody {\n  background-image: url('tumblr_psa72vLYa81upcvga_1280.gif');\n  background-attachment: fixed;\n  background-position: bottom center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-color: black;\n  color: aliceblue;\n}\n\na {\n  color: #DCDCDC;\n  text-decoration: none;\n  display: inline-block;\n}\n\na:hover {\n  color: ;\n}\n\napp-root {\n  min-height: 100%;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  max-width: 960px;\n  margin: auto;\n}\n\n/* Sticky footer */\n\nhtml, body, app-root {\n  position: relative;\n  height: 100%;\n}\n\n/* Responsivo */\n\n@media (min-width: 640px) {\n  body {\n    background-position: center;\n  }\n}\n\n/*Botões genéricos*/\n\n.basic-button {\n  display: inline-block;\n  padding: .5rem 1rem;\n  color: rgb(0, 32, 0);\n  background: aliceblue;\n  border-radius: .3rem;\n  border: none;\n}\n\n.basic-button:hover {\n  color: black;\n  background: #1E90FF;\n  border: none;\n}\n\n/* Classes de uso geral */\n\n.center {\n  text-align: center;\n}\n\n.small {\n  font-size: small;\n}\n\n/* Bordas das caixas */\n\n.hborder {\n border-left: 2px solid rgb(16, 255, 16);\n border-right: 2px solid rgb(16, 255, 16);\n}\n\n.vborder {\n  border-top: 2px solid rgb(16, 255, 16);\n  border-bottom: 2px solid rgb(16, 255, 16);\n}\n\n.hborder, .vborder {\n  position: relative;\n  box-shadow: 5px 5px 5px rgba(0, 0, 0, 7);\n}\n\n.hbd {\n  position: absolute;\n  width: .4rem;\n  height: 2px;\n  background: rgb(16, 255, 16);\n}\n\n.vbd {\n position: absolute;\n height: .5rem;\n width: 2px;\n background: rgb(16, 255, 16);\n}\n\n.tl {\n  top: 0;\n  left: 0;\n}\n\n.tr {\n  top: 0;\n  right: 0;\n}\n\n.br {\n  bottom: 0;\n  right: 0;\n}\n\n.bl {\n  bottom: 0;\n  left: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGNBQWM7O0FBRWQ7RUFDRSxzQkFBc0I7RUFDdEIsYUFBYTtBQUNmOztBQUNBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxTQUFTO0VBQ1Qsa0NBQWtDO0VBQ2xDLGVBQWU7QUFDakI7O0FBRUE7RUFDRSwwREFBaUU7RUFDakUsNEJBQTRCO0VBQzVCLGtDQUFrQztFQUNsQyw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLE9BQU87QUFDVDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBLGtCQUFrQjs7QUFFbEI7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBLGVBQWU7O0FBRWY7RUFDRTtJQUNFLDJCQUEyQjtFQUM3QjtBQUNGOztBQUVBLG1CQUFtQjs7QUFDbkI7RUFDRSxxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsb0JBQW9CO0VBQ3BCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBLHlCQUF5Qjs7QUFDekI7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUEsc0JBQXNCOztBQUV0QjtDQUNDLHVDQUF1QztDQUN2Qyx3Q0FBd0M7QUFDekM7O0FBRUE7RUFDRSxzQ0FBc0M7RUFDdEMseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLDRCQUE0QjtBQUM5Qjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixhQUFhO0NBQ2IsVUFBVTtDQUNWLDRCQUE0QjtBQUM3Qjs7QUFDQTtFQUNFLE1BQU07RUFDTixPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxNQUFNO0VBQ04sUUFBUTtBQUNWOztBQUVBO0VBQ0UsU0FBUztFQUNULFFBQVE7QUFDVjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxPQUFPO0FBQ1QiLCJmaWxlIjoic3JjL3N0eWxlcy5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBDU1MgcmVzZXQgKi9cblxuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5odG1sLCBib2R5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAlO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiAnQ29taWMgTmV1ZScsIGN1cnNpdmU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnYXNzZXRzL3R1bWJscl9wc2E3MnZMWWE4MXVwY3ZnYV8xMjgwLmdpZicpO1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b20gY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgY29sb3I6IGFsaWNlYmx1ZTtcbn1cblxuYSB7XG4gIGNvbG9yOiAjRENEQ0RDO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuYTpob3ZlciB7XG4gIGNvbG9yOiA7XG59XG5cbmFwcC1yb290IHtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogOTYwcHg7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLyogU3RpY2t5IGZvb3RlciAqL1xuXG5odG1sLCBib2R5LCBhcHAtcm9vdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4vKiBSZXNwb25zaXZvICovXG5cbkBtZWRpYSAobWluLXdpZHRoOiA2NDBweCkge1xuICBib2R5IHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIH1cbn1cblxuLypCb3TDtWVzIGdlbsOpcmljb3MqL1xuLmJhc2ljLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogLjVyZW0gMXJlbTtcbiAgY29sb3I6IHJnYigwLCAzMiwgMCk7XG4gIGJhY2tncm91bmQ6IGFsaWNlYmx1ZTtcbiAgYm9yZGVyLXJhZGl1czogLjNyZW07XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLmJhc2ljLWJ1dHRvbjpob3ZlciB7XG4gIGNvbG9yOiBibGFjaztcbiAgYmFja2dyb3VuZDogIzFFOTBGRjtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4vKiBDbGFzc2VzIGRlIHVzbyBnZXJhbCAqL1xuLmNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNtYWxsIHtcbiAgZm9udC1zaXplOiBzbWFsbDtcbn1cblxuLyogQm9yZGFzIGRhcyBjYWl4YXMgKi9cblxuLmhib3JkZXIge1xuIGJvcmRlci1sZWZ0OiAycHggc29saWQgcmdiKDE2LCAyNTUsIDE2KTtcbiBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCByZ2IoMTYsIDI1NSwgMTYpO1xufVxuXG4udmJvcmRlciB7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCByZ2IoMTYsIDI1NSwgMTYpO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiKDE2LCAyNTUsIDE2KTtcbn1cblxuLmhib3JkZXIsIC52Ym9yZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3gtc2hhZG93OiA1cHggNXB4IDVweCByZ2JhKDAsIDAsIDAsIDcpO1xufVxuXG4uaGJkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogLjRyZW07XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kOiByZ2IoMTYsIDI1NSwgMTYpO1xufVxuXG4udmJkIHtcbiBwb3NpdGlvbjogYWJzb2x1dGU7XG4gaGVpZ2h0OiAuNXJlbTtcbiB3aWR0aDogMnB4O1xuIGJhY2tncm91bmQ6IHJnYigxNiwgMjU1LCAxNik7XG59XG4udGwge1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG59XG5cbi50ciB7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG59XG5cbi5iciB7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG59XG5cbi5ibCB7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbn1cbiJdfQ== */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Projeto Angular Anderson Marley\myGames\src\styles.css */"./src/styles.css");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map