"use client"

import { useEffect, useState } from "react"
import { Plane } from "lucide-react"

export function TopNav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 shadow-sm shadow-[#e8a0b8]/10 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center gap-2">
        <Plane className="h-5 w-5 text-[#d4708f]" />
        <span
          className={`text-sm font-bold tracking-wider uppercase ${
            scrolled ? "text-[#3d2b2b]" : "text-white"
          }`}
        >
          Japan Tour
        </span>
      </div>

      <div className="hidden items-center gap-6 md:flex">
        {[
          { id: "day-1", label: "Хөтөлбөр" },
          { id: "included", label: "Багтсан зүйлс" },
          { id: "pricing", label: "Үнэ" },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() =>
              document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" })
            }
            className={`text-xs font-medium tracking-wider uppercase transition-colors ${
              scrolled
                ? "text-[#3d2b2b]/60 hover:text-[#d4708f]"
                : "text-white/70 hover:text-white"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      <a
        href="#register"
        className="rounded-full bg-[#d4708f] px-5 py-2 text-xs font-bold text-white uppercase tracking-wider transition-all hover:bg-[#c4607f] hover:shadow-lg hover:shadow-[#d4708f]/25"
      >
        Бүртгүүлэх
      </a>
    </nav>
  )
}
