<template>
    <div>
        <h1>{{count}}</h1>
        <p>
            <button class="btn" @click="incrementCount">+</button>
            <button class="btn" @click="decrementCount">-</button>
        </p>
    </div>
</template>

<script>
    export default {
        props: {
            count: Number,
            incrementCount: Function,
            decrementCount: Function
        }
    }
</script>

<style scoped>
    h1,
    p {
        text-align: center;
        color: red;
        margin: 50px;
    }

    .btn {
        width: 50px;
        height: 50px;
        font-size: 2em;
    }
</style>