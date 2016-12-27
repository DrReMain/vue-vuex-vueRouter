<template>

    <transition name="modal">
        <div class="mask" v-if="modalToggle" @click="closeModal">
            <div class="modal" @click.stop>
                <div class="modal-header">
                    <p class="modal-title">{{title}} <span class="close-modal" @click="closeModal">关闭</span></p>
                </div>
                <div class="modal-body" v-html="content"></div>
                <div class="modal-footer">
                    <p class="modal-title">{{footer}}</p>
                </div>
            </div>
        </div>
    </transition>

</template>

<script>
    export default {
        props: {
            modalToggle: Boolean,
            title: String,
            footer: String,
            content: String
        },

        methods: {
            closeModal: function (e) {
                this.$emit('close')
            }
        }
    }
</script>

<style scoped>
    .mask {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, .5);
        overflow: auto;
    }

    .modal {
        position: absolute;
        top: 20px;
        left: 0;
        right: 0;
        margin: auto;
        margin-bottom: 50px;
        width: 500px;
        height: auto;
        background: #fff;
        box-shadow: 0 0 5px #333;
        border-radius: 4px;
    }

    .modal-header,
    .modal-body,
    .modal-footer {
        padding: 10px;
    }

    .modal-body {
        border-top: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        box-shadow: 0 0 2px #ccc inset;
    }

    .modal-title {
        font-size: 1.2em;
        display: flex;
        justify-content: space-between;
    }

    .modal-enter-active,
    .modal-leave-active {
        transition: all .2s;
    }

    .modal-enter,
    .modal-leave-active {
        opacity: 0;
    }


</style>