import moment from 'moment';

export function predicate(key, status, target, state) {
  const result = status === target;
  if (result) state[key] = '';
  return result;
}

export function setPageTitle(newTitle) {
  const title = document.querySelector('title');
  if (title)
    title.innerText = newTitle;
}

export function getElapsedTime(timeString) {
  return moment(timeString).fromNow();
}