<template>
    <div class="dropdown">
        <button class="dropdown-btn" @click="drop">
            <slot></slot>
        </button>
        <transition name="dropdown" appear>
            <ul class="dropdown-menu" v-if="toggle">
                <li v-for="item in dataList">{{item}}</li>
            </ul>
        </transition>
    </div>
</template>

<script>
    export default {
        props: {
            dataList: Array,
        },

        data: function () {
            return {
                toggle: false
            }
        },
        methods: {
            drop: function () {
                this.toggle = !this.toggle
            }
        }
    }

</script>

<style scoped>

    .dropdown {
        display: inline-block;
        background: #fff;
        position: relative;
    }

    .dropdown-btn {
        width: 180px;
        height: 40px;
        cursor: pointer;
    }
    .dropdown-menu {
        box-sizing: border-box;
        position: absolute;
        width: 100%;
        border: 1px solid #ccc;
        background: lightcyan;
    }

    .dropdown-menu,
    .dropdown-menu li {
        list-style: none;
        margin: 0;
    }
    .dropdown-menu li {
        padding: 10px;
        text-align: center;
        cursor: pointer;
        transition: all .2s cubic-bezier(0.6, 0.04, 0.98, 0.335);
    }
    .dropdown-menu li:hover {
        background: #333;
        color: #fff;
    }

    .dropdown-enter-active,
    .dropdown-leave-active {
        transition: all .5s cubic-bezier(0.6, 0.04, 0.98, 0.335);
    }

    .dropdown-enter,
    .dropdown-leave-active {
        opacity: 0;
        transform: translateY(-30px);
    }

</style>