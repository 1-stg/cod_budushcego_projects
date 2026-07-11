<script>
import axios from 'axios'; // подключаем библиотеку. Не забудь установить её через: npm install axios
axios.defaults.baseURL = 'https://api.restful-api.dev'; // базовый url сервера

export default {
  data() {
    return {
      trackNum: '', // id для поиска отправления. Привязано к полю ввода 
      shop: '', // имя отправителя посылки для новой посылки. На сервере хранится под ключём name
      origin: '', // место отправления для новой посылки.
      destination: '', // город получателя для новой посылки.
      weight: 0.1, // вес отправления для новой посылки.
      shipment: [{ // тут храним данные отправления. По умолчанию сюда записаны тестовые данные.
        id: "Null",
        name: "AliShp",
        data: {
          origin: 'Москва',
          destination: 'Новосибирск',
          weight: '0.5',
          status: 'Отправлено'
        }
      },
      { // тут храним данные отправления. По умолчанию сюда записаны тестовые данные.
        id: "Null",
        name: "AliShp",
        data: {
          origin: 'Москва',
          destination: 'Новосибирск',
          weight: '0.5',
          status: 'Отправлено'
        }
      }
      ]

    }
  },
  methods: {
    async loadShipment(id) { // метод для поиска одного отправления по id

    },
    async createShipment() { // метод для создания одного отправления с данными из полей формы
      let response = await axios.post('objects', {
        name: this.shop,
        date: {
          origin: this.origin,
          destination: this.destination,
          weight: this.weight,
          status: this.status,
        },
      })
    },
    async removeShipment(id) { // метод для удаления одного отправления по id

    },
  }
};
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container">
      <a class="navbar-brand" href="/">
        🚚 Отслеживание посылок
      </a>
    </div>
  </nav>

  <main class="container mt-5">
    <div class="row">


      <div class="col">
        <!-- Поле для поиска отправление по id -->
        <div class="container mb-5">
          <label for="track">
            Отследить посылку:
          </label>
          <input class="form-control mb-3" type="text" id="track">
          <button class="btn btn-success">Отследить</button>
        </div>

        <div class="container">
          <h1>Посылка</h1>
          <hr class="mb-5">

          <div class="shipments-container">
            <!-- Здесь будет отправление -->
            <div class="shipment card border-info mb-4" v-if="shipment" v-for="(ships) in shipment">
              <div class="card-header border-info">
                <h5 class="card-title">
                  {{ ships.data.status }}
                </h5>
                <h6 class="card-subtitle mt-1">Трек-код: <a href="#">{{ ships.id }}</a> </h6>
                <h6 class="card-subtitle mt-1">Отправитель: <a href="#">{{ ships.name }}</a></h6>
              </div>
              <div class="card-body">
                <p class="card-text">
                  Город отправления: {{ ships.data.origin }}
                </p>
                <p class="card-text mb-4">
                  Город прибытия: {{ ships.data.destination }}
                </p>
                <div class="d-flex justify-content-between">
                  <button type="button" class="shipment-remove btn btn-outline-secondary"
                    @click="removeShipment(ships.id)">
                    Удалить отправление
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Форма создания -->
      <div class="col">
        <div class="container">
          <h1>Создать отправление</h1>
          <hr class="mb-3">

          <form @submit.prevent="createShipment">
            <div class="mb-3">
              <label class="form-label">Отправитель</label>
              <input type="text" class="form-control" v-model="shop">
            </div>
            <div class="mb-1">
              <label class="form-label">Город отправления</label>
              <input type="text" class="form-control" v-model="origin">
            </div>
            <div class="mb-1">
              <label class="form-label">Город получателя</label>
              <input type="text" class="form-control" v-model="destination">
            </div>
            <div class="mb-1">
              <label class="form-label">Вес посылки в кг: {{ weight }}</label>
              <input type="range" class="form-range" min="0.1" max="10" step="0.1" v-model="weight">
            </div>
            <button type="submit" class="btn btn-outline-success">
              Зарегистрировать отправление
            </button>
          </form>

        </div>
      </div>
    </div>
  </main>
</template>
