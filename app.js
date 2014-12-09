var request = require('request');
// var yo = new Yo({'api_token': '11ec7abf-a092-48ce-8752-22262e441641'});

var schedule = require('node-schedule');
var rule = new schedule.RecurrenceRule();
rule.hour = 13;
rule.minute = 36;

var j = schedule.scheduleJob(rule, function () {
	request.post('https://api.justyo.co/yoall/', {form: {'api_token': '11ec7abf-a092-48ce-8752-22262e441641'}},
		function (err, response, body) {
			if (!err) {
				console.log(body);
			}
	});
});
