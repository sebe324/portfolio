import './App.css'
import ReactDOM from 'react-dom/client';
import { HashRouter,Routes,Route } from 'react-router-dom';
import Navbar from "./pages/Navbar.jsx";
import Home from './pages/Home.jsx';
import Education from './pages/Education.jsx';
import NoPage from './pages/NoPage.jsx';
import Contact from './pages/Contact.jsx';
import Experience from './pages/Experience.jsx';
import ScrollToTopWrapper from './components/ScrollToTopWrap.jsx';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
function App() {
  useEffect(() => {
    let current_theme = localStorage.getItem('theme');
    if (current_theme == null)
    {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        current_theme = "dark"
      }
    }
    document.documentElement.setAttribute('data-bs-theme',current_theme);
}, []);
  return (
    <HashRouter>
      <ScrollToTopWrapper>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="experience" element={<Experience />} />
          <Route path="education" element={<Education />} />
          <Route path="projects" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
      </ScrollToTopWrapper>
    </HashRouter>
  )
}

export default App
