const stats = require('./stats');


let totalApproaches = 0;

stats.forEach((day) => {
	const string = [day.date, ': ', day.approaches].join('');
	console.log(string);
	totalApproaches = totalApproaches + day.approaches;
});

console.log(['total approaches: ', totalApproaches].join(''));
