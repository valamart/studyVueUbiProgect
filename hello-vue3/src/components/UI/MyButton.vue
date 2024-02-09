<template>
    <div>
        <button>
            <slot></slot>
        </button>
    </div>

</template>

<script>
    export default {
        name: 'my-button'
    }
</script>

<style scoped>
    button {
        margin: 10px;
        padding: 7px;
        width: 90px;
        height: 50px;
        background-color: #fff;
        border: 1px solid blue;
        border-radius: 8px;
    }
</style>