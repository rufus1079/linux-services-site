// src/components/Hero.tsx
import { ServerIcon } from "@heroicons/react/24/outline"

export default function Hero() {
  return (
    <section className="snap-start h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-blue-950 via-blue-950 to-blue-900 text-white">
      <ServerIcon className="w-12 h-12 text-green-400 mb-6" />
      <h1 className="text-5xl font-bold mb-4">
        Elevate Your Business with Expert Linux Services
      </h1>
      <p className="max-w-2xl text-lg">
        Streamline your IT infrastructure with secure, reliable, and cost-effective Linux solutions tailored for your business.
      </p>
    </section>
  )
}

