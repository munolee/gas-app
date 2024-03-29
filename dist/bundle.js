/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 281:
/***/ (function(__unused_webpack_module, exports) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.autoAssign = void 0;
function _autoAssign(githubScript) {
    return __awaiter(this, void 0, void 0, function () {
        var target, assignees, number, _a, author, type, err_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    target = githubScript.context.payload.pull_request ||
                        githubScript.context.payload.issue;
                    if (target === undefined) {
                        throw new Error("Can't get payload. Check you trigger event");
                    }
                    assignees = target.assignees, number = target.number, _a = target.user, author = _a.login, type = _a.type;
                    if (assignees.length > 0 || type === 'Bot') {
                        return [2 /*return*/];
                    }
                    console.log("@".concat(author, " has been assigned to the pull request: #").concat(number));
                    return [4 /*yield*/, githubScript.github.rest.issues.addAssignees({
                            owner: githubScript.context.repo.owner,
                            repo: githubScript.context.repo.repo,
                            issue_number: number,
                            assignees: [author],
                        })];
                case 1: return [2 /*return*/, _b.sent()];
                case 2:
                    err_1 = _b.sent();
                    console.log(err_1.message);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
var autoAssign = function (githubScript) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: 
            // delete ref
            return [4 /*yield*/, _autoAssign(githubScript)];
            case 1:
                // delete ref
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.autoAssign = autoAssign;


/***/ }),

/***/ 402:
/***/ (function(__unused_webpack_module, exports) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createRelease = void 0;
/** * github action에서 Use workflow from(ref)을 Branch로 선택한 경우만 릴리즈 노트 생성 허용 */
function checkDeployTag(githubScript) {
    return __awaiter(this, void 0, void 0, function () {
        var ref;
        return __generator(this, function (_a) {
            ref = githubScript.context.payload.ref;
            // Branch로 workflow를 진행할 경우 ref -> refs/heads/main
            // Tags로 workflow를 진행할 경우 ref -> refs/tags/v1.2.3
            return [2 /*return*/, ref.includes('/heads')];
        });
    });
}
var createRelease = function (githubScript) { return __awaiter(void 0, void 0, void 0, function () {
    var isReleaseEnabled;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, checkDeployTag(githubScript)];
            case 1:
                isReleaseEnabled = _a.sent();
                if (!isReleaseEnabled) {
                    return [2 /*return*/];
                }
                console.log('Enable Release');
                return [4 /*yield*/, new Promise(function (resolve) {
                        return setTimeout(function () {
                            resolve('');
                        }, 3000);
                    })];
            case 2: 
            // github 에서 latest release 를 가져올 때, 확실히 신규로 생성된 release 를 가져올 수 있도록 delay 추가 (없으면 추측하기로는 timing 이슈 때문에 prev 버전을 최신으로 가져오는 상황이 발생함)
            return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.createRelease = createRelease;


/***/ }),

/***/ 477:
/***/ (function(__unused_webpack_module, exports) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.deleteBranch = void 0;
function isMainBranchPR(base) {
    return base === 'main';
}
function _deleteBranch(githubScript) {
    try {
        var _a = githubScript.context.payload.pull_request, head = _a.head, base = _a.base;
        var headRef = head === null || head === void 0 ? void 0 : head.ref;
        var baseRef = base === null || base === void 0 ? void 0 : base.ref;
        console.log("Base Branch - ".concat(baseRef));
        if (isMainBranchPR(baseRef)) {
            console.log("Result - ".concat(headRef, " branch \uC0AD\uC81C\uC644\uB8CC"));
            var _b = githubScript.context.repo, repo = _b.repo, owner = _b.owner;
            // 주의: 삭제는 headRef(hotfix, feature branch)에 대해서만 해야합니다.
            var ref = "heads/".concat(headRef);
            if (/(hotfix|feature)/.test(ref)) {
                return githubScript.github.rest.git.deleteRef({
                    repo: repo,
                    owner: owner,
                    ref: ref,
                });
            }
        }
        console.log("Result - ".concat(headRef, " branch \uC0AD\uC81C\uC2E4\uD328 (Reason: main PR\uC774 \uC544\uB2D9\uB2C8\uB2E4.)"));
    }
    catch (err) {
        console.log('======= Branch 삭제 실패사유 (Start) =======');
        console.log(err);
        console.log('======= Branch 삭제 실패사유 (End) =======');
    }
}
var deleteBranch = function (githubScript) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: 
            // delete ref
            return [4 /*yield*/, _deleteBranch(githubScript)];
            case 1:
                // delete ref
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.deleteBranch = deleteBranch;


/***/ }),

/***/ 173:
/***/ (function(__unused_webpack_module, exports) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.removeLabel = void 0;
function findOpenPr(githubScript) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, repo, owner, prList, hasLabelPrList;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = githubScript.context.repo, repo = _a.repo, owner = _a.owner;
                    return [4 /*yield*/, githubScript.github.rest.pulls.list({
                            owner: owner,
                            repo: repo,
                        })];
                case 1:
                    prList = _b.sent();
                    console.log('--------------- 🖨 Get PR List ---------------');
                    console.log('🔔 PR List: ', prList);
                    hasLabelPrList = prList.data.filter(function (head) {
                        return head.labels.some(function (label) { return ['alpha', 'staging'].indexOf(label.name) > -1; });
                    });
                    if (!hasLabelPrList.length) {
                        return [2 /*return*/, Promise.reject('alpha, staging 라벨이 포함된 Pull Request가 없습니다.')];
                    }
                    return [2 /*return*/, hasLabelPrList.map(function (pr) { return pr.number; })];
            }
        });
    });
}
// alpha, staging label 삭제
function removeLabels(githubScript, prNumberList) {
    var _a = githubScript.context.repo, repo = _a.repo, owner = _a.owner;
    console.log('--------------- 🗑 Remove Labels ---------------');
    console.log('🔔 Remove alpha/staging label');
    return Promise.allSettled(['alpha', 'staging'].map(function (label) {
        prNumberList.map(function (prNumber) {
            githubScript.github.rest.issues
                .removeLabel({
                owner: owner,
                repo: repo,
                issue_number: prNumber,
                name: label,
            })
                .catch(function (err) {
                console.log('PR의 라벨 삭제가 이미 진행되었습니다.');
                console.log(err);
            });
        });
    }));
}
var removeLabel = function (githubScript) { return __awaiter(void 0, void 0, void 0, function () {
    var prNumberList;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log('-- Print Github Script Payload --');
                console.log(githubScript.context.payload);
                return [4 /*yield*/, findOpenPr(githubScript)];
            case 1:
                prNumberList = _a.sent();
                // Remove labels
                return [4 /*yield*/, removeLabels(githubScript, prNumberList)];
            case 2:
                // Remove labels
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.removeLabel = removeLabel;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.autoAssign = exports.deleteBranch = exports.createRelease = exports.removeLabel = void 0;
var remove_label_1 = __webpack_require__(173);
Object.defineProperty(exports, "removeLabel", ({ enumerable: true, get: function () { return remove_label_1.removeLabel; } }));
var deploy_main_1 = __webpack_require__(402);
Object.defineProperty(exports, "createRelease", ({ enumerable: true, get: function () { return deploy_main_1.createRelease; } }));
var merged_pr_1 = __webpack_require__(477);
Object.defineProperty(exports, "deleteBranch", ({ enumerable: true, get: function () { return merged_pr_1.deleteBranch; } }));
var auto_assign_1 = __webpack_require__(281);
Object.defineProperty(exports, "autoAssign", ({ enumerable: true, get: function () { return auto_assign_1.autoAssign; } }));

})();

module.exports = __webpack_exports__;
/******/ })()
;