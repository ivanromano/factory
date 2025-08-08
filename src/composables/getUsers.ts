import useStore from "~/store/store"

export default async function getUsers():Promise<SupabaseUser[]> {
  const store = useStore()
  if (store.users.length > 0) {
    return store.users
  }

  try {
    console.log("4")
    const { users } = await $fetch<{ users: SupabaseUserResponse }>('api/users')
    store.users = users.users
    return store.users
  } catch (err) {
    console.error('Error fetching users from server:', err)
    return []
  }
}

export async function getUsersMetaData(): Promise<User[]>  {
  const users:SupabaseUser[] = await getUsers()
  return users.map( (user) => {
    return {
      first_name: user.user_metadata.first_name,
      identifier: user.user_metadata.identifier,
      email: user.email,
      created_at: getDate(user.created_at) ,
      updated_at: getDate(user.updated_at),
      is_admin: user.user_metadata.is_admin,
      is_editor: user.user_metadata.is_editor,
      id: user.id,
    }
  })

}

export async function getSimpleUsersData(): Promise<SimpleUserData[]> {
  const users = await getUsersMetaData()
  
  return users.map( (user:User) => ({
    name: user.first_name,
    identifier: user.identifier,
    email: user.email,
    role: user.is_admin ? 'Admin' : user.is_editor ? 'Editor' : 'User',
    created_at: user.created_at,
    updated_at: user.updated_at,
    id: user.id
  }));


}