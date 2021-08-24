const checkBtn = document.querySelector("#is-triangle-btn");
const angleInput = document.querySelectorAll(".angle-value");
const output = document.querySelector(".output");

hideOutput();
checkBtn.addEventListener("click", isTriangle);

function isTriangle() {
    if (angleInput[0].value <= 0 || angleInput[1].value <= 0 || angleInput[2].value <= 0) {
        alert("Enter angle greater than 0");
        return;
    }
    var sum = 0;
    for (let i = 0; i < angleInput.length; i++) {
        sum += Number(angleInput[i].value);
    }
    console.log(sum);
    if (sum === 180) {
        output.style.display = "block";
        output.innerText = "Absolutely, it's a triangle";
    } else {
        output.style.display = "block";
        output.innerText = "Sorry, it's not a triangle";
    }

}

function hideOutput() {
    output.style.display = "none";
}