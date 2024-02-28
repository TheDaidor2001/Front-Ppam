
import type { Voluntario } from "@/interfaces/voluntario.interface";
import http from "@/plugins/http";
import { defineStore } from "pinia";
import { computed, ref, watch, inject } from "vue";


export const useVoluntariosStore = defineStore('voluntarios', () => {

    const voluntarios = ref<Voluntario[]>([])
    const loading = ref<Boolean>(false)
    const pages = ref<number>(1)
    const actualPage = ref<number>(1)
    const limit = ref<number>(10)
    const totalVoluntarios = ref<number>(0)
    const totalPages = ref<number>(0)

    const toast = inject('toast') as any


    async function getVoluntarios():Promise<void> {


        loading.value = true
        try {
           const {data} = await http.get(`voluntarios?skip=${limit.value}&page=${actualPage.value}`)
           totalVoluntarios.value = data.pagination.count
           pages.value = data.pagination.pages
           voluntarios.value = data.voluntarios
           totalPages.value = Math.ceil(totalVoluntarios.value / limit.value)
        } catch (error) {
            console.log(error);
        }finally {
            loading.value = false
        }

    }

    watch(actualPage, () => {
        getVoluntarios()
    })

    function filterVoluntarios(id: string) {
        voluntarios.value = voluntarios.value.filter(item => item.id !== id)
    }

    const getPages = computed(() => {
            //Si el numero total de paginas es 7 o menos mostrar todas las paginas sin puntos
        if(totalPages.value <= 7){
            return Array.from({length: totalPages.value}, (_, i) => i+1);
        }

        //Si la pagina actual esta entre las primeras tres paginas 
        //Mostrar las primeras 3 paginas, puntos suspensivos y las ultimas 2
        if(actualPage.value <= 3){
            return [1,2,3,'...',totalPages.value-1, totalPages.value]
        }

        //si la pagina actual esta entre las ultimas 3 paginas
        //mostrar las primeras 2 paginas, puntos suspensivos y las ultimas 3
        if(actualPage.value >= totalPages.value - 2){
            return [1,2,'...',totalPages.value-2,totalPages.value-1,totalPages.value]
        }

        //Si la pagina actual esta en otro lugar medio
        //mostrar la primersa pagina, puntos suspensivos, pagina actual
        return [
            1,
            '...',
            actualPage.value - 1,
            actualPage.value,
            actualPage.value + 1,
            '...',
            totalPages.value
        ]
    })


    async function createVoluntario (voluntario: Voluntario): Promise<void> {
        try {
            await http.post('voluntarios', voluntario ,{
                headers: {
                    "Content-Type" : "application/json"
                }
            })
            

            getVoluntarios()
        } catch (error) {
            toast.open({
                message: 'Error al crear al voluntario',
                type: 'error'
            })
        }
    }

    async function updateVoluntario(id:any, voluntario: Voluntario) {
        try {
            await http.patch(`voluntarios/${id}`, voluntario)
            getVoluntarios()
        } catch (error) {
            console.log(error);
            
        }
    }

    return {
        voluntarios,
        loading,
        actualPage,
        totalVoluntarios,
        totalPages,
        limit,
        getVoluntarios,
        filterVoluntarios,
        createVoluntario,
        updateVoluntario,

        //computed
        getPages
    }
})