import React from 'react';
import logo from './logo.svg'
import { Link } from 'wouter'
import HeaderSidebar from './HeaderSidebar';
import SearchBar from './SearchBar';
import HeaderIcons from './HeaderIcons';

const Navigation = () => {
  return (
    <div className="py-2 py-xl-5 bg-primary-down-lg">
      <div className="container my-0dot5 my-xl-0">
        <div className="row align-items-center">
          {/* Logo-offcanvas-menu */}
          <div className="col-auto">

            {/* Nav */}
            <nav className="navbar navbar-expand u-header__navbar py-0 justify-content-xl-between max-width-270 min-width-270">

              {/* Logo */}
              <Link href="/">
                <a className="order-1 order-xl-0 navbar-brand u-header__navbar-brand u-header__navbar-brand-center" aria-label="Electro">
                  <img src={logo} alt="logo" />
                </a>
              </Link>
              {/* End Logo */}

              {/* Fullscreen Toggle Button */}
              <button id="sidebarHeaderInvokerMenu" type="button" className="navbar-toggler d-block btn u-hamburger mr-3 mr-xl-0" aria-controls="sidebarHeader" aria-haspopup="true" aria-expanded="false" data-unfold-event="click" data-unfold-hide-on-scroll="false" data-unfold-target="#sidebarHeader1" data-unfold-type="css-animation" data-unfold-animation-in="fadeInLeft" data-unfold-animation-out="fadeOutLeft" data-unfold-duration={500}>
                <span id="hamburgerTriggerMenu" className="u-hamburger__box">
                  <span className="u-hamburger__inner" />
                </span>
              </button>
              {/* End Fullscreen Toggle Button */}

            </nav>
            {/* End Nav */}

            {/* ========== HEADER SIDEBAR ========== */}
            <HeaderSidebar />
            {/* ========== END HEADER SIDEBAR ========== */}

          </div>
          {/* End Logo-offcanvas-menu */}

          {/* Search Bar */}
          <SearchBar />
          {/* End Search Bar */}

          {/* Header Icons */}
          <HeaderIcons />
          {/* End Header Icons */}
        </div>
      </div>
    </div>
  )
}

export default Navigation;
