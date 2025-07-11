export default async function useUpdateUser(id: string, newUserData:User) {
  if (!id) throw new Error('ID is required')

  const res = await $fetch<{user: SupabaseUser}>(`/api/users/${id}`, {
    method: 'PATCH',
    body: {
      // email: newUserData.email,
      user_metadata: {
        first_name: newUserData.first_name,
        identifier: newUserData.identifier,
        is_admin: newUserData.is_admin,
        is_editor: newUserData.is_editor
      }
    }
  })
  

}

