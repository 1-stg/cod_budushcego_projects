let listNode = document.querySelector(`#list`);
let newTodoInput = document.querySelector(`#new-todo`);
let addButton = document.querySelector(`#add-button`);

addButton.addEventListener(`click`, () => {
    listNode.innerHTML += `
        <li class="list-group-item">
          ${newTodoInput.value || `Пустая записка`}
        </li>`
    
    newTodoInput.value = ``;
});

listNode.addEventListener(`click`, (evt) => {
    let item = evt.target;
    item.classList.toggle(`text-decoration-line-through`)
    item.classList.toggle(`li-bg`)
})