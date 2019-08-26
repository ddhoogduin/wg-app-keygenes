import {toolSteps} from '../../constants/types'
import _ from 'lodash'
export default (state=[], action) => {
    switch (action.type) {
        case toolSteps.TOOL_STEPS_LIST_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}