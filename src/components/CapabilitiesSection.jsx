import { ArrowUpRight } from 'lucide-react'
import { SectionHeading } from './SectionHeading'

const capabilities = [['01', 'Scalable frontend architecture', 'Reusable React and Vue components, predictable state management, and maintainable TypeScript patterns.'], ['02', 'Performance built into the workflow', 'Bundle analysis, lazy loading, code splitting, rendering optimisation, and Core Web Vitals monitoring.'], ['03', 'Accessibility from the beginning', 'Semantic HTML, keyboard navigation, focus management, screen-reader support, and WCAG compliance.'], ['04', 'Testing and quality', 'Jest, React Testing Library, cross-browser validation, and 80% coverage across core booking modules.']]

export function CapabilitiesSection() { const goToContact = () => { window.location.hash = 'contact' }; const handleKeyDown = (event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); goToContact() } }; return <section className="section-shell py-12 pb-24 md:pb-36">
    <SectionHeading number="02" label="What I bring" title={<>Technical depth,<br /><em>human</em> detail.</>} description="Architecture, performance, accessibility, and quality practices grounded in production frontend work." />
    <div className="border-t border-line">{capabilities.map(([number, title, copy]) => <div key={number} tabIndex="0" role="button" onClick={goToContact} onKeyDown={handleKeyDown} className="grid cursor-pointer grid-cols-[38px_1fr_20px] gap-2 border-b border-line py-7 outline-none transition hover:bg-white/60 focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-inset md:grid-cols-[70px_1fr_1fr_30px] md:gap-5">
        <span className="font-display text-xs font-bold text-orange">{number}</span>
        <h3 className="display text-xl md:text-2xl">{title}</h3>
        <p className="col-start-2 text-[15px] text-muted md:col-start-3 md:text-sm">{copy}</p>
        <ArrowUpRight className="col-start-3 row-start-1 text-teal md:col-start-4" size={19} /></div>)}</div></section> }
