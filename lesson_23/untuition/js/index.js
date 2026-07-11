let cardsContainer = document.querySelector(`.cards`);
let headerText = document.querySelector(`.header`);
let nums = [-4, -3, -2, -1, 0, 1, 2, 3, 4];
nums.sort(() => Math.random() - 0.5);

nums.forEach((element) => {
    cardsContainer.innerHTML += `<div class="box box-closed">${element}</div>`
});

let boxes = document.querySelectorAll(`.box`);

boxes.forEach((box) => {
    box.addEventListener(`click`, () => {
        box.classList.remove(`box-closed`);
        let textPhrase = ``

        switch (+box.textContent) {
            case -4:
                textPhrase = `Лошара`;
                break;
            case -3:
                textPhrase = `Олух`;
                break;
            case -2:
                textPhrase = `Соплячок`;
                break;
            case -1:
                textPhrase = `Не повезло`;
                break;
            case 0:
                textPhrase = `И что мне с тобой делать!?`;
                break;
            case 1:
                textPhrase = `Ну молодец`;
                break;
            case 2:
                textPhrase = `Красава`;
                break;
            case 3:
                textPhrase = `Тигр`;
                break;
            case 4:
                textPhrase = `Иди в казино поиграй!`;
                break;
        }

        headerText.textContent = textPhrase;
    })
})