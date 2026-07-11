function renderName() {
    let usernameNode = document.querySelector(`.username`);
    usernameNode.textContent = user.username;
}

function renderMoney() {
    let moneyNode = document.querySelector(`.money`);
    moneyNode.textContent = `${user.money}$`;

    if (user.money == 0) {
        moneyNode.classList.add(`zero`);
        moneyNode.textContent = `0$`;
    };

}

function renderShop() {
    let shopContainer = document.querySelector(`.shop_items`);
    shopContainer.innerHTML = ``;
    shopItems.forEach((item) => {
        shopContainer.innerHTML += `<li class="item item_shop">${item.title} - ${item.price}</li>`
    })
}

function renderBackpack() {
    let backpackNode = document.querySelector('.backpack');
    let backpackItemsNode = document.querySelector(`.backpack_items`);
    let backpackNameNode = backpackNode.querySelector(`h2`);

    backpackNode.style.backgroundColor = backpack.color;

    backpack.count = 0
    backpackItemsNode.innerHTML = ``;
    backpack.backpackItems.forEach((item) => {
        backpack.count += item.count;
        backpackItemsNode.innerHTML += `<li class="item item_backpack">${item.title} - ${item.count}</li>`;
    });
    backpackNameNode.textContent = `${backpack.quality} рюкзак. ${backpack.count}|${backpack.capacity}`;
}

function buyItem(title, price) {
    if (backpack.count < backpack.capacity) {
        let hasItem = false;
        backpack.backpackItems.forEach((item) => {
            if (item.title == title) {
                item.count += 1;
                hasItem = true;
            }
        })

        if (!hasItem) {
            backpack.backpackItems.push({
                title: title,
                count: 1,
            })
        }

        user.money -= price;

        renderBackpack();
        renderMoney();
    }
}

function upgrade() {
    switch (backpack.capacity) {
        case 10:
            backpack.capacity = 15;
            backpack.color = `lightblue`;
            backpack.quality = `Редкий`;
            break;
        case 15:
            backpack.capacity = 20;
            backpack.color = `lightgreen`;
            backpack.quality = `Новый`;
            break;
        case 20:
            backpack.capacity = 25;
            backpack.color = `purple`;
            backpack.quality = `Редкий`;
            break;
        case 25:
            backpack.capacity = 30;
            backpack.color = `yellow`;
            backpack.quality = `Эпический`;
            break;
        case 30:
            backpack.capacity = 50;
            backpack.color = `orange`;
            backpack.quality = `Нереальный`;
            break;
    }

    renderBackpack();
}

let user = {
    username: "Никита",
    money: 1000,
}

let shopItems = [
    {
        title: 'Звездный кристалл',
        price: 300
    },
    {
        title: 'Драконий глаз',
        price: 100
    },
    {
        title: 'Руна бессмертия',
        price: 50
    },
    {
        title: 'Голова медузы',
        price: 80
    },
    {
        title: 'Зелье жизни',
        price: 10
    },
    {
        title: 'Хлеб',
        price: 5
    },
];

let backpack = {
    backpackItems: [ // теперь это свойство объекта, значит отрисовку нужно немного поменять
        { title: 'Зелье жизни', count: 2 },
        { title: 'Хлеб', count: 5 }
    ],
    color: `white`, // цвет рюкзака
    quality: `Обычный`, // редкость. Мы же в MMO ;)
    capacity: 10, // вместимость. Сколько предметов влезет?
    count: 7 // сколько предметов сейчас в рюкзаке?
};



renderName();
renderMoney();
renderShop();
renderBackpack();

let nodes = document.querySelectorAll(`.item_shop`);
nodes.forEach((node, index) => {
    node.addEventListener(`click`, () => {
        let shopItem = shopItems[index];

        if (user.money - shopItem.price >= 0) {
            buyItem(shopItem.title, shopItem.price);
        }
    })
})

let upgradeButton = document.querySelector(`.upgrade`);
upgradeButton.addEventListener(`click`, upgrade)


// Другая версия кнопки улучшения
// function
//  upgrade(){
//     if (backpack.quality == `обычный` 
// &&
//  money >= 50) {
//         money -= 50;
//         backpack.quality = `редкий`;
//         backpack.capacity = 15;
//         backpack.color = `#476291`;
//     } else if (backpack.quality == `редкий` ?? money >= 100) {
//         money -= 100;
//         backpack.quality = `эпический`;
//         backpack.capacity = 20;
//         backpack.color = `#8650AC`;
//     } else if (backpack.quality == `эпический` ?? money >= 200) {
//         money -= 200;
//         backpack.quality = `легендарный`;
//         backpack.capacity = 30;
//         backpack.color = `#CF6A32`;
//     }
    
// renderBackpack()
// ; // перерендер рюкзака
    
// renderMoney()
// ; // перерендер денег
// }

// // кнопка улучшения
// let upgradeButton = document.querySelector(`.upgrade`);
// upgradeButton.addEventListener(`click`, upgrade);