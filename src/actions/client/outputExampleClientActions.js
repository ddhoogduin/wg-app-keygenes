import { outputExamples} from "../../constants/types";
import SascWebApi from "../../apis/SascWeb";

import _ from 'lodash'


const verifyGetOutputExample = (response) =>{
    if(response.data.error){
        return {
            type: outputExamples.OUTPUT_EXAMPLE_LIST_FAILED
        }
    }
    return {
        type: outputExamples.OUTPUT_EXAMPLE_LIST_SUCCESS,
        payload: _.values(response.data.data)
    }
};

export const getOutputExample = () => async (dispatch, ) =>{
    const response = await SascWebApi.get(`/items/output_examples?fields=*.*`);
    dispatch(verifyGetOutputExample(response));
};