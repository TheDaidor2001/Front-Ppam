import type { Voluntario } from "@/interfaces/voluntario.interface";
import http from "@/plugins/http";
import { defineStore } from "pinia";
import { ref, inject } from "vue";
import { useVoluntariosStore } from "./Voluntarios";



const voluntariosStore = useVoluntariosStore()


export const useModalStore = defineStore('modal', () => {

    const modal = ref<Boolean>(false)
    const voluntario = ref<Voluntario>()
    const toast = inject('toast') as any

    const openModal = (item: Voluntario) => {
        modal.value = !modal.value
        voluntario.value = item        
    }

    const closeModal = () => {
        modal.value = !modal.value
    }

    async function deleteItem() {
        try {
            const {data} = await http.delete(`voluntarios/${voluntario.value!.id}`)
            voluntariosStore.filterVoluntarios(voluntario.value!.id)
            modal.value = false
            toast.open({
                message: data.msg,
                type: "success",
            })
        } catch(error) {
            console.log(error);
            modal.value = false
            toast.open({
                message: error.response.data.msg,
                type: "error",
            })
        }
    }



    return {
        modal,
        voluntario,
        openModal,
        closeModal,
        deleteItem
    }
} )