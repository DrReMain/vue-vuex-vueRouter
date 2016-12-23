<template>
    <div class="container">
        <p style="text-align: center"><button @click="fetchApi({url: 'http://cdn.bootcss.com/normalize/5.0.0/normalize.css'})">fetch</button></p>
        <div>
            {{pageData}}
        </div>
        <Counter :count="count"
                 :increment-count="incrementCount"
                 :decrement-count="decrementCount"
        ></Counter>

    </div>
</template>

<script>
    import Counter from '../components/Counter.vue'
    import {mapState, mapGetters, mapActions} from 'vuex'     // use to get data from store

    export default {
        components: {
            Counter
        },

        computed: {
//            ...mapState([
//                'count'
//            ]),
            ...mapGetters([
                'count',
                'pageData'
            ])
        },

        methods: {
            ...mapActions([
                'incrementCount',
                'decrementCount',
                'fetchApi'
            ])

//            两种方法 dispatch actions
//            incrementCount() {
//                this.$store.dispatch('incrementCount')
//            },
//            decrementCount() {
//                this.$store.dispatch('decrementCount')
//            }

        }
    }
</script>

<style lang="less" src="../styles/counterpage.less" scoped></style>