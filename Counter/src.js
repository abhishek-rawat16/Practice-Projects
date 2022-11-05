const counterDisplay = document.getElementById("value");
const decreaseBtn = document.querySelector(".decrease");
const resetBtn = document.querySelector(".reset");
const increaseBtn = document.querySelector(".increase");

let counter = 0;

decreaseBtn.addEventListener("click", function(){
    counter--;
    updateDisplay();
});

resetBtn.addEventListener("click", function(){
    counter=0;
    updateDisplay();
});

increaseBtn.addEventListener("click", function(){
    counter++;
    updateDisplay();
});

function updateDisplay()
{
    counterDisplay.innerText = counter;
}