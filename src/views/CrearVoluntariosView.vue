<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter()
</script>

<template>
    <main class="max-w-7xl mx-auto mt-20 ">
        <header>
            <button class="bg-cyan-500 px-3 py-2 rounded-xl text-white font-semibold hover:bg-cyan-600 transition-colors"
                @click="router.back()">Atrás</button>
        </header>
        <section class="max-w-5xl mx-auto mt-16 ">
            <FormKit id="create-form" type="form" :action="false" :incomplete-message="false">
                <FormKit type="text" label="Nombre" name="name" placeholder="Nombre completo" validation="required|length:3"
                    :validation-messages="{
                        required: 'El nombre es obligatorio',
                        length: 'El nombre es muy corto'
                    }" />
            </FormKit>
        </section>
    </main>
</template>

