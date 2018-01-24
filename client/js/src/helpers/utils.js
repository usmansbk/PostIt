 export function setPageTitle(newTitle) {
	const title = document.querySelector('title');
	title.innerText = newTitle;
}

export function getElapsedTime(timeString) {
	const start = new Date(timeString).getTime()
	    , now = new Date().getTime()
	    , timeDiff = now - start
	    , sec = Math.floor(timeDiff / 1000)
	    , min = Math.floor(sec / 60)
	    , hr = Math.floor(min / 60)
	    , day = Math.floor(hr / 24)
	    , wk = Math.floor(day/ 7)
	    , month = Math.floor(day/30)
	    , y = Math.floor(day/365);
	let time;

	if (y >= 1)
		time = y + 'h';
	else if (month >= 1)
		time = month + 'M';
	else if (wk >= 1)
		time = wk + 'wk';
	else if (day >= 1)
		time = day + 'd';
	else if (hr >= 1)
		time = hr + 'h';
	else if (min >= 1)
		time = min + 'm';
	else
		time = 'few seconds ago';

	return time;
}