import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./Layout";
import { HomePage, LabDirectorPage, StudentsPage, AlumniPage, InfrastructurePage, ResearchPage, PublicationsPage, NewsPage, GalleryPage } from "./Pages";

function useTheme() {
  const [dark, setDark] = useState(() => localStorage.getItem("prism-theme") !== "light");
  useEffect(() => {
    document.body.classList.toggle("light", !dark);
    localStorage.setItem("prism-theme", dark ? "dark" : "light");
  }, [dark]);
  return [dark, setDark];
}

export default function App() {
  const [dark, setDark] = useTheme();
  return (
    <BrowserRouter>
      <Navbar dark={dark} setDark={setDark} />
      <div style={{ paddingTop: 64 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/people/lab-director" element={<LabDirectorPage />} />
          <Route path="/people/students" element={<StudentsPage />} />
          <Route path="/people/alumni" element={<AlumniPage />} />
          <Route path="/infrastructure" element={<InfrastructurePage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/publications" element={<PublicationsPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
