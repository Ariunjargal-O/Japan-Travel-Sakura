"use client"

import { useState } from "react"
import { Send, Phone, Mail } from "lucide-react"

export function RegisterSection() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="register" className="bg-[#faf7f2] px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <p className="mb-2 text-md font-medium tracking-widest text-[#f0a050] uppercase">
            Бүртгэл
          </p>
          <h2 className="font-serif text-3xl font-bold text-[#1a0a05] md:text-4xl">
            Аялалд бүртгүүлэх
          </h2>
        </div>

        <div className="grid gap-10 md:grid-cols-5">
          <div className="md:col-span-3">
            {submitted ? (
              <div className="rounded-2xl border border-green-200 bg-green-50 p-10 text-center">
                <h3 className="text-xl font-bold text-green-700">
                  Амжилттай илгээгдлээ!
                </h3>
                <p className="mt-2 text-sm text-green-600">
                  Бид удахгүй тантай холбогдоно.
                </p>
              </div>
            ) : (
              <form
                action="https://formsubmit.co/jargalariuka9@gmail.com"
                method="POST"
                onSubmit={() => setSubmitted(true)}
                className="space-y-4"
              >
                {/* Hidden settings */}
                <input type="hidden" name="_subject" value="Шинэ аялалын бүртгэл!" />
                <input type="hidden" name="_captcha" value="false" />

                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="Таны нэр"
                    className="w-full rounded-xl border px-4 py-3 text-sm"
                  />
                  <input
                    name="phone"
                    type="tel"
                    required
                    placeholder="8888 1234"
                    className="w-full rounded-xl border px-4 py-3 text-sm"
                  />
                </div>

                <input
                  name="email"
                  type="email"
                  placeholder="email@example.com"
                  className="w-full rounded-xl border px-4 py-3 text-sm"
                />

                <select
                  name="travelers"
                  className="w-full rounded-xl border px-4 py-3 text-sm"
                >
                  <option value="1">1 хүн</option>
                  <option value="2">2 хүн</option>
                  <option value="3">3 хүн</option>
                  <option value="4">4 хүн</option>
                  <option value="5">5 хүн</option>
                  <option value="6+">6+ хүн</option>
                </select>

                <textarea
                  name="message"
                  rows={3}
                  placeholder="Нэмэлт тайлбар..."
                  className="w-full rounded-xl border px-4 py-3 text-sm"
                />

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#f0a050] py-3 text-sm font-bold"
                >
                  <Send className="h-4 w-4" />
                  Бүртгүүлэх
                </button>
              </form>
            )}
          </div>

          <div className="md:col-span-2">
            <div className="space-y-4 rounded-2xl border bg-white p-6">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <p>+976 8863-1230</p>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <p>jargalariuka9@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}