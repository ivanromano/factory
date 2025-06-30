export default function getUser(): User | null {
  const user = useSupabaseUser().value
  if (!user) {
    return null
  }
  return {
    id: user.id,
    email: user.email!,
    first_name: user.user_metadata.first_name || '',
    identifier: user.user_metadata.identifier || '',
    is_admin: user.app_metadata?.role === 'admin',
    is_editor: user.app_metadata?.role === 'editor',
    created_at: user.created_at,
    updated_at: user.updated_at || ''
  }
}

