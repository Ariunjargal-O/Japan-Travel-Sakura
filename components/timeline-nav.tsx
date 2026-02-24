"use client"

import { useEffect, useState } from "react"

const sections = [
  { id: "day-1", label: "Нарита" },
  { id: "day-2", label: "Одайба" },
  { id: "day-3", label: "Уэно" },
  { id: "day-4", label: "Фүжи" },
  { id: "day-5", label: "Шибуя" },
  { id: "day-6", label: "Чөлөөт" },
  { id: "day-7", label: "Ибараки" },
]

export function TimelineNav() {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3 }
    )

    sections.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <nav
      className="fixed right-4 top-1/2 z-50 hidden -translate-y-1/2 flex-col items-end gap-3 md:flex"
      aria-label="Өдрийн навигаци"
    >
      {sections.map((s) => (
        <button
          key={s.id}
          onClick={() => {
            document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth" })
          }}
          className="group flex items-center gap-2"
          aria-label={s.label}
        >
          <span
            className={`text-xs font-medium transition-all ${
              activeSection === s.id
                ? "text-[#f0a050] opacity-100 translate-x-0"
                : "text-foreground/40 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
            }`}
          >
            {s.label}
          </span>
          <span
            className={`block rounded-full transition-all ${
              activeSection === s.id
                ? "h-3 w-3 bg-[#f0a050] shadow-lg shadow-[#f0a050]/40"
                : "h-2 w-2 bg-foreground/20 group-hover:bg-[#f0a050]/50"
            }`}
          />
        </button>
      ))}
    </nav>
  )
}
