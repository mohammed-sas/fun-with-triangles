const sides = document.querySelectorAll('.side-input');
const submitBtn = document.querySelector('#submit');
const output = document.querySelector('#output');


submitBtn.addEventListener("click", calculateArea);

function calculateArea() {
    let a = Number(sides[0].value);
    let b = Number(sides[1].value);
    let c = Number(sides[2].value);
    if (a > 0 && b > 0 && c > 0)
        heronFormula(a, b, c);
     else {
        alert("Enter sides greater than 0");
        return;
    }

}

function heronFormula(a, b, c) {
    let s = (a + b + c) / 2;
    let value = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    output.innerText = "Area of triangle = " + value + " units";
}