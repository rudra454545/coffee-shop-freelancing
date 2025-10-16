'use client'
import { FooterBackgroundGradient, TextHoverEffect } from '@/components/ui/hover-footer'

export default function Footer() {
  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { label: "Our Vibe", href: "#vibe" },
        { label: "Menu", href: "#menu" },
        { label: "Gallery", href: "#gallery" },
        { label: "Location", href: "#location" },
        { label: "Testimonials", href: "#testimonials" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms & Conditions", href: "#" },
        { label: "Cookie Policy", href: "#" },
      ],
    },
  ]

  const socialLinks = [
    { icon: "📷", label: "Instagram", href: "https://www.instagram.com/shake_sea_?igsh=dWMxNXprejN0YTdz" },
    { icon: "📘", label: "Facebook", href: "#" },
    { icon: "🐦", label: "Twitter", href: "#" },
  ]

  return (
    <footer className="bg-[#0F0F11]/10 relative h-fit rounded-3xl overflow-hidden m-8">
      <div className="max-w-7xl mx-auto p-14 z-40 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 lg:gap-16 pb-12">
          {/* Brand section */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-[#3ca2fa] text-3xl font-extrabold">
                &hearts;
              </span>
              <span className="text-white text-3xl font-bold">Shake Sea</span>
            </div>
            <p className="text-sm leading-relaxed">
              Your oasis of taste in Rourkela. Dive into a sea of flavor with our handcrafted shakes, exotic mocktails, and chilled coffee brews.
            </p>
          </div>

          {/* Footer link sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white text-lg font-semibold mb-6">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label} className="relative">
                    <a
                      href={link.href}
                      className="hover:text-[#3ca2fa] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact section */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <span className="text-[#3ca2fa]">📧</span>
                <a href="mailto:hello@shakesea.com" className="hover:text-[#3ca2fa] transition-colors">
                  hello@shakesea.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-[#3ca2fa]">📞</span>
                <a href="tel:+919876543210" className="hover:text-[#3ca2fa] transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-[#3ca2fa]">📍</span>
                <span className="hover:text-[#3ca2fa] transition-colors">
                  123 Flavor Street, Rourkela
                </span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-t border-gray-700 my-8" />

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0">
          {/* Social icons */}
          <div className="flex space-x-6 text-gray-400">
            {socialLinks.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="hover:text-[#3ca2fa] transition-colors text-xl"
              >
                {icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} Shake Sea. All rights reserved.
          </p>
        </div>
      </div>

      {/* Text hover effect */}
      <div className="lg:flex hidden h-[30rem] -mt-52 -mb-36">
        <TextHoverEffect text="Shake Sea" className="z-50" />
      </div>

      <FooterBackgroundGradient />
    </footer>
  )
}