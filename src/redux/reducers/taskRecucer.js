import { getData, storeData } from "../../components/Utils/UtilFunctions";
import { ADD_TASK, PERSIST_STORE_IN_LOCAL_STORAGE, READ_LOCAL_STORAGE, RESET_TASKLIST, TOOGLE_COMPLETE } from "../actions/taskActions"

const initialTaskListState = []

const taskReducer = (state = initialTaskListState, action) => {
    switch(action.type){
        case ADD_TASK:{
            const updatedState = state.concat(action.payload)
            return updatedState} //[action.payload, ...state]
        case TOOGLE_COMPLETE:
            return state.map(item => item.id===action.payload ? {...item, completed: !item.completed} : item);
        case PERSIST_STORE_IN_LOCAL_STORAGE:{
            storeData('taskList', state)
            return state}
        case READ_LOCAL_STORAGE:
            return action.payload
        case RESET_TASKLIST:
            return action.payload
        default: 
            return state;
    }
}

export default taskReducer