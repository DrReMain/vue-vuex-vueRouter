<template>
    <div>
        <div class="hello">
            <img src="../assets/logo.png" alt="">
            <Hello></Hello>
        </div>
        <h1>THIS IS HOME</h1>
        <div class="container">
            <router-link to="/counter">Go to counter</router-link>
        </div>
    </div>
</template>

<script>
    import Hello from '../components/Hello.vue'

    export default {
        components: {
            Hello
        }
    }

</script>


<style lang="scss" src="../styles/homepage.scss" scoped></style>