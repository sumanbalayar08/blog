"use strict";
(() => {
var exports = {};
exports.id = 922;
exports.ids = [922];
exports.modules = {

/***/ 5976:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ PostPage),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: external "next-share"
const external_next_share_namespaceObject = require("next-share");
// EXTERNAL MODULE: ./utils/wordpress.js
var wordpress = __webpack_require__(1477);
;// CONCATENATED MODULE: ./pages/posts/[slug].js




function PostPage({ post  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        class: "flex md:bg-gray-100 shadow-sm rounded-lg sm:mx-auto lg:mx-auto md:mx-auto sm:my-4 lg:my-4 md:my-4 max-w-md md:max-w-5xl",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container m-auto px-6 md:px-12 lg:px-10",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex items-center flex-wrap mt-0 px-2 md:px-0",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "relative lg:w-full xl:py-10 md:py-10 lg:py-10 sm:py-10",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: "text-center pb-5 font-bold text-4xl",
                                children: post.title.rendered
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "card-text pb-5 font-serif",
                                dangerouslySetInnerHTML: {
                                    __html: post.content.rendered
                                }
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                children: "Social Share - GeeksforGeeks"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_next_share_namespaceObject.FacebookShareButton, {
                                url: "http://localhost:3000/events/linear-searching-algorithm",
                                quote: "next-share is a social share buttons for your next React apps.",
                                hashtag: "#nextshare",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_next_share_namespaceObject.FacebookIcon, {
                                    size: 32,
                                    round: true
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_next_share_namespaceObject.PinterestShareButton, {
                                url: "http://localhost:3000/events/linear-searching-algorithm",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_next_share_namespaceObject.PinterestIcon, {
                                    size: 32,
                                    round: true
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_next_share_namespaceObject.RedditShareButton, {
                                url: "http://localhost:3000",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_next_share_namespaceObject.RedditIcon, {
                                    size: 32,
                                    round: true
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_next_share_namespaceObject.WhatsappShareButton, {
                                url: "http://localhost:3000",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_next_share_namespaceObject.WhatsappIcon, {
                                    size: 32,
                                    round: true
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_next_share_namespaceObject.LinkedinShareButton, {
                                url: "http://localhost:3000/posts/[slug]",
                                quote: "next-share is a social share buttons for your next React apps.",
                                hashtag: "#nextshare",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_next_share_namespaceObject.LinkedinIcon, {
                                    size: 32,
                                    round: true
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
}
//hey Next, these are the possible slugs
async function getStaticPaths() {
    const paths = await (0,wordpress/* getSlugs */.cH)("posts");
    return {
        paths,
        //this option below renders in the server (at request time) pages that were not rendered at build time
        //e.g when a new blogpost is added to the app
        fallback: "blocking"
    };
}
async function getStaticProps({ params  }) {
    const post = await (0,wordpress/* getPost */.xl)(params.slug);
    return {
        props: {
            post
        },
        revalidate: 10
    };
}


/***/ }),

/***/ 1477:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Jq": () => (/* binding */ getPosts),
/* harmony export */   "cH": () => (/* binding */ getSlugs),
/* harmony export */   "xl": () => (/* binding */ getPost)
/* harmony export */ });
const BASE_URL = "https://my-wordpress.codingjunk.com/wp-json/wp/v2";
async function getPosts() {
    const postsRes = await fetch(BASE_URL + "/posts?_embed");
    const posts = await postsRes.json();
    return posts;
}
async function getPost(slug) {
    const posts = await getPosts();
    const postArray = posts.filter((post)=>post.slug == slug);
    const post = postArray.length > 0 ? postArray[0] : null;
    return post;
}
async function getSlugs(type) {
    let elements = [];
    switch(type){
        case "posts":
            elements = await getPosts();
            break;
    }
    const elementsIds = elements.map((element)=>{
        return {
            params: {
                slug: element.slug
            }
        };
    });
    return elementsIds;
}


/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664], () => (__webpack_exec__(5976)));
module.exports = __webpack_exports__;

})();