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
;// CONCATENATED MODULE: external "dotenv"
const external_dotenv_namespaceObject = require("dotenv");;
var external_dotenv_default = /*#__PURE__*/__webpack_require__.n(external_dotenv_namespaceObject);
;// CONCATENATED MODULE: ./src/provisionRancherOS/onDigitalOcean/getDigitalOceanPersonalAccessToken.ts

external_dotenv_default().config(); // we have to initialize environment vars before we can actually access auth token
/* harmony default export */ function getDigitalOceanPersonalAccessToken() {
    var authToken = process.env.DIGITAL_OCEAN_PERSONAL_ACCESS_TOKEN;
    if (typeof authToken === "string") {
        return authToken;
    }
    else {
        throw new Error("Digital Ocean Personal Access Token has not been set in `.env`. Cannot access digital ocean API");
    }
}

;// CONCATENATED MODULE: ./src/provisionRancherOS/onDigitalOcean/provisionOnDigitalOcean.ts


var authToken = getDigitalOceanPersonalAccessToken();
var digitalOceanWrapper = new (external_do_wrapper_default())(authToken);
/*
  authToken and digitalOceanWrapper are singletons that are going to persist for the life of the program.
*/
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
// TODO: actually write this function. Right now it's just a stub
function provisionOnAWS() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
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
// const promptsConfig: PromptObject = {
//   type: "number",
//   name: "value",
//   message: "how old are you",
//   validate: (value: number) => (value < 18 ? `Nightclub is 18+ only` : true),
// };
var questions = [
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
            case 0: return [4 /*yield*/, external_prompts_default()(questions)];
            case 1:
                answers = _a.sent();
                return [4 /*yield*/, rancherConfig
                        .setName(answers.dropletName)
                        .provisionOn(cloudProviders.digitalOcean)];
            case 2:
                droplet = _a.sent();
                console.log(droplet.ipv4Addresses);
                console.log(droplet.ipv6Addresses);
                return [2 /*return*/];
        }
    });
}); })();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbnNpYmxlLXNldHVwLW93bmNsb3VkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Fuc2libGUtc2V0dXAtb3duY2xvdWQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYW5zaWJsZS1zZXR1cC1vd25jbG91ZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYW5zaWJsZS1zZXR1cC1vd25jbG91ZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Fuc2libGUtc2V0dXAtb3duY2xvdWQvZXh0ZXJuYWwgXCJjYWNcIiIsIndlYnBhY2s6Ly9hbnNpYmxlLXNldHVwLW93bmNsb3VkL2V4dGVybmFsIFwicHJvbXB0c1wiIiwid2VicGFjazovL2Fuc2libGUtc2V0dXAtb3duY2xvdWQvZXh0ZXJuYWwgXCJkby13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vYW5zaWJsZS1zZXR1cC1vd25jbG91ZC9leHRlcm5hbCBcImRvdGVudlwiIiwid2VicGFjazovL2Fuc2libGUtc2V0dXAtb3duY2xvdWQvLi9zcmMvcHJvdmlzaW9uUmFuY2hlck9TL29uRGlnaXRhbE9jZWFuL2dldERpZ2l0YWxPY2VhblBlcnNvbmFsQWNjZXNzVG9rZW4udHMiLCJ3ZWJwYWNrOi8vYW5zaWJsZS1zZXR1cC1vd25jbG91ZC8uL3NyYy9wcm92aXNpb25SYW5jaGVyT1Mvb25EaWdpdGFsT2NlYW4vcHJvdmlzaW9uT25EaWdpdGFsT2NlYW4udHMiLCJ3ZWJwYWNrOi8vYW5zaWJsZS1zZXR1cC1vd25jbG91ZC8uL3NyYy9wcm92aXNpb25SYW5jaGVyT1Mvb25BV1MvcHJvdmlzaW9uT25BV1MudHMiLCJ3ZWJwYWNrOi8vYW5zaWJsZS1zZXR1cC1vd25jbG91ZC8uL3NyYy9wcm92aXNpb25SYW5jaGVyT1MvUmFuY2hlck9TLnRzIiwi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eE9xQjtBQUNRO0FBSVU7QUFFeEMsSUFBTSxHQUFHLEdBQUcsc0JBQUcsRUFBRSxDQUFDO0FBQ2xCLElBQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUUzQix3Q0FBd0M7QUFDeEMsb0JBQW9CO0FBQ3BCLG1CQUFtQjtBQUNuQixnQ0FBZ0M7QUFDaEMsZ0ZBQWdGO0FBQ2hGLEtBQUs7QUFFTCxJQUFNLFNBQVMsR0FBZ0M7SUFDN0M7UUFDRSxJQUFJLEVBQUUsTUFBTTtRQUNaLElBQUksRUFBRSxhQUFhO1FBQ25CLE9BQU8sRUFBRSx3Q0FBd0M7UUFDakQsT0FBTyxFQUFFLFNBQVM7S0FDbkI7Q0FDRixDQUFDO0FBRUYsSUFBTSxhQUFhLEdBQUcsSUFBSSxlQUFlLEVBQUUsQ0FBQztBQUU1QyxDQUFDOzs7O29CQUNpQixxQkFBTSwwQkFBTyxDQUFDLFNBQVMsQ0FBQzs7Z0JBQWxDLE9BQU8sR0FBRyxTQUF3QjtnQkFDeEIscUJBQU0sYUFBYTt5QkFDaEMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUM7eUJBQzVCLFdBQVcsQ0FBQywyQkFBMkIsQ0FBQzs7Z0JBRnJDLE9BQU8sR0FBRyxTQUUyQjtnQkFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDOzs7O0tBQ3BDLENBQUMsRUFBRSxDQUFDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IG1vZHVsZVsnZGVmYXVsdCddIDpcblx0XHQoKSA9PiBtb2R1bGU7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsImNvbnN0IF9fV0VCUEFDS19OQU1FU1BBQ0VfT0JKRUNUX18gPSByZXF1aXJlKFwiY2FjXCIpOzsiLCJjb25zdCBfX1dFQlBBQ0tfTkFNRVNQQUNFX09CSkVDVF9fID0gcmVxdWlyZShcInByb21wdHNcIik7OyIsImNvbnN0IF9fV0VCUEFDS19OQU1FU1BBQ0VfT0JKRUNUX18gPSByZXF1aXJlKFwiZG8td3JhcHBlclwiKTs7IiwiY29uc3QgX19XRUJQQUNLX05BTUVTUEFDRV9PQkpFQ1RfXyA9IHJlcXVpcmUoXCJkb3RlbnZcIik7OyIsImltcG9ydCBkb3RlbnYgZnJvbSBcImRvdGVudlwiO1xuZG90ZW52LmNvbmZpZygpOyAvLyB3ZSBoYXZlIHRvIGluaXRpYWxpemUgZW52aXJvbm1lbnQgdmFycyBiZWZvcmUgd2UgY2FuIGFjdHVhbGx5IGFjY2VzcyBhdXRoIHRva2VuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpOiBzdHJpbmcge1xuICBjb25zdCBhdXRoVG9rZW4gPSBwcm9jZXNzLmVudi5ESUdJVEFMX09DRUFOX1BFUlNPTkFMX0FDQ0VTU19UT0tFTjtcblxuICBpZiAodHlwZW9mIGF1dGhUb2tlbiA9PT0gXCJzdHJpbmdcIikge1xuICAgIHJldHVybiBhdXRoVG9rZW47XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgXCJEaWdpdGFsIE9jZWFuIFBlcnNvbmFsIEFjY2VzcyBUb2tlbiBoYXMgbm90IGJlZW4gc2V0IGluIGAuZW52YC4gQ2Fubm90IGFjY2VzcyBkaWdpdGFsIG9jZWFuIEFQSVwiXG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IERpZ2l0YWxPY2VhbiBmcm9tIFwiZG8td3JhcHBlclwiO1xuaW1wb3J0IGdldEF1dGhUb2tlbiBmcm9tIFwiLi9nZXREaWdpdGFsT2NlYW5QZXJzb25hbEFjY2Vzc1Rva2VuXCI7XG5cbmNvbnN0IGF1dGhUb2tlbiA9IGdldEF1dGhUb2tlbigpO1xuY29uc3QgZGlnaXRhbE9jZWFuV3JhcHBlciA9IG5ldyBEaWdpdGFsT2NlYW4oYXV0aFRva2VuKTtcbi8qXG4gIGF1dGhUb2tlbiBhbmQgZGlnaXRhbE9jZWFuV3JhcHBlciBhcmUgc2luZ2xldG9ucyB0aGF0IGFyZSBnb2luZyB0byBwZXJzaXN0IGZvciB0aGUgbGlmZSBvZiB0aGUgcHJvZ3JhbS5cbiovXG5cbmV4cG9ydCBmdW5jdGlvbiBwcm92aXNpb25PbkRpZ2l0YWxPY2VhbihcbiAgY29uZmlnT2JqZWN0OiBvYmplY3Rcbik6IFByb21pc2U8ZGlnaXRhbE9jZWFuQ3JlYXRlRHJvcGxldFJlc3BvbnNlPiB7XG4gIGxldCByYW5jaGVySW5zdGFuY2U6IG9iamVjdCA9IHtcbiAgICBuYW1lOiBcImFub3RoZXJcIixcbiAgICByZWdpb246IFwibnljM1wiLFxuICAgIHNpemU6IFwicy0xdmNwdS0xZ2JcIixcbiAgICBpbWFnZTogXCJyYW5jaGVyb3NcIixcbiAgICBzc2hfa2V5czogWzI3NjA4OTg2LCAyODQ5NjQ1N10sXG4gICAgYmFja3VwczogZmFsc2UsXG4gICAgaXB2NjogdHJ1ZSxcbiAgICBwcml2YXRlX25ldHdvcmtpbmc6IG51bGwsXG4gICAgdXNlcl9kYXRhOiBudWxsLFxuICAgIHZvbHVtZXM6IG51bGwsXG4gICAgdGFnczogW10sXG4gIH07XG5cbiAgcmFuY2hlckluc3RhbmNlID0gT2JqZWN0LmFzc2lnbihyYW5jaGVySW5zdGFuY2UsIGNvbmZpZ09iamVjdCk7XG4gIHJldHVybiAoXG4gICAgZGlnaXRhbE9jZWFuV3JhcHBlci5kcm9wbGV0c1xuICAgICAgLy8gQHRzLWlnbm9yZTogdHlwZXMgZm9yIHJhbmNoZXJJbnN0YW5jZSBhcmUgbm90IGNvbXBhdGlibGVcbiAgICAgIC5jcmVhdGUocmFuY2hlckluc3RhbmNlKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgIH0pXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREcm9wbGV0SW5mb3JtYXRpb24oZHJvcGxldElEOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZGlnaXRhbE9jZWFuV3JhcHBlci5kcm9wbGV0cy5nZXRCeUlkKGRyb3BsZXRJRCk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgZGlnaXRhbE9jZWFuQ3JlYXRlRHJvcGxldFJlc3BvbnNlIHtcbiAgZHJvcGxldDoge1xuICAgIGlkOiBzdHJpbmc7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIG1lbW9yeUluTWVnYWJ5dGVzOiBiaWdpbnQ7XG4gICAgdmNwdXM6IGJpZ2ludDtcbiAgICBkaXNrOiBiaWdpbnQ7XG4gICAgbG9ja2VkOiBib29sZWFuO1xuICAgIGNyZWF0ZWRfYXQ6IHN0cmluZztcbiAgICBzdGF0dXM6IHN0cmluZztcbiAgICBiYWNrdXBfaWRzOiBBcnJheTxhbnk+O1xuICAgIHNuYXBzaG90X2lkczogQXJyYXk8YW55PjtcbiAgICBmZWF0dXJlczogQXJyYXk8YW55PjtcbiAgICByZWdpb246IG9iamVjdDtcbiAgICBpbWFnZTogb2JqZWN0O1xuICAgIHNpemU6IG9iamVjdDtcbiAgICBzaXplX3NsdWc6IHN0cmluZztcbiAgICBuZXR3b3Jrczoge1xuICAgICAgdjQ6IFtcbiAgICAgICAge1xuICAgICAgICAgIGlwX2FkZHJlc3M6IHN0cmluZztcbiAgICAgICAgICBuZXRtYXNrOiBzdHJpbmc7XG4gICAgICAgICAgZ2F0ZXdheTogc3RyaW5nIHwgbnVsbDtcbiAgICAgICAgICB0eXBlOiBcInByaXZhdGVcIiB8IFwicHVibGljXCI7XG4gICAgICAgIH1cbiAgICAgIF07XG4gICAgICB2NjogW1xuICAgICAgICB7XG4gICAgICAgICAgaXBfYWRkcmVzczogc3RyaW5nO1xuICAgICAgICAgIG5ldG1hc2s6IHN0cmluZztcbiAgICAgICAgICBnYXRld2F5OiBzdHJpbmcgfCBudWxsO1xuICAgICAgICAgIHR5cGU6IFwicHJpdmF0ZVwiIHwgXCJwdWJsaWNcIjtcbiAgICAgICAgfVxuICAgICAgXTtcbiAgICB9O1xuICAgIGtlcm5lbDogb2JqZWN0IHwgbnVsbDtcbiAgICBuZXh0X2JhY2t1cF93aW5kb3c6IG9iamVjdCB8IG51bGw7XG4gICAgdGFnczogQXJyYXk8YW55PjtcbiAgICB2b2x1bWVfaWRzOiBBcnJheTxhbnk+O1xuICAgIHZwY191dWlkOiBTdHJpbmc7XG4gIH07XG59XG4iLCIvLyBUT0RPOiBhY3R1YWxseSB3cml0ZSB0aGlzIGZ1bmN0aW9uLiBSaWdodCBub3cgaXQncyBqdXN0IGEgc3R1YlxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByb3Zpc2lvbk9uQVdTKCkge1xuICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgXCJTb3JyeSwgSSBoYXZlbid0IHdyaXR0ZW4gYW55IGNvZGUgdG8gcHJvdmlzaW9uIHJhbmNoZXIgb24gQVdTLlwiXG4gICk7XG59XG4iLCJpbXBvcnQge1xuICBwcm92aXNpb25PbkRpZ2l0YWxPY2VhbixcbiAgZGlnaXRhbE9jZWFuQ3JlYXRlRHJvcGxldFJlc3BvbnNlLFxuICBnZXREcm9wbGV0SW5mb3JtYXRpb24sXG59IGZyb20gXCIuL29uRGlnaXRhbE9jZWFuL3Byb3Zpc2lvbk9uRGlnaXRhbE9jZWFuXCI7XG5pbXBvcnQgeyBwcm92aXNpb25PbkFXUyB9IGZyb20gXCIuL29uQVdTL3Byb3Zpc2lvbk9uQVdTXCI7XG5pbXBvcnQgeyBpbnNwZWN0IH0gZnJvbSBcInV0aWxcIjtcblxuZXhwb3J0IGNsYXNzIFJhbmNoZXJPU0NvbmZpZyB7XG4gIC8vICFQcml2YXRlIE1lbWJlcnNcbiAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nID0gXCJcIjtcbiAgcHJpdmF0ZSBfaXB2NEFkZHJlc3NlczogU2V0PHN0cmluZz4gPSBuZXcgU2V0KCk7XG4gIHByaXZhdGUgX2lwdjZBZGRyZXNzZXM6IFNldDxzdHJpbmc+ID0gbmV3IFNldCgpO1xuICBwcml2YXRlIF9kcm9wbGV0SUQ6IHN0cmluZyA9IFwiXCI7XG5cbiAgLy8gIUNvbnN0cnVjdG9yXG4gIGNvbnN0cnVjdG9yKCkge30gLy9JJ20gbGVhdmluZyB0aGUgY29uc3RydWN0b3IgYmxhbmsgYmVjYXVzZSB3ZSdsbCBpbml0aWFsaXplIGFsbCB2YXJpYWJsZXMgd2l0aCBjaGFpbmFibGUgc2V0dGVyc1xuXG4gIC8vICFHZXR0ZXJzIGFuZCBTZXR0ZXJzXG4gIGdldCBuYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cbiAgc2V0IG5hbWUobmV3TmFtZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmFtZSA9IG5ld05hbWU7XG4gICAgLy8gVE9ETzogc2FuaXRpemUgY2hhcmFjdGVycyB0aGF0IGRvbid0IGJlbG9uZyBpbiBkaWdpdGFsIG9jZWFuIGRyb3BsZXQgbmFtZXNcbiAgICAvLyBUT0RPOiBpZiBkcm9wbGV0IGhhcyBhbHJlYWR5IGJlZW4gcHJvdmlzaW9uZWQgd2l0aCBhIG5hbWUsIHNlZSBpZiB0aGUgZHJvcGxldCdzIG5hbWUgY2FuIGFjdHVhbGx5IGJlIHVwZGF0ZWQuIElmIGl0IGNhbiwgdGhlbiB1cGRhdGUgaXQuIElmIG5vdCwgdGhyb3cgYW4gZXJyb3IuXG4gIH1cblxuICBnZXQgaXB2NEFkZHJlc3NlcygpOiBBcnJheTxzdHJpbmc+IHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLl9pcHY0QWRkcmVzc2VzKTtcbiAgfVxuXG4gIHNldCBpcHY0QWRkcmVzc2VzKGlwdjRBZGRyZXNzZXM6IEFycmF5PHN0cmluZz4pIHtcbiAgICB0aGlzLl9pcHY0QWRkcmVzc2VzID0gbmV3IFNldChpcHY0QWRkcmVzc2VzKTtcbiAgICAvL1RPRE86IGl0ZXJhdGUgdGhyb3VnaCB0aGUgc2V0IGFuZCByZW1vdmUgYW55IGlwIGFkZHJlc3NlcyB0aGF0IGFyZSBub3QgdmFsaWQuXG4gIH1cblxuICBnZXQgaXB2NkFkZHJlc3NlcygpOiBBcnJheTxzdHJpbmc+IHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLl9pcHY2QWRkcmVzc2VzKTtcbiAgfVxuXG4gIHNldCBpcHY2QWRkcmVzc2VzKGlwdjZBZGRyZXNzZXM6IEFycmF5PHN0cmluZz4pIHtcbiAgICB0aGlzLl9pcHY2QWRkcmVzc2VzID0gbmV3IFNldChpcHY2QWRkcmVzc2VzKTtcbiAgICAvL1RPRE86IGl0ZXJhdGUgdGhyb3VnaCB0aGUgc2V0IGFuZCByZW1vdmUgYW55IGlwIGFkZHJlc3NlcyB0aGF0IGFyZSBub3QgdmFsaWQuXG4gIH1cblxuICBnZXQgZHJvcGxldElEKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2Ryb3BsZXRJRDtcbiAgfVxuICAvKlxuICAgIG5vdGUgdGhhdCB0aGVyZSBpcyBubyBzZXR0ZXIgZm9yIGRyb3BsZXRJRCwgYW5kIHRoZSBfZHJvcGxldElEIHByb3BlcnR5IGlzIHByaXZhdGUuIFRoaXMgaXMgYmVjYXVzZSB3ZSBkbyBOT1Qgd2FudCB0aGUgZHJvcGxldElEIHRvIGJlIHNldCBieSBhbnkgY29kZSBvdXRzaWRlIG9mIHRoaXMgY2xhc3MuXG4gICovXG5cbiAgLy8gIUFjY2Vzc29yIE1ldGhvZHNcbiAgc2V0TmFtZShuZXdOYW1lOiBzdHJpbmcpOiB0aGlzIHtcbiAgICB0aGlzLm5hbWUgPSBuZXdOYW1lO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgYWRkSXB2NEFkZHJlc3MoaXB2NEFkZHJlc3M6IHN0cmluZyk6IHRoaXMge1xuICAgIGxldCBhZGRyZXNzQXJyYXkgPSB0aGlzLmlwdjRBZGRyZXNzZXM7XG4gICAgYWRkcmVzc0FycmF5LnB1c2goaXB2NEFkZHJlc3MpO1xuICAgIHRoaXMuaXB2NEFkZHJlc3NlcyA9IGFkZHJlc3NBcnJheTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJlbW92ZUlwdjRBZGRyZXNzKGlwdjRBZGRyZXNzOiBzdHJpbmcpOiB0aGlzIHtcbiAgICB0aGlzLmlwdjRBZGRyZXNzZXMgPSB0aGlzLmlwdjRBZGRyZXNzZXMuZmlsdGVyKFxuICAgICAgKGFkZHJlc3MpID0+IGFkZHJlc3MgIT09IGlwdjRBZGRyZXNzXG4gICAgKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGFkZElwdjZBZGRyZXNzKGlwdjZBZGRyZXNzOiBzdHJpbmcpOiB0aGlzIHtcbiAgICBsZXQgYWRkcmVzc0FycmF5ID0gdGhpcy5pcHY2QWRkcmVzc2VzO1xuICAgIGFkZHJlc3NBcnJheS5wdXNoKGlwdjZBZGRyZXNzKTtcbiAgICB0aGlzLmlwdjZBZGRyZXNzZXMgPSBhZGRyZXNzQXJyYXk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZW1vdmVJcHY2QWRkcmVzcyhpcHY2QWRkcmVzczogc3RyaW5nKTogdGhpcyB7XG4gICAgdGhpcy5pcHY2QWRkcmVzc2VzID0gdGhpcy5pcHY2QWRkcmVzc2VzLmZpbHRlcihcbiAgICAgIChhZGRyZXNzKSA9PiBhZGRyZXNzICE9PSBpcHY2QWRkcmVzc1xuICAgICk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyAhU3Vicm91dGluZXMgKHRoZXNlIHNob3VsZCBiZSBwcml2YXRlKVxuICBwcml2YXRlIHBhcnNlRGlnaXRhbE9jZWFuRHJvcGxldFJlc3BvbnNlKFxuICAgIHJlc3BvbnNlOiBkaWdpdGFsT2NlYW5DcmVhdGVEcm9wbGV0UmVzcG9uc2VcbiAgKTogdm9pZCB7XG4gICAgdHJ5IHtcbiAgICAgIHJlc3BvbnNlLmRyb3BsZXQubmV0d29ya3MudjQuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBpZiAoaXRlbS50eXBlID09PSBcInB1YmxpY1wiKSB7XG4gICAgICAgICAgdGhpcy5hZGRJcHY0QWRkcmVzcyhpdGVtLmlwX2FkZHJlc3MpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfVxuICAgIHRoaXMuX2Ryb3BsZXRJRCA9IHJlc3BvbnNlLmRyb3BsZXQuaWQ7XG4gIH1cblxuICBwcml2YXRlIHBvbGxGb3JJUEFkZHJlc3NlcyhcbiAgICBtYXhpbXVtTnVtYmVyT2ZTZWNvbmRzVG9Qb2xsOiBudW1iZXIgPSAtMVxuICApOiBQcm9taXNlPHRoaXM+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgLypcbiAgICAgICAgVGhpcyBmdW5jdGlvbiByZWFsbHkgc2hvdWxkIG5vdCBiZSBuZWNlc3NhcnkuIFBvbGxpbmcgaXMgZ2VuZXJhbGx5IGEgYmFkIGlkZWEuIEhvd2V2ZXIsIHByb3Zpc2lvbk9uRGlnaXRhbE9jZWFuLmRyb3BsZXRzLmNyZWF0ZSgpIGRvZXNuJ3QgYWN0dWFsbHkgcmV0dXJuIHRoZSBkcm9wbGV0J3MgSVAgYWRkcmVzcy4gVGhpcyBpcyBiZWNhdXNlIGl0IHRha2VzIH41LTEwIHNlY29uZHMgZm9yIHRoZSBkcm9wbGV0IHRvIGFjdHVhbGx5IGFjcXVpcmUgYW4gSVAgYWRkcmVzcy4gU28sIGluIHRoaXMgcGFydGljdWxhciBjYXNlLCB3ZSBuZWVkIHRvIHBvbGwgdW50aWwgd2UgZ2V0IGFuIElQIGFkZHJlc3MuXG5cbiAgICAgICAgSW4gdGhlIGZpcnN0IHBvbGwsIHdlIGNoZWNrIHJlc3BvbnNlLmZlYXR1cmVzIHRvIHNlZSBpZiBpdCBjb250YWlucyBcImlwdjZcIi4gSWYgc28sIHdlIGNvbnRpbnVlIHRvIHBvbGwgdW50aWwgd2UgaGF2ZSByZWNlaXZlZCBhdCBsZWFzdCAxIGlwdjQgYW5kIDEgaXB2NiBhZGRyZXNzLCBvciB1bnRpbCB0aGUgbnVtYmVyIG9mIHNlY29uZHMgdG8gcG9sbCBpcyB1cC5cblxuICAgICAgICBJZiB0aGUgbnVtYmVyIG9mIHNlY29uZHMgdG8gcG9sbCBpcyBsZXNzIHRoYW4gemVybywgdGhlbiB3ZSB3aWxsIHBvbGwgaW5kZWZpbml0ZWx5IHVudGlsIHdlIGdldCBhdCBsZWFzdCAxIGlwdjQgYWRkcmVzcywgYW5kIGlmIGlwdjYgaXMgZW5hYmxlZCwgMSBpcHY2IGFkZHJlc3NcbiAgICAgICovXG4gICAgICBsZXQgaXB2NEFkZHJlc3NlczogQXJyYXk8c3RyaW5nPiA9IFtdO1xuICAgICAgbGV0IGlwdjZBZGRyZXNzZXM6IEFycmF5PHN0cmluZz4gPSBbXTtcbiAgICAgIGxldCBoYXNJcHY2OiBib29sZWFuID0gdHJ1ZTtcbiAgICAgIGxldCBudW1iZXJPZlRpbWVzVG9Qb2xsUGVyU2Vjb25kOiBudW1iZXIgPSAxO1xuICAgICAgbGV0IG51bWJlck9mVGltZXNUb1BvbGw6IG51bWJlciA9XG4gICAgICAgIG1heGltdW1OdW1iZXJPZlNlY29uZHNUb1BvbGwgPD0gMFxuICAgICAgICAgID8gLTFcbiAgICAgICAgICA6IE1hdGguY2VpbChcbiAgICAgICAgICAgICAgbnVtYmVyT2ZUaW1lc1RvUG9sbFBlclNlY29uZCAqIG1heGltdW1OdW1iZXJPZlNlY29uZHNUb1BvbGxcbiAgICAgICAgICAgICk7XG4gICAgICBsZXQgcG9sbEludGVydmFsOiBOb2RlSlMuVGltZW91dDtcbiAgICAgIC8qXG4gICAgICAgIElGIG51bWJlciBvZiB0aW1lcyB0byBwb2xsIGlzIGxlc3MgdGhhbiB6ZXJvLCBwb2xsIGluZGVmaW5pdGVseS5cbiAgICAgICovXG4gICAgICBsZXQgcG9sbCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgLy90b2RvOiBhZGQgc29tZSBraW5kIG9mIENMSSBzcGlubmVyIHNvIHRoYXQgaXQncyBjbGVhciB0aGF0IGEgcG9sbGluZyBsb29wIGlzIHJ1bm5pbmdcbiAgICAgICAgY29uc3QgcmVzcG9uc2U6IGRpZ2l0YWxPY2VhbkNyZWF0ZURyb3BsZXRSZXNwb25zZSA9IGF3YWl0IGdldERyb3BsZXRJbmZvcm1hdGlvbihcbiAgICAgICAgICB0aGlzLmRyb3BsZXRJRFxuICAgICAgICApO1xuICAgICAgICBoYXNJcHY2ID1cbiAgICAgICAgICByZXNwb25zZS5kcm9wbGV0LmZlYXR1cmVzLmluY2x1ZGVzKFwiaXB2NlwiKSAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IHRydWVcbiAgICAgICAgICAgIDogZmFsc2U7XG4gICAgICAgIHJlc3BvbnNlLmRyb3BsZXQubmV0d29ya3MudjQuZm9yRWFjaCgobmV0d29yaykgPT4ge1xuICAgICAgICAgIGlmIChuZXR3b3JrLnR5cGUgPT09IFwicHVibGljXCIpIHtcbiAgICAgICAgICAgIGlwdjRBZGRyZXNzZXMucHVzaChuZXR3b3JrLmlwX2FkZHJlc3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChoYXNJcHY2KSB7XG4gICAgICAgICAgcmVzcG9uc2UuZHJvcGxldC5uZXR3b3Jrcy52Ni5mb3JFYWNoKChuZXR3b3JrKSA9PiB7XG4gICAgICAgICAgICBpZiAobmV0d29yay50eXBlID09PSBcInB1YmxpY1wiKSB7XG4gICAgICAgICAgICAgIGlwdjZBZGRyZXNzZXMucHVzaChuZXR3b3JrLmlwX2FkZHJlc3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlwdjRBZGRyZXNzZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChoYXNJcHY2KSB7XG4gICAgICAgICAgICBpZiAoaXB2NkFkZHJlc3Nlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgIG51bWJlck9mVGltZXNUb1BvbGwgPSAwO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbnVtYmVyT2ZUaW1lc1RvUG9sbC0tO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBudW1iZXJPZlRpbWVzVG9Qb2xsID0gMDtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbnVtYmVyT2ZUaW1lc1RvUG9sbC0tO1xuICAgICAgICB9XG4gICAgICAgIGNoZWNrSWZTaG91bGRTdG9wUG9sbGluZygpO1xuICAgICAgfTtcblxuICAgICAgZnVuY3Rpb24gY2hlY2tJZlNob3VsZFN0b3BQb2xsaW5nKCkge1xuICAgICAgICBpZiAobnVtYmVyT2ZUaW1lc1RvUG9sbCA9PSAwKSB7XG4gICAgICAgICAgY2xlYXJJbnRlcnZhbChwb2xsSW50ZXJ2YWwpO1xuICAgICAgICAgIGNoZWNrSWZJUEFkZHJlc3Nlc09idGFpbmVkKHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGNoZWNrSWZJUEFkZHJlc3Nlc09idGFpbmVkID0gKHJlc29sdmU6IGFueSwgcmVqZWN0OiBhbnkpID0+IHtcbiAgICAgICAgaWYgKGlwdjRBZGRyZXNzZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlwdjRBZGRyZXNzZXMuZm9yRWFjaCgoYWRkcmVzcykgPT4ge1xuICAgICAgICAgICAgdGhpcy5hZGRJcHY0QWRkcmVzcyhhZGRyZXNzKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAoaGFzSXB2Nikge1xuICAgICAgICAgICAgaWYgKGlwdjZBZGRyZXNzZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICBpcHY2QWRkcmVzc2VzLmZvckVhY2goKGFkZHJlc3MpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZElwdjZBZGRyZXNzKGFkZHJlc3MpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlamVjdCh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzb2x2ZSh0aGlzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVqZWN0KHRoaXMpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBmdW5jdGlvbiBwb2xsT25JbnRlcnZhbCgpOiBOb2RlSlMuVGltZW91dCB7XG4gICAgICAgIGxldCBtaWxsaXNlY29uZHNCZXR3ZWVuSW50ZXJ2YWxzID0gbnVtYmVyT2ZUaW1lc1RvUG9sbFBlclNlY29uZCAqIDEwMDA7XG4gICAgICAgIHJldHVybiBzZXRJbnRlcnZhbChwb2xsLCBtaWxsaXNlY29uZHNCZXR3ZWVuSW50ZXJ2YWxzKTtcbiAgICAgIH1cblxuICAgICAgcG9sbEludGVydmFsID0gcG9sbE9uSW50ZXJ2YWwoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIHByb3Zpc2lvbk9uKGNsb3VkOiBjbG91ZFByb3ZpZGVycyk6IFByb21pc2U8dGhpcz4ge1xuICAgIHN3aXRjaCAoK2Nsb3VkKSB7XG4gICAgICAvKlxuICAgICAgICBhcmd1bWVudCAnY2xvdWQnIGhhcyB0byBiZSBjYXN0IHRvIGEgbnVtYmVyIGluIG9yZGVyIHRvIGJlIGNvbXBhcmFibGUgaW4gYSBzd2l0Y2ggc3RhdGVtZW50LlxuICAgICAgICBUaGlzIHdvcmtzIGJlY2F1c2UgZW51bXMgYXJlIGFjdHVhbGx5IGEgdHlwZSBvZiBudW1iZXIgLi4uIHRoZSBuYW1lIG9mIGVhY2ggZW51bWVyYWJsZSB2YWx1ZSBpcyBqdXN0IHN5bnRhY3RpYyBzdWdhci5cbiAgICAgICAgZm9yIG1vcmUgaW5mbyBzZWU6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzI3NzQ3NDM3L3R5cGVzY3JpcHQtZW51bS1zd2l0Y2gtbm90LXdvcmtpbmdcbiAgICAgICovXG4gICAgICBjYXNlIGNsb3VkUHJvdmlkZXJzLmRpZ2l0YWxPY2VhbjpcbiAgICAgICAgbGV0IGNvbmZpZyA9IHsgbmFtZTogdGhpcy5uYW1lIH07XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlOiBkaWdpdGFsT2NlYW5DcmVhdGVEcm9wbGV0UmVzcG9uc2UgPSBhd2FpdCBwcm92aXNpb25PbkRpZ2l0YWxPY2VhbihcbiAgICAgICAgICBjb25maWdcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5wYXJzZURpZ2l0YWxPY2VhbkRyb3BsZXRSZXNwb25zZShyZXNwb25zZSk7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnBvbGxGb3JJUEFkZHJlc3NlcygpOyAvL25vdGUgdGhhdCB3ZSBuZWVkIHRvIHBvbGwgZm9yIGlwIGFkZHJlc3NlcyB1bnRpbCB3ZSByZWNlaXZlIHRoZW0gYmVjYXVzZSByZXNwb25zZSBkb2VzIG5vdCBhY3R1YWxseSBjb250YWluIElQIGFkZHJlc3Nlcy5cbiAgICAgIGNhc2UgY2xvdWRQcm92aWRlcnMuYXdzOlxuICAgICAgICBhd2FpdCBwcm92aXNpb25PbkFXUygpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAnJHtjbG91ZH0gaXNuXFwndCBhIHN1cHBvcnRlZCBjbG91ZCBwcm92aWRlci4gWW91IG11c3Qgc3BlY2lmeSBlaXRoZXIgXCJhd3NcIiBvciBcImRpZ2l0YWxPY2VhblwiLidcbiAgICAgICAgKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGVudW0gY2xvdWRQcm92aWRlcnMge1xuICBkaWdpdGFsT2NlYW4sXG4gIGF3cyxcbn1cbiIsImltcG9ydCBjYWMgZnJvbSBcImNhY1wiO1xuaW1wb3J0IHByb21wdHMgZnJvbSBcInByb21wdHNcIjtcbmltcG9ydCB7XG4gIFJhbmNoZXJPU0NvbmZpZyxcbiAgY2xvdWRQcm92aWRlcnMsXG59IGZyb20gXCIuL3Byb3Zpc2lvblJhbmNoZXJPUy9SYW5jaGVyT1NcIjtcblxuY29uc3QgY2xpID0gY2FjKCk7XG5jb25zdCBwYXJzZWQgPSBjbGkucGFyc2UoKTtcblxuLy8gY29uc3QgcHJvbXB0c0NvbmZpZzogUHJvbXB0T2JqZWN0ID0ge1xuLy8gICB0eXBlOiBcIm51bWJlclwiLFxuLy8gICBuYW1lOiBcInZhbHVlXCIsXG4vLyAgIG1lc3NhZ2U6IFwiaG93IG9sZCBhcmUgeW91XCIsXG4vLyAgIHZhbGlkYXRlOiAodmFsdWU6IG51bWJlcikgPT4gKHZhbHVlIDwgMTggPyBgTmlnaHRjbHViIGlzIDE4KyBvbmx5YCA6IHRydWUpLFxuLy8gfTtcblxuY29uc3QgcXVlc3Rpb25zOiBBcnJheTxwcm9tcHRzLlByb21wdE9iamVjdD4gPSBbXG4gIHtcbiAgICB0eXBlOiBcInRleHRcIixcbiAgICBuYW1lOiBcImRyb3BsZXROYW1lXCIsXG4gICAgbWVzc2FnZTogXCJXaGF0IGRvIHlvdSB3YW50IHRvIG5hbWUgeW91ciBkcm9wbGV0P1wiLFxuICAgIGluaXRpYWw6IFwicmFuY2hlclwiLFxuICB9LFxuXTtcblxuY29uc3QgcmFuY2hlckNvbmZpZyA9IG5ldyBSYW5jaGVyT1NDb25maWcoKTtcblxuKGFzeW5jICgpID0+IHtcbiAgY29uc3QgYW5zd2VycyA9IGF3YWl0IHByb21wdHMocXVlc3Rpb25zKTtcbiAgY29uc3QgZHJvcGxldCA9IGF3YWl0IHJhbmNoZXJDb25maWdcbiAgICAuc2V0TmFtZShhbnN3ZXJzLmRyb3BsZXROYW1lKVxuICAgIC5wcm92aXNpb25PbihjbG91ZFByb3ZpZGVycy5kaWdpdGFsT2NlYW4pO1xuICBjb25zb2xlLmxvZyhkcm9wbGV0LmlwdjRBZGRyZXNzZXMpO1xuICBjb25zb2xlLmxvZyhkcm9wbGV0LmlwdjZBZGRyZXNzZXMpO1xufSkoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=