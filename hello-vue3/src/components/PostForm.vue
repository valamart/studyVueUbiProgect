<template>
    <form @submit.prevent>
        <h2>new post</h2>

        <my-input
        v-focus
        v-model="post.title"
        type="text"
        placeholder="title"/>

        <my-input
        v-model="post.body"
        type="text"
        placeholder="body"/>

        <my-button type="button" @click="createPost">addPost</my-button>
    </form>
</template>

<script>
 export default {
    data() {
        return {
            post: {
                title: '',
                body: ''
            }
        }
    },
    methods: {
        createPost() {
            this.post.id = Date.now()
            this.$emit('create', this.post)
            this.post = {
                title: '',
                body: ''
            }
        }
    }
 }
</script>

<style scoped>
form {
    margin:  20px;
}
</style>