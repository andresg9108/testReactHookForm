export const name = {
    required: {
        value: true,
        message: 'Nombre es requerido'
    },
    minLength: {
        value: 2,
        message: 'Nombre debe tener al menos 2 caracteres'
    },
    maxLength: {
        value: 10,
        message: 'Nombre debe tener como maximo 10 caracteres'
    }
};

export const email = {
    required: {
        value: true,
        message: 'Email es requerido'
    },
    pattern: {
        value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
        message: 'Email no es valido'
    }
};

export const pass = {
    required: {
        value: true,
        message: 'Contraseña es requerida'
    },
    minLength: {
        value: 5,
        message: 'Contraseña debe tener al menos 5 caracteres'
    },
};

export const confirmpass = (pass) => ({
    required: {
        value: true,
        message: 'Repetir la contraseña'
    },
    validate: (value) => {
        if(value !== pass)
            return "Las contraseñas no coninciden";

        return true;
    }
});

export const birthdate = {
    required: {
        value: true,
        message: 'Fecha de nacimiento es requerida'
    },
    validate: (value) => {
        const birthDate = new Date(value);
        const currentDate = new Date();
        const age = currentDate.getFullYear() - birthDate.getFullYear();

        if(age < 18)
            return "Debe ser mayor de edad";

        return true;
    }
};

export const country = {
    required: {
        value: true,
        message: 'País es requerido'
    }
};

export const department = {
    required: {
        value: true,
        message: 'Departmento es requerido'
    }
};

export const file = {
    required: {
        value: true,
        message: 'Archivo es requerido'
    }
};

export const terms = {
    required: {
        value: true,
        message: 'Acepta terminos y condiciones'
    }
};