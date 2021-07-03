import { ITask } from "../../screens/AddTaskSreen";
import { storeData } from "../../Utils/UtilFunctions";
import { ADD_TASK, IActionPlainObject, PERSIST_STORE_IN_LOCAL_STORAGE, READ_LOCAL_STORAGE, RESET_TASKLIST, TOOGLE_COMPLETE } from "../actions/taskActions"


const initialTaskListState: ITask[] = []

const taskReducer = (state: ITask[] = initialTaskListState, action: IActionPlainObject): ITask[] => {
    switch (action.type) {
        case ADD_TASK:
            return [action.payload, ...state]
        case TOOGLE_COMPLETE:
            return state.map(item => item.id === action.payload ? { ...item, completed: !item.completed } : item);
        case PERSIST_STORE_IN_LOCAL_STORAGE: {
            storeData('taskList', state)
            return state
        }
        case READ_LOCAL_STORAGE:
            return action.payload ? action.payload : state
        case RESET_TASKLIST:
            return action.payload
        default:
            return state;
    }
}

export default taskReducer