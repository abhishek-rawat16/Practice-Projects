const counterEl  = document.querySelector(".counter");

const loadingBarFront = document.querySelector(".loading-bar-front");

let index = 0;

updateNum();

function updateNum()
{
    counterEl.innerText = index + "%"
    loadingBarFront.style.width = index + "%";
    index++;
    if(index<101)
    {
        setTimeout(updateNum, 20);
    }
}