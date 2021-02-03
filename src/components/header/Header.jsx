import React, { useContext } from 'react'
import AppContext from '../../context/AppContext'
// Components
import Navigation from '../navigation/Navigation'
import SecondaryMenu from '../secondary-menu/SecondaryMenu'
import TopBar from '../top-bar/TopBar'

const Header = () => {
    const {subMenu} = useContext(AppContext)

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
          
          {
            subMenu ?
            <SecondaryMenu />
            :
            ''
          }

          {/* End Vertical-and-secondary-menu */}
        </div>
      </header>

    )
} 

export default Header
