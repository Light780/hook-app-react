import { todoReducer } from "../../src/08-useReducer/todoReducer";

/* eslint-disable no-undef */
describe('Pruebas en todoReducer', () => {
    const initialState = [{
        id: 1,
        description: 'Demo Todo',
        done: false
    }];

    test('debe de regresar el estado inicial', () => {

        const newState = todoReducer(initialState, {});
        expect(newState).toBe(initialState);
    });

    test('debe de agregar un Todo', () => {

        const action = {
            type: 'Add Todo',
            payload: {
                id: 2,
                description: 'Nuevo Todo',
                done: false
            }
        }
        const newState = todoReducer(initialState, action);

        expect(newState.length).toBe(2);
        expect(newState).toContain(action.payload);

    });

    test('debe de eliminar un Todo', () => {

        const action = {
            type: 'Remove Todo',
            payload: initialState[0].id
        }
        const newState = todoReducer(initialState, action);

        expect(newState.length).toBe(0);
        expect(newState).not.toContain(initialState);

    });

    test('debe realizar el Toggle de un Todo', () => {

        const action = {
            type: 'Toggle Todo',
            payload: initialState[0].id
        }
        const newState = todoReducer(initialState, action);

        expect(newState.find(todo => todo.id === action.payload).done).toBeTruthy();

        const newState2 = todoReducer(newState, action);

        expect(newState2.find(todo => todo.id === action.payload).done).toBeFalsy();
    });
});