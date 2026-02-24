import { Bus, UserCheck, Coffee, Ticket, ShieldCheck, Check } from "lucide-react"

const includedItems = [
  {
    icon: Bus,
    title: "Унаа",
    description: "Бүх аяллын тээвэрлэлт, автобус, галт тэрэг",
    color: "#3498db",
  },
  {
    icon: UserCheck,
    title: "Хөтөч",
    description: "Монгол хэлтэй мэргэжлийн хөтөч",
    color: "#2ecc71",
  },
  {
    icon: Coffee,
    title: "Өглөөний цай",
    description: "Өдөр бүрийн өглөөний цай буудалд",
    color: "#f0a050",
  },
  {
    icon: Ticket,
    title: "Үзвэрийн тасалбар",
    description: "Бүх газрын орох тасалбарууд",
    color: "#e91e8a",
  },
  {
    icon: ShieldCheck,
    title: "Аяллын даатгал",
    description: "Аяллын бүрэн хугацааны даатгал",
    color: "#8e44ad",
  },
]

export function IncludedSection() {
  return (
    <section id="included" className="bg-[#faf7f2] px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <p className="mb-2 text-xs font-medium tracking-widest text-[#f0a050] uppercase">
            Багтсан зүйлс
          </p>
          <h2 className="font-serif text-3xl font-bold text-[#1a0a05] md:text-4xl text-balance">
            Аялалд юу юу багтсан бэ?
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {includedItems.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="group flex flex-col items-center rounded-2xl border border-[#1a0a05]/5 bg-white p-6 text-center transition-all hover:shadow-lg hover:shadow-[#f0a050]/10"
              >
                <div
                  className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${item.color}15` }}
                >
                  <Icon className="h-6 w-6" style={{ color: item.color }} />
                </div>
                <h3 className="mb-1 text-sm font-bold text-[#1a0a05]">{item.title}</h3>
                <p className="text-xs leading-relaxed text-[#1a0a05]/50">{item.description}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {["Зочид буудал (7 шөнө)", "Агаарын замын суудал захиалга", "24/7 тусламж"].map(
            (item) => (
              <div key={item} className="flex items-center gap-2 rounded-full bg-[#1a0a05]/5 px-4 py-2">
                <Check className="h-3.5 w-3.5 text-[#2ecc71]" />
                <span className="text-xs font-medium text-[#1a0a05]/70">{item}</span>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  )
}
