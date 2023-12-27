
let display = document.getElementById("display");
let history=[""];
function addToDisplay(value) {
   display.value += value;
   history.push(value);
}

function clearDisplay() {
   display.value = "";
   
}

function calculate() {
   
   try { 
       history.push("=");
       display.value = eval(display.value);
       history.push(display.value);
       update_history();
       
   } catch (error) {
       // display.value = "Error";
       history.push("error");
       update_history();
      
   }
   
}
function update_history(){
    clearDisplay();
     for(let i =0;i<history.length;i++){
     display.value += history[i];
   }
}