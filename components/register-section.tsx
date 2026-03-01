"use client";

import { useState, useRef, useEffect } from "react";
import { Send, Phone, Mail } from "lucide-react";
import emailjs from "@emailjs/browser";

export function RegisterSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "");
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "", 
      );
      setSubmitted(true);
    } catch (err) {
      setError("Илгээхэд алдаа гарлаа. Дахин оролдоно уу.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="register" className="bg-[#faf7f2] px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <p className="mb-2 text-md font-medium tracking-widest text-[#f0a050] uppercase">
            Бүртгэл
          </p>
          <h2 className="font-serif text-3xl font-bold text-[#1a0a05] md:text-4xl text-balance">
            Аялалд бүртгүүлэх
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-[#1a0a05]/50">
            Доорх маягтыг бөглөж илгээнэ үү. Бид тантай 24 цагийн дотор
            холбогдоно.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-5">
          {/* Form */}
          <div className="md:col-span-3">
            {submitted ? (
              <div className="flex flex-col items-center justify-center rounded-2xl border border-[#2ecc71]/20 bg-[#2ecc71]/5 p-12 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#2ecc71]/10">
                  <Send className="h-7 w-7 text-[#2ecc71]" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-[#1a0a05]">
                  Амжилттай илгээгдлээ!
                </h3>
                <p className="text-sm text-[#1a0a05]/50">
                  Таны бүртгэл хүлээн авлаа. Бид удахгүй тантай холбогдоно.
                </p>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-xs font-medium text-[#1a0a05]/70"
                    >
                      Нэр <span className="text-[#e74c3c]">*</span>
                    </label>
                    <input
                      id="name"
                      name="from_name" /* ← EmailJS template-тэй таарах нэр */
                      type="text"
                      required
                      className="w-full rounded-xl border border-[#1a0a05]/10 bg-white px-4 py-3 text-sm text-[#1a0a05] outline-none transition-all focus:border-[#f0a050] focus:ring-2 focus:ring-[#f0a050]/20"
                      placeholder="Таны нэр"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-1.5 block text-xs font-medium text-[#1a0a05]/70"
                    >
                      Утасны дугаар <span className="text-[#e74c3c]">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      className="w-full rounded-xl border border-[#1a0a05]/10 bg-white px-4 py-3 text-sm text-[#1a0a05] outline-none transition-all focus:border-[#f0a050] focus:ring-2 focus:ring-[#f0a050]/20"
                      placeholder="8888 1234"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-xs font-medium text-[#1a0a05]/70"
                  >
                    И-мэйл
                  </label>
                  <input
                    id="email"
                    name="user_email"
                    type="email"
                    className="w-full rounded-xl border border-[#1a0a05]/10 bg-white px-4 py-3 text-sm text-[#1a0a05] outline-none transition-all focus:border-[#f0a050] focus:ring-2 focus:ring-[#f0a050]/20"
                    placeholder="email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="travelers"
                    className="mb-1.5 block text-xs font-medium text-[#1a0a05]/70"
                  >
                    Аялагчийн тоо
                  </label>
                  <select
                    id="travelers"
                    name="travelers"
                    className="w-full rounded-xl border border-[#1a0a05]/10 bg-white px-4 py-3 text-sm text-[#1a0a05] outline-none transition-all focus:border-[#f0a050] focus:ring-2 focus:ring-[#f0a050]/20"
                  >
                    <option value="1 хүн">1 хүн</option>
                    <option value="2 хүн">2 хүн</option>
                    <option value="3 хүн">3 хүн</option>
                    <option value="4 хүн">4 хүн</option>
                    <option value="5 хүн">5 хүн</option>
                    <option value="6+ хүн">6+ хүн</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-xs font-medium text-[#1a0a05]/70"
                  >
                    Нэмэлт тайлбар
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    className="w-full resize-none rounded-xl border border-[#1a0a05]/10 bg-white px-4 py-3 text-sm text-[#1a0a05] outline-none transition-all focus:border-[#f0a050] focus:ring-2 focus:ring-[#f0a050]/20"
                    placeholder="Тусгай хүсэлт байвал энд бичнэ үү..."
                  />
                </div>

                {error && <p className="text-xs text-[#e74c3c]">{error}</p>}

                <button
                  type="submit"
                  disabled={loading}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#f0a050] py-3.5 text-sm font-bold text-[#1a0a05] uppercase tracking-wider transition-all hover:bg-[#f5b570] hover:shadow-lg hover:shadow-[#f0a050]/20 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <Send className="h-4 w-4" />
                  {loading ? "Илгээж байна..." : "Бүртгүүлэх"}
                </button>
              </form>
            )}
          </div>

          <div className="md:col-span-2">
            <div className="space-y-6 rounded-2xl border border-[#1a0a05]/5 bg-white p-6">
              <h3 className="text-sm font-bold text-[#1a0a05]">Холбоо барих</h3>

              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#3498db]/10">
                  <Phone className="h-4 w-4 text-[#3498db]" />
                </div>
                <div>
                  <p className="text-xs font-medium text-[#1a0a05]/50">Утас</p>
                  <p className="text-sm font-semibold text-[#1a0a05]">
                    +976 9811-1230
                  </p>
                  <p className="text-sm font-semibold text-[#1a0a05]">
                    +976 7211-9871
                  </p>
                  <p className="text-sm font-semibold text-[#1a0a05]">
                    +081 070-2166-8821
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#2ecc71]/10">
                  <Mail className="h-4 w-4 text-[#2ecc71]" />
                </div>
                <div>
                  <p className="text-xs font-medium text-[#1a0a05]/50">
                    И-мэйл
                  </p>
                  <p className="text-sm font-semibold text-[#1a0a05]">
                    ariunjargal.ochirpurev@gmail.com
                  </p>
                </div>
              </div>

              {/* <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f0a050]/10">
                  <MapPin className="h-4 w-4 text-[#f0a050]" />
                </div>
                <div>
                  <p className="text-xs font-medium text-[#1a0a05]/50">Хаяг</p>
                  <p className="text-sm font-semibold text-[#1a0a05]">Улаанбаатар хот</p>
                  <p className="text-xs text-[#1a0a05]/50">Сүхбаатар дүүрэг</p>
                </div>
              </div> */}

              <div className="h-px bg-[#1a0a05]/5" />

              <p className="text-xs leading-relaxed text-[#1a0a05]/40">
                Ажлын өдрүүдэд 09:00 - 18:00 цагийн хооронд холбогдоно уу. Бид
                таны аяллыг тав тухтай болгохын тулд бүх талаар туслах болно.
              </p>
            </div>
          </div>
          {/* ... */}
        </div>
      </div>
    </section>
  );
}
