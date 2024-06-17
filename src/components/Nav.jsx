// Bringing in the required import from 'react-router-dom'
import { Link } from 'react-router-dom';
import Navbar from './UI/Navbar';

export default function Nav() {
  // The Navbar UI component will render each of the Link elements in the links prop
  return (
    <div>
      <div className="logo">Esther Ajiboye</div>

      <Navbar

      
        links={[
          <Link key={1} className="nav-link text-light" to="/about">
            About Us
          </Link>,
          <Link key={2} className="nav-link text-light" to="/portfolio">
            Portfolio
          </Link>,
          <Link key={3} className="nav-link text-light" to="/contact">
            Contact
          </Link>,
        ]}
      />
    </div>
  );
}

