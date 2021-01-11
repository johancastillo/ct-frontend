import React from 'react'
import Navigation from './Navigation'
import SecondaryMenu from './SecondaryMenu'
import TopBar from './TopBar'

const Header = () => {
    return (
      <header id="header" className="u-header u-header-left-aligned-nav">
        <div className="u-header__section">

          {/* Topbar */}
          <TopBar />
          {/* End Topbar */}

          {/* Logo-Search-header-icons */}
          <Navigation />
          {/* End Logo-Search-header-icons */}

          {/* Vertical-and-secondary-menu */}
          <SecondaryMenu />
          {/* End Vertical-and-secondary-menu */}
        </div>
      </header>

    )
} 

export default Header
