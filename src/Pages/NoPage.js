import React from 'react';
import Navbar from "../Components/Navbar.js";

export default function NoPage() {
  return (
    <div>
      <Navbar />
      <h3 className="error404">Page does not exist</h3>
    </div>
  )
};
