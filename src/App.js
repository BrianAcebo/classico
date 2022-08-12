import { MainNav } from './components/nav/MainNav'
import { Footer } from './components/nav/Footer'
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'

export const App = () => {
  return (
    <div className="App">
      <MainNav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}
