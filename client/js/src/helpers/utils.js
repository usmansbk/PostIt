import moment from 'moment';

export function predicate(status, target, state) {
	const result = status === target;
	if (result) state.status = '';
	return result;
}

export function setPageTitle(newTitle) {
	const title = document.querySelector('title');
	title.innerText = newTitle;
}

export function getElapsedTime(timeString) {
	return moment(timeString).fromNow();
}

// console.log(getElapsedTime('2018-01-29T14:14:24.079Z'))