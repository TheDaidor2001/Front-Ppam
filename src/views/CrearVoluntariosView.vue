<script setup lang="ts">

import { reactive } from 'vue'
import { useRouter } from 'vue-router';
import { useVoluntariosStore } from '../stores/Voluntarios';

const router = useRouter()
const voluntariosStore = useVoluntariosStore()

const voluntario = reactive({
    nombre: '',
    apellidos: '',
    contacto: '',
    disponibilidad: [],
    congregacion: '',
    isPrecursor: false
})

const congregaciones = [
    "Timbabe",
    "Sampaka",
    "Caracolas",
    "Frances",
    "Campo_Yaunde",
    " Buena_Esperanza",
    "Ingles",
    "Fang",
    "Lampert",
    "Ela_Nguema",
    "Paraiso",
]

const disponibilidad = [
    {
        dia: [
            {
                name: 'Martes(T1)',
                value: 'MartesT1'
            },
            {
                name: 'Martes(T2)',
                value: 'MartesT2'
            },
            {
                name: 'Martes(T3)',
                value: 'MartesT3'
            },
            {
                name: 'Martes(T4)',
                value: 'MartesT4'
            }
        ]
    },
    {
        dia: [
            {
                name: 'Miercoles(T1)',
                value: 'MiercolesT1'
            },
            {
                name: 'Miercoles(T2)',
                value: 'MiercolesT2'
            },
            {
                name: 'Miercoles(T3)',
                value: 'MiercolesT3'
            },
            {
                name: 'Miercoles(T4)',
                value: 'MiercolesT4'
            }
        ]
    },
    {
        dia: [
            {
                name: 'Jueves(T1)',
                value: 'JuevesT1'
            },
            {
                name: 'Jueves(T2)',
                value: 'JuevesT2'
            },
            {
                name: 'Jueves(T3)',
                value: 'JuevesT3'
            },
            {
                name: 'Jueves(T4)',
                value: 'JuevesT4'
            }
        ]
    },
    {
        dia: [
            {
                name: 'Viernes(T1)',
                value: 'ViernesT1'
            },
            {
                name: 'Viernes(T2)',
                value: 'ViernesT2'
            },
            {
                name: 'Viernes(T3)',
                value: 'ViernesT3'
            },
            {
                name: 'Viernes(T4)',
                value: 'ViernesT4'
            }
        ]
    },
    {
        dia: [
            {
                name: 'Sabado(T1)',
                value: 'SabadoT1'
            },
            {
                name: 'Sabado(T2)',
                value: 'SabadoT2'
            },
            {
                name: 'Sabado(T3)',
                value: 'SabadoT3'
            },
            {
                name: 'Sabado(T4)',
                value: 'SabadoT4'
            }
        ]
    },
    {
        dia: [
            {
                name: 'Domingo(T1)',
                value: 'DomingoT1'
            },
            {
                name: 'Domingo(T2)',
                value: 'DomingoT2'
            },
            {
                name: 'Domingo(T3)',
                value: 'DomingoT3'
            },
            {
                name: 'Domingo(T4)',
                value: 'DomingoT4'
            }
        ]
    }
]



const handleSubmit = async () => {

    console.log(voluntario);


    try {
        voluntariosStore.createVoluntario(voluntario)
    } catch (error) {
        console.log(error);

    }


}
</script>

<template>
    <main class="max-w-7xl mx-auto mt-20 ">
        <header>
            <button class="bg-cyan-500 px-3 py-2 rounded-xl text-white font-semibold hover:bg-cyan-600 transition-colors"
                @click="router.back()">Atrás</button>
        </header>
        <section class="max-w-5xl mx-auto mt-16 ">

            <form class="w-full mx-auto pb-10" @submit.prevent="handleSubmit">
                <div class="mb-5">
                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 ">Nombre</label>
                    <input type="text" id="name" v-model="voluntario.nombre"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                        placeholder="Ej: Daniel, Rubén" required />
                </div>
                <div class="mb-5">
                    <label for="apellidos" class="block mb-2 text-sm font-medium text-gray-900 ">Apellidos</label>
                    <input type="text" id="apellidos" placeholder="Ej: Ngomo, Ng" v-model="voluntario.apellidos"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        required />
                </div>
                <div class="mb-5">
                    <label for="telefono" class="block mb-2 text-sm font-medium text-gray-900 ">Teléfono</label>
                    <input type="text" id="telefono" placeholder="Ej: 222548745, 555896325..." v-model="voluntario.contacto"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        required />
                </div>
                <p class="block mb-2 text-sm font-medium text-gray-900 ">Disponibilidad</p>
                <div class="w-full border border-gray-300 rounded-lg mb-4 bg-gray-50">
                    <div class="ps-4">
                        <div class="grid grid-cols-6">
                            <div v-for="(dia, i) in disponibilidad" :key="i">
                                <div class="flex items-center" v-for="(info, i) in dia.dia" :key="i">
                                    <input id="bordered-checkbox-1" type="checkbox" :value="info.value"
                                        name="bordered-checkbox" v-model="voluntario.disponibilidad"
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 ">
                                    <label for="bordered-checkbox-1"
                                        class="w-full py-4 ms-2 text-sm font-medium text-gray-500 ">{{ info.name }}</label>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <p class="block mb-2 text-sm font-medium text-gray-900 ">Congregación</p>
                <div>
                    <select id="countries"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        v-model="voluntario.congregacion">
                        <option selected disabled>Selecciona la congregación</option>
                        <option v-for="congregacion in congregaciones" :key="congregacion" :value="congregacion">{{
                            congregacion }}</option>
                    </select>
                </div>

                <p class="block mb-2 text-sm font-medium text-gray-900 mt-5">Nombramiento</p>
                <label class="inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" class="sr-only peer" v-model="voluntario.isPrecursor">
                    <div
                        class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-cyan-600">
                    </div>
                    <span class="ms-3 text-sm font-medium text-gray-900">¿Es precursor?</span>
                </label>
                <button type="submit"
                    class="text-white mt-10 w-full bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Agregar
                    Voluntarios</button>
            </form>
        </section>
    </main>
</template>

