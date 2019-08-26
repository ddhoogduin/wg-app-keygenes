import { toolSteps} from "../../constants/types";
import SascWebApi from "../../apis/SascWeb";

import _ from 'lodash'


const verifyGetPageList = (response) =>{
    if(response.data.error){
        return {
            type: toolSteps.TOOL_STEPS_LIST_FAILED
        }
    }
    return {
        type: toolSteps.TOOL_STEPS_LIST_SUCCESS,
        payload: _.values(response.data.data)
    }
};

export const getToolStepsList = () => async (dispatch, ) =>{
    const response = await SascWebApi.get(`/items/tool_steps?fields=*.*`);
    dispatch(verifyGetPageList(response));
};