import React from 'react'

const TopBar = () => {
  return (
    <div className="u-header-topbar py-2 d-none d-xl-block">
      <div className="container">
        <div className="d-flex align-items-center">
          <div className="topbar-left">
            <a href="#" className="text-gray-110 font-size-13 hover-on-dark">Welcome to Worldwide Electronics Store</a>
          </div>
          <div className="topbar-right ml-auto">
            <ul className="list-inline mb-0">
              <li className="list-inline-item mr-0 u-header-topbar__nav-item u-header-topbar__nav-item-border">
                <a href="../home/contact-v2.html" className="u-header-topbar__nav-link"><i className="ec ec-map-pointer mr-1" /> Store Locator</a>
              </li>
              <li className="list-inline-item mr-0 u-header-topbar__nav-item u-header-topbar__nav-item-border">
                <a href="../shop/track-your-order.html" className="u-header-topbar__nav-link"><i className="ec ec-transport mr-1" /> Track Your Order</a>
              </li>
              <li className="list-inline-item mr-0 u-header-topbar__nav-item u-header-topbar__nav-item-border u-header-topbar__nav-item-no-border u-header-topbar__nav-item-border-single">
                <div className="d-flex align-items-center">

                  {/* Language */}
                  <div className="position-relative">
                    <a id="languageDropdownInvoker" className="dropdown-nav-link dropdown-toggle d-flex align-items-center u-header-topbar__nav-link font-weight-normal" href="javascript:;" role="button" aria-controls="languageDropdown" aria-haspopup="true" aria-expanded="false" data-unfold-event="hover" data-unfold-target="#languageDropdown" data-unfold-type="css-animation" data-unfold-duration={300} data-unfold-delay={300} data-unfold-hide-on-scroll="true" data-unfold-animation-in="slideInUp" data-unfold-animation-out="fadeOut">
                      <span className="d-inline-block d-sm-none">US</span>
                      <span className="d-none d-sm-inline-flex align-items-center"><i className="ec ec-dollar mr-1" /> Dollar (US)</span>
                    </a>
                    <div id="languageDropdown" className="dropdown-menu dropdown-unfold" aria-labelledby="languageDropdownInvoker">
                      <a className="dropdown-item active" href="#">English</a>
                      <a className="dropdown-item" href="#">Deutsch</a>
                      <a className="dropdown-item" href="#">Español‎</a>
                    </div>
                  </div>
                  {/* End Language */}

                </div>
              </li>
              <li className="list-inline-item mr-0 u-header-topbar__nav-item u-header-topbar__nav-item-border">
                {/* Account Sidebar Toggle Button */}
                <a id="sidebarNavToggler" href="javascript:;" role="button" className="u-header-topbar__nav-link" aria-controls="sidebarContent" aria-haspopup="true" aria-expanded="false" data-unfold-event="click" data-unfold-hide-on-scroll="false" data-unfold-target="#sidebarContent" data-unfold-type="css-animation" data-unfold-animation-in="fadeInRight" data-unfold-animation-out="fadeOutRight" data-unfold-duration={500}>
                  <i className="ec ec-user mr-1" /> Registrarse <span className="text-gray-50">o</span> Iniciar sesión
                </a>
                {/* End Account Sidebar Toggle Button */}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBar
