'use client'
import { useState, useEffect } from 'react'

export default function Location() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    checkOpeningHours()
    const interval = setInterval(checkOpeningHours, 60000)
    return () => clearInterval(interval)
  }, [])

  const checkOpeningHours = () => {
    const now = new Date()
    const day = now.getDay()
    const hour = now.getHours()

    let open = false
    if (day >= 1 && day <= 5) {
      open = hour >= 10 && hour < 23
    } else {
      open = hour >= 9 && hour < 24
    }
    setIsOpen(open)
  }

  return (
    <section id="location" className="py-20 bg-[#f4eade]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#005f73] mb-8">Find Our Store</h2>
        <p className="text-xl text-center mb-12">We're ready to welcome you aboard!</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Location Info */}
          <div className="space-y-8">
            <LocationDetail
              icon="📍"
              title="Address"
              content="123 Flavor Street, Rourkela, Odisha 769001"
            />
            <LocationDetail
              icon="🕒"
              title="Hours"
              content={
                <>
                  <p>Monday - Friday: 10:00 AM - 11:00 PM</p>
                  <p>Saturday - Sunday: 9:00 AM - 12:00 AM</p>
                  <p className={`mt-2 font-semibold ${isOpen ? 'text-green-600' : 'text-red-600'}`}>
                    {isOpen ? "We're currently open!" : "We're currently closed."}
                  </p>
                </>
              }
            />
            <LocationDetail
              icon="📞"
              title="Contact"
              content={
                <>
                  <p><a href="tel:+919876543210" className="hover:text-[#ff6b6b]">+91 98765 43210</a></p>
                  <p><a href="mailto:hello@shakesea.com" className="hover:text-[#ff6b6b]">hello@shakesea.com</a></p>
                </>
              }
            />
          </div>

          {/* Map */}
          <div className="bg-gray-200 rounded-2xl h-96 overflow-hidden">
            <iframe
              src="https://maps.google.com/maps?q=22.241413,84.806215&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Shake Sea Location"
            ></iframe>
          </div>

          {/* Navigate Button */}
          <div className="flex justify-center mt-4">
            <a
              href="https://maps.app.goo.gl/pAUF4KbCHgKdSNUi8"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#005f73] text-white px-8 py-4 rounded-lg hover:bg-[#004a5c] transition-colors"
            >
              <span className="text-xl">🗺️</span>
              <span>Navigate Now</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function LocationDetail({ icon, title, content }) {
  return (
    <div className="flex items-start space-x-4">
      <div className="w-12 h-12 bg-[#005f73] text-white rounded-full flex items-center justify-center text-xl flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-bold text-[#005f73] mb-2">{title}</h3>
        <div className="text-gray-600">{content}</div>
      </div>
    </div>
  )
}