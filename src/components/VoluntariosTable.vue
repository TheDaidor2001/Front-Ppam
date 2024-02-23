<script setup lang="ts">
import { ref } from 'vue';
import type { Voluntario } from '@/interfaces/voluntario.interface';
import DeleteIcon from '@/components/icons/Delete-icon.vue';
import EditIcon from '@/components/icons/Edit-icon.vue';
import { useModalStore } from '../stores/Modal';


const modal = useModalStore()

defineProps<{
    voluntarios: Voluntario[]
}>()




</script>

<template>
    <tr class="odd:bg-gray-100 border-b" v-for="item in voluntarios" :key="item.id">

        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            {{ item.nombre }} {{ item.apellidos }}
        </td>
        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            {{ item.contacto }}
        </td>
        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            {{ item.congregacion }}
        </td>
        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            <select class=" border border-blue-500 rounded-full text-blue-500 px-2 w-full">
                <option value="" disabled>---------</option>
                <option value="" v-for="dia in item.disponibilidad" :key="dia">{{ dia }}
                </option>
            </select>
        </td>
        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap ">
            <span v-if="item.isPrecursor"
                class="bg-green-200 text-green-500 rounded-full px-3 py-1 font-bold mr-2">Precursor</span>
            <span class="bg-blue-200 text-blue-500 rounded-full px-3 py-1 font-bold">Disponible</span>
        </td>
        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap flex items-center gap-2">
            <button>
                <DeleteIcon :class="'size-10 p-2 bg-red-100 rounded-full text-red-500 hover:scale-105 transition-transform'"
                    @click="modal.openModal(item)" :id="item.id" :voluntario="item" />
            </button>
            <RouterLink :to="{ name: 'editar-voluntarios', params: { id: item.id } }">
                <EditIcon
                    :class="'size-10 p-2 bg-blue-100 rounded-full text-blue-500 hover:scale-105 transition-transform'" />
            </RouterLink>
        </td>
    </tr>
</template>
