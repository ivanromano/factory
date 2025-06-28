declare global {
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
  type Stats = {
    hp: number,
    energy: number,
    genetic_attack: number,
    apocalyptic_attack: number,
    genetic_defense: number,
    apocalyptic_defense: number,
    critic: number,
    mobility: number,
    vision: number
  };

  type Color = "primary" | "secondary" | "success" | "info" | "warning" | "error" | "neutral" | undefined


}