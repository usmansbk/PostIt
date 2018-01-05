(function (...imports) {
  const Util = imports[0]
      , Route = imports[1];
  const module = {};

  let newpostBtn
    , newgroupBtn
    , cancelCreateGroupBtn
    , cacelCreatePostBtn
    , main
    , newPostNodes
    , newGroupNodes
    , submit = Util.submit;

  const { newGroupHandler, newPostHanlder } = Route;

  newpostBtn = document.querySelector('#newpost-btn');
  newgroupBtn = document.querySelector('#newgroup-btn');
  cancelCreateGroupBtn = document.querySelector('#cancel-create-group');
  cancelCreatePostBtn = document.querySelector('#cancel-create-post');
  newPostNodes = document.querySelectorAll('[form=newpost]');
  newGroupNodes = document.querySelectorAll('[form=newgroup]');
  main = document.querySelector('#main')

  const cancelAction = function cancelAction(event) {
    const target = event.target;
    let className = target.getAttribute('for');
    const container = document.getElementsByClassName(className)[0];
    container.style.display = 'none';
    main.style.display = 'block';
  };

  cancelCreatePostBtn.addEventListener('click', cancelAction);
  cancelCreateGroupBtn.addEventListener('click', cancelAction);
  newgroupBtn.addEventListener('click', (event) => {
    submit(event, newGroupNodes, newGroupHandler);
  });
  newpostBtn.addEventListener('click', (event) => {
    submit(event, newPostNodes, newPostHanlder);
  });
})(Util, Route);
