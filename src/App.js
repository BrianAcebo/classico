import { MainNav } from './components/nav/MainNav'
import { Footer } from './components/nav/Footer'
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Reserve } from './pages/Reserve'
import { Showcase } from './pages/Showcase'
import { ScrollToTop } from './utils/ScrollToTop'
import { LoadingScreen } from './screens/LoadingScreen'
import { useState, useEffect } from 'react'
 
export const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 4000)
  }, []);


  return (
    <>
    {loading === false ? (
    <div className="App">
      <MainNav />

      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/reserve" element={<Reserve />} />
        <Route path="/showcase" element={<Showcase />} />
      </Routes>

      <Footer />
    </div>
    ) : (
      <LoadingScreen />
    )}
    </>
  );
}
