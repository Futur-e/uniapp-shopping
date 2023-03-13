(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/topScroll/topScroll"],{

/***/ 300:
/*!*********************************************************************!*\
  !*** D:/project/uniapp-shopping/components/topScroll/topScroll.vue ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _topScroll_vue_vue_type_template_id_f7e5f46c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./topScroll.vue?vue&type=template&id=f7e5f46c&scoped=true& */ 301);
/* harmony import */ var _topScroll_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./topScroll.vue?vue&type=script&lang=js& */ 303);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _topScroll_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _topScroll_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _E_installAPP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 32);

var renderjs




/* normalize component */

var component = Object(_E_installAPP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _topScroll_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _topScroll_vue_vue_type_template_id_f7e5f46c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _topScroll_vue_vue_type_template_id_f7e5f46c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "f7e5f46c",
  null,
  false,
  _topScroll_vue_vue_type_template_id_f7e5f46c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "components/topScroll/topScroll.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 301:
/*!****************************************************************************************************************!*\
  !*** D:/project/uniapp-shopping/components/topScroll/topScroll.vue?vue&type=template&id=f7e5f46c&scoped=true& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_installAPP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_installAPP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_E_installAPP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_installAPP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_installAPP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_installAPP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_topScroll_vue_vue_type_template_id_f7e5f46c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./topScroll.vue?vue&type=template&id=f7e5f46c&scoped=true& */ 302);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _E_installAPP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_installAPP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_E_installAPP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_installAPP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_installAPP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_installAPP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_topScroll_vue_vue_type_template_id_f7e5f46c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _E_installAPP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_installAPP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_E_installAPP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_installAPP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_installAPP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_installAPP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_topScroll_vue_vue_type_template_id_f7e5f46c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _E_installAPP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_installAPP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_E_installAPP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_installAPP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_installAPP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_installAPP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_topScroll_vue_vue_type_template_id_f7e5f46c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _E_installAPP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_installAPP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_E_installAPP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_installAPP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_installAPP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_installAPP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_topScroll_vue_vue_type_template_id_f7e5f46c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 302:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/project/uniapp-shopping/components/topScroll/topScroll.vue?vue&type=template&id=f7e5f46c&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uTabs: function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-tabs/u-tabs */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-tabs/u-tabs")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-tabs/u-tabs.vue */ 434))
    },
    swiperImg: function () {
      return __webpack_require__.e(/*! import() | components/swiperImg/swiperImg */ "components/swiperImg/swiperImg").then(__webpack_require__.bind(null, /*! @/components/swiperImg/swiperImg.vue */ 383))
    },
    Recommend: function () {
      return __webpack_require__.e(/*! import() | components/Recommend/Recommend */ "components/Recommend/Recommend").then(__webpack_require__.bind(null, /*! @/components/Recommend/Recommend.vue */ 442))
    },
    Card: function () {
      return __webpack_require__.e(/*! import() | components/Card/Card */ "components/Card/Card").then(__webpack_require__.bind(null, /*! @/components/Card/Card.vue */ 449))
    },
    showBox: function () {
      return __webpack_require__.e(/*! import() | components/showBox/showBox */ "components/showBox/showBox").then(__webpack_require__.bind(null, /*! @/components/showBox/showBox.vue */ 456))
    },
    Banner: function () {
      return __webpack_require__.e(/*! import() | components/Banner/Banner */ "components/Banner/Banner").then(__webpack_require__.bind(null, /*! @/components/Banner/Banner.vue */ 461))
    },
    Brand: function () {
      return __webpack_require__.e(/*! import() | components/Brand/Brand */ "components/Brand/Brand").then(__webpack_require__.bind(null, /*! @/components/Brand/Brand.vue */ 468))
    },
    Hot: function () {
      return __webpack_require__.e(/*! import() | components/Hot/Hot */ "components/Hot/Hot").then(__webpack_require__.bind(null, /*! @/components/Hot/Hot.vue */ 475))
    },
    ShopRecommenda: function () {
      return __webpack_require__.e(/*! import() | components/ShopRecommenda/ShopRecommenda */ "components/ShopRecommenda/ShopRecommenda").then(__webpack_require__.bind(null, /*! @/components/ShopRecommenda/ShopRecommenda.vue */ 480))
    },
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 303:
/*!**********************************************************************************************!*\
  !*** D:/project/uniapp-shopping/components/topScroll/topScroll.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_installAPP_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_installAPP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_installAPP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_installAPP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_installAPP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_topScroll_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./topScroll.vue?vue&type=script&lang=js& */ 304);
/* harmony import */ var _E_installAPP_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_installAPP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_installAPP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_installAPP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_installAPP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_topScroll_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_installAPP_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_installAPP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_installAPP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_installAPP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_installAPP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_topScroll_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_installAPP_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_installAPP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_installAPP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_installAPP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_installAPP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_topScroll_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_installAPP_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_installAPP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_installAPP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_installAPP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_installAPP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_topScroll_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_installAPP_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_installAPP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_installAPP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_installAPP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_installAPP_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_topScroll_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 304:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/project/uniapp-shopping/components/topScroll/topScroll.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _request = _interopRequireDefault(__webpack_require__(/*! ../../common/api/request */ 170));
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
//
//
//
//
var _default2 = {
  name: 'topScroll',
  props: {
    topList: {
      type: Array,
      default: function _default() {
        return [{
          id: 1,
          name: '推荐'
        }, {
          id: 2,
          name: '运动户外'
        }, {
          id: 3,
          name: '服饰内衣'
        }, {
          id: 4,
          name: '鞋靴箱包'
        }, {
          id: 5,
          name: '美妆个护'
        }, {
          id: 6,
          name: '家具数码'
        }, {
          id: 7,
          name: '食品母婴'
        }];
      }
    },
    indexList: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    status: {
      type: String,
      default: "loadmore"
    }
  },
  data: function data() {
    return {
      current: 0,
      page: 0,
      bannerImg: "",
      brand: [],
      hot: [],
      shop: [],
      commodity: [],
      allData: {},
      isClick: [0]
    };
  },
  /*
  watch: {
  status: {
    immediate: true,
    handler (newValue, oldValue) {
      uni.request({
        url: `http://192.168.1.6:3000/api/index_list/${this.current + 1}/data/2`,
        success: ({data}) => {
          console.log("我被调用了，我是第二页")
          let result = data.result
          result.commodity.forEach(item=>{
            this.commodity.push(item)
          })
        }
      })
    }
  },
  },*/
  methods: {
    change: function change(t) {
      var index = t.index;
      this.current = index;
      this.current === 0 ? '' : this.getTabList();
      //避免重复请求
      /* if (this.isClick.includes(index)){
         return ""
       }else {
         this.isClick.push(index)
         this.getTabList()
       }*/
    },
    //获取页面数据
    getTabList: function getTabList() {
      var _this = this;
      var tabId = this.current + 1;
      _request.default.request({
        url: "/index_list/".concat(tabId, "/data/1")
      }).then(function (res) {
        _this.bannerImg = res.result.bannerList.imgUrl;
        _this.brand = res.result.brand;
        _this.hot = res.result.hot;
        _this.shop = res.result.shop;
        _this.commodity = res.result.commodity;
      }).catch(function () {
        uni.showToast({
          title: "请求失败，请重试",
          icon: 'none'
        });
      });
    }
  }
};
exports.default = _default2;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ })

}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/topScroll/topScroll.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/topScroll/topScroll-create-component',
    {
        'components/topScroll/topScroll-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(300))
        })
    },
    [['components/topScroll/topScroll-create-component']]
]);
