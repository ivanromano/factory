declare global {

type SingUpError = {
  name: string;
  message: string;
  }

type Credentials = Partial<{
  first_name: string; 
  identifier: string; 
  age: number;
  phone: string; 
  email: string; 
  password: string; 
  repassword: string;
  is_admin: boolean;
  is_editor: boolean;
  }>

type ServiceStat = {
  label: string;       // Texto descriptivo de la métrica (ej: "Incremento conversiones")
  value: number;       // Valor porcentual (puede ser mayor a 100 si supera la meta)
  }

// Tipo para el bloque de estadísticas
type ServiceStats = {
  stat1: ServiceStat;  // Primera métrica a mostrar
  stat2: ServiceStat;  // Segunda métrica a mostrar
  stat3?: ServiceStat; // Métrica opcional
  }

// Tipo principal para cada servicio
type Service = {
  title: string;       // Nombre del servicio (ej: "Marketing Digital")
  description: string; // Descripción breve (1 línea recomendada)
  icon: string;        // Icono (formato: `i-heroicons-*` o cualquier clase de icono válida)
  color: Color;
  price: string;       // Precio formateado (ej: "$499" o "Desde $299")
  stats: ServiceStats; // Objeto con las estadísticas
  popular?: boolean;   // Opcional: Destacar como plan popular
  originalPrice?: string; // Opcional: Precio tachado para mostrar descuentos
}

type Color = "primary" | "secondary" | "success" | "info" | "warning" | "error" | "neutral" | undefined

type User = {
  id: string
  email: string
  first_name: string
  identifier: string
  is_admin: boolean
  is_editor: boolean
  created_at: string
  updated_at: string
  }

type SimpleUserData = {
  name: string
  email: string
  identifier: string
  role: string
  created_at: string
  updated_at: string
  id: string
  }

type SupabaseUserResponse = {
  users: SupabaseUser[]
  aud: string
  nextPage: number | null
  lastPage: number
  total: number
}

type SupabaseUser = {
  id: string
  aud: string
  role: string
  email: string
  email_confirmed_at: string
  phone: string
  confirmation_sent_at: string
  confirmed_at: string
  app_metadata: {
    provider: string
    providers: string[]
  }
  user_metadata: {
    email: string
    email_verified: boolean
    first_name: string
    identifier: string
    is_admin: boolean
    is_editor: boolean
    phone_verified: boolean
    sub: string
  }
  identities: null
  created_at: string
  updated_at: string
  is_anonymous: boolean
}

}