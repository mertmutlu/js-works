/*const inputYear='1993';
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


const merttt={
    isim:'Mert',
    soyisim:'Mutlu',
    sehir:'Ankara'
};
console.log(merttt.sehir);


*/
const getNumberList = (maxNumber) => {
    const numberList = [];
    for (let i = 1; i <= maxNumber; i++) {
      numberList.push(i);
    }
    return numberList;
  };

  const numberList = getNumberList(20);
  const filteredNumberList = numberList.filter((num) => num < 14);
  
  const isPrime = filteredNumberList.filter((num) => {
    for (let i = 2; i < num; i++) {
      if (num % i == 0) {
        return false;
      }
    }
    return num > 1;
  });
  const mappedNumberList = isPrime.map((num, index) => {
    return `Kümenin '${index + 1}'. elemanı ${num}`;
  });
  console.log(mappedNumberList);

