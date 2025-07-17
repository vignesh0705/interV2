"use client";
import {  signOut} from "next-auth/react";

import { useRouter } from "next/navigation";

const UserNavbar = () => {
  const router = useRouter();
  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <span className="logo-text">InterV2</span>
        </div>
        <nav className="navbar-links">
          <button onClick={()=> signOut()}>signout</button>
        </nav>
      </div>
    </header>
  );
};

export default UserNavbar;
