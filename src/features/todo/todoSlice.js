import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos : [{id: 1, text: "Hello World!", completed: false, color: "Red"}],
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
                completed: false,
                color: "Red",
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action)=>{
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        editTodo: (state, action)=>{
            const {id, newText} = action.payload
            state.todos = state.todos.map(todo => 
                todo.id === id? {...todo, text:newText, completed:false} : todo
            ) 
        },
        setCompleteTodo: (state, action) => {
            const { id } = action.payload;
            state.todos = state.todos.map((todo) =>
              todo.id === id ? { ...todo, completed: !todo.completed } : todo
            );
          },

        handleColorChange:(state, action) => {
            const {id, color} = action.payload
            state.todos = state.todos.map((todo) =>
                todo.id === id ? { ...todo, color: color } : todo
              );
              console.log(color)
        },
        
        setAllCompleted: (state) =>{
            state.todos = state.todos.map((todo)=>({
                ...todo,
                completed:true
            }))
        },
        setAllClear: (state) =>{
            state.todos = state.todos.map((todo)=>({
                ...todo,
                completed:false
            }))
        },

    }
})

export const {addTodo, removeTodo, editTodo, setCompleteTodo, handleColorChange, setAllCompleted, setAllClear } = todoSlice.actions
export default todoSlice.reducer


