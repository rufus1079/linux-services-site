// src/components/About.tsx
import { Cog6ToothIcon, CreditCardIcon, UserGroupIcon } from "@heroicons/react/24/outline"

export default function About() {
  const features = [
    {
      title: "Tailored Solutions",
      description:
        "We design custom Linux-based solutions to meet your unique needs, ensuring seamless integration with your operations.",
      icon: Cog6ToothIcon
    },
    {
      title: "Cost-Effective & Open-Source",
      description:
        "Leverage the power of Linux to reduce licensing costs while maintaining enterprise-grade performance and security.",
      icon: CreditCardIcon
    },
    {
      title: "Expert Support",
      description:
        "Our certified Linux professionals bring years of experience to deliver reliable support and maintenance.",
      icon: UserGroupIcon
    }
  ]

  return (
    <section className="snap-start h-screen py-32 px-6 bg-gray-100 text-gray-900 text-center flex flex-col justify-center border-t border-gray-300">
      <h2 className="text-4xl font-bold mb-12">Why Choose Our Linux Services?</h2>
      <p className="max-w-2xl mx-auto mb-12">
        Are you a small or medium-sized business looking to streamline your IT infrastructure with secure, reliable, and cost-effective solutions? Our expert Linux services empower your business with robust, scalable, and high-performance systems.
      </p>
      <div className="flex flex-col md:flex-row justify-center gap-8">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="bg-white p-6 rounded shadow hover:shadow-lg hover:scale-105 transition-transform duration-300 flex flex-col items-center"
          >
            <feature.icon className="w-8 h-8 text-green-500 mb-3" />
            <h3 className="font-semibold mb-2">{feature.title}</h3>
            <p className="text-center">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}


