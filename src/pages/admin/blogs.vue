<template>
  <AdminList @edit="setBlog" @delete="deleteBlog" :obj="blogs" />

  <div class="mt-8 p-4 border rounded shadow">
    <h2 class="text-xl font-bold mb-4">Crear nuevo blog</h2>
    
    <form @submit.prevent="createNewBlog">
      <div class="mb-4">
        <label class="block mb-2">Título</label>
        <input v-model="newBlog.title" type="text" class="w-full border py-2 px-3 rounded" placeholder="Título del blog" />
      </div>
      
      <div class="mb-4">
        <label class="block mb-2">Slug</label>
        <input v-model="newBlog.slug" type="text" class="w-full border py-2 px-3 rounded" placeholder="Slug del blog" />
      </div>

      <div class="mb-4">
        <label class="block mb-2">Descripción</label>
        <textarea v-model="newBlog.description" class="w-full border py-2 px-3 rounded" placeholder="Descripción del blog"></textarea>
      </div>

      <div class="mb-4">
        <label class="block mb-2">Tiempo de lectura</label>
        <input v-model="newBlog.time_read" type="number" class="w-full border py-2 px-3 rounded" placeholder="Minutos de lectura" />
      </div>

      <div class="mb-4">
        <label class="block mb-2">Categoría</label>
        <select v-model="newBlog.category" class="w-full border py-2 px-3 rounded">
          <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}</option>
        </select>
      </div>

      <div class="mb-4">
        <label class="block mb-2">Imagen (Thumbnail)</label>
        <input v-model="newBlog.thumbnail" type="text" class="w-full border py-2 px-3 rounded" placeholder="URL de la imagen" />
      </div>

      <div class="mb-4">
        <label class="block mb-2">Contenido</label>
        <textarea v-model="newBlog.content" class="w-full border py-2 px-3 rounded" placeholder="Contenido del blog"></textarea>
      </div>

      <div class="mb-4">
        <label class="block mb-2">status</label>
        <input v-model="newBlog.status" type="text" class="w-full border py-2 px-3 rounded" placeholder="status del blog" />
      </div>

      <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
        Crear Blog
      </button>
    </form>
  </div>

  <!-- {{ blogs }} -->
</template>

<script setup >
import { ref } from 'vue';
import { useStore } from '../../store/store';

const store = useStore();
const blogs = ref(await store.getBlogs());
const categories = ref();

const newBlog = ref({
  title: '',
  slug: '',
  description: '',
  time_read: 0,
  category: null,
  thumbnail: '',
  content: '',
  status: ''
});

onMounted(async () => {
  categories.value = await store.getCategories();
});

async function createNewBlog() {
  const formdata = new FormData();
  
  formdata.append('title', newBlog.value.title);
  formdata.append('slug', newBlog.value.slug);
  formdata.append('description', newBlog.value.description);
  formdata.append('time_read', newBlog.value.time_read.toString());
  formdata.append('category', newBlog.value.category);
  formdata.append('thumbnail', newBlog.value.thumbnail);
  formdata.append('content', newBlog.value.content);
  formdata.append('status', newBlog.value.status);

  await store.createBlogPost(formdata);
  // blogs.value.push()
}


function setBlog(item) {
  const formdata = new FormData();
  // console.log(item);
  formdata.append('id', item.id);
  formdata.append('title', item.title);
  formdata.append('new_slug', item.slug);
  formdata.append('description', item.description);
  formdata.append('time_read', item.time_read?.toString());
  formdata.append('category', item.category?.id?.toString());
  formdata.append('thumbnail', item.thumbnail);
  formdata.append('content', item.content || '');
  formdata.append('status', item.status);

  // formdata.append('thumbnail', 2);

  store.AdminEditPost(formdata);
}

function deleteBlog(slug) {
  store.AdmindeleteBlogPost(slug)
}
</script>
