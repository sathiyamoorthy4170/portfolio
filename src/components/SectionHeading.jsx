export function SectionHeading({ number, label, title, description }) {
  return <div className="mb-10 items-end justify-between md:mb-14 md:flex"><div><p className="eyebrow">{number} / {label}</p><h2 className="display text-[clamp(42px,5vw,67px)]">{title}</h2></div><p className="mt-5 max-w-[310px] text-sm text-muted md:mb-1 md:mt-0 md:mt-0">{description}</p></div>
}
