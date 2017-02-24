/*
The Function,
define the thing you want to happen
*/
function doTheThing() {
  alert("This is the thing!");
}
/*
The Variable,
get the element you want to do it on
*/
var elem = document.getElementById("about");

/*
The Event Listener,
set up something to listen for the event you want, then execute the function
*/
elem.addEventListener("click", doTheThing, false);
if ("ontouchstart" in window) {
  /* do something only for touch devices */
  alert("You have a touch device!");
}
/* save the 2 nodes to variables */
var button = document.getElementById("hide"),
  target = document.getElementById("target");

/* define what we want to do in a function */
function hide() {
  target.setAttribute("class","hide");
}

/* add the CSS class when the button is clicked */
button.addEventListener("click", hide, false);
/* You know JavaScript is enabled at this point because none of this would apply otherwise */

/* check if localStorage is supported */
if (typeof window.localStorage !== "undefined") {
  // use localStorage
} else {
  // use normal cookies
}
/* output a basic message to the console */
console.log("hello there");
/* output a variable in the console */
var msg = "this is from a variable";
console.log(msg);
