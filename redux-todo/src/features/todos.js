import { createSlice } from "@reduxjs/toolkit";

const todoSlicer = createSlice({
    name:"todo",
    initialState: {
        items: []
    },
    reducers: {
        addTodo : (state, action)=> {
            state.items.push({
                id: Date.now(),
                text: action.payload,
                completed: false
            })
        },
        toggleTodo: (state, action) => {
            const todo = state.items.find((item)=> item.id === action.payload);
            if (todo){
                 todo.completed =  !todo.completed;
            }
        },
        deleteTodo: (state, action) => {
            state.items = state.items.filter((item)=> item.id !== action.payload)
        }
    }
})

export const {addTodo, toggleTodo, deleteTodo} = todoSlicer.actions;
export default todoSlicer.reducer;