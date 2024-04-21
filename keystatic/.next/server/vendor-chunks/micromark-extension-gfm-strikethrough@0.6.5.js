/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/micromark-extension-gfm-strikethrough@0.6.5";
exports.ids = ["vendor-chunks/micromark-extension-gfm-strikethrough@0.6.5"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/micromark-extension-gfm-strikethrough@0.6.5/node_modules/micromark-extension-gfm-strikethrough/index.js":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/micromark-extension-gfm-strikethrough@0.6.5/node_modules/micromark-extension-gfm-strikethrough/index.js ***!
  \************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = create\n\nvar classifyCharacter = __webpack_require__(/*! micromark/dist/util/classify-character */ \"(ssr)/./node_modules/.pnpm/micromark@2.11.4/node_modules/micromark/dist/util/classify-character.js\")\nvar chunkedSplice = __webpack_require__(/*! micromark/dist/util/chunked-splice */ \"(ssr)/./node_modules/.pnpm/micromark@2.11.4/node_modules/micromark/dist/util/chunked-splice.js\")\nvar resolveAll = __webpack_require__(/*! micromark/dist/util/resolve-all */ \"(ssr)/./node_modules/.pnpm/micromark@2.11.4/node_modules/micromark/dist/util/resolve-all.js\")\nvar shallow = __webpack_require__(/*! micromark/dist/util/shallow */ \"(ssr)/./node_modules/.pnpm/micromark@2.11.4/node_modules/micromark/dist/util/shallow.js\")\n\nfunction create(options) {\n  var settings = options || {}\n  var single = settings.singleTilde\n  var tokenizer = {\n    tokenize: tokenizeStrikethrough,\n    resolveAll: resolveAllStrikethrough\n  }\n\n  if (single === null || single === undefined) {\n    single = true\n  }\n\n  return {text: {126: tokenizer}, insideSpan: {null: tokenizer}}\n\n  // Take events and resolve strikethrough.\n  function resolveAllStrikethrough(events, context) {\n    var index = -1\n    var strikethrough\n    var text\n    var open\n    var nextEvents\n\n    // Walk through all events.\n    while (++index < events.length) {\n      // Find a token that can close.\n      if (\n        events[index][0] === 'enter' &&\n        events[index][1].type === 'strikethroughSequenceTemporary' &&\n        events[index][1]._close\n      ) {\n        open = index\n\n        // Now walk back to find an opener.\n        while (open--) {\n          // Find a token that can open the closer.\n          if (\n            events[open][0] === 'exit' &&\n            events[open][1].type === 'strikethroughSequenceTemporary' &&\n            events[open][1]._open &&\n            // If the sizes are the same:\n            events[index][1].end.offset - events[index][1].start.offset ===\n              events[open][1].end.offset - events[open][1].start.offset\n          ) {\n            events[index][1].type = 'strikethroughSequence'\n            events[open][1].type = 'strikethroughSequence'\n\n            strikethrough = {\n              type: 'strikethrough',\n              start: shallow(events[open][1].start),\n              end: shallow(events[index][1].end)\n            }\n\n            text = {\n              type: 'strikethroughText',\n              start: shallow(events[open][1].end),\n              end: shallow(events[index][1].start)\n            }\n\n            // Opening.\n            nextEvents = [\n              ['enter', strikethrough, context],\n              ['enter', events[open][1], context],\n              ['exit', events[open][1], context],\n              ['enter', text, context]\n            ]\n\n            // Between.\n            chunkedSplice(\n              nextEvents,\n              nextEvents.length,\n              0,\n              resolveAll(\n                context.parser.constructs.insideSpan.null,\n                events.slice(open + 1, index),\n                context\n              )\n            )\n\n            // Closing.\n            chunkedSplice(nextEvents, nextEvents.length, 0, [\n              ['exit', text, context],\n              ['enter', events[index][1], context],\n              ['exit', events[index][1], context],\n              ['exit', strikethrough, context]\n            ])\n\n            chunkedSplice(events, open - 1, index - open + 3, nextEvents)\n\n            index = open + nextEvents.length - 2\n            break\n          }\n        }\n      }\n    }\n\n    return removeRemainingSequences(events)\n  }\n\n  function removeRemainingSequences(events) {\n    var index = -1\n    var length = events.length\n\n    while (++index < length) {\n      if (events[index][1].type === 'strikethroughSequenceTemporary') {\n        events[index][1].type = 'data'\n      }\n    }\n\n    return events\n  }\n\n  function tokenizeStrikethrough(effects, ok, nok) {\n    var previous = this.previous\n    var events = this.events\n    var size = 0\n\n    return start\n\n    function start(code) {\n      if (\n        code !== 126 ||\n        (previous === 126 &&\n          events[events.length - 1][1].type !== 'characterEscape')\n      ) {\n        return nok(code)\n      }\n\n      effects.enter('strikethroughSequenceTemporary')\n      return more(code)\n    }\n\n    function more(code) {\n      var before = classifyCharacter(previous)\n      var token\n      var after\n\n      if (code === 126) {\n        // If this is the third marker, exit.\n        if (size > 1) return nok(code)\n        effects.consume(code)\n        size++\n        return more\n      }\n\n      if (size < 2 && !single) return nok(code)\n      token = effects.exit('strikethroughSequenceTemporary')\n      after = classifyCharacter(code)\n      token._open = !after || (after === 2 && before)\n      token._close = !before || (before === 2 && after)\n      return ok(code)\n    }\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vbWljcm9tYXJrLWV4dGVuc2lvbi1nZm0tc3RyaWtldGhyb3VnaEAwLjYuNS9ub2RlX21vZHVsZXMvbWljcm9tYXJrLWV4dGVuc2lvbi1nZm0tc3RyaWtldGhyb3VnaC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQTs7QUFFQSx3QkFBd0IsbUJBQU8sQ0FBQyxrSkFBd0M7QUFDeEUsb0JBQW9CLG1CQUFPLENBQUMsMElBQW9DO0FBQ2hFLGlCQUFpQixtQkFBTyxDQUFDLG9JQUFpQztBQUMxRCxjQUFjLG1CQUFPLENBQUMsNEhBQTZCOztBQUVuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsVUFBVSxPQUFPLGVBQWUsZUFBZTs7QUFFL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGtleXN0YXRpYy90ZW1wbGF0ZXMtbmV4dGpzLy4vbm9kZV9tb2R1bGVzLy5wbnBtL21pY3JvbWFyay1leHRlbnNpb24tZ2ZtLXN0cmlrZXRocm91Z2hAMC42LjUvbm9kZV9tb2R1bGVzL21pY3JvbWFyay1leHRlbnNpb24tZ2ZtLXN0cmlrZXRocm91Z2gvaW5kZXguanM/ZWU5MiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZVxuXG52YXIgY2xhc3NpZnlDaGFyYWN0ZXIgPSByZXF1aXJlKCdtaWNyb21hcmsvZGlzdC91dGlsL2NsYXNzaWZ5LWNoYXJhY3RlcicpXG52YXIgY2h1bmtlZFNwbGljZSA9IHJlcXVpcmUoJ21pY3JvbWFyay9kaXN0L3V0aWwvY2h1bmtlZC1zcGxpY2UnKVxudmFyIHJlc29sdmVBbGwgPSByZXF1aXJlKCdtaWNyb21hcmsvZGlzdC91dGlsL3Jlc29sdmUtYWxsJylcbnZhciBzaGFsbG93ID0gcmVxdWlyZSgnbWljcm9tYXJrL2Rpc3QvdXRpbC9zaGFsbG93JylcblxuZnVuY3Rpb24gY3JlYXRlKG9wdGlvbnMpIHtcbiAgdmFyIHNldHRpbmdzID0gb3B0aW9ucyB8fCB7fVxuICB2YXIgc2luZ2xlID0gc2V0dGluZ3Muc2luZ2xlVGlsZGVcbiAgdmFyIHRva2VuaXplciA9IHtcbiAgICB0b2tlbml6ZTogdG9rZW5pemVTdHJpa2V0aHJvdWdoLFxuICAgIHJlc29sdmVBbGw6IHJlc29sdmVBbGxTdHJpa2V0aHJvdWdoXG4gIH1cblxuICBpZiAoc2luZ2xlID09PSBudWxsIHx8IHNpbmdsZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgc2luZ2xlID0gdHJ1ZVxuICB9XG5cbiAgcmV0dXJuIHt0ZXh0OiB7MTI2OiB0b2tlbml6ZXJ9LCBpbnNpZGVTcGFuOiB7bnVsbDogdG9rZW5pemVyfX1cblxuICAvLyBUYWtlIGV2ZW50cyBhbmQgcmVzb2x2ZSBzdHJpa2V0aHJvdWdoLlxuICBmdW5jdGlvbiByZXNvbHZlQWxsU3RyaWtldGhyb3VnaChldmVudHMsIGNvbnRleHQpIHtcbiAgICB2YXIgaW5kZXggPSAtMVxuICAgIHZhciBzdHJpa2V0aHJvdWdoXG4gICAgdmFyIHRleHRcbiAgICB2YXIgb3BlblxuICAgIHZhciBuZXh0RXZlbnRzXG5cbiAgICAvLyBXYWxrIHRocm91Z2ggYWxsIGV2ZW50cy5cbiAgICB3aGlsZSAoKytpbmRleCA8IGV2ZW50cy5sZW5ndGgpIHtcbiAgICAgIC8vIEZpbmQgYSB0b2tlbiB0aGF0IGNhbiBjbG9zZS5cbiAgICAgIGlmIChcbiAgICAgICAgZXZlbnRzW2luZGV4XVswXSA9PT0gJ2VudGVyJyAmJlxuICAgICAgICBldmVudHNbaW5kZXhdWzFdLnR5cGUgPT09ICdzdHJpa2V0aHJvdWdoU2VxdWVuY2VUZW1wb3JhcnknICYmXG4gICAgICAgIGV2ZW50c1tpbmRleF1bMV0uX2Nsb3NlXG4gICAgICApIHtcbiAgICAgICAgb3BlbiA9IGluZGV4XG5cbiAgICAgICAgLy8gTm93IHdhbGsgYmFjayB0byBmaW5kIGFuIG9wZW5lci5cbiAgICAgICAgd2hpbGUgKG9wZW4tLSkge1xuICAgICAgICAgIC8vIEZpbmQgYSB0b2tlbiB0aGF0IGNhbiBvcGVuIHRoZSBjbG9zZXIuXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgZXZlbnRzW29wZW5dWzBdID09PSAnZXhpdCcgJiZcbiAgICAgICAgICAgIGV2ZW50c1tvcGVuXVsxXS50eXBlID09PSAnc3RyaWtldGhyb3VnaFNlcXVlbmNlVGVtcG9yYXJ5JyAmJlxuICAgICAgICAgICAgZXZlbnRzW29wZW5dWzFdLl9vcGVuICYmXG4gICAgICAgICAgICAvLyBJZiB0aGUgc2l6ZXMgYXJlIHRoZSBzYW1lOlxuICAgICAgICAgICAgZXZlbnRzW2luZGV4XVsxXS5lbmQub2Zmc2V0IC0gZXZlbnRzW2luZGV4XVsxXS5zdGFydC5vZmZzZXQgPT09XG4gICAgICAgICAgICAgIGV2ZW50c1tvcGVuXVsxXS5lbmQub2Zmc2V0IC0gZXZlbnRzW29wZW5dWzFdLnN0YXJ0Lm9mZnNldFxuICAgICAgICAgICkge1xuICAgICAgICAgICAgZXZlbnRzW2luZGV4XVsxXS50eXBlID0gJ3N0cmlrZXRocm91Z2hTZXF1ZW5jZSdcbiAgICAgICAgICAgIGV2ZW50c1tvcGVuXVsxXS50eXBlID0gJ3N0cmlrZXRocm91Z2hTZXF1ZW5jZSdcblxuICAgICAgICAgICAgc3RyaWtldGhyb3VnaCA9IHtcbiAgICAgICAgICAgICAgdHlwZTogJ3N0cmlrZXRocm91Z2gnLFxuICAgICAgICAgICAgICBzdGFydDogc2hhbGxvdyhldmVudHNbb3Blbl1bMV0uc3RhcnQpLFxuICAgICAgICAgICAgICBlbmQ6IHNoYWxsb3coZXZlbnRzW2luZGV4XVsxXS5lbmQpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRleHQgPSB7XG4gICAgICAgICAgICAgIHR5cGU6ICdzdHJpa2V0aHJvdWdoVGV4dCcsXG4gICAgICAgICAgICAgIHN0YXJ0OiBzaGFsbG93KGV2ZW50c1tvcGVuXVsxXS5lbmQpLFxuICAgICAgICAgICAgICBlbmQ6IHNoYWxsb3coZXZlbnRzW2luZGV4XVsxXS5zdGFydClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gT3BlbmluZy5cbiAgICAgICAgICAgIG5leHRFdmVudHMgPSBbXG4gICAgICAgICAgICAgIFsnZW50ZXInLCBzdHJpa2V0aHJvdWdoLCBjb250ZXh0XSxcbiAgICAgICAgICAgICAgWydlbnRlcicsIGV2ZW50c1tvcGVuXVsxXSwgY29udGV4dF0sXG4gICAgICAgICAgICAgIFsnZXhpdCcsIGV2ZW50c1tvcGVuXVsxXSwgY29udGV4dF0sXG4gICAgICAgICAgICAgIFsnZW50ZXInLCB0ZXh0LCBjb250ZXh0XVxuICAgICAgICAgICAgXVxuXG4gICAgICAgICAgICAvLyBCZXR3ZWVuLlxuICAgICAgICAgICAgY2h1bmtlZFNwbGljZShcbiAgICAgICAgICAgICAgbmV4dEV2ZW50cyxcbiAgICAgICAgICAgICAgbmV4dEV2ZW50cy5sZW5ndGgsXG4gICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgIHJlc29sdmVBbGwoXG4gICAgICAgICAgICAgICAgY29udGV4dC5wYXJzZXIuY29uc3RydWN0cy5pbnNpZGVTcGFuLm51bGwsXG4gICAgICAgICAgICAgICAgZXZlbnRzLnNsaWNlKG9wZW4gKyAxLCBpbmRleCksXG4gICAgICAgICAgICAgICAgY29udGV4dFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG5cbiAgICAgICAgICAgIC8vIENsb3NpbmcuXG4gICAgICAgICAgICBjaHVua2VkU3BsaWNlKG5leHRFdmVudHMsIG5leHRFdmVudHMubGVuZ3RoLCAwLCBbXG4gICAgICAgICAgICAgIFsnZXhpdCcsIHRleHQsIGNvbnRleHRdLFxuICAgICAgICAgICAgICBbJ2VudGVyJywgZXZlbnRzW2luZGV4XVsxXSwgY29udGV4dF0sXG4gICAgICAgICAgICAgIFsnZXhpdCcsIGV2ZW50c1tpbmRleF1bMV0sIGNvbnRleHRdLFxuICAgICAgICAgICAgICBbJ2V4aXQnLCBzdHJpa2V0aHJvdWdoLCBjb250ZXh0XVxuICAgICAgICAgICAgXSlcblxuICAgICAgICAgICAgY2h1bmtlZFNwbGljZShldmVudHMsIG9wZW4gLSAxLCBpbmRleCAtIG9wZW4gKyAzLCBuZXh0RXZlbnRzKVxuXG4gICAgICAgICAgICBpbmRleCA9IG9wZW4gKyBuZXh0RXZlbnRzLmxlbmd0aCAtIDJcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlbW92ZVJlbWFpbmluZ1NlcXVlbmNlcyhldmVudHMpXG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVSZW1haW5pbmdTZXF1ZW5jZXMoZXZlbnRzKSB7XG4gICAgdmFyIGluZGV4ID0gLTFcbiAgICB2YXIgbGVuZ3RoID0gZXZlbnRzLmxlbmd0aFxuXG4gICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGlmIChldmVudHNbaW5kZXhdWzFdLnR5cGUgPT09ICdzdHJpa2V0aHJvdWdoU2VxdWVuY2VUZW1wb3JhcnknKSB7XG4gICAgICAgIGV2ZW50c1tpbmRleF1bMV0udHlwZSA9ICdkYXRhJ1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBldmVudHNcbiAgfVxuXG4gIGZ1bmN0aW9uIHRva2VuaXplU3RyaWtldGhyb3VnaChlZmZlY3RzLCBvaywgbm9rKSB7XG4gICAgdmFyIHByZXZpb3VzID0gdGhpcy5wcmV2aW91c1xuICAgIHZhciBldmVudHMgPSB0aGlzLmV2ZW50c1xuICAgIHZhciBzaXplID0gMFxuXG4gICAgcmV0dXJuIHN0YXJ0XG5cbiAgICBmdW5jdGlvbiBzdGFydChjb2RlKSB7XG4gICAgICBpZiAoXG4gICAgICAgIGNvZGUgIT09IDEyNiB8fFxuICAgICAgICAocHJldmlvdXMgPT09IDEyNiAmJlxuICAgICAgICAgIGV2ZW50c1tldmVudHMubGVuZ3RoIC0gMV1bMV0udHlwZSAhPT0gJ2NoYXJhY3RlckVzY2FwZScpXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIG5vayhjb2RlKVxuICAgICAgfVxuXG4gICAgICBlZmZlY3RzLmVudGVyKCdzdHJpa2V0aHJvdWdoU2VxdWVuY2VUZW1wb3JhcnknKVxuICAgICAgcmV0dXJuIG1vcmUoY29kZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtb3JlKGNvZGUpIHtcbiAgICAgIHZhciBiZWZvcmUgPSBjbGFzc2lmeUNoYXJhY3RlcihwcmV2aW91cylcbiAgICAgIHZhciB0b2tlblxuICAgICAgdmFyIGFmdGVyXG5cbiAgICAgIGlmIChjb2RlID09PSAxMjYpIHtcbiAgICAgICAgLy8gSWYgdGhpcyBpcyB0aGUgdGhpcmQgbWFya2VyLCBleGl0LlxuICAgICAgICBpZiAoc2l6ZSA+IDEpIHJldHVybiBub2soY29kZSlcbiAgICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICAgIHNpemUrK1xuICAgICAgICByZXR1cm4gbW9yZVxuICAgICAgfVxuXG4gICAgICBpZiAoc2l6ZSA8IDIgJiYgIXNpbmdsZSkgcmV0dXJuIG5vayhjb2RlKVxuICAgICAgdG9rZW4gPSBlZmZlY3RzLmV4aXQoJ3N0cmlrZXRocm91Z2hTZXF1ZW5jZVRlbXBvcmFyeScpXG4gICAgICBhZnRlciA9IGNsYXNzaWZ5Q2hhcmFjdGVyKGNvZGUpXG4gICAgICB0b2tlbi5fb3BlbiA9ICFhZnRlciB8fCAoYWZ0ZXIgPT09IDIgJiYgYmVmb3JlKVxuICAgICAgdG9rZW4uX2Nsb3NlID0gIWJlZm9yZSB8fCAoYmVmb3JlID09PSAyICYmIGFmdGVyKVxuICAgICAgcmV0dXJuIG9rKGNvZGUpXG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/micromark-extension-gfm-strikethrough@0.6.5/node_modules/micromark-extension-gfm-strikethrough/index.js\n");

/***/ })

};
;