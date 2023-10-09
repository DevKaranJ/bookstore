import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Navigation.css';
import { BsFillPersonFill } from 'react-icons/bs';

function Navigation() {
  return (
    <div className="nav-container">
      <nav className="nav-content">
        <h1>Bookstore CMS</h1>
        <ul className="nav-links">
          <li>
            <Link to="/">Books</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
        </ul>
      </nav>
      <div className="icon-container">
        <BsFillPersonFill className="blue-icon" />
      </div>
    </div>
  );
}

export default Navigation;
