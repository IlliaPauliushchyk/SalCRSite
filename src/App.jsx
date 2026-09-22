import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Contact from './pages/Contact';
import FootballSpy from './pages/FootballSpy';
import Home from './pages/Home';
import Privacy from './pages/Privacy';
import Sabotage from './pages/Sabotage';

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apps/football-spy" element={<FootballSpy />} />
        <Route path="/apps/sabotage" element={<Sabotage />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}
