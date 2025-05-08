import React from 'react'

export default function Heading({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <h1 className={`font-semibold text-primary ${className || ""}`}>{children}</h1>
  )
}
