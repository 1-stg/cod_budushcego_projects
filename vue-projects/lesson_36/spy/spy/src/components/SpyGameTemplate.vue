<script>
export default {
  data() {
    return {
      x: 0,
      y: 0,
      skin: "spy",
      name: "",
      result: "",
      actions: [],
      timer: 1000,
      maxX: 80,
      maxY: 70,
      step: 5,
      isExecuting: false,
    };
  },
  methods: {
    action() {
      if (this.isExecuting || this.actions.length === 0) return;

      this.isExecuting = true;
      this.executeNextAction();
    },

    executeNextAction() {
      if (this.actions.length === 0) {
        // Все действия выполнены
        this.isExecuting = false;
        return;
      }

      // Берем первое действие из массива
      const currentAction = this.actions[0];

      // Выполняем текущее действие
      if (currentAction === "Вверх") {
        this.moveTop();
      } else if (currentAction === "Вниз") {
        this.moveBottom();
      } else if (currentAction === "Вправо") {
        this.moveRight();
      } else if (currentAction === "Влево") {
        this.moveLeft();
      }

      // Удаляем выполненное действие из массива
      this.actions.shift();

      // Планируем следующее действие через секунду
      setTimeout(() => {
        this.executeNextAction();
      }, 1000);
    },

    moveTop() {
      if (this.y > 0) {
        this.y = Math.max(0, this.y - this.step);
      }
    },

    moveBottom() {
      if (this.y < this.maxY) {
        this.y = Math.min(this.maxY, this.y + this.step);
      }
    },

    moveLeft() {
      if (this.x > 0) {
        this.x = Math.max(0, this.x - this.step);
      }
    },

    moveRight() {
      if (this.x < this.maxX) {
        this.x = Math.min(this.maxX, this.x + this.step);
      }
    },

    deleteAction(index) {
      if (!this.isExecuting) {
        this.actions.splice(index, 1);
      }
    }
  }
};
</script>

<template>
  <main class="d-flex gap-5">
    <div class="card" style="width: 25rem; height: 100vh">
      <div class="card-header">Действия</div>
      <ul class="list-group list-group-flush">
        <!-- Выводи сюда все действия из массива actions -->
        <li class="list-group-item" v-for="(action, index) in actions">{{ action }} <button @click="deleteAction(index)"
            class="btn btn-dark">x</button></li>
      </ul>
      <div class="card-body action-btns row">

        <!-- При нажатии на кнопку, добавляй строку с названием стороны в массив actions -->
        <button class="btn btn-outline-primary col-12 mb-1" @click="actions.push('Вверх');">
          Вверх
        </button>
        <button class="btn btn-outline-primary col-6" @click="actions.push('Влево');">
          Влево
        </button>
        <button class="btn btn-outline-primary col-6" @click="actions.push('Вправо');">
          Вправо
        </button>
        <button class="btn btn-outline-primary col-12 mt-1" @click="actions.push('Вниз');">
          Вниз
        </button>

        <button class="btn btn-success mt-3 col-12" @click="action">
          Выполнить
        </button>
      </div>
    </div>
    <div class="container">
      <div class="game">Он всегда на шаг позади тебя...</div>

      <div class="spy" :style="{
        left: x + 'dvw',
        top: y + 'dvh',
      }">
        <p id="result-name"></p>
        <div id="skin-container">
          <!-- Формирование пути до изображения с помощью v-bind -->
          <img :src="'src/assets/' + skin + '.png'" alt="" />
        </div>
        <!-- Cюда выводятся текущии координаты персонажа на странице и его имя -->
        <p id="result-click">x: {{ x }}, y: {{ y }}</p>
        <p id="result-type">{{ name }}</p>
      </div>
      <div class="controls d-flex gap-1">
        <!-- Привяжи это поле к data-свойству name -->
        <input class="form-control" type="text" placeholder="Имя персонажа" v-model="name" />
        <!-- Привяжи этот селект к data-свойству skin -->
        <select class="form-select" v-model="skin">
          <option value="spy">Шпион</option>
          <option value="dino">Динозаврик</option>
          <option value="ghost">Призрак</option>
        </select>
      </div>
    </div>
  </main>
</template>

<style>
body {
  margin: 0;
}

.container {
  display: flex;
  position: relative;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
}

.spy {
  height: 100px;
  width: 100px;
  text-align: center;
  position: absolute;
  top: 0;
  left: 0;
  transition: 1s;
}

img {
  width: 100%;
}

.controls {
  /* Зафиксируем положение внизу экрана, независимо от скрола */
  position: absolute;
  bottom: 10px;
  right: 50px;
  left: 50px;
}


.action-btns {
  position: absolute;
  bottom: 10px;
}
</style>