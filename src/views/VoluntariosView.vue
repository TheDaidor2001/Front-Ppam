<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useVoluntariosStore } from '../stores/Voluntarios';
import { storeToRefs } from 'pinia';
import VoluntariosTable from '@/components/VoluntariosTable.vue';
import ModalDelete from '@/components/ModalDelete.vue';
import VoluntariosLoadingTable from '@/components/VoluntariosLoadingTable.vue';
import PaginationTable from '@/components/Pagination-Table.vue';

const voluntariosStore = useVoluntariosStore()

const { voluntarios, loading } = storeToRefs(voluntariosStore)

voluntariosStore.getVoluntarios()



const router = useRouter()
</script>

<template>
    <main class="max-w-7xl mx-auto mt-20 ">
        <div class="flex justify-between">
            <button class="bg-cyan-500 px-3 py-2 rounded-xl text-white font-semibold hover:bg-cyan-600 transition-colors"
                @click="router.back()">Atrás</button>
            <button class="bg-cyan-500 px-3 py-2 rounded-xl text-white font-semibold hover:bg-cyan-600 transition-colors"
                @click="router.push({ name: 'crear-voluntarios' })">
                Crear voluntario
            </button>
        </div>
        <div class="flex flex-col">
            <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5 mb-20">
                <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div class="overflow-hidden">
                        <VoluntariosLoadingTable v-if="loading" />
                        <table class="min-w-full my-10" v-else>
                            <thead class="bg-white border-b">
                                <tr>
                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Nombre completo
                                    </th>
                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Contacto
                                    </th>
                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Congregación
                                    </th>
                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Disponibilidad
                                    </th>
                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Información
                                    </th>
                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Acciones
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <VoluntariosTable :voluntarios="voluntarios" v-if="voluntarios.length > 0" />
                                <div v-else>
                                    <p class="text-center text-2xl font-bold mt-5">No hay voluntarios. Empieza añadiendo al
                                        primero.</p>
                                </div>
                            </tbody>
                        </table>
                        <PaginationTable />

                        <ModalDelete />
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

