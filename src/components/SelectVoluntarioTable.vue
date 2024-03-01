<script setup lang="ts">
import http from '@/plugins/http';
import { ref, watch } from 'vue'
import type { Voluntario } from '../interfaces/voluntario.interface';
defineProps<{
    title: string
    value1: string
    value2: string
    value3: string
    value4: string
}>()

const dia = ref('')
const voluntarios = ref<Voluntario | []>()

const getUsersByDay = async (dia: string) => {

    if (dia === '') return voluntarios.value = []

    try {
        const { data } = await http.get(`voluntarios?turno=${dia}`)
        voluntarios.value = data
        console.log(voluntarios.value);


    } catch (error) {
        console.log(error);

    }


}

watch(dia, () => {
    getUsersByDay(dia.value)
})


</script>


<template>
    <div class="flex flex-col">
        <select v-model="dia" name="" id="" class="border-2 border-cyan-600 text-cyan-600 py-2 px-1 rounded-t-lg">
            <option value="">--Selecciona un turno--</option>
            <option :value="value1">{{ value1 }}</option>
            <option :value="value2">{{ value2 }}</option>
            <option :value="value3">{{ value3 }}</option>
            <option :value="value4">{{ value4 }}</option>
        </select>
        <span class="bg-cyan-600 text-white text-center font-bold text-lg px-2 py-1">{{ title }}</span>
        <div class="h-44 border border-cyan-600 shadow-xl w-full rounded-b-lg overflow-hidden overflow-y-scroll">
            <div v-for="voluntario in voluntarios" :key="voluntario.id" class="border-b border-1 border-gray-300 p-2">
                <h5 class="font-bold text-gray-700">{{ voluntario.nombre }} {{ voluntario.apellido }}</h5>
                <div class="flex gap-x-2 mt-1 items-center">
                    <p class="text-xs">Timbabé</p>
                    <span v-if="voluntario.isPrecursor"
                        class="bg-green-200 text-green-500 rounded-full block text-center px-2 py-1 text-xs font-bold">Precursor</span>
                </div>
            </div>
        </div>
    </div>
</template>

