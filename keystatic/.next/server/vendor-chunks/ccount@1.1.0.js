"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/ccount@1.1.0";
exports.ids = ["vendor-chunks/ccount@1.1.0"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/ccount@1.1.0/node_modules/ccount/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/.pnpm/ccount@1.1.0/node_modules/ccount/index.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = ccount\n\nfunction ccount(source, character) {\n  var value = String(source)\n  var count = 0\n  var index\n\n  if (typeof character !== 'string') {\n    throw new Error('Expected character')\n  }\n\n  index = value.indexOf(character)\n\n  while (index !== -1) {\n    count++\n    index = value.indexOf(character, index + character.length)\n  }\n\n  return count\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vY2NvdW50QDEuMS4wL25vZGVfbW9kdWxlcy9jY291bnQvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQVk7O0FBRVo7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Aa2V5c3RhdGljL3RlbXBsYXRlcy1uZXh0anMvLi9ub2RlX21vZHVsZXMvLnBucG0vY2NvdW50QDEuMS4wL25vZGVfbW9kdWxlcy9jY291bnQvaW5kZXguanM/NWE1NCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBjY291bnRcblxuZnVuY3Rpb24gY2NvdW50KHNvdXJjZSwgY2hhcmFjdGVyKSB7XG4gIHZhciB2YWx1ZSA9IFN0cmluZyhzb3VyY2UpXG4gIHZhciBjb3VudCA9IDBcbiAgdmFyIGluZGV4XG5cbiAgaWYgKHR5cGVvZiBjaGFyYWN0ZXIgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBjaGFyYWN0ZXInKVxuICB9XG5cbiAgaW5kZXggPSB2YWx1ZS5pbmRleE9mKGNoYXJhY3RlcilcblxuICB3aGlsZSAoaW5kZXggIT09IC0xKSB7XG4gICAgY291bnQrK1xuICAgIGluZGV4ID0gdmFsdWUuaW5kZXhPZihjaGFyYWN0ZXIsIGluZGV4ICsgY2hhcmFjdGVyLmxlbmd0aClcbiAgfVxuXG4gIHJldHVybiBjb3VudFxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/ccount@1.1.0/node_modules/ccount/index.js\n");

/***/ })

};
;