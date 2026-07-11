let bard = {
    username: "Виталя",
    age: "30 - 40???",
    role: "Бард",
    ability: "Очень круто всё делает. Визучий.",
    gold: 5,
    image: "assets/bard.png",
};

let container = document.querySelector(`#cards`);
container.innerHTML += `
<div class="card mb-3">
    <div class="row g-0">
        <div class="col-md-4">
            <img src="${bard.image}" class="img-fluid rounded-start">
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">${bard.username}</h5>
                <p class="card-text">
                    Возраст: <span>${bard.age}</span><br>
                    Класс: <span>${bard.role}</span><br>
                    Способности: <span>${bard.ability}</span>
                </p>
                <p class="coins card-text"></p>
            </div>
        </div>
    </div>
</div>
`

let coinsContainer = document.querySelector(`.coins`);

for (let index = 0; index < bard.gold; index++) {
    coinsContainer.innerHTML += `<img src="assets/coin.png" class="img-fluid rounded-start">`
}