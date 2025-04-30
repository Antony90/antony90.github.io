import React from 'react'

export default function Heading({ text, className }: { text: string, className?: string }) {
  return (
    <h1 className={`text-xl font-semibold text-white ${className}`}>{text}</h1>
  )
}
