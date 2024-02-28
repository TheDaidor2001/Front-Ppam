<script setup lang="ts">
import { useRouter } from 'vue-router';



const router = useRouter()

</script>


<template>
    <main class="max-w-7xl mx-auto mt-10 ">
        <header>
            <button class="bg-cyan-500 px-3 py-2 rounded-xl text-white font-semibold hover:bg-cyan-600 transition-colors"
                @click="router.push({ name: 'home' })">Atrás</button>

            <h1 class="mt-10 text-center text-4xl font-bold text-cyan-800">Crear Programa del PPAM</h1>
        </header>

        <section class="mt-10 min-w-screen">

            <header class="grid grid-cols-6 my-10 gap-5">

                <div class="flex flex-col">
                    <select name="" id="" class="border-2 py-2 px-1 rounded-t-lg">
                        <option value="">--Selecciona un turno</option>
                        <option value="Martes T1">Martes T1</option>
                        <option value="Martes T1">Martes T2</option>
                        <option value="Martes T1">Martes T3</option>
                        <option value="Martes T1">Martes T4</option>
                    </select>
                    <span class="bg-gray-300 font-bold text-lg px-2 py-1">Martes</span>
                    <div class="h-44 border border-gray-300 shadow-xl w-full rounded-b-lg">

                    </div>
                </div>
                <div class="flex flex-col">
                    <select name="" id="" class="border-2 py-2 px-1 rounded-t-lg">
                        <option value="">--Selecciona un turno</option>
                        <option value="Martes T1">Martes T1</option>
                        <option value="Martes T1">Martes T2</option>
                        <option value="Martes T1">Martes T3</option>
                        <option value="Martes T1">Martes T4</option>
                    </select>
                    <span class="bg-gray-300 font-bold text-lg px-2 py-1">Martes</span>
                    <div class="h-44 border border-gray-300 shadow-xl w-full rounded-b-lg">

                    </div>
                </div>
                <div class="flex flex-col">
                    <select name="" id="" class="border-2 py-2 px-1 rounded-t-lg">
                        <option value="">--Selecciona un turno</option>
                        <option value="Martes T1">Martes T1</option>
                        <option value="Martes T1">Martes T2</option>
                        <option value="Martes T1">Martes T3</option>
                        <option value="Martes T1">Martes T4</option>
                    </select>
                    <span class="bg-gray-300 font-bold text-lg px-2 py-1">Martes</span>
                    <div class="h-44 border border-gray-300 shadow-xl w-full rounded-b-lg">

                    </div>
                </div>
                <div class="flex flex-col">
                    <select name="" id="" class="border-2 py-2 px-1 rounded-t-lg">
                        <option value="">--Selecciona un turno</option>
                        <option value="Martes T1">Martes T1</option>
                        <option value="Martes T1">Martes T2</option>
                        <option value="Martes T1">Martes T3</option>
                        <option value="Martes T1">Martes T4</option>
                    </select>
                    <span class="bg-gray-300 font-bold text-lg px-2 py-1">Martes</span>
                    <div class="h-44 border border-gray-300 shadow-xl w-full rounded-b-lg">

                    </div>
                </div>
                <div class="flex flex-col">
                    <select name="" id="" class="border-2 py-2 px-1 rounded-t-lg">
                        <option value="">--Selecciona un turno</option>
                        <option value="Martes T1">Martes T1</option>
                        <option value="Martes T1">Martes T2</option>
                        <option value="Martes T1">Martes T3</option>
                        <option value="Martes T1">Martes T4</option>
                    </select>
                    <span class="bg-gray-300 font-bold text-lg px-2 py-1">Martes</span>
                    <div class="h-44 border border-gray-300 shadow-xl w-full rounded-b-lg">

                    </div>
                </div>
                <div class="flex flex-col">
                    <select name="" id="" class="border-2 py-2 px-1 rounded-t-lg">
                        <option value="">--Selecciona un turno</option>
                        <option value="Martes T1">Martes T1</option>
                        <option value="Martes T1">Martes T2</option>
                        <option value="Martes T1">Martes T3</option>
                        <option value="Martes T1">Martes T4</option>
                    </select>
                    <span class="bg-gray-300 font-bold text-lg px-2 py-1">Martes</span>
                    <div class="h-44 border border-gray-300 shadow-xl w-full rounded-b-lg">

                    </div>
                </div>
            </header>

            <table class="w-full">
                <thead class="w-full mx-auto">
                    <tr class="bg-cyan-600 text-white">
                        <th class="px-6 py-3 text-start text-xs font-medium uppercase ">Turnos</th>
                        <th class="px-6 py-3 text-start text-xs font-medium uppercase">Martes</th>
                        <th class="px-6 py-3 text-start text-xs font-medium uppercase">Miercoles
                        </th>
                        <th class="px-6 py-3 text-start text-xs font-medium uppercase">Jueves</th>
                        <th class="px-6 py-3 text-start text-xs font-medium uppercase">Viernes</th>
                        <th class="px-6 py-3 text-start text-xs font-medium uppercase">Sábado</th>
                        <th class="px-6 py-3 text-start text-xs font-medium uppercase">Domingo</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="">
                        <div class="grid grid-cols-7 col-span-4">
                            <td class="row-span-4 bg-gray-200 text-center">9:30 - 11:30</td>
                            <td class="">
                                <div class="bg-red-100">
                                    <p class="font-bold text-md">Daniel Castillo</p>
                                    <span class="text-xs text-gray-600">555552558</span>
                                </div>
                                <div>
                                    <p class="font-bold text-md">Ruben Pardo</p>
                                    <span class="text-xs text-gray-600">555552558</span>
                                </div>
                                <div>
                                    <p class="font-bold text-md">Isaac Nguema</p>
                                    <span class="text-xs text-gray-600">555552558</span>
                                </div>
                                <div class="bg-gray-200">
                                    <p class="font-bold text-md">Daniel Castillo</p>
                                    <span class="text-xs text-gray-600">555552558</span>
                                </div>
                            </td>
                            <td class="">
                                <div class="bg-red-100">
                                    <p class="font-bold text-md">Daniel Castillo</p>
                                    <span class="text-xs text-gray-600">555552558</span>
                                </div>
                                <div>
                                    <p class="font-bold text-md">Ruben Pardo</p>
                                    <span class="text-xs text-gray-600">555552558</span>
                                </div>
                                <div>
                                    <p class="font-bold text-md">Isaac Nguema</p>
                                    <span class="text-xs text-gray-600">555552558</span>
                                </div>
                                <div class="bg-gray-200">
                                    <p class="font-bold text-md">Daniel Castillo</p>
                                    <span class="text-xs text-gray-600">555552558</span>
                                </div>
                            </td>
                            <td class="">
                                <div class="bg-red-100">
                                    <p class="font-bold text-md">Daniel Castillo</p>
                                    <span class="text-xs text-gray-600">555552558</span>
                                </div>
                                <div>
                                    <p class="font-bold text-md">Ruben Pardo</p>
                                    <span class="text-xs text-gray-600">555552558</span>
                                </div>
                                <div>
                                    <p class="font-bold text-md">Isaac Nguema</p>
                                    <span class="text-xs text-gray-600">555552558</span>
                                </div>
                                <div class="bg-gray-200">
                                    <p class="font-bold text-md">Daniel Castillo</p>
                                    <span class="text-xs text-gray-600">555552558</span>
                                </div>
                            </td>
                            <td class="">
                                <div class="bg-red-100">
                                    <p class="font-bold text-md">Daniel Castillo</p>
                                    <span class="text-xs text-gray-600">555552558</span>
                                </div>
                                <div>
                                    <p class="font-bold text-md">Ruben Pardo</p>
                                    <span class="text-xs text-gray-600">555552558</span>
                                </div>
                                <div>
                                    <p class="font-bold text-md">Isaac Nguema</p>
                                    <span class="text-xs text-gray-600">555552558</span>
                                </div>
                                <div class="bg-gray-200">
                                    <p class="font-bold text-md">Daniel Castillo</p>
                                    <span class="text-xs text-gray-600">555552558</span>
                                </div>
                            </td>
                            <td class="">
                                <div class="bg-red-100">
                                    <p class="font-bold text-md">Daniel Castillo</p>
                                    <span class="text-xs text-gray-600">555552558</span>
                                </div>
                                <div>
                                    <p class="font-bold text-md">Ruben Pardo</p>
                                    <span class="text-xs text-gray-600">555552558</span>
                                </div>
                                <div>
                                    <p class="font-bold text-md">Isaac Nguema</p>
                                    <span class="text-xs text-gray-600">555552558</span>
                                </div>
                                <div class="bg-gray-200">
                                    <p class="font-bold text-md">Daniel Castillo</p>
                                    <span class="text-xs text-gray-600">555552558</span>
                                </div>
                            </td>
                            <td class="">
                                <div class="bg-red-100">
                                    <p class="font-bold text-md">Daniel Castillo</p>
                                    <span class="text-xs text-gray-600">555552558</span>
                                </div>
                                <div>
                                    <p class="font-bold text-md">Ruben Pardo</p>
                                    <span class="text-xs text-gray-600">555552558</span>
                                </div>
                                <div>
                                    <p class="font-bold text-md">Isaac Nguema</p>
                                    <span class="text-xs text-gray-600">555552558</span>
                                </div>
                                <div class="bg-gray-200">
                                    <p class="font-bold text-md">Daniel Castillo</p>
                                    <span class="text-xs text-gray-600">555552558</span>
                                </div>
                            </td>
                        </div>
                    </tr>
                </tbody>
            </table>
        </section>
    </main>
</template>


