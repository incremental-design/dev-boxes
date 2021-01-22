/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/************************************************************************/

;// CONCATENATED MODULE: external "api-spec-converter"
const external_api_spec_converter_namespaceObject = require("api-spec-converter");;
var external_api_spec_converter_default = /*#__PURE__*/__webpack_require__.n(external_api_spec_converter_namespaceObject);
;// CONCATENATED MODULE: external "@apidevtools/swagger-parser"
const swagger_parser_namespaceObject = require("@apidevtools/swagger-parser");;
var swagger_parser_default = /*#__PURE__*/__webpack_require__.n(swagger_parser_namespaceObject);
;// CONCATENATED MODULE: external "tmp-promise"
const external_tmp_promise_namespaceObject = require("tmp-promise");;
;// CONCATENATED MODULE: external "fs"
const external_fs_namespaceObject = require("fs");;
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_namespaceObject);
;// CONCATENATED MODULE: ./index.ts
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var apiSource = "https://api-engineering.nyc3.digitaloceanspaces.com/spec-ci/DigitalOcean-public.v2.yaml";
var generateAPI = function () {
    return __awaiter(this, void 0, void 0, function () {
        var digitalOceanAPI, convertedAPI, convertedAPIJSON, _a, path, cleanup, dereferencedAPI, dereferencedAPIJSON, date, today, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 4, , 5]);
                    digitalOceanAPI = {
                        from: "openapi_3",
                        to: "swagger_2",
                        source: apiSource,
                    };
                    return [4 /*yield*/, external_api_spec_converter_default().convert(digitalOceanAPI)];
                case 1:
                    convertedAPI = _b.sent();
                    convertedAPIJSON = convertedAPI.stringify({
                        syntax: "json",
                        order: "openapi",
                    });
                    return [4 /*yield*/, (0,external_tmp_promise_namespaceObject.file)()];
                case 2:
                    _a = _b.sent(), path = _a.path, cleanup = _a.cleanup;
                    external_fs_default().writeFileSync(path, convertedAPIJSON); //FIXME: synchronously writing a file slows down the whole program.
                    return [4 /*yield*/, swagger_parser_default().dereference(path)];
                case 3:
                    dereferencedAPI = _b.sent();
                    cleanup();
                    dereferencedAPIJSON = JSON.stringify(dereferencedAPI);
                    date = new Date();
                    today = date.toISOString().split("T")[0];
                    external_fs_default().writeFile("digitalOceanAPI-" + today + ".json", dereferencedAPIJSON, "utf8", function (error) {
                        console.log(error);
                    });
                    return [3 /*break*/, 5];
                case 4:
                    error_1 = _b.sent();
                    throw error_1;
                case 5: return [2 /*return*/];
            }
        });
    });
};
generateAPI();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXBpLXNwZWMtY29udmVydGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFwaWRldnRvb2xzL3N3YWdnZXItcGFyc2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG1wLXByb21pc2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiIiwid2VicGFjazovLy8uL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZ0NBQWdDLFlBQVk7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSxzRjs7Ozs7O0FDQUEsTUFBTSwyQ0FBNEIsa0M7OztBQ0FsQyxNQUFNLDhCQUE0QiwyQzs7O0FDQWxDLE1BQU0sb0NBQTRCLDJCOztBQ0FsQyxNQUFNLDJCQUE0QixrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQVM7QUFDYTtBQUNyQjtBQUNmO0FBRXBCLElBQU0sU0FBUyxHQUNiLHlGQUF5RixDQUFDO0FBRTVGLElBQU0sV0FBVyxHQUFHOzs7Ozs7O29CQUVWLGVBQWUsR0FBRzt3QkFDdEIsSUFBSSxFQUFFLFdBQVc7d0JBQ2pCLEVBQUUsRUFBRSxXQUFXO3dCQUNmLE1BQU0sRUFBRSxTQUFTO3FCQUNsQixDQUFDO29CQUV3QixxQkFBTSw2Q0FBaUIsQ0FBQyxlQUFlLENBQUM7O29CQUE1RCxZQUFZLEdBQVEsU0FBd0M7b0JBRTVELGdCQUFnQixHQUFHLFlBQVksQ0FBQyxTQUFTLENBQUM7d0JBQzlDLE1BQU0sRUFBRSxNQUFNO3dCQUNkLEtBQUssRUFBRSxTQUFTO3FCQUNqQixDQUFDLENBQUM7b0JBRXVCLHFCQUFNLDZDQUFJLEVBQUU7O29CQUFoQyxLQUFvQixTQUFZLEVBQTlCLElBQUksWUFBRSxPQUFPO29CQUNyQixtQ0FBZ0IsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLG1FQUFtRTtvQkFFckYscUJBQU0sb0NBQXlCLENBQUMsSUFBSSxDQUFDOztvQkFBdkQsZUFBZSxHQUFHLFNBQXFDO29CQUU3RCxPQUFPLEVBQUUsQ0FBQztvQkFFSixtQkFBbUIsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDO29CQUV0RCxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztvQkFDbEIsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBRS9DLCtCQUFZLENBQ1Ysa0JBQWtCLEdBQUcsS0FBSyxHQUFHLE9BQU8sRUFDcEMsbUJBQW1CLEVBQ25CLE1BQU0sRUFDTixVQUFDLEtBQUs7d0JBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDckIsQ0FBQyxDQUNGLENBQUM7Ozs7b0JBRUYsTUFBTSxPQUFLLENBQUM7Ozs7O0NBRWYsQ0FBQztBQUVGLFdBQVcsRUFBRSxDQUFDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IG1vZHVsZVsnZGVmYXVsdCddIDpcblx0XHQoKSA9PiBtb2R1bGU7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsImNvbnN0IF9fV0VCUEFDS19OQU1FU1BBQ0VfT0JKRUNUX18gPSByZXF1aXJlKFwiYXBpLXNwZWMtY29udmVydGVyXCIpOzsiLCJjb25zdCBfX1dFQlBBQ0tfTkFNRVNQQUNFX09CSkVDVF9fID0gcmVxdWlyZShcIkBhcGlkZXZ0b29scy9zd2FnZ2VyLXBhcnNlclwiKTs7IiwiY29uc3QgX19XRUJQQUNLX05BTUVTUEFDRV9PQkpFQ1RfXyA9IHJlcXVpcmUoXCJ0bXAtcHJvbWlzZVwiKTs7IiwiY29uc3QgX19XRUJQQUNLX05BTUVTUEFDRV9PQkpFQ1RfXyA9IHJlcXVpcmUoXCJmc1wiKTs7IiwiaW1wb3J0IGNvbnZlcnRlciBmcm9tIFwiYXBpLXNwZWMtY29udmVydGVyXCI7XG5pbXBvcnQgc3dhZ2dlclBhcnNlciBmcm9tIFwiQGFwaWRldnRvb2xzL3N3YWdnZXItcGFyc2VyXCI7XG5pbXBvcnQgeyBmaWxlIH0gZnJvbSBcInRtcC1wcm9taXNlXCI7XG5pbXBvcnQgZnMgZnJvbSBcImZzXCI7XG5cbmNvbnN0IGFwaVNvdXJjZSA9XG4gIFwiaHR0cHM6Ly9hcGktZW5naW5lZXJpbmcubnljMy5kaWdpdGFsb2NlYW5zcGFjZXMuY29tL3NwZWMtY2kvRGlnaXRhbE9jZWFuLXB1YmxpYy52Mi55YW1sXCI7XG5cbmNvbnN0IGdlbmVyYXRlQVBJID0gYXN5bmMgZnVuY3Rpb24gKCkge1xuICB0cnkge1xuICAgIGNvbnN0IGRpZ2l0YWxPY2VhbkFQSSA9IHtcbiAgICAgIGZyb206IFwib3BlbmFwaV8zXCIsXG4gICAgICB0bzogXCJzd2FnZ2VyXzJcIixcbiAgICAgIHNvdXJjZTogYXBpU291cmNlLFxuICAgIH07XG5cbiAgICBjb25zdCBjb252ZXJ0ZWRBUEk6IGFueSA9IGF3YWl0IGNvbnZlcnRlci5jb252ZXJ0KGRpZ2l0YWxPY2VhbkFQSSk7XG5cbiAgICBjb25zdCBjb252ZXJ0ZWRBUElKU09OID0gY29udmVydGVkQVBJLnN0cmluZ2lmeSh7XG4gICAgICBzeW50YXg6IFwianNvblwiLFxuICAgICAgb3JkZXI6IFwib3BlbmFwaVwiLFxuICAgIH0pO1xuXG4gICAgY29uc3QgeyBwYXRoLCBjbGVhbnVwIH0gPSBhd2FpdCBmaWxlKCk7XG4gICAgZnMud3JpdGVGaWxlU3luYyhwYXRoLCBjb252ZXJ0ZWRBUElKU09OKTsgLy9GSVhNRTogc3luY2hyb25vdXNseSB3cml0aW5nIGEgZmlsZSBzbG93cyBkb3duIHRoZSB3aG9sZSBwcm9ncmFtLlxuXG4gICAgY29uc3QgZGVyZWZlcmVuY2VkQVBJID0gYXdhaXQgc3dhZ2dlclBhcnNlci5kZXJlZmVyZW5jZShwYXRoKTtcblxuICAgIGNsZWFudXAoKTtcblxuICAgIGNvbnN0IGRlcmVmZXJlbmNlZEFQSUpTT04gPSBKU09OLnN0cmluZ2lmeShkZXJlZmVyZW5jZWRBUEkpO1xuXG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgdG9kYXkgPSBkYXRlLnRvSVNPU3RyaW5nKCkuc3BsaXQoXCJUXCIpWzBdO1xuXG4gICAgZnMud3JpdGVGaWxlKFxuICAgICAgXCJkaWdpdGFsT2NlYW5BUEktXCIgKyB0b2RheSArIFwiLmpzb25cIixcbiAgICAgIGRlcmVmZXJlbmNlZEFQSUpTT04sXG4gICAgICBcInV0ZjhcIixcbiAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICB9XG4gICAgKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufTtcblxuZ2VuZXJhdGVBUEkoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=