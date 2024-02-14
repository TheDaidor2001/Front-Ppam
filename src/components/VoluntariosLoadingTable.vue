<script setup lang="ts">

</script>

<template>
    <table class="min-w-full mt-10">
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
            <tr v-for="(item, i) in 10" :key="i">
                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    <div scope="col" class="bg-gray-400 w-full h-5 m-auto  rounded-md animate-pulse" />
                </th>
                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    <div scope="col" class="bg-gray-400 w-full h-5 m-auto rounded-md animate-pulse" />
                </th>
                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    <div scope="col" class="bg-gray-400 w-full h-5 m-auto rounded-md animate-pulse" />
                </th>
                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    <div scope="col" class="bg-gray-400 w-full h-5 m-auto rounded-md animate-pulse" />
                </th>
                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    <div scope="col" class="bg-gray-400 w-full h-5 m-auto rounded-md animate-pulse" />
                </th>
                <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    <div scope="col" class="bg-gray-400 w-full h-5 m-auto rounded-md animate-pulse" />
                </th>
            </tr>

        </tbody>
    </table>
</template>
