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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UploadPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction UploadPage() {\n    _s();\n    const [image, setImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [preview, setPreview] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const [uploading, setUploading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [images, setImages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]); // Danh sách ảnh\n    const [editMode, setEditMode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [editId, setEditId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"UploadPage.useEffect\": ()=>{\n            // Lấy danh sách ảnh từ server\n            fetchImages();\n        }\n    }[\"UploadPage.useEffect\"], []);\n    const fetchImages = async ()=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get('https://api-67sm.onrender.com/api/sliders');\n            setImages(response.data);\n        } catch (error) {\n            console.error('Error fetching images:', error);\n        }\n    };\n    const handleImageChange = (e)=>{\n        const file = e.target.files[0];\n        setImage(file);\n        const reader = new FileReader();\n        reader.onloadend = ()=>{\n            setPreview(reader.result);\n        };\n        reader.readAsDataURL(file);\n    };\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        if (!title || !description || !image && !editMode) {\n            alert('Please fill all fields');\n            return;\n        }\n        setUploading(true);\n        try {\n            let imageUrl = preview;\n            // Nếu không ở chế độ chỉnh sửa, upload ảnh mới\n            if (!editMode && image) {\n                const uploadResponse = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post('/api/upload', {\n                    image: preview\n                });\n                imageUrl = uploadResponse.data.url;\n            }\n            if (editMode) {\n                // Chỉnh sửa ảnh\n                await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].put(\"https://api-67sm.onrender.com/api/sliders/\".concat(editId), {\n                    imageUrl,\n                    title,\n                    description\n                });\n                alert('Image updated successfully!');\n            } else {\n                // Thêm ảnh mới\n                await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post('https://api-67sm.onrender.com/api/sliders', {\n                    imageUrl,\n                    title,\n                    description\n                });\n                alert('Image uploaded successfully!');\n            }\n            setImage(null);\n            setPreview('');\n            setTitle('');\n            setDescription('');\n            setEditMode(false);\n            setEditId(null);\n            // Tải lại danh sách\n            fetchImages();\n        } catch (error) {\n            console.error('Error uploading or updating:', error);\n            alert('Failed to upload or update image');\n        } finally{\n            setUploading(false);\n        }\n    };\n    const handleEdit = (id, currentTitle, currentDescription, currentImageUrl)=>{\n        setEditMode(true);\n        setEditId(id);\n        setTitle(currentTitle);\n        setDescription(currentDescription);\n        setPreview(currentImageUrl);\n    };\n    const handleDelete = async (id)=>{\n        if (!window.confirm('Are you sure you want to delete this image?')) return;\n        try {\n            await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"][\"delete\"]('https://api-67sm.onrender.com/api/sliders/${id}');\n            alert('Image deleted successfully!');\n            fetchImages(); // Tải lại danh sách\n        } catch (error) {\n            console.error('Error deleting image:', error);\n            alert('Failed to delete image');\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: editMode ? 'Edit Image' : 'Upload Image'\n            }, void 0, false, {\n                fileName: \"E:\\\\NodeJS\\\\FUTA\\\\pages\\\\upload.js\",\n                lineNumber: 116,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"E:\\\\NodeJS\\\\FUTA\\\\pages\\\\upload.js\",\n                lineNumber: 117,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"form-group\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: \"Image:\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\NodeJS\\\\FUTA\\\\pages\\\\upload.js\",\n                                lineNumber: 120,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"file\",\n                                accept: \"image/*\",\n                                onChange: handleImageChange,\n                                disabled: editMode\n                            }, void 0, false, {\n                                fileName: \"E:\\\\NodeJS\\\\FUTA\\\\pages\\\\upload.js\",\n                                lineNumber: 121,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\NodeJS\\\\FUTA\\\\pages\\\\upload.js\",\n                        lineNumber: 119,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"E:\\\\NodeJS\\\\FUTA\\\\pages\\\\upload.js\",\n                        lineNumber: 128,\n                        columnNumber: 9\n                    }, this),\n                    preview && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: preview,\n                        alt: \"Preview\",\n                        style: {\n                            width: '200px',\n                            height: '200px'\n                        }\n                    }, void 0, false, {\n                        fileName: \"E:\\\\NodeJS\\\\FUTA\\\\pages\\\\upload.js\",\n                        lineNumber: 129,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"E:\\\\NodeJS\\\\FUTA\\\\pages\\\\upload.js\",\n                        lineNumber: 130,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"form-group\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: \"Title:\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\NodeJS\\\\FUTA\\\\pages\\\\upload.js\",\n                                lineNumber: 132,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                className: \"form-control\",\n                                value: title,\n                                onChange: (e)=>setTitle(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"E:\\\\NodeJS\\\\FUTA\\\\pages\\\\upload.js\",\n                                lineNumber: 133,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\NodeJS\\\\FUTA\\\\pages\\\\upload.js\",\n                        lineNumber: 131,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"E:\\\\NodeJS\\\\FUTA\\\\pages\\\\upload.js\",\n                        lineNumber: 140,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"form-group\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: \"Description:\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\NodeJS\\\\FUTA\\\\pages\\\\upload.js\",\n                                lineNumber: 142,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                className: \"form-control\",\n                                value: description,\n                                onChange: (e)=>setDescription(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"E:\\\\NodeJS\\\\FUTA\\\\pages\\\\upload.js\",\n                                lineNumber: 143,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\NodeJS\\\\FUTA\\\\pages\\\\upload.js\",\n                        lineNumber: 141,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"E:\\\\NodeJS\\\\FUTA\\\\pages\\\\upload.js\",\n                        lineNumber: 149,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"btn btn-primary\",\n                        disabled: uploading,\n                        children: uploading ? 'Saving...' : editMode ? 'Update' : 'Upload'\n                    }, void 0, false, {\n                        fileName: \"E:\\\\NodeJS\\\\FUTA\\\\pages\\\\upload.js\",\n                        lineNumber: 150,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\NodeJS\\\\FUTA\\\\pages\\\\upload.js\",\n                lineNumber: 118,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                fileName: \"E:\\\\NodeJS\\\\FUTA\\\\pages\\\\upload.js\",\n                lineNumber: 155,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Uploaded Images\"\n            }, void 0, false, {\n                fileName: \"E:\\\\NodeJS\\\\FUTA\\\\pages\\\\upload.js\",\n                lineNumber: 157,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row\",\n                children: images.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"No images uploaded yet.\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\NodeJS\\\\FUTA\\\\pages\\\\upload.js\",\n                    lineNumber: 160,\n                    columnNumber: 5\n                }, this) : images.map((img)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-md-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"card\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: img.imageUrl,\n                                    alt: img.title,\n                                    className: \"card-img-top\",\n                                    style: {\n                                        height: '200px',\n                                        objectFit: 'cover'\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\NodeJS\\\\FUTA\\\\pages\\\\upload.js\",\n                                    lineNumber: 165,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"card-body\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                            className: \"card-title\",\n                                            children: img.title\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\NodeJS\\\\FUTA\\\\pages\\\\upload.js\",\n                                            lineNumber: 172,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"card-text\",\n                                            children: img.description\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\NodeJS\\\\FUTA\\\\pages\\\\upload.js\",\n                                            lineNumber: 173,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"btn btn-warning\",\n                                            onClick: ()=>handleEdit(img.id, img.title, img.description, img.imageUrl),\n                                            children: \"Edit\"\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\NodeJS\\\\FUTA\\\\pages\\\\upload.js\",\n                                            lineNumber: 174,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"btn btn-danger\",\n                                            onClick: ()=>handleDelete(img.id),\n                                            children: \"Delete\"\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\NodeJS\\\\FUTA\\\\pages\\\\upload.js\",\n                                            lineNumber: 180,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"E:\\\\NodeJS\\\\FUTA\\\\pages\\\\upload.js\",\n                                    lineNumber: 171,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"E:\\\\NodeJS\\\\FUTA\\\\pages\\\\upload.js\",\n                            lineNumber: 164,\n                            columnNumber: 13\n                        }, this)\n                    }, img.id, false, {\n                        fileName: \"E:\\\\NodeJS\\\\FUTA\\\\pages\\\\upload.js\",\n                        lineNumber: 163,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"E:\\\\NodeJS\\\\FUTA\\\\pages\\\\upload.js\",\n                lineNumber: 158,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\NodeJS\\\\FUTA\\\\pages\\\\upload.js\",\n        lineNumber: 115,\n        columnNumber: 5\n    }, this);\n}\n_s(UploadPage, \"hL0ktOY+CYWcwGLtuvnx5eSxZJo=\");\n_c = UploadPage;\nvar _c;\n$RefreshReg$(_c, \"UploadPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91cGxvYWQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUE0QztBQUNsQjtBQUNvQjtBQUUvQixTQUFTRzs7SUFDdEIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdMLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ00sU0FBU0MsV0FBVyxHQUFHUCwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNRLE9BQU9DLFNBQVMsR0FBR1QsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDVSxhQUFhQyxlQUFlLEdBQUdYLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ1ksV0FBV0MsYUFBYSxHQUFHYiwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNjLFFBQVFDLFVBQVUsR0FBR2YsK0NBQVFBLENBQUMsRUFBRSxHQUFHLGdCQUFnQjtJQUMxRCxNQUFNLENBQUNnQixVQUFVQyxZQUFZLEdBQUdqQiwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNrQixRQUFRQyxVQUFVLEdBQUduQiwrQ0FBUUEsQ0FBQztJQUVyQ0MsZ0RBQVNBO2dDQUFDO1lBQ1IsOEJBQThCO1lBQzlCbUI7UUFDRjsrQkFBRyxFQUFFO0lBRUwsTUFBTUEsY0FBYztRQUNsQixJQUFJO1lBQ0YsTUFBTUMsV0FBVyxNQUFNbkIsaURBQVMsQ0FBQztZQUNqQ2EsVUFBVU0sU0FBU0UsSUFBSTtRQUN6QixFQUFFLE9BQU9DLE9BQU87WUFDZEMsUUFBUUQsS0FBSyxDQUFDLDBCQUEwQkE7UUFDMUM7SUFDRjtJQUVBLE1BQU1FLG9CQUFvQixDQUFDQztRQUN6QixNQUFNQyxPQUFPRCxFQUFFRSxNQUFNLENBQUNDLEtBQUssQ0FBQyxFQUFFO1FBQzlCekIsU0FBU3VCO1FBRVQsTUFBTUcsU0FBUyxJQUFJQztRQUNuQkQsT0FBT0UsU0FBUyxHQUFHO1lBQ2pCMUIsV0FBV3dCLE9BQU9HLE1BQU07UUFDMUI7UUFDQUgsT0FBT0ksYUFBYSxDQUFDUDtJQUN2QjtJQUVBLE1BQU1RLGVBQWUsT0FBT1Q7UUFDMUJBLEVBQUVVLGNBQWM7UUFFaEIsSUFBSSxDQUFDN0IsU0FBUyxDQUFDRSxlQUFnQixDQUFDTixTQUFTLENBQUNZLFVBQVc7WUFDbkRzQixNQUFNO1lBQ047UUFDRjtRQUVBekIsYUFBYTtRQUNiLElBQUk7WUFDRixJQUFJMEIsV0FBV2pDO1lBRWYsK0NBQStDO1lBQy9DLElBQUksQ0FBQ1UsWUFBWVosT0FBTztnQkFDdEIsTUFBTW9DLGlCQUFpQixNQUFNdEMsa0RBQVUsQ0FBQyxlQUFlO29CQUFFRSxPQUFPRTtnQkFBUTtnQkFDeEVpQyxXQUFXQyxlQUFlakIsSUFBSSxDQUFDbUIsR0FBRztZQUNwQztZQUVBLElBQUkxQixVQUFVO2dCQUNaLGdCQUFnQjtnQkFDaEIsTUFBTWQsaURBQVMsQ0FBQyw2Q0FBb0QsT0FBUGdCLFNBQVU7b0JBQ3JFcUI7b0JBQ0EvQjtvQkFDQUU7Z0JBQ0Y7Z0JBQ0E0QixNQUFNO1lBQ1IsT0FBTztnQkFDTCxlQUFlO2dCQUNmLE1BQU1wQyxrREFBVSxDQUFDLDZDQUE2QztvQkFDNURxQztvQkFDQS9CO29CQUNBRTtnQkFDRjtnQkFDQTRCLE1BQU07WUFDUjtZQUVBakMsU0FBUztZQUNURSxXQUFXO1lBQ1hFLFNBQVM7WUFDVEUsZUFBZTtZQUNmTSxZQUFZO1lBQ1pFLFVBQVU7WUFFVixvQkFBb0I7WUFDcEJDO1FBQ0YsRUFBRSxPQUFPSSxPQUFPO1lBQ2RDLFFBQVFELEtBQUssQ0FBQyxnQ0FBZ0NBO1lBQzlDYyxNQUFNO1FBQ1IsU0FBVTtZQUNSekIsYUFBYTtRQUNmO0lBQ0Y7SUFFQSxNQUFNK0IsYUFBYSxDQUFDQyxJQUFJQyxjQUFjQyxvQkFBb0JDO1FBQ3hEL0IsWUFBWTtRQUNaRSxVQUFVMEI7UUFDVnBDLFNBQVNxQztRQUNUbkMsZUFBZW9DO1FBQ2Z4QyxXQUFXeUM7SUFDYjtJQUVBLE1BQU1DLGVBQWUsT0FBT0o7UUFDMUIsSUFBSSxDQUFDSyxPQUFPQyxPQUFPLENBQUMsZ0RBQWdEO1FBRXBFLElBQUk7WUFDRixNQUFNakQsdURBQVksQ0FBQztZQUNuQm9DLE1BQU07WUFDTmxCLGVBQWUsb0JBQW9CO1FBQ3JDLEVBQUUsT0FBT0ksT0FBTztZQUNkQyxRQUFRRCxLQUFLLENBQUMseUJBQXlCQTtZQUN2Q2MsTUFBTTtRQUNSO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ2U7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDOzBCQUFJdkMsV0FBVyxlQUFlOzs7Ozs7MEJBQy9CLDhEQUFDd0M7Ozs7OzBCQUNELDhEQUFDQztnQkFBS0MsVUFBVXRCOztrQ0FDZCw4REFBQ2lCO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0s7MENBQU07Ozs7OzswQ0FDUCw4REFBQ0M7Z0NBQ0NDLE1BQUs7Z0NBQ0xDLFFBQU87Z0NBQ1BDLFVBQVVyQztnQ0FDVnNDLFVBQVVoRDs7Ozs7Ozs7Ozs7O2tDQUdkLDhEQUFDd0M7Ozs7O29CQUNBbEQseUJBQVcsOERBQUMyRDt3QkFBSUMsS0FBSzVEO3dCQUFTNkQsS0FBSTt3QkFBVUMsT0FBTzs0QkFBRUMsT0FBTzs0QkFBU0MsUUFBUTt3QkFBUTs7Ozs7O2tDQUN0Riw4REFBQ2Q7Ozs7O2tDQUNELDhEQUFDSDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNLOzBDQUFNOzs7Ozs7MENBQ1AsOERBQUNDO2dDQUNDQyxNQUFLO2dDQUNMUCxXQUFVO2dDQUNWaUIsT0FBTy9EO2dDQUNQdUQsVUFBVSxDQUFDcEMsSUFBTWxCLFNBQVNrQixFQUFFRSxNQUFNLENBQUMwQyxLQUFLOzs7Ozs7Ozs7Ozs7a0NBRzVDLDhEQUFDZjs7Ozs7a0NBQ0QsOERBQUNIO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0s7MENBQU07Ozs7OzswQ0FDUCw4REFBQ2E7Z0NBQ0NsQixXQUFVO2dDQUNWaUIsT0FBTzdEO2dDQUNQcUQsVUFBVSxDQUFDcEMsSUFBTWhCLGVBQWVnQixFQUFFRSxNQUFNLENBQUMwQyxLQUFLOzs7Ozs7Ozs7Ozs7a0NBR2xELDhEQUFDZjs7Ozs7a0NBQ0QsOERBQUNpQjt3QkFBT1osTUFBSzt3QkFBU1AsV0FBVTt3QkFBa0JVLFVBQVVwRDtrQ0FDekRBLFlBQVksY0FBY0ksV0FBVyxXQUFXOzs7Ozs7Ozs7Ozs7MEJBSXJELDhEQUFDMEQ7Ozs7OzBCQUVELDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDdEI7Z0JBQUlDLFdBQVU7MEJBQ1p4QyxPQUFPOEQsTUFBTSxLQUFLLGtCQUN2Qiw4REFBQ0M7OEJBQUU7Ozs7OzJCQUVDL0QsT0FBT2dFLEdBQUcsQ0FBQyxDQUFDYixvQkFDViw4REFBQ1o7d0JBQWlCQyxXQUFVO2tDQUMxQiw0RUFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDVztvQ0FDQ0MsS0FBS0QsSUFBSTFCLFFBQVE7b0NBQ2pCNEIsS0FBS0YsSUFBSXpELEtBQUs7b0NBQ2Q4QyxXQUFVO29DQUNWYyxPQUFPO3dDQUFFRSxRQUFRO3dDQUFTUyxXQUFXO29DQUFROzs7Ozs7OENBRS9DLDhEQUFDMUI7b0NBQUlDLFdBQVU7O3NEQUNiLDhEQUFDMEI7NENBQUcxQixXQUFVO3NEQUFjVyxJQUFJekQsS0FBSzs7Ozs7O3NEQUNyQyw4REFBQ3FFOzRDQUFFdkIsV0FBVTtzREFBYVcsSUFBSXZELFdBQVc7Ozs7OztzREFDekMsOERBQUMrRDs0Q0FDQ25CLFdBQVU7NENBQ1YyQixTQUFTLElBQU1yQyxXQUFXcUIsSUFBSXBCLEVBQUUsRUFBRW9CLElBQUl6RCxLQUFLLEVBQUV5RCxJQUFJdkQsV0FBVyxFQUFFdUQsSUFBSTFCLFFBQVE7c0RBQzNFOzs7Ozs7c0RBR0QsOERBQUNrQzs0Q0FDQ25CLFdBQVU7NENBQ1YyQixTQUFTLElBQU1oQyxhQUFhZ0IsSUFBSXBCLEVBQUU7c0RBQ25DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBcEJHb0IsSUFBSXBCLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4QjFCO0dBNUx3QjFDO0tBQUFBIiwic291cmNlcyI6WyJFOlxcTm9kZUpTXFxGVVRBXFxwYWdlc1xcdXBsb2FkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVwbG9hZFBhZ2UoKSB7XHJcbiAgY29uc3QgW2ltYWdlLCBzZXRJbWFnZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbcHJldmlldywgc2V0UHJldmlld10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2Rlc2NyaXB0aW9uLCBzZXREZXNjcmlwdGlvbl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3VwbG9hZGluZywgc2V0VXBsb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaW1hZ2VzLCBzZXRJbWFnZXNdID0gdXNlU3RhdGUoW10pOyAvLyBEYW5oIHPDoWNoIOG6o25oXHJcbiAgY29uc3QgW2VkaXRNb2RlLCBzZXRFZGl0TW9kZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2VkaXRJZCwgc2V0RWRpdElkXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gTOG6pXkgZGFuaCBzw6FjaCDhuqNuaCB04burIHNlcnZlclxyXG4gICAgZmV0Y2hJbWFnZXMoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGZldGNoSW1hZ2VzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHBzOi8vYXBpLTY3c20ub25yZW5kZXIuY29tL2FwaS9zbGlkZXJzJyk7XHJcbiAgICAgIHNldEltYWdlcyhyZXNwb25zZS5kYXRhKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGltYWdlczonLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlSW1hZ2VDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgZmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xyXG4gICAgc2V0SW1hZ2UoZmlsZSk7XHJcblxyXG4gICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiB7XHJcbiAgICAgIHNldFByZXZpZXcocmVhZGVyLnJlc3VsdCk7XHJcbiAgICB9O1xyXG4gICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBpZiAoIXRpdGxlIHx8ICFkZXNjcmlwdGlvbiB8fCAoIWltYWdlICYmICFlZGl0TW9kZSkpIHtcclxuICAgICAgYWxlcnQoJ1BsZWFzZSBmaWxsIGFsbCBmaWVsZHMnKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFVwbG9hZGluZyh0cnVlKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGxldCBpbWFnZVVybCA9IHByZXZpZXc7XHJcblxyXG4gICAgICAvLyBO4bq/dSBraMO0bmcg4bufIGNo4bq/IMSR4buZIGNo4buJbmggc+G7rWEsIHVwbG9hZCDhuqNuaCBt4bubaVxyXG4gICAgICBpZiAoIWVkaXRNb2RlICYmIGltYWdlKSB7XHJcbiAgICAgICAgY29uc3QgdXBsb2FkUmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KCcvYXBpL3VwbG9hZCcsIHsgaW1hZ2U6IHByZXZpZXcgfSk7XHJcbiAgICAgICAgaW1hZ2VVcmwgPSB1cGxvYWRSZXNwb25zZS5kYXRhLnVybDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGVkaXRNb2RlKSB7XHJcbiAgICAgICAgLy8gQ2jhu4luaCBz4butYSDhuqNuaFxyXG4gICAgICAgIGF3YWl0IGF4aW9zLnB1dChgaHR0cHM6Ly9hcGktNjdzbS5vbnJlbmRlci5jb20vYXBpL3NsaWRlcnMvJHtlZGl0SWR9YCwge1xyXG4gICAgICAgICAgaW1hZ2VVcmwsXHJcbiAgICAgICAgICB0aXRsZSxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFsZXJ0KCdJbWFnZSB1cGRhdGVkIHN1Y2Nlc3NmdWxseSEnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBUaMOqbSDhuqNuaCBt4bubaVxyXG4gICAgICAgIGF3YWl0IGF4aW9zLnBvc3QoJ2h0dHBzOi8vYXBpLTY3c20ub25yZW5kZXIuY29tL2FwaS9zbGlkZXJzJywge1xyXG4gICAgICAgICAgaW1hZ2VVcmwsXHJcbiAgICAgICAgICB0aXRsZSxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFsZXJ0KCdJbWFnZSB1cGxvYWRlZCBzdWNjZXNzZnVsbHkhJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNldEltYWdlKG51bGwpO1xyXG4gICAgICBzZXRQcmV2aWV3KCcnKTtcclxuICAgICAgc2V0VGl0bGUoJycpO1xyXG4gICAgICBzZXREZXNjcmlwdGlvbignJyk7XHJcbiAgICAgIHNldEVkaXRNb2RlKGZhbHNlKTtcclxuICAgICAgc2V0RWRpdElkKG51bGwpO1xyXG5cclxuICAgICAgLy8gVOG6o2kgbOG6oWkgZGFuaCBzw6FjaFxyXG4gICAgICBmZXRjaEltYWdlcygpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgdXBsb2FkaW5nIG9yIHVwZGF0aW5nOicsIGVycm9yKTtcclxuICAgICAgYWxlcnQoJ0ZhaWxlZCB0byB1cGxvYWQgb3IgdXBkYXRlIGltYWdlJyk7XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICBzZXRVcGxvYWRpbmcoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUVkaXQgPSAoaWQsIGN1cnJlbnRUaXRsZSwgY3VycmVudERlc2NyaXB0aW9uLCBjdXJyZW50SW1hZ2VVcmwpID0+IHtcclxuICAgIHNldEVkaXRNb2RlKHRydWUpO1xyXG4gICAgc2V0RWRpdElkKGlkKTtcclxuICAgIHNldFRpdGxlKGN1cnJlbnRUaXRsZSk7XHJcbiAgICBzZXREZXNjcmlwdGlvbihjdXJyZW50RGVzY3JpcHRpb24pO1xyXG4gICAgc2V0UHJldmlldyhjdXJyZW50SW1hZ2VVcmwpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZURlbGV0ZSA9IGFzeW5jIChpZCkgPT4ge1xyXG4gICAgaWYgKCF3aW5kb3cuY29uZmlybSgnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIGltYWdlPycpKSByZXR1cm47XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgYXhpb3MuZGVsZXRlKCdodHRwczovL2FwaS02N3NtLm9ucmVuZGVyLmNvbS9hcGkvc2xpZGVycy8ke2lkfScpO1xyXG4gICAgICBhbGVydCgnSW1hZ2UgZGVsZXRlZCBzdWNjZXNzZnVsbHkhJyk7XHJcbiAgICAgIGZldGNoSW1hZ2VzKCk7IC8vIFThuqNpIGzhuqFpIGRhbmggc8OhY2hcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIGltYWdlOicsIGVycm9yKTtcclxuICAgICAgYWxlcnQoJ0ZhaWxlZCB0byBkZWxldGUgaW1hZ2UnKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgPGgxPntlZGl0TW9kZSA/ICdFZGl0IEltYWdlJyA6ICdVcGxvYWQgSW1hZ2UnfTwvaDE+XHJcbiAgICAgIDxiciAvPlxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgIDxsYWJlbD5JbWFnZTo8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgYWNjZXB0PVwiaW1hZ2UvKlwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbWFnZUNoYW5nZX1cclxuICAgICAgICAgICAgZGlzYWJsZWQ9e2VkaXRNb2RlfSAvLyBLaMO0bmcgY2hvIGNo4buNbiDhuqNuaCBraGkgY2jhu4luaCBz4butYVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICB7cHJldmlldyAmJiA8aW1nIHNyYz17cHJldmlld30gYWx0PVwiUHJldmlld1wiIHN0eWxlPXt7IHdpZHRoOiAnMjAwcHgnLCBoZWlnaHQ6ICcyMDBweCcgfX0gLz59XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICA8bGFiZWw+VGl0bGU6PC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXt0aXRsZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRUaXRsZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgPGxhYmVsPkRlc2NyaXB0aW9uOjwvbGFiZWw+XHJcbiAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgdmFsdWU9e2Rlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldERlc2NyaXB0aW9uKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgZGlzYWJsZWQ9e3VwbG9hZGluZ30+XHJcbiAgICAgICAgICB7dXBsb2FkaW5nID8gJ1NhdmluZy4uLicgOiBlZGl0TW9kZSA/ICdVcGRhdGUnIDogJ1VwbG9hZCd9XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgIDxociAvPlxyXG5cclxuICAgICAgPGgyPlVwbG9hZGVkIEltYWdlczwvaDI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAge2ltYWdlcy5sZW5ndGggPT09IDAgPyAoXHJcbiAgICA8cD5ObyBpbWFnZXMgdXBsb2FkZWQgeWV0LjwvcD5cclxuKSA6IChcclxuICAgICAgICBpbWFnZXMubWFwKChpbWcpID0+IChcclxuICAgICAgICAgIDxkaXYga2V5PXtpbWcuaWR9IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz17aW1nLmltYWdlVXJsfVxyXG4gICAgICAgICAgICAgICAgYWx0PXtpbWcudGl0bGV9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYXJkLWltZy10b3BcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiAnMjAwcHgnLCBvYmplY3RGaXQ6ICdjb3ZlcicgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPntpbWcudGl0bGV9PC9oNT5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPntpbWcuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXdhcm5pbmdcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVFZGl0KGltZy5pZCwgaW1nLnRpdGxlLCBpbWcuZGVzY3JpcHRpb24sIGltZy5pbWFnZVVybCl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIEVkaXRcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWRhbmdlclwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZURlbGV0ZShpbWcuaWQpfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBEZWxldGVcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImF4aW9zIiwiVXBsb2FkUGFnZSIsImltYWdlIiwic2V0SW1hZ2UiLCJwcmV2aWV3Iiwic2V0UHJldmlldyIsInRpdGxlIiwic2V0VGl0bGUiLCJkZXNjcmlwdGlvbiIsInNldERlc2NyaXB0aW9uIiwidXBsb2FkaW5nIiwic2V0VXBsb2FkaW5nIiwiaW1hZ2VzIiwic2V0SW1hZ2VzIiwiZWRpdE1vZGUiLCJzZXRFZGl0TW9kZSIsImVkaXRJZCIsInNldEVkaXRJZCIsImZldGNoSW1hZ2VzIiwicmVzcG9uc2UiLCJnZXQiLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwiaGFuZGxlSW1hZ2VDaGFuZ2UiLCJlIiwiZmlsZSIsInRhcmdldCIsImZpbGVzIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZGVuZCIsInJlc3VsdCIsInJlYWRBc0RhdGFVUkwiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImFsZXJ0IiwiaW1hZ2VVcmwiLCJ1cGxvYWRSZXNwb25zZSIsInBvc3QiLCJ1cmwiLCJwdXQiLCJoYW5kbGVFZGl0IiwiaWQiLCJjdXJyZW50VGl0bGUiLCJjdXJyZW50RGVzY3JpcHRpb24iLCJjdXJyZW50SW1hZ2VVcmwiLCJoYW5kbGVEZWxldGUiLCJ3aW5kb3ciLCJjb25maXJtIiwiZGVsZXRlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJiciIsImZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwiaW5wdXQiLCJ0eXBlIiwiYWNjZXB0Iiwib25DaGFuZ2UiLCJkaXNhYmxlZCIsImltZyIsInNyYyIsImFsdCIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJ2YWx1ZSIsInRleHRhcmVhIiwiYnV0dG9uIiwiaHIiLCJoMiIsImxlbmd0aCIsInAiLCJtYXAiLCJvYmplY3RGaXQiLCJoNSIsIm9uQ2xpY2siXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/upload.js\n"));

/***/ })

});