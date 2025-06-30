<template>
  <AdminList @edit="setCategory" @delete="deleteCategory" :obj="categories" />
  {{ categories }}
  <div class="mt-8 p-4 border rounded shadow">
    <h2 class="text-xl font-bold mb-4">Crear nueva Category</h2>
    
    <form @submit.prevent="createnewCategory">
      <div class="mb-4">
        <label class="block mb-2">Título</label>
        <input v-model="newCategory.name" type="text" class="w-full border py-2 px-3 rounded" placeholder="Título del blog" />
      </div>
      
      <div class="mb-4">
        <label class="block mb-2">Slug</label>
        <input v-model="newCategory.slug" type="text" class="w-full border py-2 px-3 rounded" placeholder="Slug del blog" />
      </div>

      <div class="mb-4">
        <label class="block mb-2">color</label>
        <input v-model="newCategory.color" type="number" class="w-full border py-2 px-3 rounded" placeholder="Minutos de lectura" />
      </div>

      <div class="mb-4">
        <label class="block mb-2">views</label>
        <input v-model="newCategory.views" type="number" class="w-full border py-2 px-3 rounded" placeholder="Minutos de lectura" />
      </div>

      <!-- <div class="mb-4">
        <label class="block mb-2">Contenido</label>
        <textarea v-model="newCategory.content" class="w-full border py-2 px-3 rounded" placeholder="Contenido del blog"></textarea>
      </div> -->

      <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
        Crear Category
      </button>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from '../../store/store';

const store = useStore();
const categories = ref(await store.getCategories());

const newCategory = ref<Category>({
  name: '',
  slug: '',
  views: 0,
  color: 0,
});

onMounted(async () => {
  categories.value = await store.getCategories();
});

async function createnewCategory() {
  const formdata = new FormData();
  formdata.append('name', newCategory.value.name || 'undefined');
  formdata.append('slug', newCategory.value.slug || 'undefined');
  formdata.append('views', newCategory.value.views.toString() || 'undefined');
  formdata.append('color', newCategory.value.color.toString() || 'undefined');

  await store.createCategory(formdata);
}

function setCategory(item:Category) {
  const formdata = new FormData();
  formdata.append('name', item.name || 'undefined');
  formdata.append('slug', item.slug);
  formdata.append('new_slug', item.slug);
  formdata.append('views', item.views.toString());
  formdata.append('color', item.color.toString());

  store.AdminEditCategory(formdata);
}

function deleteCategory(slug:string) {
  store.AdmindeleteCategory(slug)
}
</script>
