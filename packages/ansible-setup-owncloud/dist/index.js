/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 88:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "199e5bb67a3f281421df.yml";

/***/ }),

/***/ 176:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "498194d38eacf218b036.yml";

/***/ }),

/***/ 5:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "863886ce77f6d3c9c8ca.yml";

/***/ }),

/***/ 703:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3249a593fc00d503b79a";

/***/ }),

/***/ 867:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "63128ce6ba664ad0bb98.yml";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
(() => {

;// CONCATENATED MODULE: external "cac"
const external_cac_namespaceObject = require("cac");;
var external_cac_default = /*#__PURE__*/__webpack_require__.n(external_cac_namespaceObject);
;// CONCATENATED MODULE: external "prompts"
const external_prompts_namespaceObject = require("prompts");;
var external_prompts_default = /*#__PURE__*/__webpack_require__.n(external_prompts_namespaceObject);
;// CONCATENATED MODULE: external "do-wrapper"
const external_do_wrapper_namespaceObject = require("do-wrapper");;
var external_do_wrapper_default = /*#__PURE__*/__webpack_require__.n(external_do_wrapper_namespaceObject);
;// CONCATENATED MODULE: external "keytar"
const external_keytar_namespaceObject = require("keytar");;
var external_keytar_default = /*#__PURE__*/__webpack_require__.n(external_keytar_namespaceObject);
;// CONCATENATED MODULE: ./src/provisionRancherOS/onDigitalOcean/accessDigitalOceanPersonalAccessToken.ts
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

function setDigitalOceanPersonalAccessToken(token) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, external_keytar_default().setPassword("DIGITALOCEAN", "DIGITAL_OCEAN_PERSONAL_ACCESS_TOKEN", token)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function getDigitalOceanPersonalAccessToken() {
    return __awaiter(this, void 0, void 0, function () {
        var token;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, external_keytar_default().getPassword("DIGITALOCEAN", "DIGITAL_OCEAN_PERSONAL_ACCESS_TOKEN")];
                case 1:
                    token = _a.sent();
                    return [2 /*return*/, token === null ? "" : token];
            }
        });
    });
}

;// CONCATENATED MODULE: external "fs"
const external_fs_namespaceObject = require("fs");;
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_namespaceObject);
;// CONCATENATED MODULE: external "path"
const external_path_namespaceObject = require("path");;
;// CONCATENATED MODULE: ./src/provisionRancherOS/onDigitalOcean/provisionOnDigitalOcean.ts
var provisionOnDigitalOcean_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var provisionOnDigitalOcean_generator = (undefined && undefined.__generator) || function (thisArg, body) {
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

// import getAuthToken from "./getDigitalOceanPersonalAccessToken";



var authToken;
var digitalOceanWrapper;
/*
authToken and digitalOceanWrapper are singletons that are going to persist for the life of the program. That's why they are in the module scope
*/
var cloudConfigPath = (0,external_path_namespaceObject.relative)(process.cwd(), (0,external_path_namespaceObject.resolve)(__dirname, __webpack_require__(5)));
/*
We are asking webpack to keep track of the file path for `./cloud-config.yml`
*/
var cloudConfig = external_fs_default().readFileSync(cloudConfigPath, "utf8");
function initializeDigitalOceanAPI() {
    return provisionOnDigitalOcean_awaiter(this, void 0, void 0, function () {
        return provisionOnDigitalOcean_generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getDigitalOceanPersonalAccessToken()];
                case 1:
                    authToken = _a.sent();
                    digitalOceanWrapper = new (external_do_wrapper_default())(authToken);
                    return [2 /*return*/];
            }
        });
    });
}
function provisionOnDigitalOcean(configObject) {
    var rancherInstance = {
        name: "another",
        region: "nyc3",
        size: "s-1vcpu-1gb",
        image: "rancheros",
        ssh_keys: [27608986, 28496457],
        backups: false,
        ipv6: true,
        private_networking: null,
        user_data: cloudConfig,
        volumes: null,
        tags: [],
    };
    rancherInstance = Object.assign(rancherInstance, configObject);
    return (digitalOceanWrapper.droplets
        // @ts-ignore: types for rancherInstance are not compatible
        .create(rancherInstance)
        .then(function (response) {
        return response;
    }));
}
function getDropletInformation(dropletID) {
    return digitalOceanWrapper.droplets.getById(dropletID);
}

;// CONCATENATED MODULE: ./src/provisionRancherOS/onAWS/provisionOnAWS.ts
var provisionOnAWS_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var provisionOnAWS_generator = (undefined && undefined.__generator) || function (thisArg, body) {
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
// TODO: actually write this function. Right now it's just a stub
function provisionOnAWS() {
    return provisionOnAWS_awaiter(this, void 0, void 0, function () {
        return provisionOnAWS_generator(this, function (_a) {
            throw new Error("Sorry, I haven't written any code to provision rancher on AWS.");
        });
    });
}

;// CONCATENATED MODULE: ./src/provisionRancherOS/RancherOS.ts
var RancherOS_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var RancherOS_generator = (undefined && undefined.__generator) || function (thisArg, body) {
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


var RancherOSConfig = /** @class */ (function () {
    // !Constructor
    function RancherOSConfig() {
        // !Private Members
        this._name = "";
        this._ipv4Addresses = new Set();
        this._ipv6Addresses = new Set();
        this._dropletID = "";
    } //I'm leaving the constructor blank because we'll initialize all variables with chainable setters
    Object.defineProperty(RancherOSConfig.prototype, "name", {
        // !Getters and Setters
        get: function () {
            return this._name;
        },
        set: function (newName) {
            this._name = newName;
            // TODO: sanitize characters that don't belong in digital ocean droplet names
            // TODO: if droplet has already been provisioned with a name, see if the droplet's name can actually be updated. If it can, then update it. If not, throw an error.
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RancherOSConfig.prototype, "ipv4Addresses", {
        get: function () {
            return Array.from(this._ipv4Addresses);
        },
        set: function (ipv4Addresses) {
            this._ipv4Addresses = new Set(ipv4Addresses);
            //TODO: iterate through the set and remove any ip addresses that are not valid.
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RancherOSConfig.prototype, "ipv6Addresses", {
        get: function () {
            return Array.from(this._ipv6Addresses);
        },
        set: function (ipv6Addresses) {
            this._ipv6Addresses = new Set(ipv6Addresses);
            //TODO: iterate through the set and remove any ip addresses that are not valid.
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RancherOSConfig.prototype, "dropletID", {
        get: function () {
            return this._dropletID;
        },
        enumerable: false,
        configurable: true
    });
    /*
      note that there is no setter for dropletID, and the _dropletID property is private. This is because we do NOT want the dropletID to be set by any code outside of this class.
    */
    // !Accessor Methods
    RancherOSConfig.prototype.setName = function (newName) {
        this.name = newName;
        return this;
    };
    RancherOSConfig.prototype.addIpv4Address = function (ipv4Address) {
        var addressArray = this.ipv4Addresses;
        addressArray.push(ipv4Address);
        this.ipv4Addresses = addressArray;
        return this;
    };
    RancherOSConfig.prototype.removeIpv4Address = function (ipv4Address) {
        this.ipv4Addresses = this.ipv4Addresses.filter(function (address) { return address !== ipv4Address; });
        return this;
    };
    RancherOSConfig.prototype.addIpv6Address = function (ipv6Address) {
        var addressArray = this.ipv6Addresses;
        addressArray.push(ipv6Address);
        this.ipv6Addresses = addressArray;
        return this;
    };
    RancherOSConfig.prototype.removeIpv6Address = function (ipv6Address) {
        this.ipv6Addresses = this.ipv6Addresses.filter(function (address) { return address !== ipv6Address; });
        return this;
    };
    // !Subroutines (these should be private)
    RancherOSConfig.prototype.parseDigitalOceanDropletResponse = function (response) {
        var _this = this;
        try {
            response.droplet.networks.v4.forEach(function (item) {
                if (item.type === "public") {
                    _this.addIpv4Address(item.ip_address);
                }
            });
        }
        catch (error) {
            console.error(error);
        }
        this._dropletID = response.droplet.id;
    };
    RancherOSConfig.prototype.pollForIPAddresses = function (maximumNumberOfSecondsToPoll) {
        var _this = this;
        if (maximumNumberOfSecondsToPoll === void 0) { maximumNumberOfSecondsToPoll = -1; }
        return new Promise(function (resolve, reject) {
            /*
              This function really should not be necessary. Polling is generally a bad idea. However, provisionOnDigitalOcean.droplets.create() doesn't actually return the droplet's IP address. This is because it takes ~5-10 seconds for the droplet to actually acquire an IP address. So, in this particular case, we need to poll until we get an IP address.
      
              In the first poll, we check response.features to see if it contains "ipv6". If so, we continue to poll until we have received at least 1 ipv4 and 1 ipv6 address, or until the number of seconds to poll is up.
      
              If the number of seconds to poll is less than zero, then we will poll indefinitely until we get at least 1 ipv4 address, and if ipv6 is enabled, 1 ipv6 address
            */
            var ipv4Addresses = [];
            var ipv6Addresses = [];
            var hasIpv6 = true;
            var numberOfTimesToPollPerSecond = 1;
            var numberOfTimesToPoll = maximumNumberOfSecondsToPoll <= 0
                ? -1
                : Math.ceil(numberOfTimesToPollPerSecond * maximumNumberOfSecondsToPoll);
            var pollInterval;
            /*
              IF number of times to poll is less than zero, poll indefinitely.
            */
            var poll = function () { return RancherOS_awaiter(_this, void 0, void 0, function () {
                var response;
                return RancherOS_generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, getDropletInformation(this.dropletID)];
                        case 1:
                            response = _a.sent();
                            hasIpv6 =
                                response.droplet.features.includes("ipv6") !== undefined
                                    ? true
                                    : false;
                            response.droplet.networks.v4.forEach(function (network) {
                                if (network.type === "public") {
                                    ipv4Addresses.push(network.ip_address);
                                }
                            });
                            if (hasIpv6) {
                                response.droplet.networks.v6.forEach(function (network) {
                                    if (network.type === "public") {
                                        ipv6Addresses.push(network.ip_address);
                                    }
                                });
                            }
                            if (ipv4Addresses.length > 0) {
                                if (hasIpv6) {
                                    if (ipv6Addresses.length > 0) {
                                        numberOfTimesToPoll = 0;
                                    }
                                    else {
                                        numberOfTimesToPoll--;
                                    }
                                }
                                else {
                                    numberOfTimesToPoll = 0;
                                }
                            }
                            else {
                                numberOfTimesToPoll--;
                            }
                            checkIfShouldStopPolling();
                            return [2 /*return*/];
                    }
                });
            }); };
            function checkIfShouldStopPolling() {
                if (numberOfTimesToPoll == 0) {
                    clearInterval(pollInterval);
                    checkIfIPAddressesObtained(resolve, reject);
                }
            }
            var checkIfIPAddressesObtained = function (resolve, reject) {
                if (ipv4Addresses.length > 0) {
                    ipv4Addresses.forEach(function (address) {
                        _this.addIpv4Address(address);
                    });
                    if (hasIpv6) {
                        if (ipv6Addresses.length > 0) {
                            ipv6Addresses.forEach(function (address) {
                                _this.addIpv6Address(address);
                            });
                            resolve(_this);
                        }
                        else {
                            reject(_this);
                        }
                    }
                    else {
                        resolve(_this);
                    }
                }
                else {
                    reject(_this);
                }
            };
            function pollOnInterval() {
                var millisecondsBetweenIntervals = numberOfTimesToPollPerSecond * 1000;
                return setInterval(poll, millisecondsBetweenIntervals);
            }
            pollInterval = pollOnInterval();
        });
    };
    RancherOSConfig.prototype.provisionOn = function (cloud) {
        return RancherOS_awaiter(this, void 0, void 0, function () {
            var _a, config, response;
            return RancherOS_generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = +cloud;
                        switch (_a) {
                            case cloudProviders.digitalOcean: return [3 /*break*/, 1];
                            case cloudProviders.aws: return [3 /*break*/, 4];
                        }
                        return [3 /*break*/, 6];
                    case 1:
                        config = { name: this.name };
                        return [4 /*yield*/, provisionOnDigitalOcean(config)];
                    case 2:
                        response = _b.sent();
                        this.parseDigitalOceanDropletResponse(response);
                        return [4 /*yield*/, this.pollForIPAddresses()];
                    case 3: return [2 /*return*/, _b.sent()]; //note that we need to poll for ip addresses until we receive them because response does not actually contain IP addresses.
                    case 4: return [4 /*yield*/, provisionOnAWS()];
                    case 5:
                        _b.sent();
                        return [2 /*return*/, this];
                    case 6: throw new Error('${cloud} isn\'t a supported cloud provider. You must specify either "aws" or "digitalOcean".');
                }
            });
        });
    };
    return RancherOSConfig;
}());

var cloudProviders;
(function (cloudProviders) {
    cloudProviders[cloudProviders["digitalOcean"] = 0] = "digitalOcean";
    cloudProviders[cloudProviders["aws"] = 1] = "aws";
})(cloudProviders || (cloudProviders = {}));

;// CONCATENATED MODULE: external "chalk"
const external_chalk_namespaceObject = require("chalk");;
var external_chalk_default = /*#__PURE__*/__webpack_require__.n(external_chalk_namespaceObject);
;// CONCATENATED MODULE: external "terminal-link"
const external_terminal_link_namespaceObject = require("terminal-link");;
var external_terminal_link_default = /*#__PURE__*/__webpack_require__.n(external_terminal_link_namespaceObject);
;// CONCATENATED MODULE: external "child_process"
const external_child_process_namespaceObject = require("child_process");;
;// CONCATENATED MODULE: ./src/index.ts
var src_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var src_generator = (undefined && undefined.__generator) || function (thisArg, body) {
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









var cli = external_cac_default()();
var parsed = cli.parse();
var DIGITAL_OCEAN_PERSONAL_ACCESS_TOKEN = "";
function getQuestions(token) {
    return [
        {
            type: token ? "confirm" : false,
            name: "resetToken",
            message: "Your Digital Ocean Personal Access Token has been retrieved from your keychain. Would you like to change it?",
            initial: false,
        },
        {
            type: 
            // @ts-ignore 'prev' is the value of the previous prompt. See: https://github.com/terkelg/prompts#-prompt-objects
            function (prev) {
                return token === "" || prev ? "password" : false;
            },
            name: "newToken",
            message: "Set your Digital Ocean Personal Access Token. It will be stored in your keychain, and nowhere else. You can generate a personal access token at " + external_chalk_default().underline.blueBright(external_terminal_link_default()("DigitalOcean > Account > API", "https://cloud.digitalocean.com/account/api/tokens/new")),
            initial: "",
        },
        {
            type: "text",
            name: "dropletName",
            message: "What do you want to name your droplet?",
            initial: "owncloud",
        },
    ];
}
var rancherConfig = new RancherOSConfig();
function ansibleSetupRancher(ipAddress, pathToInventory, pathToPlaybook, pathToDockerCompose, pathToEnv) {
    return (0,external_child_process_namespaceObject.execSync)("ansible-playbook '" + pathToPlaybook + "' --extra-vars='rancher_ip=" + ipAddress + " docker_compose=" + pathToDockerCompose + " env=" + pathToEnv + "' --inventory='" + pathToInventory + "'", { stdio: "inherit" });
}
var inventory = (0,external_path_namespaceObject.relative)(process.cwd(), (0,external_path_namespaceObject.resolve)(__dirname, __webpack_require__(176)));
var env = (0,external_path_namespaceObject.relative)(process.cwd(), (0,external_path_namespaceObject.resolve)(__dirname, __webpack_require__(703)));
var dockerCompose = (0,external_path_namespaceObject.relative)(process.cwd(), (0,external_path_namespaceObject.resolve)(__dirname, __webpack_require__(867)));
var playbook = (0,external_path_namespaceObject.relative)(process.cwd(), (0,external_path_namespaceObject.resolve)(__dirname, __webpack_require__(88)));
(function () { return src_awaiter(void 0, void 0, void 0, function () {
    var answers, droplet, ipAddress;
    var _a;
    return src_generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, getDigitalOceanPersonalAccessToken()];
            case 1:
                DIGITAL_OCEAN_PERSONAL_ACCESS_TOKEN = _b.sent();
                return [4 /*yield*/, external_prompts_default()(getQuestions(DIGITAL_OCEAN_PERSONAL_ACCESS_TOKEN))];
            case 2:
                answers = _b.sent();
                if (!((_a = answers.newToken) !== null && _a !== void 0 ? _a : undefined)) return [3 /*break*/, 4];
                console.log(answers.newToken);
                return [4 /*yield*/, setDigitalOceanPersonalAccessToken(answers.newToken)];
            case 3:
                _b.sent();
                _b.label = 4;
            case 4: return [4 /*yield*/, initializeDigitalOceanAPI()];
            case 5:
                _b.sent();
                return [4 /*yield*/, rancherConfig
                        .setName(answers.dropletName)
                        .provisionOn(cloudProviders.digitalOcean)];
            case 6:
                droplet = _b.sent();
                ipAddress = droplet.ipv4Addresses.slice(-1)[0];
                ansibleSetupRancher(ipAddress, inventory, playbook, dockerCompose, env);
                return [2 /*return*/];
        }
    });
}); })();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbnNpYmxlLXNldHVwLW93bmNsb3VkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Fuc2libGUtc2V0dXAtb3duY2xvdWQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYW5zaWJsZS1zZXR1cC1vd25jbG91ZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYW5zaWJsZS1zZXR1cC1vd25jbG91ZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Fuc2libGUtc2V0dXAtb3duY2xvdWQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYW5zaWJsZS1zZXR1cC1vd25jbG91ZC9leHRlcm5hbCBcImNhY1wiIiwid2VicGFjazovL2Fuc2libGUtc2V0dXAtb3duY2xvdWQvZXh0ZXJuYWwgXCJwcm9tcHRzXCIiLCJ3ZWJwYWNrOi8vYW5zaWJsZS1zZXR1cC1vd25jbG91ZC9leHRlcm5hbCBcImRvLXdyYXBwZXJcIiIsIndlYnBhY2s6Ly9hbnNpYmxlLXNldHVwLW93bmNsb3VkL2V4dGVybmFsIFwia2V5dGFyXCIiLCJ3ZWJwYWNrOi8vYW5zaWJsZS1zZXR1cC1vd25jbG91ZC8uL3NyYy9wcm92aXNpb25SYW5jaGVyT1Mvb25EaWdpdGFsT2NlYW4vYWNjZXNzRGlnaXRhbE9jZWFuUGVyc29uYWxBY2Nlc3NUb2tlbi50cyIsIndlYnBhY2s6Ly9hbnNpYmxlLXNldHVwLW93bmNsb3VkL2V4dGVybmFsIFwiZnNcIiIsIndlYnBhY2s6Ly9hbnNpYmxlLXNldHVwLW93bmNsb3VkL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovL2Fuc2libGUtc2V0dXAtb3duY2xvdWQvLi9zcmMvcHJvdmlzaW9uUmFuY2hlck9TL29uRGlnaXRhbE9jZWFuL3Byb3Zpc2lvbk9uRGlnaXRhbE9jZWFuLnRzIiwid2VicGFjazovL2Fuc2libGUtc2V0dXAtb3duY2xvdWQvLi9zcmMvcHJvdmlzaW9uUmFuY2hlck9TL29uQVdTL3Byb3Zpc2lvbk9uQVdTLnRzIiwid2VicGFjazovL2Fuc2libGUtc2V0dXAtb3duY2xvdWQvLi9zcmMvcHJvdmlzaW9uUmFuY2hlck9TL1JhbmNoZXJPUy50cyIsIndlYnBhY2s6Ly9hbnNpYmxlLXNldHVwLW93bmNsb3VkL2V4dGVybmFsIFwiY2hhbGtcIiIsIndlYnBhY2s6Ly9hbnNpYmxlLXNldHVwLW93bmNsb3VkL2V4dGVybmFsIFwidGVybWluYWwtbGlua1wiIiwid2VicGFjazovL2Fuc2libGUtc2V0dXAtb3duY2xvdWQvZXh0ZXJuYWwgXCJjaGlsZF9wcm9jZXNzXCIiLCJ3ZWJwYWNrOi8vYW5zaWJsZS1zZXR1cC1vd25jbG91ZC8uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZ0NBQWdDLFlBQVk7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSxzRjs7Ozs7V0NBQSwyQjs7Ozs7OztBQ0FBLE1BQU0sNEJBQTRCLG1COzs7QUNBbEMsTUFBTSxnQ0FBNEIsdUI7OztBQ0FsQyxNQUFNLG1DQUE0QiwwQjs7O0FDQWxDLE1BQU0sK0JBQTRCLHNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBTjtBQUVyQixTQUFlLGtDQUFrQyxDQUN0RCxLQUFhOzs7O3dCQUViLHFCQUFNLHFDQUFrQixDQUN0Qixj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LGtDQUFrQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7O2dCQUExRCxTQUEwRCxDQUFDOztvQkFFN0QscUJBQU0seUJBQXlCLEVBQUU7O2dCQUFqQyxTQUFpQyxDQUFDO2dCQUNsQixxQkFBTSxhQUFhO3lCQUNoQyxPQUFPLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQzt5QkFDNUIsV0FBVyxDQUFDLDJCQUEyQixDQUFDOztnQkFGckMsT0FBTyxHQUFHLFNBRTJCO2dCQUNyQyxTQUFTLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDckQsbUJBQW1CLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFFLEdBQUcsQ0FBQyxDQUFDOzs7O0tBQ3pFLENBQUMsRUFBRSxDQUFDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiBtb2R1bGVbJ2RlZmF1bHQnXSA6XG5cdFx0KCkgPT4gbW9kdWxlO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsImNvbnN0IF9fV0VCUEFDS19OQU1FU1BBQ0VfT0JKRUNUX18gPSByZXF1aXJlKFwiY2FjXCIpOzsiLCJjb25zdCBfX1dFQlBBQ0tfTkFNRVNQQUNFX09CSkVDVF9fID0gcmVxdWlyZShcInByb21wdHNcIik7OyIsImNvbnN0IF9fV0VCUEFDS19OQU1FU1BBQ0VfT0JKRUNUX18gPSByZXF1aXJlKFwiZG8td3JhcHBlclwiKTs7IiwiY29uc3QgX19XRUJQQUNLX05BTUVTUEFDRV9PQkpFQ1RfXyA9IHJlcXVpcmUoXCJrZXl0YXJcIik7OyIsImltcG9ydCBrZXl0YXIgZnJvbSBcImtleXRhclwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2V0RGlnaXRhbE9jZWFuUGVyc29uYWxBY2Nlc3NUb2tlbihcbiAgdG9rZW46IHN0cmluZ1xuKTogUHJvbWlzZTx2b2lkPiB7XG4gIGF3YWl0IGtleXRhci5zZXRQYXNzd29yZChcbiAgICBcIkRJR0lUQUxPQ0VBTlwiLFxuICAgIFwiRElHSVRBTF9PQ0VBTl9QRVJTT05BTF9BQ0NFU1NfVE9LRU5cIixcbiAgICB0b2tlblxuICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RGlnaXRhbE9jZWFuUGVyc29uYWxBY2Nlc3NUb2tlbigpOiBQcm9taXNlPHN0cmluZz4ge1xuICBjb25zdCB0b2tlbiA9IGF3YWl0IGtleXRhci5nZXRQYXNzd29yZChcbiAgICBcIkRJR0lUQUxPQ0VBTlwiLFxuICAgIFwiRElHSVRBTF9PQ0VBTl9QRVJTT05BTF9BQ0NFU1NfVE9LRU5cIlxuICApO1xuICByZXR1cm4gdG9rZW4gPT09IG51bGwgPyBcIlwiIDogdG9rZW47XG59XG4iLCJjb25zdCBfX1dFQlBBQ0tfTkFNRVNQQUNFX09CSkVDVF9fID0gcmVxdWlyZShcImZzXCIpOzsiLCJjb25zdCBfX1dFQlBBQ0tfTkFNRVNQQUNFX09CSkVDVF9fID0gcmVxdWlyZShcInBhdGhcIik7OyIsImltcG9ydCBEaWdpdGFsT2NlYW4gZnJvbSBcImRvLXdyYXBwZXJcIjtcbi8vIGltcG9ydCBnZXRBdXRoVG9rZW4gZnJvbSBcIi4vZ2V0RGlnaXRhbE9jZWFuUGVyc29uYWxBY2Nlc3NUb2tlblwiO1xuaW1wb3J0IHsgZ2V0RGlnaXRhbE9jZWFuUGVyc29uYWxBY2Nlc3NUb2tlbiB9IGZyb20gXCIuL2FjY2Vzc0RpZ2l0YWxPY2VhblBlcnNvbmFsQWNjZXNzVG9rZW5cIjtcbmltcG9ydCBmcyBmcm9tIFwiZnNcIjtcbmltcG9ydCB7IHJlbGF0aXZlLCByZXNvbHZlIH0gZnJvbSBcInBhdGhcIjtcblxubGV0IGF1dGhUb2tlbjogc3RyaW5nO1xubGV0IGRpZ2l0YWxPY2VhbldyYXBwZXI6IERpZ2l0YWxPY2Vhbjtcbi8qXG5hdXRoVG9rZW4gYW5kIGRpZ2l0YWxPY2VhbldyYXBwZXIgYXJlIHNpbmdsZXRvbnMgdGhhdCBhcmUgZ29pbmcgdG8gcGVyc2lzdCBmb3IgdGhlIGxpZmUgb2YgdGhlIHByb2dyYW0uIFRoYXQncyB3aHkgdGhleSBhcmUgaW4gdGhlIG1vZHVsZSBzY29wZVxuKi9cblxuY29uc3QgY2xvdWRDb25maWdQYXRoID0gcmVsYXRpdmUoXG4gIHByb2Nlc3MuY3dkKCksXG4gIHJlc29sdmUoX19kaXJuYW1lLCByZXF1aXJlKFwiLi9jbG91ZC1jb25maWcueW1sXCIpKVxuKTtcbi8qXG5XZSBhcmUgYXNraW5nIHdlYnBhY2sgdG8ga2VlcCB0cmFjayBvZiB0aGUgZmlsZSBwYXRoIGZvciBgLi9jbG91ZC1jb25maWcueW1sYFxuKi9cbmNvbnN0IGNsb3VkQ29uZmlnID0gZnMucmVhZEZpbGVTeW5jKGNsb3VkQ29uZmlnUGF0aCwgXCJ1dGY4XCIpO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5pdGlhbGl6ZURpZ2l0YWxPY2VhbkFQSSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgYXV0aFRva2VuID0gYXdhaXQgZ2V0RGlnaXRhbE9jZWFuUGVyc29uYWxBY2Nlc3NUb2tlbigpO1xuICBkaWdpdGFsT2NlYW5XcmFwcGVyID0gbmV3IERpZ2l0YWxPY2VhbihhdXRoVG9rZW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlzaW9uT25EaWdpdGFsT2NlYW4oXG4gIGNvbmZpZ09iamVjdDogb2JqZWN0XG4pOiBQcm9taXNlPGRpZ2l0YWxPY2VhbkNyZWF0ZURyb3BsZXRSZXNwb25zZT4ge1xuICBsZXQgcmFuY2hlckluc3RhbmNlOiBvYmplY3QgPSB7XG4gICAgbmFtZTogXCJhbm90aGVyXCIsXG4gICAgcmVnaW9uOiBcIm55YzNcIixcbiAgICBzaXplOiBcInMtMXZjcHUtMWdiXCIsXG4gICAgaW1hZ2U6IFwicmFuY2hlcm9zXCIsXG4gICAgc3NoX2tleXM6IFsyNzYwODk4NiwgMjg0OTY0NTddLFxuICAgIGJhY2t1cHM6IGZhbHNlLFxuICAgIGlwdjY6IHRydWUsXG4gICAgcHJpdmF0ZV9uZXR3b3JraW5nOiBudWxsLFxuICAgIHVzZXJfZGF0YTogY2xvdWRDb25maWcsXG4gICAgdm9sdW1lczogbnVsbCxcbiAgICB0YWdzOiBbXSxcbiAgfTtcblxuICByYW5jaGVySW5zdGFuY2UgPSBPYmplY3QuYXNzaWduKHJhbmNoZXJJbnN0YW5jZSwgY29uZmlnT2JqZWN0KTtcbiAgcmV0dXJuIChcbiAgICBkaWdpdGFsT2NlYW5XcmFwcGVyLmRyb3BsZXRzXG4gICAgICAvLyBAdHMtaWdub3JlOiB0eXBlcyBmb3IgcmFuY2hlckluc3RhbmNlIGFyZSBub3QgY29tcGF0aWJsZVxuICAgICAgLmNyZWF0ZShyYW5jaGVySW5zdGFuY2UpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgfSlcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERyb3BsZXRJbmZvcm1hdGlvbihkcm9wbGV0SUQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBkaWdpdGFsT2NlYW5XcmFwcGVyLmRyb3BsZXRzLmdldEJ5SWQoZHJvcGxldElEKTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBkaWdpdGFsT2NlYW5DcmVhdGVEcm9wbGV0UmVzcG9uc2Uge1xuICBkcm9wbGV0OiB7XG4gICAgaWQ6IHN0cmluZztcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgbWVtb3J5SW5NZWdhYnl0ZXM6IGJpZ2ludDtcbiAgICB2Y3B1czogYmlnaW50O1xuICAgIGRpc2s6IGJpZ2ludDtcbiAgICBsb2NrZWQ6IGJvb2xlYW47XG4gICAgY3JlYXRlZF9hdDogc3RyaW5nO1xuICAgIHN0YXR1czogc3RyaW5nO1xuICAgIGJhY2t1cF9pZHM6IEFycmF5PGFueT47XG4gICAgc25hcHNob3RfaWRzOiBBcnJheTxhbnk+O1xuICAgIGZlYXR1cmVzOiBBcnJheTxhbnk+O1xuICAgIHJlZ2lvbjogb2JqZWN0O1xuICAgIGltYWdlOiBvYmplY3Q7XG4gICAgc2l6ZTogb2JqZWN0O1xuICAgIHNpemVfc2x1Zzogc3RyaW5nO1xuICAgIG5ldHdvcmtzOiB7XG4gICAgICB2NDogW1xuICAgICAgICB7XG4gICAgICAgICAgaXBfYWRkcmVzczogc3RyaW5nO1xuICAgICAgICAgIG5ldG1hc2s6IHN0cmluZztcbiAgICAgICAgICBnYXRld2F5OiBzdHJpbmcgfCBudWxsO1xuICAgICAgICAgIHR5cGU6IFwicHJpdmF0ZVwiIHwgXCJwdWJsaWNcIjtcbiAgICAgICAgfVxuICAgICAgXTtcbiAgICAgIHY2OiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpcF9hZGRyZXNzOiBzdHJpbmc7XG4gICAgICAgICAgbmV0bWFzazogc3RyaW5nO1xuICAgICAgICAgIGdhdGV3YXk6IHN0cmluZyB8IG51bGw7XG4gICAgICAgICAgdHlwZTogXCJwcml2YXRlXCIgfCBcInB1YmxpY1wiO1xuICAgICAgICB9XG4gICAgICBdO1xuICAgIH07XG4gICAga2VybmVsOiBvYmplY3QgfCBudWxsO1xuICAgIG5leHRfYmFja3VwX3dpbmRvdzogb2JqZWN0IHwgbnVsbDtcbiAgICB0YWdzOiBBcnJheTxhbnk+O1xuICAgIHZvbHVtZV9pZHM6IEFycmF5PGFueT47XG4gICAgdnBjX3V1aWQ6IFN0cmluZztcbiAgfTtcbn1cbiIsIi8vIFRPRE86IGFjdHVhbGx5IHdyaXRlIHRoaXMgZnVuY3Rpb24uIFJpZ2h0IG5vdyBpdCdzIGp1c3QgYSBzdHViXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcHJvdmlzaW9uT25BV1MoKSB7XG4gIHRocm93IG5ldyBFcnJvcihcbiAgICBcIlNvcnJ5LCBJIGhhdmVuJ3Qgd3JpdHRlbiBhbnkgY29kZSB0byBwcm92aXNpb24gcmFuY2hlciBvbiBBV1MuXCJcbiAgKTtcbn1cbiIsImltcG9ydCB7XG4gIHByb3Zpc2lvbk9uRGlnaXRhbE9jZWFuLFxuICBkaWdpdGFsT2NlYW5DcmVhdGVEcm9wbGV0UmVzcG9uc2UsXG4gIGdldERyb3BsZXRJbmZvcm1hdGlvbixcbn0gZnJvbSBcIi4vb25EaWdpdGFsT2NlYW4vcHJvdmlzaW9uT25EaWdpdGFsT2NlYW5cIjtcbmltcG9ydCB7IHByb3Zpc2lvbk9uQVdTIH0gZnJvbSBcIi4vb25BV1MvcHJvdmlzaW9uT25BV1NcIjtcblxuZXhwb3J0IGNsYXNzIFJhbmNoZXJPU0NvbmZpZyB7XG4gIC8vICFQcml2YXRlIE1lbWJlcnNcbiAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nID0gXCJcIjtcbiAgcHJpdmF0ZSBfaXB2NEFkZHJlc3NlczogU2V0PHN0cmluZz4gPSBuZXcgU2V0KCk7XG4gIHByaXZhdGUgX2lwdjZBZGRyZXNzZXM6IFNldDxzdHJpbmc+ID0gbmV3IFNldCgpO1xuICBwcml2YXRlIF9kcm9wbGV0SUQ6IHN0cmluZyA9IFwiXCI7XG5cbiAgLy8gIUNvbnN0cnVjdG9yXG4gIGNvbnN0cnVjdG9yKCkge30gLy9JJ20gbGVhdmluZyB0aGUgY29uc3RydWN0b3IgYmxhbmsgYmVjYXVzZSB3ZSdsbCBpbml0aWFsaXplIGFsbCB2YXJpYWJsZXMgd2l0aCBjaGFpbmFibGUgc2V0dGVyc1xuXG4gIC8vICFHZXR0ZXJzIGFuZCBTZXR0ZXJzXG4gIGdldCBuYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cbiAgc2V0IG5hbWUobmV3TmFtZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmFtZSA9IG5ld05hbWU7XG4gICAgLy8gVE9ETzogc2FuaXRpemUgY2hhcmFjdGVycyB0aGF0IGRvbid0IGJlbG9uZyBpbiBkaWdpdGFsIG9jZWFuIGRyb3BsZXQgbmFtZXNcbiAgICAvLyBUT0RPOiBpZiBkcm9wbGV0IGhhcyBhbHJlYWR5IGJlZW4gcHJvdmlzaW9uZWQgd2l0aCBhIG5hbWUsIHNlZSBpZiB0aGUgZHJvcGxldCdzIG5hbWUgY2FuIGFjdHVhbGx5IGJlIHVwZGF0ZWQuIElmIGl0IGNhbiwgdGhlbiB1cGRhdGUgaXQuIElmIG5vdCwgdGhyb3cgYW4gZXJyb3IuXG4gIH1cblxuICBnZXQgaXB2NEFkZHJlc3NlcygpOiBBcnJheTxzdHJpbmc+IHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLl9pcHY0QWRkcmVzc2VzKTtcbiAgfVxuXG4gIHNldCBpcHY0QWRkcmVzc2VzKGlwdjRBZGRyZXNzZXM6IEFycmF5PHN0cmluZz4pIHtcbiAgICB0aGlzLl9pcHY0QWRkcmVzc2VzID0gbmV3IFNldChpcHY0QWRkcmVzc2VzKTtcbiAgICAvL1RPRE86IGl0ZXJhdGUgdGhyb3VnaCB0aGUgc2V0IGFuZCByZW1vdmUgYW55IGlwIGFkZHJlc3NlcyB0aGF0IGFyZSBub3QgdmFsaWQuXG4gIH1cblxuICBnZXQgaXB2NkFkZHJlc3NlcygpOiBBcnJheTxzdHJpbmc+IHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLl9pcHY2QWRkcmVzc2VzKTtcbiAgfVxuXG4gIHNldCBpcHY2QWRkcmVzc2VzKGlwdjZBZGRyZXNzZXM6IEFycmF5PHN0cmluZz4pIHtcbiAgICB0aGlzLl9pcHY2QWRkcmVzc2VzID0gbmV3IFNldChpcHY2QWRkcmVzc2VzKTtcbiAgICAvL1RPRE86IGl0ZXJhdGUgdGhyb3VnaCB0aGUgc2V0IGFuZCByZW1vdmUgYW55IGlwIGFkZHJlc3NlcyB0aGF0IGFyZSBub3QgdmFsaWQuXG4gIH1cblxuICBnZXQgZHJvcGxldElEKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2Ryb3BsZXRJRDtcbiAgfVxuICAvKlxuICAgIG5vdGUgdGhhdCB0aGVyZSBpcyBubyBzZXR0ZXIgZm9yIGRyb3BsZXRJRCwgYW5kIHRoZSBfZHJvcGxldElEIHByb3BlcnR5IGlzIHByaXZhdGUuIFRoaXMgaXMgYmVjYXVzZSB3ZSBkbyBOT1Qgd2FudCB0aGUgZHJvcGxldElEIHRvIGJlIHNldCBieSBhbnkgY29kZSBvdXRzaWRlIG9mIHRoaXMgY2xhc3MuXG4gICovXG5cbiAgLy8gIUFjY2Vzc29yIE1ldGhvZHNcbiAgc2V0TmFtZShuZXdOYW1lOiBzdHJpbmcpOiB0aGlzIHtcbiAgICB0aGlzLm5hbWUgPSBuZXdOYW1lO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgYWRkSXB2NEFkZHJlc3MoaXB2NEFkZHJlc3M6IHN0cmluZyk6IHRoaXMge1xuICAgIGxldCBhZGRyZXNzQXJyYXkgPSB0aGlzLmlwdjRBZGRyZXNzZXM7XG4gICAgYWRkcmVzc0FycmF5LnB1c2goaXB2NEFkZHJlc3MpO1xuICAgIHRoaXMuaXB2NEFkZHJlc3NlcyA9IGFkZHJlc3NBcnJheTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJlbW92ZUlwdjRBZGRyZXNzKGlwdjRBZGRyZXNzOiBzdHJpbmcpOiB0aGlzIHtcbiAgICB0aGlzLmlwdjRBZGRyZXNzZXMgPSB0aGlzLmlwdjRBZGRyZXNzZXMuZmlsdGVyKFxuICAgICAgKGFkZHJlc3MpID0+IGFkZHJlc3MgIT09IGlwdjRBZGRyZXNzXG4gICAgKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGFkZElwdjZBZGRyZXNzKGlwdjZBZGRyZXNzOiBzdHJpbmcpOiB0aGlzIHtcbiAgICBsZXQgYWRkcmVzc0FycmF5ID0gdGhpcy5pcHY2QWRkcmVzc2VzO1xuICAgIGFkZHJlc3NBcnJheS5wdXNoKGlwdjZBZGRyZXNzKTtcbiAgICB0aGlzLmlwdjZBZGRyZXNzZXMgPSBhZGRyZXNzQXJyYXk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZW1vdmVJcHY2QWRkcmVzcyhpcHY2QWRkcmVzczogc3RyaW5nKTogdGhpcyB7XG4gICAgdGhpcy5pcHY2QWRkcmVzc2VzID0gdGhpcy5pcHY2QWRkcmVzc2VzLmZpbHRlcihcbiAgICAgIChhZGRyZXNzKSA9PiBhZGRyZXNzICE9PSBpcHY2QWRkcmVzc1xuICAgICk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyAhU3Vicm91dGluZXMgKHRoZXNlIHNob3VsZCBiZSBwcml2YXRlKVxuICBwcml2YXRlIHBhcnNlRGlnaXRhbE9jZWFuRHJvcGxldFJlc3BvbnNlKFxuICAgIHJlc3BvbnNlOiBkaWdpdGFsT2NlYW5DcmVhdGVEcm9wbGV0UmVzcG9uc2VcbiAgKTogdm9pZCB7XG4gICAgdHJ5IHtcbiAgICAgIHJlc3BvbnNlLmRyb3BsZXQubmV0d29ya3MudjQuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBpZiAoaXRlbS50eXBlID09PSBcInB1YmxpY1wiKSB7XG4gICAgICAgICAgdGhpcy5hZGRJcHY0QWRkcmVzcyhpdGVtLmlwX2FkZHJlc3MpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfVxuICAgIHRoaXMuX2Ryb3BsZXRJRCA9IHJlc3BvbnNlLmRyb3BsZXQuaWQ7XG4gIH1cblxuICBwcml2YXRlIHBvbGxGb3JJUEFkZHJlc3NlcyhcbiAgICBtYXhpbXVtTnVtYmVyT2ZTZWNvbmRzVG9Qb2xsOiBudW1iZXIgPSAtMVxuICApOiBQcm9taXNlPHRoaXM+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgLypcbiAgICAgICAgVGhpcyBmdW5jdGlvbiByZWFsbHkgc2hvdWxkIG5vdCBiZSBuZWNlc3NhcnkuIFBvbGxpbmcgaXMgZ2VuZXJhbGx5IGEgYmFkIGlkZWEuIEhvd2V2ZXIsIHByb3Zpc2lvbk9uRGlnaXRhbE9jZWFuLmRyb3BsZXRzLmNyZWF0ZSgpIGRvZXNuJ3QgYWN0dWFsbHkgcmV0dXJuIHRoZSBkcm9wbGV0J3MgSVAgYWRkcmVzcy4gVGhpcyBpcyBiZWNhdXNlIGl0IHRha2VzIH41LTEwIHNlY29uZHMgZm9yIHRoZSBkcm9wbGV0IHRvIGFjdHVhbGx5IGFjcXVpcmUgYW4gSVAgYWRkcmVzcy4gU28sIGluIHRoaXMgcGFydGljdWxhciBjYXNlLCB3ZSBuZWVkIHRvIHBvbGwgdW50aWwgd2UgZ2V0IGFuIElQIGFkZHJlc3MuXG5cbiAgICAgICAgSW4gdGhlIGZpcnN0IHBvbGwsIHdlIGNoZWNrIHJlc3BvbnNlLmZlYXR1cmVzIHRvIHNlZSBpZiBpdCBjb250YWlucyBcImlwdjZcIi4gSWYgc28sIHdlIGNvbnRpbnVlIHRvIHBvbGwgdW50aWwgd2UgaGF2ZSByZWNlaXZlZCBhdCBsZWFzdCAxIGlwdjQgYW5kIDEgaXB2NiBhZGRyZXNzLCBvciB1bnRpbCB0aGUgbnVtYmVyIG9mIHNlY29uZHMgdG8gcG9sbCBpcyB1cC5cblxuICAgICAgICBJZiB0aGUgbnVtYmVyIG9mIHNlY29uZHMgdG8gcG9sbCBpcyBsZXNzIHRoYW4gemVybywgdGhlbiB3ZSB3aWxsIHBvbGwgaW5kZWZpbml0ZWx5IHVudGlsIHdlIGdldCBhdCBsZWFzdCAxIGlwdjQgYWRkcmVzcywgYW5kIGlmIGlwdjYgaXMgZW5hYmxlZCwgMSBpcHY2IGFkZHJlc3NcbiAgICAgICovXG4gICAgICBsZXQgaXB2NEFkZHJlc3NlczogQXJyYXk8c3RyaW5nPiA9IFtdO1xuICAgICAgbGV0IGlwdjZBZGRyZXNzZXM6IEFycmF5PHN0cmluZz4gPSBbXTtcbiAgICAgIGxldCBoYXNJcHY2OiBib29sZWFuID0gdHJ1ZTtcbiAgICAgIGxldCBudW1iZXJPZlRpbWVzVG9Qb2xsUGVyU2Vjb25kOiBudW1iZXIgPSAxO1xuICAgICAgbGV0IG51bWJlck9mVGltZXNUb1BvbGw6IG51bWJlciA9XG4gICAgICAgIG1heGltdW1OdW1iZXJPZlNlY29uZHNUb1BvbGwgPD0gMFxuICAgICAgICAgID8gLTFcbiAgICAgICAgICA6IE1hdGguY2VpbChcbiAgICAgICAgICAgICAgbnVtYmVyT2ZUaW1lc1RvUG9sbFBlclNlY29uZCAqIG1heGltdW1OdW1iZXJPZlNlY29uZHNUb1BvbGxcbiAgICAgICAgICAgICk7XG4gICAgICBsZXQgcG9sbEludGVydmFsOiBOb2RlSlMuVGltZW91dDtcbiAgICAgIC8qXG4gICAgICAgIElGIG51bWJlciBvZiB0aW1lcyB0byBwb2xsIGlzIGxlc3MgdGhhbiB6ZXJvLCBwb2xsIGluZGVmaW5pdGVseS5cbiAgICAgICovXG4gICAgICBsZXQgcG9sbCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgLy90b2RvOiBhZGQgc29tZSBraW5kIG9mIENMSSBzcGlubmVyIHNvIHRoYXQgaXQncyBjbGVhciB0aGF0IGEgcG9sbGluZyBsb29wIGlzIHJ1bm5pbmdcbiAgICAgICAgY29uc3QgcmVzcG9uc2U6IGRpZ2l0YWxPY2VhbkNyZWF0ZURyb3BsZXRSZXNwb25zZSA9IGF3YWl0IGdldERyb3BsZXRJbmZvcm1hdGlvbihcbiAgICAgICAgICB0aGlzLmRyb3BsZXRJRFxuICAgICAgICApO1xuICAgICAgICBoYXNJcHY2ID1cbiAgICAgICAgICByZXNwb25zZS5kcm9wbGV0LmZlYXR1cmVzLmluY2x1ZGVzKFwiaXB2NlwiKSAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IHRydWVcbiAgICAgICAgICAgIDogZmFsc2U7XG4gICAgICAgIHJlc3BvbnNlLmRyb3BsZXQubmV0d29ya3MudjQuZm9yRWFjaCgobmV0d29yaykgPT4ge1xuICAgICAgICAgIGlmIChuZXR3b3JrLnR5cGUgPT09IFwicHVibGljXCIpIHtcbiAgICAgICAgICAgIGlwdjRBZGRyZXNzZXMucHVzaChuZXR3b3JrLmlwX2FkZHJlc3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChoYXNJcHY2KSB7XG4gICAgICAgICAgcmVzcG9uc2UuZHJvcGxldC5uZXR3b3Jrcy52Ni5mb3JFYWNoKChuZXR3b3JrKSA9PiB7XG4gICAgICAgICAgICBpZiAobmV0d29yay50eXBlID09PSBcInB1YmxpY1wiKSB7XG4gICAgICAgICAgICAgIGlwdjZBZGRyZXNzZXMucHVzaChuZXR3b3JrLmlwX2FkZHJlc3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlwdjRBZGRyZXNzZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChoYXNJcHY2KSB7XG4gICAgICAgICAgICBpZiAoaXB2NkFkZHJlc3Nlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgIG51bWJlck9mVGltZXNUb1BvbGwgPSAwO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbnVtYmVyT2ZUaW1lc1RvUG9sbC0tO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBudW1iZXJPZlRpbWVzVG9Qb2xsID0gMDtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbnVtYmVyT2ZUaW1lc1RvUG9sbC0tO1xuICAgICAgICB9XG4gICAgICAgIGNoZWNrSWZTaG91bGRTdG9wUG9sbGluZygpO1xuICAgICAgfTtcblxuICAgICAgZnVuY3Rpb24gY2hlY2tJZlNob3VsZFN0b3BQb2xsaW5nKCkge1xuICAgICAgICBpZiAobnVtYmVyT2ZUaW1lc1RvUG9sbCA9PSAwKSB7XG4gICAgICAgICAgY2xlYXJJbnRlcnZhbChwb2xsSW50ZXJ2YWwpO1xuICAgICAgICAgIGNoZWNrSWZJUEFkZHJlc3Nlc09idGFpbmVkKHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGNoZWNrSWZJUEFkZHJlc3Nlc09idGFpbmVkID0gKHJlc29sdmU6IGFueSwgcmVqZWN0OiBhbnkpID0+IHtcbiAgICAgICAgaWYgKGlwdjRBZGRyZXNzZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlwdjRBZGRyZXNzZXMuZm9yRWFjaCgoYWRkcmVzcykgPT4ge1xuICAgICAgICAgICAgdGhpcy5hZGRJcHY0QWRkcmVzcyhhZGRyZXNzKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAoaGFzSXB2Nikge1xuICAgICAgICAgICAgaWYgKGlwdjZBZGRyZXNzZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICBpcHY2QWRkcmVzc2VzLmZvckVhY2goKGFkZHJlc3MpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZElwdjZBZGRyZXNzKGFkZHJlc3MpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlamVjdCh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzb2x2ZSh0aGlzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVqZWN0KHRoaXMpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBmdW5jdGlvbiBwb2xsT25JbnRlcnZhbCgpOiBOb2RlSlMuVGltZW91dCB7XG4gICAgICAgIGxldCBtaWxsaXNlY29uZHNCZXR3ZWVuSW50ZXJ2YWxzID0gbnVtYmVyT2ZUaW1lc1RvUG9sbFBlclNlY29uZCAqIDEwMDA7XG4gICAgICAgIHJldHVybiBzZXRJbnRlcnZhbChwb2xsLCBtaWxsaXNlY29uZHNCZXR3ZWVuSW50ZXJ2YWxzKTtcbiAgICAgIH1cblxuICAgICAgcG9sbEludGVydmFsID0gcG9sbE9uSW50ZXJ2YWwoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIHByb3Zpc2lvbk9uKGNsb3VkOiBjbG91ZFByb3ZpZGVycyk6IFByb21pc2U8dGhpcz4ge1xuICAgIHN3aXRjaCAoK2Nsb3VkKSB7XG4gICAgICAvKlxuICAgICAgICBhcmd1bWVudCAnY2xvdWQnIGhhcyB0byBiZSBjYXN0IHRvIGEgbnVtYmVyIGluIG9yZGVyIHRvIGJlIGNvbXBhcmFibGUgaW4gYSBzd2l0Y2ggc3RhdGVtZW50LlxuICAgICAgICBUaGlzIHdvcmtzIGJlY2F1c2UgZW51bXMgYXJlIGFjdHVhbGx5IGEgdHlwZSBvZiBudW1iZXIgLi4uIHRoZSBuYW1lIG9mIGVhY2ggZW51bWVyYWJsZSB2YWx1ZSBpcyBqdXN0IHN5bnRhY3RpYyBzdWdhci5cbiAgICAgICAgZm9yIG1vcmUgaW5mbyBzZWU6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzI3NzQ3NDM3L3R5cGVzY3JpcHQtZW51bS1zd2l0Y2gtbm90LXdvcmtpbmdcbiAgICAgICovXG4gICAgICBjYXNlIGNsb3VkUHJvdmlkZXJzLmRpZ2l0YWxPY2VhbjpcbiAgICAgICAgbGV0IGNvbmZpZyA9IHsgbmFtZTogdGhpcy5uYW1lIH07XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlOiBkaWdpdGFsT2NlYW5DcmVhdGVEcm9wbGV0UmVzcG9uc2UgPSBhd2FpdCBwcm92aXNpb25PbkRpZ2l0YWxPY2VhbihcbiAgICAgICAgICBjb25maWdcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5wYXJzZURpZ2l0YWxPY2VhbkRyb3BsZXRSZXNwb25zZShyZXNwb25zZSk7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnBvbGxGb3JJUEFkZHJlc3NlcygpOyAvL25vdGUgdGhhdCB3ZSBuZWVkIHRvIHBvbGwgZm9yIGlwIGFkZHJlc3NlcyB1bnRpbCB3ZSByZWNlaXZlIHRoZW0gYmVjYXVzZSByZXNwb25zZSBkb2VzIG5vdCBhY3R1YWxseSBjb250YWluIElQIGFkZHJlc3Nlcy5cbiAgICAgIGNhc2UgY2xvdWRQcm92aWRlcnMuYXdzOlxuICAgICAgICBhd2FpdCBwcm92aXNpb25PbkFXUygpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAnJHtjbG91ZH0gaXNuXFwndCBhIHN1cHBvcnRlZCBjbG91ZCBwcm92aWRlci4gWW91IG11c3Qgc3BlY2lmeSBlaXRoZXIgXCJhd3NcIiBvciBcImRpZ2l0YWxPY2VhblwiLidcbiAgICAgICAgKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGVudW0gY2xvdWRQcm92aWRlcnMge1xuICBkaWdpdGFsT2NlYW4sXG4gIGF3cyxcbn1cbiIsImNvbnN0IF9fV0VCUEFDS19OQU1FU1BBQ0VfT0JKRUNUX18gPSByZXF1aXJlKFwiY2hhbGtcIik7OyIsImNvbnN0IF9fV0VCUEFDS19OQU1FU1BBQ0VfT0JKRUNUX18gPSByZXF1aXJlKFwidGVybWluYWwtbGlua1wiKTs7IiwiY29uc3QgX19XRUJQQUNLX05BTUVTUEFDRV9PQkpFQ1RfXyA9IHJlcXVpcmUoXCJjaGlsZF9wcm9jZXNzXCIpOzsiLCJpbXBvcnQgY2FjIGZyb20gXCJjYWNcIjtcbmltcG9ydCBwcm9tcHRzIGZyb20gXCJwcm9tcHRzXCI7XG5pbXBvcnQgeyBpbml0aWFsaXplRGlnaXRhbE9jZWFuQVBJIH0gZnJvbSBcIi4vcHJvdmlzaW9uUmFuY2hlck9TL29uRGlnaXRhbE9jZWFuL3Byb3Zpc2lvbk9uRGlnaXRhbE9jZWFuXCI7XG5pbXBvcnQge1xuICBSYW5jaGVyT1NDb25maWcsXG4gIGNsb3VkUHJvdmlkZXJzLFxufSBmcm9tIFwiLi9wcm92aXNpb25SYW5jaGVyT1MvUmFuY2hlck9TXCI7XG5pbXBvcnQge1xuICBzZXREaWdpdGFsT2NlYW5QZXJzb25hbEFjY2Vzc1Rva2VuLFxuICBnZXREaWdpdGFsT2NlYW5QZXJzb25hbEFjY2Vzc1Rva2VuLFxufSBmcm9tIFwiLi9wcm92aXNpb25SYW5jaGVyT1Mvb25EaWdpdGFsT2NlYW4vYWNjZXNzRGlnaXRhbE9jZWFuUGVyc29uYWxBY2Nlc3NUb2tlblwiO1xuaW1wb3J0IGNoYWxrIGZyb20gXCJjaGFsa1wiO1xuaW1wb3J0IHRlcm1pbmFsTGluayBmcm9tIFwidGVybWluYWwtbGlua1wiO1xuaW1wb3J0IHsgZXhlY1N5bmMgfSBmcm9tIFwiY2hpbGRfcHJvY2Vzc1wiO1xuaW1wb3J0IHsgcmVzb2x2ZSwgcmVsYXRpdmUgfSBmcm9tIFwicGF0aFwiO1xuXG5jb25zdCBjbGkgPSBjYWMoKTtcbmNvbnN0IHBhcnNlZCA9IGNsaS5wYXJzZSgpO1xuXG5sZXQgRElHSVRBTF9PQ0VBTl9QRVJTT05BTF9BQ0NFU1NfVE9LRU46IHN0cmluZyA9IFwiXCI7XG5cbmZ1bmN0aW9uIGdldFF1ZXN0aW9ucyh0b2tlbjogc3RyaW5nKTogQXJyYXk8cHJvbXB0cy5Qcm9tcHRPYmplY3Q+IHtcbiAgcmV0dXJuIFtcbiAgICB7XG4gICAgICB0eXBlOiB0b2tlbiA/IFwiY29uZmlybVwiIDogZmFsc2UsXG4gICAgICBuYW1lOiBcInJlc2V0VG9rZW5cIixcbiAgICAgIG1lc3NhZ2U6XG4gICAgICAgIFwiWW91ciBEaWdpdGFsIE9jZWFuIFBlcnNvbmFsIEFjY2VzcyBUb2tlbiBoYXMgYmVlbiByZXRyaWV2ZWQgZnJvbSB5b3VyIGtleWNoYWluLiBXb3VsZCB5b3UgbGlrZSB0byBjaGFuZ2UgaXQ/XCIsXG4gICAgICBpbml0aWFsOiBmYWxzZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHR5cGU6XG4gICAgICAgIC8vIEB0cy1pZ25vcmUgJ3ByZXYnIGlzIHRoZSB2YWx1ZSBvZiB0aGUgcHJldmlvdXMgcHJvbXB0LiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS90ZXJrZWxnL3Byb21wdHMjLXByb21wdC1vYmplY3RzXG4gICAgICAgIChwcmV2KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRva2VuID09PSBcIlwiIHx8IHByZXYgPyBcInBhc3N3b3JkXCIgOiBmYWxzZTtcbiAgICAgICAgfSxcbiAgICAgIG5hbWU6IFwibmV3VG9rZW5cIixcbiAgICAgIG1lc3NhZ2U6IGBTZXQgeW91ciBEaWdpdGFsIE9jZWFuIFBlcnNvbmFsIEFjY2VzcyBUb2tlbi4gSXQgd2lsbCBiZSBzdG9yZWQgaW4geW91ciBrZXljaGFpbiwgYW5kIG5vd2hlcmUgZWxzZS4gWW91IGNhbiBnZW5lcmF0ZSBhIHBlcnNvbmFsIGFjY2VzcyB0b2tlbiBhdCAke2NoYWxrLnVuZGVybGluZS5ibHVlQnJpZ2h0KFxuICAgICAgICB0ZXJtaW5hbExpbmsoXG4gICAgICAgICAgXCJEaWdpdGFsT2NlYW4gPiBBY2NvdW50ID4gQVBJXCIsXG4gICAgICAgICAgXCJodHRwczovL2Nsb3VkLmRpZ2l0YWxvY2Vhbi5jb20vYWNjb3VudC9hcGkvdG9rZW5zL25ld1wiXG4gICAgICAgIClcbiAgICAgICl9YCxcbiAgICAgIGluaXRpYWw6IFwiXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgIG5hbWU6IFwiZHJvcGxldE5hbWVcIixcbiAgICAgIG1lc3NhZ2U6IFwiV2hhdCBkbyB5b3Ugd2FudCB0byBuYW1lIHlvdXIgZHJvcGxldD9cIixcbiAgICAgIGluaXRpYWw6IFwib3duY2xvdWRcIixcbiAgICB9LFxuICBdO1xufVxuXG5jb25zdCByYW5jaGVyQ29uZmlnID0gbmV3IFJhbmNoZXJPU0NvbmZpZygpO1xuXG5mdW5jdGlvbiBhbnNpYmxlU2V0dXBSYW5jaGVyKFxuICBpcEFkZHJlc3M6IHN0cmluZyxcbiAgcGF0aFRvSW52ZW50b3J5OiBzdHJpbmcsXG4gIHBhdGhUb1BsYXlib29rOiBzdHJpbmcsXG4gIHBhdGhUb0RvY2tlckNvbXBvc2U6IHN0cmluZyxcbiAgcGF0aFRvRW52OiBzdHJpbmdcbikge1xuICByZXR1cm4gZXhlY1N5bmMoXG4gICAgYGFuc2libGUtcGxheWJvb2sgJyR7cGF0aFRvUGxheWJvb2t9JyAtLWV4dHJhLXZhcnM9J3JhbmNoZXJfaXA9JHtpcEFkZHJlc3N9IGRvY2tlcl9jb21wb3NlPSR7cGF0aFRvRG9ja2VyQ29tcG9zZX0gZW52PSR7cGF0aFRvRW52fScgLS1pbnZlbnRvcnk9JyR7cGF0aFRvSW52ZW50b3J5fSdgLFxuICAgIHsgc3RkaW86IFwiaW5oZXJpdFwiIH1cbiAgKTtcbn1cbmNvbnN0IGludmVudG9yeSA9IHJlbGF0aXZlKFxuICBwcm9jZXNzLmN3ZCgpLFxuICByZXNvbHZlKF9fZGlybmFtZSwgcmVxdWlyZShcIi4uL2ludmVudG9yeS55bWxcIikpXG4pO1xuY29uc3QgZW52ID0gcmVsYXRpdmUoXG4gIHByb2Nlc3MuY3dkKCksXG4gIHJlc29sdmUoX19kaXJuYW1lLCByZXF1aXJlKFwiLi4vdXRpbHMvb3duY2xvdWQtZG9ja2VyLy5lbnZcIikpXG4pO1xuY29uc3QgZG9ja2VyQ29tcG9zZSA9IHJlbGF0aXZlKFxuICBwcm9jZXNzLmN3ZCgpLFxuICByZXNvbHZlKF9fZGlybmFtZSwgcmVxdWlyZShcIi4uL3V0aWxzL293bmNsb3VkLWRvY2tlci9kb2NrZXItY29tcG9zZS55bWxcIikpXG4pO1xuY29uc3QgcGxheWJvb2sgPSByZWxhdGl2ZShcbiAgcHJvY2Vzcy5jd2QoKSxcbiAgcmVzb2x2ZShfX2Rpcm5hbWUsIHJlcXVpcmUoXCIuLi9pbnN0YWxsLW93bmNsb3VkLW9uLXJhbmNoZXIueW1sXCIpKVxuKTtcblxuKGFzeW5jICgpID0+IHtcbiAgRElHSVRBTF9PQ0VBTl9QRVJTT05BTF9BQ0NFU1NfVE9LRU4gPSBhd2FpdCBnZXREaWdpdGFsT2NlYW5QZXJzb25hbEFjY2Vzc1Rva2VuKCk7XG4gIGNvbnN0IGFuc3dlcnMgPSBhd2FpdCBwcm9tcHRzKFxuICAgIGdldFF1ZXN0aW9ucyhESUdJVEFMX09DRUFOX1BFUlNPTkFMX0FDQ0VTU19UT0tFTilcbiAgKTtcbiAgaWYgKGFuc3dlcnMubmV3VG9rZW4gPz8gdW5kZWZpbmVkKSB7XG4gICAgY29uc29sZS5sb2coYW5zd2Vycy5uZXdUb2tlbik7XG4gICAgYXdhaXQgc2V0RGlnaXRhbE9jZWFuUGVyc29uYWxBY2Nlc3NUb2tlbihhbnN3ZXJzLm5ld1Rva2VuKTtcbiAgfVxuICBhd2FpdCBpbml0aWFsaXplRGlnaXRhbE9jZWFuQVBJKCk7XG4gIGNvbnN0IGRyb3BsZXQgPSBhd2FpdCByYW5jaGVyQ29uZmlnXG4gICAgLnNldE5hbWUoYW5zd2Vycy5kcm9wbGV0TmFtZSlcbiAgICAucHJvdmlzaW9uT24oY2xvdWRQcm92aWRlcnMuZGlnaXRhbE9jZWFuKTtcbiAgY29uc3QgaXBBZGRyZXNzID0gZHJvcGxldC5pcHY0QWRkcmVzc2VzLnNsaWNlKC0xKVswXTtcbiAgYW5zaWJsZVNldHVwUmFuY2hlcihpcEFkZHJlc3MsIGludmVudG9yeSwgcGxheWJvb2ssIGRvY2tlckNvbXBvc2UsIGVudik7XG59KSgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==