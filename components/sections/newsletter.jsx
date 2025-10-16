'use client'
import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validateEmail(email)) {
      setMessage('Please enter a valid email address.')
      return
    }
    setMessage('Thanks for joining the Shake Sea Crew! Check your email for your 15% off coupon.')
    setEmail('')
    setTimeout(() => setMessage(''), 5000)
  }

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-[#005f73] to-[#0081a7] text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Join the Shake Sea Crew!</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Be A Member Of Shake Sea Today
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="flex-1 px-4 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#ff6b6b]"
            required
          />
          <button
            type="submit"
            className="bg-[#ff6b6b] text-white px-8 py-3 rounded-full hover:bg-[#e55a5a] transition-colors font-semibold"
          >
            Catch The Wave
          </button>
        </form>

        {message && (
          <div className={`mt-4 ${message.includes('Thanks') ? 'text-green-300' : 'text-red-300'}`}>
            {message}
          </div>
        )}
      </div>
    </section>
  )
}