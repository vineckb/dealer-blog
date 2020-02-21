(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Post/Form.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Post/Form.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      loading: false,
      id: null,
      title: '',
      image: '',
      $image: null,
      text: ''
    };
  },
  created: function created() {
    if (this.$route.params.id) {
      this.id = this.$route.params.id;
      this.load();
    }
  },
  methods: {
    submit: function submit() {
      // @todo: send to api
      console.log('send post form');
    },
    load: function load() {
      var _this = this;

      // @todo: load data from api
      this.loading = true;
      this.title = 'loaded title';
      this.text = 'loaded text';
      window.setTimeout(function () {
        return _this.loading = false;
      }, 2000);
    },
    reset: function reset() {
      if (!this.id) {
        this.title = '';
        this.image = null;
        this.text = '';
        return;
      }

      this.load();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Post/Form.vue?vue&type=template&id=f70f778c&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Post/Form.vue?vue&type=template&id=f70f778c& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm.loading
      ? _c("div", { staticClass: "text-center my-5" }, [_c("b-spinner")], 1)
      : _vm._e(),
    _vm._v(" "),
    !_vm.loading
      ? _c(
          "div",
          { staticClass: "my-3" },
          [
            !_vm.id ? _c("h1", [_vm._v("Create new post")]) : _vm._e(),
            _vm._v(" "),
            _vm.id ? _c("h1", [_vm._v("Edit post")]) : _vm._e(),
            _vm._v(" "),
            _c(
              "b-form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.submit($event)
                  }
                }
              },
              [
                _c(
                  "b-form-group",
                  {
                    attrs: { label: "Post title", "label-for": "input-title" }
                  },
                  [
                    _c("b-form-input", {
                      attrs: { id: "input-title", type: "text", required: "" },
                      model: {
                        value: _vm.title,
                        callback: function($$v) {
                          _vm.title = $$v
                        },
                        expression: "title"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-form-group",
                  { attrs: { label: "Post Image" } },
                  [
                    _c("b-form-file", {
                      attrs: {
                        state: Boolean(_vm.$data.$image),
                        accept: "image/jpeg, image/png, image/gif",
                        placeholder: "Choose a image or drop it here...",
                        "drop-placeholder": "Drop image here..."
                      },
                      model: {
                        value: _vm.$data.$image,
                        callback: function($$v) {
                          _vm.$set(_vm.$data, "$image", $$v)
                        },
                        expression: "$data.$image"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-form-group",
                  {
                    attrs: {
                      label: "Post content",
                      "label-for": "input-textarea"
                    }
                  },
                  [
                    _c("b-form-textarea", {
                      attrs: { id: "textarea", rows: "3", "max-rows": "6" },
                      model: {
                        value: _vm.text,
                        callback: function($$v) {
                          _vm.text = $$v
                        },
                        expression: "text"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-btn",
                  { attrs: { variant: "link" }, on: { click: _vm.reset } },
                  [_vm._v("Cancel")]
                ),
                _vm._v(" "),
                _c("b-btn", { attrs: { type: "submit" } }, [_vm._v("Publish")])
              ],
              1
            )
          ],
          1
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/Post/Form.vue":
/*!******************************************!*\
  !*** ./resources/js/pages/Post/Form.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Form_vue_vue_type_template_id_f70f778c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form.vue?vue&type=template&id=f70f778c& */ "./resources/js/pages/Post/Form.vue?vue&type=template&id=f70f778c&");
/* harmony import */ var _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form.vue?vue&type=script&lang=js& */ "./resources/js/pages/Post/Form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Form_vue_vue_type_template_id_f70f778c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Form_vue_vue_type_template_id_f70f778c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Post/Form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Post/Form.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/pages/Post/Form.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Post/Form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Post/Form.vue?vue&type=template&id=f70f778c&":
/*!*************************************************************************!*\
  !*** ./resources/js/pages/Post/Form.vue?vue&type=template&id=f70f778c& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_f70f778c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Form.vue?vue&type=template&id=f70f778c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Post/Form.vue?vue&type=template&id=f70f778c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_f70f778c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_f70f778c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);