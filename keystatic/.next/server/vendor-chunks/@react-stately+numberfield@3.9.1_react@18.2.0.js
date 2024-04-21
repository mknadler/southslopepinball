"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@react-stately+numberfield@3.9.1_react@18.2.0";
exports.ids = ["vendor-chunks/@react-stately+numberfield@3.9.1_react@18.2.0"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@react-stately+numberfield@3.9.1_react@18.2.0/node_modules/@react-stately/numberfield/dist/import.mjs":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@react-stately+numberfield@3.9.1_react@18.2.0/node_modules/@react-stately/numberfield/dist/import.mjs ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useNumberFieldState: () => (/* binding */ $de67e98908f0c6ee$export$7f629e9dc1ecf37c)\n/* harmony export */ });\n/* harmony import */ var _react_stately_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-stately/utils */ \"(ssr)/./node_modules/.pnpm/@react-stately+utils@3.9.1_react@18.2.0/node_modules/@react-stately/utils/dist/import.mjs\");\n/* harmony import */ var _react_stately_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-stately/form */ \"(ssr)/./node_modules/.pnpm/@react-stately+form@3.0.1_react@18.2.0/node_modules/@react-stately/form/dist/import.mjs\");\n/* harmony import */ var _internationalized_number__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @internationalized/number */ \"(ssr)/./node_modules/.pnpm/@internationalized+number@3.5.1/node_modules/@internationalized/number/dist/import.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/.pnpm/next@14.2.2_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n\n\n\n\n\n/*\n * Copyright 2020 Adobe. All rights reserved.\n * This file is licensed to you under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License. You may obtain a copy\n * of the License at http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software distributed under\n * the License is distributed on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS\n * OF ANY KIND, either express or implied. See the License for the specific language\n * governing permissions and limitations under the License.\n */ /*\n * Copyright 2020 Adobe. All rights reserved.\n * This file is licensed to you under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License. You may obtain a copy\n * of the License at http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software distributed under\n * the License is distributed on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS\n * OF ANY KIND, either express or implied. See the License for the specific language\n * governing permissions and limitations under the License.\n */ \n\n\n\nfunction $de67e98908f0c6ee$export$7f629e9dc1ecf37c(props) {\n    let { minValue: minValue, maxValue: maxValue, step: step, formatOptions: formatOptions, value: value, defaultValue: defaultValue = NaN, onChange: onChange, locale: locale, isDisabled: isDisabled, isReadOnly: isReadOnly } = props;\n    if (value === null) value = NaN;\n    if (value !== undefined && !isNaN(value)) {\n        if (step !== undefined && !isNaN(step)) value = (0, _react_stately_utils__WEBPACK_IMPORTED_MODULE_1__.snapValueToStep)(value, minValue, maxValue, step);\n        else value = (0, _react_stately_utils__WEBPACK_IMPORTED_MODULE_1__.clamp)(value, minValue, maxValue);\n    }\n    if (!isNaN(defaultValue)) {\n        if (step !== undefined && !isNaN(step)) defaultValue = (0, _react_stately_utils__WEBPACK_IMPORTED_MODULE_1__.snapValueToStep)(defaultValue, minValue, maxValue, step);\n        else defaultValue = (0, _react_stately_utils__WEBPACK_IMPORTED_MODULE_1__.clamp)(defaultValue, minValue, maxValue);\n    }\n    let [numberValue, setNumberValue] = (0, _react_stately_utils__WEBPACK_IMPORTED_MODULE_1__.useControlledState)(value, isNaN(defaultValue) ? NaN : defaultValue, onChange);\n    let [inputValue, setInputValue] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>isNaN(numberValue) ? \"\" : new (0, _internationalized_number__WEBPACK_IMPORTED_MODULE_2__.NumberFormatter)(locale, formatOptions).format(numberValue));\n    let numberParser = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>new (0, _internationalized_number__WEBPACK_IMPORTED_MODULE_2__.NumberParser)(locale, formatOptions), [\n        locale,\n        formatOptions\n    ]);\n    let numberingSystem = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>numberParser.getNumberingSystem(inputValue), [\n        numberParser,\n        inputValue\n    ]);\n    let formatter = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>new (0, _internationalized_number__WEBPACK_IMPORTED_MODULE_2__.NumberFormatter)(locale, {\n            ...formatOptions,\n            numberingSystem: numberingSystem\n        }), [\n        locale,\n        formatOptions,\n        numberingSystem\n    ]);\n    let intlOptions = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>formatter.resolvedOptions(), [\n        formatter\n    ]);\n    let format = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((value)=>isNaN(value) || value === null ? \"\" : formatter.format(value), [\n        formatter\n    ]);\n    let validation = (0, _react_stately_form__WEBPACK_IMPORTED_MODULE_3__.useFormValidationState)({\n        ...props,\n        value: numberValue\n    });\n    let clampStep = step !== undefined && !isNaN(step) ? step : 1;\n    if (intlOptions.style === \"percent\" && (step === undefined || isNaN(step))) clampStep = 0.01;\n    // Update the input value when the number value or format options change. This is done\n    // in a useEffect so that the controlled behavior is correct and we only update the\n    // textfield after prop changes.\n    let [prevValue, setPrevValue] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(numberValue);\n    let [prevLocale, setPrevLocale] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(locale);\n    let [prevFormatOptions, setPrevFormatOptions] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(formatOptions);\n    if (!Object.is(numberValue, prevValue) || locale !== prevLocale || formatOptions !== prevFormatOptions) {\n        setInputValue(format(numberValue));\n        setPrevValue(numberValue);\n        setPrevLocale(locale);\n        setPrevFormatOptions(formatOptions);\n    }\n    let parsedValue = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>numberParser.parse(inputValue), [\n        numberParser,\n        inputValue\n    ]);\n    let commit = ()=>{\n        // Set to empty state if input value is empty\n        if (!inputValue.length) {\n            setNumberValue(NaN);\n            setInputValue(value === undefined ? \"\" : format(numberValue));\n            return;\n        }\n        // if it failed to parse, then reset input to formatted version of current number\n        if (isNaN(parsedValue)) {\n            setInputValue(format(numberValue));\n            return;\n        }\n        // Clamp to min and max, round to the nearest step, and round to specified number of digits\n        let clampedValue;\n        if (step === undefined || isNaN(step)) clampedValue = (0, _react_stately_utils__WEBPACK_IMPORTED_MODULE_1__.clamp)(parsedValue, minValue, maxValue);\n        else clampedValue = (0, _react_stately_utils__WEBPACK_IMPORTED_MODULE_1__.snapValueToStep)(parsedValue, minValue, maxValue, step);\n        clampedValue = numberParser.parse(format(clampedValue));\n        setNumberValue(clampedValue);\n        // in a controlled state, the numberValue won't change, so we won't go back to our old input without help\n        setInputValue(format(value === undefined ? clampedValue : numberValue));\n    };\n    let safeNextStep = (operation, minMax = 0)=>{\n        let prev = parsedValue;\n        if (isNaN(prev)) {\n            // if the input is empty, start from the min/max value when incrementing/decrementing,\n            // or zero if there is no min/max value defined.\n            let newValue = isNaN(minMax) ? 0 : minMax;\n            return (0, _react_stately_utils__WEBPACK_IMPORTED_MODULE_1__.snapValueToStep)(newValue, minValue, maxValue, clampStep);\n        } else {\n            // otherwise, first snap the current value to the nearest step. if it moves in the direction\n            // we're going, use that value, otherwise add the step and snap that value.\n            let newValue = (0, _react_stately_utils__WEBPACK_IMPORTED_MODULE_1__.snapValueToStep)(prev, minValue, maxValue, clampStep);\n            if (operation === \"+\" && newValue > prev || operation === \"-\" && newValue < prev) return newValue;\n            return (0, _react_stately_utils__WEBPACK_IMPORTED_MODULE_1__.snapValueToStep)($de67e98908f0c6ee$var$handleDecimalOperation(operation, prev, clampStep), minValue, maxValue, clampStep);\n        }\n    };\n    let increment = ()=>{\n        let newValue = safeNextStep(\"+\", minValue);\n        // if we've arrived at the same value that was previously in the state, the\n        // input value should be updated to match\n        // ex type 4, press increment, highlight the number in the input, type 4 again, press increment\n        // you'd be at 5, then incrementing to 5 again, so no re-render would happen and 4 would be left in the input\n        if (newValue === numberValue) setInputValue(format(newValue));\n        setNumberValue(newValue);\n        validation.commitValidation();\n    };\n    let decrement = ()=>{\n        let newValue = safeNextStep(\"-\", maxValue);\n        if (newValue === numberValue) setInputValue(format(newValue));\n        setNumberValue(newValue);\n        validation.commitValidation();\n    };\n    let incrementToMax = ()=>{\n        if (maxValue != null) {\n            setNumberValue((0, _react_stately_utils__WEBPACK_IMPORTED_MODULE_1__.snapValueToStep)(maxValue, minValue, maxValue, clampStep));\n            validation.commitValidation();\n        }\n    };\n    let decrementToMin = ()=>{\n        if (minValue != null) {\n            setNumberValue(minValue);\n            validation.commitValidation();\n        }\n    };\n    let canIncrement = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>!isDisabled && !isReadOnly && (isNaN(parsedValue) || maxValue === undefined || isNaN(maxValue) || (0, _react_stately_utils__WEBPACK_IMPORTED_MODULE_1__.snapValueToStep)(parsedValue, minValue, maxValue, clampStep) > parsedValue || $de67e98908f0c6ee$var$handleDecimalOperation(\"+\", parsedValue, clampStep) <= maxValue), [\n        isDisabled,\n        isReadOnly,\n        minValue,\n        maxValue,\n        clampStep,\n        parsedValue\n    ]);\n    let canDecrement = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>!isDisabled && !isReadOnly && (isNaN(parsedValue) || minValue === undefined || isNaN(minValue) || (0, _react_stately_utils__WEBPACK_IMPORTED_MODULE_1__.snapValueToStep)(parsedValue, minValue, maxValue, clampStep) < parsedValue || $de67e98908f0c6ee$var$handleDecimalOperation(\"-\", parsedValue, clampStep) >= minValue), [\n        isDisabled,\n        isReadOnly,\n        minValue,\n        maxValue,\n        clampStep,\n        parsedValue\n    ]);\n    let validate = (value)=>numberParser.isValidPartialNumber(value, minValue, maxValue);\n    return {\n        ...validation,\n        validate: validate,\n        increment: increment,\n        incrementToMax: incrementToMax,\n        decrement: decrement,\n        decrementToMin: decrementToMin,\n        canIncrement: canIncrement,\n        canDecrement: canDecrement,\n        minValue: minValue,\n        maxValue: maxValue,\n        numberValue: parsedValue,\n        setNumberValue: setNumberValue,\n        setInputValue: setInputValue,\n        inputValue: inputValue,\n        commit: commit\n    };\n}\nfunction $de67e98908f0c6ee$var$handleDecimalOperation(operator, value1, value2) {\n    let result = operator === \"+\" ? value1 + value2 : value1 - value2;\n    // Check if we have decimals\n    if (value1 % 1 !== 0 || value2 % 1 !== 0) {\n        const value1Decimal = value1.toString().split(\".\");\n        const value2Decimal = value2.toString().split(\".\");\n        const value1DecimalLength = value1Decimal[1] && value1Decimal[1].length || 0;\n        const value2DecimalLength = value2Decimal[1] && value2Decimal[1].length || 0;\n        const multiplier = Math.pow(10, Math.max(value1DecimalLength, value2DecimalLength));\n        // Transform the decimals to integers based on the precision\n        value1 = Math.round(value1 * multiplier);\n        value2 = Math.round(value2 * multiplier);\n        // Perform the operation on integers values to make sure we don't get a fancy decimal value\n        result = operator === \"+\" ? value1 + value2 : value1 - value2;\n        // Transform the integer result back to decimal\n        result /= multiplier;\n    }\n    return result;\n}\n\n\n\n\n\n//# sourceMappingURL=module.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHJlYWN0LXN0YXRlbHkrbnVtYmVyZmllbGRAMy45LjFfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9AcmVhY3Qtc3RhdGVseS9udW1iZXJmaWVsZC9kaXN0L2ltcG9ydC5tanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBdUo7QUFDM0Q7QUFDNkI7QUFDVDs7QUFFaEg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQSxVQUFVLHVOQUF1TjtBQUNqTztBQUNBO0FBQ0EsNERBQTRELGlFQUFzQjtBQUNsRix5QkFBeUIsdURBQVk7QUFDckM7QUFDQTtBQUNBLG1FQUFtRSxpRUFBc0I7QUFDekYsZ0NBQWdDLHVEQUFZO0FBQzVDO0FBQ0EsNENBQTRDLG9FQUF5QjtBQUNyRSwwQ0FBMEMsMkNBQWUsd0NBQXdDLHNFQUFzQjtBQUN2SCwyQkFBMkIsMENBQWMsY0FBYyxtRUFBbUI7QUFDMUU7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLDBDQUFjO0FBQzVDO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QiwwQ0FBYyxjQUFjLHNFQUFzQjtBQUMxRTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDBDQUFjO0FBQ3hDO0FBQ0E7QUFDQSxxQkFBcUIsOENBQWtCO0FBQ3ZDO0FBQ0E7QUFDQSx5QkFBeUIsdUVBQTZCO0FBQ3REO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QywyQ0FBZTtBQUN2RCwwQ0FBMEMsMkNBQWU7QUFDekQsd0RBQXdELDJDQUFlO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiwwQ0FBYztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0VBQWtFLHVEQUFZO0FBQzlFLGdDQUFnQyxpRUFBc0I7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixpRUFBc0I7QUFDN0MsVUFBVTtBQUNWO0FBQ0E7QUFDQSwrQkFBK0IsaUVBQXNCO0FBQ3JEO0FBQ0EsdUJBQXVCLGlFQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLGlFQUFzQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsMENBQWMsNEdBQTRHLGlFQUFzQjtBQUMzSztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiwwQ0FBYyw0R0FBNEcsaUVBQXNCO0FBQzNLO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLMEU7QUFDMUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Aa2V5c3RhdGljL3RlbXBsYXRlcy1uZXh0anMvLi9ub2RlX21vZHVsZXMvLnBucG0vQHJlYWN0LXN0YXRlbHkrbnVtYmVyZmllbGRAMy45LjFfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9AcmVhY3Qtc3RhdGVseS9udW1iZXJmaWVsZC9kaXN0L2ltcG9ydC5tanM/MGQwYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3NuYXBWYWx1ZVRvU3RlcCBhcyAkdmhqQ2kkc25hcFZhbHVlVG9TdGVwLCBjbGFtcCBhcyAkdmhqQ2kkY2xhbXAsIHVzZUNvbnRyb2xsZWRTdGF0ZSBhcyAkdmhqQ2kkdXNlQ29udHJvbGxlZFN0YXRlfSBmcm9tIFwiQHJlYWN0LXN0YXRlbHkvdXRpbHNcIjtcbmltcG9ydCB7dXNlRm9ybVZhbGlkYXRpb25TdGF0ZSBhcyAkdmhqQ2kkdXNlRm9ybVZhbGlkYXRpb25TdGF0ZX0gZnJvbSBcIkByZWFjdC1zdGF0ZWx5L2Zvcm1cIjtcbmltcG9ydCB7TnVtYmVyRm9ybWF0dGVyIGFzICR2aGpDaSROdW1iZXJGb3JtYXR0ZXIsIE51bWJlclBhcnNlciBhcyAkdmhqQ2kkTnVtYmVyUGFyc2VyfSBmcm9tIFwiQGludGVybmF0aW9uYWxpemVkL251bWJlclwiO1xuaW1wb3J0IHt1c2VTdGF0ZSBhcyAkdmhqQ2kkdXNlU3RhdGUsIHVzZU1lbW8gYXMgJHZoakNpJHVzZU1lbW8sIHVzZUNhbGxiYWNrIGFzICR2aGpDaSR1c2VDYWxsYmFja30gZnJvbSBcInJlYWN0XCI7XG5cbi8qXG4gKiBDb3B5cmlnaHQgMjAyMCBBZG9iZS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgZmlsZSBpcyBsaWNlbnNlZCB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5XG4gKiBvZiB0aGUgTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyXG4gKiB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBSRVBSRVNFTlRBVElPTlNcbiAqIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZVxuICogZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqLyAvKlxuICogQ29weXJpZ2h0IDIwMjAgQWRvYmUuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGZpbGUgaXMgbGljZW5zZWQgdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weVxuICogb2YgdGhlIExpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlclxuICogdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgUkVQUkVTRU5UQVRJT05TXG4gKiBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2VcbiAqIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi8gXG5cblxuXG5mdW5jdGlvbiAkZGU2N2U5ODkwOGYwYzZlZSRleHBvcnQkN2Y2MjllOWRjMWVjZjM3Yyhwcm9wcykge1xuICAgIGxldCB7IG1pblZhbHVlOiBtaW5WYWx1ZSwgbWF4VmFsdWU6IG1heFZhbHVlLCBzdGVwOiBzdGVwLCBmb3JtYXRPcHRpb25zOiBmb3JtYXRPcHRpb25zLCB2YWx1ZTogdmFsdWUsIGRlZmF1bHRWYWx1ZTogZGVmYXVsdFZhbHVlID0gTmFOLCBvbkNoYW5nZTogb25DaGFuZ2UsIGxvY2FsZTogbG9jYWxlLCBpc0Rpc2FibGVkOiBpc0Rpc2FibGVkLCBpc1JlYWRPbmx5OiBpc1JlYWRPbmx5IH0gPSBwcm9wcztcbiAgICBpZiAodmFsdWUgPT09IG51bGwpIHZhbHVlID0gTmFOO1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmICFpc05hTih2YWx1ZSkpIHtcbiAgICAgICAgaWYgKHN0ZXAgIT09IHVuZGVmaW5lZCAmJiAhaXNOYU4oc3RlcCkpIHZhbHVlID0gKDAsICR2aGpDaSRzbmFwVmFsdWVUb1N0ZXApKHZhbHVlLCBtaW5WYWx1ZSwgbWF4VmFsdWUsIHN0ZXApO1xuICAgICAgICBlbHNlIHZhbHVlID0gKDAsICR2aGpDaSRjbGFtcCkodmFsdWUsIG1pblZhbHVlLCBtYXhWYWx1ZSk7XG4gICAgfVxuICAgIGlmICghaXNOYU4oZGVmYXVsdFZhbHVlKSkge1xuICAgICAgICBpZiAoc3RlcCAhPT0gdW5kZWZpbmVkICYmICFpc05hTihzdGVwKSkgZGVmYXVsdFZhbHVlID0gKDAsICR2aGpDaSRzbmFwVmFsdWVUb1N0ZXApKGRlZmF1bHRWYWx1ZSwgbWluVmFsdWUsIG1heFZhbHVlLCBzdGVwKTtcbiAgICAgICAgZWxzZSBkZWZhdWx0VmFsdWUgPSAoMCwgJHZoakNpJGNsYW1wKShkZWZhdWx0VmFsdWUsIG1pblZhbHVlLCBtYXhWYWx1ZSk7XG4gICAgfVxuICAgIGxldCBbbnVtYmVyVmFsdWUsIHNldE51bWJlclZhbHVlXSA9ICgwLCAkdmhqQ2kkdXNlQ29udHJvbGxlZFN0YXRlKSh2YWx1ZSwgaXNOYU4oZGVmYXVsdFZhbHVlKSA/IE5hTiA6IGRlZmF1bHRWYWx1ZSwgb25DaGFuZ2UpO1xuICAgIGxldCBbaW5wdXRWYWx1ZSwgc2V0SW5wdXRWYWx1ZV0gPSAoMCwgJHZoakNpJHVzZVN0YXRlKSgoKT0+aXNOYU4obnVtYmVyVmFsdWUpID8gXCJcIiA6IG5ldyAoMCwgJHZoakNpJE51bWJlckZvcm1hdHRlcikobG9jYWxlLCBmb3JtYXRPcHRpb25zKS5mb3JtYXQobnVtYmVyVmFsdWUpKTtcbiAgICBsZXQgbnVtYmVyUGFyc2VyID0gKDAsICR2aGpDaSR1c2VNZW1vKSgoKT0+bmV3ICgwLCAkdmhqQ2kkTnVtYmVyUGFyc2VyKShsb2NhbGUsIGZvcm1hdE9wdGlvbnMpLCBbXG4gICAgICAgIGxvY2FsZSxcbiAgICAgICAgZm9ybWF0T3B0aW9uc1xuICAgIF0pO1xuICAgIGxldCBudW1iZXJpbmdTeXN0ZW0gPSAoMCwgJHZoakNpJHVzZU1lbW8pKCgpPT5udW1iZXJQYXJzZXIuZ2V0TnVtYmVyaW5nU3lzdGVtKGlucHV0VmFsdWUpLCBbXG4gICAgICAgIG51bWJlclBhcnNlcixcbiAgICAgICAgaW5wdXRWYWx1ZVxuICAgIF0pO1xuICAgIGxldCBmb3JtYXR0ZXIgPSAoMCwgJHZoakNpJHVzZU1lbW8pKCgpPT5uZXcgKDAsICR2aGpDaSROdW1iZXJGb3JtYXR0ZXIpKGxvY2FsZSwge1xuICAgICAgICAgICAgLi4uZm9ybWF0T3B0aW9ucyxcbiAgICAgICAgICAgIG51bWJlcmluZ1N5c3RlbTogbnVtYmVyaW5nU3lzdGVtXG4gICAgICAgIH0pLCBbXG4gICAgICAgIGxvY2FsZSxcbiAgICAgICAgZm9ybWF0T3B0aW9ucyxcbiAgICAgICAgbnVtYmVyaW5nU3lzdGVtXG4gICAgXSk7XG4gICAgbGV0IGludGxPcHRpb25zID0gKDAsICR2aGpDaSR1c2VNZW1vKSgoKT0+Zm9ybWF0dGVyLnJlc29sdmVkT3B0aW9ucygpLCBbXG4gICAgICAgIGZvcm1hdHRlclxuICAgIF0pO1xuICAgIGxldCBmb3JtYXQgPSAoMCwgJHZoakNpJHVzZUNhbGxiYWNrKSgodmFsdWUpPT5pc05hTih2YWx1ZSkgfHwgdmFsdWUgPT09IG51bGwgPyBcIlwiIDogZm9ybWF0dGVyLmZvcm1hdCh2YWx1ZSksIFtcbiAgICAgICAgZm9ybWF0dGVyXG4gICAgXSk7XG4gICAgbGV0IHZhbGlkYXRpb24gPSAoMCwgJHZoakNpJHVzZUZvcm1WYWxpZGF0aW9uU3RhdGUpKHtcbiAgICAgICAgLi4ucHJvcHMsXG4gICAgICAgIHZhbHVlOiBudW1iZXJWYWx1ZVxuICAgIH0pO1xuICAgIGxldCBjbGFtcFN0ZXAgPSBzdGVwICE9PSB1bmRlZmluZWQgJiYgIWlzTmFOKHN0ZXApID8gc3RlcCA6IDE7XG4gICAgaWYgKGludGxPcHRpb25zLnN0eWxlID09PSBcInBlcmNlbnRcIiAmJiAoc3RlcCA9PT0gdW5kZWZpbmVkIHx8IGlzTmFOKHN0ZXApKSkgY2xhbXBTdGVwID0gMC4wMTtcbiAgICAvLyBVcGRhdGUgdGhlIGlucHV0IHZhbHVlIHdoZW4gdGhlIG51bWJlciB2YWx1ZSBvciBmb3JtYXQgb3B0aW9ucyBjaGFuZ2UuIFRoaXMgaXMgZG9uZVxuICAgIC8vIGluIGEgdXNlRWZmZWN0IHNvIHRoYXQgdGhlIGNvbnRyb2xsZWQgYmVoYXZpb3IgaXMgY29ycmVjdCBhbmQgd2Ugb25seSB1cGRhdGUgdGhlXG4gICAgLy8gdGV4dGZpZWxkIGFmdGVyIHByb3AgY2hhbmdlcy5cbiAgICBsZXQgW3ByZXZWYWx1ZSwgc2V0UHJldlZhbHVlXSA9ICgwLCAkdmhqQ2kkdXNlU3RhdGUpKG51bWJlclZhbHVlKTtcbiAgICBsZXQgW3ByZXZMb2NhbGUsIHNldFByZXZMb2NhbGVdID0gKDAsICR2aGpDaSR1c2VTdGF0ZSkobG9jYWxlKTtcbiAgICBsZXQgW3ByZXZGb3JtYXRPcHRpb25zLCBzZXRQcmV2Rm9ybWF0T3B0aW9uc10gPSAoMCwgJHZoakNpJHVzZVN0YXRlKShmb3JtYXRPcHRpb25zKTtcbiAgICBpZiAoIU9iamVjdC5pcyhudW1iZXJWYWx1ZSwgcHJldlZhbHVlKSB8fCBsb2NhbGUgIT09IHByZXZMb2NhbGUgfHwgZm9ybWF0T3B0aW9ucyAhPT0gcHJldkZvcm1hdE9wdGlvbnMpIHtcbiAgICAgICAgc2V0SW5wdXRWYWx1ZShmb3JtYXQobnVtYmVyVmFsdWUpKTtcbiAgICAgICAgc2V0UHJldlZhbHVlKG51bWJlclZhbHVlKTtcbiAgICAgICAgc2V0UHJldkxvY2FsZShsb2NhbGUpO1xuICAgICAgICBzZXRQcmV2Rm9ybWF0T3B0aW9ucyhmb3JtYXRPcHRpb25zKTtcbiAgICB9XG4gICAgbGV0IHBhcnNlZFZhbHVlID0gKDAsICR2aGpDaSR1c2VNZW1vKSgoKT0+bnVtYmVyUGFyc2VyLnBhcnNlKGlucHV0VmFsdWUpLCBbXG4gICAgICAgIG51bWJlclBhcnNlcixcbiAgICAgICAgaW5wdXRWYWx1ZVxuICAgIF0pO1xuICAgIGxldCBjb21taXQgPSAoKT0+e1xuICAgICAgICAvLyBTZXQgdG8gZW1wdHkgc3RhdGUgaWYgaW5wdXQgdmFsdWUgaXMgZW1wdHlcbiAgICAgICAgaWYgKCFpbnB1dFZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgICAgc2V0TnVtYmVyVmFsdWUoTmFOKTtcbiAgICAgICAgICAgIHNldElucHV0VmFsdWUodmFsdWUgPT09IHVuZGVmaW5lZCA/IFwiXCIgOiBmb3JtYXQobnVtYmVyVmFsdWUpKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBpZiBpdCBmYWlsZWQgdG8gcGFyc2UsIHRoZW4gcmVzZXQgaW5wdXQgdG8gZm9ybWF0dGVkIHZlcnNpb24gb2YgY3VycmVudCBudW1iZXJcbiAgICAgICAgaWYgKGlzTmFOKHBhcnNlZFZhbHVlKSkge1xuICAgICAgICAgICAgc2V0SW5wdXRWYWx1ZShmb3JtYXQobnVtYmVyVmFsdWUpKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBDbGFtcCB0byBtaW4gYW5kIG1heCwgcm91bmQgdG8gdGhlIG5lYXJlc3Qgc3RlcCwgYW5kIHJvdW5kIHRvIHNwZWNpZmllZCBudW1iZXIgb2YgZGlnaXRzXG4gICAgICAgIGxldCBjbGFtcGVkVmFsdWU7XG4gICAgICAgIGlmIChzdGVwID09PSB1bmRlZmluZWQgfHwgaXNOYU4oc3RlcCkpIGNsYW1wZWRWYWx1ZSA9ICgwLCAkdmhqQ2kkY2xhbXApKHBhcnNlZFZhbHVlLCBtaW5WYWx1ZSwgbWF4VmFsdWUpO1xuICAgICAgICBlbHNlIGNsYW1wZWRWYWx1ZSA9ICgwLCAkdmhqQ2kkc25hcFZhbHVlVG9TdGVwKShwYXJzZWRWYWx1ZSwgbWluVmFsdWUsIG1heFZhbHVlLCBzdGVwKTtcbiAgICAgICAgY2xhbXBlZFZhbHVlID0gbnVtYmVyUGFyc2VyLnBhcnNlKGZvcm1hdChjbGFtcGVkVmFsdWUpKTtcbiAgICAgICAgc2V0TnVtYmVyVmFsdWUoY2xhbXBlZFZhbHVlKTtcbiAgICAgICAgLy8gaW4gYSBjb250cm9sbGVkIHN0YXRlLCB0aGUgbnVtYmVyVmFsdWUgd29uJ3QgY2hhbmdlLCBzbyB3ZSB3b24ndCBnbyBiYWNrIHRvIG91ciBvbGQgaW5wdXQgd2l0aG91dCBoZWxwXG4gICAgICAgIHNldElucHV0VmFsdWUoZm9ybWF0KHZhbHVlID09PSB1bmRlZmluZWQgPyBjbGFtcGVkVmFsdWUgOiBudW1iZXJWYWx1ZSkpO1xuICAgIH07XG4gICAgbGV0IHNhZmVOZXh0U3RlcCA9IChvcGVyYXRpb24sIG1pbk1heCA9IDApPT57XG4gICAgICAgIGxldCBwcmV2ID0gcGFyc2VkVmFsdWU7XG4gICAgICAgIGlmIChpc05hTihwcmV2KSkge1xuICAgICAgICAgICAgLy8gaWYgdGhlIGlucHV0IGlzIGVtcHR5LCBzdGFydCBmcm9tIHRoZSBtaW4vbWF4IHZhbHVlIHdoZW4gaW5jcmVtZW50aW5nL2RlY3JlbWVudGluZyxcbiAgICAgICAgICAgIC8vIG9yIHplcm8gaWYgdGhlcmUgaXMgbm8gbWluL21heCB2YWx1ZSBkZWZpbmVkLlxuICAgICAgICAgICAgbGV0IG5ld1ZhbHVlID0gaXNOYU4obWluTWF4KSA/IDAgOiBtaW5NYXg7XG4gICAgICAgICAgICByZXR1cm4gKDAsICR2aGpDaSRzbmFwVmFsdWVUb1N0ZXApKG5ld1ZhbHVlLCBtaW5WYWx1ZSwgbWF4VmFsdWUsIGNsYW1wU3RlcCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBvdGhlcndpc2UsIGZpcnN0IHNuYXAgdGhlIGN1cnJlbnQgdmFsdWUgdG8gdGhlIG5lYXJlc3Qgc3RlcC4gaWYgaXQgbW92ZXMgaW4gdGhlIGRpcmVjdGlvblxuICAgICAgICAgICAgLy8gd2UncmUgZ29pbmcsIHVzZSB0aGF0IHZhbHVlLCBvdGhlcndpc2UgYWRkIHRoZSBzdGVwIGFuZCBzbmFwIHRoYXQgdmFsdWUuXG4gICAgICAgICAgICBsZXQgbmV3VmFsdWUgPSAoMCwgJHZoakNpJHNuYXBWYWx1ZVRvU3RlcCkocHJldiwgbWluVmFsdWUsIG1heFZhbHVlLCBjbGFtcFN0ZXApO1xuICAgICAgICAgICAgaWYgKG9wZXJhdGlvbiA9PT0gXCIrXCIgJiYgbmV3VmFsdWUgPiBwcmV2IHx8IG9wZXJhdGlvbiA9PT0gXCItXCIgJiYgbmV3VmFsdWUgPCBwcmV2KSByZXR1cm4gbmV3VmFsdWU7XG4gICAgICAgICAgICByZXR1cm4gKDAsICR2aGpDaSRzbmFwVmFsdWVUb1N0ZXApKCRkZTY3ZTk4OTA4ZjBjNmVlJHZhciRoYW5kbGVEZWNpbWFsT3BlcmF0aW9uKG9wZXJhdGlvbiwgcHJldiwgY2xhbXBTdGVwKSwgbWluVmFsdWUsIG1heFZhbHVlLCBjbGFtcFN0ZXApO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBsZXQgaW5jcmVtZW50ID0gKCk9PntcbiAgICAgICAgbGV0IG5ld1ZhbHVlID0gc2FmZU5leHRTdGVwKFwiK1wiLCBtaW5WYWx1ZSk7XG4gICAgICAgIC8vIGlmIHdlJ3ZlIGFycml2ZWQgYXQgdGhlIHNhbWUgdmFsdWUgdGhhdCB3YXMgcHJldmlvdXNseSBpbiB0aGUgc3RhdGUsIHRoZVxuICAgICAgICAvLyBpbnB1dCB2YWx1ZSBzaG91bGQgYmUgdXBkYXRlZCB0byBtYXRjaFxuICAgICAgICAvLyBleCB0eXBlIDQsIHByZXNzIGluY3JlbWVudCwgaGlnaGxpZ2h0IHRoZSBudW1iZXIgaW4gdGhlIGlucHV0LCB0eXBlIDQgYWdhaW4sIHByZXNzIGluY3JlbWVudFxuICAgICAgICAvLyB5b3UnZCBiZSBhdCA1LCB0aGVuIGluY3JlbWVudGluZyB0byA1IGFnYWluLCBzbyBubyByZS1yZW5kZXIgd291bGQgaGFwcGVuIGFuZCA0IHdvdWxkIGJlIGxlZnQgaW4gdGhlIGlucHV0XG4gICAgICAgIGlmIChuZXdWYWx1ZSA9PT0gbnVtYmVyVmFsdWUpIHNldElucHV0VmFsdWUoZm9ybWF0KG5ld1ZhbHVlKSk7XG4gICAgICAgIHNldE51bWJlclZhbHVlKG5ld1ZhbHVlKTtcbiAgICAgICAgdmFsaWRhdGlvbi5jb21taXRWYWxpZGF0aW9uKCk7XG4gICAgfTtcbiAgICBsZXQgZGVjcmVtZW50ID0gKCk9PntcbiAgICAgICAgbGV0IG5ld1ZhbHVlID0gc2FmZU5leHRTdGVwKFwiLVwiLCBtYXhWYWx1ZSk7XG4gICAgICAgIGlmIChuZXdWYWx1ZSA9PT0gbnVtYmVyVmFsdWUpIHNldElucHV0VmFsdWUoZm9ybWF0KG5ld1ZhbHVlKSk7XG4gICAgICAgIHNldE51bWJlclZhbHVlKG5ld1ZhbHVlKTtcbiAgICAgICAgdmFsaWRhdGlvbi5jb21taXRWYWxpZGF0aW9uKCk7XG4gICAgfTtcbiAgICBsZXQgaW5jcmVtZW50VG9NYXggPSAoKT0+e1xuICAgICAgICBpZiAobWF4VmFsdWUgIT0gbnVsbCkge1xuICAgICAgICAgICAgc2V0TnVtYmVyVmFsdWUoKDAsICR2aGpDaSRzbmFwVmFsdWVUb1N0ZXApKG1heFZhbHVlLCBtaW5WYWx1ZSwgbWF4VmFsdWUsIGNsYW1wU3RlcCkpO1xuICAgICAgICAgICAgdmFsaWRhdGlvbi5jb21taXRWYWxpZGF0aW9uKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGxldCBkZWNyZW1lbnRUb01pbiA9ICgpPT57XG4gICAgICAgIGlmIChtaW5WYWx1ZSAhPSBudWxsKSB7XG4gICAgICAgICAgICBzZXROdW1iZXJWYWx1ZShtaW5WYWx1ZSk7XG4gICAgICAgICAgICB2YWxpZGF0aW9uLmNvbW1pdFZhbGlkYXRpb24oKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgbGV0IGNhbkluY3JlbWVudCA9ICgwLCAkdmhqQ2kkdXNlTWVtbykoKCk9PiFpc0Rpc2FibGVkICYmICFpc1JlYWRPbmx5ICYmIChpc05hTihwYXJzZWRWYWx1ZSkgfHwgbWF4VmFsdWUgPT09IHVuZGVmaW5lZCB8fCBpc05hTihtYXhWYWx1ZSkgfHwgKDAsICR2aGpDaSRzbmFwVmFsdWVUb1N0ZXApKHBhcnNlZFZhbHVlLCBtaW5WYWx1ZSwgbWF4VmFsdWUsIGNsYW1wU3RlcCkgPiBwYXJzZWRWYWx1ZSB8fCAkZGU2N2U5ODkwOGYwYzZlZSR2YXIkaGFuZGxlRGVjaW1hbE9wZXJhdGlvbihcIitcIiwgcGFyc2VkVmFsdWUsIGNsYW1wU3RlcCkgPD0gbWF4VmFsdWUpLCBbXG4gICAgICAgIGlzRGlzYWJsZWQsXG4gICAgICAgIGlzUmVhZE9ubHksXG4gICAgICAgIG1pblZhbHVlLFxuICAgICAgICBtYXhWYWx1ZSxcbiAgICAgICAgY2xhbXBTdGVwLFxuICAgICAgICBwYXJzZWRWYWx1ZVxuICAgIF0pO1xuICAgIGxldCBjYW5EZWNyZW1lbnQgPSAoMCwgJHZoakNpJHVzZU1lbW8pKCgpPT4haXNEaXNhYmxlZCAmJiAhaXNSZWFkT25seSAmJiAoaXNOYU4ocGFyc2VkVmFsdWUpIHx8IG1pblZhbHVlID09PSB1bmRlZmluZWQgfHwgaXNOYU4obWluVmFsdWUpIHx8ICgwLCAkdmhqQ2kkc25hcFZhbHVlVG9TdGVwKShwYXJzZWRWYWx1ZSwgbWluVmFsdWUsIG1heFZhbHVlLCBjbGFtcFN0ZXApIDwgcGFyc2VkVmFsdWUgfHwgJGRlNjdlOTg5MDhmMGM2ZWUkdmFyJGhhbmRsZURlY2ltYWxPcGVyYXRpb24oXCItXCIsIHBhcnNlZFZhbHVlLCBjbGFtcFN0ZXApID49IG1pblZhbHVlKSwgW1xuICAgICAgICBpc0Rpc2FibGVkLFxuICAgICAgICBpc1JlYWRPbmx5LFxuICAgICAgICBtaW5WYWx1ZSxcbiAgICAgICAgbWF4VmFsdWUsXG4gICAgICAgIGNsYW1wU3RlcCxcbiAgICAgICAgcGFyc2VkVmFsdWVcbiAgICBdKTtcbiAgICBsZXQgdmFsaWRhdGUgPSAodmFsdWUpPT5udW1iZXJQYXJzZXIuaXNWYWxpZFBhcnRpYWxOdW1iZXIodmFsdWUsIG1pblZhbHVlLCBtYXhWYWx1ZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLi4udmFsaWRhdGlvbixcbiAgICAgICAgdmFsaWRhdGU6IHZhbGlkYXRlLFxuICAgICAgICBpbmNyZW1lbnQ6IGluY3JlbWVudCxcbiAgICAgICAgaW5jcmVtZW50VG9NYXg6IGluY3JlbWVudFRvTWF4LFxuICAgICAgICBkZWNyZW1lbnQ6IGRlY3JlbWVudCxcbiAgICAgICAgZGVjcmVtZW50VG9NaW46IGRlY3JlbWVudFRvTWluLFxuICAgICAgICBjYW5JbmNyZW1lbnQ6IGNhbkluY3JlbWVudCxcbiAgICAgICAgY2FuRGVjcmVtZW50OiBjYW5EZWNyZW1lbnQsXG4gICAgICAgIG1pblZhbHVlOiBtaW5WYWx1ZSxcbiAgICAgICAgbWF4VmFsdWU6IG1heFZhbHVlLFxuICAgICAgICBudW1iZXJWYWx1ZTogcGFyc2VkVmFsdWUsXG4gICAgICAgIHNldE51bWJlclZhbHVlOiBzZXROdW1iZXJWYWx1ZSxcbiAgICAgICAgc2V0SW5wdXRWYWx1ZTogc2V0SW5wdXRWYWx1ZSxcbiAgICAgICAgaW5wdXRWYWx1ZTogaW5wdXRWYWx1ZSxcbiAgICAgICAgY29tbWl0OiBjb21taXRcbiAgICB9O1xufVxuZnVuY3Rpb24gJGRlNjdlOTg5MDhmMGM2ZWUkdmFyJGhhbmRsZURlY2ltYWxPcGVyYXRpb24ob3BlcmF0b3IsIHZhbHVlMSwgdmFsdWUyKSB7XG4gICAgbGV0IHJlc3VsdCA9IG9wZXJhdG9yID09PSBcIitcIiA/IHZhbHVlMSArIHZhbHVlMiA6IHZhbHVlMSAtIHZhbHVlMjtcbiAgICAvLyBDaGVjayBpZiB3ZSBoYXZlIGRlY2ltYWxzXG4gICAgaWYgKHZhbHVlMSAlIDEgIT09IDAgfHwgdmFsdWUyICUgMSAhPT0gMCkge1xuICAgICAgICBjb25zdCB2YWx1ZTFEZWNpbWFsID0gdmFsdWUxLnRvU3RyaW5nKCkuc3BsaXQoXCIuXCIpO1xuICAgICAgICBjb25zdCB2YWx1ZTJEZWNpbWFsID0gdmFsdWUyLnRvU3RyaW5nKCkuc3BsaXQoXCIuXCIpO1xuICAgICAgICBjb25zdCB2YWx1ZTFEZWNpbWFsTGVuZ3RoID0gdmFsdWUxRGVjaW1hbFsxXSAmJiB2YWx1ZTFEZWNpbWFsWzFdLmxlbmd0aCB8fCAwO1xuICAgICAgICBjb25zdCB2YWx1ZTJEZWNpbWFsTGVuZ3RoID0gdmFsdWUyRGVjaW1hbFsxXSAmJiB2YWx1ZTJEZWNpbWFsWzFdLmxlbmd0aCB8fCAwO1xuICAgICAgICBjb25zdCBtdWx0aXBsaWVyID0gTWF0aC5wb3coMTAsIE1hdGgubWF4KHZhbHVlMURlY2ltYWxMZW5ndGgsIHZhbHVlMkRlY2ltYWxMZW5ndGgpKTtcbiAgICAgICAgLy8gVHJhbnNmb3JtIHRoZSBkZWNpbWFscyB0byBpbnRlZ2VycyBiYXNlZCBvbiB0aGUgcHJlY2lzaW9uXG4gICAgICAgIHZhbHVlMSA9IE1hdGgucm91bmQodmFsdWUxICogbXVsdGlwbGllcik7XG4gICAgICAgIHZhbHVlMiA9IE1hdGgucm91bmQodmFsdWUyICogbXVsdGlwbGllcik7XG4gICAgICAgIC8vIFBlcmZvcm0gdGhlIG9wZXJhdGlvbiBvbiBpbnRlZ2VycyB2YWx1ZXMgdG8gbWFrZSBzdXJlIHdlIGRvbid0IGdldCBhIGZhbmN5IGRlY2ltYWwgdmFsdWVcbiAgICAgICAgcmVzdWx0ID0gb3BlcmF0b3IgPT09IFwiK1wiID8gdmFsdWUxICsgdmFsdWUyIDogdmFsdWUxIC0gdmFsdWUyO1xuICAgICAgICAvLyBUcmFuc2Zvcm0gdGhlIGludGVnZXIgcmVzdWx0IGJhY2sgdG8gZGVjaW1hbFxuICAgICAgICByZXN1bHQgLz0gbXVsdGlwbGllcjtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG5cblxuZXhwb3J0IHskZGU2N2U5ODkwOGYwYzZlZSRleHBvcnQkN2Y2MjllOWRjMWVjZjM3YyBhcyB1c2VOdW1iZXJGaWVsZFN0YXRlfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1vZHVsZS5qcy5tYXBcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@react-stately+numberfield@3.9.1_react@18.2.0/node_modules/@react-stately/numberfield/dist/import.mjs\n");

/***/ })

};
;