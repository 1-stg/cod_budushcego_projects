let mainNode = document.querySelector(`main`);
let countSeatNode = document.querySelector(`.count-seat`);
let buttonNodes = document.querySelectorAll('.seat-button');
let priceNode = document.querySelector(`.price-seat`);
let countSeat = 0;

function toggleClass(button) {
    button.classList.contains(`on`) ? countSeat-- : countSeat++;
    countSeatNode.innerHTML = countSeat;
    priceNode.innerHTML = countSeat * 500;
    button.classList.toggle('on');
}

buttonNodes.forEach((button) => {
    button.addEventListener('click', function () {
        toggleClass(this);
    });
});