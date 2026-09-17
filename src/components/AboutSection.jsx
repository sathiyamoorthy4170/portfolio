import { ArrowUpRight } from 'lucide-react'

export function AboutSection() { return <section id="about" className="section-shell grid gap-12 py-24 md:grid-cols-[1fr_1.3fr] md:gap-20 md:py-36">
    <div className="relative grid h-48 place-items-center overflow-hidden bg-[#173f3b] md:h-[280px]">
        <span className="absolute -right-10 -top-16 size-48 rounded-full border border-lime/40" />
        <span className="absolute -bottom-24 -left-8 size-56 rounded-full border border-orange/50" />
        <span className="relative font-display text-7xl font-bold tracking-[-.12em] text-lime md:text-8xl">S<span className="text-orange">K</span></span>
        <span className="absolute bottom-5 left-5 font-display text-[10px] font-bold uppercase tracking-[.16em] text-white/60">Design + Engineering</span>
    </div>
    <div className="self-center">
        <p className="eyebrow">04 / A little about me</p>
        <h2 className="display text-[clamp(38px,4.5vw,61px)]">I like making the complicated feel <em>obvious.</em></h2>
        <p className="my-6 max-w-[500px] text-base text-muted">I started close to the visual side of digital products and gradually moved deeper into frontend engineering. That combination helps me create interfaces that are not only visually accurate but also accessible, performant, responsive, and maintainable.</p>
        <a href="#contact" className="inline-flex items-center gap-2 border-b border-ink pb-1 text-[13px] font-bold">More about my approach <ArrowUpRight size={16} /></a>
    </div>
    </section> }
