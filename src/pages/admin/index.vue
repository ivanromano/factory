<script setup lang="ts">
import { ref, onMounted } from 'vue'

const users = ref<SupabaseUser[]>(await getUsers())
const userCount = ref<number>(0)
const recentUsers = ref<SupabaseUser[]>([])

onMounted(async () => {
  userCount.value = 128
  recentUsers.value = users.value
    .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
    .slice(0, 5)
})
</script>

<template>
  {{ users }}
    <div class="container mx-auto p-6 space-y-8">
      <header class="flex flex-col gap-2">
        <h1 class="text-3xl font-bold">Panel de Administración</h1>
        <p class="text-gray-700 max-w-2xl">
          Bienvenido al centro de control de tu plataforma. Desde aquí podrás obtener una vista general del sistema,
          visualizar métricas clave, verificar el estado de la actividad reciente y prepararte para acceder a otras secciones administrativas.
          Este panel fue diseñado para ofrecerte un resumen claro y rápido del rendimiento de tu aplicación, el comportamiento de los usuarios
          y cualquier aspecto que requiera tu atención inmediata.
        </p>
      </header>

      <!-- Métricas rápidas -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="bg-white p-6 rounded-lg shadow">
          <p class="text-sm text-gray-500">Total de usuarios</p>
          <p class="mt-2 text-2xl font-semibold">{{ users.length }}</p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow">
          <p class="text-sm text-gray-500">Sesiones activas</p>
          <p class="mt-2 text-2xl font-semibold">42</p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow">
          <p class="text-sm text-gray-500">Registros hoy</p>
          <p class="mt-2 text-2xl font-semibold">5</p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow">
          <p class="text-sm text-gray-500">Errores recientes</p>
          <p class="mt-2 text-2xl font-semibold text-red-600">1</p>
        </div>
      </div>

      <section class="bg-white p-6 rounded-lg shadow">
        <h2 class="text-xl font-semibold mb-4">Actividad reciente</h2>
        <p class="text-gray-700 mb-4">Usuarios que se han registrado recientemente:</p>
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead>
              <tr class="bg-gray-50">
                <th class="px-4 py-2 text-left text-sm font-medium text-gray-700">Nombre</th>
                <th class="px-4 py-2 text-left text-sm font-medium text-gray-700">Email</th>
                <th class="px-4 py-2 text-left text-sm font-medium text-gray-700">Fecha</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100">
              <tr v-for="user in recentUsers" :key="user.id">
                <td class="px-4 py-2 text-sm text-gray-800">{{ user.user_metadata.first_name }}</td>
                <td class="px-4 py-2 text-sm text-gray-800">{{ user.email }}</td>
                <td class="px-4 py-2 text-sm text-gray-800">{{ getDate(user.created_at) }} </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
</template>
