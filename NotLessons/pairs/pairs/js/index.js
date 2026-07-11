let fields = document.querySelectorAll('.item');

fields.forEach((element) => {
    const randomClass = Math.random() < 0.5 ? 'item1' : 'item2';

    element.classList.add(randomClass);
});


let container = document.querySelector(`.container`);
let prevNode = ``;
count = 0;

container.addEventListener(`click`, (evt) => {
    let node = evt.target;

    if (node.classList.contains(`item_closed`)) {
        node.classList.remove(`item_closed`);

        if (prevNode == ``) {
            prevNode = node;
        } else if (prevNode.classList.contains(`item1`) && node.classList.contains(`item1`)) {
            node.classList.add(`animate__bounceOutDown`);
            prevNode.classList.add(`animate__bounceOutDown`);
            count++;
            prevNode = ``;
        } else if (prevNode.classList.contains(`item2`) && node.classList.contains(`item2`)) {
            node.classList.add(`animate__bounceOutDown`);
            prevNode.classList.add(`animate__bounceOutDown`);
            count++;
            prevNode = ``;
        } else {
            prevNode.classList.add(`item_closed`);
            prevNode = node;
        }
    }

    if (count == 8) {
        document.querySelector(`.gameover`).textContent = `Вы победили!`;
    }
})