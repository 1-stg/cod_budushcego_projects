<script>
export default {
    data() {
        return {
            answer: "Выбери ответ",
        }
    },

    methods: {
        right() {
            this.answer = "Правильно";
        },
        wrong() {
            this.answer = "Неправильно";
        },
    }
}
</script>

<template>
    <div class="test">
        <p>В каком году был создан Javascript?</p>

        <div class="answers">
            <button class="btn btn-light" @click="wrong">1993</button>
            <button class="btn btn-light" @click="wrong">1994</button>
            <button class="btn btn-light" @click="right">1995</button>
            <button class="btn btn-light" @click="wrong">1996</button>
        </div>

        <p class="result">
            {{ answer }}
        </p>

    </div>
</template>


<style>
.test .answers {
    display: flex;
    gap: 20px;
    margin-bottom: 10px;
}
</style>

<script>

</script>