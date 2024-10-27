import './App.css'
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from "./pages/Navbar.jsx";
import Home from './pages/Home.jsx';
import Education from './pages/Education.jsx';
import NoPage from './pages/NoPage.jsx';
import Contact from './pages/Contact.jsx';
import Experience from './pages/Experience.jsx';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="experience" element={<Experience />} />
          <Route path="education" element={<Education />} />
          <Route path="projects" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
