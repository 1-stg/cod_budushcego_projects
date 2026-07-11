<script>
export default {
    data() {
        return {
            images: ['angry.png', 'sleep.png', 'study.png'],
            selectedImage: '',
        };

    },

    methods: {
        select(img) {
            if(this.selectedImage == img) {
                this.selectedImage = '';
                return;
            }
            this.selectedImage = img
        }
    },
};
</script>

<template>
    <div class="mt-5 d-flex justify-content-center image-gallery">
        <div class="image-item"  :class="{'selected': img == selectedImage}" v-for="img in images" @click="select(img)">
            <img :src="`src/assets/` + img"  />
        </div>
    </div>
</template>

<style>
.image-gallery {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
}

.image-item {
    width: 100px;
    transition: scale 500ms;
}

.image-item img {
    width: 100%;
}

.selected {
    scale: 1.8;
}

.current-image {
    width: 300px;
}
</style>