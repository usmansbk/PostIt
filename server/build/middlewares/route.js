'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Route = function () {
  function Route() {
    _classCallCheck(this, Route);
  }

  _createClass(Route, null, [{
    key: 'isAuthenticated',
    value: function isAuthenticated(req, res, next) {
      var userId = req.session.userId;

      if (!userId) {
        res.status(403).json({
          status: 'fail',
          message: 'Unauthenticated',
          data: null
        });
        return;
      }
      next();
    }
  }]);

  return Route;
}();

exports.default = Route;