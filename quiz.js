var CarLot = (function(carLot) {

//   // Now that the DOM is loaded, establish all the event listeners needed
  carLot.activateEvents = function(){
    var carEl = document.getElementsByClassName("car");
    var input = document.getElementById("userinput");

    console.log("carEl", carEl);
    for (var i = 0; i < carEl.length; i++) {
        carEl[i].addEventListener("click", function(event) {
      // document.getElementsByClassName("col-md-4 border").addEventListener("click", function(event){
        console.log("event", event);
        input.style.background = "lightgreen";
              if(input.value === "type here"){
                input.value = "";
              }
              else if(input.value === ""){
                input.style.background = "white";
                input.value = "type here";
              };
              input.focus();
              description = this.childNodes[1];
              input.addEventListener("keyup", function(event){
                event.preventDefault();
                desription.innerHTML = input.value;
              });
        })
    }
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