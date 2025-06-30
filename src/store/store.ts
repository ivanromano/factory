import { defineStore } from 'pinia';
// import { fetch } from '@vueuse/core'

const useStore = defineStore('store', {
  state: () => ({
    users: [] as SupabaseUser[], // Array to store users fetched from Supabase
    user: null as SupabaseUser | null, // Current user from Supabase
  }),
  actions: {




  }
} );

export default useStore