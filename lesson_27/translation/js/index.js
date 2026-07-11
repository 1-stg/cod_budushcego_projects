let input = document.querySelector(`#input`);
let result = document.querySelector(`#result`);
let helpNode = document.querySelector(`#help`);

let template = `
  <h5 class="card-title">кошка</h5>
  <h6 class="card-subtitle mb-2 text-muted">[kæt]</h6>
  <p class="card-text">It was not the only cat.
  И это была не единственная кошка.</p>
`;

let words = { // объект слово: перевод (ключ: значение)
  "cat": {
    translates: ["Кошка"],
    transcription: "[kæt]",
    examples: ['It was not the only cat.\nИ это была не единственная кошка.'],
  },
  "run": {
    translates: ["Бежать", "Бегать"],
    transcription: "[rʌn]",
    examples: ['flee, be run, run away, come running'],
  },
  "school": {
    translates: ["Школа"],
    transcription: "[sku:l]",
    examples: ['high school', 'big school'],
  },
  "schedule": {
    translates: ["график"],
    transcription: "['ʃedju:l]",
    examples: ['My schedule is full right-', 'big schedule'],
  },
  "scheme": {
    translates: ["схема"],
    transcription: "[ski:m]",
    examples: ['Whatever convoluted scheme Tench was hatching, there was no way in hell Herney would permit her to appear on CNN.', 'big scheme'],
  },
}

input.addEventListener(`input`, function () {
  let value = input.value
  helpNode.innerHTML = ``;
  helpNode.classList.add(`d-none`);

  if (value.length >= 2) {
    Object.keys(words).forEach(word => {
      if (word.toLowerCase().includes(value.toLowerCase())) {
        helpNode.innerHTML += `<button type="button" class="helpButton">${word}</button>`;
      }
    })

    let buttons = document.querySelectorAll(`.helpButton`);
    
    if (buttons.length > 0) {

      helpNode.classList.remove(`d-none`);
      
      buttons.forEach((button) => {
        button.addEventListener(`click`, () => {
          input.value = button.innerHTML;
          value = input.value;
          let word = words[value]; // пытаемся найти значение по такому ключу. Если не нашли, то в переменной будет undefined
          if (word) { // для if значение undefined будет означать false
            result.innerHTML = `
            <h5 class="card-title">${word.translates.join(", ")}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${word.transcription}</h6>
            <p class="card-text">${word.examples.join(`,<br>`)}</p>
            `;
          } else { // если word = undefined
            result.innerHTML = `
            <h5 class="card-title">-</h5>
            `
          }
          helpNode.innerHTML = ``;
          helpNode.classList.add(`d-none`);
        })
      })
    }
  }



  let word = words[value.toLowerCase()]; // пытаемся найти значение по такому ключу. Если не нашли, то в переменной будет undefined
  if (word) { // для if значение undefined будет означать false
    result.innerHTML = `
        <h5 class="card-title">${word.translates.join(", ")}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${word.transcription}</h6>
        <p class="card-text">${word.examples.join(`,<br>`)}</p>
    `;
  } else { // если word = undefined
    result.innerHTML = `
      <h5 class="card-title">-</h5>
    `
  }

});