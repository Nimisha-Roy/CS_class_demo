// this is a js script 

// print a statement to the browser 
console.log("Hi there!");

// define variables 
var number = 10;
var str = "7";
var ispresent = false;

// change the content of the div container
document.getElementById('box').innerHTML = number*15;

//console.log based on conditions
if (number === 15) {
    console.log("the number is 15")
} else {
    console.log("the number is not 15")
}

// array loop and function 
var groceries = ["eggs", "milk", "veggies"]

// create a function to loop through the contents of the array and print it 
function listGroceries() {
    for(i=0; i<= groceries.length; i++){
        console.log(groceries[i]);
    }
}

// call the function 
listGroceries();

//event listener
document.getElementById('box').addEventListener('click', function (){
    alert('Hey, I got clicked')
})