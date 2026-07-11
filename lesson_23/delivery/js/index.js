let foodContainer = document.querySelector(`.food-container`);
let result = document.querySelector(`#result`);
let titles = [`1`, `2`, `3`];
let prices = [100, 200, 300];
let Avialebles = [true, true, false];

for (let i = 0; i < prices.length; i++) {
  let title = titles[i];
  let price = prices[i];
  let image = `assets/${i + 1}.jpeg`;
  let isAvialeble = Avialebles[i];

  if (isAvialeble) {
    foodContainer.innerHTML += `
      <div class="col">
        <div class="card">
          <img src="${image}" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title d-flex justify-content-between align-items-center flex-wrap">
              <span class="food-title">${title}</span>
              <span class="food-price badge bg-secondary">${price}</span>
            </h5>
          </div>
        </div>
      </div>`
  } else {
    foodContainer.innerHTML += `
      <div class="col">
        <div class="card card-not-available">
          <img src="${image}" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title d-flex justify-content-between align-items-center flex-wrap">
              <span class="food-title">${title}</span>
              <span class="food-price badge bg-secondary">${price}</span>
            </h5>
          </div>
        </div>
      </div>`
  }
}

let foods = document.querySelectorAll(`.card`);

foods.forEach((food) => {
  food.addEventListener(`click`, () => {
    let foodPrice = +food.querySelector(`.food-price`).textContent;
    let resultPrice = +result.textContent;

    if (!food.classList.contains(`card-not-available`)) {
      if (food.classList.contains(`card-active`)) {
        result.textContent = resultPrice - foodPrice;
        food.classList.remove(`card-active`);
      } else {
        result.textContent = resultPrice + foodPrice;
        food.classList.add(`card-active`);
      }
    }
  })
})

