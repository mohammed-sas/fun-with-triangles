const sideInput = document.querySelectorAll('.sides');
const submitBtn = document.querySelector('#hypotenuse');
const output = document.querySelector('#output');


submitBtn.addEventListener("click", submitHandler);

function submitHandler() {
    let hypotenuseSq = 0;
    if(sideInput[0].value <=0 || sideInput[1].value<=0)
    {
        alert("Enter side greater than 0");
        return;
    }
    for (let side of sideInput) {
        let sideValue = Number(side.value);
        hypotenuseSq += square(sideValue,2);
    }
        let hypotenuse = Math.sqrt(hypotenuseSq);
    output.innerText = "Hypotenuse = "+hypotenuse+" units";
}

function square(a,b){
    let pow = 1;
    while(b >0){
            pow *=a;
            b--;
    }
    return pow;
}