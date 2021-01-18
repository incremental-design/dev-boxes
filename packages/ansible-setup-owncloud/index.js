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
            this._ipv6Addresses = new Set(ipv4Addresses);
            //TODO: iterate through the set and remove any ip addresses that are not valid.
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RancherOSConfig.prototype, "ipv6Addresses", {
        get: function () {
            return Array.from(this._ipv6Addresses);
        },
        set: function (ipv4Addresses) {
            this._ipv6Addresses = new Set(ipv4Addresses);
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
        return this;
    };
    RancherOSConfig.prototype.removeIpv4Address = function (ipv4Address) {
        this.ipv4Addresses = this.ipv4Addresses.filter(function (address) { return address !== ipv4Address; });
        return this;
    };
    RancherOSConfig.prototype.addIpv6Address = function (ipv6Address) {
        var addressArray = this.ipv6Addresses;
        addressArray.push(ipv6Address);
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
                    console.log(item, "logged");
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
                            console.log(ipv4Addresses, ipv6Addresses);
                            resolve(_this);
                        }
                        else {
                            reject(_this);
                        }
                    }
                    else {
                        console.log(ipv4Addresses);
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
                return [2 /*return*/];
        }
    });
}); })();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbnNpYmxlLXNldHVwLW93bmNsb3VkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Fuc2libGUtc2V0dXAtb3duY2xvdWQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYW5zaWJsZS1zZXR1cC1vd25jbG91ZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYW5zaWJsZS1zZXR1cC1vd25jbG91ZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Fuc2libGUtc2V0dXAtb3duY2xvdWQvZXh0ZXJuYWwgXCJjYWNcIiIsIndlYnBhY2s6Ly9hbnNpYmxlLXNldHVwLW93bmNsb3VkL2V4dGVybmFsIFwicHJvbXB0c1wiIiwid2VicGFjazovL2Fuc2libGUtc2V0dXAtb3duY2xvdWQvZXh0ZXJuYWwgXCJkby13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vYW5zaWJsZS1zZXR1cC1vd25jbG91ZC9leHRlcm5hbCBcImRvdGVudlwiIiwid2VicGFjazovL2Fuc2libGUtc2V0dXAtb3duY2xvdWQvLi9zcmMvcHJvdmlzaW9uUmFuY2hlck9uRGlnaXRhbE9jZWFuL2dldERpZ2l0YWxPY2VhblBlcnNvbmFsQWNjZXNzVG9rZW4udHMiLCJ3ZWJwYWNrOi8vYW5zaWJsZS1zZXR1cC1vd25jbG91ZC8uL3NyYy9wcm92aXNpb25SYW5jaGVyT25EaWdpdGFsT2NlYW4vcHJvdmlzaW9uT25EaWdpdGFsT2NlYW4udHMiLCJ3ZWJwYWNrOi8vYW5zaWJsZS1zZXR1cC1vd25jbG91ZC8uL3NyYy9wcm92aXNpb25SYW5jaGVyT25EaWdpdGFsT2NlYW4vcHJvdmlzaW9uT25BV1MudHMiLCJ3ZWJwYWNrOi8vYW5zaWJsZS1zZXR1cC1vd25jbG91ZC8uL3NyYy9wcm92aXNpb25SYW5jaGVyT25EaWdpdGFsT2NlYW4vUmFuY2hlck9TQ29uZmlnLnRzIiwid2VicGFjazovL2Fuc2libGUtc2V0dXAtb3duY2xvdWQvLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxnQ0FBZ0MsWUFBWTtXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHNGOzs7Ozs7QUNBQSxNQUFNLDRCQUE0QixtQjs7O0FDQWxDLE1BQU0sZ0NBQTRCLHVCOzs7QUNBbEMsTUFBTSxtQ0FBNEIsMEI7OztBQ0FsQyxNQUFNLCtCQUE0QixzQjs7O0FDQU47QUFDNUIsZ0NBQWEsRUFBRSxDQUFDLENBQUMsa0ZBQWtGO0FBRW5HLDZCQUFlLFNBQVM7SUFDdEIsSUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQ0FBbUMsQ0FBQztJQUVsRSxJQUFJLE9BQU8sU0FBUyxLQUFLLFFBQVEsRUFBRTtRQUNqQyxPQUFPLFNBQVMsQ0FBQztLQUNsQjtTQUFNO1FBQ0wsTUFBTSxJQUFJLEtBQUssQ0FDYixpR0FBaUcsQ0FDbEcsQ0FBQztLQUNIO0FBQ0gsQ0FBQzs7O0FDYnFDO0FBQzBCO0FBRWhFLElBQU0sU0FBUyxHQUFHLGtDQUFZLEVBQUUsQ0FBQztBQUNqQyxJQUFNLG1CQUFtQixHQUFHLElBQUksK0JBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUN4RDs7RUFFRTtBQUVLLFNBQVMsdUJBQXVCLENBQ3JDLFlBQW9CO0lBRXBCLElBQUksZUFBZSxHQUFXO1FBQzVCLElBQUksRUFBRSxTQUFTO1FBQ2YsTUFBTSxFQUFFLE1BQU07UUFDZCxJQUFJLEVBQUUsYUFBYTtRQUNuQixLQUFLLEVBQUUsV0FBVztRQUNsQixRQUFRLEVBQUUsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO1FBQzlCLE9BQU8sRUFBRSxLQUFLO1FBQ2QsSUFBSSxFQUFFLElBQUk7UUFD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RUFBWTtJQUNaLGlEQUFHO0FBQ0wsQ0FBQyxFQUhXLGNBQWMsS0FBZCxjQUFjLFFBR3pCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6T3FCO0FBQ1E7QUFJNEI7QUFFMUQsSUFBTSxHQUFHLEdBQUcsc0JBQUcsRUFBRSxDQUFDO0FBQ2xCLElBQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUUzQix3Q0FBd0M7QUFDeEMsb0JBQW9CO0FBQ3BCLG1CQUFtQjtBQUNuQixnQ0FBZ0M7QUFDaEMsZ0ZBQWdGO0FBQ2hGLEtBQUs7QUFFTCxJQUFNLFNBQVMsR0FBZ0M7SUFDN0M7UUFDRSxJQUFJLEVBQUUsTUFBTTtRQUNaLElBQUksRUFBRSxhQUFhO1FBQ25CLE9BQU8sRUFBRSx3Q0FBd0M7UUFDakQsT0FBTyxFQUFFLFNBQVM7S0FDbkI7Q0FDRixDQUFDO0FBRUYsSUFBTSxhQUFhLEdBQUcsSUFBSSxlQUFlLEVBQUUsQ0FBQztBQUU1QyxDQUFDOzs7O29CQUNpQixxQkFBTSwwQkFBTyxDQUFDLFNBQVMsQ0FBQzs7Z0JBQWxDLE9BQU8sR0FBRyxTQUF3QjtnQkFDeEIscUJBQU0sYUFBYTt5QkFDaEMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUM7eUJBQzVCLFdBQVcsQ0FBQywyQkFBMkIsQ0FBQzs7Z0JBRnJDLE9BQU8sR0FBRyxTQUUyQjs7OztLQUU1QyxDQUFDLEVBQUUsQ0FBQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiBtb2R1bGVbJ2RlZmF1bHQnXSA6XG5cdFx0KCkgPT4gbW9kdWxlO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCJjb25zdCBfX1dFQlBBQ0tfTkFNRVNQQUNFX09CSkVDVF9fID0gcmVxdWlyZShcImNhY1wiKTs7IiwiY29uc3QgX19XRUJQQUNLX05BTUVTUEFDRV9PQkpFQ1RfXyA9IHJlcXVpcmUoXCJwcm9tcHRzXCIpOzsiLCJjb25zdCBfX1dFQlBBQ0tfTkFNRVNQQUNFX09CSkVDVF9fID0gcmVxdWlyZShcImRvLXdyYXBwZXJcIik7OyIsImNvbnN0IF9fV0VCUEFDS19OQU1FU1BBQ0VfT0JKRUNUX18gPSByZXF1aXJlKFwiZG90ZW52XCIpOzsiLCJpbXBvcnQgZG90ZW52IGZyb20gXCJkb3RlbnZcIjtcbmRvdGVudi5jb25maWcoKTsgLy8gd2UgaGF2ZSB0byBpbml0aWFsaXplIGVudmlyb25tZW50IHZhcnMgYmVmb3JlIHdlIGNhbiBhY3R1YWxseSBhY2Nlc3MgYXV0aCB0b2tlblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKTogc3RyaW5nIHtcbiAgY29uc3QgYXV0aFRva2VuID0gcHJvY2Vzcy5lbnYuRElHSVRBTF9PQ0VBTl9QRVJTT05BTF9BQ0NFU1NfVE9LRU47XG5cbiAgaWYgKHR5cGVvZiBhdXRoVG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gYXV0aFRva2VuO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgIFwiRGlnaXRhbCBPY2VhbiBQZXJzb25hbCBBY2Nlc3MgVG9rZW4gaGFzIG5vdCBiZWVuIHNldCBpbiBgLmVudmAuIENhbm5vdCBhY2Nlc3MgZGlnaXRhbCBvY2VhbiBBUElcIlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBEaWdpdGFsT2NlYW4gZnJvbSBcImRvLXdyYXBwZXJcIjtcbmltcG9ydCBnZXRBdXRoVG9rZW4gZnJvbSBcIi4vZ2V0RGlnaXRhbE9jZWFuUGVyc29uYWxBY2Nlc3NUb2tlblwiO1xuXG5jb25zdCBhdXRoVG9rZW4gPSBnZXRBdXRoVG9rZW4oKTtcbmNvbnN0IGRpZ2l0YWxPY2VhbldyYXBwZXIgPSBuZXcgRGlnaXRhbE9jZWFuKGF1dGhUb2tlbik7XG4vKlxuICBhdXRoVG9rZW4gYW5kIGRpZ2l0YWxPY2VhbldyYXBwZXIgYXJlIHNpbmdsZXRvbnMgdGhhdCBhcmUgZ29pbmcgdG8gcGVyc2lzdCBmb3IgdGhlIGxpZmUgb2YgdGhlIHByb2dyYW0uXG4qL1xuXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlzaW9uT25EaWdpdGFsT2NlYW4oXG4gIGNvbmZpZ09iamVjdDogb2JqZWN0XG4pOiBQcm9taXNlPGRpZ2l0YWxPY2VhbkNyZWF0ZURyb3BsZXRSZXNwb25zZT4ge1xuICBsZXQgcmFuY2hlckluc3RhbmNlOiBvYmplY3QgPSB7XG4gICAgbmFtZTogXCJhbm90aGVyXCIsXG4gICAgcmVnaW9uOiBcIm55YzNcIixcbiAgICBzaXplOiBcInMtMXZjcHUtMWdiXCIsXG4gICAgaW1hZ2U6IFwicmFuY2hlcm9zXCIsXG4gICAgc3NoX2tleXM6IFsyNzYwODk4NiwgMjg0OTY0NTddLFxuICAgIGJhY2t1cHM6IGZhbHNlLFxuICAgIGlwdjY6IHRydWUsXG4gICAgcHJpdmF0ZV9uZXR3b3JraW5nOiBudWxsLFxuICAgIHVzZXJfZGF0YTogbnVsbCxcbiAgICB2b2x1bWVzOiBudWxsLFxuICAgIHRhZ3M6IFtdLFxuICB9O1xuXG4gIHJhbmNoZXJJbnN0YW5jZSA9IE9iamVjdC5hc3NpZ24ocmFuY2hlckluc3RhbmNlLCBjb25maWdPYmplY3QpO1xuICByZXR1cm4gKFxuICAgIGRpZ2l0YWxPY2VhbldyYXBwZXIuZHJvcGxldHNcbiAgICAgIC8vIEB0cy1pZ25vcmU6IHR5cGVzIGZvciByYW5jaGVySW5zdGFuY2UgYXJlIG5vdCBjb21wYXRpYmxlXG4gICAgICAuY3JlYXRlKHJhbmNoZXJJbnN0YW5jZSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICB9KVxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RHJvcGxldEluZm9ybWF0aW9uKGRyb3BsZXRJRDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIGRpZ2l0YWxPY2VhbldyYXBwZXIuZHJvcGxldHMuZ2V0QnlJZChkcm9wbGV0SUQpO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIGRpZ2l0YWxPY2VhbkNyZWF0ZURyb3BsZXRSZXNwb25zZSB7XG4gIGRyb3BsZXQ6IHtcbiAgICBpZDogc3RyaW5nO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBtZW1vcnlJbk1lZ2FieXRlczogYmlnaW50O1xuICAgIHZjcHVzOiBiaWdpbnQ7XG4gICAgZGlzazogYmlnaW50O1xuICAgIGxvY2tlZDogYm9vbGVhbjtcbiAgICBjcmVhdGVkX2F0OiBzdHJpbmc7XG4gICAgc3RhdHVzOiBzdHJpbmc7XG4gICAgYmFja3VwX2lkczogQXJyYXk8YW55PjtcbiAgICBzbmFwc2hvdF9pZHM6IEFycmF5PGFueT47XG4gICAgZmVhdHVyZXM6IEFycmF5PGFueT47XG4gICAgcmVnaW9uOiBvYmplY3Q7XG4gICAgaW1hZ2U6IG9iamVjdDtcbiAgICBzaXplOiBvYmplY3Q7XG4gICAgc2l6ZV9zbHVnOiBzdHJpbmc7XG4gICAgbmV0d29ya3M6IHtcbiAgICAgIHY0OiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpcF9hZGRyZXNzOiBzdHJpbmc7XG4gICAgICAgICAgbmV0bWFzazogc3RyaW5nO1xuICAgICAgICAgIGdhdGV3YXk6IHN0cmluZyB8IG51bGw7XG4gICAgICAgICAgdHlwZTogXCJwcml2YXRlXCIgfCBcInB1YmxpY1wiO1xuICAgICAgICB9XG4gICAgICBdO1xuICAgICAgdjY6IFtcbiAgICAgICAge1xuICAgICAgICAgIGlwX2FkZHJlc3M6IHN0cmluZztcbiAgICAgICAgICBuZXRtYXNrOiBzdHJpbmc7XG4gICAgICAgICAgZ2F0ZXdheTogc3RyaW5nIHwgbnVsbDtcbiAgICAgICAgICB0eXBlOiBcInByaXZhdGVcIiB8IFwicHVibGljXCI7XG4gICAgICAgIH1cbiAgICAgIF07XG4gICAgfTtcbiAgICBrZXJuZWw6IG9iamVjdCB8IG51bGw7XG4gICAgbmV4dF9iYWNrdXBfd2luZG93OiBvYmplY3QgfCBudWxsO1xuICAgIHRhZ3M6IEFycmF5PGFueT47XG4gICAgdm9sdW1lX2lkczogQXJyYXk8YW55PjtcbiAgICB2cGNfdXVpZDogU3RyaW5nO1xuICB9O1xufVxuIiwiLy8gVE9ETzogYWN0dWFsbHkgd3JpdGUgdGhpcyBmdW5jdGlvbi4gUmlnaHQgbm93IGl0J3MganVzdCBhIHN0dWJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwcm92aXNpb25PbkFXUygpIHtcbiAgdGhyb3cgbmV3IEVycm9yKFxuICAgIFwiU29ycnksIEkgaGF2ZW4ndCB3cml0dGVuIGFueSBjb2RlIHRvIHByb3Zpc2lvbiByYW5jaGVyIG9uIEFXUy5cIlxuICApO1xufVxuIiwiaW1wb3J0IHtcbiAgcHJvdmlzaW9uT25EaWdpdGFsT2NlYW4sXG4gIGRpZ2l0YWxPY2VhbkNyZWF0ZURyb3BsZXRSZXNwb25zZSxcbiAgZ2V0RHJvcGxldEluZm9ybWF0aW9uLFxufSBmcm9tIFwiLi9wcm92aXNpb25PbkRpZ2l0YWxPY2VhblwiO1xuaW1wb3J0IHsgcHJvdmlzaW9uT25BV1MgfSBmcm9tIFwiLi9wcm92aXNpb25PbkFXU1wiO1xuaW1wb3J0IHsgaW5zcGVjdCB9IGZyb20gXCJ1dGlsXCI7XG5cbmV4cG9ydCBjbGFzcyBSYW5jaGVyT1NDb25maWcge1xuICAvLyAhUHJpdmF0ZSBNZW1iZXJzXG4gIHByaXZhdGUgX25hbWU6IHN0cmluZyA9IFwiXCI7XG4gIHByaXZhdGUgX2lwdjRBZGRyZXNzZXM6IFNldDxzdHJpbmc+ID0gbmV3IFNldCgpO1xuICBwcml2YXRlIF9pcHY2QWRkcmVzc2VzOiBTZXQ8c3RyaW5nPiA9IG5ldyBTZXQoKTtcbiAgcHJpdmF0ZSBfZHJvcGxldElEOiBzdHJpbmcgPSBcIlwiO1xuXG4gIC8vICFDb25zdHJ1Y3RvclxuICBjb25zdHJ1Y3RvcigpIHt9IC8vSSdtIGxlYXZpbmcgdGhlIGNvbnN0cnVjdG9yIGJsYW5rIGJlY2F1c2Ugd2UnbGwgaW5pdGlhbGl6ZSBhbGwgdmFyaWFibGVzIHdpdGggY2hhaW5hYmxlIHNldHRlcnNcblxuICAvLyAhR2V0dGVycyBhbmQgU2V0dGVyc1xuICBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG4gIHNldCBuYW1lKG5ld05hbWU6IHN0cmluZykge1xuICAgIHRoaXMuX25hbWUgPSBuZXdOYW1lO1xuICAgIC8vIFRPRE86IHNhbml0aXplIGNoYXJhY3RlcnMgdGhhdCBkb24ndCBiZWxvbmcgaW4gZGlnaXRhbCBvY2VhbiBkcm9wbGV0IG5hbWVzXG4gICAgLy8gVE9ETzogaWYgZHJvcGxldCBoYXMgYWxyZWFkeSBiZWVuIHByb3Zpc2lvbmVkIHdpdGggYSBuYW1lLCBzZWUgaWYgdGhlIGRyb3BsZXQncyBuYW1lIGNhbiBhY3R1YWxseSBiZSB1cGRhdGVkLiBJZiBpdCBjYW4sIHRoZW4gdXBkYXRlIGl0LiBJZiBub3QsIHRocm93IGFuIGVycm9yLlxuICB9XG5cbiAgZ2V0IGlwdjRBZGRyZXNzZXMoKTogQXJyYXk8c3RyaW5nPiB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5faXB2NEFkZHJlc3Nlcyk7XG4gIH1cblxuICBzZXQgaXB2NEFkZHJlc3NlcyhpcHY0QWRkcmVzc2VzOiBBcnJheTxzdHJpbmc+KSB7XG4gICAgdGhpcy5faXB2NkFkZHJlc3NlcyA9IG5ldyBTZXQoaXB2NEFkZHJlc3Nlcyk7XG4gICAgLy9UT0RPOiBpdGVyYXRlIHRocm91Z2ggdGhlIHNldCBhbmQgcmVtb3ZlIGFueSBpcCBhZGRyZXNzZXMgdGhhdCBhcmUgbm90IHZhbGlkLlxuICB9XG5cbiAgZ2V0IGlwdjZBZGRyZXNzZXMoKTogQXJyYXk8c3RyaW5nPiB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5faXB2NkFkZHJlc3Nlcyk7XG4gIH1cblxuICBzZXQgaXB2NkFkZHJlc3NlcyhpcHY0QWRkcmVzc2VzOiBBcnJheTxzdHJpbmc+KSB7XG4gICAgdGhpcy5faXB2NkFkZHJlc3NlcyA9IG5ldyBTZXQoaXB2NEFkZHJlc3Nlcyk7XG4gICAgLy9UT0RPOiBpdGVyYXRlIHRocm91Z2ggdGhlIHNldCBhbmQgcmVtb3ZlIGFueSBpcCBhZGRyZXNzZXMgdGhhdCBhcmUgbm90IHZhbGlkLlxuICB9XG5cbiAgZ2V0IGRyb3BsZXRJRCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9kcm9wbGV0SUQ7XG4gIH1cbiAgLypcbiAgICBub3RlIHRoYXQgdGhlcmUgaXMgbm8gc2V0dGVyIGZvciBkcm9wbGV0SUQsIGFuZCB0aGUgX2Ryb3BsZXRJRCBwcm9wZXJ0eSBpcyBwcml2YXRlLiBUaGlzIGlzIGJlY2F1c2Ugd2UgZG8gTk9UIHdhbnQgdGhlIGRyb3BsZXRJRCB0byBiZSBzZXQgYnkgYW55IGNvZGUgb3V0c2lkZSBvZiB0aGlzIGNsYXNzLlxuICAqL1xuXG4gIC8vICFBY2Nlc3NvciBNZXRob2RzXG4gIHNldE5hbWUobmV3TmFtZTogc3RyaW5nKTogdGhpcyB7XG4gICAgdGhpcy5uYW1lID0gbmV3TmFtZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGFkZElwdjRBZGRyZXNzKGlwdjRBZGRyZXNzOiBzdHJpbmcpOiB0aGlzIHtcbiAgICBsZXQgYWRkcmVzc0FycmF5ID0gdGhpcy5pcHY0QWRkcmVzc2VzO1xuICAgIGFkZHJlc3NBcnJheS5wdXNoKGlwdjRBZGRyZXNzKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJlbW92ZUlwdjRBZGRyZXNzKGlwdjRBZGRyZXNzOiBzdHJpbmcpOiB0aGlzIHtcbiAgICB0aGlzLmlwdjRBZGRyZXNzZXMgPSB0aGlzLmlwdjRBZGRyZXNzZXMuZmlsdGVyKFxuICAgICAgKGFkZHJlc3MpID0+IGFkZHJlc3MgIT09IGlwdjRBZGRyZXNzXG4gICAgKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGFkZElwdjZBZGRyZXNzKGlwdjZBZGRyZXNzOiBzdHJpbmcpOiB0aGlzIHtcbiAgICBsZXQgYWRkcmVzc0FycmF5ID0gdGhpcy5pcHY2QWRkcmVzc2VzO1xuICAgIGFkZHJlc3NBcnJheS5wdXNoKGlwdjZBZGRyZXNzKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJlbW92ZUlwdjZBZGRyZXNzKGlwdjZBZGRyZXNzOiBzdHJpbmcpOiB0aGlzIHtcbiAgICB0aGlzLmlwdjZBZGRyZXNzZXMgPSB0aGlzLmlwdjZBZGRyZXNzZXMuZmlsdGVyKFxuICAgICAgKGFkZHJlc3MpID0+IGFkZHJlc3MgIT09IGlwdjZBZGRyZXNzXG4gICAgKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vICFTdWJyb3V0aW5lcyAodGhlc2Ugc2hvdWxkIGJlIHByaXZhdGUpXG4gIHByaXZhdGUgcGFyc2VEaWdpdGFsT2NlYW5Ecm9wbGV0UmVzcG9uc2UoXG4gICAgcmVzcG9uc2U6IGRpZ2l0YWxPY2VhbkNyZWF0ZURyb3BsZXRSZXNwb25zZVxuICApOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgcmVzcG9uc2UuZHJvcGxldC5uZXR3b3Jrcy52NC5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGlmIChpdGVtLnR5cGUgPT09IFwicHVibGljXCIpIHtcbiAgICAgICAgICB0aGlzLmFkZElwdjRBZGRyZXNzKGl0ZW0uaXBfYWRkcmVzcyk7XG4gICAgICAgICAgY29uc29sZS5sb2coaXRlbSwgXCJsb2dnZWRcIik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICB9XG4gICAgdGhpcy5fZHJvcGxldElEID0gcmVzcG9uc2UuZHJvcGxldC5pZDtcbiAgfVxuXG4gIHByaXZhdGUgcG9sbEZvcklQQWRkcmVzc2VzKFxuICAgIG1heGltdW1OdW1iZXJPZlNlY29uZHNUb1BvbGw6IG51bWJlciA9IC0xXG4gICk6IFByb21pc2U8dGhpcz4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAvKlxuICAgICAgICBUaGlzIGZ1bmN0aW9uIHJlYWxseSBzaG91bGQgbm90IGJlIG5lY2Vzc2FyeS4gUG9sbGluZyBpcyBnZW5lcmFsbHkgYSBiYWQgaWRlYS4gSG93ZXZlciwgcHJvdmlzaW9uT25EaWdpdGFsT2NlYW4uZHJvcGxldHMuY3JlYXRlKCkgZG9lc24ndCBhY3R1YWxseSByZXR1cm4gdGhlIGRyb3BsZXQncyBJUCBhZGRyZXNzLiBUaGlzIGlzIGJlY2F1c2UgaXQgdGFrZXMgfjUtMTAgc2Vjb25kcyBmb3IgdGhlIGRyb3BsZXQgdG8gYWN0dWFsbHkgYWNxdWlyZSBhbiBJUCBhZGRyZXNzLiBTbywgaW4gdGhpcyBwYXJ0aWN1bGFyIGNhc2UsIHdlIG5lZWQgdG8gcG9sbCB1bnRpbCB3ZSBnZXQgYW4gSVAgYWRkcmVzcy5cblxuICAgICAgICBJbiB0aGUgZmlyc3QgcG9sbCwgd2UgY2hlY2sgcmVzcG9uc2UuZmVhdHVyZXMgdG8gc2VlIGlmIGl0IGNvbnRhaW5zIFwiaXB2NlwiLiBJZiBzbywgd2UgY29udGludWUgdG8gcG9sbCB1bnRpbCB3ZSBoYXZlIHJlY2VpdmVkIGF0IGxlYXN0IDEgaXB2NCBhbmQgMSBpcHY2IGFkZHJlc3MsIG9yIHVudGlsIHRoZSBudW1iZXIgb2Ygc2Vjb25kcyB0byBwb2xsIGlzIHVwLlxuXG4gICAgICAgIElmIHRoZSBudW1iZXIgb2Ygc2Vjb25kcyB0byBwb2xsIGlzIGxlc3MgdGhhbiB6ZXJvLCB0aGVuIHdlIHdpbGwgcG9sbCBpbmRlZmluaXRlbHkgdW50aWwgd2UgZ2V0IGF0IGxlYXN0IDEgaXB2NCBhZGRyZXNzLCBhbmQgaWYgaXB2NiBpcyBlbmFibGVkLCAxIGlwdjYgYWRkcmVzc1xuICAgICAgKi9cbiAgICAgIGxldCBpcHY0QWRkcmVzc2VzOiBBcnJheTxzdHJpbmc+ID0gW107XG4gICAgICBsZXQgaXB2NkFkZHJlc3NlczogQXJyYXk8c3RyaW5nPiA9IFtdO1xuICAgICAgbGV0IGhhc0lwdjY6IGJvb2xlYW4gPSB0cnVlO1xuICAgICAgbGV0IG51bWJlck9mVGltZXNUb1BvbGxQZXJTZWNvbmQ6IG51bWJlciA9IDE7XG4gICAgICBsZXQgbnVtYmVyT2ZUaW1lc1RvUG9sbDogbnVtYmVyID1cbiAgICAgICAgbWF4aW11bU51bWJlck9mU2Vjb25kc1RvUG9sbCA8PSAwXG4gICAgICAgICAgPyAtMVxuICAgICAgICAgIDogTWF0aC5jZWlsKFxuICAgICAgICAgICAgICBudW1iZXJPZlRpbWVzVG9Qb2xsUGVyU2Vjb25kICogbWF4aW11bU51bWJlck9mU2Vjb25kc1RvUG9sbFxuICAgICAgICAgICAgKTtcbiAgICAgIGxldCBwb2xsSW50ZXJ2YWw6IE5vZGVKUy5UaW1lb3V0O1xuICAgICAgLypcbiAgICAgICAgSUYgbnVtYmVyIG9mIHRpbWVzIHRvIHBvbGwgaXMgbGVzcyB0aGFuIHplcm8sIHBvbGwgaW5kZWZpbml0ZWx5LlxuICAgICAgKi9cbiAgICAgIGxldCBwb2xsID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAvL3RvZG86IGFkZCBzb21lIGtpbmQgb2YgQ0xJIHNwaW5uZXIgc28gdGhhdCBpdCdzIGNsZWFyIHRoYXQgYSBwb2xsaW5nIGxvb3AgaXMgcnVubmluZ1xuICAgICAgICBjb25zdCByZXNwb25zZTogZGlnaXRhbE9jZWFuQ3JlYXRlRHJvcGxldFJlc3BvbnNlID0gYXdhaXQgZ2V0RHJvcGxldEluZm9ybWF0aW9uKFxuICAgICAgICAgIHRoaXMuZHJvcGxldElEXG4gICAgICAgICk7XG4gICAgICAgIGhhc0lwdjYgPVxuICAgICAgICAgIHJlc3BvbnNlLmRyb3BsZXQuZmVhdHVyZXMuaW5jbHVkZXMoXCJpcHY2XCIpICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gdHJ1ZVxuICAgICAgICAgICAgOiBmYWxzZTtcbiAgICAgICAgcmVzcG9uc2UuZHJvcGxldC5uZXR3b3Jrcy52NC5mb3JFYWNoKChuZXR3b3JrKSA9PiB7XG4gICAgICAgICAgaWYgKG5ldHdvcmsudHlwZSA9PT0gXCJwdWJsaWNcIikge1xuICAgICAgICAgICAgaXB2NEFkZHJlc3Nlcy5wdXNoKG5ldHdvcmsuaXBfYWRkcmVzcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGhhc0lwdjYpIHtcbiAgICAgICAgICByZXNwb25zZS5kcm9wbGV0Lm5ldHdvcmtzLnY2LmZvckVhY2goKG5ldHdvcmspID0+IHtcbiAgICAgICAgICAgIGlmIChuZXR3b3JrLnR5cGUgPT09IFwicHVibGljXCIpIHtcbiAgICAgICAgICAgICAgaXB2NkFkZHJlc3Nlcy5wdXNoKG5ldHdvcmsuaXBfYWRkcmVzcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXB2NEFkZHJlc3Nlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWYgKGhhc0lwdjYpIHtcbiAgICAgICAgICAgIGlmIChpcHY2QWRkcmVzc2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgbnVtYmVyT2ZUaW1lc1RvUG9sbCA9IDA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBudW1iZXJPZlRpbWVzVG9Qb2xsLS07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG51bWJlck9mVGltZXNUb1BvbGwgPSAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBudW1iZXJPZlRpbWVzVG9Qb2xsLS07XG4gICAgICAgIH1cbiAgICAgICAgY2hlY2tJZlNob3VsZFN0b3BQb2xsaW5nKCk7XG4gICAgICB9O1xuXG4gICAgICBmdW5jdGlvbiBjaGVja0lmU2hvdWxkU3RvcFBvbGxpbmcoKSB7XG4gICAgICAgIGlmIChudW1iZXJPZlRpbWVzVG9Qb2xsID09IDApIHtcbiAgICAgICAgICBjbGVhckludGVydmFsKHBvbGxJbnRlcnZhbCk7XG4gICAgICAgICAgY2hlY2tJZklQQWRkcmVzc2VzT2J0YWluZWQocmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgY2hlY2tJZklQQWRkcmVzc2VzT2J0YWluZWQgPSAocmVzb2x2ZTogYW55LCByZWplY3Q6IGFueSkgPT4ge1xuICAgICAgICBpZiAoaXB2NEFkZHJlc3Nlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaXB2NEFkZHJlc3Nlcy5mb3JFYWNoKChhZGRyZXNzKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFkZElwdjRBZGRyZXNzKGFkZHJlc3MpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmIChoYXNJcHY2KSB7XG4gICAgICAgICAgICBpZiAoaXB2NkFkZHJlc3Nlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgIGlwdjZBZGRyZXNzZXMuZm9yRWFjaCgoYWRkcmVzcykgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkSXB2NkFkZHJlc3MoYWRkcmVzcyk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpcHY0QWRkcmVzc2VzLCBpcHY2QWRkcmVzc2VzKTtcbiAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlamVjdCh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coaXB2NEFkZHJlc3Nlcyk7XG4gICAgICAgICAgICByZXNvbHZlKHRoaXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZWplY3QodGhpcyk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGZ1bmN0aW9uIHBvbGxPbkludGVydmFsKCk6IE5vZGVKUy5UaW1lb3V0IHtcbiAgICAgICAgbGV0IG1pbGxpc2Vjb25kc0JldHdlZW5JbnRlcnZhbHMgPSBudW1iZXJPZlRpbWVzVG9Qb2xsUGVyU2Vjb25kICogMTAwMDtcbiAgICAgICAgcmV0dXJuIHNldEludGVydmFsKHBvbGwsIG1pbGxpc2Vjb25kc0JldHdlZW5JbnRlcnZhbHMpO1xuICAgICAgfVxuXG4gICAgICBwb2xsSW50ZXJ2YWwgPSBwb2xsT25JbnRlcnZhbCgpO1xuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgcHJvdmlzaW9uT24oY2xvdWQ6IGNsb3VkUHJvdmlkZXJzKTogUHJvbWlzZTx0aGlzPiB7XG4gICAgc3dpdGNoICgrY2xvdWQpIHtcbiAgICAgIC8qXG4gICAgICAgIGFyZ3VtZW50ICdjbG91ZCcgaGFzIHRvIGJlIGNhc3QgdG8gYSBudW1iZXIgaW4gb3JkZXIgdG8gYmUgY29tcGFyYWJsZSBpbiBhIHN3aXRjaCBzdGF0ZW1lbnQuXG4gICAgICAgIFRoaXMgd29ya3MgYmVjYXVzZSBlbnVtcyBhcmUgYWN0dWFsbHkgYSB0eXBlIG9mIG51bWJlciAuLi4gdGhlIG5hbWUgb2YgZWFjaCBlbnVtZXJhYmxlIHZhbHVlIGlzIGp1c3Qgc3ludGFjdGljIHN1Z2FyLlxuICAgICAgICBmb3IgbW9yZSBpbmZvIHNlZTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjc3NDc0MzcvdHlwZXNjcmlwdC1lbnVtLXN3aXRjaC1ub3Qtd29ya2luZ1xuICAgICAgKi9cbiAgICAgIGNhc2UgY2xvdWRQcm92aWRlcnMuZGlnaXRhbE9jZWFuOlxuICAgICAgICBsZXQgY29uZmlnID0geyBuYW1lOiB0aGlzLm5hbWUgfTtcbiAgICAgICAgY29uc3QgcmVzcG9uc2U6IGRpZ2l0YWxPY2VhbkNyZWF0ZURyb3BsZXRSZXNwb25zZSA9IGF3YWl0IHByb3Zpc2lvbk9uRGlnaXRhbE9jZWFuKFxuICAgICAgICAgIGNvbmZpZ1xuICAgICAgICApO1xuICAgICAgICB0aGlzLnBhcnNlRGlnaXRhbE9jZWFuRHJvcGxldFJlc3BvbnNlKHJlc3BvbnNlKTtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMucG9sbEZvcklQQWRkcmVzc2VzKCk7IC8vbm90ZSB0aGF0IHdlIG5lZWQgdG8gcG9sbCBmb3IgaXAgYWRkcmVzc2VzIHVudGlsIHdlIHJlY2VpdmUgdGhlbSBiZWNhdXNlIHJlc3BvbnNlIGRvZXMgbm90IGFjdHVhbGx5IGNvbnRhaW4gSVAgYWRkcmVzc2VzLlxuICAgICAgY2FzZSBjbG91ZFByb3ZpZGVycy5hd3M6XG4gICAgICAgIGF3YWl0IHByb3Zpc2lvbk9uQVdTKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICcke2Nsb3VkfSBpc25cXCd0IGEgc3VwcG9ydGVkIGNsb3VkIHByb3ZpZGVyLiBZb3UgbXVzdCBzcGVjaWZ5IGVpdGhlciBcImF3c1wiIG9yIFwiZGlnaXRhbE9jZWFuXCIuJ1xuICAgICAgICApO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZW51bSBjbG91ZFByb3ZpZGVycyB7XG4gIGRpZ2l0YWxPY2VhbixcbiAgYXdzLFxufVxuIiwiaW1wb3J0IGNhYyBmcm9tIFwiY2FjXCI7XG5pbXBvcnQgcHJvbXB0cyBmcm9tIFwicHJvbXB0c1wiO1xuaW1wb3J0IHtcbiAgUmFuY2hlck9TQ29uZmlnLFxuICBjbG91ZFByb3ZpZGVycyxcbn0gZnJvbSBcIi4vcHJvdmlzaW9uUmFuY2hlck9uRGlnaXRhbE9jZWFuL1JhbmNoZXJPU0NvbmZpZ1wiO1xuXG5jb25zdCBjbGkgPSBjYWMoKTtcbmNvbnN0IHBhcnNlZCA9IGNsaS5wYXJzZSgpO1xuXG4vLyBjb25zdCBwcm9tcHRzQ29uZmlnOiBQcm9tcHRPYmplY3QgPSB7XG4vLyAgIHR5cGU6IFwibnVtYmVyXCIsXG4vLyAgIG5hbWU6IFwidmFsdWVcIixcbi8vICAgbWVzc2FnZTogXCJob3cgb2xkIGFyZSB5b3VcIixcbi8vICAgdmFsaWRhdGU6ICh2YWx1ZTogbnVtYmVyKSA9PiAodmFsdWUgPCAxOCA/IGBOaWdodGNsdWIgaXMgMTgrIG9ubHlgIDogdHJ1ZSksXG4vLyB9O1xuXG5jb25zdCBxdWVzdGlvbnM6IEFycmF5PHByb21wdHMuUHJvbXB0T2JqZWN0PiA9IFtcbiAge1xuICAgIHR5cGU6IFwidGV4dFwiLFxuICAgIG5hbWU6IFwiZHJvcGxldE5hbWVcIixcbiAgICBtZXNzYWdlOiBcIldoYXQgZG8geW91IHdhbnQgdG8gbmFtZSB5b3VyIGRyb3BsZXQ/XCIsXG4gICAgaW5pdGlhbDogXCJyYW5jaGVyXCIsXG4gIH0sXG5dO1xuXG5jb25zdCByYW5jaGVyQ29uZmlnID0gbmV3IFJhbmNoZXJPU0NvbmZpZygpO1xuXG4oYXN5bmMgKCkgPT4ge1xuICBjb25zdCBhbnN3ZXJzID0gYXdhaXQgcHJvbXB0cyhxdWVzdGlvbnMpO1xuICBjb25zdCBkcm9wbGV0ID0gYXdhaXQgcmFuY2hlckNvbmZpZ1xuICAgIC5zZXROYW1lKGFuc3dlcnMuZHJvcGxldE5hbWUpXG4gICAgLnByb3Zpc2lvbk9uKGNsb3VkUHJvdmlkZXJzLmRpZ2l0YWxPY2Vhbik7XG4gIC8vIGNvbnNvbGUubG9nKGRyb3BsZXQuaXB2NEFkZHJlc3Nlcyk7XG59KSgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==