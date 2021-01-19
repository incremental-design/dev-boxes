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
        user_data: null,
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
        message: "Set your Digital Ocean Personal Access Token. It will be stored in your keychain, and nowhere else.",
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbnNpYmxlLXNldHVwLW93bmNsb3VkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Fuc2libGUtc2V0dXAtb3duY2xvdWQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYW5zaWJsZS1zZXR1cC1vd25jbG91ZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYW5zaWJsZS1zZXR1cC1vd25jbG91ZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Fuc2libGUtc2V0dXAtb3duY2xvdWQvZXh0ZXJuYWwgXCJjYWNcIiIsIndlYnBhY2s6Ly9hbnNpYmxlLXNldHVwLW93bmNsb3VkL2V4dGVybmFsIFwicHJvbXB0c1wiIiwid2VicGFjazovL2Fuc2libGUtc2V0dXAtb3duY2xvdWQvZXh0ZXJuYWwgXCJkby13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vYW5zaWJsZS1zZXR1cC1vd25jbG91ZC9leHRlcm5hbCBcImtleXRhclwiIiwid2VicGFjazovL2Fuc2libGUtc2V0dXAtb3duY2xvdWQvLi9zcmMvcHJvdmlzaW9uUmFuY2hlck9TL29uRGlnaXRhbE9jZWFuL2FjY2Vzc0RpZ2l0YWxPY2VhblBlcnNvbmFsQWNjZXNzVG9rZW4udHMiLCJ3ZWJwYWNrOi8vYW5zaWJsZS1zZXR1cC1vd25jbG91ZC8uL3NyYy9wcm92aXNpb25SYW5jaGVyT1Mvb25EaWdpdGFsT2NlYW4vcHJvdmlzaW9uT25EaWdpdGFsT2NlYW4udHMiLCJ3ZWJwYWNrOi8vYW5zaWJsZS1zZXR1cC1vd25jbG91ZC8uL3NyYy9wcm92aXNpb25SYW5jaGVyT1Mvb25BV1MvcHJvdmlzaW9uT25BV1MudHMiLCJ3ZWJwYWNrOi8vYW5zaWJsZS1zZXR1cC1vd25jbG91ZC8uL3NyYy9wcm92aXNpb25SYW5jaGVyT1MvUmFuY2hlck9TLnRzIiwid2VicGFjazovL2Fuc2libGUtc2V0dXAtb3duY2xvdWQvLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxnQ0FBZ0MsWUFBWTtXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHNGOzs7Ozs7QUNBQSxNQUFNLDRCQUE0QixtQjs7O0FDQWxDLE1BQU0sZ0NBQTRCLHVCOzs7QUNBbEMsTUFBTSxtQ0FBNEIsMEI7OztBQ0FsQyxNQUFNLCtCQUE0QixzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQU47QUFFckIsU0FBZSxrQ0FBa0MsQ0FDdEQsS0FBYTs7Ozt3QkFFYixxQkFBTSxxQ0FBa0IsQ0FDdEIsY0FBYyxFQUNkLHFDQUFxQyxFQUNyQyxLQUFLLENBQ047O29CQUpELFNBSUMsQ0FBQzs7Ozs7Q0FDSDtBQUVNLFNBQWUsa0NBQWtDOzs7Ozt3QkFDeEMscUJBQU0scUNBQWtCLENBQ3BDLGNBQWMsRUFDZCxxQ0FBcUMsQ0FDdEM7O29CQUhLLEtBQUssR0FBRyxTQUdiO29CQUNELHNCQUFPLEtBQUssS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFDOzs7O0NBQ3BDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQnFDO0FBQ3RDLG1FQUFtRTtBQUMwQjtBQUU3RixJQUFJLFNBQWlCLENBQUM7QUFDdEIsSUFBSSxtQkFBaUMsQ0FBQztBQUN0Qzs7RUFFRTtBQUNLLFNBQWUseUJBQXlCOzs7O3dCQUNqQyxxQkFBTSxrQ0FBa0MsRUFBRTs7b0JBQXRELFNBQVMsR0FBRyxTQUEwQyxDQUFDO29CQUN2RCxtQkFBbUIsR0FBRyxJQUFJLCtCQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7Ozs7O0NBQ25E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QUFFOztnQkFBaEYsbUNBQW1DLEdBQUcsU0FBMEMsQ0FBQztnQkFDakUscUJBQU0sMEJBQU8sQ0FBQyxTQUFTLENBQUM7O2dCQUFsQyxPQUFPLEdBQUcsU0FBd0I7cUJBQ3BDLFFBQU8sQ0FBQyxRQUFRLEtBQUssRUFBRSxHQUF2Qix3QkFBdUI7Z0JBQ3pCLHFCQUFNLGtDQUFrQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7O2dCQUExRCxTQUEwRCxDQUFDOztvQkFFN0QscUJBQU0seUJBQXlCLEVBQUU7O2dCQUFqQyxTQUFpQyxDQUFDO2dCQUNsQixxQkFBTSxhQUFhO3lCQUNoQyxPQUFPLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQzt5QkFDNUIsV0FBVyxDQUFDLDJCQUEyQixDQUFDOztnQkFGckMsT0FBTyxHQUFHLFNBRTJCO2dCQUMzQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7Ozs7S0FDcEMsQ0FBQyxFQUFFLENBQUMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gbW9kdWxlWydkZWZhdWx0J10gOlxuXHRcdCgpID0+IG1vZHVsZTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiY29uc3QgX19XRUJQQUNLX05BTUVTUEFDRV9PQkpFQ1RfXyA9IHJlcXVpcmUoXCJjYWNcIik7OyIsImNvbnN0IF9fV0VCUEFDS19OQU1FU1BBQ0VfT0JKRUNUX18gPSByZXF1aXJlKFwicHJvbXB0c1wiKTs7IiwiY29uc3QgX19XRUJQQUNLX05BTUVTUEFDRV9PQkpFQ1RfXyA9IHJlcXVpcmUoXCJkby13cmFwcGVyXCIpOzsiLCJjb25zdCBfX1dFQlBBQ0tfTkFNRVNQQUNFX09CSkVDVF9fID0gcmVxdWlyZShcImtleXRhclwiKTs7IiwiaW1wb3J0IGtleXRhciBmcm9tIFwia2V5dGFyXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZXREaWdpdGFsT2NlYW5QZXJzb25hbEFjY2Vzc1Rva2VuKFxuICB0b2tlbjogc3RyaW5nXG4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgYXdhaXQga2V5dGFyLnNldFBhc3N3b3JkKFxuICAgIFwiRElHSVRBTE9DRUFOXCIsXG4gICAgXCJESUdJVEFMX09DRUFOX1BFUlNPTkFMX0FDQ0VTU19UT0tFTlwiLFxuICAgIHRva2VuXG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXREaWdpdGFsT2NlYW5QZXJzb25hbEFjY2Vzc1Rva2VuKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gIGNvbnN0IHRva2VuID0gYXdhaXQga2V5dGFyLmdldFBhc3N3b3JkKFxuICAgIFwiRElHSVRBTE9DRUFOXCIsXG4gICAgXCJESUdJVEFMX09DRUFOX1BFUlNPTkFMX0FDQ0VTU19UT0tFTlwiXG4gICk7XG4gIHJldHVybiB0b2tlbiA9PT0gbnVsbCA/IFwiXCIgOiB0b2tlbjtcbn1cbiIsImltcG9ydCBEaWdpdGFsT2NlYW4gZnJvbSBcImRvLXdyYXBwZXJcIjtcbi8vIGltcG9ydCBnZXRBdXRoVG9rZW4gZnJvbSBcIi4vZ2V0RGlnaXRhbE9jZWFuUGVyc29uYWxBY2Nlc3NUb2tlblwiO1xuaW1wb3J0IHsgZ2V0RGlnaXRhbE9jZWFuUGVyc29uYWxBY2Nlc3NUb2tlbiB9IGZyb20gXCIuL2FjY2Vzc0RpZ2l0YWxPY2VhblBlcnNvbmFsQWNjZXNzVG9rZW5cIjtcblxubGV0IGF1dGhUb2tlbjogc3RyaW5nO1xubGV0IGRpZ2l0YWxPY2VhbldyYXBwZXI6IERpZ2l0YWxPY2Vhbjtcbi8qXG5hdXRoVG9rZW4gYW5kIGRpZ2l0YWxPY2VhbldyYXBwZXIgYXJlIHNpbmdsZXRvbnMgdGhhdCBhcmUgZ29pbmcgdG8gcGVyc2lzdCBmb3IgdGhlIGxpZmUgb2YgdGhlIHByb2dyYW0uIFRoYXQncyB3aHkgdGhleSBhcmUgaW4gdGhlIG1vZHVsZSBzY29wZVxuKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbml0aWFsaXplRGlnaXRhbE9jZWFuQVBJKCk6IFByb21pc2U8dm9pZD4ge1xuICBhdXRoVG9rZW4gPSBhd2FpdCBnZXREaWdpdGFsT2NlYW5QZXJzb25hbEFjY2Vzc1Rva2VuKCk7XG4gIGRpZ2l0YWxPY2VhbldyYXBwZXIgPSBuZXcgRGlnaXRhbE9jZWFuKGF1dGhUb2tlbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm92aXNpb25PbkRpZ2l0YWxPY2VhbihcbiAgY29uZmlnT2JqZWN0OiBvYmplY3Rcbik6IFByb21pc2U8ZGlnaXRhbE9jZWFuQ3JlYXRlRHJvcGxldFJlc3BvbnNlPiB7XG4gIGxldCByYW5jaGVySW5zdGFuY2U6IG9iamVjdCA9IHtcbiAgICBuYW1lOiBcImFub3RoZXJcIixcbiAgICByZWdpb246IFwibnljM1wiLFxuICAgIHNpemU6IFwicy0xdmNwdS0xZ2JcIixcbiAgICBpbWFnZTogXCJyYW5jaGVyb3NcIixcbiAgICBzc2hfa2V5czogWzI3NjA4OTg2LCAyODQ5NjQ1N10sXG4gICAgYmFja3VwczogZmFsc2UsXG4gICAgaXB2NjogdHJ1ZSxcbiAgICBwcml2YXRlX25ldHdvcmtpbmc6IG51bGwsXG4gICAgdXNlcl9kYXRhOiBudWxsLFxuICAgIHZvbHVtZXM6IG51bGwsXG4gICAgdGFnczogW10sXG4gIH07XG5cbiAgcmFuY2hlckluc3RhbmNlID0gT2JqZWN0LmFzc2lnbihyYW5jaGVySW5zdGFuY2UsIGNvbmZpZ09iamVjdCk7XG4gIHJldHVybiAoXG4gICAgZGlnaXRhbE9jZWFuV3JhcHBlci5kcm9wbGV0c1xuICAgICAgLy8gQHRzLWlnbm9yZTogdHlwZXMgZm9yIHJhbmNoZXJJbnN0YW5jZSBhcmUgbm90IGNvbXBhdGlibGVcbiAgICAgIC5jcmVhdGUocmFuY2hlckluc3RhbmNlKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgIH0pXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREcm9wbGV0SW5mb3JtYXRpb24oZHJvcGxldElEOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZGlnaXRhbE9jZWFuV3JhcHBlci5kcm9wbGV0cy5nZXRCeUlkKGRyb3BsZXRJRCk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgZGlnaXRhbE9jZWFuQ3JlYXRlRHJvcGxldFJlc3BvbnNlIHtcbiAgZHJvcGxldDoge1xuICAgIGlkOiBzdHJpbmc7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIG1lbW9yeUluTWVnYWJ5dGVzOiBiaWdpbnQ7XG4gICAgdmNwdXM6IGJpZ2ludDtcbiAgICBkaXNrOiBiaWdpbnQ7XG4gICAgbG9ja2VkOiBib29sZWFuO1xuICAgIGNyZWF0ZWRfYXQ6IHN0cmluZztcbiAgICBzdGF0dXM6IHN0cmluZztcbiAgICBiYWNrdXBfaWRzOiBBcnJheTxhbnk+O1xuICAgIHNuYXBzaG90X2lkczogQXJyYXk8YW55PjtcbiAgICBmZWF0dXJlczogQXJyYXk8YW55PjtcbiAgICByZWdpb246IG9iamVjdDtcbiAgICBpbWFnZTogb2JqZWN0O1xuICAgIHNpemU6IG9iamVjdDtcbiAgICBzaXplX3NsdWc6IHN0cmluZztcbiAgICBuZXR3b3Jrczoge1xuICAgICAgdjQ6IFtcbiAgICAgICAge1xuICAgICAgICAgIGlwX2FkZHJlc3M6IHN0cmluZztcbiAgICAgICAgICBuZXRtYXNrOiBzdHJpbmc7XG4gICAgICAgICAgZ2F0ZXdheTogc3RyaW5nIHwgbnVsbDtcbiAgICAgICAgICB0eXBlOiBcInByaXZhdGVcIiB8IFwicHVibGljXCI7XG4gICAgICAgIH1cbiAgICAgIF07XG4gICAgICB2NjogW1xuICAgICAgICB7XG4gICAgICAgICAgaXBfYWRkcmVzczogc3RyaW5nO1xuICAgICAgICAgIG5ldG1hc2s6IHN0cmluZztcbiAgICAgICAgICBnYXRld2F5OiBzdHJpbmcgfCBudWxsO1xuICAgICAgICAgIHR5cGU6IFwicHJpdmF0ZVwiIHwgXCJwdWJsaWNcIjtcbiAgICAgICAgfVxuICAgICAgXTtcbiAgICB9O1xuICAgIGtlcm5lbDogb2JqZWN0IHwgbnVsbDtcbiAgICBuZXh0X2JhY2t1cF93aW5kb3c6IG9iamVjdCB8IG51bGw7XG4gICAgdGFnczogQXJyYXk8YW55PjtcbiAgICB2b2x1bWVfaWRzOiBBcnJheTxhbnk+O1xuICAgIHZwY191dWlkOiBTdHJpbmc7XG4gIH07XG59XG4iLCIvLyBUT0RPOiBhY3R1YWxseSB3cml0ZSB0aGlzIGZ1bmN0aW9uLiBSaWdodCBub3cgaXQncyBqdXN0IGEgc3R1YlxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByb3Zpc2lvbk9uQVdTKCkge1xuICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgXCJTb3JyeSwgSSBoYXZlbid0IHdyaXR0ZW4gYW55IGNvZGUgdG8gcHJvdmlzaW9uIHJhbmNoZXIgb24gQVdTLlwiXG4gICk7XG59XG4iLCJpbXBvcnQge1xuICBwcm92aXNpb25PbkRpZ2l0YWxPY2VhbixcbiAgZGlnaXRhbE9jZWFuQ3JlYXRlRHJvcGxldFJlc3BvbnNlLFxuICBnZXREcm9wbGV0SW5mb3JtYXRpb24sXG59IGZyb20gXCIuL29uRGlnaXRhbE9jZWFuL3Byb3Zpc2lvbk9uRGlnaXRhbE9jZWFuXCI7XG5pbXBvcnQgeyBwcm92aXNpb25PbkFXUyB9IGZyb20gXCIuL29uQVdTL3Byb3Zpc2lvbk9uQVdTXCI7XG5pbXBvcnQgeyBpbnNwZWN0IH0gZnJvbSBcInV0aWxcIjtcblxuZXhwb3J0IGNsYXNzIFJhbmNoZXJPU0NvbmZpZyB7XG4gIC8vICFQcml2YXRlIE1lbWJlcnNcbiAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nID0gXCJcIjtcbiAgcHJpdmF0ZSBfaXB2NEFkZHJlc3NlczogU2V0PHN0cmluZz4gPSBuZXcgU2V0KCk7XG4gIHByaXZhdGUgX2lwdjZBZGRyZXNzZXM6IFNldDxzdHJpbmc+ID0gbmV3IFNldCgpO1xuICBwcml2YXRlIF9kcm9wbGV0SUQ6IHN0cmluZyA9IFwiXCI7XG5cbiAgLy8gIUNvbnN0cnVjdG9yXG4gIGNvbnN0cnVjdG9yKCkge30gLy9JJ20gbGVhdmluZyB0aGUgY29uc3RydWN0b3IgYmxhbmsgYmVjYXVzZSB3ZSdsbCBpbml0aWFsaXplIGFsbCB2YXJpYWJsZXMgd2l0aCBjaGFpbmFibGUgc2V0dGVyc1xuXG4gIC8vICFHZXR0ZXJzIGFuZCBTZXR0ZXJzXG4gIGdldCBuYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cbiAgc2V0IG5hbWUobmV3TmFtZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmFtZSA9IG5ld05hbWU7XG4gICAgLy8gVE9ETzogc2FuaXRpemUgY2hhcmFjdGVycyB0aGF0IGRvbid0IGJlbG9uZyBpbiBkaWdpdGFsIG9jZWFuIGRyb3BsZXQgbmFtZXNcbiAgICAvLyBUT0RPOiBpZiBkcm9wbGV0IGhhcyBhbHJlYWR5IGJlZW4gcHJvdmlzaW9uZWQgd2l0aCBhIG5hbWUsIHNlZSBpZiB0aGUgZHJvcGxldCdzIG5hbWUgY2FuIGFjdHVhbGx5IGJlIHVwZGF0ZWQuIElmIGl0IGNhbiwgdGhlbiB1cGRhdGUgaXQuIElmIG5vdCwgdGhyb3cgYW4gZXJyb3IuXG4gIH1cblxuICBnZXQgaXB2NEFkZHJlc3NlcygpOiBBcnJheTxzdHJpbmc+IHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLl9pcHY0QWRkcmVzc2VzKTtcbiAgfVxuXG4gIHNldCBpcHY0QWRkcmVzc2VzKGlwdjRBZGRyZXNzZXM6IEFycmF5PHN0cmluZz4pIHtcbiAgICB0aGlzLl9pcHY0QWRkcmVzc2VzID0gbmV3IFNldChpcHY0QWRkcmVzc2VzKTtcbiAgICAvL1RPRE86IGl0ZXJhdGUgdGhyb3VnaCB0aGUgc2V0IGFuZCByZW1vdmUgYW55IGlwIGFkZHJlc3NlcyB0aGF0IGFyZSBub3QgdmFsaWQuXG4gIH1cblxuICBnZXQgaXB2NkFkZHJlc3NlcygpOiBBcnJheTxzdHJpbmc+IHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLl9pcHY2QWRkcmVzc2VzKTtcbiAgfVxuXG4gIHNldCBpcHY2QWRkcmVzc2VzKGlwdjZBZGRyZXNzZXM6IEFycmF5PHN0cmluZz4pIHtcbiAgICB0aGlzLl9pcHY2QWRkcmVzc2VzID0gbmV3IFNldChpcHY2QWRkcmVzc2VzKTtcbiAgICAvL1RPRE86IGl0ZXJhdGUgdGhyb3VnaCB0aGUgc2V0IGFuZCByZW1vdmUgYW55IGlwIGFkZHJlc3NlcyB0aGF0IGFyZSBub3QgdmFsaWQuXG4gIH1cblxuICBnZXQgZHJvcGxldElEKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2Ryb3BsZXRJRDtcbiAgfVxuICAvKlxuICAgIG5vdGUgdGhhdCB0aGVyZSBpcyBubyBzZXR0ZXIgZm9yIGRyb3BsZXRJRCwgYW5kIHRoZSBfZHJvcGxldElEIHByb3BlcnR5IGlzIHByaXZhdGUuIFRoaXMgaXMgYmVjYXVzZSB3ZSBkbyBOT1Qgd2FudCB0aGUgZHJvcGxldElEIHRvIGJlIHNldCBieSBhbnkgY29kZSBvdXRzaWRlIG9mIHRoaXMgY2xhc3MuXG4gICovXG5cbiAgLy8gIUFjY2Vzc29yIE1ldGhvZHNcbiAgc2V0TmFtZShuZXdOYW1lOiBzdHJpbmcpOiB0aGlzIHtcbiAgICB0aGlzLm5hbWUgPSBuZXdOYW1lO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgYWRkSXB2NEFkZHJlc3MoaXB2NEFkZHJlc3M6IHN0cmluZyk6IHRoaXMge1xuICAgIGxldCBhZGRyZXNzQXJyYXkgPSB0aGlzLmlwdjRBZGRyZXNzZXM7XG4gICAgYWRkcmVzc0FycmF5LnB1c2goaXB2NEFkZHJlc3MpO1xuICAgIHRoaXMuaXB2NEFkZHJlc3NlcyA9IGFkZHJlc3NBcnJheTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJlbW92ZUlwdjRBZGRyZXNzKGlwdjRBZGRyZXNzOiBzdHJpbmcpOiB0aGlzIHtcbiAgICB0aGlzLmlwdjRBZGRyZXNzZXMgPSB0aGlzLmlwdjRBZGRyZXNzZXMuZmlsdGVyKFxuICAgICAgKGFkZHJlc3MpID0+IGFkZHJlc3MgIT09IGlwdjRBZGRyZXNzXG4gICAgKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGFkZElwdjZBZGRyZXNzKGlwdjZBZGRyZXNzOiBzdHJpbmcpOiB0aGlzIHtcbiAgICBsZXQgYWRkcmVzc0FycmF5ID0gdGhpcy5pcHY2QWRkcmVzc2VzO1xuICAgIGFkZHJlc3NBcnJheS5wdXNoKGlwdjZBZGRyZXNzKTtcbiAgICB0aGlzLmlwdjZBZGRyZXNzZXMgPSBhZGRyZXNzQXJyYXk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZW1vdmVJcHY2QWRkcmVzcyhpcHY2QWRkcmVzczogc3RyaW5nKTogdGhpcyB7XG4gICAgdGhpcy5pcHY2QWRkcmVzc2VzID0gdGhpcy5pcHY2QWRkcmVzc2VzLmZpbHRlcihcbiAgICAgIChhZGRyZXNzKSA9PiBhZGRyZXNzICE9PSBpcHY2QWRkcmVzc1xuICAgICk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyAhU3Vicm91dGluZXMgKHRoZXNlIHNob3VsZCBiZSBwcml2YXRlKVxuICBwcml2YXRlIHBhcnNlRGlnaXRhbE9jZWFuRHJvcGxldFJlc3BvbnNlKFxuICAgIHJlc3BvbnNlOiBkaWdpdGFsT2NlYW5DcmVhdGVEcm9wbGV0UmVzcG9uc2VcbiAgKTogdm9pZCB7XG4gICAgdHJ5IHtcbiAgICAgIHJlc3BvbnNlLmRyb3BsZXQubmV0d29ya3MudjQuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBpZiAoaXRlbS50eXBlID09PSBcInB1YmxpY1wiKSB7XG4gICAgICAgICAgdGhpcy5hZGRJcHY0QWRkcmVzcyhpdGVtLmlwX2FkZHJlc3MpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfVxuICAgIHRoaXMuX2Ryb3BsZXRJRCA9IHJlc3BvbnNlLmRyb3BsZXQuaWQ7XG4gIH1cblxuICBwcml2YXRlIHBvbGxGb3JJUEFkZHJlc3NlcyhcbiAgICBtYXhpbXVtTnVtYmVyT2ZTZWNvbmRzVG9Qb2xsOiBudW1iZXIgPSAtMVxuICApOiBQcm9taXNlPHRoaXM+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgLypcbiAgICAgICAgVGhpcyBmdW5jdGlvbiByZWFsbHkgc2hvdWxkIG5vdCBiZSBuZWNlc3NhcnkuIFBvbGxpbmcgaXMgZ2VuZXJhbGx5IGEgYmFkIGlkZWEuIEhvd2V2ZXIsIHByb3Zpc2lvbk9uRGlnaXRhbE9jZWFuLmRyb3BsZXRzLmNyZWF0ZSgpIGRvZXNuJ3QgYWN0dWFsbHkgcmV0dXJuIHRoZSBkcm9wbGV0J3MgSVAgYWRkcmVzcy4gVGhpcyBpcyBiZWNhdXNlIGl0IHRha2VzIH41LTEwIHNlY29uZHMgZm9yIHRoZSBkcm9wbGV0IHRvIGFjdHVhbGx5IGFjcXVpcmUgYW4gSVAgYWRkcmVzcy4gU28sIGluIHRoaXMgcGFydGljdWxhciBjYXNlLCB3ZSBuZWVkIHRvIHBvbGwgdW50aWwgd2UgZ2V0IGFuIElQIGFkZHJlc3MuXG5cbiAgICAgICAgSW4gdGhlIGZpcnN0IHBvbGwsIHdlIGNoZWNrIHJlc3BvbnNlLmZlYXR1cmVzIHRvIHNlZSBpZiBpdCBjb250YWlucyBcImlwdjZcIi4gSWYgc28sIHdlIGNvbnRpbnVlIHRvIHBvbGwgdW50aWwgd2UgaGF2ZSByZWNlaXZlZCBhdCBsZWFzdCAxIGlwdjQgYW5kIDEgaXB2NiBhZGRyZXNzLCBvciB1bnRpbCB0aGUgbnVtYmVyIG9mIHNlY29uZHMgdG8gcG9sbCBpcyB1cC5cblxuICAgICAgICBJZiB0aGUgbnVtYmVyIG9mIHNlY29uZHMgdG8gcG9sbCBpcyBsZXNzIHRoYW4gemVybywgdGhlbiB3ZSB3aWxsIHBvbGwgaW5kZWZpbml0ZWx5IHVudGlsIHdlIGdldCBhdCBsZWFzdCAxIGlwdjQgYWRkcmVzcywgYW5kIGlmIGlwdjYgaXMgZW5hYmxlZCwgMSBpcHY2IGFkZHJlc3NcbiAgICAgICovXG4gICAgICBsZXQgaXB2NEFkZHJlc3NlczogQXJyYXk8c3RyaW5nPiA9IFtdO1xuICAgICAgbGV0IGlwdjZBZGRyZXNzZXM6IEFycmF5PHN0cmluZz4gPSBbXTtcbiAgICAgIGxldCBoYXNJcHY2OiBib29sZWFuID0gdHJ1ZTtcbiAgICAgIGxldCBudW1iZXJPZlRpbWVzVG9Qb2xsUGVyU2Vjb25kOiBudW1iZXIgPSAxO1xuICAgICAgbGV0IG51bWJlck9mVGltZXNUb1BvbGw6IG51bWJlciA9XG4gICAgICAgIG1heGltdW1OdW1iZXJPZlNlY29uZHNUb1BvbGwgPD0gMFxuICAgICAgICAgID8gLTFcbiAgICAgICAgICA6IE1hdGguY2VpbChcbiAgICAgICAgICAgICAgbnVtYmVyT2ZUaW1lc1RvUG9sbFBlclNlY29uZCAqIG1heGltdW1OdW1iZXJPZlNlY29uZHNUb1BvbGxcbiAgICAgICAgICAgICk7XG4gICAgICBsZXQgcG9sbEludGVydmFsOiBOb2RlSlMuVGltZW91dDtcbiAgICAgIC8qXG4gICAgICAgIElGIG51bWJlciBvZiB0aW1lcyB0byBwb2xsIGlzIGxlc3MgdGhhbiB6ZXJvLCBwb2xsIGluZGVmaW5pdGVseS5cbiAgICAgICovXG4gICAgICBsZXQgcG9sbCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgLy90b2RvOiBhZGQgc29tZSBraW5kIG9mIENMSSBzcGlubmVyIHNvIHRoYXQgaXQncyBjbGVhciB0aGF0IGEgcG9sbGluZyBsb29wIGlzIHJ1bm5pbmdcbiAgICAgICAgY29uc3QgcmVzcG9uc2U6IGRpZ2l0YWxPY2VhbkNyZWF0ZURyb3BsZXRSZXNwb25zZSA9IGF3YWl0IGdldERyb3BsZXRJbmZvcm1hdGlvbihcbiAgICAgICAgICB0aGlzLmRyb3BsZXRJRFxuICAgICAgICApO1xuICAgICAgICBoYXNJcHY2ID1cbiAgICAgICAgICByZXNwb25zZS5kcm9wbGV0LmZlYXR1cmVzLmluY2x1ZGVzKFwiaXB2NlwiKSAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IHRydWVcbiAgICAgICAgICAgIDogZmFsc2U7XG4gICAgICAgIHJlc3BvbnNlLmRyb3BsZXQubmV0d29ya3MudjQuZm9yRWFjaCgobmV0d29yaykgPT4ge1xuICAgICAgICAgIGlmIChuZXR3b3JrLnR5cGUgPT09IFwicHVibGljXCIpIHtcbiAgICAgICAgICAgIGlwdjRBZGRyZXNzZXMucHVzaChuZXR3b3JrLmlwX2FkZHJlc3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChoYXNJcHY2KSB7XG4gICAgICAgICAgcmVzcG9uc2UuZHJvcGxldC5uZXR3b3Jrcy52Ni5mb3JFYWNoKChuZXR3b3JrKSA9PiB7XG4gICAgICAgICAgICBpZiAobmV0d29yay50eXBlID09PSBcInB1YmxpY1wiKSB7XG4gICAgICAgICAgICAgIGlwdjZBZGRyZXNzZXMucHVzaChuZXR3b3JrLmlwX2FkZHJlc3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlwdjRBZGRyZXNzZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChoYXNJcHY2KSB7XG4gICAgICAgICAgICBpZiAoaXB2NkFkZHJlc3Nlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgIG51bWJlck9mVGltZXNUb1BvbGwgPSAwO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbnVtYmVyT2ZUaW1lc1RvUG9sbC0tO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBudW1iZXJPZlRpbWVzVG9Qb2xsID0gMDtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbnVtYmVyT2ZUaW1lc1RvUG9sbC0tO1xuICAgICAgICB9XG4gICAgICAgIGNoZWNrSWZTaG91bGRTdG9wUG9sbGluZygpO1xuICAgICAgfTtcblxuICAgICAgZnVuY3Rpb24gY2hlY2tJZlNob3VsZFN0b3BQb2xsaW5nKCkge1xuICAgICAgICBpZiAobnVtYmVyT2ZUaW1lc1RvUG9sbCA9PSAwKSB7XG4gICAgICAgICAgY2xlYXJJbnRlcnZhbChwb2xsSW50ZXJ2YWwpO1xuICAgICAgICAgIGNoZWNrSWZJUEFkZHJlc3Nlc09idGFpbmVkKHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGNoZWNrSWZJUEFkZHJlc3Nlc09idGFpbmVkID0gKHJlc29sdmU6IGFueSwgcmVqZWN0OiBhbnkpID0+IHtcbiAgICAgICAgaWYgKGlwdjRBZGRyZXNzZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlwdjRBZGRyZXNzZXMuZm9yRWFjaCgoYWRkcmVzcykgPT4ge1xuICAgICAgICAgICAgdGhpcy5hZGRJcHY0QWRkcmVzcyhhZGRyZXNzKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAoaGFzSXB2Nikge1xuICAgICAgICAgICAgaWYgKGlwdjZBZGRyZXNzZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICBpcHY2QWRkcmVzc2VzLmZvckVhY2goKGFkZHJlc3MpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZElwdjZBZGRyZXNzKGFkZHJlc3MpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlamVjdCh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzb2x2ZSh0aGlzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVqZWN0KHRoaXMpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBmdW5jdGlvbiBwb2xsT25JbnRlcnZhbCgpOiBOb2RlSlMuVGltZW91dCB7XG4gICAgICAgIGxldCBtaWxsaXNlY29uZHNCZXR3ZWVuSW50ZXJ2YWxzID0gbnVtYmVyT2ZUaW1lc1RvUG9sbFBlclNlY29uZCAqIDEwMDA7XG4gICAgICAgIHJldHVybiBzZXRJbnRlcnZhbChwb2xsLCBtaWxsaXNlY29uZHNCZXR3ZWVuSW50ZXJ2YWxzKTtcbiAgICAgIH1cblxuICAgICAgcG9sbEludGVydmFsID0gcG9sbE9uSW50ZXJ2YWwoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIHByb3Zpc2lvbk9uKGNsb3VkOiBjbG91ZFByb3ZpZGVycyk6IFByb21pc2U8dGhpcz4ge1xuICAgIHN3aXRjaCAoK2Nsb3VkKSB7XG4gICAgICAvKlxuICAgICAgICBhcmd1bWVudCAnY2xvdWQnIGhhcyB0byBiZSBjYXN0IHRvIGEgbnVtYmVyIGluIG9yZGVyIHRvIGJlIGNvbXBhcmFibGUgaW4gYSBzd2l0Y2ggc3RhdGVtZW50LlxuICAgICAgICBUaGlzIHdvcmtzIGJlY2F1c2UgZW51bXMgYXJlIGFjdHVhbGx5IGEgdHlwZSBvZiBudW1iZXIgLi4uIHRoZSBuYW1lIG9mIGVhY2ggZW51bWVyYWJsZSB2YWx1ZSBpcyBqdXN0IHN5bnRhY3RpYyBzdWdhci5cbiAgICAgICAgZm9yIG1vcmUgaW5mbyBzZWU6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzI3NzQ3NDM3L3R5cGVzY3JpcHQtZW51bS1zd2l0Y2gtbm90LXdvcmtpbmdcbiAgICAgICovXG4gICAgICBjYXNlIGNsb3VkUHJvdmlkZXJzLmRpZ2l0YWxPY2VhbjpcbiAgICAgICAgbGV0IGNvbmZpZyA9IHsgbmFtZTogdGhpcy5uYW1lIH07XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlOiBkaWdpdGFsT2NlYW5DcmVhdGVEcm9wbGV0UmVzcG9uc2UgPSBhd2FpdCBwcm92aXNpb25PbkRpZ2l0YWxPY2VhbihcbiAgICAgICAgICBjb25maWdcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5wYXJzZURpZ2l0YWxPY2VhbkRyb3BsZXRSZXNwb25zZShyZXNwb25zZSk7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnBvbGxGb3JJUEFkZHJlc3NlcygpOyAvL25vdGUgdGhhdCB3ZSBuZWVkIHRvIHBvbGwgZm9yIGlwIGFkZHJlc3NlcyB1bnRpbCB3ZSByZWNlaXZlIHRoZW0gYmVjYXVzZSByZXNwb25zZSBkb2VzIG5vdCBhY3R1YWxseSBjb250YWluIElQIGFkZHJlc3Nlcy5cbiAgICAgIGNhc2UgY2xvdWRQcm92aWRlcnMuYXdzOlxuICAgICAgICBhd2FpdCBwcm92aXNpb25PbkFXUygpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAnJHtjbG91ZH0gaXNuXFwndCBhIHN1cHBvcnRlZCBjbG91ZCBwcm92aWRlci4gWW91IG11c3Qgc3BlY2lmeSBlaXRoZXIgXCJhd3NcIiBvciBcImRpZ2l0YWxPY2VhblwiLidcbiAgICAgICAgKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGVudW0gY2xvdWRQcm92aWRlcnMge1xuICBkaWdpdGFsT2NlYW4sXG4gIGF3cyxcbn1cbiIsImltcG9ydCBjYWMgZnJvbSBcImNhY1wiO1xuaW1wb3J0IHByb21wdHMgZnJvbSBcInByb21wdHNcIjtcbmltcG9ydCB7IGluaXRpYWxpemVEaWdpdGFsT2NlYW5BUEkgfSBmcm9tIFwiLi9wcm92aXNpb25SYW5jaGVyT1Mvb25EaWdpdGFsT2NlYW4vcHJvdmlzaW9uT25EaWdpdGFsT2NlYW5cIjtcbmltcG9ydCB7XG4gIFJhbmNoZXJPU0NvbmZpZyxcbiAgY2xvdWRQcm92aWRlcnMsXG59IGZyb20gXCIuL3Byb3Zpc2lvblJhbmNoZXJPUy9SYW5jaGVyT1NcIjtcbmltcG9ydCB7XG4gIHNldERpZ2l0YWxPY2VhblBlcnNvbmFsQWNjZXNzVG9rZW4sXG4gIGdldERpZ2l0YWxPY2VhblBlcnNvbmFsQWNjZXNzVG9rZW4sXG59IGZyb20gXCIuL3Byb3Zpc2lvblJhbmNoZXJPUy9vbkRpZ2l0YWxPY2Vhbi9hY2Nlc3NEaWdpdGFsT2NlYW5QZXJzb25hbEFjY2Vzc1Rva2VuXCI7XG5cbmNvbnN0IGNsaSA9IGNhYygpO1xuY29uc3QgcGFyc2VkID0gY2xpLnBhcnNlKCk7XG5cbmxldCBESUdJVEFMX09DRUFOX1BFUlNPTkFMX0FDQ0VTU19UT0tFTjogc3RyaW5nID0gXCJcIjtcblxuY29uc3QgcXVlc3Rpb25zOiBBcnJheTxwcm9tcHRzLlByb21wdE9iamVjdD4gPSBbXG4gIHtcbiAgICB0eXBlOiBESUdJVEFMX09DRUFOX1BFUlNPTkFMX0FDQ0VTU19UT0tFTiAhPT0gXCJcIiA/IFwiY29uZmlybVwiIDogZmFsc2UsXG4gICAgbmFtZTogXCJyZXNldFRva2VuXCIsXG4gICAgbWVzc2FnZTpcbiAgICAgIFwiWW91ciBEaWdpdGFsIE9jZWFuIFBlcnNvbmFsIEFjY2VzcyBUb2tlbiBoYXMgYmVlbiByZXRyaWV2ZWQgZnJvbSB5b3VyIGtleWNoYWluLiBXb3VsZCB5b3UgbGlrZSB0byBjaGFuZ2UgaXQ/XCIsXG4gICAgaW5pdGlhbDogZmFsc2UsXG4gIH0sXG4gIHtcbiAgICB0eXBlOlxuICAgICAgLy8gQHRzLWlnbm9yZSAncHJldicgaXMgdGhlIHZhbHVlIG9mIHRoZSBwcmV2aW91cyBwcm9tcHQuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL3RlcmtlbGcvcHJvbXB0cyMtcHJvbXB0LW9iamVjdHNcbiAgICAgIERJR0lUQUxfT0NFQU5fUEVSU09OQUxfQUNDRVNTX1RPS0VOID09PSBcIlwiIHx8IHByZXYgPyBcInBhc3N3b3JkXCIgOiBmYWxzZSxcbiAgICBuYW1lOiBcIm5ld1Rva2VuXCIsXG4gICAgbWVzc2FnZTpcbiAgICAgIFwiU2V0IHlvdXIgRGlnaXRhbCBPY2VhbiBQZXJzb25hbCBBY2Nlc3MgVG9rZW4uIEl0IHdpbGwgYmUgc3RvcmVkIGluIHlvdXIga2V5Y2hhaW4sIGFuZCBub3doZXJlIGVsc2UuXCIsXG4gICAgaW5pdGlhbDogXCJcIixcbiAgfSxcbiAge1xuICAgIHR5cGU6IFwidGV4dFwiLFxuICAgIG5hbWU6IFwiZHJvcGxldE5hbWVcIixcbiAgICBtZXNzYWdlOiBcIldoYXQgZG8geW91IHdhbnQgdG8gbmFtZSB5b3VyIGRyb3BsZXQ/XCIsXG4gICAgaW5pdGlhbDogXCJyYW5jaGVyXCIsXG4gIH0sXG5dO1xuXG5jb25zdCByYW5jaGVyQ29uZmlnID0gbmV3IFJhbmNoZXJPU0NvbmZpZygpO1xuXG4oYXN5bmMgKCkgPT4ge1xuICBESUdJVEFMX09DRUFOX1BFUlNPTkFMX0FDQ0VTU19UT0tFTiA9IGF3YWl0IGdldERpZ2l0YWxPY2VhblBlcnNvbmFsQWNjZXNzVG9rZW4oKTtcbiAgY29uc3QgYW5zd2VycyA9IGF3YWl0IHByb21wdHMocXVlc3Rpb25zKTtcbiAgaWYgKGFuc3dlcnMubmV3VG9rZW4gIT09IFwiXCIpIHtcbiAgICBhd2FpdCBzZXREaWdpdGFsT2NlYW5QZXJzb25hbEFjY2Vzc1Rva2VuKGFuc3dlcnMubmV3VG9rZW4pO1xuICB9XG4gIGF3YWl0IGluaXRpYWxpemVEaWdpdGFsT2NlYW5BUEkoKTtcbiAgY29uc3QgZHJvcGxldCA9IGF3YWl0IHJhbmNoZXJDb25maWdcbiAgICAuc2V0TmFtZShhbnN3ZXJzLmRyb3BsZXROYW1lKVxuICAgIC5wcm92aXNpb25PbihjbG91ZFByb3ZpZGVycy5kaWdpdGFsT2NlYW4pO1xuICBjb25zb2xlLmxvZyhkcm9wbGV0LmlwdjRBZGRyZXNzZXMpO1xuICBjb25zb2xlLmxvZyhkcm9wbGV0LmlwdjZBZGRyZXNzZXMpO1xufSkoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=