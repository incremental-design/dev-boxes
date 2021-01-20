/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 5:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "40d5f61a30e8f417ddae.yml";

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
var cloudConfigPath = __webpack_require__(5);
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
console.log(cloudConfig);
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
    console.log(rancherInstance);
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

;// CONCATENATED MODULE: external "util"
const external_util_namespaceObject = require("util");;
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
                        console.log((0,external_util_namespaceObject.inspect)(response, false, null, true));
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
(function () { return src_awaiter(void 0, void 0, void 0, function () {
    var answers, droplet;
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
                console.log(droplet.ipv4Addresses);
                console.log(droplet.ipv6Addresses);
                return [2 /*return*/];
        }
    });
}); })();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbnNpYmxlLXNldHVwLW93bmNsb3VkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Fuc2libGUtc2V0dXAtb3duY2xvdWQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYW5zaWJsZS1zZXR1cC1vd25jbG91ZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYW5zaWJsZS1zZXR1cC1vd25jbG91ZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Fuc2libGUtc2V0dXAtb3duY2xvdWQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYW5zaWJsZS1zZXR1cC1vd25jbG91ZC9leHRlcm5hbCBcImNhY1wiIiwid2VicGFjazovL2Fuc2libGUtc2V0dXAtb3duY2xvdWQvZXh0ZXJuYWwgXCJwcm9tcHRzXCIiLCJ3ZWJwYWNrOi8vYW5zaWJsZS1zZXR1cC1vd25jbG91ZC9leHRlcm5hbCBcImRvLXdyYXBwZXJcIiIsIndlYnBhY2s6Ly9hbnNpYmxlLXNldHVwLW93bmNsb3VkL2V4dGVybmFsIFwia2V5dGFyXCIiLCJ3ZWJwYWNrOi8vYW5zaWJsZS1zZXR1cC1vd25jbG91ZC8uL3NyYy9wcm92aXNpb25SYW5jaGVyT1Mvb25EaWdpdGFsT2NlYW4vYWNjZXNzRGlnaXRhbE9jZWFuUGVyc29uYWxBY2Nlc3NUb2tlbi50cyIsIndlYnBhY2s6Ly9hbnNpYmxlLXNldHVwLW93bmNsb3VkL2V4dGVybmFsIFwiZnNcIiIsIndlYnBhY2s6Ly9hbnNpYmxlLXNldHVwLW93bmNsb3VkLy4vc3JjL3Byb3Zpc2lvblJhbmNoZXJPUy9vbkRpZ2l0YWxPY2Vhbi9wcm92aXNpb25PbkRpZ2l0YWxPY2Vhbi50cyIsIndlYnBhY2s6Ly9hbnNpYmxlLXNldHVwLW93bmNsb3VkLy4vc3JjL3Byb3Zpc2lvblJhbmNoZXJPUy9vbkFXUy9wcm92aXNpb25PbkFXUy50cyIsIndlYnBhY2s6Ly9hbnNpYmxlLXNldHVwLW93bmNsb3VkL2V4dGVybmFsIFwidXRpbFwiIiwid2VicGFjazovL2Fuc2libGUtc2V0dXAtb3duY2xvdWQvLi9zcmMvcHJvdmlzaW9uUmFuY2hlck9TL1JhbmNoZXJPUy50cyIsIndlYnBhY2s6Ly9hbnNpYmxlLXNldHVwLW93bmNsb3VkL2V4dGVybmFsIFwiY2hhbGtcIiIsIndlYnBhY2s6Ly9hbnNpYmxlLXNldHVwLW93bmNsb3VkL2V4dGVybmFsIFwidGVybWluYWwtbGlua1wiIiwid2VicGFjazovL2Fuc2libGUtc2V0dXAtb3duY2xvdWQvLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztVQUFBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZ0NBQWdDLFlBQVk7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSxzRjs7Ozs7V0NBQSwyQjs7Ozs7OztBQ0FBLE1BQU0sNEJBQTRCLG1COzs7QUNBbEMsTUFBTSxnQ0FBNEIsdUI7OztBQ0FsQyxNQUFNLG1DQUE0QiwwQjs7O0FDQWxDLE1BQU0sK0JBQTRCLHNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBTjtBQUVyQixTQUFlLGtDQUFrQyxDQUN0RCxLQUFhOzs7O3dCQUViLHFCQUFNLHFDQUFrQixDQUN0QixjQUFjLEVBQ2QscUNBQXFDLEVBQ3JDLEtBQUssQ0FDTjs7b0JBSkQsU0FJQyxDQUFDOzs7OztDQUNIO0FBRU0sU0FBZSxrQ0FBa0M7Ozs7O3dCQUN4QyxxQkFB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QUFDLFNBQVMsQ0FBQzs7Z0JBQWxDLE9BQU8sR0FBRyxTQUF3QjtxQkFDcEMsUUFBTyxDQUFDLFFBQVEsS0FBSyxFQUFFLEdBQXZCLHdCQUF1QjtnQkFDekIscUJBQU0sa0NBQWtDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQzs7Z0JBQTFELFNBQTBELENBQUM7O29CQUU3RCxxQkFBTSx5QkFBeUIsRUFBRTs7Z0JBQWpDLFNBQWlDLENBQUM7Z0JBQ2xCLHFCQUFNLGFBQWE7eUJBQ2hDLE9BQU8sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO3lCQUM1QixXQUFXLENBQUMsMkJBQTJCLENBQUM7O2dCQUZyQyxPQUFPLEdBQUcsU0FFMkI7Z0JBQzNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQzs7OztLQUNwQyxDQUFDLEVBQUUsQ0FBQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gbW9kdWxlWydkZWZhdWx0J10gOlxuXHRcdCgpID0+IG1vZHVsZTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCJjb25zdCBfX1dFQlBBQ0tfTkFNRVNQQUNFX09CSkVDVF9fID0gcmVxdWlyZShcImNhY1wiKTs7IiwiY29uc3QgX19XRUJQQUNLX05BTUVTUEFDRV9PQkpFQ1RfXyA9IHJlcXVpcmUoXCJwcm9tcHRzXCIpOzsiLCJjb25zdCBfX1dFQlBBQ0tfTkFNRVNQQUNFX09CSkVDVF9fID0gcmVxdWlyZShcImRvLXdyYXBwZXJcIik7OyIsImNvbnN0IF9fV0VCUEFDS19OQU1FU1BBQ0VfT0JKRUNUX18gPSByZXF1aXJlKFwia2V5dGFyXCIpOzsiLCJpbXBvcnQga2V5dGFyIGZyb20gXCJrZXl0YXJcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNldERpZ2l0YWxPY2VhblBlcnNvbmFsQWNjZXNzVG9rZW4oXG4gIHRva2VuOiBzdHJpbmdcbik6IFByb21pc2U8dm9pZD4ge1xuICBhd2FpdCBrZXl0YXIuc2V0UGFzc3dvcmQoXG4gICAgXCJESUdJVEFMT0NFQU5cIixcbiAgICBcIkRJR0lUQUxfT0NFQU5fUEVSU09OQUxfQUNDRVNTX1RPS0VOXCIsXG4gICAgdG9rZW5cbiAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERpZ2l0YWxPY2VhblBlcnNvbmFsQWNjZXNzVG9rZW4oKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgY29uc3QgdG9rZW4gPSBhd2FpdCBrZXl0YXIuZ2V0UGFzc3dvcmQoXG4gICAgXCJESUdJVEFMT0NFQU5cIixcbiAgICBcIkRJR0lUQUxfT0NFQU5fUEVSU09OQUxfQUNDRVNTX1RPS0VOXCJcbiAgKTtcbiAgcmV0dXJuIHRva2VuID09PSBudWxsID8gXCJcIiA6IHRva2VuO1xufVxuIiwiY29uc3QgX19XRUJQQUNLX05BTUVTUEFDRV9PQkpFQ1RfXyA9IHJlcXVpcmUoXCJmc1wiKTs7IiwiaW1wb3J0IERpZ2l0YWxPY2VhbiBmcm9tIFwiZG8td3JhcHBlclwiO1xuLy8gaW1wb3J0IGdldEF1dGhUb2tlbiBmcm9tIFwiLi9nZXREaWdpdGFsT2NlYW5QZXJzb25hbEFjY2Vzc1Rva2VuXCI7XG5pbXBvcnQgeyBnZXREaWdpdGFsT2NlYW5QZXJzb25hbEFjY2Vzc1Rva2VuIH0gZnJvbSBcIi4vYWNjZXNzRGlnaXRhbE9jZWFuUGVyc29uYWxBY2Nlc3NUb2tlblwiO1xuaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xuXG5sZXQgYXV0aFRva2VuOiBzdHJpbmc7XG5sZXQgZGlnaXRhbE9jZWFuV3JhcHBlcjogRGlnaXRhbE9jZWFuO1xuLypcbmF1dGhUb2tlbiBhbmQgZGlnaXRhbE9jZWFuV3JhcHBlciBhcmUgc2luZ2xldG9ucyB0aGF0IGFyZSBnb2luZyB0byBwZXJzaXN0IGZvciB0aGUgbGlmZSBvZiB0aGUgcHJvZ3JhbS4gVGhhdCdzIHdoeSB0aGV5IGFyZSBpbiB0aGUgbW9kdWxlIHNjb3BlXG4qL1xuXG5jb25zdCBjbG91ZENvbmZpZ1BhdGggPSByZXF1aXJlKFwiLi9jbG91ZC1jb25maWcueW1sXCIpO1xuLypcbldlIGFyZSBhc2tpbmcgd2VicGFjayB0byBrZWVwIHRyYWNrIG9mIHRoZSBmaWxlIHBhdGggZm9yIGAuL2Nsb3VkLWNvbmZpZy55bWxgXG4qL1xuY29uc3QgY2xvdWRDb25maWcgPSBmcy5yZWFkRmlsZVN5bmMoY2xvdWRDb25maWdQYXRoLCBcInV0ZjhcIik7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbml0aWFsaXplRGlnaXRhbE9jZWFuQVBJKCk6IFByb21pc2U8dm9pZD4ge1xuICBhdXRoVG9rZW4gPSBhd2FpdCBnZXREaWdpdGFsT2NlYW5QZXJzb25hbEFjY2Vzc1Rva2VuKCk7XG4gIGRpZ2l0YWxPY2VhbldyYXBwZXIgPSBuZXcgRGlnaXRhbE9jZWFuKGF1dGhUb2tlbik7XG59XG5cbmNvbnNvbGUubG9nKGNsb3VkQ29uZmlnKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHByb3Zpc2lvbk9uRGlnaXRhbE9jZWFuKFxuICBjb25maWdPYmplY3Q6IG9iamVjdFxuKTogUHJvbWlzZTxkaWdpdGFsT2NlYW5DcmVhdGVEcm9wbGV0UmVzcG9uc2U+IHtcbiAgbGV0IHJhbmNoZXJJbnN0YW5jZTogb2JqZWN0ID0ge1xuICAgIG5hbWU6IFwiYW5vdGhlclwiLFxuICAgIHJlZ2lvbjogXCJueWMzXCIsXG4gICAgc2l6ZTogXCJzLTF2Y3B1LTFnYlwiLFxuICAgIGltYWdlOiBcInJhbmNoZXJvc1wiLFxuICAgIHNzaF9rZXlzOiBbMjc2MDg5ODYsIDI4NDk2NDU3XSxcbiAgICBiYWNrdXBzOiBmYWxzZSxcbiAgICBpcHY2OiB0cnVlLFxuICAgIHByaXZhdGVfbmV0d29ya2luZzogbnVsbCxcbiAgICB1c2VyX2RhdGE6IGNsb3VkQ29uZmlnLFxuICAgIHZvbHVtZXM6IG51bGwsXG4gICAgdGFnczogW10sXG4gIH07XG5cbiAgcmFuY2hlckluc3RhbmNlID0gT2JqZWN0LmFzc2lnbihyYW5jaGVySW5zdGFuY2UsIGNvbmZpZ09iamVjdCk7XG4gIGNvbnNvbGUubG9nKHJhbmNoZXJJbnN0YW5jZSk7XG4gIHJldHVybiAoXG4gICAgZGlnaXRhbE9jZWFuV3JhcHBlci5kcm9wbGV0c1xuICAgICAgLy8gQHRzLWlnbm9yZTogdHlwZXMgZm9yIHJhbmNoZXJJbnN0YW5jZSBhcmUgbm90IGNvbXBhdGlibGVcbiAgICAgIC5jcmVhdGUocmFuY2hlckluc3RhbmNlKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgIH0pXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREcm9wbGV0SW5mb3JtYXRpb24oZHJvcGxldElEOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZGlnaXRhbE9jZWFuV3JhcHBlci5kcm9wbGV0cy5nZXRCeUlkKGRyb3BsZXRJRCk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgZGlnaXRhbE9jZWFuQ3JlYXRlRHJvcGxldFJlc3BvbnNlIHtcbiAgZHJvcGxldDoge1xuICAgIGlkOiBzdHJpbmc7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIG1lbW9yeUluTWVnYWJ5dGVzOiBiaWdpbnQ7XG4gICAgdmNwdXM6IGJpZ2ludDtcbiAgICBkaXNrOiBiaWdpbnQ7XG4gICAgbG9ja2VkOiBib29sZWFuO1xuICAgIGNyZWF0ZWRfYXQ6IHN0cmluZztcbiAgICBzdGF0dXM6IHN0cmluZztcbiAgICBiYWNrdXBfaWRzOiBBcnJheTxhbnk+O1xuICAgIHNuYXBzaG90X2lkczogQXJyYXk8YW55PjtcbiAgICBmZWF0dXJlczogQXJyYXk8YW55PjtcbiAgICByZWdpb246IG9iamVjdDtcbiAgICBpbWFnZTogb2JqZWN0O1xuICAgIHNpemU6IG9iamVjdDtcbiAgICBzaXplX3NsdWc6IHN0cmluZztcbiAgICBuZXR3b3Jrczoge1xuICAgICAgdjQ6IFtcbiAgICAgICAge1xuICAgICAgICAgIGlwX2FkZHJlc3M6IHN0cmluZztcbiAgICAgICAgICBuZXRtYXNrOiBzdHJpbmc7XG4gICAgICAgICAgZ2F0ZXdheTogc3RyaW5nIHwgbnVsbDtcbiAgICAgICAgICB0eXBlOiBcInByaXZhdGVcIiB8IFwicHVibGljXCI7XG4gICAgICAgIH1cbiAgICAgIF07XG4gICAgICB2NjogW1xuICAgICAgICB7XG4gICAgICAgICAgaXBfYWRkcmVzczogc3RyaW5nO1xuICAgICAgICAgIG5ldG1hc2s6IHN0cmluZztcbiAgICAgICAgICBnYXRld2F5OiBzdHJpbmcgfCBudWxsO1xuICAgICAgICAgIHR5cGU6IFwicHJpdmF0ZVwiIHwgXCJwdWJsaWNcIjtcbiAgICAgICAgfVxuICAgICAgXTtcbiAgICB9O1xuICAgIGtlcm5lbDogb2JqZWN0IHwgbnVsbDtcbiAgICBuZXh0X2JhY2t1cF93aW5kb3c6IG9iamVjdCB8IG51bGw7XG4gICAgdGFnczogQXJyYXk8YW55PjtcbiAgICB2b2x1bWVfaWRzOiBBcnJheTxhbnk+O1xuICAgIHZwY191dWlkOiBTdHJpbmc7XG4gIH07XG59XG4iLCIvLyBUT0RPOiBhY3R1YWxseSB3cml0ZSB0aGlzIGZ1bmN0aW9uLiBSaWdodCBub3cgaXQncyBqdXN0IGEgc3R1YlxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByb3Zpc2lvbk9uQVdTKCkge1xuICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgXCJTb3JyeSwgSSBoYXZlbid0IHdyaXR0ZW4gYW55IGNvZGUgdG8gcHJvdmlzaW9uIHJhbmNoZXIgb24gQVdTLlwiXG4gICk7XG59XG4iLCJjb25zdCBfX1dFQlBBQ0tfTkFNRVNQQUNFX09CSkVDVF9fID0gcmVxdWlyZShcInV0aWxcIik7OyIsImltcG9ydCB7XG4gIHByb3Zpc2lvbk9uRGlnaXRhbE9jZWFuLFxuICBkaWdpdGFsT2NlYW5DcmVhdGVEcm9wbGV0UmVzcG9uc2UsXG4gIGdldERyb3BsZXRJbmZvcm1hdGlvbixcbn0gZnJvbSBcIi4vb25EaWdpdGFsT2NlYW4vcHJvdmlzaW9uT25EaWdpdGFsT2NlYW5cIjtcbmltcG9ydCB7IHByb3Zpc2lvbk9uQVdTIH0gZnJvbSBcIi4vb25BV1MvcHJvdmlzaW9uT25BV1NcIjtcbmltcG9ydCB7IGluc3BlY3QgfSBmcm9tIFwidXRpbFwiO1xuXG5leHBvcnQgY2xhc3MgUmFuY2hlck9TQ29uZmlnIHtcbiAgLy8gIVByaXZhdGUgTWVtYmVyc1xuICBwcml2YXRlIF9uYW1lOiBzdHJpbmcgPSBcIlwiO1xuICBwcml2YXRlIF9pcHY0QWRkcmVzc2VzOiBTZXQ8c3RyaW5nPiA9IG5ldyBTZXQoKTtcbiAgcHJpdmF0ZSBfaXB2NkFkZHJlc3NlczogU2V0PHN0cmluZz4gPSBuZXcgU2V0KCk7XG4gIHByaXZhdGUgX2Ryb3BsZXRJRDogc3RyaW5nID0gXCJcIjtcblxuICAvLyAhQ29uc3RydWN0b3JcbiAgY29uc3RydWN0b3IoKSB7fSAvL0knbSBsZWF2aW5nIHRoZSBjb25zdHJ1Y3RvciBibGFuayBiZWNhdXNlIHdlJ2xsIGluaXRpYWxpemUgYWxsIHZhcmlhYmxlcyB3aXRoIGNoYWluYWJsZSBzZXR0ZXJzXG5cbiAgLy8gIUdldHRlcnMgYW5kIFNldHRlcnNcbiAgZ2V0IG5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuICBzZXQgbmFtZShuZXdOYW1lOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uYW1lID0gbmV3TmFtZTtcbiAgICAvLyBUT0RPOiBzYW5pdGl6ZSBjaGFyYWN0ZXJzIHRoYXQgZG9uJ3QgYmVsb25nIGluIGRpZ2l0YWwgb2NlYW4gZHJvcGxldCBuYW1lc1xuICAgIC8vIFRPRE86IGlmIGRyb3BsZXQgaGFzIGFscmVhZHkgYmVlbiBwcm92aXNpb25lZCB3aXRoIGEgbmFtZSwgc2VlIGlmIHRoZSBkcm9wbGV0J3MgbmFtZSBjYW4gYWN0dWFsbHkgYmUgdXBkYXRlZC4gSWYgaXQgY2FuLCB0aGVuIHVwZGF0ZSBpdC4gSWYgbm90LCB0aHJvdyBhbiBlcnJvci5cbiAgfVxuXG4gIGdldCBpcHY0QWRkcmVzc2VzKCk6IEFycmF5PHN0cmluZz4ge1xuICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMuX2lwdjRBZGRyZXNzZXMpO1xuICB9XG5cbiAgc2V0IGlwdjRBZGRyZXNzZXMoaXB2NEFkZHJlc3NlczogQXJyYXk8c3RyaW5nPikge1xuICAgIHRoaXMuX2lwdjRBZGRyZXNzZXMgPSBuZXcgU2V0KGlwdjRBZGRyZXNzZXMpO1xuICAgIC8vVE9ETzogaXRlcmF0ZSB0aHJvdWdoIHRoZSBzZXQgYW5kIHJlbW92ZSBhbnkgaXAgYWRkcmVzc2VzIHRoYXQgYXJlIG5vdCB2YWxpZC5cbiAgfVxuXG4gIGdldCBpcHY2QWRkcmVzc2VzKCk6IEFycmF5PHN0cmluZz4ge1xuICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMuX2lwdjZBZGRyZXNzZXMpO1xuICB9XG5cbiAgc2V0IGlwdjZBZGRyZXNzZXMoaXB2NkFkZHJlc3NlczogQXJyYXk8c3RyaW5nPikge1xuICAgIHRoaXMuX2lwdjZBZGRyZXNzZXMgPSBuZXcgU2V0KGlwdjZBZGRyZXNzZXMpO1xuICAgIC8vVE9ETzogaXRlcmF0ZSB0aHJvdWdoIHRoZSBzZXQgYW5kIHJlbW92ZSBhbnkgaXAgYWRkcmVzc2VzIHRoYXQgYXJlIG5vdCB2YWxpZC5cbiAgfVxuXG4gIGdldCBkcm9wbGV0SUQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fZHJvcGxldElEO1xuICB9XG4gIC8qXG4gICAgbm90ZSB0aGF0IHRoZXJlIGlzIG5vIHNldHRlciBmb3IgZHJvcGxldElELCBhbmQgdGhlIF9kcm9wbGV0SUQgcHJvcGVydHkgaXMgcHJpdmF0ZS4gVGhpcyBpcyBiZWNhdXNlIHdlIGRvIE5PVCB3YW50IHRoZSBkcm9wbGV0SUQgdG8gYmUgc2V0IGJ5IGFueSBjb2RlIG91dHNpZGUgb2YgdGhpcyBjbGFzcy5cbiAgKi9cblxuICAvLyAhQWNjZXNzb3IgTWV0aG9kc1xuICBzZXROYW1lKG5ld05hbWU6IHN0cmluZyk6IHRoaXMge1xuICAgIHRoaXMubmFtZSA9IG5ld05hbWU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBhZGRJcHY0QWRkcmVzcyhpcHY0QWRkcmVzczogc3RyaW5nKTogdGhpcyB7XG4gICAgbGV0IGFkZHJlc3NBcnJheSA9IHRoaXMuaXB2NEFkZHJlc3NlcztcbiAgICBhZGRyZXNzQXJyYXkucHVzaChpcHY0QWRkcmVzcyk7XG4gICAgdGhpcy5pcHY0QWRkcmVzc2VzID0gYWRkcmVzc0FycmF5O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmVtb3ZlSXB2NEFkZHJlc3MoaXB2NEFkZHJlc3M6IHN0cmluZyk6IHRoaXMge1xuICAgIHRoaXMuaXB2NEFkZHJlc3NlcyA9IHRoaXMuaXB2NEFkZHJlc3Nlcy5maWx0ZXIoXG4gICAgICAoYWRkcmVzcykgPT4gYWRkcmVzcyAhPT0gaXB2NEFkZHJlc3NcbiAgICApO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgYWRkSXB2NkFkZHJlc3MoaXB2NkFkZHJlc3M6IHN0cmluZyk6IHRoaXMge1xuICAgIGxldCBhZGRyZXNzQXJyYXkgPSB0aGlzLmlwdjZBZGRyZXNzZXM7XG4gICAgYWRkcmVzc0FycmF5LnB1c2goaXB2NkFkZHJlc3MpO1xuICAgIHRoaXMuaXB2NkFkZHJlc3NlcyA9IGFkZHJlc3NBcnJheTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJlbW92ZUlwdjZBZGRyZXNzKGlwdjZBZGRyZXNzOiBzdHJpbmcpOiB0aGlzIHtcbiAgICB0aGlzLmlwdjZBZGRyZXNzZXMgPSB0aGlzLmlwdjZBZGRyZXNzZXMuZmlsdGVyKFxuICAgICAgKGFkZHJlc3MpID0+IGFkZHJlc3MgIT09IGlwdjZBZGRyZXNzXG4gICAgKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vICFTdWJyb3V0aW5lcyAodGhlc2Ugc2hvdWxkIGJlIHByaXZhdGUpXG4gIHByaXZhdGUgcGFyc2VEaWdpdGFsT2NlYW5Ecm9wbGV0UmVzcG9uc2UoXG4gICAgcmVzcG9uc2U6IGRpZ2l0YWxPY2VhbkNyZWF0ZURyb3BsZXRSZXNwb25zZVxuICApOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgcmVzcG9uc2UuZHJvcGxldC5uZXR3b3Jrcy52NC5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGlmIChpdGVtLnR5cGUgPT09IFwicHVibGljXCIpIHtcbiAgICAgICAgICB0aGlzLmFkZElwdjRBZGRyZXNzKGl0ZW0uaXBfYWRkcmVzcyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICB9XG4gICAgdGhpcy5fZHJvcGxldElEID0gcmVzcG9uc2UuZHJvcGxldC5pZDtcbiAgfVxuXG4gIHByaXZhdGUgcG9sbEZvcklQQWRkcmVzc2VzKFxuICAgIG1heGltdW1OdW1iZXJPZlNlY29uZHNUb1BvbGw6IG51bWJlciA9IC0xXG4gICk6IFByb21pc2U8dGhpcz4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAvKlxuICAgICAgICBUaGlzIGZ1bmN0aW9uIHJlYWxseSBzaG91bGQgbm90IGJlIG5lY2Vzc2FyeS4gUG9sbGluZyBpcyBnZW5lcmFsbHkgYSBiYWQgaWRlYS4gSG93ZXZlciwgcHJvdmlzaW9uT25EaWdpdGFsT2NlYW4uZHJvcGxldHMuY3JlYXRlKCkgZG9lc24ndCBhY3R1YWxseSByZXR1cm4gdGhlIGRyb3BsZXQncyBJUCBhZGRyZXNzLiBUaGlzIGlzIGJlY2F1c2UgaXQgdGFrZXMgfjUtMTAgc2Vjb25kcyBmb3IgdGhlIGRyb3BsZXQgdG8gYWN0dWFsbHkgYWNxdWlyZSBhbiBJUCBhZGRyZXNzLiBTbywgaW4gdGhpcyBwYXJ0aWN1bGFyIGNhc2UsIHdlIG5lZWQgdG8gcG9sbCB1bnRpbCB3ZSBnZXQgYW4gSVAgYWRkcmVzcy5cblxuICAgICAgICBJbiB0aGUgZmlyc3QgcG9sbCwgd2UgY2hlY2sgcmVzcG9uc2UuZmVhdHVyZXMgdG8gc2VlIGlmIGl0IGNvbnRhaW5zIFwiaXB2NlwiLiBJZiBzbywgd2UgY29udGludWUgdG8gcG9sbCB1bnRpbCB3ZSBoYXZlIHJlY2VpdmVkIGF0IGxlYXN0IDEgaXB2NCBhbmQgMSBpcHY2IGFkZHJlc3MsIG9yIHVudGlsIHRoZSBudW1iZXIgb2Ygc2Vjb25kcyB0byBwb2xsIGlzIHVwLlxuXG4gICAgICAgIElmIHRoZSBudW1iZXIgb2Ygc2Vjb25kcyB0byBwb2xsIGlzIGxlc3MgdGhhbiB6ZXJvLCB0aGVuIHdlIHdpbGwgcG9sbCBpbmRlZmluaXRlbHkgdW50aWwgd2UgZ2V0IGF0IGxlYXN0IDEgaXB2NCBhZGRyZXNzLCBhbmQgaWYgaXB2NiBpcyBlbmFibGVkLCAxIGlwdjYgYWRkcmVzc1xuICAgICAgKi9cbiAgICAgIGxldCBpcHY0QWRkcmVzc2VzOiBBcnJheTxzdHJpbmc+ID0gW107XG4gICAgICBsZXQgaXB2NkFkZHJlc3NlczogQXJyYXk8c3RyaW5nPiA9IFtdO1xuICAgICAgbGV0IGhhc0lwdjY6IGJvb2xlYW4gPSB0cnVlO1xuICAgICAgbGV0IG51bWJlck9mVGltZXNUb1BvbGxQZXJTZWNvbmQ6IG51bWJlciA9IDE7XG4gICAgICBsZXQgbnVtYmVyT2ZUaW1lc1RvUG9sbDogbnVtYmVyID1cbiAgICAgICAgbWF4aW11bU51bWJlck9mU2Vjb25kc1RvUG9sbCA8PSAwXG4gICAgICAgICAgPyAtMVxuICAgICAgICAgIDogTWF0aC5jZWlsKFxuICAgICAgICAgICAgICBudW1iZXJPZlRpbWVzVG9Qb2xsUGVyU2Vjb25kICogbWF4aW11bU51bWJlck9mU2Vjb25kc1RvUG9sbFxuICAgICAgICAgICAgKTtcbiAgICAgIGxldCBwb2xsSW50ZXJ2YWw6IE5vZGVKUy5UaW1lb3V0O1xuICAgICAgLypcbiAgICAgICAgSUYgbnVtYmVyIG9mIHRpbWVzIHRvIHBvbGwgaXMgbGVzcyB0aGFuIHplcm8sIHBvbGwgaW5kZWZpbml0ZWx5LlxuICAgICAgKi9cbiAgICAgIGxldCBwb2xsID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAvL3RvZG86IGFkZCBzb21lIGtpbmQgb2YgQ0xJIHNwaW5uZXIgc28gdGhhdCBpdCdzIGNsZWFyIHRoYXQgYSBwb2xsaW5nIGxvb3AgaXMgcnVubmluZ1xuICAgICAgICBjb25zdCByZXNwb25zZTogZGlnaXRhbE9jZWFuQ3JlYXRlRHJvcGxldFJlc3BvbnNlID0gYXdhaXQgZ2V0RHJvcGxldEluZm9ybWF0aW9uKFxuICAgICAgICAgIHRoaXMuZHJvcGxldElEXG4gICAgICAgICk7XG4gICAgICAgIGhhc0lwdjYgPVxuICAgICAgICAgIHJlc3BvbnNlLmRyb3BsZXQuZmVhdHVyZXMuaW5jbHVkZXMoXCJpcHY2XCIpICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gdHJ1ZVxuICAgICAgICAgICAgOiBmYWxzZTtcbiAgICAgICAgcmVzcG9uc2UuZHJvcGxldC5uZXR3b3Jrcy52NC5mb3JFYWNoKChuZXR3b3JrKSA9PiB7XG4gICAgICAgICAgaWYgKG5ldHdvcmsudHlwZSA9PT0gXCJwdWJsaWNcIikge1xuICAgICAgICAgICAgaXB2NEFkZHJlc3Nlcy5wdXNoKG5ldHdvcmsuaXBfYWRkcmVzcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGhhc0lwdjYpIHtcbiAgICAgICAgICByZXNwb25zZS5kcm9wbGV0Lm5ldHdvcmtzLnY2LmZvckVhY2goKG5ldHdvcmspID0+IHtcbiAgICAgICAgICAgIGlmIChuZXR3b3JrLnR5cGUgPT09IFwicHVibGljXCIpIHtcbiAgICAgICAgICAgICAgaXB2NkFkZHJlc3Nlcy5wdXNoKG5ldHdvcmsuaXBfYWRkcmVzcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXB2NEFkZHJlc3Nlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWYgKGhhc0lwdjYpIHtcbiAgICAgICAgICAgIGlmIChpcHY2QWRkcmVzc2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgbnVtYmVyT2ZUaW1lc1RvUG9sbCA9IDA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBudW1iZXJPZlRpbWVzVG9Qb2xsLS07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG51bWJlck9mVGltZXNUb1BvbGwgPSAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBudW1iZXJPZlRpbWVzVG9Qb2xsLS07XG4gICAgICAgIH1cbiAgICAgICAgY2hlY2tJZlNob3VsZFN0b3BQb2xsaW5nKCk7XG4gICAgICB9O1xuXG4gICAgICBmdW5jdGlvbiBjaGVja0lmU2hvdWxkU3RvcFBvbGxpbmcoKSB7XG4gICAgICAgIGlmIChudW1iZXJPZlRpbWVzVG9Qb2xsID09IDApIHtcbiAgICAgICAgICBjbGVhckludGVydmFsKHBvbGxJbnRlcnZhbCk7XG4gICAgICAgICAgY2hlY2tJZklQQWRkcmVzc2VzT2J0YWluZWQocmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgY2hlY2tJZklQQWRkcmVzc2VzT2J0YWluZWQgPSAocmVzb2x2ZTogYW55LCByZWplY3Q6IGFueSkgPT4ge1xuICAgICAgICBpZiAoaXB2NEFkZHJlc3Nlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaXB2NEFkZHJlc3Nlcy5mb3JFYWNoKChhZGRyZXNzKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFkZElwdjRBZGRyZXNzKGFkZHJlc3MpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmIChoYXNJcHY2KSB7XG4gICAgICAgICAgICBpZiAoaXB2NkFkZHJlc3Nlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgIGlwdjZBZGRyZXNzZXMuZm9yRWFjaCgoYWRkcmVzcykgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkSXB2NkFkZHJlc3MoYWRkcmVzcyk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICByZXNvbHZlKHRoaXMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmVqZWN0KHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXNvbHZlKHRoaXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZWplY3QodGhpcyk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGZ1bmN0aW9uIHBvbGxPbkludGVydmFsKCk6IE5vZGVKUy5UaW1lb3V0IHtcbiAgICAgICAgbGV0IG1pbGxpc2Vjb25kc0JldHdlZW5JbnRlcnZhbHMgPSBudW1iZXJPZlRpbWVzVG9Qb2xsUGVyU2Vjb25kICogMTAwMDtcbiAgICAgICAgcmV0dXJuIHNldEludGVydmFsKHBvbGwsIG1pbGxpc2Vjb25kc0JldHdlZW5JbnRlcnZhbHMpO1xuICAgICAgfVxuXG4gICAgICBwb2xsSW50ZXJ2YWwgPSBwb2xsT25JbnRlcnZhbCgpO1xuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgcHJvdmlzaW9uT24oY2xvdWQ6IGNsb3VkUHJvdmlkZXJzKTogUHJvbWlzZTx0aGlzPiB7XG4gICAgc3dpdGNoICgrY2xvdWQpIHtcbiAgICAgIC8qXG4gICAgICAgIGFyZ3VtZW50ICdjbG91ZCcgaGFzIHRvIGJlIGNhc3QgdG8gYSBudW1iZXIgaW4gb3JkZXIgdG8gYmUgY29tcGFyYWJsZSBpbiBhIHN3aXRjaCBzdGF0ZW1lbnQuXG4gICAgICAgIFRoaXMgd29ya3MgYmVjYXVzZSBlbnVtcyBhcmUgYWN0dWFsbHkgYSB0eXBlIG9mIG51bWJlciAuLi4gdGhlIG5hbWUgb2YgZWFjaCBlbnVtZXJhYmxlIHZhbHVlIGlzIGp1c3Qgc3ludGFjdGljIHN1Z2FyLlxuICAgICAgICBmb3IgbW9yZSBpbmZvIHNlZTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjc3NDc0MzcvdHlwZXNjcmlwdC1lbnVtLXN3aXRjaC1ub3Qtd29ya2luZ1xuICAgICAgKi9cbiAgICAgIGNhc2UgY2xvdWRQcm92aWRlcnMuZGlnaXRhbE9jZWFuOlxuICAgICAgICBsZXQgY29uZmlnID0geyBuYW1lOiB0aGlzLm5hbWUgfTtcbiAgICAgICAgY29uc3QgcmVzcG9uc2U6IGRpZ2l0YWxPY2VhbkNyZWF0ZURyb3BsZXRSZXNwb25zZSA9IGF3YWl0IHByb3Zpc2lvbk9uRGlnaXRhbE9jZWFuKFxuICAgICAgICAgIGNvbmZpZ1xuICAgICAgICApO1xuICAgICAgICBjb25zb2xlLmxvZyhpbnNwZWN0KHJlc3BvbnNlLCBmYWxzZSwgbnVsbCwgdHJ1ZSkpO1xuICAgICAgICB0aGlzLnBhcnNlRGlnaXRhbE9jZWFuRHJvcGxldFJlc3BvbnNlKHJlc3BvbnNlKTtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMucG9sbEZvcklQQWRkcmVzc2VzKCk7IC8vbm90ZSB0aGF0IHdlIG5lZWQgdG8gcG9sbCBmb3IgaXAgYWRkcmVzc2VzIHVudGlsIHdlIHJlY2VpdmUgdGhlbSBiZWNhdXNlIHJlc3BvbnNlIGRvZXMgbm90IGFjdHVhbGx5IGNvbnRhaW4gSVAgYWRkcmVzc2VzLlxuICAgICAgY2FzZSBjbG91ZFByb3ZpZGVycy5hd3M6XG4gICAgICAgIGF3YWl0IHByb3Zpc2lvbk9uQVdTKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICcke2Nsb3VkfSBpc25cXCd0IGEgc3VwcG9ydGVkIGNsb3VkIHByb3ZpZGVyLiBZb3UgbXVzdCBzcGVjaWZ5IGVpdGhlciBcImF3c1wiIG9yIFwiZGlnaXRhbE9jZWFuXCIuJ1xuICAgICAgICApO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZW51bSBjbG91ZFByb3ZpZGVycyB7XG4gIGRpZ2l0YWxPY2VhbixcbiAgYXdzLFxufVxuIiwiY29uc3QgX19XRUJQQUNLX05BTUVTUEFDRV9PQkpFQ1RfXyA9IHJlcXVpcmUoXCJjaGFsa1wiKTs7IiwiY29uc3QgX19XRUJQQUNLX05BTUVTUEFDRV9PQkpFQ1RfXyA9IHJlcXVpcmUoXCJ0ZXJtaW5hbC1saW5rXCIpOzsiLCJpbXBvcnQgY2FjIGZyb20gXCJjYWNcIjtcbmltcG9ydCBwcm9tcHRzIGZyb20gXCJwcm9tcHRzXCI7XG5pbXBvcnQgeyBpbml0aWFsaXplRGlnaXRhbE9jZWFuQVBJIH0gZnJvbSBcIi4vcHJvdmlzaW9uUmFuY2hlck9TL29uRGlnaXRhbE9jZWFuL3Byb3Zpc2lvbk9uRGlnaXRhbE9jZWFuXCI7XG5pbXBvcnQge1xuICBSYW5jaGVyT1NDb25maWcsXG4gIGNsb3VkUHJvdmlkZXJzLFxufSBmcm9tIFwiLi9wcm92aXNpb25SYW5jaGVyT1MvUmFuY2hlck9TXCI7XG5pbXBvcnQge1xuICBzZXREaWdpdGFsT2NlYW5QZXJzb25hbEFjY2Vzc1Rva2VuLFxuICBnZXREaWdpdGFsT2NlYW5QZXJzb25hbEFjY2Vzc1Rva2VuLFxufSBmcm9tIFwiLi9wcm92aXNpb25SYW5jaGVyT1Mvb25EaWdpdGFsT2NlYW4vYWNjZXNzRGlnaXRhbE9jZWFuUGVyc29uYWxBY2Nlc3NUb2tlblwiO1xuaW1wb3J0IGNoYWxrIGZyb20gXCJjaGFsa1wiO1xuaW1wb3J0IHRlcm1pbmFsTGluayBmcm9tIFwidGVybWluYWwtbGlua1wiO1xuXG5jb25zdCBjbGkgPSBjYWMoKTtcbmNvbnN0IHBhcnNlZCA9IGNsaS5wYXJzZSgpO1xuXG5sZXQgRElHSVRBTF9PQ0VBTl9QRVJTT05BTF9BQ0NFU1NfVE9LRU46IHN0cmluZyA9IFwiXCI7XG5cbmNvbnN0IHF1ZXN0aW9uczogQXJyYXk8cHJvbXB0cy5Qcm9tcHRPYmplY3Q+ID0gW1xuICB7XG4gICAgdHlwZTogRElHSVRBTF9PQ0VBTl9QRVJTT05BTF9BQ0NFU1NfVE9LRU4gIT09IFwiXCIgPyBcImNvbmZpcm1cIiA6IGZhbHNlLFxuICAgIG5hbWU6IFwicmVzZXRUb2tlblwiLFxuICAgIG1lc3NhZ2U6XG4gICAgICBcIllvdXIgRGlnaXRhbCBPY2VhbiBQZXJzb25hbCBBY2Nlc3MgVG9rZW4gaGFzIGJlZW4gcmV0cmlldmVkIGZyb20geW91ciBrZXljaGFpbi4gV291bGQgeW91IGxpa2UgdG8gY2hhbmdlIGl0P1wiLFxuICAgIGluaXRpYWw6IGZhbHNlLFxuICB9LFxuICB7XG4gICAgdHlwZTpcbiAgICAgIC8vIEB0cy1pZ25vcmUgJ3ByZXYnIGlzIHRoZSB2YWx1ZSBvZiB0aGUgcHJldmlvdXMgcHJvbXB0LiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS90ZXJrZWxnL3Byb21wdHMjLXByb21wdC1vYmplY3RzXG4gICAgICBESUdJVEFMX09DRUFOX1BFUlNPTkFMX0FDQ0VTU19UT0tFTiA9PT0gXCJcIiB8fCBwcmV2ID8gXCJwYXNzd29yZFwiIDogZmFsc2UsXG4gICAgbmFtZTogXCJuZXdUb2tlblwiLFxuICAgIG1lc3NhZ2U6IGBTZXQgeW91ciBEaWdpdGFsIE9jZWFuIFBlcnNvbmFsIEFjY2VzcyBUb2tlbi4gSXQgd2lsbCBiZSBzdG9yZWQgaW4geW91ciBrZXljaGFpbiwgYW5kIG5vd2hlcmUgZWxzZS4gWW91IGNhbiBnZW5lcmF0ZSBhIHBlcnNvbmFsIGFjY2VzcyB0b2tlbiBhdCAke2NoYWxrLnVuZGVybGluZS5ibHVlQnJpZ2h0KFxuICAgICAgdGVybWluYWxMaW5rKFxuICAgICAgICBcIkRpZ2l0YWxPY2VhbiA+IEFjY291bnQgPiBBUElcIixcbiAgICAgICAgXCJodHRwczovL2Nsb3VkLmRpZ2l0YWxvY2Vhbi5jb20vYWNjb3VudC9hcGkvdG9rZW5zL25ld1wiXG4gICAgICApXG4gICAgKX1gLFxuICAgIGluaXRpYWw6IFwiXCIsXG4gIH0sXG4gIHtcbiAgICB0eXBlOiBcInRleHRcIixcbiAgICBuYW1lOiBcImRyb3BsZXROYW1lXCIsXG4gICAgbWVzc2FnZTogXCJXaGF0IGRvIHlvdSB3YW50IHRvIG5hbWUgeW91ciBkcm9wbGV0P1wiLFxuICAgIGluaXRpYWw6IFwicmFuY2hlclwiLFxuICB9LFxuXTtcblxuY29uc3QgcmFuY2hlckNvbmZpZyA9IG5ldyBSYW5jaGVyT1NDb25maWcoKTtcblxuKGFzeW5jICgpID0+IHtcbiAgRElHSVRBTF9PQ0VBTl9QRVJTT05BTF9BQ0NFU1NfVE9LRU4gPSBhd2FpdCBnZXREaWdpdGFsT2NlYW5QZXJzb25hbEFjY2Vzc1Rva2VuKCk7XG4gIGNvbnN0IGFuc3dlcnMgPSBhd2FpdCBwcm9tcHRzKHF1ZXN0aW9ucyk7XG4gIGlmIChhbnN3ZXJzLm5ld1Rva2VuICE9PSBcIlwiKSB7XG4gICAgYXdhaXQgc2V0RGlnaXRhbE9jZWFuUGVyc29uYWxBY2Nlc3NUb2tlbihhbnN3ZXJzLm5ld1Rva2VuKTtcbiAgfVxuICBhd2FpdCBpbml0aWFsaXplRGlnaXRhbE9jZWFuQVBJKCk7XG4gIGNvbnN0IGRyb3BsZXQgPSBhd2FpdCByYW5jaGVyQ29uZmlnXG4gICAgLnNldE5hbWUoYW5zd2Vycy5kcm9wbGV0TmFtZSlcbiAgICAucHJvdmlzaW9uT24oY2xvdWRQcm92aWRlcnMuZGlnaXRhbE9jZWFuKTtcbiAgY29uc29sZS5sb2coZHJvcGxldC5pcHY0QWRkcmVzc2VzKTtcbiAgY29uc29sZS5sb2coZHJvcGxldC5pcHY2QWRkcmVzc2VzKTtcbn0pKCk7XG4iXSwic291cmNlUm9vdCI6IiJ9