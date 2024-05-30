// setTimeout(function () {
//   //console.log("Programmers Session");
// }, 5000);

function welcome(name) {
  console.log(name);
}

//welcome("Nitin");

function come(name, callback) {
  console.log("Hi" + " " + name);
  callback();
}

//callback function
function callMe() {
  console.log("This is a callback function");
}

//come("Nitin", callMe);

function wish() {
  console.log("Hello World");
}

function myName(name) {
  console.log("Hello" + " " + name);
}

setTimeout(wish, 2000);
myName("Nitin");

function wishes(name, myFunc) {
  console.log("Hello World");
  myFunc(name);
}

function useName(name) {
  console.log("Hello" + " " + name);
}

//setTimeout(wishes, 2000, "Nitin", useName);
