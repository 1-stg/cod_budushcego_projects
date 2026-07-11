let fields = document.querySelectorAll(`.item`);
let gameoverNode = document.querySelector(`.gameover`);

fields.forEach((element) => {
    element.addEventListener(`click`, () => {
        element.classList.remove(`item_closed`);
        if (element.classList.contains(`item_bomb`)) {
            gameoverNode.textContent = `Вы проиграли!`;
        }
    })
})