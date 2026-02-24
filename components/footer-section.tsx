import { Plane } from "lucide-react"

export function FooterSection() {
  return (
    <footer className="bg-[#1a0a05] px-6 py-12 text-center">
      <div className="mx-auto max-w-4xl">
        <div className="flex items-center justify-center gap-2">
          <Plane className="h-4 w-4 text-[#f0a050]" />
          <span className="text-xs font-bold tracking-wider text-white/60 uppercase">
            Japan Tour
          </span>
        </div>
        <p className="mt-4 text-xs leading-relaxed text-white/30">
          {'УБ → Нарита → Токио → Одайба → Уэно → Фүжи → Шибуя → Ибараки → УБ'}
        </p>
        <div className="mt-6 h-px bg-white/5" />
        <p className="mt-6 text-xs text-white/20">
          {'© 2025 Japan Tour Mongolia. Бүх эрх хуулиар хамгаалагдсан.'}
        </p>
      </div>
    </footer>
  )
}
