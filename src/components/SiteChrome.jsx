import { useState } from 'react'
import { ArrowUp, ArrowUpRight, Layers3, Mail, Menu, X } from 'lucide-react'
import { email } from '../data'

export function Wordmark() {
  return <a href="#top" aria-label="Sathiyamoorthy home" className="flex items-center gap-2.5 text-[15px] font-bold"><span className="grid size-[34px] place-items-center rounded-full bg-ink font-display text-xs text-lime">SK</span><span>Sathiyamoorthy<span className="text-teal">.</span></span></a>
}

export function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return <header className="relative mx-auto flex h-[72px] w-[min(1260px,calc(100%-40px))] items-center justify-between md:h-[84px] md:w-[min(1260px,calc(100%-64px))]"><Wordmark /><button className="p-2 md:hidden" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button><nav aria-label="Main navigation" className={`${open ? 'flex' : 'hidden'} absolute left-0 right-0 top-16 z-10 flex-col gap-5 border border-line bg-white p-5 shadow-2xl md:static md:flex md:flex-row md:items-center md:gap-7 md:border-0 md:bg-transparent md:p-0 md:shadow-none`}>{['Work', 'Experience', 'About', 'Contact'].map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={close} className="text-sm font-semibold text-muted hover:text-ink">{item}</a>)}<a href={`mailto:${email}?subject=Resume request`} className="flex items-center justify-center gap-2 border border-ink px-4 py-2.5 text-sm font-semibold">Resume <ArrowUpRight size={14} /></a></nav></header>
}

export function Footer() {
  return <footer className="section-shell flex flex-wrap items-center justify-between gap-5 py-7 text-[11px] text-muted"><Wordmark /><p>Designed and built with care · 2026</p><div className="flex gap-3"><a href={`mailto:${email}`} aria-label="Email" className="grid size-7 place-items-center rounded-full border border-line"><Mail size={13} /></a><a href="#work" aria-label="View work" className="grid size-7 place-items-center rounded-full border border-line"><Layers3 size={13} /></a><a href="#top" aria-label="Back to top" className="grid size-7 place-items-center rounded-full border border-line"><ArrowUp size={13} /></a></div></footer>
}
