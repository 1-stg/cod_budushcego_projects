let books = document.querySelectorAll(`.book`);
let input = document.querySelector(`.form-control`);

input.addEventListener(`input`, () => {
    let searchStr = input.value.toLowerCase();

    if (searchStr != ``) {

        books.forEach((book) => {
            let title = book.textContent.toLowerCase();

            if (title.includes(searchStr)) {
                book.classList.remove(`d-none`);
            } else {
                book.classList.add(`d-none`);
            }
        })

    } else {

        books.forEach((book) => {
            book.classList.remove(`d-none`);
        })

    }
})


books.forEach((el) => {
    el.addEventListener(`click`, () => {
        el.classList.toggle(`done`);
    })
})
