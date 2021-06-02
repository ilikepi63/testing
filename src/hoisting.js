hoistedFunction();

nonHoistedFunction();
var x = 0;

function hoistedFunction() {
    console.log(x);
}

let nonHoistedFunction = () => console.log("Hello");