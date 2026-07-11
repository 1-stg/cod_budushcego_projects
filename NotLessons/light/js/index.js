let lightNode = document.querySelector("#ligth");
let blackNode = document.querySelector("#black");
let outputNode = document.querySelector("#output");
let containerNode = document.querySelector()

// console.log(lightNode);



lightNode.addEventListener('click', () => {
    outputNode.src = "assets/light.png";
    outputNode.alt = "Включенная лампочка";
    outputNode.classList.add(`opacity-0`);
});

blackNode.addEventListener('click', () => {
    outputNode.src = "assets/dark.png";
    outputNode.alt = "Выключенная лампочка";

});
