// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("hello", function(request, response) {
	response.success("Hello world!");
});

function getHour() {
	// get hour and minutes
	var date = new Date();
	var hour = date.getHours();
	hour = (hour < 10 ? "0" : "") + hour;
	var min = date.getMinutes();
	min = (min < 10 ? "0" : "") + min;
	// create the time and return
	return hour + ":" + min;
}

// let's create a function that returns to time with a salutation
Parse.Cloud.define("sayMyName", function(request, response) {
	var msg = "Hello, " + request.params.myName + "! The time is " + getHour() + ".";
	response.success(msg);
});

// create a job that sends push notification to all devices
Parse.Cloud.job("notifyBoutTime", function(request, status) {
	var everyoneQuery = new Parse.Query(Parse.Installation);
	everyoneQuery.equalTo("appName", "NewHour"); // send to everyone registered for NewHour app
	Parse.Push.send({
		where: everyoneQuery,
		expiration_interval: 300, // try to send for 5 minutes, not more
		data: {
			alert: "The time is " + getHour() + "!",
			sound: "default"
		}
	}, {
		success: function() {
			status.success("Messages are delivered.");
		},
		error: function(error) {
			status.error("Scheduled messages error: " + error);
		}
	});
});