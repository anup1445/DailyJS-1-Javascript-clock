
const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
function getTime(){
    const date = new Date();
    const seconds = date.getSeconds();
    
    const secondsDegrees = ((seconds/60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`
    
    const mins = date.getMinutes() ;
    const minDegrees = ((mins/60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minDegrees}deg)`

    const hours = date.getHours();
    const hourDegrees = ((hours/12)* 360) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`

}

setInterval(getTime,1000);