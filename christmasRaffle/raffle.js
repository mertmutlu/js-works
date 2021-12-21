console.log("Started");
/*
function myFunction(){
    console.log("Clicked");
     var myvalue = document.getElementsByName('txtname').value;
     console.log(myvalue);
    return myvalue;
    
}
*/
var myindex=0;
var items = [];

function myFunction(){
    
    // Selecting the input element and get its value 
    var inputVal = document.getElementById("txtname").value;
    
    items.push(inputVal);  
    myindex++;

    console.log(items,myindex);
    
    var x = document.createElement("div");  // Creates a new <div> node
    x.textContent = inputVal;         // Sets the text content
    document.body.appendChild(x);  
    
    var person = document.createElement("div");  // Creates a new <div> node
    person.textContent = myindex;         // Sets the text content
    document.body.appendChild(person);  

   // document.getElementById("personNumber").innerText=person;
}

function startShake(){
    console.log("Shake");
 for(var i=0;i<person;i++){
   // console.log(items[i]);
    console.log(i);
 } 
}

/*
input.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      document.getElementById("ekle").click();
     }
  });
  */



  2