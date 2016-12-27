<template>
    <div class="container">
        <Dropdown :data-list="['1', '2', '3']">DROPDOWN</Dropdown>

        <hr>
        <button @click="showModal">modal</button>
        <Modal :modal-toggle="modalToggle"
               :title="'逗逼'"
               :footer="'香港脚'"
               :content="modalContent"
               @close="hideModal"></Modal>

    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex'     // use to get data from store
    import Dropdown from '../components/Dropdown.vue'
    import Modal from '../components/Modal.vue'

    export default {
        components: {
            Dropdown,
            Modal
        },

        computed: {
            ...mapState([
                'modalToggle'
            ]),
            modalContent: function () {

                let content = '';
                Array.apply(null, {length: 80}).map(function (item, index) {
                    return `<em>${index}</em><br>`
                }).forEach(function (item) {
                    content += item
                })

                return `<em>${content}</em>`
            }
        },
        methods: {
            ...mapActions([
                'showModal',
                'hideModal'
            ])
        }
    }

</script>


<style scoped>
    .container {
        padding: 20px;
    }
</style>