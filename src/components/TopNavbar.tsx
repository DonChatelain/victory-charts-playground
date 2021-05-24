import { Link } from 'react-router-dom';
import './TopNavbar.scss'

export const TopNavbar = () => {
  return (
    <nav id="TopNavbar">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/press">Press</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </nav>
  );
};
