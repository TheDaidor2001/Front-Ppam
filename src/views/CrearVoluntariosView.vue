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
            <FormKit id="create-form" type="form" submit-label="Crear voluntario" :action="`${false}`"
                :incomplete-message="false">
                <FormKit type="text" label="Nombre" name="name" placeholder="Ej: Daniel, Rubén..."
                    validation="required|length:3" :validation-messages="{
                        required: 'El nombre es obligatorio',
                        length: 'El nombre es muy corto'
                    }" />

                <FormKit type="text" label="Apellidos" name="apellidos" placeholder="Ej:Avomo, Nguema..."
                    validation="required|length:3" :validation-messages="{
                        required: 'Los apellidos son obligatorio',
                        length: 'El apellido es muy corto'
                    }" />

                <FormKit type="tel" label="Contacto" name="contacto" placeholder="xxxxxxxxx" :validation-messages="{
                    matches: 'El teléfono es incorrecto',
                    required: 'El teléfono es obligatorio'
                }" validation="matches:/^[0-9]{3}[0-9]{3}[0-9]{3}$/|required" />

                <FormKit type="checkbox" label="Seleccione disponibilidad" validation="required"
                    :validation-messages="{ required: 'Debes añadir mínimo 1 turno' }" :options="{
                        'martesT1': 'Martes(T1)',
                        'miercolesT1': 'Miercoles(T1)',
                        'juevesT1': 'Jueves(T1)',
                        'viernesT1': 'Viernes(T1)',
                        'sabadoT1': 'Sabado(T1)',
                        'DomingoT1': 'Doming1(T1)',
                        'martesT2': 'Martes(T2)',
                        'miercolesT2': 'Miercoles(T2)',
                        'juevesT2': 'Jueves(T2)',
                        'viernesT2': 'Viernes(T2)',
                        'sabadoT2': 'Sabado(T2)',
                        'DomingoT2': 'Doming1(T2)',
                        'martesT3': 'Martes(T3)',
                        'miercolesT3': 'Miercoles(T3)',
                        'juevesT3': 'Jueves(T3)',
                        'viernesT3': 'Viernes(T3)',
                        'sabadoT3': 'Sabado(T3)',
                        'DomingoT3': 'Doming1(T3)',
                        'martesT4': 'Martes(T4)',
                        'miercolesT4': 'Miercoles(T4)',
                        'juevesT4': 'Jueves(T4)',
                        'viernesT4': 'Viernes(T4)',
                        'sabadoT4': 'Sabado(T4)',
                        'DomingoT4': 'Doming1(T4)',

                    }" name="disponibilidad" />

                <FormKit type="select" label="Añade la congregación" name="congregacion" validation="required"
                    :validation-messages="{ required: 'La congregación es obligatoria' }" :options="[
                        'Timbabe',
                        'Sampaka',
                        'Paraiso',
                        'Lampert',
                        'Buena_Esperanza',
                        'Caracolas',
                        'Campo_Yaounde',
                        'Inglés',
                        'Francés',
                        'Fang',
                        'Ela_Nguema',
                    ]" />
            </FormKit>
        </section>
    </main>
</template>

