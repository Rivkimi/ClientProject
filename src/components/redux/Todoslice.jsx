import { createSlice } from '@reduxjs/toolkit'
import UseGet from '../../Hooks/GetHook'
import UseDelete from '../../Hooks/DeleteHook';
import UsePut from '../../Hooks/PutHook';
import UsePost from '../../Hooks/PostHook';

const initVal = {
    Task: []
}
const TaskSlice = createSlice({
    name: "Task",
    initialState: initVal,
    reducers: {
        Get: (state) => {
            const [get, data] = UseGet();
            get('https://localhost:7290/api/ToDo')
            state.Task = data;
        },
        Add: (state, actions) => {
           // //state.Tasks=[...state.Tasks,actions.payload.Task]
            // const Post = UsePost();
            // Post('https://localhost:7290/api/ToDo',state.Task)
        },
        Delete: (state, actions) => {
            const Delete = UseDelete();
            Delete('https://localhost:7290/api/ToDo/api/DeleteToDos/' + actions.payload.id)
        },
        Edit: (state, actions) => {
            //
            // const [put, data] = UsePut();
            // put('https://localhost:7290/api/ToDo' );
            // state.Task = data;
        },
    }
})
export const { Get, Add, Delete, Edit } = TaskSlice.actions
export default TaskSlice.reducer