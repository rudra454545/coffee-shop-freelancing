'use client'
import { useScroll, useTransform, motion } from 'framer-motion'
import { useRef } from 'react'

export function ContainerScroll({ titleComponent, children }) {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
  })

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1])

  return (
    <div
      className="flex items-center justify-center relative py-20"
      ref={containerRef}
    >
      <div
        className="py-10 w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        <Header titleComponent={titleComponent} />
        <Card rotate={rotate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  )
}

function Header({ titleComponent }) {
  return (
    <div className="max-w-5xl mx-auto text-center">
      {titleComponent}
    </div>
  )
}

function Card({ rotate, scale, children }) {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
      }}
      className="max-w-5xl mx-auto h-[30rem] md:h-[40rem] w-full border-4 border-[#6C6C6C] p-6 bg-[#222222] rounded-[30px] shadow-2xl"
    >
      <div className="h-full w-full overflow-hidden rounded-2xl bg-gray-100 dark:bg-zinc-900">
        {children}
      </div>
    </motion.div>
  )
}
