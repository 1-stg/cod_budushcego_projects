let togglers = document.querySelectorAll(`.item`);

function togglersOnClick (evt) {
    let item = evt.target;
    item.classList.toggle(`item_on`);
}

togglers.forEach((toggler) => {
    toggler.addEventListener(`click`, togglersOnClick);
})