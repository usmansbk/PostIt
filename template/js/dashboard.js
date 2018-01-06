(function () {
  let newPostContainer = document.querySelector('#newpost-container')
    , newGroupContainer = document.querySelector('#newgroup-container')
    , dashboard = document.querySelector('#dashboard')
    , createGroupBtn = document.querySelector('#create-group-btn')
    , createPostBtn = document.querySelector('#create-post-btn')
    , board = document.querySelector('#board')
    , grouplist = document.querySelector('#grouplist')
    , textarea = document.querySelector('textarea');

    textarea.value = '';

  let createCard = function createCard(message) {
    let card = document.createElement('div');
    card.setAttribute('class', 'card');
    let cardBody = document.createElement('div');
    cardBody.setAttribute('class', 'card-body');
    let cardText = document.createElement('p');
    cardText.innerText = message;
    let footer = document.createElement('p');
    let time = document.createElement('small');
    time.setAttribute('class', 'text-muted');
    time.innerText = 'Posted on ' + (new Date().toString());

    cardBody.append(cardText);
    cardBody.append(time);
    card.append(cardBody);
    return card;
  };

  let createGroup = function createGroup(name, purpose) {
    let item = document.createElement('a');
    item.setAttribute('class', 'list-group-item list-group-item-action d-flex justify-content-between-align-items-center');
    item.setAttribute('href', '#');
    item.innerText = name;
    return item;
  };

  createPostBtn.addEventListener('click', (event) => {
    let value = textarea.value;
    textarea.value = '';
    let card = createCard(value);
    board.append(card);
    newPostContainer.style.display = 'none';
    dashboard.style.display = 'block';
    event.preventDefault();
    event.stopPropagation();
  });

  createGroupBtn.addEventListener('click', (event) => {
    let name = document.querySelector('#group-name');
    name = name.value;
    let item = createGroup(name, null);
    grouplist.append(item);
    newGroupContainer.style.display = 'none';
    dashboard.style.display = 'block';
    event.preventDefault();
    event.stopPropagation();
  });

  document.addEventListener('click', (event) => {
    let target = event.target
      , value = target.value;

    if (value === 'Post') {
      dashboard.style.display = 'none';
      newPostContainer.style.display = 'block';
    } else if (value === '+') {
      dashboard.style.display = 'none';
      newGroupContainer.style.display = 'block';
    } else if (value == 'Cancel') {
      newPostContainer.style.display = 'none';
      newGroupContainer.style.display = 'none';
      dashboard.style.display = 'block';
    }});

  newPostContainer.style.display = 'none';
  newGroupContainer.style.display = 'none';
  dashboard.style.display = 'block';
})();
