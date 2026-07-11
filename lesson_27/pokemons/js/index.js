let pokemonContainer = document.querySelector(`.pokemon-container`);

let pokemons = [
  {
    name: "Пикачу",
    img: "pikachu",
    description: `Спокойный и добрый. Использует электричество, удары хвоста и укусы острых зубов.`
  },

  {
    name: "Бульбазавр",
    img: "bullbasaur",
    description: `Самый спокойный и миролюбивый покемон, может быть лидером и заботиться о других.`
  },

  {
    name: "Джигглипафф",
    img: "jigglypuff",
    description: `Очаровательное существо, но если его обидеть, то надувает щёки, злится и даёт сдачи. Очень злопамятный!`
  },

  {
    name: "Мяут",
    img: "meowth",
    description: `Задиристый и наглый покемон. Гуляет по ночам и ворует блестящие предметы и монетки.`
  },

  {
    img: "psyduck",
    name: "Псайдак",
    description: `Добрый и наивный, прожорливый, глуповатый. После сильной головной боли создаёт мощную психическую атаку.`
  },
];

let renderItem = (pokemon) => {
  pokemonContainer.innerHTML +=
    `<div class="col">
      <div class="card">
        <img src="assets/heart-fill.svg" class="heart">
        <img src="assets/${pokemon.img}.png" class="avatar card-img-top">
        <div class="card-body">
          <h5 class="card-title">${pokemon.name}</h5>
          <p class="card-text">${pokemon.description}</p>
        </div>
      </div>
    </div>`;
}

pokemons.forEach((pokemon) => {
  renderItem(pokemon);
})

let pokemonsCards = document.querySelectorAll(`.card`);

pokemonsCards.forEach((pkc) => {
  pkc.addEventListener(`click`, () => {
    let heartNode = pkc.querySelector(`.heart`);
    heartNode.classList.toggle(`like`); 
  })
});