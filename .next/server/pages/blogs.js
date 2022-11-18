"use strict";
(() => {
var exports = {};
exports.id = 55;
exports.ids = [55];
exports.modules = {

/***/ 4573:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ blogs),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./utils/wordpress.js
var wordpress = __webpack_require__(1477);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./Components/Post.js



function Post({ post  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        class: "py-6",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            class: "container m-auto px-6 text-gray-600 md:px-12 xl:px-6",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                class: "lg:w-3/4 xl:w-2/4 lg:mx-auto",
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: `/posts/${post.slug}`,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        class: "group relative bg-slate-300 cursor-pointer -mx-4 sm:-mx-8 p-6 sm:p-8 rounded-3xl dark:bg-transparent border border-transparent hover:border-gray-100 dark:shadow-none dark:hover:border-gray-700 dark:hover:bg-gray-800 shadow-2xl shadow-transparent hover:shadow-gray-600/10 sm:gap-8 sm:flex transition duration-300 hover:z-10",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            class: "sm:p-2 sm:pl-0 sm:w-4/6",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    class: "mt-1 mb-2 inline-block font-medium text-gray-400 dark:text-gray-500 sm:mt-0",
                                    children: post.date
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: `/posts/${post.slug}`,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        class: "text-2xl font-medium text-gray-900 title-font mb-2",
                                        children: post.title.rendered
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    class: "my-6 text-gray-600 dark:text-gray-300",
                                    dangerouslySetInnerHTML: {
                                        __html: post.excerpt.rendered
                                    }
                                })
                            ]
                        })
                    })
                })
            })
        })
    });
}

;// CONCATENATED MODULE: ./pages/blogs.js





function blogs({ posts  }) {
    const jsxPosts = posts.map((post)=>{
        return /*#__PURE__*/ jsx_runtime_.jsx(Post, {
            post: post
        }, post.id);
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Blog | CodingJunk"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "A digital programming and development blog to easily learn Python, C++, Java, Android, SQL with our easy examples, tutorials and references."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                class: "mt-12 space-y-2 text-center",
                children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                    class: "text-3xl font-bold text-gray-800 md:text-4xl dark:text-white",
                    children: "Read Our Amazing Blogs"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container ",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row ",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-2 ",
                        children: jsxPosts
                    })
                })
            })
        ]
    });
}
async function getStaticProps({ params  }) {
    const posts = await (0,wordpress/* getPosts */.Jq)();
    return {
        props: {
            posts
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

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

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

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,675], () => (__webpack_exec__(4573)));
module.exports = __webpack_exports__;

})();