import React from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Footer from './components/Footer'
import MidSection from './components/MidSection'
import FAQSection from './components/FAQSection'
import BenefitsSection from './components/BenefistSection'

const App = () => {
  return (
    <div className='flex flex-col'>
      <Navbar />
      <Main />
      <MidSection />
      <BenefitsSection />
      <FAQSection />
      <Footer />
    </div>
  )
}

export default App