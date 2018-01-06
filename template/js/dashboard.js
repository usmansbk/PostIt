(function () {
  let newPostContainer = document.querySelector('#newpost-container')
    , newGroupContainer = document.querySelector('#newgroup-container')
    , dashboard = document.querySelector('#dashboard');

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
