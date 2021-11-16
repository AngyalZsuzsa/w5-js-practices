/*
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

window.addEventListener("load", function(){
  console.log("Az oldal betöltödött.");
})
*/

console.log(myFirstGlobalVar);
var myFirstGlobalVar = 0;

//console.log(mySecondGlobalVar);
let mySecondGlobalVar = 1;

//console.log(myThirdGlobalVar);
const myThirdGlobalVar = 2;

(function() {
  (function() {
    (function() {
      var a = 3;
      console.log(a);
    }())
  }())
}())
console.log(myFirstGlobalVar);
console.log(mySecondGlobalVar);
console.log(myThirdGlobalVar);

var a = 6;
function f1() {
  console.log(a);
  var a = 4;
  console.log(a);
  //console.log(myFirstGlobalVar, mySecondGlobalVar, myThirdGlobalVar);
}
f1();

function f2() {
  console.log(a);
  var a = 5;
  console.log(a);
  //console.log(myFirstGlobalVar, mySecondGlobalVar, myThirdGlobalVar);
}
f2();

console.log(a);

function f3() {
  console.log(b);
  var b;
  console.log(b);
  b = 7;
  console.log(b);
}
f3();

function f4() {
  //console.log(b);
  let b;
  console.log(b);
  b = 7;
  console.log(b);
}
f4();

function f5() {
  //console.log(b);
  const b = 7;
  console.log(b);
  //b = 8;
  //console.log(b);
}
f5();

function f6() {
  let c = "";
  console.log(c);
  console.log(typeof c);
  console.log("valami" + c);
  if (true) {
    let d = 9;
    const e = 10;
    console.log(d, e);
  }
}
f6();

function f7() {
  //console.log(i);
  let ls = ["a", "b", "c", "d", "e", "f", true];
  
  //console.log(ls[0]);
  //console.log(ls[4]);
  
  for (let i = 0; i < 10; i++) {
    const item = ls[i];
    console.log(item);
  }  
  //console.log(i);
  
  for (const item of ls) {
    console.log(item)
  }
   
  for (const key in ls) {
    console.log(key);
    const item = ls[key];
    console.log(item);
  }
  
  /*f8(ls) egyenlo lesz*/
  console.log(f8(ls))
}
f7();
  
function f8(arrayFromParam) {
  let abc = "";
  for (const item of arrayFromParam) {
    if (item !== true) {
      abc += item;
    }
  }
  return abc
}

/*const f9 = (text) => {
  return `<div>${text}</div>`
} ez egyszerusodik az arrow func featurei végett*/
const f9 = text => `<div>${text}</div>`;


window.addEventListener("load", function() {
  let f8Result = f8(["10", "17", "38", "11"]);
  document.getElementById("root").insertAdjacentHTML("afterbegin", f8Result)
  document.getElementById("root").insertAdjacentHTML("afterbegin", f9("tuesday"))
})