"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@react-stately+dnd@3.2.8_react@18.2.0";
exports.ids = ["vendor-chunks/@react-stately+dnd@3.2.8_react@18.2.0"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@react-stately+dnd@3.2.8_react@18.2.0/node_modules/@react-stately/dnd/dist/import.mjs":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@react-stately+dnd@3.2.8_react@18.2.0/node_modules/@react-stately/dnd/dist/import.mjs ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useDraggableCollectionState: () => (/* binding */ $b45bbbaf0c3785df$export$29efd034f1d79f81),\n/* harmony export */   useDroppableCollectionState: () => (/* binding */ $e672e8bc247525d1$export$926850f6ecef79d0)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/.pnpm/next@14.2.2_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n\n\n/*\n * Copyright 2020 Adobe. All rights reserved.\n * This file is licensed to you under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License. You may obtain a copy\n * of the License at http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software distributed under\n * the License is distributed on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS\n * OF ANY KIND, either express or implied. See the License for the specific language\n * governing permissions and limitations under the License.\n */ /*\n * Copyright 2020 Adobe. All rights reserved.\n * This file is licensed to you under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License. You may obtain a copy\n * of the License at http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software distributed under\n * the License is distributed on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS\n * OF ANY KIND, either express or implied. See the License for the specific language\n * governing permissions and limitations under the License.\n */ \nfunction $b45bbbaf0c3785df$export$29efd034f1d79f81(props) {\n    let { getItems: getItems, collection: collection, selectionManager: selectionManager, onDragStart: onDragStart, onDragMove: onDragMove, onDragEnd: onDragEnd, preview: preview, getAllowedDropOperations: getAllowedDropOperations } = props;\n    let [, setDragging] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n    let draggingKeys = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(new Set());\n    let draggedKey = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n    let getKeys = (key)=>{\n        // The clicked item is always added to the drag. If it is selected, then all of the\n        // other selected items are also dragged. If it is not selected, the only the clicked\n        // item is dragged. This matches native macOS behavior.\n        let keys = new Set(selectionManager.isSelected(key) ? new Set([\n            ...selectionManager.selectedKeys\n        ].filter((key)=>!!collection.getItem(key))) : []);\n        keys.add(key);\n        return keys;\n    };\n    return {\n        collection: collection,\n        selectionManager: selectionManager,\n        get draggedKey () {\n            return draggedKey.current;\n        },\n        get draggingKeys () {\n            return draggingKeys.current;\n        },\n        isDragging (key) {\n            return draggingKeys.current.has(key);\n        },\n        getKeysForDrag: getKeys,\n        getItems (key) {\n            return getItems(getKeys(key));\n        },\n        preview: preview,\n        getAllowedDropOperations: getAllowedDropOperations,\n        startDrag (key, event) {\n            let keys = getKeys(key);\n            draggingKeys.current = keys;\n            draggedKey.current = key;\n            selectionManager.setFocused(false);\n            setDragging(true);\n            if (typeof onDragStart === \"function\") onDragStart({\n                ...event,\n                keys: keys\n            });\n        },\n        moveDrag (event) {\n            if (typeof onDragMove === \"function\") onDragMove({\n                ...event,\n                keys: draggingKeys.current\n            });\n        },\n        endDrag (event) {\n            let { isInternal: isInternal } = event;\n            if (typeof onDragEnd === \"function\") onDragEnd({\n                ...event,\n                keys: draggingKeys.current,\n                isInternal: isInternal\n            });\n            draggingKeys.current = new Set();\n            draggedKey.current = null;\n            setDragging(false);\n        }\n    };\n}\n\n\n/*\n * Copyright 2020 Adobe. All rights reserved.\n * This file is licensed to you under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License. You may obtain a copy\n * of the License at http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software distributed under\n * the License is distributed on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS\n * OF ANY KIND, either express or implied. See the License for the specific language\n * governing permissions and limitations under the License.\n */ \nfunction $e672e8bc247525d1$export$926850f6ecef79d0(props) {\n    let { acceptedDragTypes: acceptedDragTypes = \"all\", onInsert: onInsert, onRootDrop: onRootDrop, onItemDrop: onItemDrop, onReorder: onReorder, shouldAcceptItemDrop: shouldAcceptItemDrop, collection: collection, selectionManager: selectionManager, onDropEnter: onDropEnter, getDropOperation: getDropOperation, onDrop: onDrop } = props;\n    let [target, setTarget] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);\n    let targetRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n    let getOppositeTarget = (target)=>{\n        if (target.dropPosition === \"before\") {\n            let key = collection.getKeyBefore(target.key);\n            return key != null ? {\n                type: \"item\",\n                key: key,\n                dropPosition: \"after\"\n            } : null;\n        } else if (target.dropPosition === \"after\") {\n            let key = collection.getKeyAfter(target.key);\n            return key != null ? {\n                type: \"item\",\n                key: key,\n                dropPosition: \"before\"\n            } : null;\n        }\n    };\n    let defaultGetDropOperation = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e)=>{\n        let { target: target, types: types, allowedOperations: allowedOperations, isInternal: isInternal, draggingKeys: draggingKeys } = e;\n        if (acceptedDragTypes === \"all\" || acceptedDragTypes.some((type)=>types.has(type))) {\n            let isValidInsert = onInsert && target.type === \"item\" && !isInternal && (target.dropPosition === \"before\" || target.dropPosition === \"after\");\n            let isValidReorder = onReorder && target.type === \"item\" && isInternal && (target.dropPosition === \"before\" || target.dropPosition === \"after\");\n            // Feedback was that internal root drop was weird so preventing that from happening\n            let isValidRootDrop = onRootDrop && target.type === \"root\" && !isInternal;\n            // Automatically prevent items (i.e. folders) from being dropped on themselves.\n            let isValidOnItemDrop = onItemDrop && target.type === \"item\" && target.dropPosition === \"on\" && !(isInternal && draggingKeys.has(target.key)) && (!shouldAcceptItemDrop || shouldAcceptItemDrop(target, types));\n            if (onDrop || isValidInsert || isValidReorder || isValidRootDrop || isValidOnItemDrop) {\n                if (getDropOperation) return getDropOperation(target, types, allowedOperations);\n                else return allowedOperations[0];\n            }\n        }\n        return \"cancel\";\n    }, [\n        acceptedDragTypes,\n        getDropOperation,\n        onInsert,\n        onRootDrop,\n        onItemDrop,\n        shouldAcceptItemDrop,\n        onReorder,\n        onDrop\n    ]);\n    return {\n        collection: collection,\n        selectionManager: selectionManager,\n        target: target,\n        setTarget (newTarget) {\n            if (this.isDropTarget(newTarget)) return;\n            let target = targetRef.current;\n            if (target && typeof props.onDropExit === \"function\") props.onDropExit({\n                type: \"dropexit\",\n                x: 0,\n                y: 0,\n                target: target\n            });\n            if (newTarget && typeof onDropEnter === \"function\") onDropEnter({\n                type: \"dropenter\",\n                x: 0,\n                y: 0,\n                target: newTarget\n            });\n            targetRef.current = newTarget;\n            setTarget(newTarget);\n        },\n        isDropTarget (dropTarget) {\n            let target = targetRef.current;\n            if ($e672e8bc247525d1$var$isEqualDropTarget(dropTarget, target)) return true;\n            // Check if the targets point at the same point between two items, one referring before, and the other after.\n            if ((dropTarget === null || dropTarget === void 0 ? void 0 : dropTarget.type) === \"item\" && (target === null || target === void 0 ? void 0 : target.type) === \"item\" && dropTarget.key !== target.key && dropTarget.dropPosition !== target.dropPosition && dropTarget.dropPosition !== \"on\" && target.dropPosition !== \"on\") return $e672e8bc247525d1$var$isEqualDropTarget(getOppositeTarget(dropTarget), target) || $e672e8bc247525d1$var$isEqualDropTarget(dropTarget, getOppositeTarget(target));\n            return false;\n        },\n        getDropOperation (e) {\n            return defaultGetDropOperation(e);\n        }\n    };\n}\nfunction $e672e8bc247525d1$var$isEqualDropTarget(a, b) {\n    if (!a) return !b;\n    switch(a.type){\n        case \"root\":\n            return (b === null || b === void 0 ? void 0 : b.type) === \"root\";\n        case \"item\":\n            return (b === null || b === void 0 ? void 0 : b.type) === \"item\" && (b === null || b === void 0 ? void 0 : b.key) === a.key && (b === null || b === void 0 ? void 0 : b.dropPosition) === a.dropPosition;\n    }\n}\n\n\n\n\n\n//# sourceMappingURL=module.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHJlYWN0LXN0YXRlbHkrZG5kQDMuMi44X3JlYWN0QDE4LjIuMC9ub2RlX21vZHVsZXMvQHJlYWN0LXN0YXRlbHkvZG5kL2Rpc3QvaW1wb3J0Lm1qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBOEc7O0FBRTlHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSwrTkFBK047QUFDek8sOEJBQThCLDJDQUFlO0FBQzdDLDJCQUEyQix5Q0FBYTtBQUN4Qyx5QkFBeUIseUNBQWE7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0Esa0JBQWtCLHlCQUF5QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsK1RBQStUO0FBQ3pVLGtDQUFrQywyQ0FBZTtBQUNqRCx3QkFBd0IseUNBQWE7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2QsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLHNDQUFzQyw4Q0FBa0I7QUFDeEQsY0FBYyx5SEFBeUg7QUFDdkk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLNEo7QUFDNUoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Aa2V5c3RhdGljL3RlbXBsYXRlcy1uZXh0anMvLi9ub2RlX21vZHVsZXMvLnBucG0vQHJlYWN0LXN0YXRlbHkrZG5kQDMuMi44X3JlYWN0QDE4LjIuMC9ub2RlX21vZHVsZXMvQHJlYWN0LXN0YXRlbHkvZG5kL2Rpc3QvaW1wb3J0Lm1qcz85ODE5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU3RhdGUgYXMgJGJCTndxJHVzZVN0YXRlLCB1c2VSZWYgYXMgJGJCTndxJHVzZVJlZiwgdXNlQ2FsbGJhY2sgYXMgJGJCTndxJHVzZUNhbGxiYWNrfSBmcm9tIFwicmVhY3RcIjtcblxuLypcbiAqIENvcHlyaWdodCAyMDIwIEFkb2JlLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBmaWxlIGlzIGxpY2Vuc2VkIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHlcbiAqIG9mIHRoZSBMaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXJcbiAqIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIFJFUFJFU0VOVEFUSU9OU1xuICogT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlXG4gKiBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovIC8qXG4gKiBDb3B5cmlnaHQgMjAyMCBBZG9iZS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgZmlsZSBpcyBsaWNlbnNlZCB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5XG4gKiBvZiB0aGUgTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyXG4gKiB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBSRVBSRVNFTlRBVElPTlNcbiAqIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZVxuICogZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqLyBcbmZ1bmN0aW9uICRiNDViYmJhZjBjMzc4NWRmJGV4cG9ydCQyOWVmZDAzNGYxZDc5ZjgxKHByb3BzKSB7XG4gICAgbGV0IHsgZ2V0SXRlbXM6IGdldEl0ZW1zLCBjb2xsZWN0aW9uOiBjb2xsZWN0aW9uLCBzZWxlY3Rpb25NYW5hZ2VyOiBzZWxlY3Rpb25NYW5hZ2VyLCBvbkRyYWdTdGFydDogb25EcmFnU3RhcnQsIG9uRHJhZ01vdmU6IG9uRHJhZ01vdmUsIG9uRHJhZ0VuZDogb25EcmFnRW5kLCBwcmV2aWV3OiBwcmV2aWV3LCBnZXRBbGxvd2VkRHJvcE9wZXJhdGlvbnM6IGdldEFsbG93ZWREcm9wT3BlcmF0aW9ucyB9ID0gcHJvcHM7XG4gICAgbGV0IFssIHNldERyYWdnaW5nXSA9ICgwLCAkYkJOd3EkdXNlU3RhdGUpKGZhbHNlKTtcbiAgICBsZXQgZHJhZ2dpbmdLZXlzID0gKDAsICRiQk53cSR1c2VSZWYpKG5ldyBTZXQoKSk7XG4gICAgbGV0IGRyYWdnZWRLZXkgPSAoMCwgJGJCTndxJHVzZVJlZikobnVsbCk7XG4gICAgbGV0IGdldEtleXMgPSAoa2V5KT0+e1xuICAgICAgICAvLyBUaGUgY2xpY2tlZCBpdGVtIGlzIGFsd2F5cyBhZGRlZCB0byB0aGUgZHJhZy4gSWYgaXQgaXMgc2VsZWN0ZWQsIHRoZW4gYWxsIG9mIHRoZVxuICAgICAgICAvLyBvdGhlciBzZWxlY3RlZCBpdGVtcyBhcmUgYWxzbyBkcmFnZ2VkLiBJZiBpdCBpcyBub3Qgc2VsZWN0ZWQsIHRoZSBvbmx5IHRoZSBjbGlja2VkXG4gICAgICAgIC8vIGl0ZW0gaXMgZHJhZ2dlZC4gVGhpcyBtYXRjaGVzIG5hdGl2ZSBtYWNPUyBiZWhhdmlvci5cbiAgICAgICAgbGV0IGtleXMgPSBuZXcgU2V0KHNlbGVjdGlvbk1hbmFnZXIuaXNTZWxlY3RlZChrZXkpID8gbmV3IFNldChbXG4gICAgICAgICAgICAuLi5zZWxlY3Rpb25NYW5hZ2VyLnNlbGVjdGVkS2V5c1xuICAgICAgICBdLmZpbHRlcigoa2V5KT0+ISFjb2xsZWN0aW9uLmdldEl0ZW0oa2V5KSkpIDogW10pO1xuICAgICAgICBrZXlzLmFkZChrZXkpO1xuICAgICAgICByZXR1cm4ga2V5cztcbiAgICB9O1xuICAgIHJldHVybiB7XG4gICAgICAgIGNvbGxlY3Rpb246IGNvbGxlY3Rpb24sXG4gICAgICAgIHNlbGVjdGlvbk1hbmFnZXI6IHNlbGVjdGlvbk1hbmFnZXIsXG4gICAgICAgIGdldCBkcmFnZ2VkS2V5ICgpIHtcbiAgICAgICAgICAgIHJldHVybiBkcmFnZ2VkS2V5LmN1cnJlbnQ7XG4gICAgICAgIH0sXG4gICAgICAgIGdldCBkcmFnZ2luZ0tleXMgKCkge1xuICAgICAgICAgICAgcmV0dXJuIGRyYWdnaW5nS2V5cy5jdXJyZW50O1xuICAgICAgICB9LFxuICAgICAgICBpc0RyYWdnaW5nIChrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiBkcmFnZ2luZ0tleXMuY3VycmVudC5oYXMoa2V5KTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0S2V5c0ZvckRyYWc6IGdldEtleXMsXG4gICAgICAgIGdldEl0ZW1zIChrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiBnZXRJdGVtcyhnZXRLZXlzKGtleSkpO1xuICAgICAgICB9LFxuICAgICAgICBwcmV2aWV3OiBwcmV2aWV3LFxuICAgICAgICBnZXRBbGxvd2VkRHJvcE9wZXJhdGlvbnM6IGdldEFsbG93ZWREcm9wT3BlcmF0aW9ucyxcbiAgICAgICAgc3RhcnREcmFnIChrZXksIGV2ZW50KSB7XG4gICAgICAgICAgICBsZXQga2V5cyA9IGdldEtleXMoa2V5KTtcbiAgICAgICAgICAgIGRyYWdnaW5nS2V5cy5jdXJyZW50ID0ga2V5cztcbiAgICAgICAgICAgIGRyYWdnZWRLZXkuY3VycmVudCA9IGtleTtcbiAgICAgICAgICAgIHNlbGVjdGlvbk1hbmFnZXIuc2V0Rm9jdXNlZChmYWxzZSk7XG4gICAgICAgICAgICBzZXREcmFnZ2luZyh0cnVlKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb25EcmFnU3RhcnQgPT09IFwiZnVuY3Rpb25cIikgb25EcmFnU3RhcnQoe1xuICAgICAgICAgICAgICAgIC4uLmV2ZW50LFxuICAgICAgICAgICAgICAgIGtleXM6IGtleXNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBtb3ZlRHJhZyAoZXZlbnQpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb25EcmFnTW92ZSA9PT0gXCJmdW5jdGlvblwiKSBvbkRyYWdNb3ZlKHtcbiAgICAgICAgICAgICAgICAuLi5ldmVudCxcbiAgICAgICAgICAgICAgICBrZXlzOiBkcmFnZ2luZ0tleXMuY3VycmVudFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGVuZERyYWcgKGV2ZW50KSB7XG4gICAgICAgICAgICBsZXQgeyBpc0ludGVybmFsOiBpc0ludGVybmFsIH0gPSBldmVudDtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb25EcmFnRW5kID09PSBcImZ1bmN0aW9uXCIpIG9uRHJhZ0VuZCh7XG4gICAgICAgICAgICAgICAgLi4uZXZlbnQsXG4gICAgICAgICAgICAgICAga2V5czogZHJhZ2dpbmdLZXlzLmN1cnJlbnQsXG4gICAgICAgICAgICAgICAgaXNJbnRlcm5hbDogaXNJbnRlcm5hbFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBkcmFnZ2luZ0tleXMuY3VycmVudCA9IG5ldyBTZXQoKTtcbiAgICAgICAgICAgIGRyYWdnZWRLZXkuY3VycmVudCA9IG51bGw7XG4gICAgICAgICAgICBzZXREcmFnZ2luZyhmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5cbi8qXG4gKiBDb3B5cmlnaHQgMjAyMCBBZG9iZS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgZmlsZSBpcyBsaWNlbnNlZCB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5XG4gKiBvZiB0aGUgTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyXG4gKiB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBSRVBSRVNFTlRBVElPTlNcbiAqIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZVxuICogZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqLyBcbmZ1bmN0aW9uICRlNjcyZThiYzI0NzUyNWQxJGV4cG9ydCQ5MjY4NTBmNmVjZWY3OWQwKHByb3BzKSB7XG4gICAgbGV0IHsgYWNjZXB0ZWREcmFnVHlwZXM6IGFjY2VwdGVkRHJhZ1R5cGVzID0gXCJhbGxcIiwgb25JbnNlcnQ6IG9uSW5zZXJ0LCBvblJvb3REcm9wOiBvblJvb3REcm9wLCBvbkl0ZW1Ecm9wOiBvbkl0ZW1Ecm9wLCBvblJlb3JkZXI6IG9uUmVvcmRlciwgc2hvdWxkQWNjZXB0SXRlbURyb3A6IHNob3VsZEFjY2VwdEl0ZW1Ecm9wLCBjb2xsZWN0aW9uOiBjb2xsZWN0aW9uLCBzZWxlY3Rpb25NYW5hZ2VyOiBzZWxlY3Rpb25NYW5hZ2VyLCBvbkRyb3BFbnRlcjogb25Ecm9wRW50ZXIsIGdldERyb3BPcGVyYXRpb246IGdldERyb3BPcGVyYXRpb24sIG9uRHJvcDogb25Ecm9wIH0gPSBwcm9wcztcbiAgICBsZXQgW3RhcmdldCwgc2V0VGFyZ2V0XSA9ICgwLCAkYkJOd3EkdXNlU3RhdGUpKG51bGwpO1xuICAgIGxldCB0YXJnZXRSZWYgPSAoMCwgJGJCTndxJHVzZVJlZikobnVsbCk7XG4gICAgbGV0IGdldE9wcG9zaXRlVGFyZ2V0ID0gKHRhcmdldCk9PntcbiAgICAgICAgaWYgKHRhcmdldC5kcm9wUG9zaXRpb24gPT09IFwiYmVmb3JlXCIpIHtcbiAgICAgICAgICAgIGxldCBrZXkgPSBjb2xsZWN0aW9uLmdldEtleUJlZm9yZSh0YXJnZXQua2V5KTtcbiAgICAgICAgICAgIHJldHVybiBrZXkgIT0gbnVsbCA/IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcIml0ZW1cIixcbiAgICAgICAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICAgICAgICBkcm9wUG9zaXRpb246IFwiYWZ0ZXJcIlxuICAgICAgICAgICAgfSA6IG51bGw7XG4gICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0LmRyb3BQb3NpdGlvbiA9PT0gXCJhZnRlclwiKSB7XG4gICAgICAgICAgICBsZXQga2V5ID0gY29sbGVjdGlvbi5nZXRLZXlBZnRlcih0YXJnZXQua2V5KTtcbiAgICAgICAgICAgIHJldHVybiBrZXkgIT0gbnVsbCA/IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcIml0ZW1cIixcbiAgICAgICAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICAgICAgICBkcm9wUG9zaXRpb246IFwiYmVmb3JlXCJcbiAgICAgICAgICAgIH0gOiBudWxsO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBsZXQgZGVmYXVsdEdldERyb3BPcGVyYXRpb24gPSAoMCwgJGJCTndxJHVzZUNhbGxiYWNrKSgoZSk9PntcbiAgICAgICAgbGV0IHsgdGFyZ2V0OiB0YXJnZXQsIHR5cGVzOiB0eXBlcywgYWxsb3dlZE9wZXJhdGlvbnM6IGFsbG93ZWRPcGVyYXRpb25zLCBpc0ludGVybmFsOiBpc0ludGVybmFsLCBkcmFnZ2luZ0tleXM6IGRyYWdnaW5nS2V5cyB9ID0gZTtcbiAgICAgICAgaWYgKGFjY2VwdGVkRHJhZ1R5cGVzID09PSBcImFsbFwiIHx8IGFjY2VwdGVkRHJhZ1R5cGVzLnNvbWUoKHR5cGUpPT50eXBlcy5oYXModHlwZSkpKSB7XG4gICAgICAgICAgICBsZXQgaXNWYWxpZEluc2VydCA9IG9uSW5zZXJ0ICYmIHRhcmdldC50eXBlID09PSBcIml0ZW1cIiAmJiAhaXNJbnRlcm5hbCAmJiAodGFyZ2V0LmRyb3BQb3NpdGlvbiA9PT0gXCJiZWZvcmVcIiB8fCB0YXJnZXQuZHJvcFBvc2l0aW9uID09PSBcImFmdGVyXCIpO1xuICAgICAgICAgICAgbGV0IGlzVmFsaWRSZW9yZGVyID0gb25SZW9yZGVyICYmIHRhcmdldC50eXBlID09PSBcIml0ZW1cIiAmJiBpc0ludGVybmFsICYmICh0YXJnZXQuZHJvcFBvc2l0aW9uID09PSBcImJlZm9yZVwiIHx8IHRhcmdldC5kcm9wUG9zaXRpb24gPT09IFwiYWZ0ZXJcIik7XG4gICAgICAgICAgICAvLyBGZWVkYmFjayB3YXMgdGhhdCBpbnRlcm5hbCByb290IGRyb3Agd2FzIHdlaXJkIHNvIHByZXZlbnRpbmcgdGhhdCBmcm9tIGhhcHBlbmluZ1xuICAgICAgICAgICAgbGV0IGlzVmFsaWRSb290RHJvcCA9IG9uUm9vdERyb3AgJiYgdGFyZ2V0LnR5cGUgPT09IFwicm9vdFwiICYmICFpc0ludGVybmFsO1xuICAgICAgICAgICAgLy8gQXV0b21hdGljYWxseSBwcmV2ZW50IGl0ZW1zIChpLmUuIGZvbGRlcnMpIGZyb20gYmVpbmcgZHJvcHBlZCBvbiB0aGVtc2VsdmVzLlxuICAgICAgICAgICAgbGV0IGlzVmFsaWRPbkl0ZW1Ecm9wID0gb25JdGVtRHJvcCAmJiB0YXJnZXQudHlwZSA9PT0gXCJpdGVtXCIgJiYgdGFyZ2V0LmRyb3BQb3NpdGlvbiA9PT0gXCJvblwiICYmICEoaXNJbnRlcm5hbCAmJiBkcmFnZ2luZ0tleXMuaGFzKHRhcmdldC5rZXkpKSAmJiAoIXNob3VsZEFjY2VwdEl0ZW1Ecm9wIHx8IHNob3VsZEFjY2VwdEl0ZW1Ecm9wKHRhcmdldCwgdHlwZXMpKTtcbiAgICAgICAgICAgIGlmIChvbkRyb3AgfHwgaXNWYWxpZEluc2VydCB8fCBpc1ZhbGlkUmVvcmRlciB8fCBpc1ZhbGlkUm9vdERyb3AgfHwgaXNWYWxpZE9uSXRlbURyb3ApIHtcbiAgICAgICAgICAgICAgICBpZiAoZ2V0RHJvcE9wZXJhdGlvbikgcmV0dXJuIGdldERyb3BPcGVyYXRpb24odGFyZ2V0LCB0eXBlcywgYWxsb3dlZE9wZXJhdGlvbnMpO1xuICAgICAgICAgICAgICAgIGVsc2UgcmV0dXJuIGFsbG93ZWRPcGVyYXRpb25zWzBdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBcImNhbmNlbFwiO1xuICAgIH0sIFtcbiAgICAgICAgYWNjZXB0ZWREcmFnVHlwZXMsXG4gICAgICAgIGdldERyb3BPcGVyYXRpb24sXG4gICAgICAgIG9uSW5zZXJ0LFxuICAgICAgICBvblJvb3REcm9wLFxuICAgICAgICBvbkl0ZW1Ecm9wLFxuICAgICAgICBzaG91bGRBY2NlcHRJdGVtRHJvcCxcbiAgICAgICAgb25SZW9yZGVyLFxuICAgICAgICBvbkRyb3BcbiAgICBdKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBjb2xsZWN0aW9uOiBjb2xsZWN0aW9uLFxuICAgICAgICBzZWxlY3Rpb25NYW5hZ2VyOiBzZWxlY3Rpb25NYW5hZ2VyLFxuICAgICAgICB0YXJnZXQ6IHRhcmdldCxcbiAgICAgICAgc2V0VGFyZ2V0IChuZXdUYXJnZXQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzRHJvcFRhcmdldChuZXdUYXJnZXQpKSByZXR1cm47XG4gICAgICAgICAgICBsZXQgdGFyZ2V0ID0gdGFyZ2V0UmVmLmN1cnJlbnQ7XG4gICAgICAgICAgICBpZiAodGFyZ2V0ICYmIHR5cGVvZiBwcm9wcy5vbkRyb3BFeGl0ID09PSBcImZ1bmN0aW9uXCIpIHByb3BzLm9uRHJvcEV4aXQoe1xuICAgICAgICAgICAgICAgIHR5cGU6IFwiZHJvcGV4aXRcIixcbiAgICAgICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKG5ld1RhcmdldCAmJiB0eXBlb2Ygb25Ecm9wRW50ZXIgPT09IFwiZnVuY3Rpb25cIikgb25Ecm9wRW50ZXIoe1xuICAgICAgICAgICAgICAgIHR5cGU6IFwiZHJvcGVudGVyXCIsXG4gICAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgICB5OiAwLFxuICAgICAgICAgICAgICAgIHRhcmdldDogbmV3VGFyZ2V0XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRhcmdldFJlZi5jdXJyZW50ID0gbmV3VGFyZ2V0O1xuICAgICAgICAgICAgc2V0VGFyZ2V0KG5ld1RhcmdldCk7XG4gICAgICAgIH0sXG4gICAgICAgIGlzRHJvcFRhcmdldCAoZHJvcFRhcmdldCkge1xuICAgICAgICAgICAgbGV0IHRhcmdldCA9IHRhcmdldFJlZi5jdXJyZW50O1xuICAgICAgICAgICAgaWYgKCRlNjcyZThiYzI0NzUyNWQxJHZhciRpc0VxdWFsRHJvcFRhcmdldChkcm9wVGFyZ2V0LCB0YXJnZXQpKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoZSB0YXJnZXRzIHBvaW50IGF0IHRoZSBzYW1lIHBvaW50IGJldHdlZW4gdHdvIGl0ZW1zLCBvbmUgcmVmZXJyaW5nIGJlZm9yZSwgYW5kIHRoZSBvdGhlciBhZnRlci5cbiAgICAgICAgICAgIGlmICgoZHJvcFRhcmdldCA9PT0gbnVsbCB8fCBkcm9wVGFyZ2V0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkcm9wVGFyZ2V0LnR5cGUpID09PSBcIml0ZW1cIiAmJiAodGFyZ2V0ID09PSBudWxsIHx8IHRhcmdldCA9PT0gdm9pZCAwID8gdm9pZCAwIDogdGFyZ2V0LnR5cGUpID09PSBcIml0ZW1cIiAmJiBkcm9wVGFyZ2V0LmtleSAhPT0gdGFyZ2V0LmtleSAmJiBkcm9wVGFyZ2V0LmRyb3BQb3NpdGlvbiAhPT0gdGFyZ2V0LmRyb3BQb3NpdGlvbiAmJiBkcm9wVGFyZ2V0LmRyb3BQb3NpdGlvbiAhPT0gXCJvblwiICYmIHRhcmdldC5kcm9wUG9zaXRpb24gIT09IFwib25cIikgcmV0dXJuICRlNjcyZThiYzI0NzUyNWQxJHZhciRpc0VxdWFsRHJvcFRhcmdldChnZXRPcHBvc2l0ZVRhcmdldChkcm9wVGFyZ2V0KSwgdGFyZ2V0KSB8fCAkZTY3MmU4YmMyNDc1MjVkMSR2YXIkaXNFcXVhbERyb3BUYXJnZXQoZHJvcFRhcmdldCwgZ2V0T3Bwb3NpdGVUYXJnZXQodGFyZ2V0KSk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0sXG4gICAgICAgIGdldERyb3BPcGVyYXRpb24gKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBkZWZhdWx0R2V0RHJvcE9wZXJhdGlvbihlKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5mdW5jdGlvbiAkZTY3MmU4YmMyNDc1MjVkMSR2YXIkaXNFcXVhbERyb3BUYXJnZXQoYSwgYikge1xuICAgIGlmICghYSkgcmV0dXJuICFiO1xuICAgIHN3aXRjaChhLnR5cGUpe1xuICAgICAgICBjYXNlIFwicm9vdFwiOlxuICAgICAgICAgICAgcmV0dXJuIChiID09PSBudWxsIHx8IGIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGIudHlwZSkgPT09IFwicm9vdFwiO1xuICAgICAgICBjYXNlIFwiaXRlbVwiOlxuICAgICAgICAgICAgcmV0dXJuIChiID09PSBudWxsIHx8IGIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGIudHlwZSkgPT09IFwiaXRlbVwiICYmIChiID09PSBudWxsIHx8IGIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGIua2V5KSA9PT0gYS5rZXkgJiYgKGIgPT09IG51bGwgfHwgYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogYi5kcm9wUG9zaXRpb24pID09PSBhLmRyb3BQb3NpdGlvbjtcbiAgICB9XG59XG5cblxuXG5cbmV4cG9ydCB7JGI0NWJiYmFmMGMzNzg1ZGYkZXhwb3J0JDI5ZWZkMDM0ZjFkNzlmODEgYXMgdXNlRHJhZ2dhYmxlQ29sbGVjdGlvblN0YXRlLCAkZTY3MmU4YmMyNDc1MjVkMSRleHBvcnQkOTI2ODUwZjZlY2VmNzlkMCBhcyB1c2VEcm9wcGFibGVDb2xsZWN0aW9uU3RhdGV9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bW9kdWxlLmpzLm1hcFxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@react-stately+dnd@3.2.8_react@18.2.0/node_modules/@react-stately/dnd/dist/import.mjs\n");

/***/ })

};
;