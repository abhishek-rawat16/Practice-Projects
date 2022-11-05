const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

function updateClock()
{
    const currentDate = new Date();
    setTimeout(updateClock, 1000)
    const h = currentDate.getHours();
    const m = currentDate.getMinutes();
    const s = currentDate.getSeconds();
    const hDeg = (h/12) *360;
    hour.style.transform = `rotate(${hDeg}deg)`;
    const mDeg = (m/60) *360;
    minute.style.transform = `rotate(${mDeg}deg)`;
    const sDeg = (s/60) *360;
    second.style.transform = `rotate(${sDeg}deg)`;
}

updateClock();