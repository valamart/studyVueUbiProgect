<template>
  <div class="navbar">
    <div @click="$router.push('/')"><h3>vue3</h3></div>
    <div class="navbar__btns">
        <my-button @click="$router.push('/posts')">Posts</my-button>
        <my-button @click="$router.push('/about')">About</my-button>

    </div>
  </div>
</template>

<script>
import MyButton from './UI/MyButton.vue'
export default {
  components: { MyButton },

}
</script>

<style scoped>

    h3 {
      padding-left: 25px;
    }
    .navbar {
        height: 70px;
        background-color: darkgrey;
        box-shadow: 2px 2px 4px gray;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .navbar__btns {
      display: flex;
    }
</style>