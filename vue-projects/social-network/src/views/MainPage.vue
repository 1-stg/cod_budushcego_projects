<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import router from '../router.js';

let cars = ref([]);
let users = ref([]);
let activeCars = ref([]);
let searchText = ref('');

const PHOTO_BASE_URL = 'http://localhost:3005/carPhoto';

onMounted(async () => {
    try {
        const response = await axios.get('/main');
        cars.value = response.data.cars;
        users.value = response.data.users;
        activeCars.value = response.data.cars;
    } catch (err) {
        console.error(`Ошибка! : ${err}`);
    }
});

const search = () => {
    if (!searchText.value.trim()) {
        activeCars.value = cars.value;
        return;
    }
    activeCars.value = cars.value.filter(car =>
        car.title.toLowerCase().includes(searchText.value.toLowerCase())
    );
};
</script>

<template>
    <div class="row row-cols-1 row-cols-md-2 g-2 mt-1">
        <div class="col">
            <form role="search" @submit.prevent>
                <div class="input-group">
                    <input type="search" class="form-control rounded-4 p-3" name="search" placeholder="Поиск..."
                        aria-label="Search" v-model="searchText" @input="search">
                </div>
            </form>
        </div>
        <div class="col">
            <button class="btn btn-dark w-100 rounded-4 p-3">
                Найдено <span class="fw-bold">{{ activeCars.length }}</span> машин
            </button>
        </div>
    </div>

    <div class="d-flex align-items-center justify-content-center flex-column vh-80" v-if="activeCars.length === 0">
        Ничего не
        найдено
        <i class="bi bi-clipboard-x mt-4 fs-1"></i>
    </div>

    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 mt-2 g-2" v-else>
        <div class="col" v-for="(car, index) in activeCars" :key="car._id">
            <div class="card rounded-4 shadow h-100">
                <div role="button"
                    class="btn-dark rounded-2 shadow-sm p-2 position-absolute top-0 end-0 me-2 mt-2 is-blocked"
                    v-if="car.status === 'blocked'">Заблокирован</div>

                <div class="card-img-wrapper position-relative ratio ratio-16x9">

                    <div :id="'carousel-' + car._id" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div v-for="(img, imgIndex) in car.images" :key="imgIndex"
                                :class="['carousel-item', { 'active': imgIndex === 0 }]">
                                <img :src="img ? `${PHOTO_BASE_URL}${img}` : 'web/userPhoto/base.svg'"
                                    class="card-img-top-custom object-fit-cover w-100" :class="{ 'base-img': !img }"
                                    :alt="'Фото машины: ' + car.title">
                            </div>
                        </div>

                        <div v-if="car.images && car.images.length > 1">
                            <button class="carousel-control-prev" type="button" :data-bs-target="'#carousel-' + car._id"
                                data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Предыдущий</span>
                            </button>
                            <button class="carousel-control-next" type="button" :data-bs-target="'#carousel-' + car._id"
                                data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Следующий</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div class="card-body position-relative">
                    <h5 class="card-title fs-4 fw-bold text-start">{{ car.title }}</h5>
                    <p class="card-text fs-5 fw-normal text-start">
                        {{ car.price }} ₽
                    </p>
                    <p class="card-text fs-7 fw-normal text-start mb-2">
                        {{ car.mileage }} КМ
                    </p>

                    <button class="btn btn-dark rounded-4 d-flex justify-content-center w-100" @click="router.push({
                        name: 'carDetails', params: {
                            _id: car._id,
                        }
                    })">Подробнее</button>
                    <div class="position-absolute end-0 top-0 mt-4 me-4">
                        <i class="bi bi-heart-fill fs-1 heart"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.card {
    overflow: hidden;
    border: none;
    background-color: #ffffff;
    color: #212529;
}

.card-img-wrapper {
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background-color: #e9ecef;
}

.img-wrapper {
    height: 240px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background-color: #e9ecef;
}

.card-img-top-custom {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.base-img {
    width: auto !important;
    height: auto !important;
    max-width: 80%;
    max-height: 80%;
    object-fit: contain;
    filter: brightness(80%);
    opacity: 1;
}

.form-control:focus-visible {
    box-shadow: none;
    border: none;
    box-shadow: 0 0 10px 0.5px #dadada;
}

input[type="search"]::-webkit-search-cancel-button {
    filter: brightness(0);
    cursor: pointer;
}

.vh-80 {
    height: 80dvh;
}

.heart {
    cursor: pointer;
    padding: 7px;
    border-radius: 10px;

    &:hover {
        transition: all ease-in-out 0.3s;
        opacity: 0.9;
    }

    &:active {
        transition: all ease-in-out 0.1s;
        color: rgb(143, 38, 38)
    }
}
</style>