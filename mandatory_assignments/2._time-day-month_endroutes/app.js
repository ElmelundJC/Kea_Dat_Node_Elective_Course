const express = require('express');
const app = express();

const date = new Date;


app.get('/', (req, res) => {
	res.send('Change the endpoint to either "time, day or month"');
});

app.get('/time', (req, res) => {
	res.send(`Current time: ${date.toLocaleTimeString('en-US', {
		hour12: false,
		hour: "numeric",
		minute: "numeric",
		second: "numeric"
	})}`);
});
// alternativt kan tiden kaldes ved date.toLocaleTimeString(), den nuværende måde kan man modificere hvordan man ønsker tiden vises.


app.get('/day', (req, res) => {
	res.send(`Current day: ${getCurrentDay(date.getDay())} the ${date.getDay()}.`);
});

app.get('/month', (req, res) => {
	res.send(`Current month: ${getCurrentMonth(date.getMonth())}.`)
})

console.log(date.toLocaleTimeString());

function getCurrentDay(a) {
	let day;

	if (a == 1) {
		day = "Monday";
	} else if (a == 2) {
		day = "Tuesday";
	} else if (a == 3) {
		day = "Wednesday";
	} else if (a == 4) {
		day = "Thursday";
	} else if (a == 5) {
		day = "Friday";
	} else if (a == 6) {
		day = "Saturday";
	} else {
		day = "Sunday";
	}
	return day;
}

function getCurrentMonth(a) {
	let month;

	if (a == 1) {
		month = "January";
	} else if (a == 2) {
		month = "February";
	} else if (a == 3) {
		month = "March";
	} else if (a == 4) {
		month = "April";
	} else if (a == 5) {
		month = "May";
	} else if (a == 6) {
		month = "June";
	} else if (a == 7) {
		month = "July";
	} else if (a == 8) {
		month = "August";
	} else if (a == 9) {
		month = "September";
	} else if (a == 10) {
		month = "October";
	} else if (a == 11) {
		month = "November";
	} else {
		month = "December";
	}
	return month;
}


app.listen(8080);
