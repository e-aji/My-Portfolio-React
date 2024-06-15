// Bringing in the required import from 'react-router-dom'
import { BrowserRouter as Router, Link } from 'react-router-dom';
export default function Nav() {
  // The Navbar UI component will render each of the Link elements in the links prop
  return (
    <Router>

      <nav>
      
      <button>
        <Link to="/">Home</Link>
      </button>
      <button>
        <Link to="/about">About</Link>
      </button>
      <button>
        <Link to="/portfolio">Portfolio</Link>
      </button>
      <button>
        <Link to="/contact">Contact</Link>
      </button>

      </nav>

    </Router>
  );
}
