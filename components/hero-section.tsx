"use client"

import { ChevronDown, MapPin } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/hero-japan.jpg"
          alt="Токио хотын панорама"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a0a05]/80 via-[#1a0a05]/40 to-[#1a0a05]/90" />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <div className="mb-6 flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 backdrop-blur-sm">
          <MapPin className="h-4 w-4 text-[#f0a050]" />
          <span className="text-xs font-medium tracking-widest text-white/90 uppercase">
            Монгол аялагчдад зориулсан
          </span>
        </div>

        <h1 className="mb-2 font-serif text-5xl font-bold leading-tight text-white md:text-7xl lg:text-8xl text-balance">
          7 Өдрийн
        </h1>
        <h2 className="mb-6 font-serif text-5xl font-bold text-[#f0a050] md:text-7xl lg:text-8xl">
          Япон Аялал
          
        </h2>

        <div className="mb-8 flex items-center gap-3">
          <span className="h-px w-12 bg-[#f0a050]/50" />
          <span className="text-2xl text-[#f0a050]">2026</span>
          <span className="h-px w-12 bg-[#f0a050]/50" />
        </div>

        <p className="max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
          Токио, Одайба, Уэно, Фүжи, Шибуя, Ибараки — бүх шилдэг газруудыг нэг маршрутаар
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#register"
            className="rounded-full bg-[#f0a050] px-8 py-3.5 text-sm font-bold text-[#1a0a05] uppercase tracking-wider transition-all hover:bg-[#f5b570] hover:shadow-lg hover:shadow-[#f0a050]/20"
          >
            Бүртгүүлэх
          </a>
          <button
            onClick={() => {
              document.getElementById("day-1")?.scrollIntoView({ behavior: "smooth" })
            }}
            className="rounded-full border border-white/20 px-8 py-3.5 text-sm font-medium text-white/90 uppercase tracking-wider backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10"
          >
            Хөтөлбөр үзэх
          </button>
        </div>

        <button
          onClick={() => {
            document.getElementById("day-1")?.scrollIntoView({ behavior: "smooth" })
          }}
          className="mt-16 flex flex-col items-center gap-2 text-white/50 transition-colors hover:text-white/80"
          aria-label="Доош гүйлгэх"
        >
          <ChevronDown className="h-5 w-5 animate-bounce" />
        </button>
      </div>
    </section>
  )
}
