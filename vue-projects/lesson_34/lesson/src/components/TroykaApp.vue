<script>
export default {
    data() {
        return {
            options: [100, 200, 300, 500, 1000],
            sum: '',
        }
    },
    methods: {
        showMoney(money) {
            this.sum = money
        }
    }
}
</script>

<template>
    <div class="">
        <div class="d-flex justify-content-center m-2">
            <p>Выберите сумму платежа: {{ sum }}</p>
        </div>

        <div class="d-flex justify-content-center gap-2 m-2">
            <button class="btn btn-dark" v-for="(item) in options" @click="showMoney(item)">
                {{ item }}
            </button>
        </div>

        <div class="input-group mt-3 mb-3">
            <input type="text" class="form-control custom-shadow" placeholder="Сумма платежа" v-model="sum">
        </div>
    </div>
</template>

<style>
.custom-shadow:focus {
    box-shadow: 0 0 0 0.25rem rgba(0, 0, 0, 0.25);
    /* Чёрная тень при фокусе */
    border-color: #000;
    /* Чёрная рамка */
}
</style>