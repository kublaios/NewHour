
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("hello", function(request, response) {
  response.success("Hello world!");
});

// let's create a function that returns to time with a salutation
Parse.Cloud.define("sayMyName", function(request, response) {
	// get hour and minutes
	var date = new Date();
	var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;
    var min  = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;
    // create the time and response message
	var theTime = hour + ":" + min;
	var msg = "Hello, " + request.params.myName + "! The time is " + theTime + ".";
	response.success(msg);
});