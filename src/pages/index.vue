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
        Una agencia creativa y de marketing de marca de servicios integrales como ninguna otra.
      </p>
      <button
        class="px-6 py-3 bg-pink-500 hover:bg-pink-600 transition rounded-full text-white font-semibold shadow-xl animate-pulse"
      >
        Descubre más
      </button>
    </div>
  </div>

  <div class="min-h-[calc(100vh-14rem)] flex items-center justify-center px-4 pt-5">
    <div class="text-center space-y-6 max-w-xl animate-fade-in-up">
      <h1 class="text-4xl font-bold text-primary-700 dark:text-primary-300 tracking-tight">
        ¿Aún no nos conocemos?
      </h1>
      <p class="text-lg text-gray-600 dark:text-gray-300">
        Iniciá sesión para descubrir todo lo que tenemos preparado para vos.
      </p>
      <UButton
        color="primary"
        variant="solid"
        size="lg"
        class="transition-all duration-300 hover:scale-105"
        icon="i-heroicons-arrow-right-on-rectangle"
      >
        Iniciar Sesión
      </UButton>
    </div>
  </div>
      <Services :services="services" />

  <CardsCards :services-with-stats="servicesWithStats" />
</template>

<script lang="ts" setup>
import CardsCards from "../components/cards/cards.vue";

const items = [
  'https://picsum.photos/640/640?random=1',
  'https://picsum.photos/640/640?random=2',
  'https://picsum.photos/640/640?random=3',
  'https://picsum.photos/640/640?random=4',
  'https://picsum.photos/640/640?random=5',
  'https://picsum.photos/640/640?random=6'
]

const servicesWithStats = ref<Service[]>([
  {
    title: 'Marketing Digital',
    description: 'Estrategias personalizadas para aumentar tu presencia online',
    icon: 'i-heroicons-megaphone',
    color: 'primary',
    price: '$499',
    stats: {
      stat1: { label: 'Incremento conversiones', value: 75 },
      stat2: { label: 'Reducción coste/lead', value: 40 }
    }
  },
  {
    title: 'Desarrollo Web',
    description: 'Sitios web a medida con tecnología moderna',
    icon: 'i-heroicons-code-bracket',
    color: 'secondary',
    price: '$899',
    stats: {
      stat1: { label: 'Velocidad de carga', value: 220 },
      stat2: { label: 'Tiempo en página', value: 65 }
    }
  },
  {
    title: 'SEO Avanzado',
    description: 'Posicionamiento en buscadores orgánico',
    icon: 'i-heroicons-magnifying-glass',
    color: 'error',
    price: '$699',
    stats: {
      stat1: { label: 'Tráfico orgánico', value: 180 },
      stat2: { label: 'Keywords top 3', value: 120 }
    }
  },
  {
    title: 'Redes Sociales',
    description: 'Gestión profesional de perfiles sociales',
    icon: 'i-heroicons-chat-bubble-left-right',
    color: 'info',
    price: '$399',
    stats: {
      stat1: { label: 'Crecimiento seguidores', value: 250 },
      stat2: { label: 'Incremento engagement', value: 175 }
    }
  },
  {
    title: 'E-commerce',
    description: 'Tiendas online que maximizan ventas',
    icon: 'i-heroicons-shopping-cart',
    color: 'warning',
    price: '$1299',
    stats: {
      stat1: { label: 'Aumento ventas', value: 150 },
      stat2: { label: 'Tasa conversión', value: 90 }
    }
  },
  {
    title: 'Email Marketing',
    description: 'Campañas automatizadas de alto impacto',
    icon: 'i-heroicons-envelope',
    color: 'neutral',
    price: '$299',
    stats: {
      stat1: { label: 'Tasa de apertura', value: 45 },
      stat2: { label: 'CTR mejorado', value: 210 }
    }
  }
])


























const services:Object = [
    {
    title: 'Marketing Digital',
    description: 'Estrategias personalizadas para aumentar tu presencia online',
    backTitle: 'Publicidad Digital',
    backDescription: 'Campañas en Google Ads, Meta Ads y LinkedIn para llegar a tu audiencia ideal'
  },
  {
    title: 'Desarrollo Web',
    description: 'Sitios web a medida con tecnología moderna',
    backTitle: 'Aplicaciones Web',
    backDescription: 'Desarrollo de aplicaciones progresivas (PWA) y soluciones empresariales'
  },
  {
    title: 'SEO',
    description: 'Optimización para motores de búsqueda',
    backTitle: 'SEO Técnico',
    backDescription: 'Auditorías, estructura de sitio y optimización para crawlers'
  },
  {
    title: 'Redes Sociales',
    description: 'Gestión profesional de tus perfiles sociales',
    backTitle: 'Contenido Viral',
    backDescription: 'Creación de contenido estratégico para engagement y crecimiento'
  },
  {
    title: 'E-commerce',
    description: 'Tiendas online que convierten visitantes en clientes',
    backTitle: 'Conversión',
    backDescription: 'Optimización de funnel de ventas y experiencia de usuario'
  },
  {
    title: 'Email Marketing',
    description: 'Campañas efectivas de correo electrónico',
    backTitle: 'Automatización',
    backDescription: 'Flujos automatizados para nutrir leads y fidelizar clientes'
  }
]
</script>