<template>
    <div class="post">
        <div><strong>Post</strong> {{ post.title }}</div>
        <div><strong>Description</strong> {{ post.body }}</div>
        <div class="post__btns">
            <my-button
                @click="$router.push({name:'PostIdPage',params: { id: post.id } } )">
                Open
            </my-button>
            <my-button
                @click="$emit('remove', post)">
                Delete
            </my-button>
        </div>
    </div>
</template>

<script>
export default {

    props: {
        post: {
            type: Object,
            required: true
        }
    }
}

</script>

<style scoped>
.post {
        margin: 10px;
        padding: 15px;
        border: 2px solid blueviolet;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
.post__btns {
    display: flex;
}
</style>