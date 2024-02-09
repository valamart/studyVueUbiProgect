<template>
    <div>
        <h2>{{ post.title }}</h2>
        <p>{{ post.body }}</p>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            post: {},
            id: this.$route.params.id
        }
    },
    methods: {

        async fechPost() {
            try {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${this.id}`)
                this.post = response.data
                // переделать в сервис
            }

            catch(e) {
                alert('Error')
            } finally {

            }

        }
    },
    mounted() {
        this.fechPost()
    }
}
</script>

<style>

</style>