<script setup lang="ts">

defineProps<{
    text: string
    info: string
}>()


</script>

<template>
    <article
        class="rounded-xl px-5 py-10 min-h-64 border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white cursor-pointer hover:scale-105 transition duration-100">
        <slot />
        <h3 class="text-center text-2xl mt-2 font-bold">{{ text }}</h3>
        <p class=" mt-2 text-center text-pretty font-semibold">{{ info }}</p>
    </article>
</template>


