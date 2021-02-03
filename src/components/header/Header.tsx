import React from 'react'
// Components
import Navigation from '../navigation/Navigation'
import SecondaryMenu from '../secondary-menu/SecondaryMenu'
import TopBar from '../top-bar/TopBar'

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
