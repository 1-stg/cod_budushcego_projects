let button = document.querySelector(`#button`);
let input = document.querySelector(`#search`);
let validNode = document.querySelector(`#valid`);
let invalidNode = document.querySelector(`#invalid`);
let image = document.querySelector(`#image`);

let bag = {
    'летучая мышь': 'bat',
    'часы': 'clock',
    'ключи': 'key',
    'зелье': 'potion',
    'книга заклинаний': 'spellbook',
    '1': '321' 
};

button.addEventListener(`click`, () => {
    let findText = input.value;
    let item = bag[findText];

    if (item) {
        input.classList.add(`is-valid`);
        input.classList.remove(`is-invalid`);
        image.src = `assets/${item}.png`;
    } else {
        input.classList.remove(`is-valid`);
        input.classList.add(`is-invalid`);
        image.src = ``;
    }
    
})