<script setup>
import { useRoute } from 'vue-router'
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import axios from 'axios'

const route = useRoute()
const car = ref({})
const currentIndex = ref(0)

// Вычисляемые свойства
const images = computed(() => car.value?.images || [])
const totalImages = computed(() => images.value.length)
const hasMultipleImages = computed(() => totalImages.value > 1)

// Получение URL изображения
function getImageUrl(img) {
    if (!img) return 'http://localhost:3005/icons/base_photo.svg'
    if (img.startsWith('http')) return img
    const cleanPath = img.startsWith('/') ? img.slice(1) : img
    return `http://localhost:3005/carPhoto/${cleanPath}`
}

// Методы управления слайдером
function goTo(index) {
    if (index < 0 || index >= totalImages.value) return
    currentIndex.value = index
}

function prev() {
    goTo(currentIndex.value - 1)
}

function next() {
    goTo(currentIndex.value + 1)
}

// Загрузка данных
async function loadCar() {
    try {
        const response = await axios.get('/carDetails', {
            params: { _id: route.params._id }
        })
        car.value = response.data
        currentIndex.value = 0 // сброс индекса при загрузке нового авто
    } catch (error) {
        console.error('Ошибка загрузки авто:', error)
    }
}

// Обработка ошибок загрузки изображений
function handleImageError(event, fallback = 'http://localhost:3005/icons/base_photo.svg') {
    const img = event.target
    if (img.src !== fallback) {
        img.src = fallback
    }
}

// Обработчики клавиатуры и тач-событий
let touchStartX = 0

function onKeydown(e) {
    if (!hasMultipleImages.value) return
    if (e.key === 'ArrowLeft') {
        e.preventDefault()
        prev()
    } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        next()
    }
}

function onTouchStart(e) {
    touchStartX = e.changedTouches[0].screenX
}

function onTouchEnd(e) {
    if (!hasMultipleImages.value) return
    const diff = touchStartX - e.changedTouches[0].screenX
    const threshold = 50
    if (Math.abs(diff) > threshold) {
        if (diff > 0) {
            next()
        } else {
            prev()
        }
    }
}

// Жизненный цикл
onMounted(() => {
    loadCar()
    document.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
    document.removeEventListener('keydown', onKeydown)
})
</script>

<template>
    <div class="photos-title mt-3">
        <div class="car-details-photos-container" @touchstart="onTouchStart" @touchend="onTouchEnd">
            <div class="main-img-container">
                <img v-for="(img, index) in images" :key="index" class="main-img"
                    :class="{ active: currentIndex === index }" :src="getImageUrl(img)"
                    :alt="`${car.title} - фото ${index + 1}`" :loading="index === 0 ? 'eager' : 'lazy'"
                    @error="handleImageError($event, 'http://localhost:3005/icons/base_photo.svg')" />
            </div>

            <div v-if="hasMultipleImages" class="slider-nav">
                <button class="slider-prev" aria-label="Предыдущее фото" @click="prev">‹</button>
                <button class="slider-next" aria-label="Следующее фото" @click="next">›</button>
            </div>

            <div v-if="hasMultipleImages" class="slider-indicators">
                <div v-for="(_, index) in images" :key="index" class="slider-indicator"
                    :class="{ active: currentIndex === index }" @click="goTo(index)"></div>
            </div>
        </div>

        <div v-if="hasMultipleImages" class="car-details-photos-sub-container">
            <div v-for="(img, index) in images.slice(0, 3)" :key="index" class="sub-img-container"
                :class="{ active: currentIndex === index }" @click="goTo(index)">
                <img class="sub-img" :src="getImageUrl(img)" :alt="`${car.title} - миниатюра ${index + 1}`"
                    loading="lazy" @error="handleImageError($event, 'http://localhost:3005/icons/base_photo.svg')" />
            </div>

            <div v-if="images.length > 3" class="sub-img-container more-images" @click="goTo(3)">
                <div class="sub-img more-overlay">
                    <span>+{{ images.length - 3 }}</span>
                    <p>Ещё фото</p>
                </div>
            </div>
        </div>

        <div class="title-price">
            <div class="title">
                <h1>{{ car.title }}, {{ car.year }}</h1>
            </div>
            <div class="price">
                <h2>{{ car.price }}₽</h2>
            </div>
        </div>
    </div>

    <div class="options-button-container">
        <div class="container options__container">
            <div class="row gx-3 row-cols-1 row-cols-lg-3 row-cols-xxl-2 text-center">
                <div class="col mb-3">
                    <div class="options-car-details-item text-center">
                        <img src="http://localhost:3005/icons/mileage.svg" alt="Пробег" />
                        <p class="options-car-details-item-main">Пробег</p>
                        <p class="options-car-details-item-sub">{{ car.mileage }} Км</p>
                    </div>
                </div>
                <div class="col mb-3">
                    <div class="options-car-details-item text-center">
                        <img src="http://localhost:3005/icons/gearbox.svg" alt="Коробка передач" />
                        <p class="options-car-details-item-main">Коробка</p>
                        <p class="options-car-details-item-sub">{{ car.gearbox }}</p>
                    </div>
                </div>
                <div class="col mb-3">
                    <div class="options-car-details-item text-center">
                        <img src="http://localhost:3005/icons/spray_gun.svg" alt="Цвет" />
                        <p class="options-car-details-item-main">Цвет</p>
                        <p class="options-car-details-item-sub">{{ car.color }}</p>
                    </div>
                </div>
                <div class="col mb-3">
                    <div class="options-car-details-item text-center">
                        <img src="http://localhost:3005/icons/celendar.svg" alt="Дата выхода" />
                        <p class="options-car-details-item-main">Год выпуска</p>
                        <p class="options-car-details-item-sub">{{ car.year }}</p>
                    </div>
                </div>
                <div class="col mb-3">
                    <div class="options-car-details-item text-center">
                        <img src="http://localhost:3005/icons/engine.svg" alt="Двигатель" />
                        <p class="options-car-details-item-main">Двигатель</p>
                        <p class="options-car-details-item-sub">{{ car.engine }}</p>
                    </div>
                </div>
                <div class="col mb-3">
                    <div class="options-car-details-item text-center">
                        <img src="http://localhost:3005/icons/drive_shaft.svg" alt="Привод" />
                        <p class="options-car-details-item-main">Привод</p>
                        <p class="options-car-details-item-sub">{{ car.driveShaft }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
* {
    box-sizing: border-box;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f8f9fa;
}

p {
    margin: 0;
}

.car-details {
    max-width: 1400px;
    margin: 0 auto;
    padding: 20px;
}

.photos-title {
    display: flex;
    flex-direction: column;
    gap: 30px;
}

h1 {
    font-weight: 700;
    color: #000000;
    line-height: 1.2;
}

h2 {
    color: #000000;
    margin: 0;
}

.car-details-photos-container {
    position: relative;
    width: 100%;
    border-radius: 16px;
    overflow: hidden;
    background: #fff;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.title-price {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 20px;
    padding: 0 10px;
}

.title-price h1 {
    font-size: clamp(24px, 4vw, 40px);
    margin: 0;
    max-width: 70%;
}

.title-price h2 {
    font-size: clamp(24px, 4vw, 40px);
    color: #000000;
    font-weight: 600;
}

.main-img-container {
    width: 100%;
    height: 65vh;
    max-height: 600px;
    min-height: 300px;
    position: relative;
    overflow: hidden;
}

.main-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: none;
    transition: opacity 0.3s ease;
}

.main-img.active {
    display: block;
    animation: fadeIn 0.4s ease;
}

@keyframes fadeIn {
    from {
        opacity: 0.8;
    }

    to {
        opacity: 1;
    }
}

.slider-nav {
    position: absolute;
    top: 50%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    transform: translateY(-50%);
    z-index: 20;
    pointer-events: none;
}

.slider-nav button {
    background: rgba(255, 255, 255, 0.95);
    border: none;
    border-radius: 50%;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
    pointer-events: auto;
    font-size: 24px;
    color: #333;
    margin: 0 15px;
}

.slider-nav button:hover:not(:disabled) {
    background: white;
    transform: scale(1.1);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.slider-nav button:active:not(:disabled) {
    transform: scale(0.95);
}

.slider-nav button:disabled {
    opacity: 0.3;
    cursor: not-allowed;
}

.slider-indicators {
    position: absolute;
    bottom: 20px;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    gap: 10px;
    z-index: 20;
}

.slider-indicator {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.6);
    cursor: pointer;
    transition: all 0.3s ease;
    border: 2px solid transparent;
}

.slider-indicator.active {
    background: white;
    transform: scale(1.3);
    border-color: white;
}

.slider-indicator:hover {
    background: white;
    transform: scale(1.2);
}

.car-details-photos-sub-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    padding: 10px;
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.sub-img-container {
    aspect-ratio: 4/3;
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
}

.sub-img-container:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.sub-img-container.active {
    transform: translateY(-2px);
}

.sub-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.sub-img-container:hover .sub-img {
    transform: scale(1.05);
}

.more-images {
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #000000, #000000);
    color: white;
    font-weight: 600;
    font-size: 18px;
}

.more-images:hover {
    background: linear-gradient(135deg, #000000, #000000);
}

.options-button-container {
    margin-top: 10px;
}

.options__container {
    padding: 30px;
    padding-bottom: 0;
    margin-left: 0;
    margin-right: 0;
    width: 100%;
    border-radius: 20px;
    background: white;
    box-shadow: 0 4px 25px rgba(0, 0, 0, 0.08);
    border: 1px solid #eee;
}


.options-car-details-item {
    padding: 20px;
    border-radius: 12px;
    background: rgba(199, 199, 199, 0.151);
    transition: all 0.3s ease;
    height: 100%;
}

.options-car-details-item:hover {
    background: rgb(228, 228, 228);
    transform: translateY(-2px);
}

.options-car-details-item img {
    width: 40px;
    height: 40px;
    margin-bottom: 15px;
}

.options-car-details-item-main {
    font-size: 16px;
    font-weight: 600;
    color: #555;
    margin-bottom: 5px;
}

.options-car-details-item-sub {
    font-size: 18px;
    font-weight: 700;
    color: #1a1a1a;
}

.car-details-button {
    margin: 20px 0;
    padding: 18px 30px;
    border-radius: 20px;
    width: 100%;
    background: rgb(220, 220, 220);
    color: black;
    border: none;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}

.car-details-button:hover {
    transition: all 0.2s ease-in-out;
    background: rgb(65, 65, 65);
    color: white;
}


.car-details-button:active {
    transition: all 0.1s ease-in-out;
    transform: scale(0.9);
    opacity: 0.9;
}

@media (max-width: 1200px) {
    .main-img-container {
        height: 55vh;
    }

    .car-details-photos-sub-container {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media (max-width: 992px) {
    .car-details {
        padding: 0 20px;
    }

    .main-img-container {
        height: 45vh;
    }

    .slider-nav button {
        width: 40px;
        height: 40px;
        margin: 0 10px;
    }
}

@media (max-width: 768px) {
    .main-img-container {
        height: 35vh;
        min-height: 250px;
    }

    .title-price {
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
    }

    .title-price h1 {
        max-width: 100%;
    }

    .car-details-photos-sub-container {
        grid-template-columns: repeat(2, 1fr);
    }

    .slider-nav button {
        width: 36px;
        height: 36px;
        font-size: 20px;
    }

    .options__container {
        padding: 20px;
        padding-bottom: 0;
    }

    .options-car-details-item {
        padding: 15px;
    }

    .car-details-photos-sub-container {
        display: none;
        visibility: none;
    }
}

@media (max-width: 576px) {
    .main-img-container {
        height: 30vh;
        min-height: 200px;
    }

    .car-details-photos-sub-container {
        grid-template-columns: 1fr;
    }

    .slider-nav button {
        width: 32px;
        height: 32px;
        margin: 0 5px;
    }

    .slider-indicators {
        bottom: 10px;
    }

    .title-price h1,
    .title-price h2 {
        font-size: 22px;
    }

    .car-details-button {
        padding: 16px;
        font-size: 16px;
    }
}

@media (hover: none) and (pointer: coarse) {
    .slider-nav button {
        width: 44px;
        height: 44px;
    }

    .slider-indicator {
        width: 12px;
        height: 12px;
    }

    .car-details-button {
        min-height: 50px;
    }
}

.image-loading {
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: loading 1.5s infinite;
}

@keyframes loading {
    0% {
        background-position: -200% 0;
    }

    100% {
        background-position: 200% 0;
    }
}

.show-h2 {
    text-align: center;
    font-size: 28px;
    margin: 40px 0 30px;
    color: #1a1a1a;
    font-weight: 600;
}
</style>