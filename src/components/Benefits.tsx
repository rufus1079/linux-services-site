// src/components/Benefits.tsx
import {
  ShieldCheckIcon,
  ArrowsPointingOutIcon,
  BanknotesIcon
} from "@heroicons/react/24/outline"

const benefits = [
  {
    title: "Enhanced Security",
    description:
      "Protect your data and systems with Linux’s industry-leading security features and expert configurations.",
    icon: ShieldCheckIcon
  },
  {
    title: "Scalability",
    description:
      "Our solutions are designed to grow with your business, ensuring smooth expansion without limits.",
    icon: ArrowsPointingOutIcon
  },
  {
    title: "Affordable Excellence",
    description:
      "Get enterprise-grade solutions at a fraction of the cost of proprietary systems.",
    icon: BanknotesIcon
  }
]

export default function Benefits() {
  return (
    <section className="snap-start h-screen py-32 px-6 bg-gray-100 text-gray-900 text-center flex flex-col justify-center border-t border-gray-300">
      <h2 className="text-4xl font-bold mb-6">Why Linux & Benefits for Your Business</h2>
      <p className="max-w-2xl mx-auto mb-12">
        Linux is the backbone of modern IT infrastructure, trusted by businesses worldwide for its stability, security, and flexibility. Our Linux services provide the foundation for success.
      </p>
      <div className="flex flex-col md:flex-row justify-center gap-8">
        {benefits.map((benefit) => (
          <div
            key={benefit.title}
            className="bg-white p-6 rounded shadow hover:shadow-lg hover:scale-105 transition-transform duration-300 flex flex-col items-center"
          >
            <benefit.icon className="w-8 h-8 text-green-500 mb-3" />
            <h3 className="font-semibold mb-2">{benefit.title}</h3>
            <p className="text-center">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

