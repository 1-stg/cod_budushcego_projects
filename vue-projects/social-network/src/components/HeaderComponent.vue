<script setup>

import { useRouter } from 'vue-router';
const router = useRouter();

</script>

<template>
    <header class="shadow rounded-4 mt-3 w-100">
        <nav class="row ms-2 me-2 p-2">
            <ul class="col-6 d-flex mb-0 align-items-center justify-content-start fw-bold">
                <span class="link" @click="router.push({ name: 'main' })">
                    Главная
                </span>
            </ul>
            <ul class="col-6 d-flex mb-0 align-items-center justify-content-end fw-bold">
                <span class="link" @click="router.push({ name: 'about' })">
                    <i class="bi bi-buildings-fill"></i>
                </span>
            </ul>

        </nav>
    </header>
</template>

<style>
header {
    outline: 2px solid #212529;
}

#link {
    padding: 0px;
}

.link {
    cursor: pointer;
    padding: 7px;
    border-radius: 10px;

    &:hover {
        transition: all ease-in-out 0.3s;
        background-color: rgb(230, 230, 230);
    }

    &:active {
        transition: all ease-in-out 0.1s;
        transform: scale(0.8);
    }
}
</style>