let length;
let width;

let grocery_1;
let grocery_2;
let grocery_3;


// function calculateArea()
// {
//     length=parseFloat(document.getElementById("length").value)
//     width=parseFloat(document.getElementById("width").value)
//     let area=length*width
//     console.log(area)
//     document.getElementById("result").innerHTML=`The are of the square is :${area}`
// }

function calculateTotal(){
    grocery_1=parseFloat(document.getElementById("grocery_1").value)
    grocery_2=parseFloat(document.getElementById("grocery_2").value)
    grocery_3=parseFloat(document.getElementById("grocery_3").value)

    let total =grocery_1+grocery_2+grocery_3;
    document.getElementById("grocery_result").innerHTML=`The total amaount for the grocery is ${total}`
}