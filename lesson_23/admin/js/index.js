let add = document.querySelector(`#add`);
let input = document.querySelector(`.form-control`);
let feedback = document.querySelector(`.feedback`);
let usersContainer = document.querySelector(`.users-container`);
let username = [`admin`, `user`, `lox`];

const addToContainer = () => {
  username.forEach((user) => {
    usersContainer.innerHTML += `
      <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="user ms-2 me-auto">
          ${user}
        </div>
        <button type="button" class="user-delete btn btn-outline-primary">Х</button>
      </li>`
      })
}

addToContainer();

add.addEventListener(`click`, () => {
  user = input.value;
  feedback.textContent = ``;

  if (username.includes(user) || user == ``) {
    feedback.textContent = `Пользователь с таким именем уже есть`;
  } else {
    usersContainer.innerHTML = ``;
    username.push(user);
    feedback.textContent = `Пользователь ${user} добавлен`;

    addToContainer();
  }

  input.value = ``;
})

let buttons = document.querySelector(`.user-delete`)

buttons.forEach(`click`, () => {
  username.remove();
})