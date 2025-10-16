'use client'
import { useState, useEffect } from 'react'

const popularTimes = {
  "sundays": [
    {"time": "9 AM", "value": 10},
    {"time": "10 AM", "value": 20},
    {"time": "11 AM", "value": 25},
    {"time": "12 PM", "value": 30},
    {"time": "1 PM", "value": 35},
    {"time": "2 PM", "value": 30},
    {"time": "3 PM", "value": 40},
    {"time": "4 PM", "value": 50},
    {"time": "5 PM", "value": 60},
    {"time": "6 PM", "value": 80},
    {"time": "7 PM", "value": 75},
    {"time": "8 PM", "value": 65},
    {"time": "9 PM", "value": 90}
  ],
  "mondays": [
    {"time": "9 AM", "value": 10},
    {"time": "10 AM", "value": 20},
    {"time": "11 AM", "value": 25},
    {"time": "12 PM", "value": 30},
    {"time": "1 PM", "value": 35},
    {"time": "2 PM", "value": 30},
    {"time": "3 PM", "value": 40},
    {"time": "4 PM", "value": 50},
    {"time": "5 PM", "value": 60},
    {"time": "6 PM", "value": 70},
    {"time": "7 PM", "value": 80},
    {"time": "8 PM", "value": 90},
    {"time": "9 PM", "value": 95}
  ],
  "tuesdays": [
    {"time": "9 AM", "value": 10},
    {"time": "10 AM", "value": 20},
    {"time": "11 AM", "value": 25},
    {"time": "12 PM", "value": 30},
    {"time": "1 PM", "value": 35},
    {"time": "2 PM", "value": 30},
    {"time": "3 PM", "value": 40},
    {"time": "4 PM", "value": 50},
    {"time": "5 PM", "value": 60},
    {"time": "6 PM", "value": 75},
    {"time": "7 PM", "value": 85},
    {"time": "8 PM", "value": 90},
    {"time": "9 PM", "value": 80}
  ],
  "wednesdays": [
    {"time": "9 AM", "value": 10},
    {"time": "10 AM", "value": 20},
    {"time": "11 AM", "value": 25},
    {"time": "12 PM", "value": 30},
    {"time": "1 PM", "value": 35},
    {"time": "2 PM", "value": 30},
    {"time": "3 PM", "value": 40},
    {"time": "4 PM", "value": 50},
    {"time": "5 PM", "value": 70},
    {"time": "6 PM", "value": 80},
    {"time": "7 PM", "value": 90},
    {"time": "8 PM", "value": 95},
    {"time": "9 PM", "value": 85}
  ],
  "thursdays": [
    {"time": "9 AM", "value": 10},
    {"time": "10 AM", "value": 20},
    {"time": "11 AM", "value": 30},
    {"time": "12 PM", "value": 35},
    {"time": "1 PM", "value": 40},
    {"time": "2 PM", "value": 35},
    {"time": "3 PM", "value": 45},
    {"time": "4 PM", "value": 55},
    {"time": "5 PM", "value": 65},
    {"time": "6 PM", "value": 80},
    {"time": "7 PM", "value": 90},
    {"time": "8 PM", "value": 85},
    {"time": "9 PM", "value": 75}
  ],
  "fridays": [
    {"time": "9 AM", "value": 10},
    {"time": "10 AM", "value": 15},
    {"time": "11 AM", "value": 20},
    {"time": "12 PM", "value": 30},
    {"time": "1 PM", "value": 40},
    {"time": "2 PM", "value": 35},
    {"time": "3 PM", "value": 45},
    {"time": "4 PM", "value": 55},
    {"time": "5 PM", "value": 70},
    {"time": "6 PM", "value": 85},
    {"time": "7 PM", "value": 95},
    {"time": "8 PM", "value": 90},
    {"time": "9 PM", "value": 100}
  ],
  "saturdays": [
    {"time": "9 AM", "value": 15},
    {"time": "10 AM", "value": 25},
    {"time": "11 AM", "value": 30},
    {"time": "12 PM", "value": 40},
    {"time": "1 PM", "value": 50},
    {"time": "2 PM", "value": 45},
    {"time": "3 PM", "value": 60},
    {"time": "4 PM", "value": 70},
    {"time": "5 PM", "value": 80},
    {"time": "6 PM", "value": 90},
    {"time": "7 PM", "value": 100},
    {"time": "8 PM", "value": 95},
    {"time": "9 PM", "value": 90}
  ]
}

export default function PeakHours() {
  const [selectedDay, setSelectedDay] = useState('')
  const [currentTimeIndex, setCurrentTimeIndex] = useState(-1)
  const [chartVisible, setChartVisible] = useState(false)

  useEffect(() => {
    // Automatically set to current day
    const now = new Date()
    const dayNames = ['sundays', 'mondays', 'tuesdays', 'wednesdays', 'thursdays', 'fridays', 'saturdays']
    const currentDay = dayNames[now.getDay()]
    setSelectedDay(currentDay)

    // Find current time slot
    const currentHour = now.getHours()
    const timeSlots = [
      { hour: 9, index: 0 }, { hour: 10, index: 1 }, { hour: 11, index: 2 },
      { hour: 12, index: 3 }, { hour: 13, index: 4 }, { hour: 14, index: 5 },
      { hour: 15, index: 6 }, { hour: 16, index: 7 }, { hour: 17, index: 8 },
      { hour: 18, index: 9 }, { hour: 19, index: 10 }, { hour: 20, index: 11 },
      { hour: 21, index: 12 }
    ]
    const currentSlot = timeSlots.find(slot => slot.hour === currentHour)
    if (currentSlot) {
      setCurrentTimeIndex(currentSlot.index)
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setChartVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    const chartContainer = document.querySelector('.line-chart-container')
    if (chartContainer) {
      observer.observe(chartContainer)
    }

    return () => observer.disconnect()
  }, [])

  const days = Object.keys(popularTimes)
  const currentData = popularTimes[selectedDay]

  return (
    <section id="peak-hours" className="py-20 bg-[#f4eade]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#005f73] mb-4">Peak Hours Portal</h2>
          <p className="text-xl text-gray-600">Daily activity / ratings — visualized below.</p>
          {selectedDay && (
            <p className="text-lg text-[#005f73] mt-2">Currently showing: {selectedDay.charAt(0).toUpperCase() + selectedDay.slice(1)}</p>
          )}
        </div>

        {/* Day Selector */}
        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {days.map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                  selectedDay === day
                    ? 'bg-[#005f73] text-white'
                    : 'bg-white text-[#005f73] hover:bg-[#005f73] hover:text-white'
                }`}
              >
                {day.charAt(0).toUpperCase() + day.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-transparent rounded-2xl p-6 shadow-lg line-chart-container">
            <LineChart data={currentData} isVisible={chartVisible} currentTimeIndex={currentTimeIndex} />
          </div>
        </div>
      </div>
    </section>
  )
}

function LineChart({ data, isVisible, currentTimeIndex }) {
  if (!data || !data.length) return null

  const width = 800
  const height = 300
  const padding = 40
  const maxValue = Math.max(...data.map(d => d.value))

  const points = data.map((d, i) => {
    const x = padding + (i * (width - padding * 2)) / (data.length - 1)
    const y = padding + (1 - d.value / maxValue) * (height - padding * 2)
    return [x, y]
  })

  const path = points.map((p, i) => (i === 0 ? `M ${p[0]} ${p[1]}` : `L ${p[0]} ${p[1]}`)).join(' ')

  return (
    <div className="w-full overflow-x-auto">
      <svg width="100%" viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="lineGrad" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#005f73" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#005f73" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Area fill */}
        <path
          d={`${path} L ${width - padding} ${height - padding} L ${padding} ${height - padding} Z`}
          fill="url(#lineGrad)"
          opacity={isVisible ? 1 : 0}
          transition="opacity 1s ease-in-out"
        />

        {/* Line */}
        <path
          d={path}
          fill="none"
          stroke="#005f73"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity={isVisible ? 1 : 0}
          transition="opacity 1s ease-in-out"
        />

        {/* Points */}
        {points.map((p, i) => (
          <circle
            key={i}
            cx={p[0]}
            cy={p[1]}
            r={currentTimeIndex === i ? "6" : "4"}
            fill={currentTimeIndex === i ? "#ff6b6b" : "#005f73"}
            opacity={isVisible ? 1 : 0}
            transition="opacity 1s ease-in-out"
          />
        ))}

        {/* Current time indicator */}
        {currentTimeIndex >= 0 && points[currentTimeIndex] && (
          <circle
            cx={points[currentTimeIndex][0]}
            cy={points[currentTimeIndex][1]}
            r="8"
            fill="none"
            stroke="#ff6b6b"
            strokeWidth="2"
            opacity={isVisible ? 0.8 : 0}
            transition="opacity 1s ease-in-out"
          />
        )}

        {/* X-axis labels */}
        {points.map((p, i) => (
          <text
            key={`label-${i}`}
            x={p[0]}
            y={height - 10}
            fontSize="12"
            textAnchor="middle"
            fill="#475569"
            opacity={isVisible ? 1 : 0}
            transition="opacity 1s ease-in-out"
          >
            {data[i].time}
          </text>
        ))}

        {/* Y-axis labels */}
        {[0, 25, 50, 75, 100].map((value) => {
          const y = padding + (1 - value / 100) * (height - padding * 2)
          return (
            <text
              key={`y-${value}`}
              x={padding - 10}
              y={y + 4}
              fontSize="12"
              textAnchor="end"
              fill="#475569"
              opacity={isVisible ? 1 : 0}
              transition="opacity 1s ease-in-out"
            >
              {value}%
            </text>
          )
        })}
      </svg>
    </div>
  )
}
