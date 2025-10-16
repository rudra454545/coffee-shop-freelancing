'use client'
import { ContainerScroll } from '@/components/ui/container-scroll-animation'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#005f73] to-[#0081a7] text-white pt-20">
      {/* Liquid Background */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/10 animate-float"
            style={{
              width: `${Math.random() * 60 + 20}px`,
              height: `${Math.random() * 60 + 20}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
            }}
          />
        ))}
      </div>

      <ContainerScroll
        titleComponent={
          <>
            <div className="bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm inline-block mb-4 text-sm">
              <Greeting />
            </div>
            <h1 className="text-4xl font-semibold text-white">
              Dive Into a Sea of Flavor <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Shake Sea
              </span>
            </h1>
            <p className="text-xl mt-4 max-w-2xl">
              Handcrafted shakes, exotic mocktails, and chilled coffee brews that make waves in Rourkela
            </p>
            <a href="#menu" className="btn mt-8 text-lg px-8 py-4">
              Explore The Menu
            </a>
          </>
        }
      >
        <div className="w-full h-full rounded-2xl flex items-center justify-center relative overflow-hidden">
          {/* Video background for the hero card */}
          <video
            src="https://drive.google.com/uc?export=download&id=1m8WQ1V25YbBxE-ZiRbi4qn72a9oVfFV4"
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* subtle overlay to match the pictured color gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b6b]/30 to-[#005f73]/30 mix-blend-multiply" />

          <div className="text-center text-white p-8 relative z-10 flex flex-col items-center justify-end h-full">
            <div className="w-full max-w-3xl">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">Welcome to Shake Sea</h3>
              <p className="text-lg md:text-xl opacity-95">Your ultimate destination for premium shakes and beverages</p>
            </div>
          </div>
        </div>
      </ContainerScroll>
    </section>
  )
}

function Greeting() {
  const getGreeting = () => {
    const hour = new Date().getHours()
    if (hour < 12) return 'Good Morning🌞, Rourkela! Ready to start your day with a splash?'
    if (hour < 17) return 'Good Afternoon🌘, Rourkela! Need a refreshing break?'
    return 'Good Evening🌜 , Rourkela! Time to unwind with something special?'
  }

  return <span>{getGreeting()}</span>
}
