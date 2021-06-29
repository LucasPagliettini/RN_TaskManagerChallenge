import { ITask } from "../../screens/AddTaskSreen";
import { getData } from "../../Utils/UtilFunctions";

export const ADD_TASK: string = 'ADD_TASK';
export const TOOGLE_COMPLETE: string = 'TOOGLE_COMPLETE'
export const PERSIST_STORE_IN_LOCAL_STORAGE: string = 'PERSIST_STORE_IN_LOCAL_STORAGE'
export const READ_LOCAL_STORAGE: string = 'READ_LOCAL_STORAGE'
export const RESET_TASKLIST: string = 'RESET_TASKLIST'

export interface IActionPlainObject {
    type: string,
    payload: any
}

export const addTaskAction = (task: ITask) : IActionPlainObject => {
    return {
        type: ADD_TASK,
        payload: task
    }
}

export const toogleCompletedAction = (id: number) : IActionPlainObject => {
    return {
        type: TOOGLE_COMPLETE,
        payload: id
    }
}

export const persistStoreInLocalStorageAction = () : IActionPlainObject => {
    return {
        type: PERSIST_STORE_IN_LOCAL_STORAGE,
        payload: null
    }
}

export const readLocalStorageAction = (array: ITask[]) : IActionPlainObject => {
    return {
        type: READ_LOCAL_STORAGE,
        payload: array
    }
}

export const resetTaskListAction = () : IActionPlainObject => {
    return {
        type: RESET_TASKLIST,
        payload: []
    }
}

const getTaskListFromLocalStore = () : Function => {
    return async (dispatch: Function) : Promise<void> => {
        const array: ITask[] = await getData('taskList').then(array => array)
        dispatch(readLocalStorageAction(array))
}}

export default getTaskListFromLocalStore