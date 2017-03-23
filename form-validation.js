/* function validate(){
  //Grab the user's input and store in variables
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;
  var userSpace = userEntered.search(" ");

//Test for vaild username
  if (userEntered.length >= 6 && userSpace == -1) {
    //Displays a message confirming that a valid username was entered
    document.getElementById("usernameError").innerHTML="Good username";
    //Removes the error class (turns items red)
    document.getElementById("usernameGroup").classList.remove("has-error");
    //Adds the success class (turns items green)
    document.getElementById("usernameGroup").classList.add("has-success");
    document.getElementById("usernameError").classList.add("shown-message");
    document.getElementById("usernameError").classList.remove("hidden-message");
  } else if (userEntered.length == 0) {
    //Show message that there is an error with the username...
    document.getElementById("usernameError").innerHTML="Username field cannot be left blank";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    //Turn the username items red
    document.getElementById("usernameGroup").classList.add("has-error");
  } else if (userEntered.length < 6) {
    //Show message that there is an error with the username...
    document.getElementById("usernameError").innerHTML="Username must be at least 6 character";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    //Turn the username items red
    document.getElementById("usernameGroup").classList.add("has-error");
  } else if (userSpace != -1) {
    //Show message that there is an error with the username...
    document.getElementById("usernameError").innerHTML="Username cannot contain spaces";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    //Turn the username items red
    document.getElementById("usernameGroup").classList.add("has-error");
  } else {
    //Show message that there is an error with the username...
    document.getElementById("usernameError").innerHTML="Bad username.";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    //Turn the username items red
    document.getElementById("usernameGroup").classList.add("has-error");
  }

//est for valid password
  if (passEntered.length >= 6 && passEntered.length <= 20 && passEntered != userEntered && passEntered.toLowerCase() != "password") {
    //Displays a message confirming a valid password was entered
    document.getElementById("passwordError").innerHTML="Good password.";
    //Removes the error class (turns items red)
    document.getElementById("passwordGroup").classList.remove("has-error");
    //Adds the success class (turns items green)
    document.getElementById("passwordGroup").classList.add("has-success");
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
  } else if (passEntered.length == 0) {
    //Show message that there is an error with the password...
    document.getElementById("passwordError").innerHTML="Password field cannot be left blank";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    //Turn the password items red
    document.getElementById("passwordGroup").classList.add("has-error");
  } else if (passEntered.toLowerCase() == "password") {
    //Show message that there is an error with the password...
    document.getElementById("passwordError").innerHTML="Password cannot be password";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    //Turn the password items red
    document.getElementById("passwordGroup").classList.add("has-error");
  } else if (passEntered.length < 6) {
    //Show message that there is an error with the password...
    document.getElementById("passwordError").innerHTML="Password must contain at least 6 characters";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    //Turn the password items red
    document.getElementById("passwordGroup").classList.add("has-error");
  } else if (passEntered.length > 20) {
    //Show message that there is an error with the password...
    document.getElementById("passwordError").innerHTML="Password cannot contain more than 20 characters";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    //Turn the password items red
    document.getElementById("passwordGroup").classList.add("has-error");
  } else if (passEntered == userEntered) {
    //Show message that there is an error with the password...
    document.getElementById("passwordError").innerHTML="Password cannot be the same as the username";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    //Turn the password items red
    document.getElementById("passwordGroup").classList.add("has-error");
  } else {
    //Show message that there is an error with the password...
    document.getElementById("passwordError").innerHTML="Bad password.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    //Turn the password items red
    document.getElementById("passwordGroup").classList.add("has-error");
  }

}
*/

function validateUsername() {
  var userEntered = document.getElementById("user").value;
  var userSpace = userEntered.search(" ");

  //Test for vaild username
  if (userEntered.length >= 6 && userSpace == -1) {
    //Displays a message confirming that a valid username was entered
    document.getElementById("usernameError").innerHTML="Good username";
    //Removes the error class (turns items red)
    document.getElementById("usernameGroup").classList.remove("has-error");
    //Adds the success class (turns items green)
    document.getElementById("usernameGroup").classList.add("has-success");
    document.getElementById("usernameError").classList.add("shown-message");
    document.getElementById("usernameError").classList.remove("hidden-message");
    return true;
  } else if (userEntered.length == 0) {
    //Show message that there is an error with the username...
    document.getElementById("usernameError").innerHTML="Username field cannot be left blank";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    //Turn the username items red
    document.getElementById("usernameGroup").classList.add("has-error");
    return false;
  } else if (userEntered.length < 6) {
    //Show message that there is an error with the username...
    document.getElementById("usernameError").innerHTML="Username must be at least 6 character";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    //Turn the username items red
    document.getElementById("usernameGroup").classList.add("has-error");
    return false;
  } else if (userSpace != -1) {
    //Show message that there is an error with the username...
    document.getElementById("usernameError").innerHTML="Username cannot contain spaces";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    //Turn the username items red
    document.getElementById("usernameGroup").classList.add("has-error");
    return false;
  } else {
    //Show message that there is an error with the username...
    document.getElementById("usernameError").innerHTML="Bad username.";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    //Turn the username items red
    document.getElementById("usernameGroup").classList.add("has-error");
    return false;
  }
}

function validatePassword() {
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;

  // Test for valid password
  if (passEntered.length >= 6 && passEntered.length <= 20 && passEntered != userEntered && passEntered.toLowerCase() != "password") {
    //Displays a message confirming a valid password was entered
    document.getElementById("passwordError").innerHTML="Good password.";
    //Removes the error class (turns items red)
    document.getElementById("passwordGroup").classList.remove("has-error");
    //Adds the success class (turns items green)
    document.getElementById("passwordGroup").classList.add("has-success");
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    return true;
  } else if (passEntered.length == 0) {
    //Show message that there is an error with the password...
    document.getElementById("passwordError").innerHTML="Password field cannot be left blank";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    //Turn the password items red
    document.getElementById("passwordGroup").classList.add("has-error");
    return false;
  } else if (passEntered.toLowerCase() == "password") {
    //Show message that there is an error with the password...
    document.getElementById("passwordError").innerHTML="Password cannot be password";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    //Turn the password items red
    document.getElementById("passwordGroup").classList.add("has-error");
    return false;
  } else if (passEntered.length < 6) {
    //Show message that there is an error with the password...
    document.getElementById("passwordError").innerHTML="Password must contain at least 6 characters";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    //Turn the password items red
    document.getElementById("passwordGroup").classList.add("has-error");
    return false;
  } else if (passEntered.length > 20) {
    //Show message that there is an error with the password...
    document.getElementById("passwordError").innerHTML="Password cannot contain more than 20 characters";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    //Turn the password items red
    document.getElementById("passwordGroup").classList.add("has-error");
    return false;
  } else if (passEntered == userEntered) {
    //Show message that there is an error with the password...
    document.getElementById("passwordError").innerHTML="Password cannot be the same as the username";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    //Turn the password items red
    document.getElementById("passwordGroup").classList.add("has-error");
    return false;
  } else {
    //Show message that there is an error with the password...
    document.getElementById("passwordError").innerHTML="Bad password.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    //Turn the password items red
    document.getElementById("passwordGroup").classList.add("has-error");
    return false;
  }
}

function register() {
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;
  if (validateUsername() && validatePassword()) {
    alert("Username: " + userEntered + "\nPassword: " + passEntered);
  } else if (validateUsername() && !validatePassword()) {
    alert("INVALID PASSWORD");
  } else if (!validateUsername() && validatePassword()) {
    alert("INVALID USERNAME");
  } else {
    alert("INVALID USERNAME AND INVALID PASSWORD");
  }
}
