<script setup lang="ts">
import CardHome from '@/components/CardHome.vue';
import CirclePlus from '@/components/icons/Circle-plus.vue';
import ListUsers from '@/components/icons/List-users.vue';
import Addprogram from '@/components/icons/Add-Program.vue';


</script>

<template>
  <main class="grid grid-cols-3 items-center h-auto mt-48 max-w-7xl mx-auto gap-10">
    <RouterLink :to="{ name: 'voluntarios' }">
      <CardHome text="Ver Voluntarios" info="Aquí podrás ver y listar a todos los voluntarios del PPAM">
        <ListUsers :class="' size-20 text-center mx-auto'" />
      </CardHome>
    </RouterLink>
    <CardHome text="Crear Voluntarios" info="Aquí podrás crear nuevos voluntarios del PPAM" classes="border-2">
      <CirclePlus :class="' size-20 text-center mx-auto'" />
    </CardHome>
    <CardHome text="Crear Programa" info="Crear nuevos programas para el PPAM">
      <Addprogram :class="' size-20 text-center mx-auto'" />
    </CardHome>
  </main>
</template>
