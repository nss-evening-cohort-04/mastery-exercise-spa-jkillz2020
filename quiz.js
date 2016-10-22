var CarLot = (function(carLot) {
var description = "";
//   // Now that the DOM is loaded, establish all the event listeners needed
  carLot.activateEvents = function(){
    var carEl = document.getElementsByClassName("car");
    var input = document.getElementById("userinput");
    input.addEventListener("keyup", function(event){
      event.preventDefault();
      description.text(input.value);
      console.log("description", description);
      //CarLot.borderGrow(carEl);
    });
    
    console.log("carEl", carEl);
    for (var i = 0; i < carEl.length; i++) {
        carEl[i].addEventListener("click", function(event) {
          //
        console.log("event", event.currentTarget);
        CarLot.borderGrow(event);
        CarLot.borderReset(event);
        input.style.background = "lightgreen";
              if(input.value != ""){
                input.value = "";
              }
              else if(input.value === ""){
                input.style.background = "white";
                input.value = "type here";
              };
              input.focus();
              description = $(event.currentTarget).find(".description");
        })
    }
    

  }

return carLot;
})(CarLot || {});