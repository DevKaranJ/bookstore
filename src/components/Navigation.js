import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillPersonFill } from 'react-icons/bs';

function Navigation() {
  return (
    <nav>
      <h1>Bookstore CMS</h1>
      <Link to="/">Books</Link>
      <Link to="/categories">Categories</Link>
      <div className="icon-container">
        <BsFillPersonFill className="blue-icon" />
      </div>
    </nav>
  );
}

export default Navigation;
