import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";


const init = () => JSON.parse(localStorage.getItem('todos')) || [];

export const useTodo = (initialState = []) => {
    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleNewTodo = newTodo => {
        const existeTodo = todos.some(
            todo => todo.description === newTodo.description
        );

        if (existeTodo) return;

        const id = todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;

        dispatch({
            type: 'Add Todo',
            payload: { ...newTodo, id },
        });
    };

    const handleDeleteTodo = id => {
        dispatch({
            type: 'Remove Todo',
            payload: id,
        });
    };

    const handleToggleTodo = id => {
        dispatch({
            type: 'Toggle Todo',
            payload: id,
        });
    };

    return {
        todos,
        todosCount: todos.length,
        pendingTodosCount: todos.filter(todo => !todo.done).length,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo
    }
}
