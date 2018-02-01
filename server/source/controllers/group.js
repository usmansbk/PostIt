import { Group, User, Post, Sequelize, sequelize } from '../../db/models';
import Util from '../helpers';

const { Op } = Sequelize;

export default class GroupController {
  static postMessage(req, res) {
    const { message } = req.body,
      { guid } = req.params,
      { userId } = req.session;
    Group.findOne({
      where: { id: guid },
      include: [{
        model: User,
        as: 'Members',
        where: { id: userId },
      }]
    }).then((group) => {
      return User.findById(userId).then(user =>
        sequelize.transaction(t =>
          Post.create({ message }, { transaction: t }).then(post =>
            post.setAuthor(user, { transaction: t }).then(() =>
              group.addPost(post, { transaction: t })))));
    }).then(() =>
      res.status(201).json({
        status: 'success',
        data: {
          message: 'Message posted'
        } 
      }))
      .catch(() => {
        res.status(401).json({
          status: 'fail',
          data: {
            message: 'Not a group member'
          }
        });
      });
  }

  static retrieveMessages(req, res) {
    const { guid } = req.params,
      { userId } = req.session;
    Group.findOne({
      where: { id: guid },
      include: [{
        model: User,
        as: 'Members',
        where: { id: userId },
      }]
    }).then((group) => {
      return group.getPosts();
    }).then((posts) => {
      res.status(200).json({
        status: 'success',
        data: { posts }
      });
    }).catch(() => {
      res.status(401).json({
        status: 'fail',
        data: {
          message: 'Not a group member'
        }
      });
    });
  }

  static addUsers(req, res) {
    const { guid } = req.params,
      { invites } = req.body,
      { userId } = req.session,
      usersQueryList = Util.makeColumnList(invites, 'username');
    Group.findOne({
      where: { id: guid },
      include: [{
        model: User,
        as: 'Creator',
        where: { id: userId },
      }]
    }).then((group) => {
      return User.findAll({
        where: {
          [Op.or]: usersQueryList
        }
      }).then(users => group.addMembers(users));
    }).then(result =>
      res.status(200).json({
        status: 'success',
        data: {
          message: 'Users added'
        }
      })).catch(() => {
      res.status(401).json({
        status: 'fail',
        data: {
          message: 'Only group owner can add users'
        }
      });
    });
  }

  static createGroup(req, res) {
    const { userId } = req.session;
    User.findById(userId).then(user =>
      sequelize.transaction((t) => {
        if (!user) throw new Error();
        return Group.create(req.body, { transaction: t }).then(group =>
          group.setCreator(user, { transaction: t }).then(creatorGroup =>
            group.addMember(user, { transaction: t }).then(() => creatorGroup)));
      })).then(result =>
      res.status(201).json({
        status: 'success',
        data: {
          result,
          message: 'Group created'
        }
      })).catch(() => {
      res.status(401).json({
        status: 'fail',
        data: {
          message: 'Not signed in'
        }
      });
    });
  }

  static deleteGroup(req, res) {
    const { guid } = req.params;
    const { userId } = req.session;

    Group.findOne({
      where: {
        id: guid,
        CreatorId: userId
      }
    }).then(group => group.destroy()).then(() => {
      res.status(200).json({
        status: 'success',
        message: 'Group deleted'
      });
    }).catch(() => {
      res.status(400).json({
        status: 'fail',
        data: {
          message: 'Failed to delete group'
        }
      });
    });
  }

  static getMembers(req, res) {
    const { guid } = req.params;
    const { userId } = req.session;
    Group.findOne({
      where: { id: guid },
      include: [{
        model: User,
        as: 'Members',
        where: { id: userId },
      }]
    }).then(group => group.getMembers({ attributes: { exclude: ["password"]}}))
     .then((members) => {
       res.status(200).json({
         status: 'success',
         data: {
           members
         }
       });
     }).catch((error) => {
       res.status(400).json({
         status: 'failed',
         data: {
           message: 'Failed to get members'
         }
       });
    });
  }

  static updateModel(req, res) {
    const { id, name, purpose } = req.body;
    const { userId } = req.session;
    Group.findOne({
      where: {
        id,
        CreatorId: userId
      }
    }).then(group => {
      group.name = name;
      group.purpose = purpose;
      return group.save({ fields: ['name', 'purpose']})
    }).then(() => {
      res.status(200).json({
        status: 'success',
        data: {
          message: 'Group info updated'
        }
      })
    }).catch(error => {
      res.status(400).json({
        status: 'fail',
        data: {
          message: 'Failed to update group info'
        }
      })
    })
  }

  static removeUser(req, res) {
    const { uid } = req.query;
    const { guid } = req.params;
    const { userId } = req.session;
    let group;
    Group.findOne({
      where: {
        id: guid,
        CreatorId: {
          [Op.ne]: uid,
          [Op.eq]: userId
        }
      }
    }).then((associatedGroup) => User.findById(uid).then(user => associatedGroup.removeMember(user)))
    .then(result => {
      res.status(200).json({
        status: 'success',
        data: {
          message: 'User removed from group',
          numbersRemoved: result
        }
      })
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json({
        status: 'fail',
        data: {
          message: 'Failed to remove user'
        }
      });
    });
  }
}
