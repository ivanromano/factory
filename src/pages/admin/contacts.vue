<template>
  <AdminList  @delete="deleteContact" :obj="contacts" />
{{ contacts }}
</template>

<script lang="ts" setup>
import { useStore } from '../../store/store';

const store = useStore();

const contacts = ref( await store.getContacts() )
// console.log(contacts.value);

onMounted(async () => {
  
  // contacts.value = ;
});
// const newCategory = ref<Category>({
//   name: '',
//   slug: '',
//   views: 0,
//   color: 0,
// });

// async function createnewCategory() {
//   const formdata = new FormData();
//   formdata.append('name', newCategory.value.name || 'undefined');
//   formdata.append('slug', newCategory.value.slug || 'undefined');
//   formdata.append('views', newCategory.value.views.toString() || 'undefined');
//   formdata.append('color', newCategory.value.color.toString() || 'undefined');

//   await store.createCategory(formdata);
// }



function deleteContact(slug:string) {
  store.AdmindeletContact(slug)
}
</script>
