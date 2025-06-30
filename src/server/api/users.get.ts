// server/api/users.get.ts
import { defineEventHandler } from 'h3'
import { createClient } from '@supabase/supabase-js'

export default defineEventHandler(async (event) => {
  const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )

  const { data, error } = await supabase.auth.admin.listUsers()

  if (error) {
    event.res.statusCode = 500
    return { error: error.message }
  }

  return { users: data }
})
