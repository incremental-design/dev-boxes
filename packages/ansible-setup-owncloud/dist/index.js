/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 88:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3315f84862cd1f046eff.yml";

/***/ }),

/***/ 176:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3bc54d8cafc16fab2768.yml";

/***/ }),

/***/ 5:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "40d5f61a30e8f417ddae.yml";

/***/ }),

/***/ 703:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8f6bda4275cf85349fef";

/***/ }),

/***/ 867:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7e113f7f01be08227de0.yml";

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
var questions = [
    {
        type: DIGITAL_OCEAN_PERSONAL_ACCESS_TOKEN !== "" ? "confirm" : false,
        name: "resetToken",
        message: "Your Digital Ocean Personal Access Token has been retrieved from your keychain. Would you like to change it?",
        initial: false,
    },
    {
        type: 
        // @ts-ignore 'prev' is the value of the previous prompt. See: https://github.com/terkelg/prompts#-prompt-objects
        DIGITAL_OCEAN_PERSONAL_ACCESS_TOKEN === "" || prev ? "password" : false,
        name: "newToken",
        message: "Set your Digital Ocean Personal Access Token. It will be stored in your keychain, and nowhere else. You can generate a personal access token at " + external_chalk_default().underline.blueBright(external_terminal_link_default()("DigitalOcean > Account > API", "https://cloud.digitalocean.com/account/api/tokens/new")),
        initial: "",
    },
    {
        type: "text",
        name: "dropletName",
        message: "What do you want to name your droplet?",
        initial: "rancher",
    },
];
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
    return src_generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, getDigitalOceanPersonalAccessToken()];
            case 1:
                DIGITAL_OCEAN_PERSONAL_ACCESS_TOKEN = _a.sent();
                return [4 /*yield*/, external_prompts_default()(questions)];
            case 2:
                answers = _a.sent();
                if (!(answers.newToken !== "")) return [3 /*break*/, 4];
                return [4 /*yield*/, setDigitalOceanPersonalAccessToken(answers.newToken)];
            case 3:
                _a.sent();
                _a.label = 4;
            case 4: return [4 /*yield*/, initializeDigitalOceanAPI()];
            case 5:
                _a.sent();
                return [4 /*yield*/, rancherConfig
                        .setName(answers.dropletName)
                        .provisionOn(cloudProviders.digitalOcean)];
            case 6:
                droplet = _a.sent();
                ipAddress = droplet.ipv4Addresses.slice(-1)[0];
                ansibleSetupRancher(ipAddress, inventory, playbook, dockerCompose, env);
                return [2 /*return*/];
        }
    });
}); })();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbnNpYmxlLXNldHVwLW93bmNsb3VkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Fuc2libGUtc2V0dXAtb3duY2xvdWQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYW5zaWJsZS1zZXR1cC1vd25jbG91ZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYW5zaWJsZS1zZXR1cC1vd25jbG91ZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Fuc2libGUtc2V0dXAtb3duY2xvdWQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYW5zaWJsZS1zZXR1cC1vd25jbG91ZC9leHRlcm5hbCBcImNhY1wiIiwid2VicGFjazovL2Fuc2libGUtc2V0dXAtb3duY2xvdWQvZXh0ZXJuYWwgXCJwcm9tcHRzXCIiLCJ3ZWJwYWNrOi8vYW5zaWJsZS1zZXR1cC1vd25jbG91ZC9leHRlcm5hbCBcImRvLXdyYXBwZXJcIiIsIndlYnBhY2s6Ly9hbnNpYmxlLXNldHVwLW93bmNsb3VkL2V4dGVybmFsIFwia2V5dGFyXCIiLCJ3ZWJwYWNrOi8vYW5zaWJsZS1zZXR1cC1vd25jbG91ZC8uL3NyYy9wcm92aXNpb25SYW5jaGVyT1Mvb25EaWdpdGFsT2NlYW4vYWNjZXNzRGlnaXRhbE9jZWFuUGVyc29uYWxBY2Nlc3NUb2tlbi50cyIsIndlYnBhY2s6Ly9hbnNpYmxlLXNldHVwLW93bmNsb3VkL2V4dGVybmFsIFwiZnNcIiIsIndlYnBhY2s6Ly9hbnNpYmxlLXNldHVwLW93bmNsb3VkL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovL2Fuc2libGUtc2V0dXAtb3duY2xvdWQvLi9zcmMvcHJvdmlzaW9uUmFuY2hlck9TL29uRGlnaXRhbE9jZWFuL3Byb3Zpc2lvbk9uRGlnaXRhbE9jZWFuLnRzIiwid2VicGFjazovL2Fuc2libGUtc2V0dXAtb3duY2xvdWQvLi9zcmMvcHJvdmlzaW9uUmFuY2hlck9TL29uQVdTL3Byb3Zpc2lvbk9uQVdTLnRzIiwid2VicGFjazovL2Fuc2libGUtc2V0dXAtb3duY2xvdWQvLi9zcmMvcHJvdmlzaW9uUmFuY2hlck9TL1JhbmNoZXJPUy50cyIsIndlYnBhY2s6Ly9hbnNpYmxlLXNldHVwLW93bmNsb3VkL2V4dGVybmFsIFwiY2hhbGtcIiIsIndlYnBhY2s6Ly9hbnNpYmxlLXNldHVwLW93bmNsb3VkL2V4dGVybmFsIFwidGVybWluYWwtbGlua1wiIiwid2VicGFjazovL2Fuc2libGUtc2V0dXAtb3duY2xvdWQvZXh0ZXJuYWwgXCJjaGlsZF9wcm9jZXNzXCIiLCJ3ZWJwYWNrOi8vYW5zaWJsZS1zZXR1cC1vd25jbG91ZC8uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZ0NBQWdDLFlBQVk7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSxzRjs7Ozs7V0NBQSwyQjs7Ozs7OztBQ0FBLE1BQU0sNEJBQTRCLG1COzs7QUNBbEMsTUFBTSxnQ0FBNEIsdUI7OztBQ0FsQyxNQUFNLG1DQUE0QiwwQjs7O0FDQWxDLE1BQU0sK0JBQTRCLHNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBTjtBQUVyQixTQUFlLGtDQUFrQyxDQUN0RCxLQUFhOzs7O3dCQUViLHFCQUFNLHFDQUFrQixDQUN0Qixj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LHFCQUFNLGFBQWE7eUJBQ2hDLE9BQU8sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO3lCQUM1QixXQUFXLENBQUMsMkJBQTJCLENBQUM7O2dCQUZyQyxPQUFPLEdBQUcsU0FFMkI7Z0JBQ3JDLFNBQVMsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNyRCxtQkFBbUIsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUUsR0FBRyxDQUFDLENBQUM7Ozs7S0FDekUsQ0FBQyxFQUFFLENBQUMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IG1vZHVsZVsnZGVmYXVsdCddIDpcblx0XHQoKSA9PiBtb2R1bGU7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiY29uc3QgX19XRUJQQUNLX05BTUVTUEFDRV9PQkpFQ1RfXyA9IHJlcXVpcmUoXCJjYWNcIik7OyIsImNvbnN0IF9fV0VCUEFDS19OQU1FU1BBQ0VfT0JKRUNUX18gPSByZXF1aXJlKFwicHJvbXB0c1wiKTs7IiwiY29uc3QgX19XRUJQQUNLX05BTUVTUEFDRV9PQkpFQ1RfXyA9IHJlcXVpcmUoXCJkby13cmFwcGVyXCIpOzsiLCJjb25zdCBfX1dFQlBBQ0tfTkFNRVNQQUNFX09CSkVDVF9fID0gcmVxdWlyZShcImtleXRhclwiKTs7IiwiaW1wb3J0IGtleXRhciBmcm9tIFwia2V5dGFyXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZXREaWdpdGFsT2NlYW5QZXJzb25hbEFjY2Vzc1Rva2VuKFxuICB0b2tlbjogc3RyaW5nXG4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgYXdhaXQga2V5dGFyLnNldFBhc3N3b3JkKFxuICAgIFwiRElHSVRBTE9DRUFOXCIsXG4gICAgXCJESUdJVEFMX09DRUFOX1BFUlNPTkFMX0FDQ0VTU19UT0tFTlwiLFxuICAgIHRva2VuXG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREaWdpdGFsT2NlYW5QZXJzb25hbEFjY2Vzc1Rva2VuKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gIGNvbnN0IHRva2VuID0gYXdhaXQga2V5dGFyLmdldFBhc3N3b3JkKFxuICAgIFwiRElHSVRBTE9DRUFOXCIsXG4gICAgXCJESUdJVEFMX09DRUFOX1BFUlNPTkFMX0FDQ0VTU19UT0tFTlwiXG4gICk7XG4gIHJldHVybiB0b2tlbiA9PT0gbnVsbCA/IFwiXCIgOiB0b2tlbjtcbn1cbiIsImNvbnN0IF9fV0VCUEFDS19OQU1FU1BBQ0VfT0JKRUNUX18gPSByZXF1aXJlKFwiZnNcIik7OyIsImNvbnN0IF9fV0VCUEFDS19OQU1FU1BBQ0VfT0JKRUNUX18gPSByZXF1aXJlKFwicGF0aFwiKTs7IiwiaW1wb3J0IERpZ2l0YWxPY2VhbiBmcm9tIFwiZG8td3JhcHBlclwiO1xuLy8gaW1wb3J0IGdldEF1dGhUb2tlbiBmcm9tIFwiLi9nZXREaWdpdGFsT2NlYW5QZXJzb25hbEFjY2Vzc1Rva2VuXCI7XG5pbXBvcnQgeyBnZXREaWdpdGFsT2NlYW5QZXJzb25hbEFjY2Vzc1Rva2VuIH0gZnJvbSBcIi4vYWNjZXNzRGlnaXRhbE9jZWFuUGVyc29uYWxBY2Nlc3NUb2tlblwiO1xuaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xuaW1wb3J0IHsgcmVsYXRpdmUsIHJlc29sdmUgfSBmcm9tIFwicGF0aFwiO1xuXG5sZXQgYXV0aFRva2VuOiBzdHJpbmc7XG5sZXQgZGlnaXRhbE9jZWFuV3JhcHBlcjogRGlnaXRhbE9jZWFuO1xuLypcbmF1dGhUb2tlbiBhbmQgZGlnaXRhbE9jZWFuV3JhcHBlciBhcmUgc2luZ2xldG9ucyB0aGF0IGFyZSBnb2luZyB0byBwZXJzaXN0IGZvciB0aGUgbGlmZSBvZiB0aGUgcHJvZ3JhbS4gVGhhdCdzIHdoeSB0aGV5IGFyZSBpbiB0aGUgbW9kdWxlIHNjb3BlXG4qL1xuXG5jb25zdCBjbG91ZENvbmZpZ1BhdGggPSByZWxhdGl2ZShcbiAgcHJvY2Vzcy5jd2QoKSxcbiAgcmVzb2x2ZShfX2Rpcm5hbWUsIHJlcXVpcmUoXCIuL2Nsb3VkLWNvbmZpZy55bWxcIikpXG4pO1xuLypcbldlIGFyZSBhc2tpbmcgd2VicGFjayB0byBrZWVwIHRyYWNrIG9mIHRoZSBmaWxlIHBhdGggZm9yIGAuL2Nsb3VkLWNvbmZpZy55bWxgXG4qL1xuY29uc3QgY2xvdWRDb25maWcgPSBmcy5yZWFkRmlsZVN5bmMoY2xvdWRDb25maWdQYXRoLCBcInV0ZjhcIik7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbml0aWFsaXplRGlnaXRhbE9jZWFuQVBJKCk6IFByb21pc2U8dm9pZD4ge1xuICBhdXRoVG9rZW4gPSBhd2FpdCBnZXREaWdpdGFsT2NlYW5QZXJzb25hbEFjY2Vzc1Rva2VuKCk7XG4gIGRpZ2l0YWxPY2VhbldyYXBwZXIgPSBuZXcgRGlnaXRhbE9jZWFuKGF1dGhUb2tlbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm92aXNpb25PbkRpZ2l0YWxPY2VhbihcbiAgY29uZmlnT2JqZWN0OiBvYmplY3Rcbik6IFByb21pc2U8ZGlnaXRhbE9jZWFuQ3JlYXRlRHJvcGxldFJlc3BvbnNlPiB7XG4gIGxldCByYW5jaGVySW5zdGFuY2U6IG9iamVjdCA9IHtcbiAgICBuYW1lOiBcImFub3RoZXJcIixcbiAgICByZWdpb246IFwibnljM1wiLFxuICAgIHNpemU6IFwicy0xdmNwdS0xZ2JcIixcbiAgICBpbWFnZTogXCJyYW5jaGVyb3NcIixcbiAgICBzc2hfa2V5czogWzI3NjA4OTg2LCAyODQ5NjQ1N10sXG4gICAgYmFja3VwczogZmFsc2UsXG4gICAgaXB2NjogdHJ1ZSxcbiAgICBwcml2YXRlX25ldHdvcmtpbmc6IG51bGwsXG4gICAgdXNlcl9kYXRhOiBjbG91ZENvbmZpZyxcbiAgICB2b2x1bWVzOiBudWxsLFxuICAgIHRhZ3M6IFtdLFxuICB9O1xuXG4gIHJhbmNoZXJJbnN0YW5jZSA9IE9iamVjdC5hc3NpZ24ocmFuY2hlckluc3RhbmNlLCBjb25maWdPYmplY3QpO1xuICByZXR1cm4gKFxuICAgIGRpZ2l0YWxPY2VhbldyYXBwZXIuZHJvcGxldHNcbiAgICAgIC8vIEB0cy1pZ25vcmU6IHR5cGVzIGZvciByYW5jaGVySW5zdGFuY2UgYXJlIG5vdCBjb21wYXRpYmxlXG4gICAgICAuY3JlYXRlKHJhbmNoZXJJbnN0YW5jZSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICB9KVxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RHJvcGxldEluZm9ybWF0aW9uKGRyb3BsZXRJRDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIGRpZ2l0YWxPY2VhbldyYXBwZXIuZHJvcGxldHMuZ2V0QnlJZChkcm9wbGV0SUQpO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIGRpZ2l0YWxPY2VhbkNyZWF0ZURyb3BsZXRSZXNwb25zZSB7XG4gIGRyb3BsZXQ6IHtcbiAgICBpZDogc3RyaW5nO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBtZW1vcnlJbk1lZ2FieXRlczogYmlnaW50O1xuICAgIHZjcHVzOiBiaWdpbnQ7XG4gICAgZGlzazogYmlnaW50O1xuICAgIGxvY2tlZDogYm9vbGVhbjtcbiAgICBjcmVhdGVkX2F0OiBzdHJpbmc7XG4gICAgc3RhdHVzOiBzdHJpbmc7XG4gICAgYmFja3VwX2lkczogQXJyYXk8YW55PjtcbiAgICBzbmFwc2hvdF9pZHM6IEFycmF5PGFueT47XG4gICAgZmVhdHVyZXM6IEFycmF5PGFueT47XG4gICAgcmVnaW9uOiBvYmplY3Q7XG4gICAgaW1hZ2U6IG9iamVjdDtcbiAgICBzaXplOiBvYmplY3Q7XG4gICAgc2l6ZV9zbHVnOiBzdHJpbmc7XG4gICAgbmV0d29ya3M6IHtcbiAgICAgIHY0OiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpcF9hZGRyZXNzOiBzdHJpbmc7XG4gICAgICAgICAgbmV0bWFzazogc3RyaW5nO1xuICAgICAgICAgIGdhdGV3YXk6IHN0cmluZyB8IG51bGw7XG4gICAgICAgICAgdHlwZTogXCJwcml2YXRlXCIgfCBcInB1YmxpY1wiO1xuICAgICAgICB9XG4gICAgICBdO1xuICAgICAgdjY6IFtcbiAgICAgICAge1xuICAgICAgICAgIGlwX2FkZHJlc3M6IHN0cmluZztcbiAgICAgICAgICBuZXRtYXNrOiBzdHJpbmc7XG4gICAgICAgICAgZ2F0ZXdheTogc3RyaW5nIHwgbnVsbDtcbiAgICAgICAgICB0eXBlOiBcInByaXZhdGVcIiB8IFwicHVibGljXCI7XG4gICAgICAgIH1cbiAgICAgIF07XG4gICAgfTtcbiAgICBrZXJuZWw6IG9iamVjdCB8IG51bGw7XG4gICAgbmV4dF9iYWNrdXBfd2luZG93OiBvYmplY3QgfCBudWxsO1xuICAgIHRhZ3M6IEFycmF5PGFueT47XG4gICAgdm9sdW1lX2lkczogQXJyYXk8YW55PjtcbiAgICB2cGNfdXVpZDogU3RyaW5nO1xuICB9O1xufVxuIiwiLy8gVE9ETzogYWN0dWFsbHkgd3JpdGUgdGhpcyBmdW5jdGlvbi4gUmlnaHQgbm93IGl0J3MganVzdCBhIHN0dWJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwcm92aXNpb25PbkFXUygpIHtcbiAgdGhyb3cgbmV3IEVycm9yKFxuICAgIFwiU29ycnksIEkgaGF2ZW4ndCB3cml0dGVuIGFueSBjb2RlIHRvIHByb3Zpc2lvbiByYW5jaGVyIG9uIEFXUy5cIlxuICApO1xufVxuIiwiaW1wb3J0IHtcbiAgcHJvdmlzaW9uT25EaWdpdGFsT2NlYW4sXG4gIGRpZ2l0YWxPY2VhbkNyZWF0ZURyb3BsZXRSZXNwb25zZSxcbiAgZ2V0RHJvcGxldEluZm9ybWF0aW9uLFxufSBmcm9tIFwiLi9vbkRpZ2l0YWxPY2Vhbi9wcm92aXNpb25PbkRpZ2l0YWxPY2VhblwiO1xuaW1wb3J0IHsgcHJvdmlzaW9uT25BV1MgfSBmcm9tIFwiLi9vbkFXUy9wcm92aXNpb25PbkFXU1wiO1xuXG5leHBvcnQgY2xhc3MgUmFuY2hlck9TQ29uZmlnIHtcbiAgLy8gIVByaXZhdGUgTWVtYmVyc1xuICBwcml2YXRlIF9uYW1lOiBzdHJpbmcgPSBcIlwiO1xuICBwcml2YXRlIF9pcHY0QWRkcmVzc2VzOiBTZXQ8c3RyaW5nPiA9IG5ldyBTZXQoKTtcbiAgcHJpdmF0ZSBfaXB2NkFkZHJlc3NlczogU2V0PHN0cmluZz4gPSBuZXcgU2V0KCk7XG4gIHByaXZhdGUgX2Ryb3BsZXRJRDogc3RyaW5nID0gXCJcIjtcblxuICAvLyAhQ29uc3RydWN0b3JcbiAgY29uc3RydWN0b3IoKSB7fSAvL0knbSBsZWF2aW5nIHRoZSBjb25zdHJ1Y3RvciBibGFuayBiZWNhdXNlIHdlJ2xsIGluaXRpYWxpemUgYWxsIHZhcmlhYmxlcyB3aXRoIGNoYWluYWJsZSBzZXR0ZXJzXG5cbiAgLy8gIUdldHRlcnMgYW5kIFNldHRlcnNcbiAgZ2V0IG5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuICBzZXQgbmFtZShuZXdOYW1lOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uYW1lID0gbmV3TmFtZTtcbiAgICAvLyBUT0RPOiBzYW5pdGl6ZSBjaGFyYWN0ZXJzIHRoYXQgZG9uJ3QgYmVsb25nIGluIGRpZ2l0YWwgb2NlYW4gZHJvcGxldCBuYW1lc1xuICAgIC8vIFRPRE86IGlmIGRyb3BsZXQgaGFzIGFscmVhZHkgYmVlbiBwcm92aXNpb25lZCB3aXRoIGEgbmFtZSwgc2VlIGlmIHRoZSBkcm9wbGV0J3MgbmFtZSBjYW4gYWN0dWFsbHkgYmUgdXBkYXRlZC4gSWYgaXQgY2FuLCB0aGVuIHVwZGF0ZSBpdC4gSWYgbm90LCB0aHJvdyBhbiBlcnJvci5cbiAgfVxuXG4gIGdldCBpcHY0QWRkcmVzc2VzKCk6IEFycmF5PHN0cmluZz4ge1xuICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMuX2lwdjRBZGRyZXNzZXMpO1xuICB9XG5cbiAgc2V0IGlwdjRBZGRyZXNzZXMoaXB2NEFkZHJlc3NlczogQXJyYXk8c3RyaW5nPikge1xuICAgIHRoaXMuX2lwdjRBZGRyZXNzZXMgPSBuZXcgU2V0KGlwdjRBZGRyZXNzZXMpO1xuICAgIC8vVE9ETzogaXRlcmF0ZSB0aHJvdWdoIHRoZSBzZXQgYW5kIHJlbW92ZSBhbnkgaXAgYWRkcmVzc2VzIHRoYXQgYXJlIG5vdCB2YWxpZC5cbiAgfVxuXG4gIGdldCBpcHY2QWRkcmVzc2VzKCk6IEFycmF5PHN0cmluZz4ge1xuICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMuX2lwdjZBZGRyZXNzZXMpO1xuICB9XG5cbiAgc2V0IGlwdjZBZGRyZXNzZXMoaXB2NkFkZHJlc3NlczogQXJyYXk8c3RyaW5nPikge1xuICAgIHRoaXMuX2lwdjZBZGRyZXNzZXMgPSBuZXcgU2V0KGlwdjZBZGRyZXNzZXMpO1xuICAgIC8vVE9ETzogaXRlcmF0ZSB0aHJvdWdoIHRoZSBzZXQgYW5kIHJlbW92ZSBhbnkgaXAgYWRkcmVzc2VzIHRoYXQgYXJlIG5vdCB2YWxpZC5cbiAgfVxuXG4gIGdldCBkcm9wbGV0SUQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fZHJvcGxldElEO1xuICB9XG4gIC8qXG4gICAgbm90ZSB0aGF0IHRoZXJlIGlzIG5vIHNldHRlciBmb3IgZHJvcGxldElELCBhbmQgdGhlIF9kcm9wbGV0SUQgcHJvcGVydHkgaXMgcHJpdmF0ZS4gVGhpcyBpcyBiZWNhdXNlIHdlIGRvIE5PVCB3YW50IHRoZSBkcm9wbGV0SUQgdG8gYmUgc2V0IGJ5IGFueSBjb2RlIG91dHNpZGUgb2YgdGhpcyBjbGFzcy5cbiAgKi9cblxuICAvLyAhQWNjZXNzb3IgTWV0aG9kc1xuICBzZXROYW1lKG5ld05hbWU6IHN0cmluZyk6IHRoaXMge1xuICAgIHRoaXMubmFtZSA9IG5ld05hbWU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBhZGRJcHY0QWRkcmVzcyhpcHY0QWRkcmVzczogc3RyaW5nKTogdGhpcyB7XG4gICAgbGV0IGFkZHJlc3NBcnJheSA9IHRoaXMuaXB2NEFkZHJlc3NlcztcbiAgICBhZGRyZXNzQXJyYXkucHVzaChpcHY0QWRkcmVzcyk7XG4gICAgdGhpcy5pcHY0QWRkcmVzc2VzID0gYWRkcmVzc0FycmF5O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmVtb3ZlSXB2NEFkZHJlc3MoaXB2NEFkZHJlc3M6IHN0cmluZyk6IHRoaXMge1xuICAgIHRoaXMuaXB2NEFkZHJlc3NlcyA9IHRoaXMuaXB2NEFkZHJlc3Nlcy5maWx0ZXIoXG4gICAgICAoYWRkcmVzcykgPT4gYWRkcmVzcyAhPT0gaXB2NEFkZHJlc3NcbiAgICApO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgYWRkSXB2NkFkZHJlc3MoaXB2NkFkZHJlc3M6IHN0cmluZyk6IHRoaXMge1xuICAgIGxldCBhZGRyZXNzQXJyYXkgPSB0aGlzLmlwdjZBZGRyZXNzZXM7XG4gICAgYWRkcmVzc0FycmF5LnB1c2goaXB2NkFkZHJlc3MpO1xuICAgIHRoaXMuaXB2NkFkZHJlc3NlcyA9IGFkZHJlc3NBcnJheTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJlbW92ZUlwdjZBZGRyZXNzKGlwdjZBZGRyZXNzOiBzdHJpbmcpOiB0aGlzIHtcbiAgICB0aGlzLmlwdjZBZGRyZXNzZXMgPSB0aGlzLmlwdjZBZGRyZXNzZXMuZmlsdGVyKFxuICAgICAgKGFkZHJlc3MpID0+IGFkZHJlc3MgIT09IGlwdjZBZGRyZXNzXG4gICAgKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vICFTdWJyb3V0aW5lcyAodGhlc2Ugc2hvdWxkIGJlIHByaXZhdGUpXG4gIHByaXZhdGUgcGFyc2VEaWdpdGFsT2NlYW5Ecm9wbGV0UmVzcG9uc2UoXG4gICAgcmVzcG9uc2U6IGRpZ2l0YWxPY2VhbkNyZWF0ZURyb3BsZXRSZXNwb25zZVxuICApOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgcmVzcG9uc2UuZHJvcGxldC5uZXR3b3Jrcy52NC5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGlmIChpdGVtLnR5cGUgPT09IFwicHVibGljXCIpIHtcbiAgICAgICAgICB0aGlzLmFkZElwdjRBZGRyZXNzKGl0ZW0uaXBfYWRkcmVzcyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICB9XG4gICAgdGhpcy5fZHJvcGxldElEID0gcmVzcG9uc2UuZHJvcGxldC5pZDtcbiAgfVxuXG4gIHByaXZhdGUgcG9sbEZvcklQQWRkcmVzc2VzKFxuICAgIG1heGltdW1OdW1iZXJPZlNlY29uZHNUb1BvbGw6IG51bWJlciA9IC0xXG4gICk6IFByb21pc2U8dGhpcz4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAvKlxuICAgICAgICBUaGlzIGZ1bmN0aW9uIHJlYWxseSBzaG91bGQgbm90IGJlIG5lY2Vzc2FyeS4gUG9sbGluZyBpcyBnZW5lcmFsbHkgYSBiYWQgaWRlYS4gSG93ZXZlciwgcHJvdmlzaW9uT25EaWdpdGFsT2NlYW4uZHJvcGxldHMuY3JlYXRlKCkgZG9lc24ndCBhY3R1YWxseSByZXR1cm4gdGhlIGRyb3BsZXQncyBJUCBhZGRyZXNzLiBUaGlzIGlzIGJlY2F1c2UgaXQgdGFrZXMgfjUtMTAgc2Vjb25kcyBmb3IgdGhlIGRyb3BsZXQgdG8gYWN0dWFsbHkgYWNxdWlyZSBhbiBJUCBhZGRyZXNzLiBTbywgaW4gdGhpcyBwYXJ0aWN1bGFyIGNhc2UsIHdlIG5lZWQgdG8gcG9sbCB1bnRpbCB3ZSBnZXQgYW4gSVAgYWRkcmVzcy5cblxuICAgICAgICBJbiB0aGUgZmlyc3QgcG9sbCwgd2UgY2hlY2sgcmVzcG9uc2UuZmVhdHVyZXMgdG8gc2VlIGlmIGl0IGNvbnRhaW5zIFwiaXB2NlwiLiBJZiBzbywgd2UgY29udGludWUgdG8gcG9sbCB1bnRpbCB3ZSBoYXZlIHJlY2VpdmVkIGF0IGxlYXN0IDEgaXB2NCBhbmQgMSBpcHY2IGFkZHJlc3MsIG9yIHVudGlsIHRoZSBudW1iZXIgb2Ygc2Vjb25kcyB0byBwb2xsIGlzIHVwLlxuXG4gICAgICAgIElmIHRoZSBudW1iZXIgb2Ygc2Vjb25kcyB0byBwb2xsIGlzIGxlc3MgdGhhbiB6ZXJvLCB0aGVuIHdlIHdpbGwgcG9sbCBpbmRlZmluaXRlbHkgdW50aWwgd2UgZ2V0IGF0IGxlYXN0IDEgaXB2NCBhZGRyZXNzLCBhbmQgaWYgaXB2NiBpcyBlbmFibGVkLCAxIGlwdjYgYWRkcmVzc1xuICAgICAgKi9cbiAgICAgIGxldCBpcHY0QWRkcmVzc2VzOiBBcnJheTxzdHJpbmc+ID0gW107XG4gICAgICBsZXQgaXB2NkFkZHJlc3NlczogQXJyYXk8c3RyaW5nPiA9IFtdO1xuICAgICAgbGV0IGhhc0lwdjY6IGJvb2xlYW4gPSB0cnVlO1xuICAgICAgbGV0IG51bWJlck9mVGltZXNUb1BvbGxQZXJTZWNvbmQ6IG51bWJlciA9IDE7XG4gICAgICBsZXQgbnVtYmVyT2ZUaW1lc1RvUG9sbDogbnVtYmVyID1cbiAgICAgICAgbWF4aW11bU51bWJlck9mU2Vjb25kc1RvUG9sbCA8PSAwXG4gICAgICAgICAgPyAtMVxuICAgICAgICAgIDogTWF0aC5jZWlsKFxuICAgICAgICAgICAgICBudW1iZXJPZlRpbWVzVG9Qb2xsUGVyU2Vjb25kICogbWF4aW11bU51bWJlck9mU2Vjb25kc1RvUG9sbFxuICAgICAgICAgICAgKTtcbiAgICAgIGxldCBwb2xsSW50ZXJ2YWw6IE5vZGVKUy5UaW1lb3V0O1xuICAgICAgLypcbiAgICAgICAgSUYgbnVtYmVyIG9mIHRpbWVzIHRvIHBvbGwgaXMgbGVzcyB0aGFuIHplcm8sIHBvbGwgaW5kZWZpbml0ZWx5LlxuICAgICAgKi9cbiAgICAgIGxldCBwb2xsID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAvL3RvZG86IGFkZCBzb21lIGtpbmQgb2YgQ0xJIHNwaW5uZXIgc28gdGhhdCBpdCdzIGNsZWFyIHRoYXQgYSBwb2xsaW5nIGxvb3AgaXMgcnVubmluZ1xuICAgICAgICBjb25zdCByZXNwb25zZTogZGlnaXRhbE9jZWFuQ3JlYXRlRHJvcGxldFJlc3BvbnNlID0gYXdhaXQgZ2V0RHJvcGxldEluZm9ybWF0aW9uKFxuICAgICAgICAgIHRoaXMuZHJvcGxldElEXG4gICAgICAgICk7XG4gICAgICAgIGhhc0lwdjYgPVxuICAgICAgICAgIHJlc3BvbnNlLmRyb3BsZXQuZmVhdHVyZXMuaW5jbHVkZXMoXCJpcHY2XCIpICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gdHJ1ZVxuICAgICAgICAgICAgOiBmYWxzZTtcbiAgICAgICAgcmVzcG9uc2UuZHJvcGxldC5uZXR3b3Jrcy52NC5mb3JFYWNoKChuZXR3b3JrKSA9PiB7XG4gICAgICAgICAgaWYgKG5ldHdvcmsudHlwZSA9PT0gXCJwdWJsaWNcIikge1xuICAgICAgICAgICAgaXB2NEFkZHJlc3Nlcy5wdXNoKG5ldHdvcmsuaXBfYWRkcmVzcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGhhc0lwdjYpIHtcbiAgICAgICAgICByZXNwb25zZS5kcm9wbGV0Lm5ldHdvcmtzLnY2LmZvckVhY2goKG5ldHdvcmspID0+IHtcbiAgICAgICAgICAgIGlmIChuZXR3b3JrLnR5cGUgPT09IFwicHVibGljXCIpIHtcbiAgICAgICAgICAgICAgaXB2NkFkZHJlc3Nlcy5wdXNoKG5ldHdvcmsuaXBfYWRkcmVzcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXB2NEFkZHJlc3Nlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWYgKGhhc0lwdjYpIHtcbiAgICAgICAgICAgIGlmIChpcHY2QWRkcmVzc2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgbnVtYmVyT2ZUaW1lc1RvUG9sbCA9IDA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBudW1iZXJPZlRpbWVzVG9Qb2xsLS07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG51bWJlck9mVGltZXNUb1BvbGwgPSAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBudW1iZXJPZlRpbWVzVG9Qb2xsLS07XG4gICAgICAgIH1cbiAgICAgICAgY2hlY2tJZlNob3VsZFN0b3BQb2xsaW5nKCk7XG4gICAgICB9O1xuXG4gICAgICBmdW5jdGlvbiBjaGVja0lmU2hvdWxkU3RvcFBvbGxpbmcoKSB7XG4gICAgICAgIGlmIChudW1iZXJPZlRpbWVzVG9Qb2xsID09IDApIHtcbiAgICAgICAgICBjbGVhckludGVydmFsKHBvbGxJbnRlcnZhbCk7XG4gICAgICAgICAgY2hlY2tJZklQQWRkcmVzc2VzT2J0YWluZWQocmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgY2hlY2tJZklQQWRkcmVzc2VzT2J0YWluZWQgPSAocmVzb2x2ZTogYW55LCByZWplY3Q6IGFueSkgPT4ge1xuICAgICAgICBpZiAoaXB2NEFkZHJlc3Nlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaXB2NEFkZHJlc3Nlcy5mb3JFYWNoKChhZGRyZXNzKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFkZElwdjRBZGRyZXNzKGFkZHJlc3MpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmIChoYXNJcHY2KSB7XG4gICAgICAgICAgICBpZiAoaXB2NkFkZHJlc3Nlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgIGlwdjZBZGRyZXNzZXMuZm9yRWFjaCgoYWRkcmVzcykgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkSXB2NkFkZHJlc3MoYWRkcmVzcyk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICByZXNvbHZlKHRoaXMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmVqZWN0KHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXNvbHZlKHRoaXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZWplY3QodGhpcyk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGZ1bmN0aW9uIHBvbGxPbkludGVydmFsKCk6IE5vZGVKUy5UaW1lb3V0IHtcbiAgICAgICAgbGV0IG1pbGxpc2Vjb25kc0JldHdlZW5JbnRlcnZhbHMgPSBudW1iZXJPZlRpbWVzVG9Qb2xsUGVyU2Vjb25kICogMTAwMDtcbiAgICAgICAgcmV0dXJuIHNldEludGVydmFsKHBvbGwsIG1pbGxpc2Vjb25kc0JldHdlZW5JbnRlcnZhbHMpO1xuICAgICAgfVxuXG4gICAgICBwb2xsSW50ZXJ2YWwgPSBwb2xsT25JbnRlcnZhbCgpO1xuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgcHJvdmlzaW9uT24oY2xvdWQ6IGNsb3VkUHJvdmlkZXJzKTogUHJvbWlzZTx0aGlzPiB7XG4gICAgc3dpdGNoICgrY2xvdWQpIHtcbiAgICAgIC8qXG4gICAgICAgIGFyZ3VtZW50ICdjbG91ZCcgaGFzIHRvIGJlIGNhc3QgdG8gYSBudW1iZXIgaW4gb3JkZXIgdG8gYmUgY29tcGFyYWJsZSBpbiBhIHN3aXRjaCBzdGF0ZW1lbnQuXG4gICAgICAgIFRoaXMgd29ya3MgYmVjYXVzZSBlbnVtcyBhcmUgYWN0dWFsbHkgYSB0eXBlIG9mIG51bWJlciAuLi4gdGhlIG5hbWUgb2YgZWFjaCBlbnVtZXJhYmxlIHZhbHVlIGlzIGp1c3Qgc3ludGFjdGljIHN1Z2FyLlxuICAgICAgICBmb3IgbW9yZSBpbmZvIHNlZTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjc3NDc0MzcvdHlwZXNjcmlwdC1lbnVtLXN3aXRjaC1ub3Qtd29ya2luZ1xuICAgICAgKi9cbiAgICAgIGNhc2UgY2xvdWRQcm92aWRlcnMuZGlnaXRhbE9jZWFuOlxuICAgICAgICBsZXQgY29uZmlnID0geyBuYW1lOiB0aGlzLm5hbWUgfTtcbiAgICAgICAgY29uc3QgcmVzcG9uc2U6IGRpZ2l0YWxPY2VhbkNyZWF0ZURyb3BsZXRSZXNwb25zZSA9IGF3YWl0IHByb3Zpc2lvbk9uRGlnaXRhbE9jZWFuKFxuICAgICAgICAgIGNvbmZpZ1xuICAgICAgICApO1xuICAgICAgICB0aGlzLnBhcnNlRGlnaXRhbE9jZWFuRHJvcGxldFJlc3BvbnNlKHJlc3BvbnNlKTtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMucG9sbEZvcklQQWRkcmVzc2VzKCk7IC8vbm90ZSB0aGF0IHdlIG5lZWQgdG8gcG9sbCBmb3IgaXAgYWRkcmVzc2VzIHVudGlsIHdlIHJlY2VpdmUgdGhlbSBiZWNhdXNlIHJlc3BvbnNlIGRvZXMgbm90IGFjdHVhbGx5IGNvbnRhaW4gSVAgYWRkcmVzc2VzLlxuICAgICAgY2FzZSBjbG91ZFByb3ZpZGVycy5hd3M6XG4gICAgICAgIGF3YWl0IHByb3Zpc2lvbk9uQVdTKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICcke2Nsb3VkfSBpc25cXCd0IGEgc3VwcG9ydGVkIGNsb3VkIHByb3ZpZGVyLiBZb3UgbXVzdCBzcGVjaWZ5IGVpdGhlciBcImF3c1wiIG9yIFwiZGlnaXRhbE9jZWFuXCIuJ1xuICAgICAgICApO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZW51bSBjbG91ZFByb3ZpZGVycyB7XG4gIGRpZ2l0YWxPY2VhbixcbiAgYXdzLFxufVxuIiwiY29uc3QgX19XRUJQQUNLX05BTUVTUEFDRV9PQkpFQ1RfXyA9IHJlcXVpcmUoXCJjaGFsa1wiKTs7IiwiY29uc3QgX19XRUJQQUNLX05BTUVTUEFDRV9PQkpFQ1RfXyA9IHJlcXVpcmUoXCJ0ZXJtaW5hbC1saW5rXCIpOzsiLCJjb25zdCBfX1dFQlBBQ0tfTkFNRVNQQUNFX09CSkVDVF9fID0gcmVxdWlyZShcImNoaWxkX3Byb2Nlc3NcIik7OyIsImltcG9ydCBjYWMgZnJvbSBcImNhY1wiO1xuaW1wb3J0IHByb21wdHMgZnJvbSBcInByb21wdHNcIjtcbmltcG9ydCB7IGluaXRpYWxpemVEaWdpdGFsT2NlYW5BUEkgfSBmcm9tIFwiLi9wcm92aXNpb25SYW5jaGVyT1Mvb25EaWdpdGFsT2NlYW4vcHJvdmlzaW9uT25EaWdpdGFsT2NlYW5cIjtcbmltcG9ydCB7XG4gIFJhbmNoZXJPU0NvbmZpZyxcbiAgY2xvdWRQcm92aWRlcnMsXG59IGZyb20gXCIuL3Byb3Zpc2lvblJhbmNoZXJPUy9SYW5jaGVyT1NcIjtcbmltcG9ydCB7XG4gIHNldERpZ2l0YWxPY2VhblBlcnNvbmFsQWNjZXNzVG9rZW4sXG4gIGdldERpZ2l0YWxPY2VhblBlcnNvbmFsQWNjZXNzVG9rZW4sXG59IGZyb20gXCIuL3Byb3Zpc2lvblJhbmNoZXJPUy9vbkRpZ2l0YWxPY2Vhbi9hY2Nlc3NEaWdpdGFsT2NlYW5QZXJzb25hbEFjY2Vzc1Rva2VuXCI7XG5pbXBvcnQgY2hhbGsgZnJvbSBcImNoYWxrXCI7XG5pbXBvcnQgdGVybWluYWxMaW5rIGZyb20gXCJ0ZXJtaW5hbC1saW5rXCI7XG5pbXBvcnQgeyBleGVjU3luYyB9IGZyb20gXCJjaGlsZF9wcm9jZXNzXCI7XG5pbXBvcnQgeyByZXNvbHZlLCByZWxhdGl2ZSB9IGZyb20gXCJwYXRoXCI7XG5cbmNvbnN0IGNsaSA9IGNhYygpO1xuY29uc3QgcGFyc2VkID0gY2xpLnBhcnNlKCk7XG5cbmxldCBESUdJVEFMX09DRUFOX1BFUlNPTkFMX0FDQ0VTU19UT0tFTjogc3RyaW5nID0gXCJcIjtcblxuY29uc3QgcXVlc3Rpb25zOiBBcnJheTxwcm9tcHRzLlByb21wdE9iamVjdD4gPSBbXG4gIHtcbiAgICB0eXBlOiBESUdJVEFMX09DRUFOX1BFUlNPTkFMX0FDQ0VTU19UT0tFTiAhPT0gXCJcIiA/IFwiY29uZmlybVwiIDogZmFsc2UsXG4gICAgbmFtZTogXCJyZXNldFRva2VuXCIsXG4gICAgbWVzc2FnZTpcbiAgICAgIFwiWW91ciBEaWdpdGFsIE9jZWFuIFBlcnNvbmFsIEFjY2VzcyBUb2tlbiBoYXMgYmVlbiByZXRyaWV2ZWQgZnJvbSB5b3VyIGtleWNoYWluLiBXb3VsZCB5b3UgbGlrZSB0byBjaGFuZ2UgaXQ/XCIsXG4gICAgaW5pdGlhbDogZmFsc2UsXG4gIH0sXG4gIHtcbiAgICB0eXBlOlxuICAgICAgLy8gQHRzLWlnbm9yZSAncHJldicgaXMgdGhlIHZhbHVlIG9mIHRoZSBwcmV2aW91cyBwcm9tcHQuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL3RlcmtlbGcvcHJvbXB0cyMtcHJvbXB0LW9iamVjdHNcbiAgICAgIERJR0lUQUxfT0NFQU5fUEVSU09OQUxfQUNDRVNTX1RPS0VOID09PSBcIlwiIHx8IHByZXYgPyBcInBhc3N3b3JkXCIgOiBmYWxzZSxcbiAgICBuYW1lOiBcIm5ld1Rva2VuXCIsXG4gICAgbWVzc2FnZTogYFNldCB5b3VyIERpZ2l0YWwgT2NlYW4gUGVyc29uYWwgQWNjZXNzIFRva2VuLiBJdCB3aWxsIGJlIHN0b3JlZCBpbiB5b3VyIGtleWNoYWluLCBhbmQgbm93aGVyZSBlbHNlLiBZb3UgY2FuIGdlbmVyYXRlIGEgcGVyc29uYWwgYWNjZXNzIHRva2VuIGF0ICR7Y2hhbGsudW5kZXJsaW5lLmJsdWVCcmlnaHQoXG4gICAgICB0ZXJtaW5hbExpbmsoXG4gICAgICAgIFwiRGlnaXRhbE9jZWFuID4gQWNjb3VudCA+IEFQSVwiLFxuICAgICAgICBcImh0dHBzOi8vY2xvdWQuZGlnaXRhbG9jZWFuLmNvbS9hY2NvdW50L2FwaS90b2tlbnMvbmV3XCJcbiAgICAgIClcbiAgICApfWAsXG4gICAgaW5pdGlhbDogXCJcIixcbiAgfSxcbiAge1xuICAgIHR5cGU6IFwidGV4dFwiLFxuICAgIG5hbWU6IFwiZHJvcGxldE5hbWVcIixcbiAgICBtZXNzYWdlOiBcIldoYXQgZG8geW91IHdhbnQgdG8gbmFtZSB5b3VyIGRyb3BsZXQ/XCIsXG4gICAgaW5pdGlhbDogXCJyYW5jaGVyXCIsXG4gIH0sXG5dO1xuXG5jb25zdCByYW5jaGVyQ29uZmlnID0gbmV3IFJhbmNoZXJPU0NvbmZpZygpO1xuXG5mdW5jdGlvbiBhbnNpYmxlU2V0dXBSYW5jaGVyKFxuICBpcEFkZHJlc3M6IHN0cmluZyxcbiAgcGF0aFRvSW52ZW50b3J5OiBzdHJpbmcsXG4gIHBhdGhUb1BsYXlib29rOiBzdHJpbmcsXG4gIHBhdGhUb0RvY2tlckNvbXBvc2U6IHN0cmluZyxcbiAgcGF0aFRvRW52OiBzdHJpbmdcbikge1xuICByZXR1cm4gZXhlY1N5bmMoXG4gICAgYGFuc2libGUtcGxheWJvb2sgJyR7cGF0aFRvUGxheWJvb2t9JyAtLWV4dHJhLXZhcnM9J3JhbmNoZXJfaXA9JHtpcEFkZHJlc3N9IGRvY2tlcl9jb21wb3NlPSR7cGF0aFRvRG9ja2VyQ29tcG9zZX0gZW52PSR7cGF0aFRvRW52fScgLS1pbnZlbnRvcnk9JyR7cGF0aFRvSW52ZW50b3J5fSdgLFxuICAgIHsgc3RkaW86IFwiaW5oZXJpdFwiIH1cbiAgKTtcbn1cbmNvbnN0IGludmVudG9yeSA9IHJlbGF0aXZlKFxuICBwcm9jZXNzLmN3ZCgpLFxuICByZXNvbHZlKF9fZGlybmFtZSwgcmVxdWlyZShcIi4uL2ludmVudG9yeS55bWxcIikpXG4pO1xuY29uc3QgZW52ID0gcmVsYXRpdmUoXG4gIHByb2Nlc3MuY3dkKCksXG4gIHJlc29sdmUoX19kaXJuYW1lLCByZXF1aXJlKFwiLi4vdXRpbHMvb3duY2xvdWQtZG9ja2VyLy5lbnZcIikpXG4pO1xuY29uc3QgZG9ja2VyQ29tcG9zZSA9IHJlbGF0aXZlKFxuICBwcm9jZXNzLmN3ZCgpLFxuICByZXNvbHZlKF9fZGlybmFtZSwgcmVxdWlyZShcIi4uL3V0aWxzL293bmNsb3VkLWRvY2tlci9kb2NrZXItY29tcG9zZS55bWxcIikpXG4pO1xuY29uc3QgcGxheWJvb2sgPSByZWxhdGl2ZShcbiAgcHJvY2Vzcy5jd2QoKSxcbiAgcmVzb2x2ZShfX2Rpcm5hbWUsIHJlcXVpcmUoXCIuLi9pbnN0YWxsLW93bmNsb3VkLW9uLXJhbmNoZXIueW1sXCIpKVxuKTtcblxuKGFzeW5jICgpID0+IHtcbiAgRElHSVRBTF9PQ0VBTl9QRVJTT05BTF9BQ0NFU1NfVE9LRU4gPSBhd2FpdCBnZXREaWdpdGFsT2NlYW5QZXJzb25hbEFjY2Vzc1Rva2VuKCk7XG4gIGNvbnN0IGFuc3dlcnMgPSBhd2FpdCBwcm9tcHRzKHF1ZXN0aW9ucyk7XG4gIGlmIChhbnN3ZXJzLm5ld1Rva2VuICE9PSBcIlwiKSB7XG4gICAgYXdhaXQgc2V0RGlnaXRhbE9jZWFuUGVyc29uYWxBY2Nlc3NUb2tlbihhbnN3ZXJzLm5ld1Rva2VuKTtcbiAgfVxuICBhd2FpdCBpbml0aWFsaXplRGlnaXRhbE9jZWFuQVBJKCk7XG4gIGNvbnN0IGRyb3BsZXQgPSBhd2FpdCByYW5jaGVyQ29uZmlnXG4gICAgLnNldE5hbWUoYW5zd2Vycy5kcm9wbGV0TmFtZSlcbiAgICAucHJvdmlzaW9uT24oY2xvdWRQcm92aWRlcnMuZGlnaXRhbE9jZWFuKTtcbiAgY29uc3QgaXBBZGRyZXNzID0gZHJvcGxldC5pcHY0QWRkcmVzc2VzLnNsaWNlKC0xKVswXTtcbiAgYW5zaWJsZVNldHVwUmFuY2hlcihpcEFkZHJlc3MsIGludmVudG9yeSwgcGxheWJvb2ssIGRvY2tlckNvbXBvc2UsIGVudik7XG59KSgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==