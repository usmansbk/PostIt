export function setPageTitle(newTitle) {
	const title = document.querySelector('title');
	title.innerText = newTitle;
}

export function getElapsedTime(timeString) {
	const now = new Date().getTime();
	const start = new Date(timeString).getTime();
	const elapsed = now - start;
	const time = new Date(elapsed);
	const hr = time.getHours();
	const min = time.getMinutes();
	const sec = time.getSeconds();
	const d = hr / 24;
	const w = d / 7;
	const m = d / 30;
	const y = d / 365;

	let duration;
	if (y >= 1)
		duration = y + 'y';
	else if (m >= 1)
		duration = m + 'M';
	else if (w >= 1)
		duration = w + 'w';
	else if (d >= 1)
		duration = d + 'd';
	else if (hr >= 1)
		duration = hr + 'h';
	else if (min >= 1)
		duration = min + 'm';
	else if (sec > 0)
		duration = sec + 's';
	else
		duration = 'few seconds ago';

	return duration;
}