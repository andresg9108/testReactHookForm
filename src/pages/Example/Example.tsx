import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import {
  name as nameValidations,
  email as emailValidations,
  pass as passValidations,
  confirmpass as confirmpassValidations,
  birthdate as birthdateValidations,
  country as countryValidations,
  department as departmentValidations,
  // file as fileValidations,
  terms as termsValidations
} from './validations.ts'

function Example(){
    const {
        register,
        // unregister,
        handleSubmit,
        reset,
        formState: {
            errors
        },
        watch,
        setValue
        } = useForm({
        defaultValues: {
            "country": "co"
        }
        });

        const onSubmit = handleSubmit((dataInput) => {
        console.log(dataInput);
        alert(JSON.stringify(dataInput));

        reset();
        });

    return(
        <>
            <Link to="/">Atrás</Link><br />

            <h1>Example</h1>

            <form 
                onSubmit={onSubmit}
            >
                <label htmlFor="name">Nombre:</label><br />
                <input type="text" id="name" placeholder="Nombre" 
                { ...register('name', nameValidations) }
                />
                { errors.name && <><br /><span>{ errors.name.message }</span></> }
                <br /><br />

                <label htmlFor="email">E-mail:</label><br />
                <input type="email" id="email" placeholder="E-mail" 
                { ...register('email', emailValidations) }
                />
                { errors.email && <><br /><span>{ errors.email.message }</span></> }
                <br /><br />

                <label htmlFor="pass">Contraseña:</label><br />
                <input type="password" id="pass" placeholder="Contraseña" 
                { ...register('pass', passValidations) }
                />
                { errors.pass && <><br /><span>{ errors.pass.message }</span></> }
                <br /><br />

                <label htmlFor="confirmpass">Confirmar contraseña:</label><br />
                <input type="password" id="confirmpass" placeholder="Confirmar contraseña" 
                { ...register('confirmpass', confirmpassValidations(watch('pass'))) }
                />
                { errors.confirmpass && <><br /><span>{ errors.confirmpass.message }</span></> }
                <br /><br />

                <label htmlFor="birthdate">Fecha de nacimiento:</label><br />
                <input type="date" id="birthdate" 
                { ...register('birthdate', birthdateValidations) }
                />
                { errors.birthdate && <><br /><span>{ errors.birthdate.message }</span></> }
                <br /><br />

                <label htmlFor="country">Pais:</label><br />
                <select id="country" 
                { ...register('country', countryValidations) }
                >
                <option value="">País</option>
                <option value="co">Colombia</option>
                <option value="ar">Argentina</option>
                <option value="mx">Mexico</option>
                </select>
                { errors.country && <><br /><span>{ errors.country.message }</span></> }
                <br /><br />

                {
                watch('country') === 'co' && (
                    <>
                    <label htmlFor="department">Departmento:</label><br />
                    <select id="department" 
                        { ...register('department', departmentValidations) }
                    >
                        <option value="">Departmento</option>
                        <option value="ant">Antioquia</option>
                        <option value="boy">Boyacá</option>
                        <option value="cal">Caldas</option>
                    </select>
                    { errors.department && <><br /><span>{ errors.department.message }</span></> }
                    <br /><br />
                    </>
                )
                }

                {/*
                <label htmlFor="file">Archivo:</label><br />
                <input type="file" id="file" 
                { ...register('file', fileValidations) }
                />
                { errors.file && <><br /><span>{ errors.file.message }</span></> }
                <br /><br />
                */}

                <label htmlFor="file">Archivo:</label><br />
                <input type="file" id="file" 
                onChange={(e) => {
                    setValue('myFile',e.target.files[0].name);
                }}
                />
                { errors.file && <><br /><span>{ errors.file.message }</span></> }
                <br /><br />

                <input type="checkbox" id="terms" 
                { ...register('terms', termsValidations) }
                />
                <label htmlFor="terms">Terminos y condiciones</label>
                { errors.terms && <><br /><span>{ errors.terms.message }</span></> }
                <br /><br />

                <button type="submit">
                Enviar
                </button>
            </form>
            
            <pre>Nombre: {JSON.stringify(watch('name'), null, 2)}</pre>
            <pre>{JSON.stringify(watch(), null, 2)}</pre>
            </>
    );
}

export default Example;