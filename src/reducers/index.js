import {combineReducers} from "redux";
import {reducer as formReducer} from 'redux-form'
import listInputReducer from "./client/input/listInputReducer"
import activeFormClientReducer from "./client/form/activeFormClientReducer";
import protocolStatusReducer from "./protocolStatusReducer";
import listPageReducer from "./client/listPageReducer";
import listToolStepsReducer from "./client/listToolStepsReducer";
import listOutputExampleReducer from "./client/listOutputExampleReducer";


export default combineReducers({
    form: formReducer,
    listInput: listInputReducer,
    activeFormClient: activeFormClientReducer,
    protocolStatus:protocolStatusReducer,
    listPage: listPageReducer,
    listToolSteps: listToolStepsReducer,
    listOutputExample: listOutputExampleReducer
});