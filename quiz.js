var CarLot = (function(carLot) {

//   // Now that the DOM is loaded, establish all the event listeners needed
  carLot.activateEvents = function(){
    document.getElementsByClassName("col-md-4").addEventListener("click", function(event){
    console.log(click);
    input.style.background = "lightgreen";
          if(input.value === "type here"){
            input.value = "";
          }
          else if(input.value === ""){
            input.style.background = "white";
            input.value = "type here";
          };
          input.focus();
          input.addEventListener("keyup", function(event){
            event.preventDefault();
            desription.innerHTML = input.value;
          });
    })
  }
  // sedan.setOccupancy = function(occupancy) {
  //   if (occupancy <= max_occupancy) {
  //     current_occupancy = occupancy;
  //   } else {
  //     throw "Cannot exceed maximum occupancy of " + max_occupancy;
  //   }
  // };


return carLot;

})(CarLot || {});