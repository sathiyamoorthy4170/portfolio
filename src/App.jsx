import { Header, Footer } from './components/SiteChrome'
import { HeroSection } from './components/HeroSection'
import { ProofBand } from './components/ProofBand'
import { WorkSection } from './components/WorkSection'
import { CapabilitiesSection } from './components/CapabilitiesSection'
import { ExperienceSection } from './components/ExperienceSection'
import { AboutSection } from './components/AboutSection'
import { ContactSection } from './components/ContactSection'
import { Reveal } from './components/Reveal'

function App() {
    return <>
        <Header />
        <main id="top">
            <Reveal><HeroSection /></Reveal>
            <Reveal delay={80}><ProofBand /></Reveal>
            <Reveal delay={40}><WorkSection /></Reveal>
            <Reveal delay={40}><CapabilitiesSection /></Reveal>
            <Reveal delay={40}><ExperienceSection /></Reveal>
            <Reveal delay={40}><AboutSection /></Reveal>
            <Reveal delay={40}><ContactSection /></Reveal>
        </main>
        <Footer />
    </>
}

export default App
