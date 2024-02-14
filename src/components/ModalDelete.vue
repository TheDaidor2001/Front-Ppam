<script setup lang="ts">

import type { Voluntario } from '@/interfaces/voluntario.interface';
import InfoIconVue from './icons/InfoIcon.vue';
import CrossIcon from './icons/CrossIcon.vue'
import { useModalStore } from '@/stores/Modal';
import { storeToRefs } from 'pinia';

const modalStore = useModalStore()

const { modal, voluntario } = storeToRefs(modalStore)





</script>


<template>
    <div class="relative w-full h-full" :class="modal ? 'block' : 'hidden'">
        <div class="w-full h-full bg-gray-200 fixed top-0 left-0 opacity-70 z-10 flex items-center justify-center">
        </div>
        <div class="fixed top-72 left-[34%] bg-white z-40 w-1/3 h-auto rounded-xl px-10 py-5"
            :class="modal ? 'animate-fade-in' : 'animate-fade-out'">
            <CrossIcon :class="'size-7 ml-auto cursor-pointer'" @click="modalStore.closeModal" />
            <InfoIconVue :class="'size-20 mx-auto text-red-500'" />
            <p class="text-center text-gray-500 text-xl font-medium text-balance mt-2">¿Seguro que deseas eliminar a
                <span class="font-bold underline">{{ voluntario?.nombre }} {{ voluntario?.apellidos }}</span>?
            </p>
            <div class="flex items-center justify-center gap-5 py-10">
                <button class="bg-red-500 px-3 py-3 text-white font-medium rounded-md hover:bg-red-600 transition-colors"
                    @click="modalStore.deleteItem">
                    Si, estoy seguro
                </button>
                <button class="bg-gray-400 px-3 py-3 text-white font-medium rounded-md hover:bg-gray-500 transition-colors"
                    @click="modalStore.closeModal">
                    Cancelar
                </button>
            </div>
        </div>
    </div>
</template>

@/stores/Modal