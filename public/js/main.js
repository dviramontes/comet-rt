// handle the comments name & message input fields
var foo;
$(document).ready(function(){
	"use strict";
	var user, msg;

	var cometBase = new Firebase("https://comet.firebaseio.com/");
	cometBase.set("Hello FireBase!");
/*

			HANDLE USER INPUT 
			-----------------
*/
	$("#message").keypress(function(e){

		// see pressed key
		// console.log(e.charCode);

		if(e.keyCode == 13){
			// get current values from input boxes
			user = $("#name").val();
			msg  = $("#message").val();
			// post values {name:msg} to firebase in msg(String) format or..

			// cometBase.set("user " + name + " says " + msg);

			// json objects..
			// cometBase.set({user:name, text:msg});

			// also append to a list of entries with .push()
			cometBase.push({user:user, msg:msg});

			// clear values on input message field
			$("#message").val("");
		}
	});

/*

			HANDLE NEW MESSAGES
			--------------------
*/

	// callback from https://comet.firebaseio.com/

	function displayNewMessage(user, msg){
		$("<div/>").text(msg).prepend($("<em/>").text(user+": ")).appendTo($('#messagesDiv'));
		$("#messagesDiv")[0].scrollTop = $("#messagesDiv")[0].scrollHeight;
	}

	cometBase.on("child_added", function(snapshot){
		var incoming = snapshot.val();
		console.log(incoming);
		displayNewMessage(incoming.user, incoming.msg);
	});

});

