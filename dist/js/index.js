webpackJsonp([1,6],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _base = __webpack_require__(4);

	//引入css
	__webpack_require__(5);
	//引入js

	//业务代码
	_base.Base.alert('ddd');

	console.log('ddd');

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var Base = {
	    alert: function alert(msg) {
	        window.alert(msg);
	    }
	};
	exports.Base = Base;

/***/ },
/* 5 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
]);