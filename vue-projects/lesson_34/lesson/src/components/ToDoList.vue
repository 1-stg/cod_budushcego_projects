<script>

export default {
    data() {
        return {
            todos: [
                {
                    isDone: false,
                    text: 'Покормить кота'
                }
            ],
            activeText: '',
        }
    },

    methods: {
        deleteItem(index) {
            this.todos.pop(index)
        },
        addItem() {
            this.todos.push({
                isDone: false,
                text: this.activeText,
            })
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

        <ul class="list-group">
            <h2 v-if="todos.length == 0" class="d-flex justify-content-center">Запланируйте что-нибудь :)</h2>

            <li class="list-group-item" v-for="(item, index) in todos">
                <div class="input-group">
                    <div class="input-group-text">
                        <input class="form-check-input mt-0" type="checkbox" v-model="item.isDone">
                    </div>
                    <span class="input-group-text todo-title" :class="{'done': item.isDone}">
                        {{ item.text }}
                    </span>
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
}

.input-group {
    cursor: pointer;
}

.done {
    text-decoration: line-through;
}
</style>