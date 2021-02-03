import React from 'react'
import { Link } from 'react-router-dom'


const HeaderIcons = () => {
  return (
    <div className="col col-xl-auto text-right text-xl-left pl-0 pl-xl-3 position-static">
      <div className="d-inline-flex">
        <ul className="d-flex list-unstyled mb-0 align-items-center">
          {/* Search */}
          <li className="col d-xl-none px-2 px-sm-3 position-static">
            <a id="searchClassicInvoker" className="font-size-22 text-gray-90 text-lh-1 btn-text-secondary" href="javascript:;" role="button" data-toggle="tooltip" data-placement="top" title="Search" aria-controls="searchClassic" aria-haspopup="true" aria-expanded="false" data-unfold-target="#searchClassic" data-unfold-type="css-animation" data-unfold-duration={300} data-unfold-delay={300} data-unfold-hide-on-scroll="true" data-unfold-animation-in="slideInUp" data-unfold-animation-out="fadeOut">
              <span className="icon-search" />
            </a>
            {/* Input */}
            <div id="searchClassic" className="dropdown-menu dropdown-unfold dropdown-menu-right left-0 mx-2" aria-labelledby="searchClassicInvoker">
              <form className="js-focus-state input-group px-3">
                <input className="form-control" type="search" placeholder="Search Product" />
                <div className="input-group-append">
                  <button className="btn btn-primary px-3" type="button">
                    <i className="font-size-18 icon-search" />
                  </button>
                </div>
              </form>
            </div>
            {/* End Input */}
          </li>

          {/* End Search */}

  

          <li className="col d-none d-xl-block">
            <Link to="/favoritos" className="text-gray-90" data-toggle="tooltip" data-placement="top" title="Favoritos">
              <i className="font-size-22 icon-heart-void" />
            </Link>
          </li>

          <li className="col d-xl-none px-2 px-sm-3">
            <Link to="/cuenta" className="text-gray-90" data-toggle="tooltip" data-placement="top" title="Mi cuenta">
              <i className="font-size-22 icon-user" />
            </Link>
          </li>

          <li className="col pr-xl-0 px-2 px-sm-3 d-xl-none">
            <Link to="/" className="text-gray-90 position-relative d-flex " data-toggle="tooltip" data-placement="top" title="Carrito">
              <i className="font-size-22 icon-cart" />
              <span className="bg-lg-down-black width-22 height-22 bg-primary position-absolute d-flex align-items-center justify-content-center rounded-circle left-12 top-8 font-weight-bold font-size-12">2</span>
              <span className="d-none d-xl-block font-weight-bold font-size-16 text-gray-90 ml-3">
                $1785.00
              </span>
            </Link>
          </li>

          <li className="col pr-xl-0 px-2 px-sm-3 d-none d-xl-block">
            <div id="basicDropdownHoverInvoker" className="text-gray-90 position-relative d-flex " data-toggle="tooltip" data-placement="top" title="Carrito" aria-controls="basicDropdownHover" aria-haspopup="true" aria-expanded="false" data-unfold-event="click" data-unfold-target="#basicDropdownHover" data-unfold-type="css-animation" data-unfold-duration={300} data-unfold-delay={300} data-unfold-hide-on-scroll="true" data-unfold-animation-in="slideInUp" data-unfold-animation-out="fadeOut">
              <i className="font-size-22 icon-cart" />
              <span className="bg-lg-down-black width-22 height-22 bg-primary position-absolute d-flex align-items-center justify-content-center rounded-circle left-12 top-8 font-weight-bold font-size-12">2</span>
              
              <span className="d-none d-xl-block font-weight-bold font-size-16 text-gray-90 ml-3">
                $1785.00
              </span>
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
  )
}

export default HeaderIcons
