let favoriteButtonNode = document.querySelector(`#favorite-button`);
let modalFavoriteNode = document.querySelector(`.modal-favorite-background`);
let moonNode = document.querySelector(`#moon`);
let bodyNode = document.querySelector(`body`);


function closeModal() {
    modalFavoriteNode.classList.toggle(`on`)
    modalFavoriteNode.removeEventListener(`click`, closeModal);
}

moonNode.addEventListener(`click`, () => {
    bodyNode.classList.toggle(`on`)
})

favoriteButtonNode.addEventListener(`click`, () => {
    modalFavoriteNode.classList.toggle(`on`);

    modalFavoriteNode.addEventListener(`click`, closeModal)
})