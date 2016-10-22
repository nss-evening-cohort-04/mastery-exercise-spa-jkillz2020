var CarLot = (function(carLot) {
  carLot.borderGrow = function(event){
    event.currentTarget.classList.add("cat");
};

  carLot.borderReset = function(event){
    if (event.currentTarget.hasAttribute("cat")){
      
      event.currentTarget.classList.remove("cat");
  }
}
return carLot;

})(CarLot || {});


// var cell =document.querySelectorAll('.cell');
// for(var i=0;i<cell.length;i++){
//   cell[i].addEventListener('mouseover',callback,false);
// }




// The final IIFE should augment the object with two more functions. 
// One function resets the border thickness and background color for each car element back to the original values. 
// The other function changes the thickness of the border of a car element, and changes its background color. 
// The function must accept two arguments.
// A car DOM element that was clicked on.
// A color name.