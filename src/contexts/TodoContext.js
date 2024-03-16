import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos : [
        {
            id : "1",
            todo : " abc ",
            completed : false
        }
    ],
    addTodo : (todo) => {},
    updatedTodo : (todo, id) => {},
    deleteTodo : (id) => {},
    toggleCompletion : (id) => {}
})

export const useTodo = () => {
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider;