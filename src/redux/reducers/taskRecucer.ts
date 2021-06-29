import { ITask } from "../../screens/AddTaskSreen";
import { storeData } from "../../Utils/UtilFunctions";
import { ADD_TASK, IActionPlainObject, PERSIST_STORE_IN_LOCAL_STORAGE, READ_LOCAL_STORAGE, RESET_TASKLIST, TOOGLE_COMPLETE } from "../actions/taskActions"


const initialTaskListState: ITask[] = []

const taskReducer = (state = initialTaskListState, action: IActionPlainObject) => {
    switch(action.type){
        case ADD_TASK:{
            const updatedState: ITask[] = [action.payload, ...state] //state.concat(action.payload)
            return updatedState} 
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