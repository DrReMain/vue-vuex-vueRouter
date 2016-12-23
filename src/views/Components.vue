<template>
    <div class="container">
        <Dropdown :data-list="['1', '2', '3']">DROPDOWN</Dropdown>
    </div>
</template>

<script>
    import Dropdown from '../components/Dropdown.vue'

    export default {
        components: {
            Dropdown
        }
    }

</script>


<style scoped>
    .container {
        padding: 20px;
    }
</style>