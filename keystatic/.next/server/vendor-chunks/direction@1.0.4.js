"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/direction@1.0.4";
exports.ids = ["vendor-chunks/direction@1.0.4"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/direction@1.0.4/node_modules/direction/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/.pnpm/direction@1.0.4/node_modules/direction/index.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = direction\n\nvar RTL = '\\u0591-\\u07FF\\uFB1D-\\uFDFD\\uFE70-\\uFEFC'\nvar LTR =\n  'A-Za-z\\u00C0-\\u00D6\\u00D8-\\u00F6' +\n  '\\u00F8-\\u02B8\\u0300-\\u0590\\u0800-\\u1FFF\\u200E\\u2C00-\\uFB1C' +\n  '\\uFE00-\\uFE6F\\uFEFD-\\uFFFF'\n\nvar rtl = new RegExp('^[^' + LTR + ']*[' + RTL + ']')\nvar ltr = new RegExp('^[^' + RTL + ']*[' + LTR + ']')\n\nfunction direction(value) {\n  value = String(value || '')\n\n  if (rtl.test(value)) {\n    return 'rtl'\n  }\n\n  if (ltr.test(value)) {\n    return 'ltr'\n  }\n\n  return 'neutral'\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vZGlyZWN0aW9uQDEuMC40L25vZGVfbW9kdWxlcy9kaXJlY3Rpb24vaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQVk7O0FBRVo7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGtleXN0YXRpYy90ZW1wbGF0ZXMtbmV4dGpzLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2RpcmVjdGlvbkAxLjAuNC9ub2RlX21vZHVsZXMvZGlyZWN0aW9uL2luZGV4LmpzPzM3ZmIiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gZGlyZWN0aW9uXG5cbnZhciBSVEwgPSAnXFx1MDU5MS1cXHUwN0ZGXFx1RkIxRC1cXHVGREZEXFx1RkU3MC1cXHVGRUZDJ1xudmFyIExUUiA9XG4gICdBLVphLXpcXHUwMEMwLVxcdTAwRDZcXHUwMEQ4LVxcdTAwRjYnICtcbiAgJ1xcdTAwRjgtXFx1MDJCOFxcdTAzMDAtXFx1MDU5MFxcdTA4MDAtXFx1MUZGRlxcdTIwMEVcXHUyQzAwLVxcdUZCMUMnICtcbiAgJ1xcdUZFMDAtXFx1RkU2RlxcdUZFRkQtXFx1RkZGRidcblxudmFyIHJ0bCA9IG5ldyBSZWdFeHAoJ15bXicgKyBMVFIgKyAnXSpbJyArIFJUTCArICddJylcbnZhciBsdHIgPSBuZXcgUmVnRXhwKCdeW14nICsgUlRMICsgJ10qWycgKyBMVFIgKyAnXScpXG5cbmZ1bmN0aW9uIGRpcmVjdGlvbih2YWx1ZSkge1xuICB2YWx1ZSA9IFN0cmluZyh2YWx1ZSB8fCAnJylcblxuICBpZiAocnRsLnRlc3QodmFsdWUpKSB7XG4gICAgcmV0dXJuICdydGwnXG4gIH1cblxuICBpZiAobHRyLnRlc3QodmFsdWUpKSB7XG4gICAgcmV0dXJuICdsdHInXG4gIH1cblxuICByZXR1cm4gJ25ldXRyYWwnXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/direction@1.0.4/node_modules/direction/index.js\n");

/***/ })

};
;