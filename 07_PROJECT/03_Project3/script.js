
const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')       //both will do the sme work

setInterval(function () {
    let date = new Date();
    //console.log(date.toLocaleTimeString());       //isse console mein print hote rhega
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);       //1000 means 1 second, ki woh 1 sec ke badd badd display krega