'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _models = require('../../db/models');

var _helpers = require('../helpers');

var _helpers2 = _interopRequireDefault(_helpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Op = _models.Sequelize.Op;

var GroupController = function () {
  function GroupController() {
    _classCallCheck(this, GroupController);
  }

  _createClass(GroupController, null, [{
    key: 'postMessage',
    value: function postMessage(req, res) {
      var message = req.body.message,
          guid = req.params.guid,
          userId = req.session.userId;


      _models.Group.findOne({
        where: { id: guid },
        include: [{
          model: _models.User,
          as: 'Members',
          where: { id: userId }
        }]
      }).then(function (group) {
        if (!group) throw new Error();
        return _models.User.findById(userId).then(function (user) {
          return _models.sequelize.transaction(function (t) {
            return _models.Post.create({ message: message }, { transaction: t }).then(function (post) {
              return post.setAuthor(user, { transaction: t }).then(function () {
                return group.addPost(post, { transaction: t }).then(function () {
                  return post;
                });
              });
            });
          });
        });
      }).then(function (result) {
        return res.status(201).json({
          status: 'success',
          data: result
        });
      }).catch(function (error) {
        res.status(401).json({
          status: 'fail',
          data: {
            message: 'Only members can post message!',
            error: error
          }
        });
      });
    }
  }, {
    key: 'retrieveMessages',
    value: function retrieveMessages(req, res) {
      var guid = req.params.guid,
          userId = req.session.userId;


      _models.Group.findOne({
        where: { id: guid },
        include: [{
          model: _models.User,
          as: 'Members',
          where: { id: userId }
        }]
      }).then(function (group) {
        if (!group) throw new Error();
        return group.getPosts();
      }).then(function (posts) {
        return res.status(200).json({
          status: 'success',
          data: { posts: posts }
        });
      }).catch(function (error) {
        res.status(401).json({
          status: 'fail',
          data: {
            message: 'Only members can retrieve messages!',
            error: error
          }
        });
      });
    }
  }, {
    key: 'addUsers',
    value: function addUsers(req, res) {
      var guid = req.params.guid,
          invites = req.body.invites,
          userId = req.session.userId,
          usersQueryList = _helpers2.default.makeColumnList(invites, 'username');


      _models.Group.findOne({
        where: { id: guid },
        include: [{
          model: _models.User,
          as: 'Creator',
          where: { id: userId }
        }]
      }).then(function (group) {
        if (!group) throw new Error();
        return _models.User.findAll({
          where: _defineProperty({}, Op.or, usersQueryList)
        }).then(function (users) {
          return group.addMembers(users);
        });
      }).then(function (result) {
        return res.status(200).json({
          status: 'success',
          data: { result: result }
        });
      }).catch(function (error) {
        res.status(401).json({
          status: 'fail',
          data: {
            message: 'Only group owner can add users!',
            error: error
          }
        });
      });
    }
  }, {
    key: 'createGroup',
    value: function createGroup(req, res) {
      var userId = req.session.userId;

      _models.User.findById(userId).then(function (user) {
        return _models.sequelize.transaction(function (t) {
          if (!user) throw new Error();
          return _models.Group.create(req.body, { transaction: t }).then(function (group) {
            return group.setCreator(user, { transaction: t }).then(function (creatorGroup) {
              return group.addMember(user, { transaction: t }).then(function () {
                return creatorGroup;
              });
            });
          });
        });
      }).then(function (result) {
        return res.status(201).json({
          status: 'success',
          data: {
            result: result
          }
        });
      }).catch(function (error) {
        res.status(401).json({
          status: 'fail',
          data: {
            message: 'Register a new account or sign-in!',
            error: error
          }
        });
      });
    }
  }]);

  return GroupController;
}();

exports.default = GroupController;