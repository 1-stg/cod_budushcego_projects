let inputNode = document.querySelector(`#promocode`);
let validNode = document.querySelector(`#valid`);
let invalidNode = document.querySelector(`#invalid`)
let buttonNode = document.querySelector(`#login-button`);
let sushiNode = document.querySelector(`#sushi`);

buttonNode.addEventListener(`click`, () => {
    inputNode.classList = `form-control`;
    sushiNode.classList.add(`d-none`);
    let text = inputNode.value;

    if(text == `SUSHI2025`) {
        validNode.textContent = `Вы получили набор из 4-х суши`;
        inputNode.classList.add(`is-valid`);
        sushiNode.classList.remove(`d-none`);
    } else if (text == ``) {
        invalidNode.textContent = `Введите промокод`;
        inputNode.classList.add(`is-invalid`);
    } else {
        invalidNode.textContent = `Нет такого промокода`;
        inputNode.classList.add(`is-invalid`);
    }
})