(function () {
  const module = {};

  let newpostBtn
    , newgroupBtn
    , cancelCreateGroupBtn
    , cacelCreatePostBtn
    , postFormBtn
    , groupFormBtn
    , main
    , newPostNodes
    , newGroupNodes;

  newpostBtn = document.querySelector('#newpost-btn');
  newgroupBtn = document.querySelector('#newgroup-btn');
  cancelCreateGroupBtn = document.querySelector('#cancel-create-group');
  cancelCreatePostBtn = document.querySelector('#cancel-create-post');
  postFormBtn = document.querySelector('#post-form-btn');
  groupFormBtn = document.querySelector('#group-form-btn');
  newPostNodes = document.querySelectorAll('[form=newpost]');
  newGroupNodes = document.querySelectorAll('[form=newgroup]');
  dashboard = document.querySelector('#dashboard');
  newgroupForm = document.querySelector('.newgroup');
  newpostForm = document.querySelector('.newpost');

  const formAction = function cancelAction(event) {
    const target = event.target;
    let className = target.getAttribute('for');
    const container = document.querySelector(`.${className}`);
    const value = target.value.toLowerCase();

    containerDisplay = 'none';
    dashboardDisplay = 'block'
    if (value !== 'cancel') {
      containerDisplay = 'block',
      dashboardDisplay = 'none';
    }
    container.style.display = containerDisplay;
    dashboard.style.display = dashboardDisplay;
  };

  newgroupForm.style.display = 'none';
  newpostForm.style.display = 'none';
  cancelCreatePostBtn.addEventListener('click', formAction);
  cancelCreateGroupBtn.addEventListener('click', formAction);
  postFormBtn.addEventListener('click', formAction);
  groupFormBtn.addEventListener('click', formAction);
  newgroupBtn.addEventListener('click', (event) => {
    console.log('Group created');
  });
  newpostBtn.addEventListener('click', (event) => {
    console.log('Message posted');
  });
})();
