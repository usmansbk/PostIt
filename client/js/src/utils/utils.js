export function getElapsedTime(timeString) {
	const now = new Date().getTime();
	const start = new Date(timeString).getTime();
	const elapsed = now - start;
	const time = new Date(elapsed);
	const hr = time.getHours();
	const min = time.getMinutes();
	const sec = time.getSeconds();
	let duration;
	if (hr > 0)
		duration = hr + 'h';
	else if (min > 0)
		duration = min + 'm';
	else if (sec > 0)
		duration = sec + 's';
	else
		duration = 'few seconds ago';

	return duration;
}