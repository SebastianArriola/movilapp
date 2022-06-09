import * as yup from 'yup'

export function initialValues () {

    return{

        email: "",
        password: "",
        repeatPassword: ""

    }

}

export function validationSchema () {

    return yup.object({

        email: yup.string().email("El email es incorrecto").required("Es necesario ingresar un email"),
        password: yup.string().required("La contraseña es obligatoria"),
        repeatPassword: yup.string().required("La contraseña es obligatoria").oneOf([yup.ref("password")], "Las contraseñas deben ser identicas")

    })

}
