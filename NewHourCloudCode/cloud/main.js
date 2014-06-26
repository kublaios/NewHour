
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("hello", function(request, response) {
  response.success("Hello world!");
});

// let's create a function that returns to time with a salutation
Parse.Cloud.define("sayMyName", function(request, response) {
	var theTime = "10:00 am";
	var msg = "Hello, " + request.params.myName + "! The time is " + theTime + ".";
	response.success(msg);
});