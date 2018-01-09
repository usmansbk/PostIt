(function () {
  document.addEventListener('DOMContentLoaded', (event) => {
    let MaterializeInitTimeLoading = (function () {
      let elem = document.querySelector('.sidenav');
      let instance = M.Sidenav.init(elem);
      elem = document.querySelector('.dropdown-trigger');
      instance = M.Dropdown.init(elem, { coverTrigger: false, constrainWidth: false });
      elem = document.querySelector('.modal');
      instance = M.Modal.init(elem);
    })();
  });

  let createImage = function createImage(width, height, src, classVal) {
    let img = document.createElement('img');
    img.setAttribute('src', src);
    img.setAttribute('width', width);
    img.setAttribute('height', height);
    img.setAttribute('alt', '');
    img.setAttribute('class', classVal);
    return img;
  };

  let createPostCard = function (message) {
    let cardPanel = document.createElement('div');
    cardPanel.setAttribute('class', 'card-panel');

    let header = document.createElement('div');
    let img = createImage(30, 30, '../images/pp.jpeg', 'circle responsive-img');
    let username = document.createElement('span');
    let arrow = document.createElement('i');
    let group = document.createElement('a');

    header.setAttribute('class', 'valign-wrapper');
    arrow.setAttribute('class', 'material-icons tiny grey-text');

    group.innerText = 'Group';
    arrow.innerText = 'play_arrow';
    username.innerText = 'usmansbk';

    header.append(img);
    header.append(username);
    header.append(arrow);
    header.append(group);
    cardPanel.append(header);

    let text = document.createElement('span');
    text.setAttribute('class', 'grey-text text-darken-3');
    text.innerText = message;
    cardPanel.append(text);
    return cardPanel;
  };

  let postMessage = function (message) {
    let board = document.querySelector('#board');
    let card = createPostCard(message);
    board.insertAdjacentElement('afterbegin', card);
  };

  let postBtn = document.querySelector('#post-btn');
  postBtn.addEventListener('click', (event) => {
    let textarea = document.querySelector('#message');
    let message = textarea.value;
    postMessage(message);
    textarea.value = '';
    event.preventDefault();
  });

})();
