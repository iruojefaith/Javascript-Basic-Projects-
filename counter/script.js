const counterNumber = document.querySelector(".counter-number");
const counterIncrease = document.querySelector(".counter-increase");
const counterDecrease = document.querySelector(".counter-decrease");
const counterReset = document.querySelector(".counter-reset");

counterReset.addEventListener('click', () => {
     counterNumber.innerText = 0;
})
counterIncrease.addEventListener('click', () => {
    result = Number(counterNumber.innerText) + 1;
    counterNumber.innerText = result;


})
counterDecrease.addEventListener('click', () => {

    if (result <= 0) {
          counterNumber.innerText = 0;
    } else {
         result = Number(counterNumber.innerText) - 1;
    counterNumber.innerText = result;
    }
})