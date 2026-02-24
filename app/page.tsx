'use client'

import React from "react"
import { TopNav } from "@/components/top-nav"
import { HeroSection } from "@/components/hero-section"
import { RouteOverview } from "@/components/route-overview"
import { DayCard } from "@/components/day-card"
import { TimelineNav } from "@/components/timeline-nav"
import { IncludedSection } from "@/components/included-section"
import { PricingSection } from "@/components/pricing-section"
import { RegisterSection } from "@/components/register-section"
import { FooterSection } from "@/components/footer-section"

const itinerary = [
  {
    id: "day-1",
    dayLabel: "1-р өдөр",
    title: "Нарита - Токио",
    subtitle:
      "УБ-аас Нарита олон улсын нисэх буудалд бууж, Токио хот руу шилжинэ. Нарита нисэх буудлаас Narita Express галт тэрэг эсвэл Airport Limousine автобусаар 60-90 минутад хүрнэ.",
    imageSrc: "/images/day1-narita.jpg",
    imageAlt: "Нарита олон улсын нисэх буудал",
    highlight:
      "Буудалдаа байрлаж, орчимд хооллож, амраарай. Jet lag-аас сэргийлж эрт унтахыг зөвлөе.",
    spots: [
      { name: "Narita International Airport", description: "Японы хамгийн том олон улсын нисэх буудал" },
      { name: "Narita Express / Limousine Bus", description: "Токио хот руу хурдан тээвэрлэлт" },
      { name: "Буудалд байрлах", description: "Амрах, орчимд хооллох, чөлөөт цаг" },
    ],
    layout: "left" as const,
    accentColor: "#e74c3c",
  },
  {
    id: "day-2",
    dayLabel: "2-р өдөр",
    title: "Одайба бүс",
    subtitle:
      "Далайн эргийн орчинд тайван алхах, шоппинг, аквариум. Одайба бүс нь Токиогийн булангийн далайд байрлах хиймэл арал юм.",
    imageSrc: "/images/day2-odaiba.jpg",
    imageAlt: "Одайба Rainbow Bridge",
    highlight:
      "Rainbow Bridge-ийн гайхалтай харагдац, орчин үеийн худалдааны төвүүд, далайн аквариумтай. Нэг бүсэд төвлөрсөн тайван аялал.",
    spots: [
      { name: "Shinagawa Aquarium", description: "Далайн амьтдын олон янз байдлыг мэдрэх" },
      { name: "Statue of Liberty", description: "Одайба дахь эрх чөлөөний хөшөө" },
      { name: "Rainbow Bridge", description: "Токиогийн хамгийн алдартай гүүр" },
      { name: "DiverCity Tokyo Plaza", description: "Том хэмжээний худалдааны төв" },
      { name: "Aqua City Odaiba", description: "Шоппинг болон зугаа цэнгэлийн төв" },
    ],
    layout: "right" as const,
    accentColor: "#3498db",
  },
  {
    id: "day-3",
    dayLabel: "3-р өдөр",
    title: "Уэно + Асакуса + Скайтри",
    subtitle:
      "Уламжлалт Японы соёл, амьтны хүрээлэн, хотын панорама. Уэно амьтны хүрээлэнгээс эхлэн хаврын улиралд сакура цэцгийг үзнэ.",
    imageSrc: "/images/day3-asakusa.jpg",
    imageAlt: "Сэнсожи сүм ба Токио Скайтри",
    highlight:
      "Асакуса дахь Японы хамгийн эртний буддын сүмд зочилж, Токио Скайтри-гээс хотыг 634 метрийн өндрөөс харах боломжтой.",
    spots: [
      { name: "Ueno Zoo", description: "Хаврын улиралд сакура (Hanami) үзэх боломжтой" },
      { name: "Sensoji", description: "Токиогийн хамгийн эртний буддын сүм, 645 он" },
      { name: "Nakamise Street", description: "Уламжлалт худалдааны гудамж, бэлэг дурсгал" },
      { name: "Tokyo Skytree", description: "634м — хотыг дээрээс харах панорама" },
    ],
    layout: "left" as const,
    accentColor: "#2ecc71",
  },
  {
    id: "day-4",
    dayLabel: "4-р өдөр",
    title: "Фүжи аялал",
    subtitle:
      "Байгалийн болон галт уулын бүсийн өвөрмөц туршлага. Бүтэн өдрийн аялалаар Фүжи уулыг хамгийн сайн цэгээс харна.",
    imageSrc: "/images/day4-fuji.jpg",
    imageAlt: "Фүжи уул ба Чурейто пагода",
    highlight:
      "Хаконе халуун рашаанд амарч, Овакуданигийн хар өндөг амталж, нууран дээгүүр усан онгоцоор аялна. Байгаль, соёл, амралтыг хослуулсан өдөр.",
    spots: [
      { name: "Arakurayama Sengen Park", description: "Фүжи уул харагддаг хамгийн алдартай цэг" },
      { name: "JTC Fujinoekiten", description: "Газар хөдлөлтийн симуляцийн туршилт" },
      { name: "Shiraito Falls", description: "Үзэсгэлэнт хүрхрээ" },
      { name: "Lake Ashi", description: "Усан онгоцоор аялах — нуурын дүр зураг" },
      { name: "Hakone Ropeway", description: "Агаарын замаар галт уулын бүс дээгүүр" },
      { name: "Owakudani", description: "Хар өндөг амтлах — 7 жил насанд нэмнэ гэж хэлдэг" },
    ],
    layout: "right" as const,
    accentColor: "#8e44ad",
  },
  {
    id: "day-5",
    dayLabel: "5-р өдөр",
    title: "Шибуя",
    subtitle:
      "Токиогийн хамгийн амьд, дэлхийд алдартай бүс нутаг. teamLab Planets-д бүх мэдрэхүйгээр урлагийг мэдрэнэ.",
    imageSrc: "/images/day5-shibuya.jpg",
    imageAlt: "Шибуя Кроссинг шөнийн гэрэлд",
    highlight:
      "Хачикогийн хөшөөнд зогсож, дэлхийн хамгийн олон хүн нэгэн зэрэг гарам дээр алхаж, Шибуягийн шоппинг хийгээрэй. Оройн хотын хамгийн амьд уур амьсгалыг мэдрэх боломжтой.",
    spots: [
      { name: "teamLab Planets", description: "Бүх мэдрэхүйн дижитал урлагийн үзэсгэлэн" },
      { name: "Hachiko Memorial Statue", description: "Үнэнч нохойн дурсгалт хөшөө" },
      { name: "Shibuya Crossing", description: "Дэлхийн хамгийн олон хүн гардаг зам" },
      { name: "Шибуя бүсийн шоппинг", description: "Хувцас, электроник, Японы брэнд" },
    ],
    layout: "left" as const,
    accentColor: "#e91e8a",
  },
  {
    id: "day-6",
    dayLabel: "6-р өдөр",
    title: "Чөлөөт өдөр",
    subtitle:
      "Аялагч өөрийн сонирхлоор сонгоно. Токио Диснейлэнд, DisneySea, Харри Поттерын Warner Bros. Studio Tour, эсвэл Накамэгуро.",
    imageSrc: "/images/day6-disneyland.jpg",
    imageAlt: "Токио Диснейлэнд",
    highlight:
      "Япон дахь хамгийн чөлөөтэй өдрөө зугаалаарай! Та өөрийн дуртай газраа сонгон аялах эрхтэй.",
    spots: [
      { name: "Tokyo Disneyland", description: "Дэлхийд алдартай зугаа цэнгэлийн парк" },
      { name: "Tokyo DisneySea", description: "Далайн сэдэвт өвөрмөц парк" },
      { name: "Warner Bros. Studio Tour Tokyo", description: "Harry Potter-ийн ертөнцөд аялах" },
      { name: "Nakameguro", description: "Сакура улиралд гоё алхах замтай" },
    ],
    layout: "right" as const,
    accentColor: "#f39c12",
  },
  {
    id: "day-7",
    dayLabel: "7-р өдөр",
    title: "Ибараки - Нарита - УБ",
    subtitle:
      "Дэлхийн хамгийн өндөр Буддагийн хөшөөнүүдийн нэгийг үзээд, Нарита нисэх буудал руу шилжиж, Улаанбаатар хот руу нисч буцна.",
    imageSrc: "/images/day7-ibaraki.jpg",
    imageAlt: "Ушику Дайбутсу Буддагийн хөшөө",
    highlight:
      "Аяллын хамгийн сүүлийн өдөр Ибараки дахь Ushiku Daibutsu — 120 метр өндөр, дэлхийн хамгийн өндөр Буддагийн хөшөөнүүдийн нэгийг үзнэ.",
    spots: [
      { name: "Ushiku Daibutsu", description: "120м — дэлхийн хамгийн өндөр Буддагийн нэг" },
      { name: "Нарита нисэх буудал руу шилжих", description: "Аяллын төгсгөл" },
      { name: "Улаанбаатар хот руу нислэг", description: "Гэрийн замдаа" },
    ],
    layout: "left" as const,
    accentColor: "#e74c3c",
  },
]

export default function JapanItineraryPage() {
  return (
    <main className="bg-background">
      <TopNav />
      <HeroSection />
      {/* <RouteOverview /> */}
      {/* <TimelineNav /> */}

      <div className="divide-y divide-border">
        {itinerary.map((day) => (
          <DayCard key={day.id} {...day} />
        ))}
      </div>

      <IncludedSection />
      <PricingSection />
      <RegisterSection />
      <FooterSection />
    </main>
  )
}
