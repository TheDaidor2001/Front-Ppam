<script setup lang="ts">

defineProps<{
    title: string
    value1: string
    value2: string
    value3: string
    value4: string
}>()


</script>


<template>
    <div class="flex flex-col">
        <select name="" id="" class="border-2 py-2 px-1 rounded-t-lg">
            <option value="">--Selecciona un turno--</option>
            <option :value="value1">{{ value1 }}</option>
            <option :value="value2">{{ value2 }}</option>
            <option :value="value3">{{ value3 }}</option>
            <option :value="value4">{{ value4 }}</option>
        </select>
        <span class="bg-gray-300 font-bold text-lg px-2 py-1">{{ title }}</span>
        <div class="h-44 border border-gray-300 shadow-xl w-full rounded-b-lg">

        </div>
    </div>
</template>

