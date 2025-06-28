<script setup lang="ts">
import type { FormError, FormErrorEvent, FormSubmitEvent } from '@nuxt/ui'

const state = reactive({
  email: undefined,
  password: undefined
})

const validate = (state: any): FormError[] => {
  const errors = []
  if (!state.email) errors.push({ name: 'email', message: 'Required' })
  if (!state.password) errors.push({ name: 'password', message: 'Required' })
  if (state.password && state.password.length < 6) {
    errors.push({ name: 'password', message: 'Must be at least 6 characters' })
  }
  if (state.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email)) {
    errors.push({ name: 'email', message: 'Invalid email address' })
  }
  if (state.email && state.email.length > 100) {
    errors.push({ name: 'email', message: 'Email must be less than 100 characters' })
  }
  if (state.password && state.password.length > 50) {
    errors.push({ name: 'password', message: 'Password must be less than 50 characters' })
  }
  if (state.password && !/[A-Z]/.test(state.password)) {
    errors.push({ name: 'password', message: 'Password must contain at least one uppercase letter' })
  }
  if (state.password && !/[a-z]/.test(state.password)) {
    errors.push({ name: 'password', message: 'Password must contain at least one lowercase letter' })
  }
  if (state.password && !/[0-9]/.test(state.password)) {
    errors.push({ name: 'password', message: 'Password must contain at least one number' })
  }
  if (state.password && !/[!@#$%^&*(),.?":{}|<>]/.test(state.password)) {
    errors.push({ name: 'password', message: 'Password must contain at least one special character' })
  } 

  return errors
}

const client = useSupabaseClient()

const toast = useToast()
async function onSubmit(event: FormSubmitEvent<typeof state>) {

  try {
    const { data, error } = await client.auth.signUp({
    email: event.data.email!,
    password: event.data.password!,
  options: {
    data: {
      first_name: 'cd',
      age: 27,
      phone: null,
      is_admin: false,
      is_editor: false
    },
  },
  })
    if (error) {
      toast.add({ title: 'Error', description: error.message, color: 'error' })
      return
    }

  } catch (errors) {
    toast.add({ title: 'Error', description: 'Please fix the errors in the form.', color: 'error' })
    return
  }

  toast.add({ title: 'Success', description: 'The form has been submitted.', color: 'success' })
  console.log(event.data)
}

async function onError(event: FormErrorEvent) {
  if (event?.errors?.[0]?.id) {
    const element = document.getElementById(event.errors[0].id)
    element?.focus()
    element?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
}
</script>

<template>
  <UForm :validate="validate" :state="state" class="space-y-4" @submit="onSubmit" @error="onError">
    <UFormField label="Email" name="email">
      <UInput v-model="state.email" />
    </UFormField>

    <UFormField label="Password" name="password">
      <UInput v-model="state.password" type="password" />
    </UFormField>

    <UButton type="submit">
      Submit
    </UButton>
  </UForm>
</template>

