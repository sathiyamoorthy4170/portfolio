import { useEffect, useRef, useState } from 'react'

export function Reveal({ children, className = '', delay = 0 }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return undefined

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true)
      return undefined
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true)
        observer.disconnect()
      }
    }, { threshold: 0.12, rootMargin: '0px 0px -40px' })

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return <div ref={ref} style={{ '--reveal-delay': `${delay}ms` }} className={`scroll-reveal ${visible ? 'is-visible' : ''} ${className}`}>{children}</div>
}
