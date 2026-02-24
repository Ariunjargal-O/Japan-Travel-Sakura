import { Plane, Check, ArrowRight } from "lucide-react"

export function PricingSection() {
  return (
    <section id="pricing" className="relative overflow-hidden px-6 py-20">
      <div className="absolute inset-0">
        <img
          src="/images/hakone-onsen.jpg"
          alt="Хаконе халуун рашаан"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#1a0a05]/85 backdrop-blur-sm" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <p className="mb-2 text-xs font-medium tracking-widest text-[#f0a050] uppercase">
            Аяллын үнэ
          </p>
          <h2 className="font-serif text-3xl font-bold text-white md:text-4xl text-balance">
            Аяллын багц
          </h2>
        </div>

        <div className="mx-auto max-w-lg overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#f0a050] to-[#e88a30] p-8 text-center">
            <h3 className="mb-1 text-lg font-bold text-[#1a0a05]">7 Өдрийн Багц</h3>
            <p className="text-xs text-[#1a0a05]/70">Бүрэн хөтөлбөр + чөлөөт өдөр</p>
            <div className="mt-4 flex items-baseline justify-center gap-1">
              <span className="font-serif text-5xl font-bold text-[#1a0a05]">......₮</span>
            </div>
            <div className="mt-2 flex items-center justify-center gap-2">
              <Plane className="h-4 w-4 text-[#1a0a05]/60" />
              <span className="text-sm font-medium text-[#1a0a05]/70">
                + Нислэгийн тийз
              </span>
            </div>
          </div>

          {/* Features */}
          <div className="p-8">
            <div className="space-y-3">
              {[
                "Бүх газрын тээвэрлэлт",
                "Монгол хөтөч",
                "Өглөөний цай (7 өдөр)",
                "Үзвэрийн тасалбарууд",
                "Аяллын даатгал",
                "Зочид буудал (7 шөнө)",
                "Нисэх буудал руу тээвэрлэлт",
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#2ecc71]/20">
                    <Check className="h-3 w-3 text-[#2ecc71]" />
                  </div>
                  <span className="text-sm text-white/80">{feature}</span>
                </div>
              ))}
            </div>

            <a
              href="#register"
              className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-[#f0a050] py-3.5 text-sm font-bold text-[#1a0a05] uppercase tracking-wider transition-all hover:bg-[#f5b570] hover:shadow-lg hover:shadow-[#f0a050]/20"
            >
              Бүртгүүлэх
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
