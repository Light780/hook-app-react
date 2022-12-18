import { renderHook, act } from '@testing-library/react'
import { useForm } from '../../src/hooks';
/* eslint-disable no-undef */
describe('Pruebas en el useForm', () => {

    const initialForm = {
        name: 'Bruno Ramos',
        email: 'bruno@gmail.com'
    }

    test('debe regresar los valores por defecto', () => {
        const { result } = renderHook(() => useForm(initialForm))

        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function)
        });
    });

    test('debe de cambiar el nombre del formulario', () => {
        const { result } = renderHook(() => useForm(initialForm))
        const { onInputChange } = result.current;

        act(() => {
            onInputChange({
                target: {
                    name: 'name',
                    value: 'Rodrigo Ramos'
                }
            })
        });

        expect(result.current.name).toBe('Rodrigo Ramos');
        expect(result.current.formState.name).toBe('Rodrigo Ramos');
    });

    test('debe de cambiar el nombre del formulario', () => {
        const { result } = renderHook(() => useForm(initialForm))
        const { onInputChange, onResetForm } = result.current;

        act(() => {

            onInputChange({
                target: {
                    name: 'name',
                    value: 'Rodrigo Ramos'
                }
            });

            onResetForm();
        });

        expect(result.current.name).toBe(initialForm.name);
        expect(result.current.formState.name).toBe(initialForm.name);
    });
});