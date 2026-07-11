let toggleNode = document.querySelector(`.toggle.alert.alert-primary`);
let containerNode = document.querySelector(`.secret`);

toggleNode.addEventListener(`click`, () => {
    console.log(`ok`);
    
    containerNode.classList.toggle(`hidden`)
})