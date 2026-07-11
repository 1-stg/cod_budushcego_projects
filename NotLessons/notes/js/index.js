let saveButton = document.querySelector(`#save`);
let textInput = document.querySelector(`#text`);
let titleInput = document.querySelector(`#title`);
let categoryInput = document.querySelector(`#category`);
let dateInput = document.querySelector(`#date`);
let notesNode = document.querySelector(`#notes`);


saveButton.addEventListener(`click`, () => {
  let titleInputCard = titleInput.value;
  console.log(titleInputCard);
  let categoryInputCard = categoryInput.value;
  let textInputCard = textInput.value;
  let dateInputCard = dateInput.value;

  let template = `
  <div class="note">
    <h3 class="note__title">${titleInputCard || `Без названия`}</h3>
    <h4 class="note__category">${categoryInputCard || `Без категории`}</h4>
    <p class="note__description">${textInputCard || ``}</p>
    <hr>
    <h4 class="note__date">${dateInputCard || new Date().toLocaleDateString()}</h4>
  </div>
  `;

  notesNode.insertAdjacentHTML(`beforeend`, template);

  titleInput.value = '';
  categoryInput.value = '';
  textInput.value = '';
  dateInput.value = '';
});