function wish(msg) {
  return function (name) {
    console.log(`${name}! ${msg}`);
  };
}

var wishing = wish("Hello");
//wishing("Nitin");

let wishYou = "Hi";
function iAmWishing() {
  {
    let wishYou = "Hello";
    console.log(wishYou);
  }
  console.log(wishYou);
}
//iAmWishing();
