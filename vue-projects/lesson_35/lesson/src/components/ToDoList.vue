<script>

export default {
    data() {
        return {
            todos: [
                {
                    isDone: false,
                    text: 'Покормить кота',
                    isImportantStyle: false,
                }
            ],
            activeText: '',
            isImportant: false,
        }
    },

    methods: {
        deleteItem(index) {
            this.todos.splice(index, 1)
        },
        addItem() {
            if (!this.activeText) {
                return;
            }

            if (this.isImportant) {
                this.todos.unshift({
                    isDone: false,
                    text: this.activeText,
                    isImportantStyle: true,
                })
            } else {
                this.todos.push({
                    isDone: false,
                    text: this.activeText,
                })
            }

            this.activeText = '';
        }

    }
}
</script>

<template>
    <div class="todo-list mt-5">
        <div class="input-group mb-3">
            <input type="text" class="form-control" v-model="activeText">

            <button @click="addItem()" class="btn btn-outline-secondary" type="button">
                Добавить
            </button>



        </div>

        <div class="form-check mb-3">
            <input class="form-check-input" type="checkbox" v-model="isImportant" id="checkDefault">
            <label class="form-check-label" for="checkDefault">
                Важная задача
            </label>
        </div>

        <ul class="list-group mb-4">
            <h2 v-if="todos.length == 0" class="d-flex justify-content-center">Запланируйте что-нибудь :)</h2>

            <li class="list-group-item" v-for="(item, index) in todos">
                <div class="input-group" :class="{ 'is-important': item.isImportantStyle }">
                    <div class="input-group-text">
                        <input :id="'check' + index" class="form-check-input mt-0" type="checkbox"
                            v-model="item.isDone">
                    </div>
                    <label :for="'check' + index" class="input-group-text todo-title" :class="{ 'done': item.isDone }">
                        {{ item.text }}
                    </label>
                    <button class="btn btn-outline-secondary" type="button" @click="deleteItem(index)">
                        X
                    </button>
                </div>
            </li>

        </ul>
    </div>
</template>

<style>
.todo-title {
    flex: 1;
    cursor: pointer;
}

.input-group {
    cursor: pointer;
}

.done {
    text-decoration: line-through;
}

.is-important {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.584);
    border-radius: 5px;
}
</style>