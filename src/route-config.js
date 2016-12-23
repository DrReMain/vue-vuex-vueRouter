import HomePage from './views/HomePage.vue'
import CounterPage from './views/CounterPage.vue'
import Components from './views/Components.vue'

export default [
    {path: '/', component: HomePage},
    {path: '/counter', component: CounterPage},
    {path: '/components', component: Components}
]