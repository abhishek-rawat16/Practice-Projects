const imageContainerEl = document.querySelector(".image-container");
const btnEl = document.querySelector(".btn");

btnEl.addEventListener("click", ()=>{
    imageNum = 6;
    addNewImages();
});

function addNewImages()
{
    for (let index = 0; index < imageNum; index++) 
    {
        const newImageEl = document.createElement("img");
        newImageEl.src = `https://picsum.photos/300?random=${Math.floor(Math.random()*20000)}`;
        imageContainerEl.appendChild(newImageEl);
    }
}