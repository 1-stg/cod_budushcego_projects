let app = new Vue({
    el: '#app',
    data: {
        username: "Эмиль",
        age: 20,
        role: "Бард",
        ability: "Сила убеждения и смешные шутки",
        gold: 10,
        money: "🪙🪙🪙",
    },
    methods: {
        fire() {
            this.money += "🪙";
        }
    }
})