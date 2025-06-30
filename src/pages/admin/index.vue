<template>
  <main class="container mx-auto p-4 text-black">
    <h1 class="text-2xl font-bold mb-4">Bienvenido al sitio de administracion</h1>
    <p>En esta pagina encontrarás todo lo que necesitas para administrar los usuarios, categorias, blogs, etc.</p>
    <!-- https://bafybeibrrnexxpysrwz5m6r5u2lc44ghbuqsbnylw7x2bvvz2znr6no7j4.ipfs.w3s.link/ipfs/bafybeibrrnexxpysrwz5m6r5u2lc44ghbuqsbnylw7x2bvvz2znr6no7j4/abilekya_by_republicavictinera_dgk43py-pre.jpg
       https://bafybeieuiya6beekjjfmzgrkdd3jwhlzjntot4ahclefvbgwyrqupsu42m.ipfs.w3s.link/ipfs/bafybeieuiya6beekjjfmzgrkdd3jwhlzjntot4ahclefvbgwyrqupsu42m/as_mistico_by_republicavictinera_df91v08-pre.jpg'),
     -->
    <div>
      {{user}}
    </div>
  </main>
</template>

<script setup lang="ts">
import { useStore } from "../../store/store";

// const props = defineProps({
//   user: {
//       type: String,
//       default: 'Vic',
//     },

const store = useStore()
const route = useRoute()

const user:Ref<User> = ref<User>(store.userLoaded);
</script>