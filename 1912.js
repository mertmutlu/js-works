const inputYear='1993';
var mert=19;
console.log(inputYear);
console.log(mert);

function juices(apples,oranges){
    console.log(apples,oranges);
    const juice =  'I want juice incudes ${apples} apple and ${oranges} orange.';
    console.log(juice);
    return juice;
}

const appleOrangeJuice= juices(3,5);
console.log(appleOrangeJuice);

const calcAge = birthyear => 2037-birthyear;

console.log(calcAge(1993)); 





