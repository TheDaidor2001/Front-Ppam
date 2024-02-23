import { Congregacion, type Voluntario } from "@/interfaces/voluntario.interface"
import { useVoluntariosStore } from "@/stores/Voluntarios"
import { reactive, ref } from "vue"


export const useVoluntarios = () => {

    const {createVoluntario} = useVoluntariosStore()

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