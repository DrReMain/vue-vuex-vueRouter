import fetchApi from './fetchApi'
import * as counter from './counter'
import * as modal from './modal'

export default {
    fetchApi,
    ...counter,
    ...modal
}