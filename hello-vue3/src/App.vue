<template>
    <div>
       <navigation></navigation>
    <div class="app">

        <router-view></router-view>
    </div>

    </div>

</template>

<script>
import Navigation from './components/Navigation.vue';
export default {
  components: { Navigation },

}
</script>

<style>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .app {
        padding: 20px;
    }
</style>