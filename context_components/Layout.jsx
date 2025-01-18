import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <h1>Task Management Application</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/new">New Task</Link>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
