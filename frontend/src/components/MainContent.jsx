
import CategoryCarousel from './CategoryCarousel'
import FullBanner from './FullBanner'
import NavClassic from './NavClassic'
import ProductsGallery from './ProductsGallery'
import PromotionCard from './PromotionCard'
import RowBanner from './RowBanner'
import Slider from './Slider'
import TabContent from './TabContent'

const MainContent = () => {
  return (
    <main id="content" role="main">
  {/* Slider Section */}
  <Slider />
  {/* End Slider Section */}
  

  <div className="container">
    {/* Banner */}
    <RowBanner />
    {/* End Banner */}

    {/* Deals-and-tabs */}
    <div className="mb-5">
      <div className="row">
        {/* Deal */}
        
        {/* End Deal */}
        {/* <PromotionCard /> */}
        {/* Tab Prodcut */}

        <div className="col">
          {/* Features Section */}
          <div>
            {/* Nav Classic */}
            <NavClassic />
            {/* End Nav Classic */}

            {/* Tab Content */}
            <TabContent />
            {/* End Tab Content */}
          </div>
          {/* End Features Section */}
        </div>
        {/* End Tab Prodcut */}
      </div>
    </div>
    {/* End Deals-and-tabs */}
  </div>

  
  {/* Products-4-1-4 */}
  <ProductsGallery />
  {/* End Products-4-1-4 */}

  <div className="container">
    {/* Prodcut-cards-carousel */}
    <div className="space-top-2">
      <div className="d-flex justify-content-between border-bottom border-color-1 flex-md-nowrap flex-wrap border-sm-bottom-0">
        <h3 className="section-title mb-0 pb-2 font-size-22">Bestsellers</h3>
        <ul className="nav nav-pills mb-2 pt-3 pt-md-0 mb-0 border-top border-color-1 border-md-top-0 align-items-center font-size-15 font-size-15-md flex-nowrap flex-md-wrap overflow-auto overflow-md-visble">
          <li className="nav-item flex-shrink-0 flex-md-shrink-1">
            <a className="text-gray-90 btn btn-outline-primary border-width-2 rounded-pill py-1 px-4 font-size-15 text-lh-19 font-size-15-md" href="#">Top 20</a>
          </li>
          <li className="nav-item flex-shrink-0 flex-md-shrink-1">
            <a className="nav-link text-gray-8" href="#">Phones &amp; Tablets</a>
          </li>
          <li className="nav-item flex-shrink-0 flex-md-shrink-1">
            <a className="nav-link text-gray-8" href="#">Laptops &amp; Computers</a>
          </li>
          <li className="nav-item flex-shrink-0 flex-md-shrink-1">
            <a className="nav-link text-gray-8" href="#"> Video Cameras</a>
          </li>
        </ul>
      </div>
      <div className="js-slick-carousel u-slick u-slick--gutters-2 overflow-hidden u-slick-overflow-visble pt-3 pb-6" data-pagi-classes="text-center right-0 bottom-1 left-0 u-slick__pagination u-slick__pagination--long mb-0 z-index-n1 mt-4">
        <div className="js-slide">
          <ul className="row list-unstyled products-group no-gutters mb-0 overflow-visible">
            <li className="col-wd-3 col-md-4 product-item product-item__card pb-2 mb-2 pb-md-0 mb-md-0 border-bottom border-md-bottom-0">
              <div className="product-item__outer h-100">
                <div className="product-item__inner p-md-3 row no-gutters">
                  <div className="col col-lg-auto product-media-left">
                    <a href="../shop/single-product-fullwidth.html" className="max-width-150 d-block"><img className="img-fluid" src="../../assets/img/150X140/img1.jpg" alt="Image Description" /></a>
                  </div>
                  <div className="col product-item__body pl-2 pl-lg-3 mr-xl-2 mr-wd-1">
                    <div className="mb-4">
                      <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Tablets</a></div>
                      <h5 className="product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Tablet Air 3 WiFi 64GB Gold</a></h5>
                    </div>
                    <div className="flex-center-between mb-3">
                      <div className="prodcut-price">
                        <div className="text-gray-100">$629,00</div>
                      </div>
                      <div className="d-none d-xl-block prodcut-add-cart">
                        <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                      </div>
                    </div>
                    <div className="product-item__footer">
                      <div className="border-top pt-2 flex-center-between flex-wrap">
                        <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                        <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Wishlist</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="col-wd-3 col-md-4 product-item product-item__card pb-2 mb-2 pb-md-0 mb-md-0 border-bottom border-md-bottom-0">
              <div className="product-item__outer h-100">
                <div className="product-item__inner p-md-3 row no-gutters">
                  <div className="col col-lg-auto product-media-left">
                    <a href="../shop/single-product-fullwidth.html" className="max-width-150 d-block"><img className="img-fluid" src="../../assets/img/150X140/img2.jpg" alt="Image Description" /></a>
                  </div>
                  <div className="col product-item__body pl-2 pl-lg-3 mr-xl-2 mr-wd-1">
                    <div className="mb-4">
                      <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Laptops &amp; Computers</a></div>
                      <h5 className="product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Tablet White EliteBook  Revolve 810 G2</a></h5>
                    </div>
                    <div className="flex-center-between mb-3">
                      <div className="prodcut-price">
                        <div className="text-gray-100">$1 299,00</div>
                      </div>
                      <div className="d-none d-xl-block prodcut-add-cart">
                        <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                      </div>
                    </div>
                    <div className="product-item__footer">
                      <div className="border-top pt-2 flex-center-between flex-wrap">
                        <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                        <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Wishlist</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="col-wd-3 col-md-4 product-item product-item__card pb-2 mb-2 pb-md-0 mb-md-0 remove-divider-xl">
              <div className="product-item__outer h-100">
                <div className="product-item__inner p-md-3 row no-gutters">
                  <div className="col col-lg-auto product-media-left">
                    <a href="../shop/single-product-fullwidth.html" className="max-width-150 d-block"><img className="img-fluid" src="../../assets/img/150X140/img3.jpg" alt="Image Description" /></a>
                  </div>
                  <div className="col product-item__body pl-2 pl-lg-3 mr-xl-2 mr-wd-1">
                    <div className="mb-4">
                      <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Accesories</a></div>
                      <h5 className="product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Pendrive USB 3.0 Flash 64 GB</a></h5>
                    </div>
                    <div className="flex-center-between mb-3">
                      <div className="prodcut-price">
                        <div className="text-gray-100">$110,00</div>
                      </div>
                      <div className="d-none d-xl-block prodcut-add-cart">
                        <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                      </div>
                    </div>
                    <div className="product-item__footer">
                      <div className="border-top pt-2 flex-center-between flex-wrap">
                        <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                        <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Wishlist</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="col-wd-3 col-md-4 product-item product-item__card d-none d-md-block pb-2 mb-2 pb-md-0 mb-md-0 border-bottom border-md-bottom-0 remove-divider-wd">
              <div className="product-item__outer h-100">
                <div className="product-item__inner p-md-3 row no-gutters">
                  <div className="col col-lg-auto product-media-left">
                    <a href="../shop/single-product-fullwidth.html" className="max-width-150 d-block"><img className="img-fluid" src="../../assets/img/150X140/img7.jpg" alt="Image Description" /></a>
                  </div>
                  <div className="col product-item__body pl-2 pl-lg-3 mr-xl-2 mr-wd-1">
                    <div className="mb-4">
                      <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Headphones</a></div>
                      <h5 className="product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">White Solo 2 Wireless</a></h5>
                    </div>
                    <div className="flex-center-between mb-3">
                      <div className="prodcut-price">
                        <div className="text-gray-100">$110,00</div>
                      </div>
                      <div className="d-none d-xl-block prodcut-add-cart">
                        <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                      </div>
                    </div>
                    <div className="product-item__footer">
                      <div className="border-top pt-2 flex-center-between flex-wrap">
                        <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                        <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Wishlist</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="col-wd-3 col-md-4 product-item product-item__card d-none d-md-block pb-2 mb-2 pb-md-0 mb-md-0 border-bottom border-md-bottom-0">
              <div className="product-item__outer h-100">
                <div className="product-item__inner p-md-3 row no-gutters">
                  <div className="col col-lg-auto product-media-left">
                    <a href="../shop/single-product-fullwidth.html" className="max-width-150 d-block"><img className="img-fluid" src="../../assets/img/150X140/img4.jpg" alt="Image Description" /></a>
                  </div>
                  <div className="col product-item__body pl-2 pl-lg-3 mr-xl-2 mr-wd-1">
                    <div className="mb-4">
                      <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Smartwatches</a></div>
                      <h5 className="product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Smartwatch 2.0 LTE Wifi</a></h5>
                    </div>
                    <div className="flex-center-between mb-3">
                      <div className="prodcut-price">
                        <div className="text-gray-100">$110,00</div>
                      </div>
                      <div className="d-none d-xl-block prodcut-add-cart">
                        <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                      </div>
                    </div>
                    <div className="product-item__footer">
                      <div className="border-top pt-2 flex-center-between flex-wrap">
                        <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                        <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Wishlist</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="col-wd-3 col-md-4 product-item product-item__card d-none d-md-block pb-2 mb-2 pb-md-0 mb-md-0 border-bottom border-md-bottom-0 remove-divider-xl">
              <div className="product-item__outer h-100">
                <div className="product-item__inner p-md-3 row no-gutters">
                  <div className="col col-lg-auto product-media-left">
                    <a href="../shop/single-product-fullwidth.html" className="max-width-150 d-block"><img className="img-fluid" src="../../assets/img/150X140/img5.jpg" alt="Image Description" /></a>
                  </div>
                  <div className="col product-item__body pl-2 pl-lg-3 mr-xl-2 mr-wd-1">
                    <div className="mb-4">
                      <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Smartwatches</a></div>
                      <h5 className="product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Gear Virtual Reality</a></h5>
                    </div>
                    <div className="flex-center-between mb-3">
                      <div className="prodcut-price">
                        <div className="text-gray-100">$799,00</div>
                      </div>
                      <div className="d-none d-xl-block prodcut-add-cart">
                        <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                      </div>
                    </div>
                    <div className="product-item__footer">
                      <div className="border-top pt-2 flex-center-between flex-wrap">
                        <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                        <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Wishlist</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="col-wd-3 col-md-4 product-item product-item__card d-none d-wd-block pb-2 mb-2 pb-md-0 mb-md-0 border-bottom border-md-bottom-0">
              <div className="product-item__outer h-100">
                <div className="product-item__inner p-md-3 row no-gutters">
                  <div className="col col-lg-auto product-media-left">
                    <a href="../shop/single-product-fullwidth.html" className="max-width-150 d-block"><img className="img-fluid" src="../../assets/img/150X140/img6.jpg" alt="Image Description" /></a>
                  </div>
                  <div className="col product-item__body pl-2 pl-lg-3 mr-xl-2 mr-wd-1">
                    <div className="mb-4">
                      <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Gadgets</a></div>
                      <h5 className="product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">External SSD USB 3.1 750 GB</a></h5>
                    </div>
                    <div className="flex-center-between mb-3">
                      <div className="prodcut-price">
                        <div className="text-gray-100">$799,00</div>
                      </div>
                      <div className="d-none d-xl-block prodcut-add-cart">
                        <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                      </div>
                    </div>
                    <div className="product-item__footer">
                      <div className="border-top pt-2 flex-center-between flex-wrap">
                        <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                        <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Wishlist</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="col-wd-3 col-md-4 product-item product-item__card d-none d-wd-block pb-2 mb-2 pb-md-0 mb-md-0 border-bottom border-md-bottom-0 remove-divider-wd">
              <div className="product-item__outer h-100">
                <div className="product-item__inner p-md-3 row no-gutters">
                  <div className="col col-lg-auto product-media-left">
                    <a href="../shop/single-product-fullwidth.html" className="max-width-150 d-block"><img className="img-fluid" src="../../assets/img/150X140/img8.jpg" alt="Image Description" /></a>
                  </div>
                  <div className="col product-item__body pl-2 pl-lg-3 mr-xl-2 mr-wd-1">
                    <div className="mb-4">
                      <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Cameras</a></div>
                      <h5 className="product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Purple NX Mini F1 aparat  SMART NX</a></h5>
                    </div>
                    <div className="flex-center-between mb-3">
                      <div className="prodcut-price">
                        <div className="text-gray-100">$559.00</div>
                      </div>
                      <div className="d-none d-xl-block prodcut-add-cart">
                        <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                      </div>
                    </div>
                    <div className="product-item__footer">
                      <div className="border-top pt-2 flex-center-between flex-wrap">
                        <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                        <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Wishlist</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="js-slide">
          <ul className="row list-unstyled products-group no-gutters mb-0 overflow-visible">
            <li className="col-wd-3 col-md-4 product-item product-item__card pb-2 mb-2 pb-md-0 mb-md-0 border-bottom border-md-bottom-0">
              <div className="product-item__outer h-100">
                <div className="product-item__inner p-md-3 row no-gutters">
                  <div className="col col-lg-auto product-media-left">
                    <a href="../shop/single-product-fullwidth.html" className="max-width-150 d-block"><img className="img-fluid" src="../../assets/img/150X140/img1.jpg" alt="Image Description" /></a>
                  </div>
                  <div className="col product-item__body pl-2 pl-lg-3 mr-xl-2 mr-wd-1">
                    <div className="mb-4">
                      <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Tablets</a></div>
                      <h5 className="product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Tablet Air 3 WiFi 64GB Gold</a></h5>
                    </div>
                    <div className="flex-center-between mb-3">
                      <div className="prodcut-price">
                        <div className="text-gray-100">$629,00</div>
                      </div>
                      <div className="d-none d-xl-block prodcut-add-cart">
                        <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                      </div>
                    </div>
                    <div className="product-item__footer">
                      <div className="border-top pt-2 flex-center-between flex-wrap">
                        <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                        <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Wishlist</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="col-wd-3 col-md-4 product-item product-item__card pb-2 mb-2 pb-md-0 mb-md-0 border-bottom border-md-bottom-0">
              <div className="product-item__outer h-100">
                <div className="product-item__inner p-md-3 row no-gutters">
                  <div className="col col-lg-auto product-media-left">
                    <a href="../shop/single-product-fullwidth.html" className="max-width-150 d-block"><img className="img-fluid" src="../../assets/img/150X140/img2.jpg" alt="Image Description" /></a>
                  </div>
                  <div className="col product-item__body pl-2 pl-lg-3 mr-xl-2 mr-wd-1">
                    <div className="mb-4">
                      <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Laptops &amp; Computers</a></div>
                      <h5 className="product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Tablet White EliteBook  Revolve 810 G2</a></h5>
                    </div>
                    <div className="flex-center-between mb-3">
                      <div className="prodcut-price">
                        <div className="text-gray-100">$1 299,00</div>
                      </div>
                      <div className="d-none d-xl-block prodcut-add-cart">
                        <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                      </div>
                    </div>
                    <div className="product-item__footer">
                      <div className="border-top pt-2 flex-center-between flex-wrap">
                        <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                        <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Wishlist</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="col-wd-3 col-md-4 product-item product-item__card pb-2 mb-2 pb-md-0 mb-md-0 remove-divider-xl">
              <div className="product-item__outer h-100">
                <div className="product-item__inner p-md-3 row no-gutters">
                  <div className="col col-lg-auto product-media-left">
                    <a href="../shop/single-product-fullwidth.html" className="max-width-150 d-block"><img className="img-fluid" src="../../assets/img/150X140/img3.jpg" alt="Image Description" /></a>
                  </div>
                  <div className="col product-item__body pl-2 pl-lg-3 mr-xl-2 mr-wd-1">
                    <div className="mb-4">
                      <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Accesories</a></div>
                      <h5 className="product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Pendrive USB 3.0 Flash 64 GB</a></h5>
                    </div>
                    <div className="flex-center-between mb-3">
                      <div className="prodcut-price">
                        <div className="text-gray-100">$110,00</div>
                      </div>
                      <div className="d-none d-xl-block prodcut-add-cart">
                        <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                      </div>
                    </div>
                    <div className="product-item__footer">
                      <div className="border-top pt-2 flex-center-between flex-wrap">
                        <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                        <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Wishlist</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="col-wd-3 col-md-4 product-item product-item__card d-none d-md-block pb-2 mb-2 pb-md-0 mb-md-0 border-bottom border-md-bottom-0 remove-divider-wd">
              <div className="product-item__outer h-100">
                <div className="product-item__inner p-md-3 row no-gutters">
                  <div className="col col-lg-auto product-media-left">
                    <a href="../shop/single-product-fullwidth.html" className="max-width-150 d-block"><img className="img-fluid" src="../../assets/img/150X140/img7.jpg" alt="Image Description" /></a>
                  </div>
                  <div className="col product-item__body pl-2 pl-lg-3 mr-xl-2 mr-wd-1">
                    <div className="mb-4">
                      <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Headphones</a></div>
                      <h5 className="product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">White Solo 2 Wireless</a></h5>
                    </div>
                    <div className="flex-center-between mb-3">
                      <div className="prodcut-price">
                        <div className="text-gray-100">$110,00</div>
                      </div>
                      <div className="d-none d-xl-block prodcut-add-cart">
                        <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                      </div>
                    </div>
                    <div className="product-item__footer">
                      <div className="border-top pt-2 flex-center-between flex-wrap">
                        <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                        <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Wishlist</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="col-wd-3 col-md-4 product-item product-item__card d-none d-md-block pb-2 mb-2 pb-md-0 mb-md-0 border-bottom border-md-bottom-0">
              <div className="product-item__outer h-100">
                <div className="product-item__inner p-md-3 row no-gutters">
                  <div className="col col-lg-auto product-media-left">
                    <a href="../shop/single-product-fullwidth.html" className="max-width-150 d-block"><img className="img-fluid" src="../../assets/img/150X140/img4.jpg" alt="Image Description" /></a>
                  </div>
                  <div className="col product-item__body pl-2 pl-lg-3 mr-xl-2 mr-wd-1">
                    <div className="mb-4">
                      <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Smartwatches</a></div>
                      <h5 className="product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Smartwatch 2.0 LTE Wifi</a></h5>
                    </div>
                    <div className="flex-center-between mb-3">
                      <div className="prodcut-price">
                        <div className="text-gray-100">$110,00</div>
                      </div>
                      <div className="d-none d-xl-block prodcut-add-cart">
                        <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                      </div>
                    </div>
                    <div className="product-item__footer">
                      <div className="border-top pt-2 flex-center-between flex-wrap">
                        <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                        <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Wishlist</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="col-wd-3 col-md-4 product-item product-item__card d-none d-md-block pb-2 mb-2 pb-md-0 mb-md-0 border-bottom border-md-bottom-0 remove-divider-xl">
              <div className="product-item__outer h-100">
                <div className="product-item__inner p-md-3 row no-gutters">
                  <div className="col col-lg-auto product-media-left">
                    <a href="../shop/single-product-fullwidth.html" className="max-width-150 d-block"><img className="img-fluid" src="../../assets/img/150X140/img5.jpg" alt="Image Description" /></a>
                  </div>
                  <div className="col product-item__body pl-2 pl-lg-3 mr-xl-2 mr-wd-1">
                    <div className="mb-4">
                      <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Smartwatches</a></div>
                      <h5 className="product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Gear Virtual Reality</a></h5>
                    </div>
                    <div className="flex-center-between mb-3">
                      <div className="prodcut-price">
                        <div className="text-gray-100">$799,00</div>
                      </div>
                      <div className="d-none d-xl-block prodcut-add-cart">
                        <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                      </div>
                    </div>
                    <div className="product-item__footer">
                      <div className="border-top pt-2 flex-center-between flex-wrap">
                        <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                        <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Wishlist</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="col-wd-3 col-md-4 product-item product-item__card d-none d-wd-block pb-2 mb-2 pb-md-0 mb-md-0 border-bottom border-md-bottom-0">
              <div className="product-item__outer h-100">
                <div className="product-item__inner p-md-3 row no-gutters">
                  <div className="col col-lg-auto product-media-left">
                    <a href="../shop/single-product-fullwidth.html" className="max-width-150 d-block"><img className="img-fluid" src="../../assets/img/150X140/img6.jpg" alt="Image Description" /></a>
                  </div>
                  <div className="col product-item__body pl-2 pl-lg-3 mr-xl-2 mr-wd-1">
                    <div className="mb-4">
                      <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Gadgets</a></div>
                      <h5 className="product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">External SSD USB 3.1 750 GB</a></h5>
                    </div>
                    <div className="flex-center-between mb-3">
                      <div className="prodcut-price">
                        <div className="text-gray-100">$799,00</div>
                      </div>
                      <div className="d-none d-xl-block prodcut-add-cart">
                        <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                      </div>
                    </div>
                    <div className="product-item__footer">
                      <div className="border-top pt-2 flex-center-between flex-wrap">
                        <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                        <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Wishlist</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="col-wd-3 col-md-4 product-item product-item__card d-none d-wd-block pb-2 mb-2 pb-md-0 mb-md-0 border-bottom border-md-bottom-0 remove-divider-wd">
              <div className="product-item__outer h-100">
                <div className="product-item__inner p-md-3 row no-gutters">
                  <div className="col col-lg-auto product-media-left">
                    <a href="../shop/single-product-fullwidth.html" className="max-width-150 d-block"><img className="img-fluid" src="../../assets/img/150X140/img8.jpg" alt="Image Description" /></a>
                  </div>
                  <div className="col product-item__body pl-2 pl-lg-3 mr-xl-2 mr-wd-1">
                    <div className="mb-4">
                      <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Cameras</a></div>
                      <h5 className="product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Purple NX Mini F1 aparat  SMART NX</a></h5>
                    </div>
                    <div className="flex-center-between mb-3">
                      <div className="prodcut-price">
                        <div className="text-gray-100">$559.00</div>
                      </div>
                      <div className="d-none d-xl-block prodcut-add-cart">
                        <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                      </div>
                    </div>
                    <div className="product-item__footer">
                      <div className="border-top pt-2 flex-center-between flex-wrap">
                        <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                        <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Wishlist</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="js-slide">
          <ul className="row list-unstyled products-group no-gutters mb-0 overflow-visible">
            <li className="col-wd-3 col-md-4 product-item product-item__card pb-2 mb-2 pb-md-0 mb-md-0 border-bottom border-md-bottom-0">
              <div className="product-item__outer h-100">
                <div className="product-item__inner p-md-3 row no-gutters">
                  <div className="col col-lg-auto product-media-left">
                    <a href="../shop/single-product-fullwidth.html" className="max-width-150 d-block"><img className="img-fluid" src="../../assets/img/150X140/img1.jpg" alt="Image Description" /></a>
                  </div>
                  <div className="col product-item__body pl-2 pl-lg-3 mr-xl-2 mr-wd-1">
                    <div className="mb-4">
                      <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Tablets</a></div>
                      <h5 className="product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Tablet Air 3 WiFi 64GB Gold</a></h5>
                    </div>
                    <div className="flex-center-between mb-3">
                      <div className="prodcut-price">
                        <div className="text-gray-100">$629,00</div>
                      </div>
                      <div className="d-none d-xl-block prodcut-add-cart">
                        <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                      </div>
                    </div>
                    <div className="product-item__footer">
                      <div className="border-top pt-2 flex-center-between flex-wrap">
                        <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                        <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Wishlist</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="col-wd-3 col-md-4 product-item product-item__card pb-2 mb-2 pb-md-0 mb-md-0 border-bottom border-md-bottom-0">
              <div className="product-item__outer h-100">
                <div className="product-item__inner p-md-3 row no-gutters">
                  <div className="col col-lg-auto product-media-left">
                    <a href="../shop/single-product-fullwidth.html" className="max-width-150 d-block"><img className="img-fluid" src="../../assets/img/150X140/img2.jpg" alt="Image Description" /></a>
                  </div>
                  <div className="col product-item__body pl-2 pl-lg-3 mr-xl-2 mr-wd-1">
                    <div className="mb-4">
                      <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Laptops &amp; Computers</a></div>
                      <h5 className="product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Tablet White EliteBook  Revolve 810 G2</a></h5>
                    </div>
                    <div className="flex-center-between mb-3">
                      <div className="prodcut-price">
                        <div className="text-gray-100">$1 299,00</div>
                      </div>
                      <div className="d-none d-xl-block prodcut-add-cart">
                        <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                      </div>
                    </div>
                    <div className="product-item__footer">
                      <div className="border-top pt-2 flex-center-between flex-wrap">
                        <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                        <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Wishlist</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="col-wd-3 col-md-4 product-item product-item__card pb-2 mb-2 pb-md-0 mb-md-0 remove-divider-xl">
              <div className="product-item__outer h-100">
                <div className="product-item__inner p-md-3 row no-gutters">
                  <div className="col col-lg-auto product-media-left">
                    <a href="../shop/single-product-fullwidth.html" className="max-width-150 d-block"><img className="img-fluid" src="../../assets/img/150X140/img3.jpg" alt="Image Description" /></a>
                  </div>
                  <div className="col product-item__body pl-2 pl-lg-3 mr-xl-2 mr-wd-1">
                    <div className="mb-4">
                      <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Accesories</a></div>
                      <h5 className="product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Pendrive USB 3.0 Flash 64 GB</a></h5>
                    </div>
                    <div className="flex-center-between mb-3">
                      <div className="prodcut-price">
                        <div className="text-gray-100">$110,00</div>
                      </div>
                      <div className="d-none d-xl-block prodcut-add-cart">
                        <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                      </div>
                    </div>
                    <div className="product-item__footer">
                      <div className="border-top pt-2 flex-center-between flex-wrap">
                        <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                        <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Wishlist</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="col-wd-3 col-md-4 product-item product-item__card d-none d-md-block pb-2 mb-2 pb-md-0 mb-md-0 border-bottom border-md-bottom-0 remove-divider-wd">
              <div className="product-item__outer h-100">
                <div className="product-item__inner p-md-3 row no-gutters">
                  <div className="col col-lg-auto product-media-left">
                    <a href="../shop/single-product-fullwidth.html" className="max-width-150 d-block"><img className="img-fluid" src="../../assets/img/150X140/img7.jpg" alt="Image Description" /></a>
                  </div>
                  <div className="col product-item__body pl-2 pl-lg-3 mr-xl-2 mr-wd-1">
                    <div className="mb-4">
                      <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Headphones</a></div>
                      <h5 className="product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">White Solo 2 Wireless</a></h5>
                    </div>
                    <div className="flex-center-between mb-3">
                      <div className="prodcut-price">
                        <div className="text-gray-100">$110,00</div>
                      </div>
                      <div className="d-none d-xl-block prodcut-add-cart">
                        <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                      </div>
                    </div>
                    <div className="product-item__footer">
                      <div className="border-top pt-2 flex-center-between flex-wrap">
                        <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                        <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Wishlist</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="col-wd-3 col-md-4 product-item product-item__card d-none d-md-block pb-2 mb-2 pb-md-0 mb-md-0 border-bottom border-md-bottom-0">
              <div className="product-item__outer h-100">
                <div className="product-item__inner p-md-3 row no-gutters">
                  <div className="col col-lg-auto product-media-left">
                    <a href="../shop/single-product-fullwidth.html" className="max-width-150 d-block"><img className="img-fluid" src="../../assets/img/150X140/img4.jpg" alt="Image Description" /></a>
                  </div>
                  <div className="col product-item__body pl-2 pl-lg-3 mr-xl-2 mr-wd-1">
                    <div className="mb-4">
                      <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Smartwatches</a></div>
                      <h5 className="product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Smartwatch 2.0 LTE Wifi</a></h5>
                    </div>
                    <div className="flex-center-between mb-3">
                      <div className="prodcut-price">
                        <div className="text-gray-100">$110,00</div>
                      </div>
                      <div className="d-none d-xl-block prodcut-add-cart">
                        <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                      </div>
                    </div>
                    <div className="product-item__footer">
                      <div className="border-top pt-2 flex-center-between flex-wrap">
                        <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                        <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Wishlist</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="col-wd-3 col-md-4 product-item product-item__card d-none d-md-block pb-2 mb-2 pb-md-0 mb-md-0 border-bottom border-md-bottom-0 remove-divider-xl">
              <div className="product-item__outer h-100">
                <div className="product-item__inner p-md-3 row no-gutters">
                  <div className="col col-lg-auto product-media-left">
                    <a href="../shop/single-product-fullwidth.html" className="max-width-150 d-block"><img className="img-fluid" src="../../assets/img/150X140/img5.jpg" alt="Image Description" /></a>
                  </div>
                  <div className="col product-item__body pl-2 pl-lg-3 mr-xl-2 mr-wd-1">
                    <div className="mb-4">
                      <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Smartwatches</a></div>
                      <h5 className="product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Gear Virtual Reality</a></h5>
                    </div>
                    <div className="flex-center-between mb-3">
                      <div className="prodcut-price">
                        <div className="text-gray-100">$799,00</div>
                      </div>
                      <div className="d-none d-xl-block prodcut-add-cart">
                        <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                      </div>
                    </div>
                    <div className="product-item__footer">
                      <div className="border-top pt-2 flex-center-between flex-wrap">
                        <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                        <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Wishlist</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="col-wd-3 col-md-4 product-item product-item__card d-none d-wd-block pb-2 mb-2 pb-md-0 mb-md-0 border-bottom border-md-bottom-0">
              <div className="product-item__outer h-100">
                <div className="product-item__inner p-md-3 row no-gutters">
                  <div className="col col-lg-auto product-media-left">
                    <a href="../shop/single-product-fullwidth.html" className="max-width-150 d-block"><img className="img-fluid" src="../../assets/img/150X140/img6.jpg" alt="Image Description" /></a>
                  </div>
                  <div className="col product-item__body pl-2 pl-lg-3 mr-xl-2 mr-wd-1">
                    <div className="mb-4">
                      <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Gadgets</a></div>
                      <h5 className="product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">External SSD USB 3.1 750 GB</a></h5>
                    </div>
                    <div className="flex-center-between mb-3">
                      <div className="prodcut-price">
                        <div className="text-gray-100">$799,00</div>
                      </div>
                      <div className="d-none d-xl-block prodcut-add-cart">
                        <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                      </div>
                    </div>
                    <div className="product-item__footer">
                      <div className="border-top pt-2 flex-center-between flex-wrap">
                        <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                        <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Wishlist</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="col-wd-3 col-md-4 product-item product-item__card d-none d-wd-block pb-2 mb-2 pb-md-0 mb-md-0 border-bottom border-md-bottom-0 remove-divider-wd">
              <div className="product-item__outer h-100">
                <div className="product-item__inner p-md-3 row no-gutters">
                  <div className="col col-lg-auto product-media-left">
                    <a href="../shop/single-product-fullwidth.html" className="max-width-150 d-block"><img className="img-fluid" src="../../assets/img/150X140/img8.jpg" alt="Image Description" /></a>
                  </div>
                  <div className="col product-item__body pl-2 pl-lg-3 mr-xl-2 mr-wd-1">
                    <div className="mb-4">
                      <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Cameras</a></div>
                      <h5 className="product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Purple NX Mini F1 aparat  SMART NX</a></h5>
                    </div>
                    <div className="flex-center-between mb-3">
                      <div className="prodcut-price">
                        <div className="text-gray-100">$559.00</div>
                      </div>
                      <div className="d-none d-xl-block prodcut-add-cart">
                        <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                      </div>
                    </div>
                    <div className="product-item__footer">
                      <div className="border-top pt-2 flex-center-between flex-wrap">
                        <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                        <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Wishlist</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    {/* End Prodcut-cards-carousel */}

    {/* Full banner */}
    <FullBanner />
    {/* End Full banner */}

    {/* Recently viewed */}
    <CategoryCarousel />
    <CategoryCarousel />
    {/* End Recently viewed */}

    {/* Brand Carousel */}
    <div className="mb-8">
      <div className="py-2 border-top border-bottom">
        <div className="js-slick-carousel u-slick my-1" data-slides-show={5} data-slides-scroll={1} data-arrows-classes="d-none d-lg-inline-block u-slick__arrow-normal u-slick__arrow-centered--y" data-arrow-left-classes="fa fa-angle-left u-slick__arrow-classic-inner--left z-index-9" data-arrow-right-classes="fa fa-angle-right u-slick__arrow-classic-inner--right" data-responsive="[{
                          &quot;breakpoint&quot;: 992,
                          &quot;settings&quot;: {
                              &quot;slidesToShow&quot;: 2
                          }
                      }, {
                          &quot;breakpoint&quot;: 768,
                          &quot;settings&quot;: {
                              &quot;slidesToShow&quot;: 1
                          }
                      }, {
                          &quot;breakpoint&quot;: 554,
                          &quot;settings&quot;: {
                              &quot;slidesToShow&quot;: 1
                          }
                      }]">
          <div className="js-slide">
            <a href="#" className="link-hover__brand">
              <img className="img-fluid m-auto max-height-50" src="../../assets/img/200X60/img1.png" alt="Image Description" />
            </a>
          </div>
          <div className="js-slide">
            <a href="#" className="link-hover__brand">
              <img className="img-fluid m-auto max-height-50" src="../../assets/img/200X60/img2.png" alt="Image Description" />
            </a>
          </div>
          <div className="js-slide">
            <a href="#" className="link-hover__brand">
              <img className="img-fluid m-auto max-height-50" src="../../assets/img/200X60/img3.png" alt="Image Description" />
            </a>
          </div>
          <div className="js-slide">
            <a href="#" className="link-hover__brand">
              <img className="img-fluid m-auto max-height-50" src="../../assets/img/200X60/img4.png" alt="Image Description" />
            </a>
          </div>
          <div className="js-slide">
            <a href="#" className="link-hover__brand">
              <img className="img-fluid m-auto max-height-50" src="../../assets/img/200X60/img5.png" alt="Image Description" />
            </a>
          </div>
          <div className="js-slide">
            <a href="#" className="link-hover__brand">
              <img className="img-fluid m-auto max-height-50" src="../../assets/img/200X60/img6.png" alt="Image Description" />
            </a>
          </div>
        </div>
      </div>
    </div>
    {/* End Brand Carousel */}
  </div>
</main>

  )
}


export default MainContent
