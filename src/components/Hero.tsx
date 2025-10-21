// src/components/Hero.tsx

export default function Hero() {
  return (
    <section className="snap-start h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-blue-950 via-blue-950 to-blue-900 text-white">
      <img
        src="/tux.png"   // place the image in /public folder
        alt="Tux"
        className="w-24 h-24 mb-6" // adjust size as needed
      />
      <h1 className="text-5xl font-bold mb-4">
        Elevate Your Business with Expert Linux Services
      </h1>
      <p className="max-w-2xl text-lg">
        Streamline your IT infrastructure with secure, reliable, and cost-effective Linux solutions tailored for your business.
      </p>
    </section>
  )
}

