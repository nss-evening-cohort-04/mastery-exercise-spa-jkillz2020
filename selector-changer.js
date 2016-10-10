var CarLot = (function(carLot) {
  carLot.borderGrow = function(carEl, color){
    carInfo=this.childNodes[1];
    carInfo.parentElement.classList.toggle("border-grow");
}

// sedan.setOccupancy = function(occupancy) {
//     if (occupancy <= max_occupancy) {
//       current_occupancy = occupancy;
//     } else {
//       throw "Cannot exceed maximum occupancy of " + max_occupancy;
//     }
//   };


return carLot;


})(CarLot || {});








// The final IIFE should augment the object with two more functions. 
// One function resets the border thickness and background color for each car element back to the original values. 
// The other function changes the thickness of the border of a car element, and changes its background color. 
// The function must accept two arguments.
// A car DOM element that was clicked on.
// A color name.