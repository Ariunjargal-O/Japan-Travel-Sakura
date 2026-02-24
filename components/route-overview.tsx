import { Plane, Ship, Train, Bus, Mountain, Landmark, ShoppingBag, Sparkles } from "lucide-react"

const stops = [
  { name: "Нарита", icon: Plane, color: "#e74c3c" },
  { name: "Токио", icon: Landmark, color: "#f0a050" },
  { name: "Одайба", icon: Ship, color: "#3498db" },
  { name: "Уэно", icon: ShoppingBag, color: "#2ecc71" },
  { name: "Фүжи", icon: Mountain, color: "#8e44ad" },
  { name: "Шибуя", icon: Sparkles, color: "#e91e8a" },
  { name: "Ибараки", icon: Train, color: "#f39c12" },
  { name: "УБ", icon: Bus, color: "#e74c3c" },
]

export function RouteOverview() {
  return (
    <section className="relative overflow-hidden bg-[#1a0a05] px-6 py-20">
      <div className="absolute inset-0 opacity-20">
        <img
          src="/images/japan-map-route.jpg"
          alt="Японы газрын зураг"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <p className="mb-2 text-xs font-medium tracking-widest text-[#f0a050] uppercase">
            Маршрут
          </p>
          <h2 className="font-serif text-3xl font-bold text-white md:text-4xl text-balance">
            Аяллын бүрэн зам
          </h2>
        </div>

        {/* Route Path */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-0">
          {stops.map((stop, index) => {
            const Icon = stop.icon
            return (
              <div key={stop.name} className="flex items-center">
                <div className="flex flex-col items-center gap-2">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-full md:h-14 md:w-14"
                    style={{ backgroundColor: `${stop.color}22`, border: `2px solid ${stop.color}` }}
                  >
                    <Icon className="h-5 w-5" style={{ color: stop.color }} />
                  </div>
                  <span className="text-xs font-medium text-white/80">{stop.name}</span>
                </div>
                {index < stops.length - 1 && (
                  <div className="mx-1 hidden h-0.5 w-6 bg-gradient-to-r from-white/30 to-white/10 md:mx-3 md:block md:w-10" />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
