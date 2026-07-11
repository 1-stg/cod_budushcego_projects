<script>
    export default {
        data() {
            return {
                image: "src/assets/show.png",
                type: "password",
            }
        },

        methods: {
            toggle () {
                this.type = this.type == "text" ? "password" : "text";
                this.image = this.image == "src/assets/hide.png" ? "src/assets/show.png" : "src/assets/hide.png";
            }
        }
    }
</script>

<template>
    <div class="password-input">
        <div class="input-group mb-3">          
            <input :type="type" value="1234" class="form-control" >
            <button @click="toggle" class="btn btn-outline-secondary">
                <img :src="image">
            </button>
        </div>
    </div>
</template>


<style>
.password-input img {
    height: 24px;
}
</style>
