import { pages} from "../../constants/types";
import SascWebApi from "../../apis/SascWeb";

import _ from 'lodash'


const verifyGetPageList = (response) =>{
    if(response.data.error){
        return {
            type: pages.PAGES_LIST_FAILED
        }
    }
    return {
        type: pages.PAGES_LIST_SUCCESS,
        payload: _.values(response.data.data)
    }
};

export const getPageList = () => async (dispatch, getState) =>{
    const response = await SascWebApi.get(`/items/pages?fields=*.*`);
    dispatch(verifyGetPageList(response));
};