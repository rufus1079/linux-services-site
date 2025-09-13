// src/components/Contact.tsx
import { PhoneIcon, GlobeAltIcon } from "@heroicons/react/24/outline";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <section className="snap-start h-screen flex flex-col justify-center items-center text-center py-32 px-6 bg-gradient-to-b from-blue-950 via-blue-950 to-blue-900 text-white">
      <h2 className="text-4xl font-bold mb-12">Get in Touch</h2>

      {/* Contact form */}
      <div className="w-full max-w-md mb-12">
        <ContactForm />
      </div>

      {/* Other contact methods */}
      <div className="flex flex-col gap-6 text-lg">
        <div className="flex items-center gap-3">
          <PhoneIcon className="w-6 h-6 text-green-400" />
          <a href="tel:+1234567890">+1 (234) 567-890</a>
        </div>
        <div className="flex items-center gap-3">
          <GlobeAltIcon className="w-6 h-6 text-green-400" />
          <a href="https://yourwebsite.com">yourwebsite.com</a>
        </div>
      </div>
    </section>
  );
}


