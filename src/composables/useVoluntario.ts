
import { reactive, } from "vue"


export const useVoluntarios = () => {


    const voluntario = reactive({
        nombre: '',
        apellidos: '',
        contacto: '',
        disponibilidad: [],
        congregacion: '',
        isPrecursor: false
    })
    



    return {
        voluntario,
    }
}