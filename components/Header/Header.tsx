import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const links = ['projects', 'resume', 'about', 'contact'];

const Header = () => {
  const [nav, setNav] = useState(false);

  const router = useRouter();

  return (
    <header className="bg-dark">
      <div className="container">
        <nav className="navbar navbar-expand-md navbar-dark justify-content-between">
          <Link href="/">
            <a className="navbar-brand">Pherwerz</a>
          </Link>

          <button
            className="navbar-toggler header-btn"
            onClick={() => setNav(!nav)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`collapse navbar-collapse flex-grow-0${
              nav ? ' show' : ''
            }`}
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {links.map((cur, i) => (
                <li className="nav-item" key={i}>
                  <Link href={cur}>
                    <a
                      className={`nav-link text-capitalize${
                        // router.pathname === `/${cur}` ? ' active' : ''
                        ''
                      }`}
                      onClick={() => setNav(false)}
                    >
                      {cur}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
