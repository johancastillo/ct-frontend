import React from 'react';
import logo from './logo.svg'
import {Link} from 'react-router-dom'

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
              <a className="order-1 order-xl-0 navbar-brand u-header__navbar-brand u-header__navbar-brand-center" href="../home/index.html" aria-label="Electro">
                <img src={logo} alt="logo" />
              </a>
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
                            <a className="u-header-collapse__nav-link font-weight-bold" href="#">Value of the Day</a>
                          </li>
                          {/* End Value of the Day */}

                          {/* Top 100 Offers */}
                          <li>
                            <a className="u-header-collapse__nav-link font-weight-bold" href="#">Top 100 Offers</a>
                          </li>
                          {/* End Top 100 Offers */}

                          {/* New Arrivals */}
                          <li>
                            <a className="u-header-collapse__nav-link font-weight-bold" href="#">New Arrivals</a>
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
                                  <Link to="/products"><a className="u-header-collapse__submenu-nav-link" href="#">Products</a></Link>
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
            {/* ========== END HEADER SIDEBAR ========== */}
          </div>
          {/* End Logo-offcanvas-menu */}
          {/* Search Bar */}
          <div className="col d-none d-xl-block">
            <form className="js-focus-state">
              <label className="sr-only" htmlFor="searchproduct">Search</label>
              <div className="input-group">
                <input type="email" className="form-control py-2 pl-5 font-size-15 border-right-0 height-40 border-width-2 rounded-left-pill border-primary" name="email" id="searchproduct-item" placeholder="Search for Products" aria-label="Search for Products" aria-describedby="searchProduct1" required />
                <div className="input-group-append">
                  {/* Select */}
                  <select className="js-select selectpicker dropdown-select custom-search-categories-select" data-style="btn height-40 text-gray-60 font-weight-normal border-top border-bottom border-left-0 rounded-0 border-primary border-width-2 pl-0 pr-5 py-2">
                    <option value="one" selected>All Categories</option>
                    <option value="two">Two</option>
                    <option value="three">Three</option>
                    <option value="four">Four</option>
                  </select>
                  {/* End Select */}
                  <button className="btn btn-primary height-40 py-2 px-3 rounded-right-pill" type="button" id="searchProduct1">
                    <span className="ec ec-search font-size-24" />
                  </button>
                </div>
              </div>
            </form>
          </div>
          {/* End Search Bar */}
          {/* Header Icons */}
          <div className="col col-xl-auto text-right text-xl-left pl-0 pl-xl-3 position-static">
            <div className="d-inline-flex">
              <ul className="d-flex list-unstyled mb-0 align-items-center">
                {/* Search */}
                <li className="col d-xl-none px-2 px-sm-3 position-static">
                  <a id="searchClassicInvoker" className="font-size-22 text-gray-90 text-lh-1 btn-text-secondary" href="javascript:;" role="button" data-toggle="tooltip" data-placement="top" title="Search" aria-controls="searchClassic" aria-haspopup="true" aria-expanded="false" data-unfold-target="#searchClassic" data-unfold-type="css-animation" data-unfold-duration={300} data-unfold-delay={300} data-unfold-hide-on-scroll="true" data-unfold-animation-in="slideInUp" data-unfold-animation-out="fadeOut">
                    <span className="ec ec-search" />
                  </a>
                  {/* Input */}
                  <div id="searchClassic" className="dropdown-menu dropdown-unfold dropdown-menu-right left-0 mx-2" aria-labelledby="searchClassicInvoker">
                    <form className="js-focus-state input-group px-3">
                      <input className="form-control" type="search" placeholder="Search Product" />
                      <div className="input-group-append">
                        <button className="btn btn-primary px-3" type="button"><i className="font-size-18 ec ec-search" /></button>
                      </div>
                    </form>
                  </div>
                  {/* End Input */}
                </li>
                {/* End Search */}
                <li className="col d-none d-xl-block"><a href="../shop/compare.html" className="text-gray-90" data-toggle="tooltip" data-placement="top" title="Compare"><i className="font-size-22 ec ec-compare" /></a></li>
                <li className="col d-none d-xl-block"><a href="../shop/wishlist.html" className="text-gray-90" data-toggle="tooltip" data-placement="top" title="Favorites"><i className="font-size-22 ec ec-favorites" /></a></li>
                <li className="col d-xl-none px-2 px-sm-3"><a href="../shop/my-account.html" className="text-gray-90" data-toggle="tooltip" data-placement="top" title="My Account"><i className="font-size-22 ec ec-user" /></a></li>
                <li className="col pr-xl-0 px-2 px-sm-3 d-xl-none">
                  <a href="../shop/cart.html" className="text-gray-90 position-relative d-flex " data-toggle="tooltip" data-placement="top" title="Cart">
                    <i className="font-size-22 ec ec-shopping-bag" />
                    <span className="bg-lg-down-black width-22 height-22 bg-primary position-absolute d-flex align-items-center justify-content-center rounded-circle left-12 top-8 font-weight-bold font-size-12">2</span>
                    <span className="d-none d-xl-block font-weight-bold font-size-16 text-gray-90 ml-3">$1785.00</span>
                  </a>
                </li>
                <li className="col pr-xl-0 px-2 px-sm-3 d-none d-xl-block">
                  <div id="basicDropdownHoverInvoker" className="text-gray-90 position-relative d-flex " data-toggle="tooltip" data-placement="top" title="Cart" aria-controls="basicDropdownHover" aria-haspopup="true" aria-expanded="false" data-unfold-event="click" data-unfold-target="#basicDropdownHover" data-unfold-type="css-animation" data-unfold-duration={300} data-unfold-delay={300} data-unfold-hide-on-scroll="true" data-unfold-animation-in="slideInUp" data-unfold-animation-out="fadeOut">
                    <i className="font-size-22 ec ec-shopping-bag" />
                    <span className="bg-lg-down-black width-22 height-22 bg-primary position-absolute d-flex align-items-center justify-content-center rounded-circle left-12 top-8 font-weight-bold font-size-12">2</span>
                    <span className="d-none d-xl-block font-weight-bold font-size-16 text-gray-90 ml-3">$1785.00</span>
                  </div>
                  <div id="basicDropdownHover" className="cart-dropdown dropdown-menu dropdown-unfold border-top border-top-primary mt-3 border-width-2 border-left-0 border-right-0 border-bottom-0 left-auto right-0" aria-labelledby="basicDropdownHoverInvoker">
                    <ul className="list-unstyled px-3 pt-3">
                      <li className="border-bottom pb-3 mb-3">
                        <div>
                          <ul className="list-unstyled row mx-n2">
                            <li className="px-2 col-auto">
                              <img className="img-fluid" src="../../assets/img/75X75/img1.jpg" alt="Image Description" />
                            </li>
                            <li className="px-2 col">
                              <h5 className="text-blue font-size-14 font-weight-bold">Ultra Wireless S50 Headphones S50 with Bluetooth</h5>
                              <span className="font-size-14">1 × $1,100.00</span>
                            </li>
                            <li className="px-2 col-auto">
                              <a href="#" className="text-gray-90"><i className="ec ec-close-remove" /></a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="border-bottom pb-3 mb-3">
                        <div>
                          <ul className="list-unstyled row mx-n2">
                            <li className="px-2 col-auto">
                              <img className="img-fluid" src="../../assets/img/75X75/img2.jpg" alt="Image Description" />
                            </li>
                            <li className="px-2 col">
                              <h5 className="text-blue font-size-14 font-weight-bold">Widescreen NX Mini F1 SMART NX</h5>
                              <span className="font-size-14">1 × $685.00</span>
                            </li>
                            <li className="px-2 col-auto">
                              <a href="#" className="text-gray-90"><i className="ec ec-close-remove" /></a>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                    <div className="flex-center-between px-4 pt-2">
                      <a href="../shop/cart.html" className="btn btn-soft-secondary mb-3 mb-md-0 font-weight-normal px-5 px-md-4 px-lg-5">View cart</a>
                      <a href="../shop/checkout.html" className="btn btn-primary-dark-w ml-md-2 px-5 px-md-4 px-lg-5">Checkout</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* End Header Icons */}
        </div>
      </div>
    </div>
    )
}

export default Navigation;
