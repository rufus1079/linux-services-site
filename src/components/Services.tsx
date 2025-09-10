// src/components/Services.tsx
import {
  EnvelopeIcon,
  ServerIcon,
  LockClosedIcon,
  ShieldCheckIcon,
  GlobeAltIcon
} from "@heroicons/react/24/outline"

const services = [
  { title: "Mail Servers", description: "Deploy secure, scalable email solutions.", icon: EnvelopeIcon },
  { title: "Web Servers / Load Balancers", description: "Host websites and apps with max uptime.", icon: ServerIcon },
  { title: "VPNs", description: "Secure remote access with customized VPNs.", icon: LockClosedIcon },
  { title: "Database Servers", description: "Postgres or MariaDB setups.", icon: ServerIcon },
  { title: "Firewalls", description: "Advanced Linux-based firewall protection.", icon: ShieldCheckIcon },
  { title: "DNS Servers", description: "Fast, reliable DNS setups.", icon: GlobeAltIcon }
]



export default function Services() {
  return (
    <section className="snap-start h-screen py-32 px-6 bg-gray-50 text-gray-900 text-center flex flex-col justify-center border-t border-gray-300">
      <h2 className="text-4xl font-bold mb-12">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {services.map((service) => (
         <div
  key={service.title}
  className="bg-white p-6 rounded shadow hover:shadow-lg hover:scale-105 transition-transform duration-300 flex flex-col items-center"
>
  <service.icon className="w-8 h-8 text-green-500 mb-3" />
  <h3 className="font-semibold mb-2">{service.title}</h3>
  <p className="text-center">{service.description}</p>
</div>        ))}
      </div>
    </section>
  )
}



