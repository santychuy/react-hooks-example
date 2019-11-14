import { useState } from 'react';

export const useForm = (initValues) => {
    const [values, setValues] = useState(initValues);

    //Regresa el Array, Primero el valor, luego el cambio del estado
    return [values, e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }]
};