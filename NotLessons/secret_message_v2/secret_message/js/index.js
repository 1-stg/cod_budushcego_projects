let outputNode = document.querySelector(`#output`);
let dotNode = document.querySelector(`#dot`);
let slashNode = document.querySelector(`#slash`);
let clearNode = document.querySelector(`#clear`);
let pauseNode = document.querySelector(`#pause`);

dotNode.addEventListener(`click`, function () {
  outputNode.innerHTML += `•`;
});

slashNode.addEventListener('click', () => {
  outputNode.innerHTML += '-';
});

clearNode.addEventListener('click', () => {
  outputNode.innerHTML = '';
})

pauseNode.addEventListener('click', () => {
  outputNode.innerHTML += '/';
})


