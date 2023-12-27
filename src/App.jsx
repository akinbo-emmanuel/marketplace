import { Banner, Browse, Footer, Hero, Navbar, PopularDownloads, Testimonials } from './sections';

import './App.css';

const App = () => {

  return (
    <main className=' flex flex-col bg-black100 '>
      <Navbar />
      <Hero />
      <PopularDownloads />
      <Browse />
      <Testimonials />
      <Banner />
      <Footer />
    </main>
  )
}

export default App
