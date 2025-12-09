import Header from './components/Header'
import Hero from './components/Hero'
import AboutSection from './components/AboutSection'
import ServicesSection from './components/ServicesSection'
import StrukturOrganisasiSection from './components/StrukturOrganisasiSection'
import LegalitasSection from './components/LegalitasSection'
import InfoSection from './components/InfoSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <StrukturOrganisasiSection />
      <LegalitasSection />
      <InfoSection />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}

export default App
