import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* CTA/Testimonial Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="overflow-hidden rounded-xl bg-[#111] shadow-lg">
          <div className="flex flex-col md:flex-row">
            {/* Testimonial Side */}
            <div className="flex flex-col justify-center p-8 md:w-1/2 md:border-r md:border-zinc-800 md:p-12">
              <blockquote className="mb-6 text-xl font-medium md:text-2xl">
                "Our sales growth has increased by 150% in last month after using AlcOS."
              </blockquote>
              <div className="flex items-center">
                <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src="/placeholder.svg?height=48&width=48"
                    alt="Andrew Pearson"
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium">Andrew Pearson</p>
                  <p className="text-sm text-zinc-400">Founder, Company</p>
                </div>
              </div>
            </div>

            {/* CTA Side */}
            <div className="relative flex flex-col justify-center p-8 md:w-1/2 md:p-12">
              <h2 className="mb-8 text-3xl font-bold md:text-4xl">Unlock unlimited growth.</h2>
              <Link
                href="#get-started"
                className="inline-flex w-fit items-center rounded-full bg-white px-6 py-3 text-black transition-colors hover:bg-gray-200"
              >
                Get Started For Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>

              {/* Decorative Shape */}
              <div className="absolute bottom-0 right-0 h-32 w-32 md:h-48 md:w-48">
                <div className="absolute bottom-0 right-0 h-full w-full rounded-tl-[100px] bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-800 opacity-80"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 flex flex-col items-start justify-between gap-8 md:flex-row">
          {/* Logo and Description */}
          <div className="max-w-xs">
            <div className="mb-4 flex items-center">
              <div className="mr-2 h-6 w-6 rounded-full bg-purple-600/80"></div>
              <span className="text-xl font-bold">AlcOS</span>
            </div>
            <p className="text-zinc-400">
              In the new era of technology we look a in the future with certainty and pride for our company and
              business.
            </p>
          </div>

          {/* Navigation Columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:gap-16">
            {/* Homepage Column */}
            <div>
              <h3 className="mb-4 text-lg font-medium">Homepage</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/home-v1" className="text-zinc-400 transition-colors hover:text-white">
                    Home v1
                  </Link>
                </li>
                <li>
                  <Link href="/home-v2" className="text-zinc-400 transition-colors hover:text-white">
                    Home v2
                  </Link>
                </li>
                <li>
                  <Link href="/home-v3" className="text-zinc-400 transition-colors hover:text-white">
                    Home v3
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h3 className="mb-4 text-lg font-medium">Company</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/about" className="text-zinc-400 transition-colors hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-zinc-400 transition-colors hover:text-white">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/career" className="text-zinc-400 transition-colors hover:text-white">
                    Career
                  </Link>
                </li>
              </ul>
            </div>

            {/* Utilities Column */}
            <div>
              <h3 className="mb-4 text-lg font-medium">Utilities</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/case-study" className="text-zinc-400 transition-colors hover:text-white">
                    Case Study
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-zinc-400 transition-colors hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-zinc-400 transition-colors hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-zinc-800 pt-8">
          <p className="text-center text-sm text-zinc-500">© {new Date().getFullYear()} AlcOS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
