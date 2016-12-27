import * as fetchApi from './fetchApi.js';
import * as counter from './counter.js';
import * as modal from './modal'

export default {
    ...fetchApi,
    ...counter,
    ...modal
};
