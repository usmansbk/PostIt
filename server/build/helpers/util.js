'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Util = function () {
  function Util() {
    _classCallCheck(this, Util);
  }

  _createClass(Util, null, [{
    key: 'makeColumnList',

    /**
     * @param {String} values a list of space delimited strings
     * @param {String} key
     * @return {Array} an array of objects with property of value 'key' and value
     * from the values parameter.
     */
    value: function makeColumnList(values, key) {
      var list = values.split(' '),
          len = list.length,
          ret = [];
      for (var i = 0; i < len; i += 1) {
        var obj = {};
        obj[key] = list[i];
        ret.push(obj);
      }
      return ret;
    }
  }]);

  return Util;
}();

exports.default = Util;