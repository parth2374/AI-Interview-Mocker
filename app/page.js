'use client'

import { useRouter } from "next/navigation";
import './pagecss.css';

export default function Home() {

  const router = useRouter();

  const nav = () => {
    router.push('/dashboard');
  }

  return (
    <>
      <header>
        <div className="wrapper">
          <div className="logo">
            <img src='/logo.svg' alt='Logo' />
          </div>
          <ul className="nav-area">
            <li><a href='/'>Home</a></li>
            <li><a href='/dashboard'>Dashboard</a></li>
            <li><a href='/'>Services</a></li>
            <li><a href='/'>Portfolio</a></li>
            <li><a href='/'>Contact</a></li>
          </ul>
        </div>

        <div className="welcome-text">
          <h1>Welcome to AI Interview Mocker</h1>
          <a href='/dashboard'>Start</a>
        </div>
      </header>
    </>
  );
}
