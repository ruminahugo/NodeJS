"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/upload",{

/***/ "./pages/upload.js":
/*!*************************!*\
  !*** ./pages/upload.js ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UploadPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction UploadPage() {\n    _s();\n    const [image, setImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [preview, setPreview] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const [uploading, setUploading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [images, setImages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]); // Danh sách ảnh\n    const [editMode, setEditMode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [editId, setEditId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"UploadPage.useEffect\": ()=>{\n            // Lấy danh sách ảnh từ server\n            fetchImages();\n        }\n    }[\"UploadPage.useEffect\"], []);\n    const fetchImages = async ()=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get('https://api-67sm.onrender.com/api/sliders');\n            setImages(response.data);\n        } catch (error) {\n            console.error('Error fetching images:', error);\n        }\n    };\n    const handleImageChange = (e)=>{\n        const file = e.target.files[0];\n        setImage(file);\n        const reader = new FileReader();\n        reader.onloadend = ()=>{\n            setPreview(reader.result);\n        };\n        reader.readAsDataURL(file);\n    };\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        if (!title || !description || !image && !editMode) {\n            alert('Please fill all fields');\n            return;\n        }\n        setUploading(true);\n        try {\n            let imageUrl = preview;\n            // Nếu không ở chế độ chỉnh sửa, upload ảnh mới\n            if (!editMode && image) {\n                const uploadResponse = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post('/api/upload', {\n                    image: preview\n                });\n                imageUrl = uploadResponse.data.url;\n            }\n            if (editMode) {\n                // Chỉnh sửa ảnh\n                await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].put(\"https://api-67sm.onrender.com/api/sliders/\".concat(editId), {\n                    imageUrl,\n                    title,\n                    description\n                });\n                alert('Image updated successfully!');\n            } else {\n                // Thêm ảnh mới\n                await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post('https://api-67sm.onrender.com/api/sliders', {\n                    imageUrl,\n                    title,\n                    description\n                });\n                alert('Image uploaded successfully!');\n            }\n            setImage(null);\n            setPreview('');\n            setTitle('');\n            setDescription('');\n            setEditMode(false);\n            setEditId(null);\n            // Tải lại danh sách\n            fetchImages();\n        } catch (error) {\n            console.error('Error uploading or updating:', error);\n            alert('Failed to upload or update image');\n        } finally{\n            setUploading(false);\n        }\n    };\n    const handleEdit = (id, currentTitle, currentDescription, currentImageUrl)=>{\n        setEditMode(true);\n        setEditId(id);\n        setTitle(currentTitle);\n        setDescription(currentDescription);\n        setPreview(currentImageUrl);\n    };\n    const handleDelete = async (id)=>{\n        if (!window.confirm('Are you sure you want to delete this image?')) return;\n        try {\n            await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"][\"delete\"](\"https://api-67sm.onrender.com/api/sliders/\".concat(id));\n            alert('Image deleted successfully!');\n            fetchImages(); // Tải lại danh sách\n        } catch (error) {\n            console.error('Error deleting image:', error);\n            alert('Failed to delete image');\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: editMode ? 'Edit Image' : 'Upload Image'\n            }, void 0, false, {\n                fileName: \"E:\\\\NodeJS\\\\FUTA\\\\pages\\\\upload.js\",\n                lineNumber: 116,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"E:\\\\NodeJS\\\\FUTA\\\\pages\\\\upload.js\",\n                lineNumber: 117,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"form-group\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: \"Image:\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\NodeJS\\\\FUTA\\\\pages\\\\upload.js\",\n                                lineNumber: 120,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"file\",\n                                accept: \"image/*\",\n                                onChange: handleImageChange,\n                                disabled: editMode\n                            }, void 0, false, {\n                                fileName: \"E:\\\\NodeJS\\\\FUTA\\\\pages\\\\upload.js\",\n                                lineNumber: 121,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\NodeJS\\\\FUTA\\\\pages\\\\upload.js\",\n                        lineNumber: 119,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"E:\\\\NodeJS\\\\FUTA\\\\pages\\\\upload.js\",\n                        lineNumber: 128,\n                        columnNumber: 9\n                    }, this),\n                    preview && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: preview,\n                        alt: \"Preview\",\n                        style: {\n                            width: '200px',\n                            height: '200px'\n                        }\n                    }, void 0, false, {\n                        fileName: \"E:\\\\NodeJS\\\\FUTA\\\\pages\\\\upload.js\",\n                        lineNumber: 129,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"E:\\\\NodeJS\\\\FUTA\\\\pages\\\\upload.js\",\n                        lineNumber: 130,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"form-group\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: \"Title:\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\NodeJS\\\\FUTA\\\\pages\\\\upload.js\",\n                                lineNumber: 132,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                className: \"form-control\",\n                                value: title,\n                                onChange: (e)=>setTitle(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"E:\\\\NodeJS\\\\FUTA\\\\pages\\\\upload.js\",\n                                lineNumber: 133,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\NodeJS\\\\FUTA\\\\pages\\\\upload.js\",\n                        lineNumber: 131,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"E:\\\\NodeJS\\\\FUTA\\\\pages\\\\upload.js\",\n                        lineNumber: 140,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"form-group\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: \"Description:\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\NodeJS\\\\FUTA\\\\pages\\\\upload.js\",\n                                lineNumber: 142,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                className: \"form-control\",\n                                value: description,\n                                onChange: (e)=>setDescription(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"E:\\\\NodeJS\\\\FUTA\\\\pages\\\\upload.js\",\n                                lineNumber: 143,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\NodeJS\\\\FUTA\\\\pages\\\\upload.js\",\n                        lineNumber: 141,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"E:\\\\NodeJS\\\\FUTA\\\\pages\\\\upload.js\",\n                        lineNumber: 149,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"btn btn-primary\",\n                        disabled: uploading,\n                        children: uploading ? 'Saving...' : editMode ? 'Update' : 'Upload'\n                    }, void 0, false, {\n                        fileName: \"E:\\\\NodeJS\\\\FUTA\\\\pages\\\\upload.js\",\n                        lineNumber: 150,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\NodeJS\\\\FUTA\\\\pages\\\\upload.js\",\n                lineNumber: 118,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                fileName: \"E:\\\\NodeJS\\\\FUTA\\\\pages\\\\upload.js\",\n                lineNumber: 155,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Uploaded Images\"\n            }, void 0, false, {\n                fileName: \"E:\\\\NodeJS\\\\FUTA\\\\pages\\\\upload.js\",\n                lineNumber: 157,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row\",\n                children: images.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"No images uploaded yet.\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\NodeJS\\\\FUTA\\\\pages\\\\upload.js\",\n                    lineNumber: 160,\n                    columnNumber: 5\n                }, this) : images.map((img)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-md-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"card\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: img.imageUrl,\n                                    alt: img.title,\n                                    className: \"card-img-top\",\n                                    style: {\n                                        height: '200px',\n                                        objectFit: 'cover'\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\NodeJS\\\\FUTA\\\\pages\\\\upload.js\",\n                                    lineNumber: 165,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"card-body\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                            className: \"card-title\",\n                                            children: img.title\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\NodeJS\\\\FUTA\\\\pages\\\\upload.js\",\n                                            lineNumber: 172,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"card-text\",\n                                            children: img.description\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\NodeJS\\\\FUTA\\\\pages\\\\upload.js\",\n                                            lineNumber: 173,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"btn btn-warning\",\n                                            onClick: ()=>handleEdit(img.id, img.title, img.description, img.imageUrl),\n                                            children: \"Edit\"\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\NodeJS\\\\FUTA\\\\pages\\\\upload.js\",\n                                            lineNumber: 174,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"btn btn-danger\",\n                                            onClick: ()=>handleDelete(img.id),\n                                            children: \"Delete\"\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\NodeJS\\\\FUTA\\\\pages\\\\upload.js\",\n                                            lineNumber: 180,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"E:\\\\NodeJS\\\\FUTA\\\\pages\\\\upload.js\",\n                                    lineNumber: 171,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"E:\\\\NodeJS\\\\FUTA\\\\pages\\\\upload.js\",\n                            lineNumber: 164,\n                            columnNumber: 13\n                        }, this)\n                    }, img.id, false, {\n                        fileName: \"E:\\\\NodeJS\\\\FUTA\\\\pages\\\\upload.js\",\n                        lineNumber: 163,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"E:\\\\NodeJS\\\\FUTA\\\\pages\\\\upload.js\",\n                lineNumber: 158,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\NodeJS\\\\FUTA\\\\pages\\\\upload.js\",\n        lineNumber: 115,\n        columnNumber: 5\n    }, this);\n}\n_s(UploadPage, \"hL0ktOY+CYWcwGLtuvnx5eSxZJo=\");\n_c = UploadPage;\nvar _c;\n$RefreshReg$(_c, \"UploadPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWtCVSxVQUFVcEQ7a0NBQ3pEQSxZQUFZLGNBQWNJLFdBQVcsV0FBVzs7Ozs7Ozs7Ozs7OzBCQUlyRCw4REFBQzBEOzs7OzswQkFFRCw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ3RCO2dCQUFJQyxXQUFVOzBCQUNaeEMsT0FBTzhELE1BQU0sS0FBSyxrQkFDdkIsOERBQUNDOzhCQUFFOzs7OzsyQkFFQy9ELE9BQU9nRSxHQUFHLENBQUMsQ0FBQ2Isb0JBQ1YsOERBQUNaO3dCQUFpQkMsV0FBVTtrQ0FDMUIsNEVBQUNEOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ1c7b0NBQ0NDLEtBQUtELElBQUkxQixRQUFRO29DQUNqQjRCLEtBQUtGLElBQUl6RCxLQUFLO29DQUNkOEMsV0FBVTtvQ0FDVmMsT0FBTzt3Q0FBRUUsUUFBUTt3Q0FBU1MsV0FBVztvQ0FBUTs7Ozs7OzhDQUUvQyw4REFBQzFCO29DQUFJQyxXQUFVOztzREFDYiw4REFBQzBCOzRDQUFHMUIsV0FBVTtzREFBY1csSUFBSXpELEtBQUs7Ozs7OztzREFDckMsOERBQUNxRTs0Q0FBRXZCLFdBQVU7c0RBQWFXLElBQUl2RCxXQUFXOzs7Ozs7c0RBQ3pDLDhEQUFDK0Q7NENBQ0NuQixXQUFVOzRDQUNWMkIsU0FBUyxJQUFNckMsV0FBV3FCLElBQUlwQixFQUFFLEVBQUVvQixJQUFJekQsS0FBSyxFQUFFeUQsSUFBSXZELFdBQVcsRUFBRXVELElBQUkxQixRQUFRO3NEQUMzRTs7Ozs7O3NEQUdELDhEQUFDa0M7NENBQ0NuQixXQUFVOzRDQUNWMkIsU0FBUyxJQUFNaEMsYUFBYWdCLElBQUlwQixFQUFFO3NEQUNuQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VCQXBCR29CLElBQUlwQixFQUFFOzs7Ozs7Ozs7Ozs7Ozs7O0FBOEIxQjtHQTVMd0IxQztLQUFBQSIsInNvdXJjZXMiOlsiRTpcXE5vZGVKU1xcRlVUQVxccGFnZXNcXHVwbG9hZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVcGxvYWRQYWdlKCkge1xyXG4gIGNvbnN0IFtpbWFnZSwgc2V0SW1hZ2VdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW3ByZXZpZXcsIHNldFByZXZpZXddID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtkZXNjcmlwdGlvbiwgc2V0RGVzY3JpcHRpb25dID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFt1cGxvYWRpbmcsIHNldFVwbG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2ltYWdlcywgc2V0SW1hZ2VzXSA9IHVzZVN0YXRlKFtdKTsgLy8gRGFuaCBzw6FjaCDhuqNuaFxyXG4gIGNvbnN0IFtlZGl0TW9kZSwgc2V0RWRpdE1vZGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtlZGl0SWQsIHNldEVkaXRJZF0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIEzhuqV5IGRhbmggc8OhY2gg4bqjbmggdOG7qyBzZXJ2ZXJcclxuICAgIGZldGNoSW1hZ2VzKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBmZXRjaEltYWdlcyA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwczovL2FwaS02N3NtLm9ucmVuZGVyLmNvbS9hcGkvc2xpZGVycycpO1xyXG4gICAgICBzZXRJbWFnZXMocmVzcG9uc2UuZGF0YSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBpbWFnZXM6JywgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUltYWdlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIGNvbnN0IGZpbGUgPSBlLnRhcmdldC5maWxlc1swXTtcclxuICAgIHNldEltYWdlKGZpbGUpO1xyXG5cclxuICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4ge1xyXG4gICAgICBzZXRQcmV2aWV3KHJlYWRlci5yZXN1bHQpO1xyXG4gICAgfTtcclxuICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgaWYgKCF0aXRsZSB8fCAhZGVzY3JpcHRpb24gfHwgKCFpbWFnZSAmJiAhZWRpdE1vZGUpKSB7XHJcbiAgICAgIGFsZXJ0KCdQbGVhc2UgZmlsbCBhbGwgZmllbGRzJyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBzZXRVcGxvYWRpbmcodHJ1ZSk7XHJcbiAgICB0cnkge1xyXG4gICAgICBsZXQgaW1hZ2VVcmwgPSBwcmV2aWV3O1xyXG5cclxuICAgICAgLy8gTuG6v3Uga2jDtG5nIOG7nyBjaOG6vyDEkeG7mSBjaOG7iW5oIHPhu61hLCB1cGxvYWQg4bqjbmggbeG7m2lcclxuICAgICAgaWYgKCFlZGl0TW9kZSAmJiBpbWFnZSkge1xyXG4gICAgICAgIGNvbnN0IHVwbG9hZFJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCgnL2FwaS91cGxvYWQnLCB7IGltYWdlOiBwcmV2aWV3IH0pO1xyXG4gICAgICAgIGltYWdlVXJsID0gdXBsb2FkUmVzcG9uc2UuZGF0YS51cmw7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChlZGl0TW9kZSkge1xyXG4gICAgICAgIC8vIENo4buJbmggc+G7rWEg4bqjbmhcclxuICAgICAgICBhd2FpdCBheGlvcy5wdXQoYGh0dHBzOi8vYXBpLTY3c20ub25yZW5kZXIuY29tL2FwaS9zbGlkZXJzLyR7ZWRpdElkfWAsIHtcclxuICAgICAgICAgIGltYWdlVXJsLFxyXG4gICAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbixcclxuICAgICAgICB9KTtcclxuICAgICAgICBhbGVydCgnSW1hZ2UgdXBkYXRlZCBzdWNjZXNzZnVsbHkhJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gVGjDqm0g4bqjbmggbeG7m2lcclxuICAgICAgICBhd2FpdCBheGlvcy5wb3N0KCdodHRwczovL2FwaS02N3NtLm9ucmVuZGVyLmNvbS9hcGkvc2xpZGVycycsIHtcclxuICAgICAgICAgIGltYWdlVXJsLFxyXG4gICAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbixcclxuICAgICAgICB9KTtcclxuICAgICAgICBhbGVydCgnSW1hZ2UgdXBsb2FkZWQgc3VjY2Vzc2Z1bGx5IScpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzZXRJbWFnZShudWxsKTtcclxuICAgICAgc2V0UHJldmlldygnJyk7XHJcbiAgICAgIHNldFRpdGxlKCcnKTtcclxuICAgICAgc2V0RGVzY3JpcHRpb24oJycpO1xyXG4gICAgICBzZXRFZGl0TW9kZShmYWxzZSk7XHJcbiAgICAgIHNldEVkaXRJZChudWxsKTtcclxuXHJcbiAgICAgIC8vIFThuqNpIGzhuqFpIGRhbmggc8OhY2hcclxuICAgICAgZmV0Y2hJbWFnZXMoKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwbG9hZGluZyBvciB1cGRhdGluZzonLCBlcnJvcik7XHJcbiAgICAgIGFsZXJ0KCdGYWlsZWQgdG8gdXBsb2FkIG9yIHVwZGF0ZSBpbWFnZScpO1xyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgICAgc2V0VXBsb2FkaW5nKGZhbHNlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVFZGl0ID0gKGlkLCBjdXJyZW50VGl0bGUsIGN1cnJlbnREZXNjcmlwdGlvbiwgY3VycmVudEltYWdlVXJsKSA9PiB7XHJcbiAgICBzZXRFZGl0TW9kZSh0cnVlKTtcclxuICAgIHNldEVkaXRJZChpZCk7XHJcbiAgICBzZXRUaXRsZShjdXJyZW50VGl0bGUpO1xyXG4gICAgc2V0RGVzY3JpcHRpb24oY3VycmVudERlc2NyaXB0aW9uKTtcclxuICAgIHNldFByZXZpZXcoY3VycmVudEltYWdlVXJsKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVEZWxldGUgPSBhc3luYyAoaWQpID0+IHtcclxuICAgIGlmICghd2luZG93LmNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBpbWFnZT8nKSkgcmV0dXJuO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGF4aW9zLmRlbGV0ZShgaHR0cHM6Ly9hcGktNjdzbS5vbnJlbmRlci5jb20vYXBpL3NsaWRlcnMvJHtpZH1gKTtcclxuICAgICAgYWxlcnQoJ0ltYWdlIGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5IScpO1xyXG4gICAgICBmZXRjaEltYWdlcygpOyAvLyBU4bqjaSBs4bqhaSBkYW5oIHPDoWNoXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkZWxldGluZyBpbWFnZTonLCBlcnJvcik7XHJcbiAgICAgIGFsZXJ0KCdGYWlsZWQgdG8gZGVsZXRlIGltYWdlJyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIDxoMT57ZWRpdE1vZGUgPyAnRWRpdCBJbWFnZScgOiAnVXBsb2FkIEltYWdlJ308L2gxPlxyXG4gICAgICA8YnIgLz5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICA8bGFiZWw+SW1hZ2U6PC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgIGFjY2VwdD1cImltYWdlLypcIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW1hZ2VDaGFuZ2V9XHJcbiAgICAgICAgICAgIGRpc2FibGVkPXtlZGl0TW9kZX0gLy8gS2jDtG5nIGNobyBjaOG7jW4g4bqjbmgga2hpIGNo4buJbmggc+G7rWFcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAge3ByZXZpZXcgJiYgPGltZyBzcmM9e3ByZXZpZXd9IGFsdD1cIlByZXZpZXdcIiBzdHlsZT17eyB3aWR0aDogJzIwMHB4JywgaGVpZ2h0OiAnMjAwcHgnIH19IC8+fVxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgPGxhYmVsPlRpdGxlOjwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICB2YWx1ZT17dGl0bGV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgIDxsYWJlbD5EZXNjcmlwdGlvbjo8L2xhYmVsPlxyXG4gICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtkZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXREZXNjcmlwdGlvbihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIGRpc2FibGVkPXt1cGxvYWRpbmd9PlxyXG4gICAgICAgICAge3VwbG9hZGluZyA/ICdTYXZpbmcuLi4nIDogZWRpdE1vZGUgPyAnVXBkYXRlJyA6ICdVcGxvYWQnfVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICA8aHIgLz5cclxuXHJcbiAgICAgIDxoMj5VcGxvYWRlZCBJbWFnZXM8L2gyPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgIHtpbWFnZXMubGVuZ3RoID09PSAwID8gKFxyXG4gICAgPHA+Tm8gaW1hZ2VzIHVwbG9hZGVkIHlldC48L3A+XHJcbikgOiAoXHJcbiAgICAgICAgaW1hZ2VzLm1hcCgoaW1nKSA9PiAoXHJcbiAgICAgICAgICA8ZGl2IGtleT17aW1nLmlkfSBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9e2ltZy5pbWFnZVVybH1cclxuICAgICAgICAgICAgICAgIGFsdD17aW1nLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FyZC1pbWctdG9wXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogJzIwMHB4Jywgb2JqZWN0Rml0OiAnY292ZXInIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj57aW1nLnRpdGxlfTwvaDU+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj57aW1nLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi13YXJuaW5nXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlRWRpdChpbWcuaWQsIGltZy50aXRsZSwgaW1nLmRlc2NyaXB0aW9uLCBpbWcuaW1hZ2VVcmwpfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBFZGl0XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWxldGUoaW1nLmlkKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgRGVsZXRlXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJheGlvcyIsIlVwbG9hZFBhZ2UiLCJpbWFnZSIsInNldEltYWdlIiwicHJldmlldyIsInNldFByZXZpZXciLCJ0aXRsZSIsInNldFRpdGxlIiwiZGVzY3JpcHRpb24iLCJzZXREZXNjcmlwdGlvbiIsInVwbG9hZGluZyIsInNldFVwbG9hZGluZyIsImltYWdlcyIsInNldEltYWdlcyIsImVkaXRNb2RlIiwic2V0RWRpdE1vZGUiLCJlZGl0SWQiLCJzZXRFZGl0SWQiLCJmZXRjaEltYWdlcyIsInJlc3BvbnNlIiwiZ2V0IiwiZGF0YSIsImVycm9yIiwiY29uc29sZSIsImhhbmRsZUltYWdlQ2hhbmdlIiwiZSIsImZpbGUiLCJ0YXJnZXQiLCJmaWxlcyIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWRlbmQiLCJyZXN1bHQiLCJyZWFkQXNEYXRhVVJMIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJhbGVydCIsImltYWdlVXJsIiwidXBsb2FkUmVzcG9uc2UiLCJwb3N0IiwidXJsIiwicHV0IiwiaGFuZGxlRWRpdCIsImlkIiwiY3VycmVudFRpdGxlIiwiY3VycmVudERlc2NyaXB0aW9uIiwiY3VycmVudEltYWdlVXJsIiwiaGFuZGxlRGVsZXRlIiwid2luZG93IiwiY29uZmlybSIsImRlbGV0ZSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiYnIiLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImlucHV0IiwidHlwZSIsImFjY2VwdCIsIm9uQ2hhbmdlIiwiZGlzYWJsZWQiLCJpbWciLCJzcmMiLCJhbHQiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwidmFsdWUiLCJ0ZXh0YXJlYSIsImJ1dHRvbiIsImhyIiwiaDIiLCJsZW5ndGgiLCJwIiwibWFwIiwib2JqZWN0Rml0IiwiaDUiLCJvbkNsaWNrIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/upload.js\n"));

/***/ })

});