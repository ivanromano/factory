<template>
    <CustomCursor />
      
    <!-- <Sidebar /> -->
    <div class="flex-1">
      <slot />
    </div>
</template>

<script lang="ts" setup>


useHead({
    titleTemplate: '%s - Volt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // { hid: 'description', name: 'description' }
    ],
    link: [{ rel: 'icon', type: 'image/png', href: '../assets/icon.png' },
      
    ],
    script: [
        {
            src: "https://cdn.jsdelivr.net/npm/alpinejs@2.8.2",
        }
    ],

})
</script>

