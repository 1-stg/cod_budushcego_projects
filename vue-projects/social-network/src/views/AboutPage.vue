<script setup>
import { ref } from 'vue';

const teamMembers = ref([
    { name: 'Иван Иванов', role: 'Full-stack разработчик', photo: '1.jpg' },
    { name: 'Мария Петрова', role: 'UI/UX дизайнер', photo: '' },
    { name: 'Алексей Смирнов', role: 'Бэкенд разработчик', photo: '' },
]);
</script>

<template>
    <div class="container py-5">
        <!-- Заголовок -->
        <div class="text-center mb-5">
            <h1 class="display-4 fw-bold">О проекте Driva</h1>
            <p class="lead text-muted">Платформа для продажи и покупки автомобилей с прозрачной историей</p>
        </div>

        <!-- Основная информация -->
        <div class="row g-4 mb-5">
            <div class="col-md-4">
                <div class="card h-100 border-0 shadow-sm rounded-4 p-4 text-center">
                    <i class="bi bi-car-front fs-1 text-dark"></i>
                    <h5 class="fw-bold mt-3">Большой выбор</h5>
                    <p class="text-muted">Более 1000 автомобилей от частных лиц и дилеров</p>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card h-100 border-0 shadow-sm rounded-4 p-4 text-center">
                    <i class="bi bi-shield-check fs-1 text-dark"></i>
                    <h5 class="fw-bold mt-3">Проверенные объявления</h5>
                    <p class="text-muted">Каждое объявление проходит модерацию</p>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card h-100 border-0 shadow-sm rounded-4 p-4 text-center">
                    <i class="bi bi-chat-dots fs-1 text-dark"></i>
                    <h5 class="fw-bold mt-3">Прямое общение</h5>
                    <p class="text-muted">Связывайтесь с продавцами напрямую без посредников</p>
                </div>
            </div>
        </div>

        <!-- Команда -->
        <div class="mb-5">
            <h2 class="text-center fw-bold mb-4">Наша команда</h2>
            <div class="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
                <div v-for="member in teamMembers" :key="member.name" class="col">
                    <div class="card h-100 border-0 shadow-sm rounded-4 text-center p-3">
                        <div class="rounded-circle bg-light mx-auto mb-3"
                            style="width: 100px; height: 100px; overflow: hidden;">
                            <img :src="member.photo !== '' ? `http://localhost:3005/userPhoto/${member.photo}` : 'http://localhost:3005/userPhoto/base.svg'"
                                class="w-100 h-100 object-fit-cover" :alt="member.name">
                        </div>
                        <h5 class="fw-bold">{{ member.name }}</h5>
                        <p class="text-muted">{{ member.role }}</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Контактная информация -->
        <div class="text-center">
            <h2 class="fw-bold mb-3">Контакты</h2>
            <p class="text-muted">Email: <a href="mailto:info@driva.ru">info@driva.ru</a></p>
            <p class="text-muted">Телефон: <a href="tel:+78005553535">8 (800) 555-35-35</a></p>
            <p class="text-muted">© 2025 Driva. Все права защищены.</p>
        </div>
    </div>
</template>

<style scoped>
.object-fit-cover {
    object-fit: cover;
}
</style>