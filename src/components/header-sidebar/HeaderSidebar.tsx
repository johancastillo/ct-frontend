import React from 'react'
import logo from './logo.svg'
import {Link} from 'react-router-dom'

const HeaderSidebar = () => {
  return (
    <aside id="sidebarHeader1" className="u-sidebar u-sidebar--left" aria-labelledby="sidebarHeaderInvoker">
      <div className="u-sidebar__scroller">
        <div className="u-sidebar__container">
          <div className="u-header-sidebar__footer-offset">
            {/* Toggle Button */}
            <div className="position-absolute top-0 right-0 z-index-2 pt-4 pr-4 bg-white">
              <button type="button" className="close ml-auto" aria-controls="sidebarHeader" aria-haspopup="true" aria-expanded="false" data-unfold-event="click" data-unfold-hide-on-scroll="false" data-unfold-target="#sidebarHeader1" data-unfold-type="css-animation" data-unfold-animation-in="fadeInLeft" data-unfold-animation-out="fadeOutLeft" data-unfold-duration={500}>
                <span aria-hidden="true"><i className="ec ec-close-remove text-gray-90 font-size-20" /></span>
              </button>
            </div>
            {/* End Toggle Button */}
            {/* Content */}
            <div className="js-scrollbar u-sidebar__body">
              <div id="headerSidebarContent" className="u-sidebar__content u-header-sidebar__content">

                {/* Logo */}
                <a className="navbar-brand u-header__navbar-brand u-header__navbar-brand-center mb-3" href="index.html" aria-label="Electro">
                  <img src={logo} alt="logo" />
                </a>
                {/* End Logo */}

                {/* List */}
                <ul id="headerSidebarList" className="u-header-collapse__nav">

                  {/* Value of the Day */}
                  <li>
                    <Link to="/" className="u-header-collapse__nav-link font-weight-bold">
                      Value of the Day
                    </Link>
                  </li>
                  {/* End Value of the Day */}

                  {/* Top 100 Offers */}
                  <li>
                    <Link to="/" className="u-header-collapse__nav-link font-weight-bold">
                      Top 100 Offers
                    </Link>
                  </li>
                  {/* End Top 100 Offers */}

                  {/* New Arrivals */}
                  <li>
                    <Link to="/" className="u-header-collapse__nav-link font-weight-bold">
                      New Arrivals
                    </Link>
                  </li>
                  {/* End New Arrivals */}

                  {/* Computers & Accessories */}
                  <li className="u-has-submenu u-header-collapse__submenu">

                    <a className="u-header-collapse__nav-link u-header-collapse__nav-pointer" href="javascript:;" data-target="#headerSidebarComputersCollapse" role="button" data-toggle="collapse" aria-expanded="false" aria-controls="headerSidebarComputersCollapse">
                      Pages
                    </a>

                    <div id="headerSidebarComputersCollapse" className="collapse" data-parent="#headerSidebarContent">
                      <ul className="u-header-collapse__nav-list">
                        <li>
                            <Link to="/" className="u-header-collapse__submenu-nav-link">
                              Home
                            </Link>
                        </li>

                        <li>
                            <Link to="/home" className="u-header-collapse__submenu-nav-link">
                              Home Two
                            </Link>
                        </li>

                        <li>
                            <Link to="/products" className="u-header-collapse__submenu-nav-link">
                              Products
                            </Link>
                        </li>

                        <li><a className="u-header-collapse__submenu-nav-link" href="#">Laptops, Desktops &amp; Monitors</a></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">Printers &amp; Ink</a></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">Networking &amp; Internet Devices</a></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">Computer Accessories</a></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">Software</a></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">All Office &amp; Stationery</a></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">All Electronics</a></li>
                      </ul>
                    </div>
                  </li>
                  {/* End Computers & Accessories */}
                  {/* Cameras, Audio & Video */}
                  <li className="u-has-submenu u-header-collapse__submenu">
                    <a className="u-header-collapse__nav-link u-header-collapse__nav-pointer" href="javascript:;" data-target="#headerSidebarCamerasCollapse" role="button" data-toggle="collapse" aria-expanded="false" aria-controls="headerSidebarCamerasCollapse">
                      Cameras, Audio &amp; Video
                            </a>
                    <div id="headerSidebarCamerasCollapse" className="collapse" data-parent="#headerSidebarContent">
                      <ul className="u-header-collapse__nav-list">
                        <li><span className="u-header-sidebar__sub-menu-title">Cameras &amp; Photography</span></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">Lenses</a></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">Camera Accessories</a></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">Security &amp; Surveillance</a></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">Binoculars &amp; Telescopes</a></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">Camcorders</a></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">Software</a></li>
                        <li><span className="u-header-sidebar__sub-menu-title">Audio &amp; Video</span></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">All Audio &amp; Video</a></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">Headphones &amp; Speakers</a></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">All Electronics</a></li>
                      </ul>
                    </div>
                  </li>
                  {/* End Cameras, Audio & Video */}
                  {/* Mobiles & Tablets */}
                  <li className="u-has-submenu u-header-collapse__submenu">
                    <a className="u-header-collapse__nav-link u-header-collapse__nav-pointer" href="javascript:;" data-target="#headerSidebarMobilesCollapse" role="button" data-toggle="collapse" aria-expanded="false" aria-controls="headerSidebarMobilesCollapse">
                      Mobiles &amp; Tablets
                            </a>
                    <div id="headerSidebarMobilesCollapse" className="collapse" data-parent="#headerSidebarContent">
                      <ul className="u-header-collapse__nav-list">
                        <li><span className="u-header-sidebar__sub-menu-title">Mobiles &amp; Tablets</span></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">All Mobile Phones</a></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">Smartphones</a></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">Refurbished Mobiles</a></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">Cases &amp; Covers</a></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">All Mobile Accessories</a></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">Cases &amp; Covers</a></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">All Tablets</a></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">Tablet Accessories</a></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">All Electronics</a></li>
                      </ul>
                    </div>
                  </li>
                  {/* End Mobiles & Tablets */}
                  {/* Movies, Music & Video */}
                  <li className="u-has-submenu u-header-collapse__submenu">
                    <a className="u-header-collapse__nav-link u-header-collapse__nav-pointer" href="javascript:;" data-target="#headerSidebarMoviesCollapse" role="button" data-toggle="collapse" aria-expanded="false" aria-controls="headerSidebarMoviesCollapse">
                      Movies, Music &amp; Video
                            </a>
                    <div id="headerSidebarMoviesCollapse" className="collapse" data-parent="#headerSidebarContent">
                      <ul className="u-header-collapse__nav-list">
                        <li><span className="u-header-sidebar__sub-menu-title">Movies &amp; TV Shows</span></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">All Movies &amp; TV Shows</a></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">All English</a></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">All Hindi</a></li>
                        <li><span className="u-header-sidebar__sub-menu-title">Video Games</span></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">PC Games</a></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">Consoles</a></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">Accessories</a></li>
                        <li><span className="u-header-sidebar__sub-menu-title">Music</span></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">All Music</a></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">Indian Classical</a></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">Musical Instruments</a></li>
                      </ul>
                    </div>
                  </li>
                  {/* End Movies, Music & Video */}
                  {/* TV & Audio */}
                  <li className="u-has-submenu u-header-collapse__submenu">
                    <a className="u-header-collapse__nav-link u-header-collapse__nav-pointer" href="javascript:;" data-target="#headerSidebarTvCollapse" role="button" data-toggle="collapse" aria-expanded="false" aria-controls="headerSidebarTvCollapse">
                      TV &amp; Audio
                            </a>
                    <div id="headerSidebarTvCollapse" className="collapse" data-parent="#headerSidebarContent">
                      <ul className="u-header-collapse__nav-list">
                        <li><span className="u-header-sidebar__sub-menu-title">Audio &amp; Video</span></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">All Audio &amp; Video</a></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">Televisions</a></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">Headphones</a></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">Speakers</a></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">Audio &amp; Video Accessories</a></li>
                        <li><span className="u-header-sidebar__sub-menu-title">Music</span></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">Televisions</a></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">Headphones</a></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">Electro Home Appliances</a></li>
                      </ul>
                    </div>
                  </li>
                  {/* End TV & Audio */}
                  {/* Watches & Eyewear */}
                  <li className="u-has-submenu u-header-collapse__submenu">
                    <a className="u-header-collapse__nav-link u-header-collapse__nav-pointer" href="javascript:;" data-target="#headerSidebarWatchesCollapse" role="button" data-toggle="collapse" aria-expanded="false" aria-controls="headerSidebarWatchesCollapse">
                      Watches &amp; Eyewear
                            </a>
                    <div id="headerSidebarWatchesCollapse" className="collapse" data-parent="#headerSidebarContent">
                      <ul className="u-header-collapse__nav-list">
                        <li><span className="u-header-sidebar__sub-menu-title">Watches</span></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">All Watches</a></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">Men's Watches</a></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">Women's Watches</a></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">Premium Watches</a></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">Deals on Watches</a></li>
                        <li><span className="u-header-sidebar__sub-menu-title">Eyewear</span></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">Men's Sunglasses</a></li>
                      </ul>
                    </div>
                  </li>
                  {/* End Watches & Eyewear */}
                  {/* Car, Motorbike & Industrial */}
                  <li className="u-has-submenu u-header-collapse__submenu">
                    <a className="u-header-collapse__nav-link u-header-collapse__nav-pointer" href="javascript:;" data-target="#headerSidebarCarCollapse" role="button" data-toggle="collapse" aria-expanded="false" aria-controls="headerSidebarCarCollapse">
                      Car, Motorbike &amp; Industrial
                            </a>
                    <div id="headerSidebarCarCollapse" className="collapse" data-parent="#headerSidebarContent">
                      <ul className="u-header-collapse__nav-list">
                        <li><span className="u-header-sidebar__sub-menu-title">Car &amp; Motorbike</span></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">All Cars &amp; Bikes</a></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">Car &amp; Bike Care</a></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">Lubricants</a></li>
                        <li><span className="u-header-sidebar__sub-menu-title">Shop for Bike</span></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">Helmets &amp; Gloves</a></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">Bike Parts</a></li>
                        <li><span className="u-header-sidebar__sub-menu-title">Industrial Supplies</span></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">All Industrial Supplies</a></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">Lab &amp; Scientific</a></li>
                      </ul>
                    </div>
                  </li>
                  {/* End Car, Motorbike & Industrial */}
                  {/* Accessories */}
                  <li className="u-has-submenu u-header-collapse__submenu">
                    <a className="u-header-collapse__nav-link u-header-collapse__nav-pointer" href="javascript:;" data-target="#headerSidebarAccessoriesCollapse" role="button" data-toggle="collapse" aria-expanded="false" aria-controls="headerSidebarAccessoriesCollapse">
                      Accessories
                            </a>
                    <div id="headerSidebarAccessoriesCollapse" className="collapse" data-parent="#headerSidebarContent">
                      <ul className="u-header-collapse__nav-list">
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">Cases</a></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">Chargers</a></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">Headphone Accessories</a></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">Headphone Cases</a></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">Headphones</a></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">All Industrial Supplies</a></li>
                        <li><a className="u-header-collapse__submenu-nav-link" href="#">Lab &amp; Scientific</a></li>
                      </ul>
                    </div>
                  </li>
                  {/* End Accessories */}
                </ul>
                {/* End List */}
              </div>
            </div>
            {/* End Content */}
          </div>
          {/* Footer */}
          <footer id="SVGwaveWithDots" className="svg-preloader u-header-sidebar__footer">
            <ul className="list-inline mb-0">
              <li className="list-inline-item pr-3">
                <a className="u-header-sidebar__footer-link text-gray-90" href="#">Privacy</a>
              </li>
              <li className="list-inline-item pr-3">
                <a className="u-header-sidebar__footer-link text-gray-90" href="#">Terms</a>
              </li>
              <li className="list-inline-item">
                <a className="u-header-sidebar__footer-link text-gray-90" href="#">
                  <i className="fas fa-info-circle" />
                </a>
              </li>
            </ul>
            {/* SVG Background Shape */}
            <div className="position-absolute right-0 bottom-0 left-0 z-index-n1">
              <img className="js-svg-injector" src="../../assets/svg/components/wave-bottom-with-dots.svg" alt="Image Description" data-parent="#SVGwaveWithDots" />
            </div>
            {/* End SVG Background Shape */}
          </footer>
          {/* End Footer */}
        </div>
      </div>
    </aside>
  )
}

export default HeaderSidebar

