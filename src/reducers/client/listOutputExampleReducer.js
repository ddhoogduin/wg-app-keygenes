import {outputExamples} from '../../constants/types'
import _ from 'lodash'
export default (state=[], action) => {
    switch (action.type) {
        case outputExamples.OUTPUT_EXAMPLE_LIST_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}