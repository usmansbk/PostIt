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
    creator: {
			username: "Me"
		}
  },  {
    name: 'Group II',
    purpose: 'Tesasdfsdafsklasf;ljsdf;ajf;lasfjl;sjdf;lsjfalkjfa;lsfjs;fjs;lfjlakjt 2',
    cardinal:2,
    creator: {
			username: "You"
		}
  }, {
    name: 'Group II',
    purpose: 'Test 2',
    cardinal: 10,
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
      id: '2'
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
      id: '2'
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
      id: '2'
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
      id: '2'
    },
    group: {
      id: '1',
      name: 'Group Name'
    }
  },
];
const account = {
	username: 'USMANSbK',
	email: 'email@email'
}

const notifications = posts;

ReactDOM.render(
  <PostIt
  location='Notifications'
  groups={groups}
  posts={ posts}
  account={account}
  notifications={notifications}
  />,
  app);
