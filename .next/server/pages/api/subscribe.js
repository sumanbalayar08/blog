"use strict";
(() => {
var exports = {};
exports.id = 761;
exports.ids = [761];
exports.modules = {

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 6944:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

function getRequestParams(email) {
    // get env variables
    const API_KEY = process.env.MAILCHIMP_API_KEY;
    const LIST_ID = process.env.MAILCHIMP_LIST_ID;
    // mailchimp datacenter - mailchimp api keys always look like this:
    // fe4f064432e4684878063s83121e4971-us6
    // We need the us6 part
    const DATACENTER = process.env.MAILCHIMP_API_KEY.split("-")[1];
    const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`;
    // Add aditional params here. See full list of available params:
    // https://mailchimp.com/developer/reference/lists/list-members/
    const data = {
        email_address: email,
        status: "subscribed"
    };
    // Api key needs to be encoded in base 64 format
    const base64ApiKey = Buffer.from(`anystring:${API_KEY}`).toString("base64");
    const headers = {
        "Content-Type": "application/json",
        Authorization: `Basic ${base64ApiKey}`
    };
    return {
        url,
        data,
        headers
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{
    const { email  } = req.body;
    if (!email || !email.length) {
        return res.status(400).json({
            error: "Forgot to add your email?"
        });
    }
    try {
        const { url , data , headers  } = getRequestParams(email);
        const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(url, data, {
            headers
        });
        // Success
        return res.status(201).json({
            error: null
        });
    } catch (error) {
        return res.status(400).json({
            error: `Oops, something went wrong... Send me an email at orthohydrogen123@gmail.com and I'll add you to the list.`
        });
    // Report error to Sentry or whatever
    }
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6944));
module.exports = __webpack_exports__;

})();