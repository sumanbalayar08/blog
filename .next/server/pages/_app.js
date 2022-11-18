"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 9225:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./Components/Navbar.js




function Navbar() {
    const { 0: navbar , 1: setNavbar  } = (0,external_react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                className: "w-full bg-white",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex items-center justify-between py-3",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: "flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                className: "ml-3 text-xl font-bold",
                                                children: [
                                                    "CODING",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "text-blue-800",
                                                        children: "JUNK"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "md:hidden flex flex-wrap",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                className: "p-2 text-gray-900700 rounded-md outline-none focus:border-gray-400 focus:border",
                                                onClick: ()=>setNavbar(!navbar),
                                                children: navbar ? /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    className: "w-6 h-6 text-gray-900",
                                                    viewBox: "0 0 20 20",
                                                    fill: "currentColor",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                        fillRule: "evenodd",
                                                        d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.2707a1 1 0 010-1.414z",
                                                        clipRule: "evenodd"
                                                    })
                                                }) : /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    className: "w-6 h-6 text-gray-900",
                                                    fill: "none",
                                                    viewBox: "0 0 24 24",
                                                    stroke: "currentColor",
                                                    strokeWidth: 2,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        d: "M4 6h16M4 12h16M4 18h16"
                                                    })
                                                })
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: `flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"}`,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        className: "items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 font-base",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                class: "text-gray-900 hover:border-b-2 hover:border-gray-900 font-sans text-lg md:font-medium",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/",
                                                    children: "Home"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                class: "text-gray-900 hover:border-b-2 hover:border-gray-900 font-sans text-lg md:font-medium",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/courses",
                                                    children: "Courses"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                class: "text-gray-900 hover:border-b-2 hover:border-gray-900 font-sans text-lg md:font-medium",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/blogs",
                                                    children: "Blogs"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                class: "text-gray-900 hover:border-b-2 hover:border-gray-900 font-sans text-lg md:font-medium",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/practice",
                                                    children: "Practice"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                class: "text-gray-900 hover:border-b-2 hover:border-gray-900 font-sans text-lg md:font-medium",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/interview",
                                                    children: "Interview"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                className: "text-white bg-blue-800 hover:bg-blue-900 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center mx-1",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/Subscribe",
                                                    children: "Subscribe"
                                                })
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex-grow border-t border-gray-200"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("header", {
                className: "text-gray-600 body-font top-0 shadow-md invisible lg:visible",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container mx-auto flex flex-wrap py-2 flex-col md:flex-row items-center",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        class: "md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                class: " hover:text-green-700 font-serif text-black md:mr-5",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/",
                                    children: "Data Structures"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                class: " hover:text-green-700 font-serif text-black md:mr-5",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/",
                                    children: "Algorithms"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                class: " hover:text-green-700 font-serif text-black md:mr-5",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/",
                                    children: "C++"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                class: " hover:text-green-700 font-serif text-black md:mr-5",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/",
                                    children: "Interview"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                class: " hover:text-green-700 font-serif text-black md:mr-5",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/",
                                    children: "Java"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                class: " hover:text-green-700 font-serif text-black md:mr-5",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/",
                                    children: "Python"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                class: " hover:text-green-700 font-serif text-black md:mr-5",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/",
                                    children: "Competitive"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                class: " hover:text-green-700 font-serif text-black md:mr-5",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/",
                                    children: "Machine Learning"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                class: " hover:text-green-700 font-serif text-black md:mr-5",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/",
                                    children: "Projects"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                class: " hover:text-green-700 font-serif text-black md:mr-5",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/",
                                    children: "Javascript"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                class: " hover:text-green-700 font-serif text-black md:mr-5",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/",
                                    children: "Puzzle"
                                })
                            })
                        ]
                    })
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./Components/Navbar2.js



const Navbar2 = ()=>{
    return /*#__PURE__*/ _jsx("header", {
        className: "text-gray-600 body-font top-0 shadow-md",
        children: /*#__PURE__*/ _jsx("div", {
            className: "container mx-auto flex flex-wrap py-2 flex-col md:flex-row items-center",
            children: /*#__PURE__*/ _jsxs("ul", {
                class: "md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center",
                children: [
                    /*#__PURE__*/ _jsx("li", {
                        class: " hover:text-green-700 font-serif text-black md:mr-5",
                        children: /*#__PURE__*/ _jsx(Link, {
                            href: "/",
                            children: "Data Structures"
                        })
                    }),
                    /*#__PURE__*/ _jsx("li", {
                        class: " hover:text-green-700 font-serif text-black md:mr-5",
                        children: /*#__PURE__*/ _jsx(Link, {
                            href: "/",
                            children: "Algorithms"
                        })
                    }),
                    /*#__PURE__*/ _jsx("li", {
                        class: " hover:text-green-700 font-serif text-black md:mr-5",
                        children: /*#__PURE__*/ _jsx(Link, {
                            href: "/",
                            children: "C++"
                        })
                    }),
                    /*#__PURE__*/ _jsx("li", {
                        class: " hover:text-green-700 font-serif text-black md:mr-5",
                        children: /*#__PURE__*/ _jsx(Link, {
                            href: "/",
                            children: "Interview"
                        })
                    }),
                    /*#__PURE__*/ _jsx("li", {
                        class: " hover:text-green-700 font-serif text-black md:mr-5",
                        children: /*#__PURE__*/ _jsx(Link, {
                            href: "/",
                            children: "Java"
                        })
                    }),
                    /*#__PURE__*/ _jsx("li", {
                        class: " hover:text-green-700 font-serif text-black md:mr-5",
                        children: /*#__PURE__*/ _jsx(Link, {
                            href: "/",
                            children: "Python"
                        })
                    }),
                    /*#__PURE__*/ _jsx("li", {
                        class: " hover:text-green-700 font-serif text-black md:mr-5",
                        children: /*#__PURE__*/ _jsx(Link, {
                            href: "/",
                            children: "Competitive"
                        })
                    }),
                    /*#__PURE__*/ _jsx("li", {
                        class: " hover:text-green-700 font-serif text-black md:mr-5",
                        children: /*#__PURE__*/ _jsx(Link, {
                            href: "/",
                            children: "Machine Learning"
                        })
                    }),
                    /*#__PURE__*/ _jsx("li", {
                        class: " hover:text-green-700 font-serif text-black md:mr-5",
                        children: /*#__PURE__*/ _jsx(Link, {
                            href: "/",
                            children: "Projects"
                        })
                    }),
                    /*#__PURE__*/ _jsx("li", {
                        class: " hover:text-green-700 font-serif text-black md:mr-5",
                        children: /*#__PURE__*/ _jsx(Link, {
                            href: "/",
                            children: "Javascript"
                        })
                    }),
                    /*#__PURE__*/ _jsx("li", {
                        class: " hover:text-green-700 font-serif text-black md:mr-5",
                        children: /*#__PURE__*/ _jsx(Link, {
                            href: "/",
                            children: "Puzzle"
                        })
                    }),
                    /*#__PURE__*/ _jsx("li", {
                        class: " hover:text-green-700 font-serif text-black md:mr-5",
                        children: /*#__PURE__*/ _jsx(Link, {
                            href: "/",
                            children: "Hacks"
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const Components_Navbar2 = ((/* unused pure expression or super */ null && (Navbar2)));

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./Components/Footer.js



const Footer = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        class: "text-white bg-gray-900 body-font",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                class: "container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        class: "w-64 flex-shrink-0 mx-auto text-center md:text-left",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                class: "flex title-font font-medium items-center md:justify-start justify-center text-white",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                    class: "ml-3 font-bold text-2xl",
                                    children: [
                                        "CODING",
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "text-blue-900",
                                            children: "JUNK"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                class: "mt-2 text-xl font-semibold text-white",
                                children: "Start your programming journey now!!"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        class: "flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                class: "lg:w-1/4 md:w-1/2 w-full px-4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        class: "title-font font-semibold text-lg text-white tracking-widest mb-3",
                                        children: "LEARN TUTORIALS"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                                        class: "list-none mb-10 space-y-2 font-medium",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: "Learn JAVA"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: "Learn C++"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: "Learn PYTHON"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: "Learn JAVASCRIPT"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: "Learn ALGORITHMS"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: "Learn DSA"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: "Learn HTML"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                class: "lg:w-1/4 md:w-1/2 w-full px-4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        class: "title-font font-semibold text-lg text-white tracking-widest mb-3",
                                        children: "OUR SERVICES"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                                        class: "list-none mb-10 space-y-2 font-medium",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: "Web Designing"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: "Website Development"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: "App Development"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: "Digital Marketing"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: "SEO Optimization"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                class: "lg:w-1/4 md:w-1/2 w-full px-4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        class: "title-font font-semibold text-lg text-white tracking-widest mb-3",
                                        children: "TERMS"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                                        class: "list-none mb-10 space-y-2 font-medium",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/terms",
                                                    children: "Terms of Use"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/privacy",
                                                    children: "Privacy Policy"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/aboutus",
                                                    children: "About Us"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/contact",
                                                    children: "Contact Us"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                class: "lg:w-1/4 md:w-1/2 w-full pr-4 space-y-2",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        class: "title-font text-white font-semibold text-lg tracking-widest mb-3",
                                        children: "CONTACT"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "Address: Chakupat, Pulchowk"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "Lalitpur, 44600, Nepal"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "Contact No: (+977) 9880691680"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "Sitemaps"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/aboutme",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "cursor-pointer",
                                            children: "About Me"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                class: "bg-gray00",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    class: "container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            class: "text-white text-sm text-center sm:text-left",
                            children: [
                                "Copyrights \xa9 2022 Coding Junk",
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    class: "text-white ml-1",
                                    target: "_blank",
                                    children: "| All Rights Reserved"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                            class: "inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "https://www.facebook.com/codingjunk",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        class: "text-blue-500",
                                        target: "_blank",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                            fill: "currentColor",
                                            "stroke-linecap": "round",
                                            "stroke-linejoin": "round",
                                            "stroke-width": "2",
                                            class: "w-5 h-5",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                d: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "https://www.instagram.com/codingjunk/",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        class: "ml-3 text-pink-500",
                                        target: "_blank",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                            fill: "none",
                                            stroke: "currentColor",
                                            "stroke-linecap": "round",
                                            "stroke-linejoin": "round",
                                            "stroke-width": "2",
                                            class: "w-5 h-5",
                                            viewBox: "0 0 24 24",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                                    width: "20",
                                                    height: "20",
                                                    x: "2",
                                                    y: "2",
                                                    rx: "5",
                                                    ry: "5"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    d: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "https://www.linkedin.com/in/balayar07/",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        class: "ml-3 text-sky-500",
                                        target: "_blank",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                            fill: "currentColor",
                                            stroke: "currentColor",
                                            "stroke-linecap": "round",
                                            "stroke-linejoin": "round",
                                            "stroke-width": "0",
                                            class: "w-5 h-5",
                                            viewBox: "0 0 24 24",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    stroke: "none",
                                                    d: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                                                    cx: "4",
                                                    cy: "4",
                                                    r: "2",
                                                    stroke: "none"
                                                })
                                            ]
                                        })
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const Components_Footer = (Footer);

;// CONCATENATED MODULE: ./pages/_app.js






function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("link", {
                    rel: "shortcut icon",
                    href: "/favicon.png"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Navbar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Components_Footer, {})
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


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
var __webpack_exports__ = __webpack_require__.X(0, [676,664,675], () => (__webpack_exec__(9225)));
module.exports = __webpack_exports__;

})();