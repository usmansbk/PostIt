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
    creator: {
			username: "Me"
		}
  },  {
    name: 'Group II',
    purpose: 'Test 2',
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

ReactDOM.render(
  <PostIt
  location='Home'
  groups={groups}
  posts={ posts}
	account={account}
  />,
  app);
