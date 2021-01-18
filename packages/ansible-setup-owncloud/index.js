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
;// CONCATENATED MODULE: ./src/provisionRancherOnDigitalOcean/getDigitalOceanPersonalAccessToken.ts

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

;// CONCATENATED MODULE: ./src/provisionRancherOnDigitalOcean/provisionOnDigitalOcean.ts


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

;// CONCATENATED MODULE: ./src/provisionRancherOnDigitalOcean/provisionOnAWS.ts
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

;// CONCATENATED MODULE: ./src/provisionRancherOnDigitalOcean/RancherOSConfig.ts
var RancherOSConfig_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var RancherOSConfig_generator = (undefined && undefined.__generator) || function (thisArg, body) {
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
            var poll = function () { return RancherOSConfig_awaiter(_this, void 0, void 0, function () {
                var response;
                return RancherOSConfig_generator(this, function (_a) {
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
        return RancherOSConfig_awaiter(this, void 0, void 0, function () {
            var _a, config, response;
            return RancherOSConfig_generator(this, function (_b) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbnNpYmxlLXNldHVwLW93bmNsb3VkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Fuc2libGUtc2V0dXAtb3duY2xvdWQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYW5zaWJsZS1zZXR1cC1vd25jbG91ZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYW5zaWJsZS1zZXR1cC1vd25jbG91ZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Fuc2libGUtc2V0dXAtb3duY2xvdWQvZXh0ZXJuYWwgXCJjYWNcIiIsIndlYnBhY2s6Ly9hbnNpYmxlLXNldHVwLW93bmNsb3VkL2V4dGVybmFsIFwicHJvbXB0c1wiIiwid2VicGFjazovL2Fuc2libGUtc2V0dXAtb3duY2xvdWQvZXh0ZXJuYWwgXCJkby13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vYW5zaWJsZS1zZXR1cC1vd25jbG91ZC9leHRlcm5hbCBcImRvdGVudlwiIiwid2VicGFjazovL2Fuc2libGUtc2V0dXAtb3duY2xvdWQvLi9zcmMvcHJvdmlzaW9uUmFuY2hlck9uRGlnaXRhbE9jZWFuL2dldERpZ2l0YWxPY2VhblBlcnNvbmFsQWNjZXNzVG9rZW4udHMiLCJ3ZWJwYWNrOi8vYW5zaWJsZS1zZXR1cC1vd25jbG91ZC8uL3NyYy9wcm92aXNpb25SYW5jaGVyT25EaWdpdGFsT2NlYW4vcHJvdmlzaW9uT25EaWdpdGFsT2NlYW4udHMiLCJ3ZWJwYWNrOi8vYW5zaWJsZS1zZXR1cC1vd25jbG91ZC8uL3NyYy9wcm92aXNpb25SYW5jaGVyT25EaWdpdGFsT2NlYW4vcHJvdmlzaW9uT25BV1MudHMiLCJ3ZWJwYWNrOi8vYW5zaWJsZS1zZXR1cC1vd25jbG91ZC8uL3NyYy9wcm92aXNpb25SYW5jaGVyT25EaWdpdGFsT2NlYW4vUmFuY2hlck9TQ29uZmlnLnRzIiwid2VicGFjazovL2Fuc2libGUtc2V0dXAtb3duY2xvdWQvLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxnQ0FBZ0MsWUFBWTtXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHNGOzs7Ozs7QUNBQSxNQUFNLDRCQUE0QixtQjs7O0FDQWxDLE1BQU0sZ0NBQTRCLHVCOzs7QUNBbEMsTUFBTSxtQ0FBNEIsMEI7OztBQ0FsQyxNQUFNLCtCQUE0QixzQjs7O0FDQU47QUFDNUIsZ0NBQWEsRUFBRSxDQUFDLENBQUMsa0ZBQWtGO0FBRW5HLDZCQUFlLFNBQVM7SUFDdEIsSUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQ0FBbUMsQ0FBQztJQUVsRSxJQUFJLE9BQU8sU0FBUyxLQUFLLFFBQVEsRUFBRTtRQUNqQyxPQUFPLFNBQVMsQ0FBQztLQUNsQjtTQUFNO1FBQ0wsTUFBTSxJQUFJLEtBQUssQ0FDYixpR0FBaUcsQ0FDbEcsQ0FBQztLQUNIO0FBQ0gsQ0FBQzs7O0FDYnFDO0FBQzBCO0FBRWhFLElBQU0sU0FBUyxHQUFHLGtDQUFZLEVBQUUsQ0FBQztBQUNqQyxJQUFNLG1CQUFtQixHQUFHLElBQUksK0JBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUN4RDs7RUFFRTtBQUVLLFNBQVMsdUJBQXVCLENBQ3JDLFlBQW9CO0lBRXBCLElBQUksZUFBZSxHQUFXO1FBQzVCLElBQUksRUFBRSxTQUFTO1FBQ2YsTUFBTSxFQUFFLE1BQU07UUFDZCxJQUFJLEVBQUUsYUFBYTtRQUNuQixLQUFLLEVBQUUsV0FBVztRQUNsQixRQUFRLEVBQUUsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO1FBQzlCLE9BQU8sRUFBRSxLQUFLO1FBQ2QsSUFBSSxFQUFFLElBQUk7UUFD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Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeE9xQjtBQUNRO0FBSTRCO0FBRTFELElBQU0sR0FBRyxHQUFHLHNCQUFHLEVBQUUsQ0FBQztBQUNsQixJQUFNLE1BQU0sR0FBRyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUM7QUFFM0Isd0NBQXdDO0FBQ3hDLG9CQUFvQjtBQUNwQixtQkFBbUI7QUFDbkIsZ0NBQWdDO0FBQ2hDLGdGQUFnRjtBQUNoRixLQUFLO0FBRUwsSUFBTSxTQUFTLEdBQWdDO0lBQzdDO1FBQ0UsSUFBSSxFQUFFLE1BQU07UUFDWixJQUFJLEVBQUUsYUFBYTtRQUNuQixPQUFPLEVBQUUsd0NBQXdDO1FBQ2pELE9BQU8sRUFBRSxTQUFTO0tBQ25CO0NBQ0YsQ0FBQztBQUVGLElBQU0sYUFBYSxHQUFHLElBQUksZUFBZSxFQUFFLENBQUM7QUFFNUMsQ0FBQzs7OztvQkFDaUIscUJBQU0sMEJBQU8sQ0FBQyxTQUFTLENBQUM7O2dCQUFsQyxPQUFPLEdBQUcsU0FBd0I7Z0JBQ3hCLHFCQUFNLGFBQWE7eUJBQ2hDLE9BQU8sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO3lCQUM1QixXQUFXLENBQUMsMkJBQTJCLENBQUM7O2dCQUZyQyxPQUFPLEdBQUcsU0FFMkI7Z0JBQzNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQzs7OztLQUNwQyxDQUFDLEVBQUUsQ0FBQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiBtb2R1bGVbJ2RlZmF1bHQnXSA6XG5cdFx0KCkgPT4gbW9kdWxlO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCJjb25zdCBfX1dFQlBBQ0tfTkFNRVNQQUNFX09CSkVDVF9fID0gcmVxdWlyZShcImNhY1wiKTs7IiwiY29uc3QgX19XRUJQQUNLX05BTUVTUEFDRV9PQkpFQ1RfXyA9IHJlcXVpcmUoXCJwcm9tcHRzXCIpOzsiLCJjb25zdCBfX1dFQlBBQ0tfTkFNRVNQQUNFX09CSkVDVF9fID0gcmVxdWlyZShcImRvLXdyYXBwZXJcIik7OyIsImNvbnN0IF9fV0VCUEFDS19OQU1FU1BBQ0VfT0JKRUNUX18gPSByZXF1aXJlKFwiZG90ZW52XCIpOzsiLCJpbXBvcnQgZG90ZW52IGZyb20gXCJkb3RlbnZcIjtcbmRvdGVudi5jb25maWcoKTsgLy8gd2UgaGF2ZSB0byBpbml0aWFsaXplIGVudmlyb25tZW50IHZhcnMgYmVmb3JlIHdlIGNhbiBhY3R1YWxseSBhY2Nlc3MgYXV0aCB0b2tlblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKTogc3RyaW5nIHtcbiAgY29uc3QgYXV0aFRva2VuID0gcHJvY2Vzcy5lbnYuRElHSVRBTF9PQ0VBTl9QRVJTT05BTF9BQ0NFU1NfVE9LRU47XG5cbiAgaWYgKHR5cGVvZiBhdXRoVG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gYXV0aFRva2VuO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgIFwiRGlnaXRhbCBPY2VhbiBQZXJzb25hbCBBY2Nlc3MgVG9rZW4gaGFzIG5vdCBiZWVuIHNldCBpbiBgLmVudmAuIENhbm5vdCBhY2Nlc3MgZGlnaXRhbCBvY2VhbiBBUElcIlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBEaWdpdGFsT2NlYW4gZnJvbSBcImRvLXdyYXBwZXJcIjtcbmltcG9ydCBnZXRBdXRoVG9rZW4gZnJvbSBcIi4vZ2V0RGlnaXRhbE9jZWFuUGVyc29uYWxBY2Nlc3NUb2tlblwiO1xuXG5jb25zdCBhdXRoVG9rZW4gPSBnZXRBdXRoVG9rZW4oKTtcbmNvbnN0IGRpZ2l0YWxPY2VhbldyYXBwZXIgPSBuZXcgRGlnaXRhbE9jZWFuKGF1dGhUb2tlbik7XG4vKlxuICBhdXRoVG9rZW4gYW5kIGRpZ2l0YWxPY2VhbldyYXBwZXIgYXJlIHNpbmdsZXRvbnMgdGhhdCBhcmUgZ29pbmcgdG8gcGVyc2lzdCBmb3IgdGhlIGxpZmUgb2YgdGhlIHByb2dyYW0uXG4qL1xuXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlzaW9uT25EaWdpdGFsT2NlYW4oXG4gIGNvbmZpZ09iamVjdDogb2JqZWN0XG4pOiBQcm9taXNlPGRpZ2l0YWxPY2VhbkNyZWF0ZURyb3BsZXRSZXNwb25zZT4ge1xuICBsZXQgcmFuY2hlckluc3RhbmNlOiBvYmplY3QgPSB7XG4gICAgbmFtZTogXCJhbm90aGVyXCIsXG4gICAgcmVnaW9uOiBcIm55YzNcIixcbiAgICBzaXplOiBcInMtMXZjcHUtMWdiXCIsXG4gICAgaW1hZ2U6IFwicmFuY2hlcm9zXCIsXG4gICAgc3NoX2tleXM6IFsyNzYwODk4NiwgMjg0OTY0NTddLFxuICAgIGJhY2t1cHM6IGZhbHNlLFxuICAgIGlwdjY6IHRydWUsXG4gICAgcHJpdmF0ZV9uZXR3b3JraW5nOiBudWxsLFxuICAgIHVzZXJfZGF0YTogbnVsbCxcbiAgICB2b2x1bWVzOiBudWxsLFxuICAgIHRhZ3M6IFtdLFxuICB9O1xuXG4gIHJhbmNoZXJJbnN0YW5jZSA9IE9iamVjdC5hc3NpZ24ocmFuY2hlckluc3RhbmNlLCBjb25maWdPYmplY3QpO1xuICByZXR1cm4gKFxuICAgIGRpZ2l0YWxPY2VhbldyYXBwZXIuZHJvcGxldHNcbiAgICAgIC8vIEB0cy1pZ25vcmU6IHR5cGVzIGZvciByYW5jaGVySW5zdGFuY2UgYXJlIG5vdCBjb21wYXRpYmxlXG4gICAgICAuY3JlYXRlKHJhbmNoZXJJbnN0YW5jZSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICB9KVxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RHJvcGxldEluZm9ybWF0aW9uKGRyb3BsZXRJRDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIGRpZ2l0YWxPY2VhbldyYXBwZXIuZHJvcGxldHMuZ2V0QnlJZChkcm9wbGV0SUQpO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIGRpZ2l0YWxPY2VhbkNyZWF0ZURyb3BsZXRSZXNwb25zZSB7XG4gIGRyb3BsZXQ6IHtcbiAgICBpZDogc3RyaW5nO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBtZW1vcnlJbk1lZ2FieXRlczogYmlnaW50O1xuICAgIHZjcHVzOiBiaWdpbnQ7XG4gICAgZGlzazogYmlnaW50O1xuICAgIGxvY2tlZDogYm9vbGVhbjtcbiAgICBjcmVhdGVkX2F0OiBzdHJpbmc7XG4gICAgc3RhdHVzOiBzdHJpbmc7XG4gICAgYmFja3VwX2lkczogQXJyYXk8YW55PjtcbiAgICBzbmFwc2hvdF9pZHM6IEFycmF5PGFueT47XG4gICAgZmVhdHVyZXM6IEFycmF5PGFueT47XG4gICAgcmVnaW9uOiBvYmplY3Q7XG4gICAgaW1hZ2U6IG9iamVjdDtcbiAgICBzaXplOiBvYmplY3Q7XG4gICAgc2l6ZV9zbHVnOiBzdHJpbmc7XG4gICAgbmV0d29ya3M6IHtcbiAgICAgIHY0OiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpcF9hZGRyZXNzOiBzdHJpbmc7XG4gICAgICAgICAgbmV0bWFzazogc3RyaW5nO1xuICAgICAgICAgIGdhdGV3YXk6IHN0cmluZyB8IG51bGw7XG4gICAgICAgICAgdHlwZTogXCJwcml2YXRlXCIgfCBcInB1YmxpY1wiO1xuICAgICAgICB9XG4gICAgICBdO1xuICAgICAgdjY6IFtcbiAgICAgICAge1xuICAgICAgICAgIGlwX2FkZHJlc3M6IHN0cmluZztcbiAgICAgICAgICBuZXRtYXNrOiBzdHJpbmc7XG4gICAgICAgICAgZ2F0ZXdheTogc3RyaW5nIHwgbnVsbDtcbiAgICAgICAgICB0eXBlOiBcInByaXZhdGVcIiB8IFwicHVibGljXCI7XG4gICAgICAgIH1cbiAgICAgIF07XG4gICAgfTtcbiAgICBrZXJuZWw6IG9iamVjdCB8IG51bGw7XG4gICAgbmV4dF9iYWNrdXBfd2luZG93OiBvYmplY3QgfCBudWxsO1xuICAgIHRhZ3M6IEFycmF5PGFueT47XG4gICAgdm9sdW1lX2lkczogQXJyYXk8YW55PjtcbiAgICB2cGNfdXVpZDogU3RyaW5nO1xuICB9O1xufVxuIiwiLy8gVE9ETzogYWN0dWFsbHkgd3JpdGUgdGhpcyBmdW5jdGlvbi4gUmlnaHQgbm93IGl0J3MganVzdCBhIHN0dWJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwcm92aXNpb25PbkFXUygpIHtcbiAgdGhyb3cgbmV3IEVycm9yKFxuICAgIFwiU29ycnksIEkgaGF2ZW4ndCB3cml0dGVuIGFueSBjb2RlIHRvIHByb3Zpc2lvbiByYW5jaGVyIG9uIEFXUy5cIlxuICApO1xufVxuIiwiaW1wb3J0IHtcbiAgcHJvdmlzaW9uT25EaWdpdGFsT2NlYW4sXG4gIGRpZ2l0YWxPY2VhbkNyZWF0ZURyb3BsZXRSZXNwb25zZSxcbiAgZ2V0RHJvcGxldEluZm9ybWF0aW9uLFxufSBmcm9tIFwiLi9wcm92aXNpb25PbkRpZ2l0YWxPY2VhblwiO1xuaW1wb3J0IHsgcHJvdmlzaW9uT25BV1MgfSBmcm9tIFwiLi9wcm92aXNpb25PbkFXU1wiO1xuaW1wb3J0IHsgaW5zcGVjdCB9IGZyb20gXCJ1dGlsXCI7XG5cbmV4cG9ydCBjbGFzcyBSYW5jaGVyT1NDb25maWcge1xuICAvLyAhUHJpdmF0ZSBNZW1iZXJzXG4gIHByaXZhdGUgX25hbWU6IHN0cmluZyA9IFwiXCI7XG4gIHByaXZhdGUgX2lwdjRBZGRyZXNzZXM6IFNldDxzdHJpbmc+ID0gbmV3IFNldCgpO1xuICBwcml2YXRlIF9pcHY2QWRkcmVzc2VzOiBTZXQ8c3RyaW5nPiA9IG5ldyBTZXQoKTtcbiAgcHJpdmF0ZSBfZHJvcGxldElEOiBzdHJpbmcgPSBcIlwiO1xuXG4gIC8vICFDb25zdHJ1Y3RvclxuICBjb25zdHJ1Y3RvcigpIHt9IC8vSSdtIGxlYXZpbmcgdGhlIGNvbnN0cnVjdG9yIGJsYW5rIGJlY2F1c2Ugd2UnbGwgaW5pdGlhbGl6ZSBhbGwgdmFyaWFibGVzIHdpdGggY2hhaW5hYmxlIHNldHRlcnNcblxuICAvLyAhR2V0dGVycyBhbmQgU2V0dGVyc1xuICBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG4gIHNldCBuYW1lKG5ld05hbWU6IHN0cmluZykge1xuICAgIHRoaXMuX25hbWUgPSBuZXdOYW1lO1xuICAgIC8vIFRPRE86IHNhbml0aXplIGNoYXJhY3RlcnMgdGhhdCBkb24ndCBiZWxvbmcgaW4gZGlnaXRhbCBvY2VhbiBkcm9wbGV0IG5hbWVzXG4gICAgLy8gVE9ETzogaWYgZHJvcGxldCBoYXMgYWxyZWFkeSBiZWVuIHByb3Zpc2lvbmVkIHdpdGggYSBuYW1lLCBzZWUgaWYgdGhlIGRyb3BsZXQncyBuYW1lIGNhbiBhY3R1YWxseSBiZSB1cGRhdGVkLiBJZiBpdCBjYW4sIHRoZW4gdXBkYXRlIGl0LiBJZiBub3QsIHRocm93IGFuIGVycm9yLlxuICB9XG5cbiAgZ2V0IGlwdjRBZGRyZXNzZXMoKTogQXJyYXk8c3RyaW5nPiB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5faXB2NEFkZHJlc3Nlcyk7XG4gIH1cblxuICBzZXQgaXB2NEFkZHJlc3NlcyhpcHY0QWRkcmVzc2VzOiBBcnJheTxzdHJpbmc+KSB7XG4gICAgdGhpcy5faXB2NEFkZHJlc3NlcyA9IG5ldyBTZXQoaXB2NEFkZHJlc3Nlcyk7XG4gICAgLy9UT0RPOiBpdGVyYXRlIHRocm91Z2ggdGhlIHNldCBhbmQgcmVtb3ZlIGFueSBpcCBhZGRyZXNzZXMgdGhhdCBhcmUgbm90IHZhbGlkLlxuICB9XG5cbiAgZ2V0IGlwdjZBZGRyZXNzZXMoKTogQXJyYXk8c3RyaW5nPiB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5faXB2NkFkZHJlc3Nlcyk7XG4gIH1cblxuICBzZXQgaXB2NkFkZHJlc3NlcyhpcHY2QWRkcmVzc2VzOiBBcnJheTxzdHJpbmc+KSB7XG4gICAgdGhpcy5faXB2NkFkZHJlc3NlcyA9IG5ldyBTZXQoaXB2NkFkZHJlc3Nlcyk7XG4gICAgLy9UT0RPOiBpdGVyYXRlIHRocm91Z2ggdGhlIHNldCBhbmQgcmVtb3ZlIGFueSBpcCBhZGRyZXNzZXMgdGhhdCBhcmUgbm90IHZhbGlkLlxuICB9XG5cbiAgZ2V0IGRyb3BsZXRJRCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9kcm9wbGV0SUQ7XG4gIH1cbiAgLypcbiAgICBub3RlIHRoYXQgdGhlcmUgaXMgbm8gc2V0dGVyIGZvciBkcm9wbGV0SUQsIGFuZCB0aGUgX2Ryb3BsZXRJRCBwcm9wZXJ0eSBpcyBwcml2YXRlLiBUaGlzIGlzIGJlY2F1c2Ugd2UgZG8gTk9UIHdhbnQgdGhlIGRyb3BsZXRJRCB0byBiZSBzZXQgYnkgYW55IGNvZGUgb3V0c2lkZSBvZiB0aGlzIGNsYXNzLlxuICAqL1xuXG4gIC8vICFBY2Nlc3NvciBNZXRob2RzXG4gIHNldE5hbWUobmV3TmFtZTogc3RyaW5nKTogdGhpcyB7XG4gICAgdGhpcy5uYW1lID0gbmV3TmFtZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGFkZElwdjRBZGRyZXNzKGlwdjRBZGRyZXNzOiBzdHJpbmcpOiB0aGlzIHtcbiAgICBsZXQgYWRkcmVzc0FycmF5ID0gdGhpcy5pcHY0QWRkcmVzc2VzO1xuICAgIGFkZHJlc3NBcnJheS5wdXNoKGlwdjRBZGRyZXNzKTtcbiAgICB0aGlzLmlwdjRBZGRyZXNzZXMgPSBhZGRyZXNzQXJyYXk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZW1vdmVJcHY0QWRkcmVzcyhpcHY0QWRkcmVzczogc3RyaW5nKTogdGhpcyB7XG4gICAgdGhpcy5pcHY0QWRkcmVzc2VzID0gdGhpcy5pcHY0QWRkcmVzc2VzLmZpbHRlcihcbiAgICAgIChhZGRyZXNzKSA9PiBhZGRyZXNzICE9PSBpcHY0QWRkcmVzc1xuICAgICk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBhZGRJcHY2QWRkcmVzcyhpcHY2QWRkcmVzczogc3RyaW5nKTogdGhpcyB7XG4gICAgbGV0IGFkZHJlc3NBcnJheSA9IHRoaXMuaXB2NkFkZHJlc3NlcztcbiAgICBhZGRyZXNzQXJyYXkucHVzaChpcHY2QWRkcmVzcyk7XG4gICAgdGhpcy5pcHY2QWRkcmVzc2VzID0gYWRkcmVzc0FycmF5O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmVtb3ZlSXB2NkFkZHJlc3MoaXB2NkFkZHJlc3M6IHN0cmluZyk6IHRoaXMge1xuICAgIHRoaXMuaXB2NkFkZHJlc3NlcyA9IHRoaXMuaXB2NkFkZHJlc3Nlcy5maWx0ZXIoXG4gICAgICAoYWRkcmVzcykgPT4gYWRkcmVzcyAhPT0gaXB2NkFkZHJlc3NcbiAgICApO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gIVN1YnJvdXRpbmVzICh0aGVzZSBzaG91bGQgYmUgcHJpdmF0ZSlcbiAgcHJpdmF0ZSBwYXJzZURpZ2l0YWxPY2VhbkRyb3BsZXRSZXNwb25zZShcbiAgICByZXNwb25zZTogZGlnaXRhbE9jZWFuQ3JlYXRlRHJvcGxldFJlc3BvbnNlXG4gICk6IHZvaWQge1xuICAgIHRyeSB7XG4gICAgICByZXNwb25zZS5kcm9wbGV0Lm5ldHdvcmtzLnY0LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gXCJwdWJsaWNcIikge1xuICAgICAgICAgIHRoaXMuYWRkSXB2NEFkZHJlc3MoaXRlbS5pcF9hZGRyZXNzKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgICB0aGlzLl9kcm9wbGV0SUQgPSByZXNwb25zZS5kcm9wbGV0LmlkO1xuICB9XG5cbiAgcHJpdmF0ZSBwb2xsRm9ySVBBZGRyZXNzZXMoXG4gICAgbWF4aW11bU51bWJlck9mU2Vjb25kc1RvUG9sbDogbnVtYmVyID0gLTFcbiAgKTogUHJvbWlzZTx0aGlzPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIC8qXG4gICAgICAgIFRoaXMgZnVuY3Rpb24gcmVhbGx5IHNob3VsZCBub3QgYmUgbmVjZXNzYXJ5LiBQb2xsaW5nIGlzIGdlbmVyYWxseSBhIGJhZCBpZGVhLiBIb3dldmVyLCBwcm92aXNpb25PbkRpZ2l0YWxPY2Vhbi5kcm9wbGV0cy5jcmVhdGUoKSBkb2Vzbid0IGFjdHVhbGx5IHJldHVybiB0aGUgZHJvcGxldCdzIElQIGFkZHJlc3MuIFRoaXMgaXMgYmVjYXVzZSBpdCB0YWtlcyB+NS0xMCBzZWNvbmRzIGZvciB0aGUgZHJvcGxldCB0byBhY3R1YWxseSBhY3F1aXJlIGFuIElQIGFkZHJlc3MuIFNvLCBpbiB0aGlzIHBhcnRpY3VsYXIgY2FzZSwgd2UgbmVlZCB0byBwb2xsIHVudGlsIHdlIGdldCBhbiBJUCBhZGRyZXNzLlxuXG4gICAgICAgIEluIHRoZSBmaXJzdCBwb2xsLCB3ZSBjaGVjayByZXNwb25zZS5mZWF0dXJlcyB0byBzZWUgaWYgaXQgY29udGFpbnMgXCJpcHY2XCIuIElmIHNvLCB3ZSBjb250aW51ZSB0byBwb2xsIHVudGlsIHdlIGhhdmUgcmVjZWl2ZWQgYXQgbGVhc3QgMSBpcHY0IGFuZCAxIGlwdjYgYWRkcmVzcywgb3IgdW50aWwgdGhlIG51bWJlciBvZiBzZWNvbmRzIHRvIHBvbGwgaXMgdXAuXG5cbiAgICAgICAgSWYgdGhlIG51bWJlciBvZiBzZWNvbmRzIHRvIHBvbGwgaXMgbGVzcyB0aGFuIHplcm8sIHRoZW4gd2Ugd2lsbCBwb2xsIGluZGVmaW5pdGVseSB1bnRpbCB3ZSBnZXQgYXQgbGVhc3QgMSBpcHY0IGFkZHJlc3MsIGFuZCBpZiBpcHY2IGlzIGVuYWJsZWQsIDEgaXB2NiBhZGRyZXNzXG4gICAgICAqL1xuICAgICAgbGV0IGlwdjRBZGRyZXNzZXM6IEFycmF5PHN0cmluZz4gPSBbXTtcbiAgICAgIGxldCBpcHY2QWRkcmVzc2VzOiBBcnJheTxzdHJpbmc+ID0gW107XG4gICAgICBsZXQgaGFzSXB2NjogYm9vbGVhbiA9IHRydWU7XG4gICAgICBsZXQgbnVtYmVyT2ZUaW1lc1RvUG9sbFBlclNlY29uZDogbnVtYmVyID0gMTtcbiAgICAgIGxldCBudW1iZXJPZlRpbWVzVG9Qb2xsOiBudW1iZXIgPVxuICAgICAgICBtYXhpbXVtTnVtYmVyT2ZTZWNvbmRzVG9Qb2xsIDw9IDBcbiAgICAgICAgICA/IC0xXG4gICAgICAgICAgOiBNYXRoLmNlaWwoXG4gICAgICAgICAgICAgIG51bWJlck9mVGltZXNUb1BvbGxQZXJTZWNvbmQgKiBtYXhpbXVtTnVtYmVyT2ZTZWNvbmRzVG9Qb2xsXG4gICAgICAgICAgICApO1xuICAgICAgbGV0IHBvbGxJbnRlcnZhbDogTm9kZUpTLlRpbWVvdXQ7XG4gICAgICAvKlxuICAgICAgICBJRiBudW1iZXIgb2YgdGltZXMgdG8gcG9sbCBpcyBsZXNzIHRoYW4gemVybywgcG9sbCBpbmRlZmluaXRlbHkuXG4gICAgICAqL1xuICAgICAgbGV0IHBvbGwgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIC8vdG9kbzogYWRkIHNvbWUga2luZCBvZiBDTEkgc3Bpbm5lciBzbyB0aGF0IGl0J3MgY2xlYXIgdGhhdCBhIHBvbGxpbmcgbG9vcCBpcyBydW5uaW5nXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlOiBkaWdpdGFsT2NlYW5DcmVhdGVEcm9wbGV0UmVzcG9uc2UgPSBhd2FpdCBnZXREcm9wbGV0SW5mb3JtYXRpb24oXG4gICAgICAgICAgdGhpcy5kcm9wbGV0SURcbiAgICAgICAgKTtcbiAgICAgICAgaGFzSXB2NiA9XG4gICAgICAgICAgcmVzcG9uc2UuZHJvcGxldC5mZWF0dXJlcy5pbmNsdWRlcyhcImlwdjZcIikgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyB0cnVlXG4gICAgICAgICAgICA6IGZhbHNlO1xuICAgICAgICByZXNwb25zZS5kcm9wbGV0Lm5ldHdvcmtzLnY0LmZvckVhY2goKG5ldHdvcmspID0+IHtcbiAgICAgICAgICBpZiAobmV0d29yay50eXBlID09PSBcInB1YmxpY1wiKSB7XG4gICAgICAgICAgICBpcHY0QWRkcmVzc2VzLnB1c2gobmV0d29yay5pcF9hZGRyZXNzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoaGFzSXB2Nikge1xuICAgICAgICAgIHJlc3BvbnNlLmRyb3BsZXQubmV0d29ya3MudjYuZm9yRWFjaCgobmV0d29yaykgPT4ge1xuICAgICAgICAgICAgaWYgKG5ldHdvcmsudHlwZSA9PT0gXCJwdWJsaWNcIikge1xuICAgICAgICAgICAgICBpcHY2QWRkcmVzc2VzLnB1c2gobmV0d29yay5pcF9hZGRyZXNzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpcHY0QWRkcmVzc2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAoaGFzSXB2Nikge1xuICAgICAgICAgICAgaWYgKGlwdjZBZGRyZXNzZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICBudW1iZXJPZlRpbWVzVG9Qb2xsID0gMDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG51bWJlck9mVGltZXNUb1BvbGwtLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbnVtYmVyT2ZUaW1lc1RvUG9sbCA9IDA7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG51bWJlck9mVGltZXNUb1BvbGwtLTtcbiAgICAgICAgfVxuICAgICAgICBjaGVja0lmU2hvdWxkU3RvcFBvbGxpbmcoKTtcbiAgICAgIH07XG5cbiAgICAgIGZ1bmN0aW9uIGNoZWNrSWZTaG91bGRTdG9wUG9sbGluZygpIHtcbiAgICAgICAgaWYgKG51bWJlck9mVGltZXNUb1BvbGwgPT0gMCkge1xuICAgICAgICAgIGNsZWFySW50ZXJ2YWwocG9sbEludGVydmFsKTtcbiAgICAgICAgICBjaGVja0lmSVBBZGRyZXNzZXNPYnRhaW5lZChyZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBjaGVja0lmSVBBZGRyZXNzZXNPYnRhaW5lZCA9IChyZXNvbHZlOiBhbnksIHJlamVjdDogYW55KSA9PiB7XG4gICAgICAgIGlmIChpcHY0QWRkcmVzc2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpcHY0QWRkcmVzc2VzLmZvckVhY2goKGFkZHJlc3MpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWRkSXB2NEFkZHJlc3MoYWRkcmVzcyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYgKGhhc0lwdjYpIHtcbiAgICAgICAgICAgIGlmIChpcHY2QWRkcmVzc2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgaXB2NkFkZHJlc3Nlcy5mb3JFYWNoKChhZGRyZXNzKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRJcHY2QWRkcmVzcyhhZGRyZXNzKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIHJlc29sdmUodGhpcyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZWplY3QodGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc29sdmUodGhpcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlamVjdCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgZnVuY3Rpb24gcG9sbE9uSW50ZXJ2YWwoKTogTm9kZUpTLlRpbWVvdXQge1xuICAgICAgICBsZXQgbWlsbGlzZWNvbmRzQmV0d2VlbkludGVydmFscyA9IG51bWJlck9mVGltZXNUb1BvbGxQZXJTZWNvbmQgKiAxMDAwO1xuICAgICAgICByZXR1cm4gc2V0SW50ZXJ2YWwocG9sbCwgbWlsbGlzZWNvbmRzQmV0d2VlbkludGVydmFscyk7XG4gICAgICB9XG5cbiAgICAgIHBvbGxJbnRlcnZhbCA9IHBvbGxPbkludGVydmFsKCk7XG4gICAgfSk7XG4gIH1cblxuICBhc3luYyBwcm92aXNpb25PbihjbG91ZDogY2xvdWRQcm92aWRlcnMpOiBQcm9taXNlPHRoaXM+IHtcbiAgICBzd2l0Y2ggKCtjbG91ZCkge1xuICAgICAgLypcbiAgICAgICAgYXJndW1lbnQgJ2Nsb3VkJyBoYXMgdG8gYmUgY2FzdCB0byBhIG51bWJlciBpbiBvcmRlciB0byBiZSBjb21wYXJhYmxlIGluIGEgc3dpdGNoIHN0YXRlbWVudC5cbiAgICAgICAgVGhpcyB3b3JrcyBiZWNhdXNlIGVudW1zIGFyZSBhY3R1YWxseSBhIHR5cGUgb2YgbnVtYmVyIC4uLiB0aGUgbmFtZSBvZiBlYWNoIGVudW1lcmFibGUgdmFsdWUgaXMganVzdCBzeW50YWN0aWMgc3VnYXIuXG4gICAgICAgIGZvciBtb3JlIGluZm8gc2VlOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yNzc0NzQzNy90eXBlc2NyaXB0LWVudW0tc3dpdGNoLW5vdC13b3JraW5nXG4gICAgICAqL1xuICAgICAgY2FzZSBjbG91ZFByb3ZpZGVycy5kaWdpdGFsT2NlYW46XG4gICAgICAgIGxldCBjb25maWcgPSB7IG5hbWU6IHRoaXMubmFtZSB9O1xuICAgICAgICBjb25zdCByZXNwb25zZTogZGlnaXRhbE9jZWFuQ3JlYXRlRHJvcGxldFJlc3BvbnNlID0gYXdhaXQgcHJvdmlzaW9uT25EaWdpdGFsT2NlYW4oXG4gICAgICAgICAgY29uZmlnXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMucGFyc2VEaWdpdGFsT2NlYW5Ecm9wbGV0UmVzcG9uc2UocmVzcG9uc2UpO1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5wb2xsRm9ySVBBZGRyZXNzZXMoKTsgLy9ub3RlIHRoYXQgd2UgbmVlZCB0byBwb2xsIGZvciBpcCBhZGRyZXNzZXMgdW50aWwgd2UgcmVjZWl2ZSB0aGVtIGJlY2F1c2UgcmVzcG9uc2UgZG9lcyBub3QgYWN0dWFsbHkgY29udGFpbiBJUCBhZGRyZXNzZXMuXG4gICAgICBjYXNlIGNsb3VkUHJvdmlkZXJzLmF3czpcbiAgICAgICAgYXdhaXQgcHJvdmlzaW9uT25BV1MoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgJyR7Y2xvdWR9IGlzblxcJ3QgYSBzdXBwb3J0ZWQgY2xvdWQgcHJvdmlkZXIuIFlvdSBtdXN0IHNwZWNpZnkgZWl0aGVyIFwiYXdzXCIgb3IgXCJkaWdpdGFsT2NlYW5cIi4nXG4gICAgICAgICk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBlbnVtIGNsb3VkUHJvdmlkZXJzIHtcbiAgZGlnaXRhbE9jZWFuLFxuICBhd3MsXG59XG4iLCJpbXBvcnQgY2FjIGZyb20gXCJjYWNcIjtcbmltcG9ydCBwcm9tcHRzIGZyb20gXCJwcm9tcHRzXCI7XG5pbXBvcnQge1xuICBSYW5jaGVyT1NDb25maWcsXG4gIGNsb3VkUHJvdmlkZXJzLFxufSBmcm9tIFwiLi9wcm92aXNpb25SYW5jaGVyT25EaWdpdGFsT2NlYW4vUmFuY2hlck9TQ29uZmlnXCI7XG5cbmNvbnN0IGNsaSA9IGNhYygpO1xuY29uc3QgcGFyc2VkID0gY2xpLnBhcnNlKCk7XG5cbi8vIGNvbnN0IHByb21wdHNDb25maWc6IFByb21wdE9iamVjdCA9IHtcbi8vICAgdHlwZTogXCJudW1iZXJcIixcbi8vICAgbmFtZTogXCJ2YWx1ZVwiLFxuLy8gICBtZXNzYWdlOiBcImhvdyBvbGQgYXJlIHlvdVwiLFxuLy8gICB2YWxpZGF0ZTogKHZhbHVlOiBudW1iZXIpID0+ICh2YWx1ZSA8IDE4ID8gYE5pZ2h0Y2x1YiBpcyAxOCsgb25seWAgOiB0cnVlKSxcbi8vIH07XG5cbmNvbnN0IHF1ZXN0aW9uczogQXJyYXk8cHJvbXB0cy5Qcm9tcHRPYmplY3Q+ID0gW1xuICB7XG4gICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgbmFtZTogXCJkcm9wbGV0TmFtZVwiLFxuICAgIG1lc3NhZ2U6IFwiV2hhdCBkbyB5b3Ugd2FudCB0byBuYW1lIHlvdXIgZHJvcGxldD9cIixcbiAgICBpbml0aWFsOiBcInJhbmNoZXJcIixcbiAgfSxcbl07XG5cbmNvbnN0IHJhbmNoZXJDb25maWcgPSBuZXcgUmFuY2hlck9TQ29uZmlnKCk7XG5cbihhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGFuc3dlcnMgPSBhd2FpdCBwcm9tcHRzKHF1ZXN0aW9ucyk7XG4gIGNvbnN0IGRyb3BsZXQgPSBhd2FpdCByYW5jaGVyQ29uZmlnXG4gICAgLnNldE5hbWUoYW5zd2Vycy5kcm9wbGV0TmFtZSlcbiAgICAucHJvdmlzaW9uT24oY2xvdWRQcm92aWRlcnMuZGlnaXRhbE9jZWFuKTtcbiAgY29uc29sZS5sb2coZHJvcGxldC5pcHY0QWRkcmVzc2VzKTtcbiAgY29uc29sZS5sb2coZHJvcGxldC5pcHY2QWRkcmVzc2VzKTtcbn0pKCk7XG4iXSwic291cmNlUm9vdCI6IiJ9