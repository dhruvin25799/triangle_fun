const sides = document.querySelectorAll(".side-input");
const calculateBtn = document.querySelector("#calculate-hypotenuse-btn");
const outputEl = document.querySelector(".output");

function calculateSumOfSquare(a, b) {
    const sumOfSquares = a * a + b * b;
    return sumOfSquares;
}

function calculateHypotenuse() {
    const sumOfSquares = calculateSumOfSquare(
        Number(sides[0].value),
        Number(sides[1].value)
    );
    const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
    outputEl.innerText = "Hypotenuse is " + lengthOfHypotenuse;
}

calculateBtn.addEventListener("click", calculateHypotenuse);
