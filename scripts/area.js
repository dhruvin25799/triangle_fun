const base = document.querySelector("#base");
const height = document.querySelector("#height");
const calculate = document.querySelector("#calc");
const output = document.querySelector("#output");

function calculateArea() {
    var triangleBase = Number(base.value);
    var triangleHeight = Number(height.value);
    var area = 0.5 * triangleBase * triangleHeight;
    output.innerHTML = "The Area of the triangle is : " + area + "<br>Formula used is 1/2 * base * height";
}

calculate.addEventListener("click", calculateArea);