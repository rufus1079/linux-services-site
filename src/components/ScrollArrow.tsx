"use client"

import { useEffect, useState } from "react"
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline"

export default function ScrollArrow() {
  const [currentSection, setCurrentSection] = useState(0)
  const totalSections = 5 // update if you add more sections

  useEffect(() => {
    const sections = document.querySelectorAll("main > section")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Array.from(sections).indexOf(entry.target)
            setCurrentSection(index)
          }
        })
      },
      { threshold: 0.5 } // 50% of section visible
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const handleClick = () => {
    const sections = document.querySelectorAll("main > section")
    if (currentSection === totalSections - 1) {
      // last section -> scroll to top
      sections[0].scrollIntoView({ behavior: "smooth" })
    } else {
      // scroll to next section
      sections[currentSection + 1].scrollIntoView({ behavior: "smooth" })
    }
  }

  const atBottom = currentSection === totalSections - 1

  return (
    <div
      className="fixed bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce z-50 cursor-pointer"
      onClick={handleClick}
    >
      {atBottom ? (
        <ChevronUpIcon className="w-8 h-8 text-gray-400" />
      ) : (
        <ChevronDownIcon className="w-8 h-8 text-gray-400" />
      )}
    </div>
  )
}

