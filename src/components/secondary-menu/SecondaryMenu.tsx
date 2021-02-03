import React from 'react'

const SecondaryMenu = () => {
  return (
    <div className="d-none d-xl-block container">
      <div className="row">
        {/* Vertical Menu */}
        <div className="col-md-auto d-none d-xl-block">
          <div className="max-width-270 min-width-270">
            {/* Basics Accordion */}
            <div id="basicsAccordion">
              {/* Card */}
              <div className="card border-0">
                <div className="card-header card-collapse border-0" id="basicsHeadingOne">
                  <button type="button" className="btn-link btn-remove-focus btn-block d-flex card-btn py-3 text-lh-1 px-4 shadow-none btn-primary rounded-top-lg border-0 font-weight-bold text-gray-90" data-toggle="collapse" data-target="#basicsCollapseOne" aria-expanded="true" aria-controls="basicsCollapseOne">

                    <span className="ml-0 text-gray-90 mr-2">
                      <span className="fa fa-list-ul" />
                    </span>

                    <span className="pl-1 text-gray-90">Departmentos</span>
                  </button>
                </div>
                <div id="basicsCollapseOne" className="collapse show vertical-menu" aria-labelledby="basicsHeadingOne" data-parent="#basicsAccordion">
                  <div className="card-body p-0">
                    <nav className="js-mega-menu navbar navbar-expand-xl u-header__navbar u-header__navbar--no-space hs-menu-initialized">
                      <div id="navBar" className="collapse navbar-collapse u-header__navbar-collapse">
                        <ul className="navbar-nav u-header__navbar-nav">
                          <li className="nav-item u-header__nav-item" data-event="hover" data-position="left">
                            <a href="#" className="nav-link u-header__nav-link font-weight-bold">Todo ofertas</a>
                          </li>

                          {/* Nav Item MegaMenu */}
                          <li className="nav-item hs-has-mega-menu u-header__nav-item" data-event="hover" data-animation-in="slideInUp" data-animation-out="fadeOut" data-position="left">
                            <a id="basicMegaMenu" className="nav-link u-header__nav-link u-header__nav-link-toggle font-weight-bold" href="javascript:;" aria-haspopup="true" aria-expanded="false">
                              Servicios
                            </a>
                            {/* Nav Item - Mega Menu */}
                            <div className="hs-mega-menu vmm-tfw u-header__sub-menu" aria-labelledby="basicMegaMenu">
                              <div className="vmm-bg">
                                <img className="img-fluid" src="../../assets/img/500X400/img1.png" alt="Image Description" />
                              </div>
                              <div className="row u-header__mega-menu-wrapper">
                                <div className="col mb-3 mb-sm-0">
                                  <span className="u-header__sub-menu-title">Computers &amp; Accessories</span>
                                  <ul className="u-header__sub-menu-nav-group mb-3">
                                    <li><a className="nav-link u-header__sub-menu-nav-link" href="#">All Computers &amp; Accessories</a></li>
                                    <li><a className="nav-link u-header__sub-menu-nav-link" href="#">Laptops, Desktops &amp; Monitors</a></li>
                                    <li><a className="nav-link u-header__sub-menu-nav-link" href="#">Printers &amp; Ink</a></li>
                                    <li><a className="nav-link u-header__sub-menu-nav-link" href="#">Networking &amp; Internet Devices</a></li>
                                    <li><a className="nav-link u-header__sub-menu-nav-link" href="#">Computer Accessories</a></li>
                                    <li><a className="nav-link u-header__sub-menu-nav-link" href="#">Software</a></li>
                                    <li>
                                      <a className="nav-link u-header__sub-menu-nav-link u-nav-divider border-top pt-2 flex-column align-items-start" href="#">
                                        <div>All Electronics</div>
                                        <div className="u-nav-subtext font-size-11 text-gray-30">Discover more products</div>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col mb-3 mb-sm-0">
                                  <span className="u-header__sub-menu-title">Office &amp; Stationery</span>
                                  <ul className="u-header__sub-menu-nav-group">
                                    <li>
                                      <a className="nav-link u-header__sub-menu-nav-link" href="#">All Office &amp; Stationery</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            {/* End Nav Item - Mega Menu */}
                          </li>
                          {/* End Nav Item MegaMenu*/}

                          <li className="nav-item u-header__nav-item" data-event="hover" data-position="left">
                            <a href="#" className="nav-link u-header__nav-link font-weight-bold">Nuevos lanzamientos</a>
                          </li>

                          {/* Nav Item MegaMenu */}
                          <li className="nav-item hs-has-mega-menu u-header__nav-item" data-event="hover" data-animation-in="slideInUp" data-animation-out="fadeOut" data-position="left">
                            <a id="basicMegaMenu" className="nav-link u-header__nav-link u-header__nav-link-toggle" href="javascript:;" aria-haspopup="true" aria-expanded="false">Computers &amp; Accessories</a>
                            {/* Nav Item - Mega Menu */}
                            <div className="hs-mega-menu vmm-tfw u-header__sub-menu" aria-labelledby="basicMegaMenu">
                              <div className="vmm-bg">
                                <img className="img-fluid" src="../../assets/img/500X400/img1.png" alt="Image Description" />
                              </div>
                              <div className="row u-header__mega-menu-wrapper">
                                <div className="col mb-3 mb-sm-0">
                                  <span className="u-header__sub-menu-title">Computers &amp; Accessories</span>
                                  <ul className="u-header__sub-menu-nav-group mb-3">
                                    <li><a className="nav-link u-header__sub-menu-nav-link" href="#">All Computers &amp; Accessories</a></li>
                                    <li><a className="nav-link u-header__sub-menu-nav-link" href="#">Laptops, Desktops &amp; Monitors</a></li>
                                    <li><a className="nav-link u-header__sub-menu-nav-link" href="#">Printers &amp; Ink</a></li>
                                    <li><a className="nav-link u-header__sub-menu-nav-link" href="#">Networking &amp; Internet Devices</a></li>
                                    <li><a className="nav-link u-header__sub-menu-nav-link" href="#">Computer Accessories</a></li>
                                    <li><a className="nav-link u-header__sub-menu-nav-link" href="#">Software</a></li>
                                    <li>
                                      <a className="nav-link u-header__sub-menu-nav-link u-nav-divider border-top pt-2 flex-column align-items-start" href="#">
                                        <div>All Electronics</div>
                                        <div className="u-nav-subtext font-size-11 text-gray-30">Discover more products</div>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col mb-3 mb-sm-0">
                                  <span className="u-header__sub-menu-title">Office &amp; Stationery</span>
                                  <ul className="u-header__sub-menu-nav-group">
                                    <li>
                                      <a className="nav-link u-header__sub-menu-nav-link" href="#">All Office &amp; Stationery</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            {/* End Nav Item - Mega Menu */}
                          </li>
                          {/* End Nav Item MegaMenu*/}

                          {/* Nav Item MegaMenu */}
                          <li className="nav-item hs-has-mega-menu u-header__nav-item" data-event="hover" data-position="left">
                            <a id="basicMegaMenu1" className="nav-link u-header__nav-link u-header__nav-link-toggle" href="javascript:;" aria-haspopup="true" aria-expanded="false">Cameras, Audio &amp; Video</a>
                            {/* Nav Item - Mega Menu */}
                            <div className="hs-mega-menu vmm-tfw u-header__sub-menu" aria-labelledby="basicMegaMenu1">
                              <div className="vmm-bg">
                                <img className="img-fluid" src="../../assets/img/500X400/img4.png" alt="Image Description" />
                              </div>
                              <div className="row u-header__mega-menu-wrapper">
                                <div className="col mb-3 mb-sm-0">
                                  <span className="u-header__sub-menu-title">Cameras &amp; Photography</span>
                                  <ul className="u-header__sub-menu-nav-group mb-3">
                                    <li><a className="nav-link u-header__sub-menu-nav-link" href="#">Lenses</a></li>
                                    <li><a className="nav-link u-header__sub-menu-nav-link" href="#">Camera Accessories</a></li>
                                    <li><a className="nav-link u-header__sub-menu-nav-link" href="#">Security &amp; Surveillance</a></li>
                                    <li><a className="nav-link u-header__sub-menu-nav-link" href="#">Binoculars &amp; Telescopes</a></li>
                                    <li><a className="nav-link u-header__sub-menu-nav-link" href="#">Camcorders</a></li>
                                    <li><a className="nav-link u-header__sub-menu-nav-link" href="#">Software</a></li>
                                    <li>
                                      <a className="nav-link u-header__sub-menu-nav-link u-nav-divider border-top pt-2 flex-column align-items-start" href="#">
                                        <div>All Electronics</div>
                                        <div className="u-nav-subtext font-size-11 text-gray-30">Discover more products</div>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col mb-3 mb-sm-0">
                                  <span className="u-header__sub-menu-title">Audio &amp; Video</span>
                                  <ul className="u-header__sub-menu-nav-group">
                                    <li><a className="nav-link u-header__sub-menu-nav-link" href="#">All Audio &amp; Video</a></li>
                                    <li><a className="nav-link u-header__sub-menu-nav-link" href="#">Headphones &amp; Speakers</a></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            {/* End Nav Item - Mega Menu */}
                          </li>
                          {/* End Nav Item MegaMenu*/}
                          {/* Nav Item MegaMenu */}
                          <li className="nav-item hs-has-mega-menu u-header__nav-item" data-event="hover" data-position="left">
                            <a id="basicMegaMenu2" className="nav-link u-header__nav-link u-header__nav-link-toggle" href="javascript:;" aria-haspopup="true" aria-expanded="false">Mobiles &amp; Tablets</a>
                            {/* Nav Item - Mega Menu */}
                            <div className="hs-mega-menu vmm-tfw u-header__sub-menu vmm-bg-extended" aria-labelledby="basicMegaMenu2">
                              <div className="vmm-bg">
                                <img className="img-fluid" src="../../assets/img/500X400/img3.png" alt="Image Description" />
                              </div>
                              <div className="row u-header__mega-menu-wrapper">
                                <div className="col mb-3 mb-sm-0">
                                  <span className="u-header__sub-menu-title">Mobiles &amp; Tablets</span>
                                  <ul className="u-header__sub-menu-nav-group mb-3">
                                    <li><a className="nav-link u-header__sub-menu-nav-link" href="#">All Mobile Phones</a></li>
                                    <li><a className="nav-link u-header__sub-menu-nav-link" href="#">Smartphones</a></li>
                                    <li><a className="nav-link u-header__sub-menu-nav-link" href="#">Refurbished Mobiles</a></li>
                                    <li><a className="nav-link u-header__sub-menu-nav-link border-top pt-2" href="#">All Mobile Accessories</a></li>
                                    <li><a className="nav-link u-header__sub-menu-nav-link" href="#">Cases &amp; Covers</a></li>
                                    <li>
                                      <a className="nav-link u-header__sub-menu-nav-link u-nav-divider border-top pt-2 flex-column align-items-start" href="#">
                                        <div>All Electronics</div>
                                        <div className="u-nav-subtext font-size-11 text-gray-30">Discover more products</div>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col mb-3 mb-sm-0">
                                  <ul className="u-header__sub-menu-nav-group">
                                    <li><a className="nav-link u-header__sub-menu-nav-link" href="#">All Tablets</a></li>
                                    <li><a className="nav-link u-header__sub-menu-nav-link" href="#">Tablet Accessories</a></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            {/* End Nav Item - Mega Menu */}
                          </li>
                          {/* End Nav Item MegaMenu*/}
                          {/* Nav Item MegaMenu */}
                          <li className="nav-item hs-has-mega-menu u-header__nav-item" data-event="hover" data-position="left">
                            <a id="basicMegaMenu3" className="nav-link u-header__nav-link u-header__nav-link-toggle" href="javascript:;" aria-haspopup="true" aria-expanded="false">Movies, Music &amp; Video Game</a>
                            {/* Nav Item - Mega Menu */}
                            <div className="hs-mega-menu vmm-tfw u-header__sub-menu" aria-labelledby="basicMegaMenu3">
                              <div className="vmm-bg">
                                <img className="img-fluid" src="../../assets/img/500X400/img2.png" alt="Image Description" />
                              </div>
                              <div className="row u-header__mega-menu-wrapper">
                                <div className="col mb-3 mb-sm-0">
                                  <span className="u-header__sub-menu-title">Movies &amp; TV Shows</span>
                                  <ul className="u-header__sub-menu-nav-group mb-3">
                                    <li><a className="nav-link u-header__sub-menu-nav-link" href="#">All Movies &amp; TV Shows</a></li>
                                    <li><a className="nav-link u-header__sub-menu-nav-link" href="#">All English</a></li>
                                    <li><a className="nav-link u-header__sub-menu-nav-link border-bottom pb-3" href="#">All Hindi</a></li>
                                  </ul>
                                  <span className="u-header__sub-menu-title">Video Games</span>
                                  <ul className="u-header__sub-menu-nav-group">
                                    <li><a className="nav-link u-header__sub-menu-nav-link" href="#">PC Games</a></li>
                                    <li><a className="nav-link u-header__sub-menu-nav-link" href="#">Consoles</a></li>
                                    <li><a className="nav-link u-header__sub-menu-nav-link" href="#">Accessories</a></li>
                                  </ul>
                                </div>
                                <div className="col mb-3 mb-sm-0">
                                  <span className="u-header__sub-menu-title">Music</span>
                                  <ul className="u-header__sub-menu-nav-group">
                                    <li><a className="nav-link u-header__sub-menu-nav-link" href="#">All Music</a></li>
                                    <li><a className="nav-link u-header__sub-menu-nav-link" href="#">Indian Classical</a></li>
                                    <li><a className="nav-link u-header__sub-menu-nav-link" href="#">Musical Instruments</a></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            {/* End Nav Item - Mega Menu */}
                          </li>
                          {/* End Nav Item MegaMenu*/}
                          {/* Nav Item MegaMenu */}
                          <li className="nav-item hs-has-mega-menu u-header__nav-item" data-event="hover" data-position="left">
                            <a id="basicMegaMenu4" className="nav-link u-header__nav-link u-header__nav-link-toggle" href="javascript:;" aria-haspopup="true" aria-expanded="false">TV &amp; Audio</a>
                            {/* Nav Item - Mega Menu */}
                            <div className="hs-mega-menu vmm-tfw u-header__sub-menu" aria-labelledby="basicMegaMenu4">
                              <div className="vmm-bg">
                                <img className="img-fluid" src="../../assets/img/500X400/img5.png" alt="Image Description" />
                              </div>
                              <div className="row u-header__mega-menu-wrapper">
                                <div className="col mb-3 mb-sm-0">
                                  <span className="u-header__sub-menu-title">Audio &amp; Video</span>
                                  <ul className="u-header__sub-menu-nav-group mb-3">
                                    <li><a className="nav-link u-header__sub-menu-nav-link" href="#">All Audio &amp; Video</a></li>
                                    <li><a className="nav-link u-header__sub-menu-nav-link" href="#">Televisions</a></li>
                                    <li><a className="nav-link u-header__sub-menu-nav-link" href="#">Headphones</a></li>
                                    <li><a className="nav-link u-header__sub-menu-nav-link" href="#">Speakers</a></li>
                                    <li><a className="nav-link u-header__sub-menu-nav-link" href="#">Audio &amp; Video Accessories</a></li>
                                    <li>
                                      <a className="nav-link u-header__sub-menu-nav-link u-nav-divider border-top pt-2 flex-column align-items-start" href="#">
                                        <div>Electro Home Appliances</div>
                                        <div className="u-nav-subtext font-size-11 text-gray-30">Available in select cities</div>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col mb-3 mb-sm-0">
                                  <span className="u-header__sub-menu-title">Music</span>
                                  <ul className="u-header__sub-menu-nav-group">
                                    <li><a className="nav-link u-header__sub-menu-nav-link" href="#">Televisions</a></li>
                                    <li><a className="nav-link u-header__sub-menu-nav-link" href="#">Headphones</a></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            {/* End Nav Item - Mega Menu */}
                          </li>
                          {/* End Nav Item MegaMenu*/}
                          {/* Nav Item MegaMenu */}
                          <li className="nav-item hs-has-mega-menu u-header__nav-item" data-event="hover" data-position="left">
                            <a id="basicMegaMenu5" className="nav-link u-header__nav-link u-header__nav-link-toggle" href="javascript:;" aria-haspopup="true" aria-expanded="false">Watches &amp; Eyewear</a>
                            {/* Nav Item - Mega Menu */}
                            <div className="hs-mega-menu vmm-tfw u-header__sub-menu" aria-labelledby="basicMegaMenu5">
                              <div className="vmm-bg">
                                <img className="img-fluid" src="../../assets/img/500X400/img6.png" alt="Image Description" />
                              </div>
                              <div className="row u-header__mega-menu-wrapper">
                                <div className="col mb-3 mb-sm-0">
                                  <span className="u-header__sub-menu-title">Watches</span>
                                  <ul className="u-header__sub-menu-nav-group mb-3">
                                    <li><a className="nav-link u-header__sub-menu-nav-link" href="#">All Watches</a></li>
                                    <li><a className="nav-link u-header__sub-menu-nav-link" href="#">Men's Watches</a></li>
                                    <li><a className="nav-link u-header__sub-menu-nav-link" href="#">Women's Watches</a></li>
                                    <li><a className="nav-link u-header__sub-menu-nav-link" href="#">Premium Watches</a></li>
                                    <li><a className="nav-link u-header__sub-menu-nav-link" href="#">Deals on Watches</a></li>
                                  </ul>
                                </div>
                                <div className="col mb-3 mb-sm-0">
                                  <span className="u-header__sub-menu-title">Eyewear</span>
                                  <ul className="u-header__sub-menu-nav-group">
                                    <li><a className="nav-link u-header__sub-menu-nav-link" href="#">Men's Sunglasses</a></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            {/* End Nav Item - Mega Menu */}
                          </li>
                          {/* End Nav Item MegaMenu*/}
                          {/* Nav Item MegaMenu */}
                          <li className="nav-item hs-has-mega-menu u-header__nav-item" data-event="hover" data-position="left">
                            <a id="basicMegaMenu3" className="nav-link u-header__nav-link u-header__nav-link-toggle" href="javascript:;" aria-haspopup="true" aria-expanded="false">Car, Motorbike &amp; Industrial</a>
                            {/* Nav Item - Mega Menu */}
                            <div className="hs-mega-menu vmm-tfw u-header__sub-menu" aria-labelledby="basicMegaMenu3">
                              <div className="vmm-bg">
                                <img className="img-fluid" src="../../assets/img/500X400/img7.png" alt="Image Description" />
                              </div>
                              <div className="row u-header__mega-menu-wrapper">
                                <div className="col mb-3 mb-sm-0">
                                  <span className="u-header__sub-menu-title">Car &amp; Motorbike</span>
                                  <ul className="u-header__sub-menu-nav-group mb-3">
                                    <li><a className="nav-link u-header__sub-menu-nav-link" href="#">All Cars &amp; Bikes</a></li>
                                    <li><a className="nav-link u-header__sub-menu-nav-link" href="#">Car &amp; Bike Care</a></li>
                                    <li><a className="nav-link u-header__sub-menu-nav-link border-bottom pb-3" href="#">Lubricants</a></li>
                                  </ul>
                                  <span className="u-header__sub-menu-title">Shop for Bike</span>
                                  <ul className="u-header__sub-menu-nav-group">
                                    <li><a className="nav-link u-header__sub-menu-nav-link" href="#">Helmets &amp; Gloves</a></li>
                                    <li><a className="nav-link u-header__sub-menu-nav-link" href="#">Bike Parts</a></li>
                                  </ul>
                                </div>
                                <div className="col mb-3 mb-sm-0">
                                  <span className="u-header__sub-menu-title">Industrial Supplies</span>
                                  <ul className="u-header__sub-menu-nav-group">
                                    <li><a className="nav-link u-header__sub-menu-nav-link" href="#">All Industrial Supplies</a></li>
                                    <li><a className="nav-link u-header__sub-menu-nav-link" href="#">Lab &amp; Scientific</a></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            {/* End Nav Item - Mega Menu */}
                          </li>
                          {/* End Nav Item MegaMenu*/}
                          {/* Nav Item */}
                          <li className="nav-item hs-has-sub-menu u-header__nav-item" data-event="click" data-animation-in="slideInUp" data-animation-out="fadeOut" data-position="left">
                            <a id="homeMegaMenu" className="nav-link u-header__nav-link u-header__nav-link-toggle u-header__nav-link-toggle" href="javascript:;" aria-haspopup="true" aria-expanded="false" aria-labelledby="homeSubMenu">Accessories</a>
                            {/* Home - Submenu */}
                            <ul id="homeSubMenu" className="hs-sub-menu u-header__sub-menu animated hs-position-left fadeOut" aria-labelledby="homeMegaMenu" style={{ minWidth: 230, display: 'none' }}>
                              {/* Home-v1 */}
                              <li className="hs-has-sub-menu">
                                <a className="nav-link u-header__sub-menu-nav-link " href="index.html">Home-v1</a>
                              </li>
                              {/* End Home-v1 */}
                              {/* Home-v2 */}
                              <li className="hs-has-sub-menu">
                                <a className="nav-link u-header__sub-menu-nav-link " href="home-v2.html">Home-v2</a>
                              </li>
                              {/* End Home-v2 */}
                              {/* Home-v3 */}
                              <li className="hs-has-sub-menu">
                                <a className="nav-link u-header__sub-menu-nav-link " href="home-v3.html">Home-v3</a>
                              </li>
                              {/* End Home-v3 */}
                              {/* Home-v4 */}
                              <li className="hs-has-sub-menu">
                                <a className="nav-link u-header__sub-menu-nav-link " href="home-v4.html">Home-v4</a>
                              </li>
                              {/* End Home-v4 */}
                            </ul>
                            {/* End Home - Submenu */}
                          </li>
                          {/* End Nav Item */}
                        </ul>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
              {/* End Card */}
            </div>
            {/* End Basics Accordion */}
          </div>
        </div>
        {/* End Vertical Menu */}
        {/* Secondary Menu */}
        <div className="col">
          {/* Nav */}
          <nav className="js-mega-menu navbar navbar-expand-md u-header__navbar u-header__navbar--no-space">
            {/* Navigation */}
            <div id="navBar" className="collapse navbar-collapse u-header__navbar-collapse">
              <ul className="navbar-nav u-header__navbar-nav">
                {/* Home */}
                <li className="nav-item hs-has-mega-menu u-header__nav-item" data-event="click" data-animation-in="slideInUp" data-animation-out="fadeOut" data-position="left">
                  <a id="homeMegaMenu" className="nav-link u-header__nav-link u-header__nav-link-toggle text-sale" href="javascript:;" aria-haspopup="true" aria-expanded="false">Super Deals</a>
                  {/* Home - Mega Menu */}
                  <div className="hs-mega-menu w-100 u-header__sub-menu" aria-labelledby="homeMegaMenu">
                    <div className="row u-header__mega-menu-wrapper">
                      <div className="col-md-3">
                        <span className="u-header__sub-menu-title">Home &amp; Static Pages</span>
                        <ul className="u-header__sub-menu-nav-group">
                          <li><a href="index.html" className="nav-link u-header__sub-menu-nav-link">Home v1</a></li>
                          <li><a href="home-v2.html" className="nav-link u-header__sub-menu-nav-link">Home v2</a></li>
                          <li><a href="home-v3.html" className="nav-link u-header__sub-menu-nav-link">Home v3</a></li>
                          <li><a href="home-v3-full-color-bg.html" className="nav-link u-header__sub-menu-nav-link">Home v3.1</a></li>
                          <li><a href="home-v4.html" className="nav-link u-header__sub-menu-nav-link">Home v4</a></li>
                          <li><a href="home-v5.html" className="nav-link u-header__sub-menu-nav-link">Home v5</a></li>
                          <li><a href="home-v6.html" className="nav-link u-header__sub-menu-nav-link">Home v6</a></li>
                          <li><a href="home-v7.html" className="nav-link u-header__sub-menu-nav-link">Home v7</a></li>
                          <li><a href="about.html" className="nav-link u-header__sub-menu-nav-link">About</a></li>
                          <li><a href="contact-v1.html" className="nav-link u-header__sub-menu-nav-link">Contact v1</a></li>
                          <li><a href="contact-v2.html" className="nav-link u-header__sub-menu-nav-link">Contact v2</a></li>
                          <li><a href="faq.html" className="nav-link u-header__sub-menu-nav-link">FAQ</a></li>
                          <li><a href="store-directory.html" className="nav-link u-header__sub-menu-nav-link">Store Directory</a></li>
                          <li><a href="terms-and-conditions.html" className="nav-link u-header__sub-menu-nav-link">Terms and Conditions</a></li>
                          <li><a href="404.html" className="nav-link u-header__sub-menu-nav-link">404</a></li>
                        </ul>
                      </div>
                      <div className="col-md-3">
                        <span className="u-header__sub-menu-title">Shop Pages</span>
                        <ul className="u-header__sub-menu-nav-group mb-3">
                          <li><a href="../shop/shop-grid.html" className="nav-link u-header__sub-menu-nav-link">Shop Grid</a></li>
                          <li><a href="../shop/shop-grid-extended.html" className="nav-link u-header__sub-menu-nav-link">Shop Grid Extended</a></li>
                          <li><a href="../shop/shop-list-view.html" className="nav-link u-header__sub-menu-nav-link">Shop List View</a></li>
                          <li><a href="../shop/shop-list-view-small.html" className="nav-link u-header__sub-menu-nav-link">Shop List View Small</a></li>
                          <li><a href="../shop/shop-left-sidebar.html" className="nav-link u-header__sub-menu-nav-link">Shop Left Sidebar</a></li>
                          <li><a href="../shop/shop-full-width.html" className="nav-link u-header__sub-menu-nav-link">Shop Full width</a></li>
                          <li><a href="../shop/shop-right-sidebar.html" className="nav-link u-header__sub-menu-nav-link">Shop Right Sidebar</a></li>
                        </ul>
                        <span className="u-header__sub-menu-title">Product Categories</span>
                        <ul className="u-header__sub-menu-nav-group">
                          <li><a href="../shop/product-categories-4-column-sidebar.html" className="nav-link u-header__sub-menu-nav-link">4 Column Sidebar</a></li>
                          <li><a href="../shop/product-categories-5-column-sidebar.html" className="nav-link u-header__sub-menu-nav-link">5 Column Sidebar</a></li>
                          <li><a href="../shop/product-categories-6-column-full-width.html" className="nav-link u-header__sub-menu-nav-link">6 Column Full width</a></li>
                          <li><a href="../shop/product-categories-7-column-full-width.html" className="nav-link u-header__sub-menu-nav-link">7 Column Full width</a></li>
                        </ul>
                      </div>
                      <div className="col-md-3">
                        <span className="u-header__sub-menu-title">Single Product Pages</span>
                        <ul className="u-header__sub-menu-nav-group mb-3">
                          <li><a href="../shop/single-product-extended.html" className="nav-link u-header__sub-menu-nav-link">Single Product Extended</a></li>
                          <li><a href="../shop/single-product-fullwidth.html" className="nav-link u-header__sub-menu-nav-link">Single Product Fullwidth</a></li>
                          <li><a href="../shop/single-product-sidebar.html" className="nav-link u-header__sub-menu-nav-link">Single Product Sidebar</a></li>
                        </ul>
                        <span className="u-header__sub-menu-title">Ecommerce Pages</span>
                        <ul className="u-header__sub-menu-nav-group">
                          <li><a href="../shop/shop.html" className="nav-link u-header__sub-menu-nav-link">Shop</a></li>
                          <li><a href="../shop/cart.html" className="nav-link u-header__sub-menu-nav-link">Cart</a></li>
                          <li><a href="../shop/checkout.html" className="nav-link u-header__sub-menu-nav-link">Checkout</a></li>
                          <li><a href="../shop/my-account.html" className="nav-link u-header__sub-menu-nav-link">My Account</a></li>
                          <li><a href="../shop/track-your-order.html" className="nav-link u-header__sub-menu-nav-link">Track your Order</a></li>
                          <li><a href="../shop/compare.html" className="nav-link u-header__sub-menu-nav-link">Compare</a></li>
                        </ul>
                      </div>
                      <div className="col-md-3">
                        <span className="u-header__sub-menu-title">Blog Pages</span>
                        <ul className="u-header__sub-menu-nav-group mb-3">
                          <li><a href="../blog/blog-v1.html" className="nav-link u-header__sub-menu-nav-link">Blog v1</a></li>
                          <li><a href="../blog/blog-v2.html" className="nav-link u-header__sub-menu-nav-link">Blog v2</a></li>
                          <li><a href="../blog/blog-v3.html" className="nav-link u-header__sub-menu-nav-link">Blog v3</a></li>
                          <li><a href="../blog/blog-full-width.html" className="nav-link u-header__sub-menu-nav-link">Blog Full Width</a></li>
                          <li><a href="../blog/single-blog-post.html" className="nav-link u-header__sub-menu-nav-link">Single Blog Post</a></li>
                        </ul>
                        <span className="u-header__sub-menu-title">Shop Columns</span>
                        <ul className="u-header__sub-menu-nav-group">
                          <li><a href="../shop/shop-7-columns-full-width.html" className="nav-link u-header__sub-menu-nav-link">7 Column Full width</a></li>
                          <li><a href="../shop/shop-6-columns-full-width.html" className="nav-link u-header__sub-menu-nav-link">6 Column Full width</a></li>
                          <li><a href="../shop/shop-5-columns-sidebar.html" className="nav-link u-header__sub-menu-nav-link">5 Column Sidebar</a></li>
                          <li><a href="../shop/shop-4-columns-sidebar.html" className="nav-link u-header__sub-menu-nav-link">4 Column Sidebar</a></li>
                          <li><a href="../shop/shop-3-columns-sidebar.html" className="nav-link u-header__sub-menu-nav-link">3 Column Sidebar</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* End Home - Mega Menu */}
                </li>
                {/* End Home */}
                {/* Featured Brands */}
                <li className="nav-item u-header__nav-item">
                  <a className="nav-link u-header__nav-link" href="#" aria-haspopup="true" aria-expanded="false" aria-labelledby="pagesSubMenu">Featured Brands</a>
                </li>
                {/* End Featured Brands */}
                {/* Trending Styles */}
                <li className="nav-item u-header__nav-item">
                  <a className="nav-link u-header__nav-link" href="#" aria-haspopup="true" aria-expanded="false" aria-labelledby="blogSubMenu">Trending Styles</a>
                </li>
                {/* End Trending Styles */}
                {/* Gift Cards */}
                <li className="nav-item u-header__nav-item">
                  <a className="nav-link u-header__nav-link" href="#" aria-haspopup="true" aria-expanded="false">Gift Cards</a>
                </li>
                {/* End Gift Cards */}
                {/* Button */}
                <li className="nav-item u-header__nav-last-item">
                  <a className="text-gray-90" href="#" target="_blank">
                    Free Shipping on Orders $50+
                  </a>
                </li>
                {/* End Button */}
              </ul>
            </div>
            {/* End Navigation */}
          </nav>
          {/* End Nav */}
        </div>
        {/* End Secondary Menu */}
      </div>
    </div>

  )
}

export default SecondaryMenu
