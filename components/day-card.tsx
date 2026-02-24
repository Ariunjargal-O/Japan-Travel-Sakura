"use client"

import { MapPin, Star } from "lucide-react"

interface Spot {
  name: string
  description: string
}

interface DayCardProps {
  id: string
  dayLabel: string
  title: string
  subtitle: string
  imageSrc: string
  imageAlt: string
  spots: Spot[]
  highlight: string
  layout: "left" | "right"
  accentColor: string
}

export function DayCard({
  id,
  dayLabel,
  title,
  subtitle,
  imageSrc,
  imageAlt,
  spots,
  highlight,
  layout,
  accentColor,
}: DayCardProps) {
  return (
    <section id={id} className="relative w-full overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 py-6 md:px-6 md:py-16">
        <div
          className={`flex flex-col gap-6 md:gap-10 ${
            layout === "right" ? "md:flex-row-reverse" : "md:flex-row"
          }`}
        >
          {/* Image Side */}
          <div className="relative flex-1 overflow-hidden rounded-2xl md:rounded-3xl">
            <div className="aspect-[4/3] md:aspect-[3/4] lg:aspect-[4/3]">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a05]/70 via-transparent to-transparent" />
            </div>
            {/* Day Label Badge */}
            <div
              className="absolute top-4 left-4 rounded-xl px-4 py-2 backdrop-blur-md"
              style={{ backgroundColor: `${accentColor}dd` }}
            >
              <p className="text-xs font-bold text-white uppercase tracking-wider">
                {dayLabel}
              </p>
            </div>
            {/* Highlight overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <div className="flex items-start gap-2 rounded-xl border border-white/10 bg-[#1a0a05]/60 p-4 backdrop-blur-md">
                <Star className="mt-0.5 h-4 w-4 shrink-0" style={{ color: accentColor }} />
                <p className="text-sm leading-relaxed text-white/90">
                  {highlight}
                </p>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="flex flex-1 flex-col justify-center">
            <h2
              className="mb-2 font-serif text-3xl font-bold md:text-4xl lg:text-5xl"
              style={{ color: accentColor }}
            >
              {title}
            </h2>
            <p className="mb-6 text-sm leading-relaxed text-muted-foreground md:text-base">
              {subtitle}
            </p>

            {/* Spots as route path */}
            <div className="relative space-y-0">
              {spots.map((spot, index) => (
                <div key={index} className="flex items-stretch gap-4">
                  {/* Route line */}
                  <div className="flex flex-col items-center">
                    <div
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2"
                      style={{ borderColor: accentColor, color: accentColor }}
                    >
                      <MapPin className="h-3.5 w-3.5" />
                    </div>
                    {index < spots.length - 1 && (
                      <div
                        className="my-1 w-0.5 flex-1"
                        style={{ backgroundColor: `${accentColor}40` }}
                      />
                    )}
                  </div>
                  {/* Spot content */}
                  <div className={`${index < spots.length - 1 ? "pb-4" : ""} pt-1`}>
                    <p className="font-semibold text-foreground">{spot.name}</p>
                    <p className="mt-0.5 text-sm text-muted-foreground">{spot.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
