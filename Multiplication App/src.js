const num1 = Math.ceil(Math.random()*12);
const num2 = Math.ceil(Math.random()*12);

const questionEl = document.getElementById("question");
questionEl.innerText = `What is ${num1} multiplied by ${num2}?`;

const scoreEl = document.getElementById("score");

let score = JSON.parse(localStorage.getItem("score"));

if(!score)
{
    score = 0;
}

scoreEl.innerText = `score: ${score}`; 

const inputEl = document.getElementById("input");

const formEl = document.getElementById("form");

const correctAns = num1*num2;

formEl.addEventListener("submit", () => {
    const userAns = +inputEl.value;
    if(userAns === correctAns) 
    {
        score++;
        updateLocalStorage();
    }
    else
    {
        score--;
        updateLocalStorage();
    }
});

formEl.addEventListener("reset", () => {

})

function updateLocalStorage()
{
    localStorage.setItem("score", JSON.stringify(score));
}

//Add Reset button functionality