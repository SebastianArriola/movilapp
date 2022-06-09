import * as yup from 'yup'

export function initialValuesLogin() {

    return { email: "",
            password: ""
            }

}

export function validationSchemaLogin() {

    return yup.object({

        email: yup.string().email("El email no es correcto").required("Debe ingresar un email"),
        password: yup.string().required("La contraseña es obligatoria")

    })

}