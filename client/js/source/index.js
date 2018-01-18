import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import PostIt from './components/PostIt.jsx';
import postItApp from './redux/Reducers';
import '../../stylesheets/materialize.css';
import '../../stylesheets/sass/index.scss';

const store = createStore(postItApp);
const DOMbody = document.querySelector('body');
const app = document.querySelector('#app');

DOMbody.setAttribute('class', 'blue-grey lighten-5');

const groups = [
  {
    name: 'Group I',
    purpose: 'Test',
    cardinal: 5,
    img:'../../../../images/default.jpg',
    creator: {
			username: "Me"
		}
  },  {
    name: 'Group II',
    purpose: 'Tesasdfsdafsklasf;ljsdf;ajf;lasfjl;sjdf;lsjfalkjfa;lsfjs;fjs;lfjlakjt 2',
    cardinal:2,
    img:'../../../../images/default.jpg',
    creator: {
			username: "You"
		}
  }, {
    name: 'Group II',
    purpose: 'Test 2',
    cardinal: 10,
    img:'../../../../images/default.jpg',
    creator: {
			username: "You"
		}
  },
];
const posts = [
  {
    message: 'Hello Worldlskfasdf;lsadsfadfasdfasdsafdsfasdfasdfsdfafjlsfj;aldsfjaasdfasdfsafsdfasdfsdlfjasdl;sdfasdfsdfadfaasdfassdafd',
    author: {
      name: 'Usmansbk',
      id: '2',
      img: '../../../../images/default.jpg'
    },
    group: {
      id: '1',
      name: 'Group Name'
    }
  },
  {
    message: 'Bye World!',
    author: {
      name: 'Usmansbk',
      id: '2',
      img: '../../../../images/default.jpg'
    },
    group: {
      id: '1',
      name: 'Group name'
    }
  },
  {
    message: 'Hello Worldlskfasdf;lsadsfadfasdfasdsafdsfasdfasdfsdfafjlsfj;aldsfjaasdfasdfsafsdfasdfsdlfjasdl;sdfasdfsdfadfaasdfassdafd',
    author: {
      name: 'Usmansbk',
      id: '2',
      img: '../../../../images/default.jpg'
    },
    group: {
      id: '1',
      name: 'Group Name'
    }
  },
  {
    message: 'Hello Worldlskfasdf;lsadsfadfasdfasdsafdsfasdfasdfsdfafjlsfj;aldsfjaasdfasdfsafsdfasdfsdlfjasdl;sdfasdfsdfadfaasdfassdafd',
    author: {
      name: 'Usmansbk',
      id: '2',
      img: '../../../../images/default.jpg'
    },
    group: {
      id: '1',
      name: 'Group Name'
    },
    duration: '5h'
  },
];
const account = {
	username: 'usmansbk',
	email: 'usmansbk@gmail.com',
  img: '../../../../images/default.jpg',
}

const notifications = [
  {
    name: 'h2o',
    message: 'Urgent post from VEroModa',
    duration: '5h',
    img: '../../../../images/default.jpg',
  },
];

ReactDOM.render(
  <PostIt
  location='Group'
  groups={groups}
  posts={ posts}
  account={account}
  notifications={notifications}
  />,
  app);
