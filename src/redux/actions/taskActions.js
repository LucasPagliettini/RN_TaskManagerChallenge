import { getData } from "../../components/Utils/UtilFunctions";

export const ADD_TASK = 'ADD_TASK';
export const TOOGLE_COMPLETE = 'TOOGLE_COMPLETE'
export const PERSIST_STORE_IN_LOCAL_STORAGE = 'PERSIST_STORE_IN_LOCAL_STORAGE'
export const READ_LOCAL_STORAGE = 'READ_LOCAL_STORAGE'
export const RESET_TASKLIST = 'RESET_TASKLIST'

export const addTaskAction = (task) => {
    return {
        type: ADD_TASK,
        payload: task
    }
}

export const toogleCompletedAction = (id) => {
    return {
        type: TOOGLE_COMPLETE,
        payload: id
    }
}

export const persistStoreInLocalStorageAction = () => {
    return {
        type: PERSIST_STORE_IN_LOCAL_STORAGE,
    }
}

export const readLocalStorageAction = (array) => {
    return {
        type: READ_LOCAL_STORAGE,
        payload: array
    }
}

export const resetTaskListAction = () => {
    return {
        type: RESET_TASKLIST,
        payload: []
    }
}

const getTaskListFromLocalStore = () => {
    return async (dispatch) => {
        const array = await getData('taskList').then(array => array)
        dispatch(readLocalStorageAction(array))
}}

export default getTaskListFromLocalStore