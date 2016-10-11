var CarLot = (function(carLot) {

//   // Now that the DOM is loaded, establish all the event listeners needed
  carLot.activateEvents = function(){
    var carEl = document.getElementsByClassName("car");
    var input = document.getElementById("userinput");

    console.log("carEl", carEl);
    for (var i = 0; i < carEl.length; i++) {
        carEl[i].addEventListener("click", function(event) {
          //description = this.childNodes[1];
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
              var description = document.getElementsByClassName("description");
              input.addEventListener("keyup", function(event){
                event.preventDefault();
                description.innerHTML = input.value;
                console.log("description", description);
              });
          //CarLot.borderGrow();
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
return carEl;
})(CarLot || {});