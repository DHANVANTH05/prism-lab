import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/Home'
import PeoplePage from './pages/People'
import StudentsPage from './pages/Students'
import AlumniPage from './pages/Alumni'
import InfrastructurePage from './pages/Infrastructure'
import ResearchPage from './pages/Research'
import PublicationsPage from './pages/Publications'
import NewsPage from './pages/News'
import GalleryPage from './pages/Gallery'

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col bg-[#f4f6f8] dark:bg-[#0a0f1e] transition-colors duration-300">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/people" element={<PeoplePage />} />
              <Route path="/students" element={<StudentsPage />} />
              <Route path="/alumni" element={<AlumniPage />} />
              <Route path="/infrastructure" element={<InfrastructurePage />} />
              <Route path="/research" element={<ResearchPage />} />
              <Route path="/publications" element={<PublicationsPage />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  )
}
