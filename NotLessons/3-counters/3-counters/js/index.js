let buttons = document.querySelectorAll(`.item`);

function itemOnClick(evt) {
    let item = evt.target;
    item.textContent = Number(item.textContent) + 1
}

buttons.forEach((element) => {
    element.addEventListener(`click`, itemOnClick);
})