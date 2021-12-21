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

    document.addEventListener('keydown', function(event) {
        if(event.keyCode == 13) {

           

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
            document.getElementById('txtname').value = '';
        }
    });
    
    // Selecting the input element and get its value 
 

    return items

    
   // document.getElementById("personNumber").innerText=person;
}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

function startShake(){
    console.log("Shake");
    shuffle(items);
    console.log(items);

    for(var i=0;i<items.length;i++){
        
        console.log(items[i], items[i+1]);
        items.splice(i,1);
    }
}






  2