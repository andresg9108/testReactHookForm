import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'; 

const schema = yup.object().shape({ 
    username: yup.string().required('El nombre de usuario es requerido'), 
    email: yup.string()
        .email('Correo electrónico no válido')
        .required('El correo electrónico es requerido'), 
    password: yup.string()
        .min(6, 'La contraseña debe tener al menos 6 caracteres')
        .required('La contraseña es requerida'), 
});


function ExampleYup(){
    const { 
        register, 
        handleSubmit, 
        formState: { 
            errors 
        } 
    } = useForm({ 
        resolver: yupResolver(schema), 
    }); 

    const onSubmit = (data) => { 
        console.log(data); 
    };
    
    return(
        <>
            <Link to="/">Atrás</Link><br />

            <h1>Yup</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="username">Nombre de usuario:</label><br />
                <input id="username" {...register('username')} /><br />
                {errors.username && <span>{errors.username.message}</span>}
                <br /><br />

                <label htmlFor="email">Correo electrónico:</label><br />
                <input id="email" {...register('email')} /><br />
                {errors.email && <span>{errors.email.message}</span>}
                <br /><br />

                <label htmlFor="password">Contraseña:</label><br />
                <input id="password" type="password" {...register('password')} /><br />
                {errors.password && <span>{errors.password.message}</span>}
                <br /><br />

                <button type="submit">
                    Enviar
                </button>
            </form>
        </>
    );
}

export default ExampleYup;