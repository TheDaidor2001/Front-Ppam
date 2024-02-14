<script setup lang="ts">
import { useVoluntariosStore } from '@/stores/Voluntarios';
import { storeToRefs } from 'pinia';
import ArrowLeft from './icons/Arrow-left.vue';
import ArrowRigth from './icons/Arrow-rigth.vue';
import { computed } from 'vue';

const voluntariosStore = useVoluntariosStore()
const { actualPage, totalPages, getPages } = storeToRefs(voluntariosStore)

const changePage = (item: any) => {
    actualPage.value = item
}


const disableLastBtn = computed(() => {
    return actualPage.value <= 1
})

const disableNextBtn = computed(() => {
    return actualPage.value >= totalPages.value
})

const lastPage = () => {
    actualPage.value -= 1
}

const nextPage = () => {
    actualPage.value += 1
}






</script>


<template>
    <div class="w-full flex justify-end gap-2 pr-5">
        <button
            class="flex items-center gap-2 border border-blue-500 rounded-md px-2 text-blue-500 hover:bg-blue-500 hover:text-white transition-colors disabled:border-blue-200 disabled:text-blue-200"
            @click="lastPage" :disabled="disableLastBtn">
            <ArrowLeft :class="'size-4'" />
            <span>Anterior</span>
        </button>
        <button
            class="border border-blue-500 px-2 text-blue-500 rounded-md text-lg hover:bg-blue-500 hover:text-white transition-colors"
            :class="actualPage === item && 'bg-blue-500 text-white'" v-for="(item, i) in getPages" :key="i"
            @click="changePage(item)" :disabled="item === '...'">{{ item }}</button>
        <button
            class="flex items-center gap-2 border border-blue-500 rounded-md px-2 text-blue-500 hover:bg-blue-500 hover:text-white transition-colors disabled:border-blue-200 disabled:text-blue-200"
            @click="nextPage" :disabled="disableNextBtn">
            <span>Siguiente</span>
            <ArrowRigth :class="'size-4'" />
        </button>
    </div>
</template>


