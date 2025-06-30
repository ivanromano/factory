import useStore from "~/store/store"

export default async function getUsers():Promise<SupabaseUser[]> {
  const store = useStore()
  if (store.users.length > 0) {
    return store.users
  }

  try {
    const { users } = await $fetch<{ users: SupabaseUserResponse }>('/api/users')
    store.users = users.users
    return store.users
  } catch (err) {
    console.error('Error fetching users from server:', err)
    return []
  }
}

