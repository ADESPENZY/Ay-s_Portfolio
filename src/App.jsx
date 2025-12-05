import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
import ProjectDetail from "./Pages/ProjectDetail";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
        </Routes>

        <Footer />

      </div>
    </Router>
  );
}