import { createSlice } from '@reduxjs/toolkit'
const initVal = {
    Post: []
}
const PostSlice = createSlice({
    name: "Post",
    initialState: initVal,
    reducers: {
        Add: (state, actions) => {
            state.Post.push(actions.payload.post)
        },
        Delete: (state, actions) => {
            state.Post = state.Post.filter((item) => {
                return (actions.payload.id !== item.id)
            });
        },
        Edit: (state, actions) => {

            state.Post.forEach(element => {
                if (element.id === actions.payload.post.id) {
                    element.titel = actions.payload.post.titel
                    element.content = actions.payload.post.content
                    element.time = actions.payload.post.time
                }
            });
        },
    }
})
export const { Add, Delete, Edit } = PostSlice.actions
export default PostSlice.reducer