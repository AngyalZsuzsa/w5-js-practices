var myFirstString = 'Ez egy string.';
var mySecondString = "Ez is egy string.";
var myThirdString = `Ez pedig egy többsoros string.`;

var myFirstNumber = 0;
var mySecondNumber = 15;
var myThirdNumber = 6518000;

var myFirstBoolean = true;
var mySecondBoolean = false;

var myFirstArray = ["1984", "Száz év magány", "Mester és Margarita", "39 kulcs", "HomoSapiens"];

var mySecondArray = [1984, "Száz év magány", "Mester és Margarita", "39 kulcs", "HomoSapiens"];

var myFirstObject = {
  title: "Mester és Margarita",
  year: 1966,
  author: "Mikhail Bulgakov",
  translation: ["hu", "en", "de", "fr"],
};

console.log(myFirstArray[0]);
console.log(myFirstObject.title);
console.log(myFirstObject["title"]);

var a = 1;
var b = 2;
var c = a +b;
console.log(c);

function add(firstNumber, secondNumber) {
  if (firstNumber > 0) {
      console.log("Az elso szám nagyobb, mint nulla")
  } else {
      console.log("Az elso szám kisebb vagy egyelno 0")
  }
  console.log(firstNumber + secondNumber);
}

add(17948, 679);

function minus(firstNumber, secondNumber) {
  if (firstNumber > secondNumber) {
    console.log(firstNumber-secondNumber);
  } else {
    console.log(secondNumber-firstNumber);
  }
}

minus(1000, 400);
minus(300, 1000);

function ifElseCheck(text) {
  if (text === "Hello") {
    console.log("A text az volt, hogy Hello.")
  } else if ( tetx === "Hello") {
      console.log("Második if else ág")
  }

  if (text === "Hello") {
    console.log("Ez egy másik if vizsgálat.")
  }
}

ifElseCheck("Hello");

function compare(a, b) {
  console.log("==", a == b);
  console.log("===", a === b);
  var c = a + b;
  console.log(typeof c);
  console.log(c);
}

compare("1984", 1984);

compare("Nyitva", "tartás");

compare(7, 7);

compare(myFirstArray[0], mySecondArray[0]);

var myFirstFunctionVariable = function () {
  console.log("Ez egy fü., amit változóban tároltunk el.")
}

myFirstFunctionVariable();

(function (text) {
  console.log("Ezt a fü. rögtön meghivtuk, amikor leírtuk.")
  console.log(text)
}("Bye"));

var mySecondFunctionVariable = function () {
  console.log("Ez vajon mikor fut le?");
}

var anotherVar = mySecondFunctionVariable;

anotherVar();

var theLastFunction = function (Text){
  console.log("Text");
}

theLastFunction(function () {
  return "I'm calling the last function"
})

/*
var window = {
  addEventListener: function (eventName, eventFunction) {

  }
}
*/
window.addEventListener("load", function(){
  console.log("Az oldal betöltödött.");
})