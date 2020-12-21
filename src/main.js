/* login page authentication pages stats from here */
var count = 2;
function validate() {
	//getting the values of username and pasword
	var un = document.login.username.value;
	var pw = document.login.pword.value;
	var valid = false;

	var unArray = ["rajkumar", "username2", "username3", "username4"];  // as many as you like - no comma after final entry
	var pwArray = ["123456", "password2", "password3", "password4"];  // the corresponding passwords;

	for (var i=0; i <unArray.length; i++) {
		if ((un == unArray[i]) && (pw == pwArray[i])) {
			console.log(unArray[i]);
			console.log(pwArray[i]);
		valid = true;
		break;
		}
	}

	if (valid) {
		alert ("Login was sucessfully processed.  You will be redirected to the members page now.");
		 window.open("./landing.html", "");
		return false;
	}

	var t = " tries";
	if (count == 1) {t = " try"}

	if (count >= 1) {
		alert ("Invalid username and/or password.  You have " + count + t + " left.");
		document.login.username.value = "";
		document.login.pword.value = "";
		setTimeout("document.login.username.focus()", 25);
		setTimeout("document.login.username.select()", 25);
		count --;
	}

	else {
		alert ("Still incorrect! You have no more tries left!");
		document.login.username.value = "No more tries allowed!";
		document.login.pword.value = "";
		document.login.username.disabled = true;
		document.login.pword.disabled = true;
		return false;
	}

}

/* login page authentication pages Ends from here */
/* below code is for menu bar in small screens starts here */
		function openmenu(){
		document.getElementById("side-menu").style.display="block";
		document.getElementById("menu-btn").style.display="none";
		document.getElementById("close-btn").style.display="block";
		}

		function closemenu(){
		document.getElementById("side-menu").style.display="none";
		document.getElementById("menu-btn").style.display="block";
		document.getElementById("close-btn").style.display="none";
		}
/* below code is for menu bar in small screens ends here */
