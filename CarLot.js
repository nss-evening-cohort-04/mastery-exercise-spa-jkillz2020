var CarLot = (function () {
  var carData = [];
  var carList = document.getElementById("container");
  carDiv ="";

var myRequest = new XMLHttpRequest();

myRequest.addEventListener("load", loadCars); 
myRequest.open("GET", "inventory.json")
myRequest.send();  

function loadCars() {
  var carData = JSON.parse(this.responseText).cars;
  console.log("car data after parse before loop", carData);
  for (var i = 0; i < carData.length; i++) {
    currentCar = carData[i]; 

  carDiv += `<div class="col-md-4 border car" style="border: 2px solid ${currentCar.color}">
  <div>${currentCar.make}</div>
  <div>${currentCar.model}</div>
  <div>${currentCar.year}</div>
  <div>${currentCar.price}</div>
  <div>${currentCar.color}</div>
  <div>${currentCar.description}</div>
  </div>`;

  carList.innerHTML = carDiv;

    };
    CarLot.activateEvents();
  };

  return {
    getInventory: function() {
      return carData;
      }
    };


})();


// When you click on one of the car elements, change the width of the border to a higher value, and change the background color to any other color of your choosing.
// Also, on click of the car element, clear the value of the text input in the navbar, and put the cursor in the text input.
// When you start typing into the navbar's text input, the description of the currently selected car should be bound to what you are typing in and match it exactly.


// Technical Requirements

// Create one global variable (e.g. CarLot) and use the IIFE pattern to augment it two times in separate JavaScript files.
// The first IIFE should add a public function (e.g. loadInventory) that loads the inventory.json file 
// and stores the inventory in a private variable. It should also expose a public getter to 
// read the array of cars (e.g. getInventory).
// The second IIFE should augment the original one with a function that creates all of the eventHandlers 
// that you need for the application. Name the function activateEvents.
// The final IIFE should augment the object with two more functions. 
// One function resets the border thickness and background color for each car element back to the original values. 
// The other function changes the thickness of the border of a car element, and changes its background color. 
// The function must accept two arguments.
// A car DOM element that was clicked on.
// A color name.
