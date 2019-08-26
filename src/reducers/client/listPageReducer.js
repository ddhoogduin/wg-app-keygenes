import {pages} from '../../constants/types'
import _ from 'lodash'
export default (state=[], action) => {
    switch (action.type) {
        case pages.PAGES_LIST_SUCCESS:
            return _.mapValues(_.keyBy(action.payload, 'reference_alias'));
        default:
            return state;
    }
}