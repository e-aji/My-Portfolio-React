// Bringing in the required import from 'react-router-dom'

import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage'; 
import PortfolioPage from './components/pages/PortfolioPage';
import ContactPage from './components/pages/ContactPage';


function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <main>
      <Nav />
      <HomePage />
      <AboutPage />
      <PortfolioPage/>
      <ContactPage />

      <Outlet />
    </main>
  );
}

export default App;
