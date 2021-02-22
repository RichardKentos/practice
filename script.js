// Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these into individual array that is ordered. For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]
const numbers = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
let  newArray = [];

const organize = (array) => {
   newArray = array.map(function(element) {
    if (newArray.includes(element)) {
        
    }
    else {
        newArray.push(element);
        return element
    }
    
   });

   newArray.sort( (a,b) => a-b );
   console.log(newArray)
}



// Question 2: Write a javascript function that takes an array of numbers and a target number. The function should find two different numbers in the array that, when added together, give the target number. For example: answer([1,2,3], 4)should return [1,3]

const sumTarget = (array, target) => {
    let number1;
    let number2;
    let sum;
    for (let i = 0; i < array.length; i++) {
        number1 = array[i];
        
        for (let j = 0; j < array.length; j++) {
            number2 = array[j];
            }
         sum = number1 + number2;
        if (sum === target && number1 !== number2){
            return [number1,number2]
           }
        }
    }


// Question 3: Write a function that converts HEX to RGB. Then Make that function auto-dect the formats so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX.
const transform = (value) => {
    if (value.startsWith("rgb")) {
        let firstComma = value.indexOf(",");
        let secComma = value.indexOf(",",firstComma+1);
        let thirdComma = value.indexOf(",",secComma+1);
        
        let g = value.slice(firstComma,secComma);
        let r = value.slice(secComma,thirdComma);
        let r = value.slice(firstComma,secComma);
        console.log(firstComma,secComma,thirdComma);
    }
    else if (value.startsWith("#")) {
        console.log("HEX !!!!!");
    }
    else {
        console.log("WRONG INPUT !!!!!")
    }
    
}

