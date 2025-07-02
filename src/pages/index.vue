<template>
  <div class="relative w-full h-[18rem] overflow-hidden">
    <img 
      class="w-full h-full object-cover"
      src="https://www.vca.gov.mt/wp-content/uploads/2023/03/pexels-luna-lovegood-4087401.jpg"
      alt="Imagen hero"
    />

    <div class="absolute inset-0 bg-gradient-to-br from-purple-800/60 via-pink-600/50 to-transparent animate-fadeIn"></div>
    <div class="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
      <h1 class="text-5xl lg:text-6xl font-extrabold text-white drop-shadow-lg mb-4 animate-slideInUp">
        Bienvenidos a <span class="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">Volt</span>
      </h1>
      <p class="text-lg lg:text-xl text-white/90 mb-6 animate-fadeIn delay-200">
        Una agencia de sofware como ningun otra
      </p>
      <button
        class="px-6 py-3 bg-pink-500 hover:bg-pink-600 transition rounded-full text-white font-semibold shadow-xl animate-pulse"
      >
        Descubre más
      </button>
    </div>
  </div>
  <main class="min-h-[calc(100vh-14rem)] flex flex-col md:flex-row items-center justify-center px-4 pt-5 gap-y-10 md:gap-x-10 text-center">
    <IndexLoginRegisterButtons v-if="!user" />

    <div v-else class="flex flex-col items-center gap-4">
      <h2 class="text-2xl font-bold text-gray-800 ">
        Bienvenido, {{ user.first_name || 'Usuario' }}
      </h2>
      <p class="text-gray-600 dark:text-gray-600">
        Es un gusto volver a verte
      </p>
    </div>

  </main>
  
  <Services :services="services" class="mb-[10rem]" />

  <HeroGsap />


  <CardsCards :services-with-stats="servicesWithStats" />

  <Footer/>


</template>

<script lang="ts" setup>
import CardsCards from "../components/cards/cards.vue";
const user = ref<User | null>(getUser())


const servicesWithStats = ref<Service[]>([
  {
    title: 'Correccion de Errores',
    description: 'Para que tu sitio funcione sin problemas',
    icon: 'i-heroicons-megaphone',
    color: 'primary',
    price: '$20',
    stats: {
      stat1: { label: 'Incremento de visitas', value: 75 },
      stat2: { label: 'Visitas de confianza', value: 40 }
    }
  },
  {
    title: 'Componentes UI',
    description: 'Para una mejor experiencia de usuario',
    icon: 'i-heroicons-code-bracket',
    color: 'secondary',
    price: '$45',
    stats: {
      stat1: { label: 'Experiencia de usuario', value: 220 },
      stat2: { label: 'Tiempo en página', value: 65 }
    }
  },
  {
    title: 'Paginas SSR',
    description: 'Para mejorar el SEO y la velocidad de carga',
    icon: 'i-heroicons-magnifying-glass',
    color: 'error',
    price: '$699',
    stats: {
      stat1: { label: 'Tráfico orgánico', value: 180 },
      stat2: { label: 'Velocidad de carga', value: 120 }
    }
  },
  {
    title: 'Gestion de Usuarios',
    description: 'Que implementaremos para tu sitio',
    icon: 'i-heroicons-chat-bubble-left-right',
    color: 'info',
    price: '$32',
    stats: {
      stat1: { label: 'Crecimiento de seguidores', value: 250 },
      stat2: { label: 'Interacciones', value: 300 }
    }
  },
  {
    title: 'E-commerce',
    description: 'Agregaremos un backend para tu tienda',
    icon: 'i-heroicons-shopping-cart',
    color: 'warning',
    price: '$400',
    stats: {
      stat1: { label: 'Aumento en ventas', value: 150 },
      stat2: { label: 'Tiempo en página', value: 90 }
    }
  },
  {
    title: 'Panel de Administración',
    description: 'Para gestionar tu sitio sin nuestra ayuda',
    icon: 'i-heroicons-envelope',
    color: 'neutral',
    price: '$299',
    stats: {
      stat1: { label: 'Productividad', value: 45 },
      stat2: { label: 'Seguridad', value: 210 }
    }
  }
])


























const services:Object = [
    {
    title: 'Correccion de Errores',
    description: 'Para que tu sitio funcione sin problemas',
    backTitle: 'Publicidad Digital',
    backDescription: 'Para que tu sitio funcione sin problemas'
  },
  {
    title: 'Componentes UI',
    description: 'Para una mejor experiencia de usuario',
    backTitle: 'Aplicaciones Web',
    backDescription: 'Para una mejor experiencia de usuario',
  },
  {
    title: 'Paginas SSR',
    description: 'Para mejorar el SEO y la velocidad de carga',
    backTitle: 'SEO Técnico',
    backDescription: 'Para mejorar el SEO y la velocidad de carga',
  },
  {
    title: 'Gestion de Usuarios',
    description: 'Que implementaremos para tu sitio',
    backTitle: 'Contenido Viral',
    backDescription: 'Que implementaremos para tu sitio',
  },
  {
    title: 'E-commerce',
    description: 'Agregaremos un backend para tu tienda',
    backTitle: 'Conversión',
    backDescription: 'Agregaremos un backend para tu tienda',
  },
  {
    title: 'Panel de Administración',
    description: 'Para gestionar tu sitio sin nuestra ayuda',
    backTitle: 'Automatización',
    backDescription: 'Para gestionar tu sitio sin nuestra ayuda',
  }
]
</script>