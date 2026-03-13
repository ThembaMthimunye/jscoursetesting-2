let length;
let width;

function calculateArea()
{
    length=parseFloat(document.getElementById("length").value)
    width=parseFloat(document.getElementById("width").value)
    let area=length*width
    console.log(area)
    document.getElementById("result").innerHTML=`The are of the square is :${area}`
}

