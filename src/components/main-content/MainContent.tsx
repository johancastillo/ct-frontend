
import NavClassic from '../nav-classic/NavClassic'
import PromotionCard from '../promotion-card/PromotionCard'
import RowBanner from '../row-banner/RowBanner'
import Slider from '../slider/Slider'
import TabContent from '../tab-content/TabContent'

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
        <PromotionCard />
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
  <div className="products-group-4-1-4 space-1 bg-gray-7">
    <h2 className="sr-only">Products Grid</h2>
    <div className="container">
      {/* Nav Classic */}
      <div className="position-relative text-center z-index-2 mb-3">
        <ul className="nav nav-classic nav-tab nav-tab-sm px-md-3 justify-content-start justify-content-lg-center flex-nowrap flex-lg-wrap overflow-auto overflow-lg-visble border-md-down-bottom-0 pb-1 pb-lg-0 mb-n1 mb-lg-0" id="pills-tab-1" role="tablist">
          <li className="nav-item flex-shrink-0 flex-lg-shrink-1">
            <a className="nav-link active " id="Tpills-one-example1-tab" data-toggle="pill" href="#Tpills-one-example1" role="tab" aria-controls="Tpills-one-example1" aria-selected="true">
              <div className="d-md-flex justify-content-md-center align-items-md-center">
                Best Deals
              </div>
            </a>
          </li>
          <li className="nav-item flex-shrink-0 flex-lg-shrink-1">
            <a className="nav-link " id="Tpills-two-example1-tab" data-toggle="pill" href="#Tpills-two-example1" role="tab" aria-controls="Tpills-two-example1" aria-selected="false">
              <div className="d-md-flex justify-content-md-center align-items-md-center">
                TV &amp; Video
              </div>
            </a>
          </li>
          <li className="nav-item flex-shrink-0 flex-lg-shrink-1">
            <a className="nav-link " id="Tpills-three-example1-tab" data-toggle="pill" href="#Tpills-three-example1" role="tab" aria-controls="Tpills-three-example1" aria-selected="false">
              <div className="d-md-flex justify-content-md-center align-items-md-center">
                Cameras
              </div>
            </a>
          </li>
          <li className="nav-item flex-shrink-0 flex-lg-shrink-1">
            <a className="nav-link " id="Tpills-four-example1-tab" data-toggle="pill" href="#Tpills-four-example1" role="tab" aria-controls="Tpills-four-example1" aria-selected="false">
              <div className="d-md-flex justify-content-md-center align-items-md-center">
                Audio
              </div>
            </a>
          </li>
          <li className="nav-item flex-shrink-0 flex-lg-shrink-1">
            <a className="nav-link " id="Tpills-five-example1-tab" data-toggle="pill" href="#Tpills-five-example1" role="tab" aria-controls="Tpills-five-example1" aria-selected="false">
              <div className="d-md-flex justify-content-md-center align-items-md-center">
                Smartphones
              </div>
            </a>
          </li>
          <li className="nav-item flex-shrink-0 flex-lg-shrink-1">
            <a className="nav-link " id="Tpills-six-example1-tab" data-toggle="pill" href="#Tpills-six-example1" role="tab" aria-controls="Tpills-six-example1" aria-selected="false">
              <div className="d-md-flex justify-content-md-center align-items-md-center">
                GPS &amp; Navi
              </div>
            </a>
          </li>
          <li className="nav-item flex-shrink-0 flex-lg-shrink-1">
            <a className="nav-link " id="Tpills-seven-example1-tab" data-toggle="pill" href="#Tpills-seven-example1" role="tab" aria-controls="Tpills-seven-example1" aria-selected="false">
              <div className="d-md-flex justify-content-md-center align-items-md-center">
                Computers
              </div>
            </a>
          </li>
          <li className="nav-item flex-shrink-0 flex-lg-shrink-1">
            <a className="nav-link " id="Tpills-eight-example1-tab" data-toggle="pill" href="#Tpills-eight-example1" role="tab" aria-controls="Tpills-eight-example1" aria-selected="false">
              <div className="d-md-flex justify-content-md-center align-items-md-center">
                Portable Audio
              </div>
            </a>
          </li>
          <li className="nav-item flex-shrink-0 flex-lg-shrink-1">
            <a className="nav-link " id="Tpills-nine-example1-tab" data-toggle="pill" href="#Tpills-nine-example1" role="tab" aria-controls="Tpills-nine-example1" aria-selected="false">
              <div className="d-md-flex justify-content-md-center align-items-md-center">
                Accessories
              </div>
            </a>
          </li>
        </ul>
      </div>
      {/* End Nav Classic */}
      {/* Tab Content */}
      <div className="tab-content" id="Tpills-tabContent">
        <div className="tab-pane fade pt-2 show active" id="Tpills-one-example1" role="tabpanel" aria-labelledby="Tpills-one-example1-tab">
          <div className="row no-gutters">
            <div className="col-md-3 col-wd-4 d-md-flex d-wd-block">
              <ul className="row list-unstyled products-group no-gutters mb-0 flex-xl-column flex-wd-row">
                <li className="col-xl-6 product-item max-width-xl-100 remove-divider">
                  <div className="product-item__outer h-100 w-100 prodcut-box-shadow">
                    <div className="product-item__inner bg-white p-3">
                      <div className="product-item__body pb-xl-2">
                        <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                        <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Wireless Audio System Multiroom 360 degree Full base audio</a></h5>
                        <div className="mb-2">
                          <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="../../assets/img/212X200/img1.jpg" alt="Image Description" /></a>
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="prodcut-price">
                            <div className="text-gray-100">$685,00</div>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="product-item__footer">
                        <div className="border-top pt-2 flex-center-between flex-wrap">
                          <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                          <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Add to Wishlist</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-xl-6 product-item max-width-xl-100 remove-divider">
                  <div className="product-item__outer h-100 w-100 prodcut-box-shadow">
                    <div className="product-item__inner bg-white p-3">
                      <div className="product-item__body pb-xl-2">
                        <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                        <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Tablet White EliteBook Revolve 810 G2</a></h5>
                        <div className="mb-2">
                          <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="../../assets/img/212X200/img2.jpg" alt="Image Description" /></a>
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="prodcut-price">
                            <div className="text-gray-100">$685,00</div>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="product-item__footer">
                        <div className="border-top pt-2 flex-center-between flex-wrap">
                          <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                          <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Add to Wishlist</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-xl-6 product-item max-width-xl-100 d-md-none d-wd-block product-item remove-divider">
                  <div className="product-item__outer h-100 w-100 prodcut-box-shadow">
                    <div className="product-item__inner bg-white p-3">
                      <div className="product-item__body pb-xl-2">
                        <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                        <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Wireless Audio System Multiroom 360 degree Full base audio</a></h5>
                        <div className="mb-2">
                          <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="../../assets/img/212X200/img1.jpg" alt="Image Description" /></a>
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="prodcut-price">
                            <div className="text-gray-100">$685,00</div>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="product-item__footer">
                        <div className="border-top pt-2 flex-center-between flex-wrap">
                          <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                          <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Add to Wishlist</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-xl-6 product-item max-width-xl-100 d-md-none d-wd-block product-item remove-divider">
                  <div className="product-item__outer h-100 w-100 prodcut-box-shadow">
                    <div className="product-item__inner bg-white p-3">
                      <div className="product-item__body pb-xl-2">
                        <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                        <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">GameConsole Destiny  Special Edition</a></h5>
                        <div className="mb-2">
                          <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="../../assets/img/212X200/img7.jpg" alt="Image Description" /></a>
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="prodcut-price">
                            <div className="text-gray-100">$685,00</div>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="product-item__footer">
                        <div className="border-top pt-2 flex-center-between flex-wrap">
                          <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                          <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Add to Wishlist</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-wd-4 products-group-1">
              <ul className="row list-unstyled products-group no-gutters bg-white h-100 mb-0">
                <li className="col product-item remove-divider">
                  <div className="product-item__outer h-100 w-100 prodcut-box-shadow">
                    <div className="product-item__inner bg-white p-3">
                      <div className="product-item__body d-flex flex-column">
                        <div className="mb-1">
                          <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Game Consoles</a></div>
                          <h5 className="mb-0 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Game Console Controller + USB 3.0 Cable</a></h5>
                        </div>
                        <div className="mb-1 min-height-4-1-4">
                          <a href="#" className="d-block text-center my-4 mt-lg-6 mb-lg-5 mt-xl-0 mb-xl-0 mt-wd-6 mb-wd-5"><img className="img-fluid" src="../../assets/img/564X520/img2.jpg" alt="Image Description" /></a>
                          {/* Gallery */}
                          <div className="row mx-gutters-2 mb-3">
                            <div className="col-auto">
                              {/* Gallery */}
                              <a className="js-fancybox max-width-60 u-media-viewer" href="javascript:;" data-src="../../assets/img/1920X1080/img1.jpg" data-fancybox="fancyboxGallery6" data-caption="Electro in frames - image #01" data-speed={700} data-is-infinite="true">
                                <img className="img-fluid border" src="../../assets/img/100X100/img1.jpg" alt="Image Description" />
                                <span className="u-media-viewer__container">
                                  <span className="u-media-viewer__icon">
                                    <span className="fas fa-plus u-media-viewer__icon-inner" />
                                  </span>
                                </span>
                              </a>
                              {/* End Gallery */}
                            </div>
                            <div className="col-auto">
                              {/* Gallery */}
                              <a className="js-fancybox max-width-60 u-media-viewer" href="javascript:;" data-src="../../assets/img/1920X1080/img2.jpg" data-fancybox="fancyboxGallery6" data-caption="Electro in frames - image #02" data-speed={700} data-is-infinite="true">
                                <img className="img-fluid border" src="../../assets/img/100X100/img2.jpg" alt="Image Description" />
                                <span className="u-media-viewer__container">
                                  <span className="u-media-viewer__icon">
                                    <span className="fas fa-plus u-media-viewer__icon-inner" />
                                  </span>
                                </span>
                              </a>
                              {/* End Gallery */}
                            </div>
                            <div className="col-auto">
                              {/* Gallery */}
                              <a className="js-fancybox max-width-60 u-media-viewer" href="javascript:;" data-src="../../assets/img/1920X1080/img3.jpg" data-fancybox="fancyboxGallery6" data-caption="Electro in frames - image #03" data-speed={700} data-is-infinite="true">
                                <img className="img-fluid border" src="../../assets/img/100X100/img3.jpg" alt="Image Description" />
                                <span className="u-media-viewer__container">
                                  <span className="u-media-viewer__icon">
                                    <span className="fas fa-plus u-media-viewer__icon-inner" />
                                  </span>
                                </span>
                              </a>
                              {/* End Gallery */}
                            </div>
                            <div className="col" />
                          </div>
                          {/* End Gallery */}
                        </div>
                        <div className="flex-center-between">
                          <div className="prodcut-price">
                            <div className="text-gray-100">$685,00</div>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-add-cart__wide btn-primary transition-3d-hover"><i className="ec ec-add-to-cart mr-2" /> Add to Cart</a>
                          </div>
                        </div>
                      </div>
                      <div className="product-item__footer">
                        <div className="border-top pt-2 flex-center-between flex-wrap">
                          <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                          <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Add to Wishlist</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-wd-4 d-md-flex d-wd-block">
              <ul className="row list-unstyled products-group no-gutters mb-0 flex-xl-column flex-wd-row">
                <li className="col-xl-6 product-item max-width-xl-100 remove-divider">
                  <div className="product-item__outer h-100 w-100 prodcut-box-shadow">
                    <div className="product-item__inner bg-white p-3">
                      <div className="product-item__body pb-xl-2">
                        <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                        <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Wireless Audio System Multiroom 360 degree Full base audio</a></h5>
                        <div className="mb-2">
                          <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="../../assets/img/212X200/img1.jpg" alt="Image Description" /></a>
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="prodcut-price">
                            <div className="text-gray-100">$685,00</div>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="product-item__footer">
                        <div className="border-top pt-2 flex-center-between flex-wrap">
                          <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                          <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Add to Wishlist</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-xl-6 product-item max-width-xl-100 remove-divider">
                  <div className="product-item__outer h-100 w-100 prodcut-box-shadow">
                    <div className="product-item__inner bg-white p-3">
                      <div className="product-item__body pb-xl-2">
                        <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                        <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Tablet White EliteBook Revolve 810 G2</a></h5>
                        <div className="mb-2">
                          <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="../../assets/img/212X200/img2.jpg" alt="Image Description" /></a>
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="prodcut-price">
                            <div className="text-gray-100">$685,00</div>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="product-item__footer">
                        <div className="border-top pt-2 flex-center-between flex-wrap">
                          <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                          <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Add to Wishlist</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-xl-6 product-item max-width-xl-100 d-md-none d-wd-block product-item remove-divider">
                  <div className="product-item__outer h-100 w-100 prodcut-box-shadow">
                    <div className="product-item__inner bg-white p-3">
                      <div className="product-item__body pb-xl-2">
                        <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                        <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Wireless Audio System Multiroom 360 degree Full base audio</a></h5>
                        <div className="mb-2">
                          <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="../../assets/img/212X200/img1.jpg" alt="Image Description" /></a>
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="prodcut-price">
                            <div className="text-gray-100">$685,00</div>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="product-item__footer">
                        <div className="border-top pt-2 flex-center-between flex-wrap">
                          <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                          <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Add to Wishlist</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-xl-6 product-item max-width-xl-100 d-md-none d-wd-block product-item remove-divider">
                  <div className="product-item__outer h-100 w-100 prodcut-box-shadow">
                    <div className="product-item__inner bg-white p-3">
                      <div className="product-item__body pb-xl-2">
                        <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                        <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">GameConsole Destiny  Special Edition</a></h5>
                        <div className="mb-2">
                          <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="../../assets/img/212X200/img7.jpg" alt="Image Description" /></a>
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="prodcut-price">
                            <div className="text-gray-100">$685,00</div>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="product-item__footer">
                        <div className="border-top pt-2 flex-center-between flex-wrap">
                          <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                          <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Add to Wishlist</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="tab-pane fade pt-2" id="Tpills-two-example1" role="tabpanel" aria-labelledby="Tpills-two-example1-tab">
          <div className="row no-gutters">
            <div className="col-md-3 col-wd-4 d-md-flex d-wd-block">
              <ul className="row list-unstyled products-group no-gutters mb-0 flex-xl-column flex-wd-row">
                <li className="col-xl-6 product-item max-width-xl-100 remove-divider">
                  <div className="product-item__outer h-100 w-100 prodcut-box-shadow">
                    <div className="product-item__inner bg-white p-3">
                      <div className="product-item__body pb-xl-2">
                        <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                        <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Wireless Audio System Multiroom 360 degree Full base audio</a></h5>
                        <div className="mb-2">
                          <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="../../assets/img/212X200/img1.jpg" alt="Image Description" /></a>
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="prodcut-price">
                            <div className="text-gray-100">$685,00</div>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="product-item__footer">
                        <div className="border-top pt-2 flex-center-between flex-wrap">
                          <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                          <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Add to Wishlist</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-xl-6 product-item max-width-xl-100 remove-divider">
                  <div className="product-item__outer h-100 w-100 prodcut-box-shadow">
                    <div className="product-item__inner bg-white p-3">
                      <div className="product-item__body pb-xl-2">
                        <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                        <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Tablet White EliteBook Revolve 810 G2</a></h5>
                        <div className="mb-2">
                          <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="../../assets/img/212X200/img2.jpg" alt="Image Description" /></a>
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="prodcut-price">
                            <div className="text-gray-100">$685,00</div>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="product-item__footer">
                        <div className="border-top pt-2 flex-center-between flex-wrap">
                          <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                          <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Add to Wishlist</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-xl-6 product-item max-width-xl-100 d-md-none d-wd-block product-item remove-divider">
                  <div className="product-item__outer h-100 w-100 prodcut-box-shadow">
                    <div className="product-item__inner bg-white p-3">
                      <div className="product-item__body pb-xl-2">
                        <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                        <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Wireless Audio System Multiroom 360 degree Full base audio</a></h5>
                        <div className="mb-2">
                          <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="../../assets/img/212X200/img1.jpg" alt="Image Description" /></a>
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="prodcut-price">
                            <div className="text-gray-100">$685,00</div>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="product-item__footer">
                        <div className="border-top pt-2 flex-center-between flex-wrap">
                          <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                          <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Add to Wishlist</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="col-xl-6 product-item max-width-xl-100 d-md-none d-wd-block product-item remove-divider">
                  <div className="product-item__outer h-100 w-100 prodcut-box-shadow">
                    <div className="product-item__inner bg-white p-3">
                      <div className="product-item__body pb-xl-2">
                        <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                        <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">GameConsole Destiny  Special Edition</a></h5>
                        <div className="mb-2">
                          <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="../../assets/img/212X200/img7.jpg" alt="Image Description" /></a>
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="prodcut-price">
                            <div className="text-gray-100">$685,00</div>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="product-item__footer">
                        <div className="border-top pt-2 flex-center-between flex-wrap">
                          <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                          <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Add to Wishlist</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="col-md-6 col-wd-4 products-group-1">
              <ul className="row list-unstyled products-group no-gutters bg-white h-100 mb-0">
                <li className="col product-item remove-divider">
                  <div className="product-item__outer h-100 w-100 prodcut-box-shadow">
                    <div className="product-item__inner bg-white p-3">
                      <div className="product-item__body d-flex flex-column">
                        <div className="mb-1">
                          <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Game Consoles</a></div>
                          <h5 className="mb-0 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Game Console Controller + USB 3.0 Cable</a></h5>
                        </div>
                        <div className="mb-1 min-height-4-1-4">
                          <a href="#" className="d-block text-center my-4 mt-lg-6 mb-lg-5 mt-xl-0 mb-xl-0 mt-wd-6 mb-wd-5"><img className="img-fluid" src="../../assets/img/564X520/img2.jpg" alt="Image Description" /></a>
                          {/* Gallery */}
                          <div className="row mx-gutters-2 mb-3">
                            <div className="col-auto">
                              {/* Gallery */}
                              <a className="js-fancybox max-width-60 u-media-viewer" href="javascript:;" data-src="../../assets/img/1920X1080/img1.jpg" data-fancybox="fancyboxGallery6" data-caption="Electro in frames - image #01" data-speed={700} data-is-infinite="true">
                                <img className="img-fluid border" src="../../assets/img/100X100/img1.jpg" alt="Image Description" />
                                <span className="u-media-viewer__container">
                                  <span className="u-media-viewer__icon">
                                    <span className="fas fa-plus u-media-viewer__icon-inner" />
                                  </span>
                                </span>
                              </a>
                              {/* End Gallery */}
                            </div>
                            <div className="col-auto">
                              {/* Gallery */}
                              <a className="js-fancybox max-width-60 u-media-viewer" href="javascript:;" data-src="../../assets/img/1920X1080/img2.jpg" data-fancybox="fancyboxGallery6" data-caption="Electro in frames - image #02" data-speed={700} data-is-infinite="true">
                                <img className="img-fluid border" src="../../assets/img/100X100/img2.jpg" alt="Image Description" />
                                <span className="u-media-viewer__container">
                                  <span className="u-media-viewer__icon">
                                    <span className="fas fa-plus u-media-viewer__icon-inner" />
                                  </span>
                                </span>
                              </a>
                              {/* End Gallery */}
                            </div>
                            <div className="col-auto">
                              {/* Gallery */}
                              <a className="js-fancybox max-width-60 u-media-viewer" href="javascript:;" data-src="../../assets/img/1920X1080/img3.jpg" data-fancybox="fancyboxGallery6" data-caption="Electro in frames - image #03" data-speed={700} data-is-infinite="true">
                                <img className="img-fluid border" src="../../assets/img/100X100/img3.jpg" alt="Image Description" />
                                <span className="u-media-viewer__container">
                                  <span className="u-media-viewer__icon">
                                    <span className="fas fa-plus u-media-viewer__icon-inner" />
                                  </span>
                                </span>
                              </a>
                              {/* End Gallery */}
                            </div>
                            <div className="col" />
                          </div>
                          {/* End Gallery */}
                        </div>
                        <div className="flex-center-between">
                          <div className="prodcut-price">
                            <div className="text-gray-100">$685,00</div>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-add-cart__wide btn-primary transition-3d-hover"><i className="ec ec-add-to-cart mr-2" /> Add to Cart</a>
                          </div>
                        </div>
                      </div>
                      <div className="product-item__footer">
                        <div className="border-top pt-2 flex-center-between flex-wrap">
                          <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                          <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Add to Wishlist</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="col-md-3 col-wd-4 d-md-flex d-wd-block">
              <ul className="row list-unstyled products-group no-gutters mb-0 flex-xl-column flex-wd-row">
                <li className="col-xl-6 product-item max-width-xl-100 remove-divider">
                  <div className="product-item__outer h-100 w-100 prodcut-box-shadow">
                    <div className="product-item__inner bg-white p-3">
                      <div className="product-item__body pb-xl-2">
                        <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                        <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Wireless Audio System Multiroom 360 degree Full base audio</a></h5>
                        <div className="mb-2">
                          <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="../../assets/img/212X200/img1.jpg" alt="Image Description" /></a>
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="prodcut-price">
                            <div className="text-gray-100">$685,00</div>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="product-item__footer">
                        <div className="border-top pt-2 flex-center-between flex-wrap">
                          <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                          <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Add to Wishlist</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="col-xl-6 product-item max-width-xl-100 remove-divider">
                  <div className="product-item__outer h-100 w-100 prodcut-box-shadow">
                    <div className="product-item__inner bg-white p-3">
                      <div className="product-item__body pb-xl-2">
                        <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                        <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Tablet White EliteBook Revolve 810 G2</a></h5>
                        <div className="mb-2">
                          <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="../../assets/img/212X200/img2.jpg" alt="Image Description" /></a>
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="prodcut-price">
                            <div className="text-gray-100">$685,00</div>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="product-item__footer">
                        <div className="border-top pt-2 flex-center-between flex-wrap">
                          <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                          <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Add to Wishlist</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="col-xl-6 product-item max-width-xl-100 d-md-none d-wd-block product-item remove-divider">
                  <div className="product-item__outer h-100 w-100 prodcut-box-shadow">
                    <div className="product-item__inner bg-white p-3">
                      <div className="product-item__body pb-xl-2">
                        <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                        <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Wireless Audio System Multiroom 360 degree Full base audio</a></h5>
                        <div className="mb-2">
                          <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="../../assets/img/212X200/img1.jpg" alt="Image Description" /></a>
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="prodcut-price">
                            <div className="text-gray-100">$685,00</div>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="product-item__footer">
                        <div className="border-top pt-2 flex-center-between flex-wrap">
                          <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                          <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Add to Wishlist</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="col-xl-6 product-item max-width-xl-100 d-md-none d-wd-block product-item remove-divider">
                  <div className="product-item__outer h-100 w-100 prodcut-box-shadow">
                    <div className="product-item__inner bg-white p-3">
                      <div className="product-item__body pb-xl-2">
                        <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                        <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">GameConsole Destiny  Special Edition</a></h5>
                        <div className="mb-2">
                          <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="../../assets/img/212X200/img7.jpg" alt="Image Description" /></a>
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="prodcut-price">
                            <div className="text-gray-100">$685,00</div>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="product-item__footer">
                        <div className="border-top pt-2 flex-center-between flex-wrap">
                          <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                          <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Add to Wishlist</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="tab-pane fade pt-2" id="Tpills-three-example1" role="tabpanel" aria-labelledby="Tpills-three-example1-tab">
          <div className="row no-gutters">
            <div className="col-md-3 col-wd-4 d-md-flex d-wd-block">
              <ul className="row list-unstyled products-group no-gutters mb-0 flex-xl-column flex-wd-row">
                <li className="col-xl-6 product-item max-width-xl-100 remove-divider">
                  <div className="product-item__outer h-100 w-100 prodcut-box-shadow">
                    <div className="product-item__inner bg-white p-3">
                      <div className="product-item__body pb-xl-2">
                        <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                        <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Wireless Audio System Multiroom 360 degree Full base audio</a></h5>
                        <div className="mb-2">
                          <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="../../assets/img/212X200/img1.jpg" alt="Image Description" /></a>
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="prodcut-price">
                            <div className="text-gray-100">$685,00</div>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="product-item__footer">
                        <div className="border-top pt-2 flex-center-between flex-wrap">
                          <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                          <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Add to Wishlist</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="col-xl-6 product-item max-width-xl-100 remove-divider">
                  <div className="product-item__outer h-100 w-100 prodcut-box-shadow">
                    <div className="product-item__inner bg-white p-3">
                      <div className="product-item__body pb-xl-2">
                        <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                        <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Tablet White EliteBook Revolve 810 G2</a></h5>
                        <div className="mb-2">
                          <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="../../assets/img/212X200/img2.jpg" alt="Image Description" /></a>
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="prodcut-price">
                            <div className="text-gray-100">$685,00</div>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="product-item__footer">
                        <div className="border-top pt-2 flex-center-between flex-wrap">
                          <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                          <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Add to Wishlist</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="col-xl-6 product-item max-width-xl-100 d-md-none d-wd-block product-item remove-divider">
                  <div className="product-item__outer h-100 w-100 prodcut-box-shadow">
                    <div className="product-item__inner bg-white p-3">
                      <div className="product-item__body pb-xl-2">
                        <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                        <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Wireless Audio System Multiroom 360 degree Full base audio</a></h5>
                        <div className="mb-2">
                          <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="../../assets/img/212X200/img1.jpg" alt="Image Description" /></a>
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="prodcut-price">
                            <div className="text-gray-100">$685,00</div>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="product-item__footer">
                        <div className="border-top pt-2 flex-center-between flex-wrap">
                          <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                          <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Add to Wishlist</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="col-xl-6 product-item max-width-xl-100 d-md-none d-wd-block product-item remove-divider">
                  <div className="product-item__outer h-100 w-100 prodcut-box-shadow">
                    <div className="product-item__inner bg-white p-3">
                      <div className="product-item__body pb-xl-2">
                        <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                        <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">GameConsole Destiny  Special Edition</a></h5>
                        <div className="mb-2">
                          <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="../../assets/img/212X200/img7.jpg" alt="Image Description" /></a>
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="prodcut-price">
                            <div className="text-gray-100">$685,00</div>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="product-item__footer">
                        <div className="border-top pt-2 flex-center-between flex-wrap">
                          <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                          <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Add to Wishlist</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="col-md-6 col-wd-4 products-group-1">
              <ul className="row list-unstyled products-group no-gutters bg-white h-100 mb-0">
                <li className="col product-item remove-divider">
                  <div className="product-item__outer h-100 w-100 prodcut-box-shadow">
                    <div className="product-item__inner bg-white p-3">
                      <div className="product-item__body d-flex flex-column">
                        <div className="mb-1">
                          <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Game Consoles</a></div>
                          <h5 className="mb-0 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Game Console Controller + USB 3.0 Cable</a></h5>
                        </div>
                        <div className="mb-1 min-height-4-1-4">
                          <a href="#" className="d-block text-center my-4 mt-lg-6 mb-lg-5 mt-xl-0 mb-xl-0 mt-wd-6 mb-wd-5"><img className="img-fluid" src="../../assets/img/564X520/img2.jpg" alt="Image Description" /></a>
                          {/* Gallery */}
                          <div className="row mx-gutters-2 mb-3">
                            <div className="col-auto">
                              {/* Gallery */}
                              <a className="js-fancybox max-width-60 u-media-viewer" href="javascript:;" data-src="../../assets/img/1920X1080/img1.jpg" data-fancybox="fancyboxGallery6" data-caption="Electro in frames - image #01" data-speed={700} data-is-infinite="true">
                                <img className="img-fluid border" src="../../assets/img/100X100/img1.jpg" alt="Image Description" />
                                <span className="u-media-viewer__container">
                                  <span className="u-media-viewer__icon">
                                    <span className="fas fa-plus u-media-viewer__icon-inner" />
                                  </span>
                                </span>
                              </a>
                              {/* End Gallery */}
                            </div>
                            <div className="col-auto">
                              {/* Gallery */}
                              <a className="js-fancybox max-width-60 u-media-viewer" href="javascript:;" data-src="../../assets/img/1920X1080/img2.jpg" data-fancybox="fancyboxGallery6" data-caption="Electro in frames - image #02" data-speed={700} data-is-infinite="true">
                                <img className="img-fluid border" src="../../assets/img/100X100/img2.jpg" alt="Image Description" />
                                <span className="u-media-viewer__container">
                                  <span className="u-media-viewer__icon">
                                    <span className="fas fa-plus u-media-viewer__icon-inner" />
                                  </span>
                                </span>
                              </a>
                              {/* End Gallery */}
                            </div>
                            <div className="col-auto">
                              {/* Gallery */}
                              <a className="js-fancybox max-width-60 u-media-viewer" href="javascript:;" data-src="../../assets/img/1920X1080/img3.jpg" data-fancybox="fancyboxGallery6" data-caption="Electro in frames - image #03" data-speed={700} data-is-infinite="true">
                                <img className="img-fluid border" src="../../assets/img/100X100/img3.jpg" alt="Image Description" />
                                <span className="u-media-viewer__container">
                                  <span className="u-media-viewer__icon">
                                    <span className="fas fa-plus u-media-viewer__icon-inner" />
                                  </span>
                                </span>
                              </a>
                              {/* End Gallery */}
                            </div>
                            <div className="col" />
                          </div>
                          {/* End Gallery */}
                        </div>
                        <div className="flex-center-between">
                          <div className="prodcut-price">
                            <div className="text-gray-100">$685,00</div>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-add-cart__wide btn-primary transition-3d-hover"><i className="ec ec-add-to-cart mr-2" /> Add to Cart</a>
                          </div>
                        </div>
                      </div>
                      <div className="product-item__footer">
                        <div className="border-top pt-2 flex-center-between flex-wrap">
                          <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                          <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Add to Wishlist</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="col-md-3 col-wd-4 d-md-flex d-wd-block">
              <ul className="row list-unstyled products-group no-gutters mb-0 flex-xl-column flex-wd-row">
                <li className="col-xl-6 product-item max-width-xl-100 remove-divider">
                  <div className="product-item__outer h-100 w-100 prodcut-box-shadow">
                    <div className="product-item__inner bg-white p-3">
                      <div className="product-item__body pb-xl-2">
                        <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                        <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Wireless Audio System Multiroom 360 degree Full base audio</a></h5>
                        <div className="mb-2">
                          <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="../../assets/img/212X200/img1.jpg" alt="Image Description" /></a>
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="prodcut-price">
                            <div className="text-gray-100">$685,00</div>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="product-item__footer">
                        <div className="border-top pt-2 flex-center-between flex-wrap">
                          <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                          <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Add to Wishlist</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="col-xl-6 product-item max-width-xl-100 remove-divider">
                  <div className="product-item__outer h-100 w-100 prodcut-box-shadow">
                    <div className="product-item__inner bg-white p-3">
                      <div className="product-item__body pb-xl-2">
                        <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                        <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Tablet White EliteBook Revolve 810 G2</a></h5>
                        <div className="mb-2">
                          <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="../../assets/img/212X200/img2.jpg" alt="Image Description" /></a>
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="prodcut-price">
                            <div className="text-gray-100">$685,00</div>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="product-item__footer">
                        <div className="border-top pt-2 flex-center-between flex-wrap">
                          <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                          <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Add to Wishlist</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="col-xl-6 product-item max-width-xl-100 d-md-none d-wd-block product-item remove-divider">
                  <div className="product-item__outer h-100 w-100 prodcut-box-shadow">
                    <div className="product-item__inner bg-white p-3">
                      <div className="product-item__body pb-xl-2">
                        <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                        <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Wireless Audio System Multiroom 360 degree Full base audio</a></h5>
                        <div className="mb-2">
                          <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="../../assets/img/212X200/img1.jpg" alt="Image Description" /></a>
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="prodcut-price">
                            <div className="text-gray-100">$685,00</div>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="product-item__footer">
                        <div className="border-top pt-2 flex-center-between flex-wrap">
                          <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                          <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Add to Wishlist</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="col-xl-6 product-item max-width-xl-100 d-md-none d-wd-block product-item remove-divider">
                  <div className="product-item__outer h-100 w-100 prodcut-box-shadow">
                    <div className="product-item__inner bg-white p-3">
                      <div className="product-item__body pb-xl-2">
                        <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                        <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">GameConsole Destiny  Special Edition</a></h5>
                        <div className="mb-2">
                          <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="../../assets/img/212X200/img7.jpg" alt="Image Description" /></a>
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="prodcut-price">
                            <div className="text-gray-100">$685,00</div>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="product-item__footer">
                        <div className="border-top pt-2 flex-center-between flex-wrap">
                          <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                          <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Add to Wishlist</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="tab-pane fade pt-2" id="Tpills-four-example1" role="tabpanel" aria-labelledby="Tpills-four-example1-tab">
          <div className="row no-gutters">
            <div className="col-md-3 col-wd-4 d-md-flex d-wd-block">
              <ul className="row list-unstyled products-group no-gutters mb-0 flex-xl-column flex-wd-row">
                <li className="col-xl-6 product-item max-width-xl-100 remove-divider">
                  <div className="product-item__outer h-100 w-100 prodcut-box-shadow">
                    <div className="product-item__inner bg-white p-3">
                      <div className="product-item__body pb-xl-2">
                        <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                        <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Wireless Audio System Multiroom 360 degree Full base audio</a></h5>
                        <div className="mb-2">
                          <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="../../assets/img/212X200/img1.jpg" alt="Image Description" /></a>
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="prodcut-price">
                            <div className="text-gray-100">$685,00</div>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="product-item__footer">
                        <div className="border-top pt-2 flex-center-between flex-wrap">
                          <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                          <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Add to Wishlist</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-xl-6 product-item max-width-xl-100 remove-divider">
                  <div className="product-item__outer h-100 w-100 prodcut-box-shadow">
                    <div className="product-item__inner bg-white p-3">
                      <div className="product-item__body pb-xl-2">
                        <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                        <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Tablet White EliteBook Revolve 810 G2</a></h5>
                        <div className="mb-2">
                          <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="../../assets/img/212X200/img2.jpg" alt="Image Description" /></a>
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="prodcut-price">
                            <div className="text-gray-100">$685,00</div>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="product-item__footer">
                        <div className="border-top pt-2 flex-center-between flex-wrap">
                          <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                          <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Add to Wishlist</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-xl-6 product-item max-width-xl-100 d-md-none d-wd-block product-item remove-divider">
                  <div className="product-item__outer h-100 w-100 prodcut-box-shadow">
                    <div className="product-item__inner bg-white p-3">
                      <div className="product-item__body pb-xl-2">
                        <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                        <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Wireless Audio System Multiroom 360 degree Full base audio</a></h5>
                        <div className="mb-2">
                          <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="../../assets/img/212X200/img1.jpg" alt="Image Description" /></a>
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="prodcut-price">
                            <div className="text-gray-100">$685,00</div>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="product-item__footer">
                        <div className="border-top pt-2 flex-center-between flex-wrap">
                          <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                          <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Add to Wishlist</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="col-xl-6 product-item max-width-xl-100 d-md-none d-wd-block product-item remove-divider">
                  <div className="product-item__outer h-100 w-100 prodcut-box-shadow">
                    <div className="product-item__inner bg-white p-3">
                      <div className="product-item__body pb-xl-2">
                        <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                        <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">GameConsole Destiny  Special Edition</a></h5>
                        <div className="mb-2">
                          <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="../../assets/img/212X200/img7.jpg" alt="Image Description" /></a>
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="prodcut-price">
                            <div className="text-gray-100">$685,00</div>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="product-item__footer">
                        <div className="border-top pt-2 flex-center-between flex-wrap">
                          <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                          <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Add to Wishlist</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="col-md-6 col-wd-4 products-group-1">
              <ul className="row list-unstyled products-group no-gutters bg-white h-100 mb-0">
                <li className="col product-item remove-divider">
                  <div className="product-item__outer h-100 w-100 prodcut-box-shadow">
                    <div className="product-item__inner bg-white p-3">
                      <div className="product-item__body d-flex flex-column">
                        <div className="mb-1">
                          <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Game Consoles</a></div>
                          <h5 className="mb-0 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Game Console Controller + USB 3.0 Cable</a></h5>
                        </div>
                        <div className="mb-1 min-height-4-1-4">
                          <a href="#" className="d-block text-center my-4 mt-lg-6 mb-lg-5 mt-xl-0 mb-xl-0 mt-wd-6 mb-wd-5"><img className="img-fluid" src="../../assets/img/564X520/img2.jpg" alt="Image Description" /></a>
                          {/* Gallery */}
                          <div className="row mx-gutters-2 mb-3">
                            <div className="col-auto">
                              {/* Gallery */}
                              <a className="js-fancybox max-width-60 u-media-viewer" href="javascript:;" data-src="../../assets/img/1920X1080/img1.jpg" data-fancybox="fancyboxGallery6" data-caption="Electro in frames - image #01" data-speed={700} data-is-infinite="true">
                                <img className="img-fluid border" src="../../assets/img/100X100/img1.jpg" alt="Image Description" />
                                <span className="u-media-viewer__container">
                                  <span className="u-media-viewer__icon">
                                    <span className="fas fa-plus u-media-viewer__icon-inner" />
                                  </span>
                                </span>
                              </a>
                              {/* End Gallery */}
                            </div>
                            <div className="col-auto">
                              {/* Gallery */}
                              <a className="js-fancybox max-width-60 u-media-viewer" href="javascript:;" data-src="../../assets/img/1920X1080/img2.jpg" data-fancybox="fancyboxGallery6" data-caption="Electro in frames - image #02" data-speed={700} data-is-infinite="true">
                                <img className="img-fluid border" src="../../assets/img/100X100/img2.jpg" alt="Image Description" />
                                <span className="u-media-viewer__container">
                                  <span className="u-media-viewer__icon">
                                    <span className="fas fa-plus u-media-viewer__icon-inner" />
                                  </span>
                                </span>
                              </a>
                              {/* End Gallery */}
                            </div>
                            <div className="col-auto">
                              {/* Gallery */}
                              <a className="js-fancybox max-width-60 u-media-viewer" href="javascript:;" data-src="../../assets/img/1920X1080/img3.jpg" data-fancybox="fancyboxGallery6" data-caption="Electro in frames - image #03" data-speed={700} data-is-infinite="true">
                                <img className="img-fluid border" src="../../assets/img/100X100/img3.jpg" alt="Image Description" />
                                <span className="u-media-viewer__container">
                                  <span className="u-media-viewer__icon">
                                    <span className="fas fa-plus u-media-viewer__icon-inner" />
                                  </span>
                                </span>
                              </a>
                              {/* End Gallery */}
                            </div>
                            <div className="col" />
                          </div>
                          {/* End Gallery */}
                        </div>
                        <div className="flex-center-between">
                          <div className="prodcut-price">
                            <div className="text-gray-100">$685,00</div>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-add-cart__wide btn-primary transition-3d-hover"><i className="ec ec-add-to-cart mr-2" /> Add to Cart</a>
                          </div>
                        </div>
                      </div>
                      <div className="product-item__footer">
                        <div className="border-top pt-2 flex-center-between flex-wrap">
                          <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                          <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Add to Wishlist</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="col-md-3 col-wd-4 d-md-flex d-wd-block">
              <ul className="row list-unstyled products-group no-gutters mb-0 flex-xl-column flex-wd-row">
                <li className="col-xl-6 product-item max-width-xl-100 remove-divider">
                  <div className="product-item__outer h-100 w-100 prodcut-box-shadow">
                    <div className="product-item__inner bg-white p-3">
                      <div className="product-item__body pb-xl-2">
                        <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                        <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Wireless Audio System Multiroom 360 degree Full base audio</a></h5>
                        <div className="mb-2">
                          <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="../../assets/img/212X200/img1.jpg" alt="Image Description" /></a>
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="prodcut-price">
                            <div className="text-gray-100">$685,00</div>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="product-item__footer">
                        <div className="border-top pt-2 flex-center-between flex-wrap">
                          <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                          <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Add to Wishlist</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-xl-6 product-item max-width-xl-100 remove-divider">
                  <div className="product-item__outer h-100 w-100 prodcut-box-shadow">
                    <div className="product-item__inner bg-white p-3">
                      <div className="product-item__body pb-xl-2">
                        <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                        <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Tablet White EliteBook Revolve 810 G2</a></h5>
                        <div className="mb-2">
                          <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="../../assets/img/212X200/img2.jpg" alt="Image Description" /></a>
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="prodcut-price">
                            <div className="text-gray-100">$685,00</div>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="product-item__footer">
                        <div className="border-top pt-2 flex-center-between flex-wrap">
                          <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                          <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Add to Wishlist</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-xl-6 product-item max-width-xl-100 d-md-none d-wd-block product-item remove-divider">
                  <div className="product-item__outer h-100 w-100 prodcut-box-shadow">
                    <div className="product-item__inner bg-white p-3">
                      <div className="product-item__body pb-xl-2">
                        <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                        <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Wireless Audio System Multiroom 360 degree Full base audio</a></h5>
                        <div className="mb-2">
                          <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="../../assets/img/212X200/img1.jpg" alt="Image Description" /></a>
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="prodcut-price">
                            <div className="text-gray-100">$685,00</div>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="product-item__footer">
                        <div className="border-top pt-2 flex-center-between flex-wrap">
                          <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                          <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Add to Wishlist</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-xl-6 product-item max-width-xl-100 d-md-none d-wd-block product-item remove-divider">
                  <div className="product-item__outer h-100 w-100 prodcut-box-shadow">
                    <div className="product-item__inner bg-white p-3">
                      <div className="product-item__body pb-xl-2">
                        <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                        <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">GameConsole Destiny  Special Edition</a></h5>
                        <div className="mb-2">
                          <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="../../assets/img/212X200/img7.jpg" alt="Image Description" /></a>
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="prodcut-price">
                            <div className="text-gray-100">$685,00</div>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="product-item__footer">
                        <div className="border-top pt-2 flex-center-between flex-wrap">
                          <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                          <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Add to Wishlist</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="tab-pane fade pt-2" id="Tpills-five-example1" role="tabpanel" aria-labelledby="Tpills-five-example1-tab">
          <div className="row no-gutters">
            <div className="col-md-3 col-wd-4 d-md-flex d-wd-block">
              <ul className="row list-unstyled products-group no-gutters mb-0 flex-xl-column flex-wd-row">
                <li className="col-xl-6 product-item max-width-xl-100 remove-divider">
                  <div className="product-item__outer h-100 w-100 prodcut-box-shadow">
                    <div className="product-item__inner bg-white p-3">
                      <div className="product-item__body pb-xl-2">
                        <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                        <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Wireless Audio System Multiroom 360 degree Full base audio</a></h5>
                        <div className="mb-2">
                          <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="../../assets/img/212X200/img1.jpg" alt="Image Description" /></a>
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="prodcut-price">
                            <div className="text-gray-100">$685,00</div>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="product-item__footer">
                        <div className="border-top pt-2 flex-center-between flex-wrap">
                          <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                          <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Add to Wishlist</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-xl-6 product-item max-width-xl-100 remove-divider">
                  <div className="product-item__outer h-100 w-100 prodcut-box-shadow">
                    <div className="product-item__inner bg-white p-3">
                      <div className="product-item__body pb-xl-2">
                        <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                        <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Tablet White EliteBook Revolve 810 G2</a></h5>
                        <div className="mb-2">
                          <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="../../assets/img/212X200/img2.jpg" alt="Image Description" /></a>
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="prodcut-price">
                            <div className="text-gray-100">$685,00</div>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="product-item__footer">
                        <div className="border-top pt-2 flex-center-between flex-wrap">
                          <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                          <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Add to Wishlist</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-xl-6 product-item max-width-xl-100 d-md-none d-wd-block product-item remove-divider">
                  <div className="product-item__outer h-100 w-100 prodcut-box-shadow">
                    <div className="product-item__inner bg-white p-3">
                      <div className="product-item__body pb-xl-2">
                        <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                        <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Wireless Audio System Multiroom 360 degree Full base audio</a></h5>
                        <div className="mb-2">
                          <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="../../assets/img/212X200/img1.jpg" alt="Image Description" /></a>
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="prodcut-price">
                            <div className="text-gray-100">$685,00</div>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="product-item__footer">
                        <div className="border-top pt-2 flex-center-between flex-wrap">
                          <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                          <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Add to Wishlist</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-xl-6 product-item max-width-xl-100 d-md-none d-wd-block product-item remove-divider">
                  <div className="product-item__outer h-100 w-100 prodcut-box-shadow">
                    <div className="product-item__inner bg-white p-3">
                      <div className="product-item__body pb-xl-2">
                        <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                        <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">GameConsole Destiny  Special Edition</a></h5>
                        <div className="mb-2">
                          <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="../../assets/img/212X200/img7.jpg" alt="Image Description" /></a>
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="prodcut-price">
                            <div className="text-gray-100">$685,00</div>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="product-item__footer">
                        <div className="border-top pt-2 flex-center-between flex-wrap">
                          <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                          <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Add to Wishlist</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-wd-4 products-group-1">
              <ul className="row list-unstyled products-group no-gutters bg-white h-100 mb-0">
                <li className="col product-item remove-divider">
                  <div className="product-item__outer h-100 w-100 prodcut-box-shadow">
                    <div className="product-item__inner bg-white p-3">
                      <div className="product-item__body d-flex flex-column">
                        <div className="mb-1">
                          <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Game Consoles</a></div>
                          <h5 className="mb-0 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Game Console Controller + USB 3.0 Cable</a></h5>
                        </div>
                        <div className="mb-1 min-height-4-1-4">
                          <a href="#" className="d-block text-center my-4 mt-lg-6 mb-lg-5 mt-xl-0 mb-xl-0 mt-wd-6 mb-wd-5"><img className="img-fluid" src="../../assets/img/564X520/img2.jpg" alt="Image Description" /></a>
                          {/* Gallery */}
                          <div className="row mx-gutters-2 mb-3">
                            <div className="col-auto">
                              {/* Gallery */}
                              <a className="js-fancybox max-width-60 u-media-viewer" href="javascript:;" data-src="../../assets/img/1920X1080/img1.jpg" data-fancybox="fancyboxGallery6" data-caption="Electro in frames - image #01" data-speed={700} data-is-infinite="true">
                                <img className="img-fluid border" src="../../assets/img/100X100/img1.jpg" alt="Image Description" />
                                <span className="u-media-viewer__container">
                                  <span className="u-media-viewer__icon">
                                    <span className="fas fa-plus u-media-viewer__icon-inner" />
                                  </span>
                                </span>
                              </a>
                              {/* End Gallery */}
                            </div>
                            <div className="col-auto">
                              {/* Gallery */}
                              <a className="js-fancybox max-width-60 u-media-viewer" href="javascript:;" data-src="../../assets/img/1920X1080/img2.jpg" data-fancybox="fancyboxGallery6" data-caption="Electro in frames - image #02" data-speed={700} data-is-infinite="true">
                                <img className="img-fluid border" src="../../assets/img/100X100/img2.jpg" alt="Image Description" />
                                <span className="u-media-viewer__container">
                                  <span className="u-media-viewer__icon">
                                    <span className="fas fa-plus u-media-viewer__icon-inner" />
                                  </span>
                                </span>
                              </a>
                              {/* End Gallery */}
                            </div>
                            <div className="col-auto">
                              {/* Gallery */}
                              <a className="js-fancybox max-width-60 u-media-viewer" href="javascript:;" data-src="../../assets/img/1920X1080/img3.jpg" data-fancybox="fancyboxGallery6" data-caption="Electro in frames - image #03" data-speed={700} data-is-infinite="true">
                                <img className="img-fluid border" src="../../assets/img/100X100/img3.jpg" alt="Image Description" />
                                <span className="u-media-viewer__container">
                                  <span className="u-media-viewer__icon">
                                    <span className="fas fa-plus u-media-viewer__icon-inner" />
                                  </span>
                                </span>
                              </a>
                              {/* End Gallery */}
                            </div>
                            <div className="col" />
                          </div>
                          {/* End Gallery */}
                        </div>
                        <div className="flex-center-between">
                          <div className="prodcut-price">
                            <div className="text-gray-100">$685,00</div>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-add-cart__wide btn-primary transition-3d-hover"><i className="ec ec-add-to-cart mr-2" /> Add to Cart</a>
                          </div>
                        </div>
                      </div>
                      <div className="product-item__footer">
                        <div className="border-top pt-2 flex-center-between flex-wrap">
                          <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                          <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Add to Wishlist</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-wd-4 d-md-flex d-wd-block">
              <ul className="row list-unstyled products-group no-gutters mb-0 flex-xl-column flex-wd-row">
                <li className="col-xl-6 product-item max-width-xl-100 remove-divider">
                  <div className="product-item__outer h-100 w-100 prodcut-box-shadow">
                    <div className="product-item__inner bg-white p-3">
                      <div className="product-item__body pb-xl-2">
                        <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                        <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Wireless Audio System Multiroom 360 degree Full base audio</a></h5>
                        <div className="mb-2">
                          <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="../../assets/img/212X200/img1.jpg" alt="Image Description" /></a>
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="prodcut-price">
                            <div className="text-gray-100">$685,00</div>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="product-item__footer">
                        <div className="border-top pt-2 flex-center-between flex-wrap">
                          <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                          <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Add to Wishlist</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-xl-6 product-item max-width-xl-100 remove-divider">
                  <div className="product-item__outer h-100 w-100 prodcut-box-shadow">
                    <div className="product-item__inner bg-white p-3">
                      <div className="product-item__body pb-xl-2">
                        <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                        <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Tablet White EliteBook Revolve 810 G2</a></h5>
                        <div className="mb-2">
                          <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="../../assets/img/212X200/img2.jpg" alt="Image Description" /></a>
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="prodcut-price">
                            <div className="text-gray-100">$685,00</div>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="product-item__footer">
                        <div className="border-top pt-2 flex-center-between flex-wrap">
                          <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                          <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Add to Wishlist</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-xl-6 product-item max-width-xl-100 d-md-none d-wd-block product-item remove-divider">
                  <div className="product-item__outer h-100 w-100 prodcut-box-shadow">
                    <div className="product-item__inner bg-white p-3">
                      <div className="product-item__body pb-xl-2">
                        <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                        <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Wireless Audio System Multiroom 360 degree Full base audio</a></h5>
                        <div className="mb-2">
                          <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="../../assets/img/212X200/img1.jpg" alt="Image Description" /></a>
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="prodcut-price">
                            <div className="text-gray-100">$685,00</div>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="product-item__footer">
                        <div className="border-top pt-2 flex-center-between flex-wrap">
                          <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                          <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Add to Wishlist</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-xl-6 product-item max-width-xl-100 d-md-none d-wd-block product-item remove-divider">
                  <div className="product-item__outer h-100 w-100 prodcut-box-shadow">
                    <div className="product-item__inner bg-white p-3">
                      <div className="product-item__body pb-xl-2">
                        <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                        <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">GameConsole Destiny  Special Edition</a></h5>
                        <div className="mb-2">
                          <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="../../assets/img/212X200/img7.jpg" alt="Image Description" /></a>
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="prodcut-price">
                            <div className="text-gray-100">$685,00</div>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="product-item__footer">
                        <div className="border-top pt-2 flex-center-between flex-wrap">
                          <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                          <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Add to Wishlist</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="tab-pane fade pt-2" id="Tpills-six-example1" role="tabpanel" aria-labelledby="Tpills-six-example1-tab">
          <div className="row no-gutters">
            <div className="col-md-3 col-wd-4 d-md-flex d-wd-block">
              <ul className="row list-unstyled products-group no-gutters mb-0 flex-xl-column flex-wd-row">
                <li className="col-xl-6 product-item max-width-xl-100 remove-divider">
                  <div className="product-item__outer h-100 w-100 prodcut-box-shadow">
                    <div className="product-item__inner bg-white p-3">
                      <div className="product-item__body pb-xl-2">
                        <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                        <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Wireless Audio System Multiroom 360 degree Full base audio</a></h5>
                        <div className="mb-2">
                          <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="../../assets/img/212X200/img1.jpg" alt="Image Description" /></a>
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="prodcut-price">
                            <div className="text-gray-100">$685,00</div>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="product-item__footer">
                        <div className="border-top pt-2 flex-center-between flex-wrap">
                          <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                          <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Add to Wishlist</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-xl-6 product-item max-width-xl-100 remove-divider">
                  <div className="product-item__outer h-100 w-100 prodcut-box-shadow">
                    <div className="product-item__inner bg-white p-3">
                      <div className="product-item__body pb-xl-2">
                        <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                        <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Tablet White EliteBook Revolve 810 G2</a></h5>
                        <div className="mb-2">
                          <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="../../assets/img/212X200/img2.jpg" alt="Image Description" /></a>
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="prodcut-price">
                            <div className="text-gray-100">$685,00</div>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="product-item__footer">
                        <div className="border-top pt-2 flex-center-between flex-wrap">
                          <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                          <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Add to Wishlist</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-xl-6 product-item max-width-xl-100 d-md-none d-wd-block product-item remove-divider">
                  <div className="product-item__outer h-100 w-100 prodcut-box-shadow">
                    <div className="product-item__inner bg-white p-3">
                      <div className="product-item__body pb-xl-2">
                        <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                        <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Wireless Audio System Multiroom 360 degree Full base audio</a></h5>
                        <div className="mb-2">
                          <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="../../assets/img/212X200/img1.jpg" alt="Image Description" /></a>
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="prodcut-price">
                            <div className="text-gray-100">$685,00</div>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="product-item__footer">
                        <div className="border-top pt-2 flex-center-between flex-wrap">
                          <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                          <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Add to Wishlist</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-xl-6 product-item max-width-xl-100 d-md-none d-wd-block product-item remove-divider">
                  <div className="product-item__outer h-100 w-100 prodcut-box-shadow">
                    <div className="product-item__inner bg-white p-3">
                      <div className="product-item__body pb-xl-2">
                        <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                        <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">GameConsole Destiny  Special Edition</a></h5>
                        <div className="mb-2">
                          <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="../../assets/img/212X200/img7.jpg" alt="Image Description" /></a>
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="prodcut-price">
                            <div className="text-gray-100">$685,00</div>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="product-item__footer">
                        <div className="border-top pt-2 flex-center-between flex-wrap">
                          <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                          <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Add to Wishlist</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-wd-4 products-group-1">
              <ul className="row list-unstyled products-group no-gutters bg-white h-100 mb-0">
                <li className="col product-item remove-divider">
                  <div className="product-item__outer h-100 w-100 prodcut-box-shadow">
                    <div className="product-item__inner bg-white p-3">
                      <div className="product-item__body d-flex flex-column">
                        <div className="mb-1">
                          <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Game Consoles</a></div>
                          <h5 className="mb-0 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Game Console Controller + USB 3.0 Cable</a></h5>
                        </div>
                        <div className="mb-1 min-height-4-1-4">
                          <a href="#" className="d-block text-center my-4 mt-lg-6 mb-lg-5 mt-xl-0 mb-xl-0 mt-wd-6 mb-wd-5"><img className="img-fluid" src="../../assets/img/564X520/img2.jpg" alt="Image Description" /></a>
                          {/* Gallery */}
                          <div className="row mx-gutters-2 mb-3">
                            <div className="col-auto">
                              {/* Gallery */}
                              <a className="js-fancybox max-width-60 u-media-viewer" href="javascript:;" data-src="../../assets/img/1920X1080/img1.jpg" data-fancybox="fancyboxGallery6" data-caption="Electro in frames - image #01" data-speed={700} data-is-infinite="true">
                                <img className="img-fluid border" src="../../assets/img/100X100/img1.jpg" alt="Image Description" />
                                <span className="u-media-viewer__container">
                                  <span className="u-media-viewer__icon">
                                    <span className="fas fa-plus u-media-viewer__icon-inner" />
                                  </span>
                                </span>
                              </a>
                              {/* End Gallery */}
                            </div>
                            <div className="col-auto">
                              {/* Gallery */}
                              <a className="js-fancybox max-width-60 u-media-viewer" href="javascript:;" data-src="../../assets/img/1920X1080/img2.jpg" data-fancybox="fancyboxGallery6" data-caption="Electro in frames - image #02" data-speed={700} data-is-infinite="true">
                                <img className="img-fluid border" src="../../assets/img/100X100/img2.jpg" alt="Image Description" />
                                <span className="u-media-viewer__container">
                                  <span className="u-media-viewer__icon">
                                    <span className="fas fa-plus u-media-viewer__icon-inner" />
                                  </span>
                                </span>
                              </a>
                              {/* End Gallery */}
                            </div>
                            <div className="col-auto">
                              {/* Gallery */}
                              <a className="js-fancybox max-width-60 u-media-viewer" href="javascript:;" data-src="../../assets/img/1920X1080/img3.jpg" data-fancybox="fancyboxGallery6" data-caption="Electro in frames - image #03" data-speed={700} data-is-infinite="true">
                                <img className="img-fluid border" src="../../assets/img/100X100/img3.jpg" alt="Image Description" />
                                <span className="u-media-viewer__container">
                                  <span className="u-media-viewer__icon">
                                    <span className="fas fa-plus u-media-viewer__icon-inner" />
                                  </span>
                                </span>
                              </a>
                              {/* End Gallery */}
                            </div>
                            <div className="col" />
                          </div>
                          {/* End Gallery */}
                        </div>
                        <div className="flex-center-between">
                          <div className="prodcut-price">
                            <div className="text-gray-100">$685,00</div>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-add-cart__wide btn-primary transition-3d-hover"><i className="ec ec-add-to-cart mr-2" /> Add to Cart</a>
                          </div>
                        </div>
                      </div>
                      <div className="product-item__footer">
                        <div className="border-top pt-2 flex-center-between flex-wrap">
                          <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                          <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Add to Wishlist</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-wd-4 d-md-flex d-wd-block">
              <ul className="row list-unstyled products-group no-gutters mb-0 flex-xl-column flex-wd-row">
                <li className="col-xl-6 product-item max-width-xl-100 remove-divider">
                  <div className="product-item__outer h-100 w-100 prodcut-box-shadow">
                    <div className="product-item__inner bg-white p-3">
                      <div className="product-item__body pb-xl-2">
                        <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                        <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Wireless Audio System Multiroom 360 degree Full base audio</a></h5>
                        <div className="mb-2">
                          <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="../../assets/img/212X200/img1.jpg" alt="Image Description" /></a>
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="prodcut-price">
                            <div className="text-gray-100">$685,00</div>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="product-item__footer">
                        <div className="border-top pt-2 flex-center-between flex-wrap">
                          <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                          <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Add to Wishlist</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-xl-6 product-item max-width-xl-100 remove-divider">
                  <div className="product-item__outer h-100 w-100 prodcut-box-shadow">
                    <div className="product-item__inner bg-white p-3">
                      <div className="product-item__body pb-xl-2">
                        <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                        <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Tablet White EliteBook Revolve 810 G2</a></h5>
                        <div className="mb-2">
                          <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="../../assets/img/212X200/img2.jpg" alt="Image Description" /></a>
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="prodcut-price">
                            <div className="text-gray-100">$685,00</div>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="product-item__footer">
                        <div className="border-top pt-2 flex-center-between flex-wrap">
                          <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                          <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Add to Wishlist</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-xl-6 product-item max-width-xl-100 d-md-none d-wd-block product-item remove-divider">
                  <div className="product-item__outer h-100 w-100 prodcut-box-shadow">
                    <div className="product-item__inner bg-white p-3">
                      <div className="product-item__body pb-xl-2">
                        <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                        <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Wireless Audio System Multiroom 360 degree Full base audio</a></h5>
                        <div className="mb-2">
                          <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="../../assets/img/212X200/img1.jpg" alt="Image Description" /></a>
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="prodcut-price">
                            <div className="text-gray-100">$685,00</div>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="product-item__footer">
                        <div className="border-top pt-2 flex-center-between flex-wrap">
                          <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                          <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Add to Wishlist</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-xl-6 product-item max-width-xl-100 d-md-none d-wd-block product-item remove-divider">
                  <div className="product-item__outer h-100 w-100 prodcut-box-shadow">
                    <div className="product-item__inner bg-white p-3">
                      <div className="product-item__body pb-xl-2">
                        <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                        <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">GameConsole Destiny  Special Edition</a></h5>
                        <div className="mb-2">
                          <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="../../assets/img/212X200/img7.jpg" alt="Image Description" /></a>
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="prodcut-price">
                            <div className="text-gray-100">$685,00</div>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="product-item__footer">
                        <div className="border-top pt-2 flex-center-between flex-wrap">
                          <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                          <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Add to Wishlist</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="tab-pane fade pt-2" id="Tpills-seven-example1" role="tabpanel" aria-labelledby="Tpills-seven-example1-tab">
          <div className="row no-gutters">
            <div className="col-md-3 col-wd-4 d-md-flex d-wd-block">
              <ul className="row list-unstyled products-group no-gutters mb-0 flex-xl-column flex-wd-row">
                <li className="col-xl-6 product-item max-width-xl-100 remove-divider">
                  <div className="product-item__outer h-100 w-100 prodcut-box-shadow">
                    <div className="product-item__inner bg-white p-3">
                      <div className="product-item__body pb-xl-2">
                        <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                        <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Wireless Audio System Multiroom 360 degree Full base audio</a></h5>
                        <div className="mb-2">
                          <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="../../assets/img/212X200/img1.jpg" alt="Image Description" /></a>
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="prodcut-price">
                            <div className="text-gray-100">$685,00</div>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="product-item__footer">
                        <div className="border-top pt-2 flex-center-between flex-wrap">
                          <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                          <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Add to Wishlist</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-xl-6 product-item max-width-xl-100 remove-divider">
                  <div className="product-item__outer h-100 w-100 prodcut-box-shadow">
                    <div className="product-item__inner bg-white p-3">
                      <div className="product-item__body pb-xl-2">
                        <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                        <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Tablet White EliteBook Revolve 810 G2</a></h5>
                        <div className="mb-2">
                          <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="../../assets/img/212X200/img2.jpg" alt="Image Description" /></a>
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="prodcut-price">
                            <div className="text-gray-100">$685,00</div>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="product-item__footer">
                        <div className="border-top pt-2 flex-center-between flex-wrap">
                          <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                          <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Add to Wishlist</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-xl-6 product-item max-width-xl-100 d-md-none d-wd-block product-item remove-divider">
                  <div className="product-item__outer h-100 w-100 prodcut-box-shadow">
                    <div className="product-item__inner bg-white p-3">
                      <div className="product-item__body pb-xl-2">
                        <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                        <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Wireless Audio System Multiroom 360 degree Full base audio</a></h5>
                        <div className="mb-2">
                          <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="../../assets/img/212X200/img1.jpg" alt="Image Description" /></a>
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="prodcut-price">
                            <div className="text-gray-100">$685,00</div>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="product-item__footer">
                        <div className="border-top pt-2 flex-center-between flex-wrap">
                          <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                          <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Add to Wishlist</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-xl-6 product-item max-width-xl-100 d-md-none d-wd-block product-item remove-divider">
                  <div className="product-item__outer h-100 w-100 prodcut-box-shadow">
                    <div className="product-item__inner bg-white p-3">
                      <div className="product-item__body pb-xl-2">
                        <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                        <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">GameConsole Destiny  Special Edition</a></h5>
                        <div className="mb-2">
                          <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="../../assets/img/212X200/img7.jpg" alt="Image Description" /></a>
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="prodcut-price">
                            <div className="text-gray-100">$685,00</div>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="product-item__footer">
                        <div className="border-top pt-2 flex-center-between flex-wrap">
                          <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                          <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Add to Wishlist</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-wd-4 products-group-1">
              <ul className="row list-unstyled products-group no-gutters bg-white h-100 mb-0">
                <li className="col product-item remove-divider">
                  <div className="product-item__outer h-100 w-100 prodcut-box-shadow">
                    <div className="product-item__inner bg-white p-3">
                      <div className="product-item__body d-flex flex-column">
                        <div className="mb-1">
                          <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Game Consoles</a></div>
                          <h5 className="mb-0 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Game Console Controller + USB 3.0 Cable</a></h5>
                        </div>
                        <div className="mb-1 min-height-4-1-4">
                          <a href="#" className="d-block text-center my-4 mt-lg-6 mb-lg-5 mt-xl-0 mb-xl-0 mt-wd-6 mb-wd-5"><img className="img-fluid" src="../../assets/img/564X520/img2.jpg" alt="Image Description" /></a>
                          {/* Gallery */}
                          <div className="row mx-gutters-2 mb-3">
                            <div className="col-auto">
                              {/* Gallery */}
                              <a className="js-fancybox max-width-60 u-media-viewer" href="javascript:;" data-src="../../assets/img/1920X1080/img1.jpg" data-fancybox="fancyboxGallery6" data-caption="Electro in frames - image #01" data-speed={700} data-is-infinite="true">
                                <img className="img-fluid border" src="../../assets/img/100X100/img1.jpg" alt="Image Description" />
                                <span className="u-media-viewer__container">
                                  <span className="u-media-viewer__icon">
                                    <span className="fas fa-plus u-media-viewer__icon-inner" />
                                  </span>
                                </span>
                              </a>
                              {/* End Gallery */}
                            </div>
                            <div className="col-auto">
                              {/* Gallery */}
                              <a className="js-fancybox max-width-60 u-media-viewer" href="javascript:;" data-src="../../assets/img/1920X1080/img2.jpg" data-fancybox="fancyboxGallery6" data-caption="Electro in frames - image #02" data-speed={700} data-is-infinite="true">
                                <img className="img-fluid border" src="../../assets/img/100X100/img2.jpg" alt="Image Description" />
                                <span className="u-media-viewer__container">
                                  <span className="u-media-viewer__icon">
                                    <span className="fas fa-plus u-media-viewer__icon-inner" />
                                  </span>
                                </span>
                              </a>
                              {/* End Gallery */}
                            </div>
                            <div className="col-auto">
                              {/* Gallery */}
                              <a className="js-fancybox max-width-60 u-media-viewer" href="javascript:;" data-src="../../assets/img/1920X1080/img3.jpg" data-fancybox="fancyboxGallery6" data-caption="Electro in frames - image #03" data-speed={700} data-is-infinite="true">
                                <img className="img-fluid border" src="../../assets/img/100X100/img3.jpg" alt="Image Description" />
                                <span className="u-media-viewer__container">
                                  <span className="u-media-viewer__icon">
                                    <span className="fas fa-plus u-media-viewer__icon-inner" />
                                  </span>
                                </span>
                              </a>
                              {/* End Gallery */}
                            </div>
                            <div className="col" />
                          </div>
                          {/* End Gallery */}
                        </div>
                        <div className="flex-center-between">
                          <div className="prodcut-price">
                            <div className="text-gray-100">$685,00</div>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-add-cart__wide btn-primary transition-3d-hover"><i className="ec ec-add-to-cart mr-2" /> Add to Cart</a>
                          </div>
                        </div>
                      </div>
                      <div className="product-item__footer">
                        <div className="border-top pt-2 flex-center-between flex-wrap">
                          <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                          <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Add to Wishlist</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-wd-4 d-md-flex d-wd-block">
              <ul className="row list-unstyled products-group no-gutters mb-0 flex-xl-column flex-wd-row">
                <li className="col-xl-6 product-item max-width-xl-100 remove-divider">
                  <div className="product-item__outer h-100 w-100 prodcut-box-shadow">
                    <div className="product-item__inner bg-white p-3">
                      <div className="product-item__body pb-xl-2">
                        <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                        <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Wireless Audio System Multiroom 360 degree Full base audio</a></h5>
                        <div className="mb-2">
                          <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="../../assets/img/212X200/img1.jpg" alt="Image Description" /></a>
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="prodcut-price">
                            <div className="text-gray-100">$685,00</div>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="product-item__footer">
                        <div className="border-top pt-2 flex-center-between flex-wrap">
                          <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                          <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Add to Wishlist</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-xl-6 product-item max-width-xl-100 remove-divider">
                  <div className="product-item__outer h-100 w-100 prodcut-box-shadow">
                    <div className="product-item__inner bg-white p-3">
                      <div className="product-item__body pb-xl-2">
                        <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                        <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Tablet White EliteBook Revolve 810 G2</a></h5>
                        <div className="mb-2">
                          <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="../../assets/img/212X200/img2.jpg" alt="Image Description" /></a>
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="prodcut-price">
                            <div className="text-gray-100">$685,00</div>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="product-item__footer">
                        <div className="border-top pt-2 flex-center-between flex-wrap">
                          <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                          <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Add to Wishlist</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-xl-6 product-item max-width-xl-100 d-md-none d-wd-block product-item remove-divider">
                  <div className="product-item__outer h-100 w-100 prodcut-box-shadow">
                    <div className="product-item__inner bg-white p-3">
                      <div className="product-item__body pb-xl-2">
                        <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                        <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Wireless Audio System Multiroom 360 degree Full base audio</a></h5>
                        <div className="mb-2">
                          <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="../../assets/img/212X200/img1.jpg" alt="Image Description" /></a>
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="prodcut-price">
                            <div className="text-gray-100">$685,00</div>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="product-item__footer">
                        <div className="border-top pt-2 flex-center-between flex-wrap">
                          <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                          <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Add to Wishlist</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-xl-6 product-item max-width-xl-100 d-md-none d-wd-block product-item remove-divider">
                  <div className="product-item__outer h-100 w-100 prodcut-box-shadow">
                    <div className="product-item__inner bg-white p-3">
                      <div className="product-item__body pb-xl-2">
                        <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                        <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">GameConsole Destiny  Special Edition</a></h5>
                        <div className="mb-2">
                          <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="../../assets/img/212X200/img7.jpg" alt="Image Description" /></a>
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="prodcut-price">
                            <div className="text-gray-100">$685,00</div>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="product-item__footer">
                        <div className="border-top pt-2 flex-center-between flex-wrap">
                          <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                          <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Add to Wishlist</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="tab-pane fade pt-2" id="Tpills-eight-example1" role="tabpanel" aria-labelledby="Tpills-eight-example1-tab">
          <div className="row no-gutters">
            <div className="col-md-3 col-wd-4 d-md-flex d-wd-block">
              <ul className="row list-unstyled products-group no-gutters mb-0 flex-xl-column flex-wd-row">
                <li className="col-xl-6 product-item max-width-xl-100 remove-divider">
                  <div className="product-item__outer h-100 w-100 prodcut-box-shadow">
                    <div className="product-item__inner bg-white p-3">
                      <div className="product-item__body pb-xl-2">
                        <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                        <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Wireless Audio System Multiroom 360 degree Full base audio</a></h5>
                        <div className="mb-2">
                          <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="../../assets/img/212X200/img1.jpg" alt="Image Description" /></a>
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="prodcut-price">
                            <div className="text-gray-100">$685,00</div>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="product-item__footer">
                        <div className="border-top pt-2 flex-center-between flex-wrap">
                          <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                          <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Add to Wishlist</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-xl-6 product-item max-width-xl-100 remove-divider">
                  <div className="product-item__outer h-100 w-100 prodcut-box-shadow">
                    <div className="product-item__inner bg-white p-3">
                      <div className="product-item__body pb-xl-2">
                        <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                        <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Tablet White EliteBook Revolve 810 G2</a></h5>
                        <div className="mb-2">
                          <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="../../assets/img/212X200/img2.jpg" alt="Image Description" /></a>
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="prodcut-price">
                            <div className="text-gray-100">$685,00</div>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="product-item__footer">
                        <div className="border-top pt-2 flex-center-between flex-wrap">
                          <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                          <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Add to Wishlist</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-xl-6 product-item max-width-xl-100 d-md-none d-wd-block product-item remove-divider">
                  <div className="product-item__outer h-100 w-100 prodcut-box-shadow">
                    <div className="product-item__inner bg-white p-3">
                      <div className="product-item__body pb-xl-2">
                        <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                        <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Wireless Audio System Multiroom 360 degree Full base audio</a></h5>
                        <div className="mb-2">
                          <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="../../assets/img/212X200/img1.jpg" alt="Image Description" /></a>
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="prodcut-price">
                            <div className="text-gray-100">$685,00</div>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="product-item__footer">
                        <div className="border-top pt-2 flex-center-between flex-wrap">
                          <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                          <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Add to Wishlist</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-xl-6 product-item max-width-xl-100 d-md-none d-wd-block product-item remove-divider">
                  <div className="product-item__outer h-100 w-100 prodcut-box-shadow">
                    <div className="product-item__inner bg-white p-3">
                      <div className="product-item__body pb-xl-2">
                        <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                        <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">GameConsole Destiny  Special Edition</a></h5>
                        <div className="mb-2">
                          <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="../../assets/img/212X200/img7.jpg" alt="Image Description" /></a>
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="prodcut-price">
                            <div className="text-gray-100">$685,00</div>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="product-item__footer">
                        <div className="border-top pt-2 flex-center-between flex-wrap">
                          <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                          <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Add to Wishlist</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-wd-4 products-group-1">
              <ul className="row list-unstyled products-group no-gutters bg-white h-100 mb-0">
                <li className="col product-item remove-divider">
                  <div className="product-item__outer h-100 w-100 prodcut-box-shadow">
                    <div className="product-item__inner bg-white p-3">
                      <div className="product-item__body d-flex flex-column">
                        <div className="mb-1">
                          <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Game Consoles</a></div>
                          <h5 className="mb-0 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Game Console Controller + USB 3.0 Cable</a></h5>
                        </div>
                        <div className="mb-1 min-height-4-1-4">
                          <a href="#" className="d-block text-center my-4 mt-lg-6 mb-lg-5 mt-xl-0 mb-xl-0 mt-wd-6 mb-wd-5"><img className="img-fluid" src="../../assets/img/564X520/img2.jpg" alt="Image Description" /></a>
                          {/* Gallery */}
                          <div className="row mx-gutters-2 mb-3">
                            <div className="col-auto">
                              {/* Gallery */}
                              <a className="js-fancybox max-width-60 u-media-viewer" href="javascript:;" data-src="../../assets/img/1920X1080/img1.jpg" data-fancybox="fancyboxGallery6" data-caption="Electro in frames - image #01" data-speed={700} data-is-infinite="true">
                                <img className="img-fluid border" src="../../assets/img/100X100/img1.jpg" alt="Image Description" />
                                <span className="u-media-viewer__container">
                                  <span className="u-media-viewer__icon">
                                    <span className="fas fa-plus u-media-viewer__icon-inner" />
                                  </span>
                                </span>
                              </a>
                              {/* End Gallery */}
                            </div>
                            <div className="col-auto">
                              {/* Gallery */}
                              <a className="js-fancybox max-width-60 u-media-viewer" href="javascript:;" data-src="../../assets/img/1920X1080/img2.jpg" data-fancybox="fancyboxGallery6" data-caption="Electro in frames - image #02" data-speed={700} data-is-infinite="true">
                                <img className="img-fluid border" src="../../assets/img/100X100/img2.jpg" alt="Image Description" />
                                <span className="u-media-viewer__container">
                                  <span className="u-media-viewer__icon">
                                    <span className="fas fa-plus u-media-viewer__icon-inner" />
                                  </span>
                                </span>
                              </a>
                              {/* End Gallery */}
                            </div>
                            <div className="col-auto">
                              {/* Gallery */}
                              <a className="js-fancybox max-width-60 u-media-viewer" href="javascript:;" data-src="../../assets/img/1920X1080/img3.jpg" data-fancybox="fancyboxGallery6" data-caption="Electro in frames - image #03" data-speed={700} data-is-infinite="true">
                                <img className="img-fluid border" src="../../assets/img/100X100/img3.jpg" alt="Image Description" />
                                <span className="u-media-viewer__container">
                                  <span className="u-media-viewer__icon">
                                    <span className="fas fa-plus u-media-viewer__icon-inner" />
                                  </span>
                                </span>
                              </a>
                              {/* End Gallery */}
                            </div>
                            <div className="col" />
                          </div>
                          {/* End Gallery */}
                        </div>
                        <div className="flex-center-between">
                          <div className="prodcut-price">
                            <div className="text-gray-100">$685,00</div>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-add-cart__wide btn-primary transition-3d-hover"><i className="ec ec-add-to-cart mr-2" /> Add to Cart</a>
                          </div>
                        </div>
                      </div>
                      <div className="product-item__footer">
                        <div className="border-top pt-2 flex-center-between flex-wrap">
                          <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                          <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Add to Wishlist</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="col-md-3 col-wd-4 d-md-flex d-wd-block">
              <ul className="row list-unstyled products-group no-gutters mb-0 flex-xl-column flex-wd-row">
                <li className="col-xl-6 product-item max-width-xl-100 remove-divider">
                  <div className="product-item__outer h-100 w-100 prodcut-box-shadow">
                    <div className="product-item__inner bg-white p-3">
                      <div className="product-item__body pb-xl-2">
                        <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                        <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Wireless Audio System Multiroom 360 degree Full base audio</a></h5>
                        <div className="mb-2">
                          <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="../../assets/img/212X200/img1.jpg" alt="Image Description" /></a>
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="prodcut-price">
                            <div className="text-gray-100">$685,00</div>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="product-item__footer">
                        <div className="border-top pt-2 flex-center-between flex-wrap">
                          <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                          <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Add to Wishlist</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="col-xl-6 product-item max-width-xl-100 remove-divider">
                  <div className="product-item__outer h-100 w-100 prodcut-box-shadow">
                    <div className="product-item__inner bg-white p-3">
                      <div className="product-item__body pb-xl-2">
                        <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                        <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Tablet White EliteBook Revolve 810 G2</a></h5>
                        <div className="mb-2">
                          <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="../../assets/img/212X200/img2.jpg" alt="Image Description" /></a>
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="prodcut-price">
                            <div className="text-gray-100">$685,00</div>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="product-item__footer">
                        <div className="border-top pt-2 flex-center-between flex-wrap">
                          <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                          <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Add to Wishlist</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="col-xl-6 product-item max-width-xl-100 d-md-none d-wd-block product-item remove-divider">
                  <div className="product-item__outer h-100 w-100 prodcut-box-shadow">
                    <div className="product-item__inner bg-white p-3">
                      <div className="product-item__body pb-xl-2">
                        <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                        <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Wireless Audio System Multiroom 360 degree Full base audio</a></h5>
                        <div className="mb-2">
                          <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="../../assets/img/212X200/img1.jpg" alt="Image Description" /></a>
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="prodcut-price">
                            <div className="text-gray-100">$685,00</div>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="product-item__footer">
                        <div className="border-top pt-2 flex-center-between flex-wrap">
                          <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                          <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Add to Wishlist</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="col-xl-6 product-item max-width-xl-100 d-md-none d-wd-block product-item remove-divider">
                  <div className="product-item__outer h-100 w-100 prodcut-box-shadow">
                    <div className="product-item__inner bg-white p-3">
                      <div className="product-item__body pb-xl-2">
                        <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                        <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">GameConsole Destiny  Special Edition</a></h5>
                        <div className="mb-2">
                          <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="../../assets/img/212X200/img7.jpg" alt="Image Description" /></a>
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="prodcut-price">
                            <div className="text-gray-100">$685,00</div>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="product-item__footer">
                        <div className="border-top pt-2 flex-center-between flex-wrap">
                          <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                          <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Add to Wishlist</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="tab-pane fade pt-2" id="Tpills-nine-example1" role="tabpanel" aria-labelledby="Tpills-nine-example1-tab">
          <div className="row no-gutters">
            <div className="col-md-3 col-wd-4 d-md-flex d-wd-block">
              <ul className="row list-unstyled products-group no-gutters mb-0 flex-xl-column flex-wd-row">
                <li className="col-xl-6 product-item max-width-xl-100 remove-divider">
                  <div className="product-item__outer h-100 w-100 prodcut-box-shadow">
                    <div className="product-item__inner bg-white p-3">
                      <div className="product-item__body pb-xl-2">
                        <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                        <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Wireless Audio System Multiroom 360 degree Full base audio</a></h5>
                        <div className="mb-2">
                          <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="../../assets/img/212X200/img1.jpg" alt="Image Description" /></a>
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="prodcut-price">
                            <div className="text-gray-100">$685,00</div>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="product-item__footer">
                        <div className="border-top pt-2 flex-center-between flex-wrap">
                          <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                          <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Add to Wishlist</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-xl-6 product-item max-width-xl-100 remove-divider">
                  <div className="product-item__outer h-100 w-100 prodcut-box-shadow">
                    <div className="product-item__inner bg-white p-3">
                      <div className="product-item__body pb-xl-2">
                        <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                        <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Tablet White EliteBook Revolve 810 G2</a></h5>
                        <div className="mb-2">
                          <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="../../assets/img/212X200/img2.jpg" alt="Image Description" /></a>
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="prodcut-price">
                            <div className="text-gray-100">$685,00</div>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="product-item__footer">
                        <div className="border-top pt-2 flex-center-between flex-wrap">
                          <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                          <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Add to Wishlist</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="col-xl-6 product-item max-width-xl-100 d-md-none d-wd-block product-item remove-divider">
                  <div className="product-item__outer h-100 w-100 prodcut-box-shadow">
                    <div className="product-item__inner bg-white p-3">
                      <div className="product-item__body pb-xl-2">
                        <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                        <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Wireless Audio System Multiroom 360 degree Full base audio</a></h5>
                        <div className="mb-2">
                          <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="../../assets/img/212X200/img1.jpg" alt="Image Description" /></a>
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="prodcut-price">
                            <div className="text-gray-100">$685,00</div>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="product-item__footer">
                        <div className="border-top pt-2 flex-center-between flex-wrap">
                          <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                          <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Add to Wishlist</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="col-xl-6 product-item max-width-xl-100 d-md-none d-wd-block product-item remove-divider">
                  <div className="product-item__outer h-100 w-100 prodcut-box-shadow">
                    <div className="product-item__inner bg-white p-3">
                      <div className="product-item__body pb-xl-2">
                        <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                        <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">GameConsole Destiny  Special Edition</a></h5>
                        <div className="mb-2">
                          <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="../../assets/img/212X200/img7.jpg" alt="Image Description" /></a>
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="prodcut-price">
                            <div className="text-gray-100">$685,00</div>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                          </div>
                        </div>
                      </div>

                      <div className="product-item__footer">
                        <div className="border-top pt-2 flex-center-between flex-wrap">
                          <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                          <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Add to Wishlist</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="col-md-6 col-wd-4 products-group-1">
              <ul className="row list-unstyled products-group no-gutters bg-white h-100 mb-0">
                <li className="col product-item remove-divider">
                  <div className="product-item__outer h-100 w-100 prodcut-box-shadow">
                    <div className="product-item__inner bg-white p-3">
                      <div className="product-item__body d-flex flex-column">
                        <div className="mb-1">
                          <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Game Consoles</a></div>
                          <h5 className="mb-0 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Game Console Controller + USB 3.0 Cable</a></h5>
                        </div>
                        <div className="mb-1 min-height-4-1-4">
                          <a href="#" className="d-block text-center my-4 mt-lg-6 mb-lg-5 mt-xl-0 mb-xl-0 mt-wd-6 mb-wd-5"><img className="img-fluid" src="../../assets/img/564X520/img2.jpg" alt="Image Description" /></a>
                          {/* Gallery */}
                          <div className="row mx-gutters-2 mb-3">
                            <div className="col-auto">
                              {/* Gallery */}
                              <a className="js-fancybox max-width-60 u-media-viewer" href="javascript:;" data-src="../../assets/img/1920X1080/img1.jpg" data-fancybox="fancyboxGallery6" data-caption="Electro in frames - image #01" data-speed={700} data-is-infinite="true">
                                <img className="img-fluid border" src="../../assets/img/100X100/img1.jpg" alt="Image Description" />
                                <span className="u-media-viewer__container">
                                  <span className="u-media-viewer__icon">
                                    <span className="fas fa-plus u-media-viewer__icon-inner" />
                                  </span>
                                </span>
                              </a>
                              {/* End Gallery */}
                            </div>
                            <div className="col-auto">
                              {/* Gallery */}
                              <a className="js-fancybox max-width-60 u-media-viewer" href="javascript:;" data-src="../../assets/img/1920X1080/img2.jpg" data-fancybox="fancyboxGallery6" data-caption="Electro in frames - image #02" data-speed={700} data-is-infinite="true">
                                <img className="img-fluid border" src="../../assets/img/100X100/img2.jpg" alt="Image Description" />
                                <span className="u-media-viewer__container">
                                  <span className="u-media-viewer__icon">
                                    <span className="fas fa-plus u-media-viewer__icon-inner" />
                                  </span>
                                </span>
                              </a>
                              {/* End Gallery */}
                            </div>
                            <div className="col-auto">
                              {/* Gallery */}
                              <a className="js-fancybox max-width-60 u-media-viewer" href="javascript:;" data-src="../../assets/img/1920X1080/img3.jpg" data-fancybox="fancyboxGallery6" data-caption="Electro in frames - image #03" data-speed={700} data-is-infinite="true">
                                <img className="img-fluid border" src="../../assets/img/100X100/img3.jpg" alt="Image Description" />
                                <span className="u-media-viewer__container">
                                  <span className="u-media-viewer__icon">
                                    <span className="fas fa-plus u-media-viewer__icon-inner" />
                                  </span>
                                </span>
                              </a>
                              {/* End Gallery */}
                            </div>
                            <div className="col" />
                          </div>
                          {/* End Gallery */}
                        </div>
                        <div className="flex-center-between">
                          <div className="prodcut-price">
                            <div className="text-gray-100">$685,00</div>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-add-cart__wide btn-primary transition-3d-hover"><i className="ec ec-add-to-cart mr-2" /> Add to Cart</a>
                          </div>
                        </div>
                      </div>
                      <div className="product-item__footer">
                        <div className="border-top pt-2 flex-center-between flex-wrap">
                          <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                          <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Add to Wishlist</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="col-md-3 col-wd-4 d-md-flex d-wd-block">
              <ul className="row list-unstyled products-group no-gutters mb-0 flex-xl-column flex-wd-row">
                <li className="col-xl-6 product-item max-width-xl-100 remove-divider">
                  <div className="product-item__outer h-100 w-100 prodcut-box-shadow">
                    <div className="product-item__inner bg-white p-3">
                      <div className="product-item__body pb-xl-2">
                        <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                        <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Wireless Audio System Multiroom 360 degree Full base audio</a></h5>
                        <div className="mb-2">
                          <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="../../assets/img/212X200/img1.jpg" alt="Image Description" /></a>
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="prodcut-price">
                            <div className="text-gray-100">$685,00</div>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="product-item__footer">
                        <div className="border-top pt-2 flex-center-between flex-wrap">
                          <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                          <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Add to Wishlist</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                
                <li className="col-xl-6 product-item max-width-xl-100 remove-divider">
                  <div className="product-item__outer h-100 w-100 prodcut-box-shadow">
                    <div className="product-item__inner bg-white p-3">
                      <div className="product-item__body pb-xl-2">
                        <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                        <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Tablet White EliteBook Revolve 810 G2</a></h5>
                        <div className="mb-2">
                          <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="../../assets/img/212X200/img2.jpg" alt="Image Description" /></a>
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="prodcut-price">
                            <div className="text-gray-100">$685,00</div>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="product-item__footer">
                        <div className="border-top pt-2 flex-center-between flex-wrap">
                          <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                          <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Add to Wishlist</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-xl-6 product-item max-width-xl-100 d-md-none d-wd-block product-item remove-divider">
                  <div className="product-item__outer h-100 w-100 prodcut-box-shadow">
                    <div className="product-item__inner bg-white p-3">
                      <div className="product-item__body pb-xl-2">
                        <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                        <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Wireless Audio System Multiroom 360 degree Full base audio</a></h5>
                        <div className="mb-2">
                          <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="../../assets/img/212X200/img1.jpg" alt="Image Description" /></a>
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="prodcut-price">
                            <div className="text-gray-100">$685,00</div>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="product-item__footer">
                        <div className="border-top pt-2 flex-center-between flex-wrap">
                          <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                          <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Add to Wishlist</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-xl-6 product-item max-width-xl-100 d-md-none d-wd-block product-item remove-divider">
                  <div className="product-item__outer h-100 w-100 prodcut-box-shadow">
                    <div className="product-item__inner bg-white p-3">
                      <div className="product-item__body pb-xl-2">
                        <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                        <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">GameConsole Destiny  Special Edition</a></h5>
                        <div className="mb-2">
                          <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="../../assets/img/212X200/img7.jpg" alt="Image Description" /></a>
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="prodcut-price">
                            <div className="text-gray-100">$685,00</div>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="product-item__footer">
                        <div className="border-top pt-2 flex-center-between flex-wrap">
                          <a href="../shop/compare.html" className="text-gray-6 font-size-13"><i className="ec ec-compare mr-1 font-size-15" /> Compare</a>
                          <a href="../shop/wishlist.html" className="text-gray-6 font-size-13"><i className="ec ec-favorites mr-1 font-size-15" /> Add to Wishlist</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* End Tab Content */}
    </div>
    {/* Features Section */}
    <div className="container space-2 d-none">
      {/* Nav Classic */}
      <div className="position-relative text-center z-index-2 mb-3">
        <ul className="nav nav-classic nav-tab nav-tab-sm px-md-3 justify-content-start justify-content-lg-center flex-nowrap flex-lg-wrap overflow-auto overflow-lg-visble border-md-down-bottom-0 pb-1 pb-lg-0 mb-n1 mb-lg-0" id="pills-tab-2" role="tablist">
          <li className="nav-item flex-shrink-0 flex-lg-shrink-1">
            <a className="nav-link active " id="Gpills-one-example1-tab" data-toggle="pill" href="#Gpills-one-example1" role="tab" aria-controls="Gpills-one-example1" aria-selected="true">
              <div className="d-md-flex justify-content-md-center align-items-md-center">
                Best Deals
              </div>
            </a>
          </li>
          <li className="nav-item flex-shrink-0 flex-lg-shrink-1">
            <a className="nav-link " id="Gpills-two-example1-tab" data-toggle="pill" href="#Gpills-two-example1" role="tab" aria-controls="Gpills-two-example1" aria-selected="false">
              <div className="d-md-flex justify-content-md-center align-items-md-center">
                TV &amp; Video
              </div>
            </a>
          </li>
          <li className="nav-item flex-shrink-0 flex-lg-shrink-1">
            <a className="nav-link " id="Gpills-three-example1-tab" data-toggle="pill" href="#Gpills-three-example1" role="tab" aria-controls="Gpills-three-example1" aria-selected="false">
              <div className="d-md-flex justify-content-md-center align-items-md-center">
                Cameras
              </div>
            </a>
          </li>
          <li className="nav-item flex-shrink-0 flex-lg-shrink-1">
            <a className="nav-link " id="Gpills-four-example1-tab" data-toggle="pill" href="#Gpills-four-example1" role="tab" aria-controls="Gpills-four-example1" aria-selected="false">
              <div className="d-md-flex justify-content-md-center align-items-md-center">
                Audio
              </div>
            </a>
          </li>
          <li className="nav-item flex-shrink-0 flex-lg-shrink-1">
            <a className="nav-link " id="Gpills-five-example1-tab" data-toggle="pill" href="#Gpills-five-example1" role="tab" aria-controls="Gpills-five-example1" aria-selected="false">
              <div className="d-md-flex justify-content-md-center align-items-md-center">
                Smartphones
              </div>
            </a>
          </li>
          <li className="nav-item flex-shrink-0 flex-lg-shrink-1">
            <a className="nav-link " id="Gpills-six-example1-tab" data-toggle="pill" href="#Gpills-six-example1" role="tab" aria-controls="Gpills-six-example1" aria-selected="false">
              <div className="d-md-flex justify-content-md-center align-items-md-center">
                GPS &amp; Navi
              </div>
            </a>
          </li>
          <li className="nav-item flex-shrink-0 flex-lg-shrink-1">
            <a className="nav-link " id="Gpills-seven-example1-tab" data-toggle="pill" href="#Gpills-seven-example1" role="tab" aria-controls="Gpills-seven-example1" aria-selected="false">
              <div className="d-md-flex justify-content-md-center align-items-md-center">
                Computers
              </div>
            </a>
          </li>
          <li className="nav-item flex-shrink-0 flex-lg-shrink-1">
            <a className="nav-link " id="Gpills-eight-example1-tab" data-toggle="pill" href="#Gpills-eight-example1" role="tab" aria-controls="Gpills-eight-example1" aria-selected="false">
              <div className="d-md-flex justify-content-md-center align-items-md-center">
                Portable Audio
              </div>
            </a>
          </li>
          <li className="nav-item flex-shrink-0 flex-lg-shrink-1">
            <a className="nav-link " id="Gpills-nine-example1-tab" data-toggle="pill" href="#Gpills-nine-example1" role="tab" aria-controls="Gpills-nine-example1" aria-selected="false">
              <div className="d-md-flex justify-content-md-center align-items-md-center">
                Accessories
              </div>
            </a>
          </li>
        </ul>
      </div>
      {/* End Nav Classic */}
      {/* Tab Content */}
      <div className="tab-content" id="Gpills-tabContent">
        <div className="tab-pane fade pt-2 show active" id="Gpills-one-example1" role="tabpanel" aria-labelledby="Gpills-one-example1-tab">
          <div className="row no-gutters">
            <div className="col-md-3 col-wd-4 d-md-flex d-wd-block">
              <ul className="row list-unstyled products-group no-gutters mb-0 w-100">
                <li className="col-xl-12 col-wd-6">
                  <div className="h-100 w-100 prodcut-box-shadow">
                    <div className="bg-white p-3">
                      <div className="pb-xl-2">
                        <div className="mb-2">
                          <div className="bg-gray-1 bg-animation rounded height-10 w-60" />
                        </div>
                        <div className="mb-3">
                          <div className="bg-gray-1 bg-animation rounded height-12 mb-1" />
                          <div className="bg-gray-1 bg-animation rounded height-12 w-80" />
                        </div>
                        <div className="mb-4">
                          <div className="bg-gray-1 height-190" />
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="bg-gray-1 bg-animation rounded height-20 w-60" />
                          <div className="bg-gray-1 height-35 width-35 rounded-circle" />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-xl-12 col-wd-6">
                  <div className="h-100 w-100 prodcut-box-shadow">
                    <div className="bg-white p-3">
                      <div className="pb-xl-2">
                        <div className="mb-2">
                          <div className="bg-gray-1 bg-animation rounded height-10 w-60" />
                        </div>
                        <div className="mb-3">
                          <div className="bg-gray-1 bg-animation rounded height-12 mb-1" />
                          <div className="bg-gray-1 bg-animation rounded height-12 w-80" />
                        </div>
                        <div className="mb-4">
                          <div className="bg-gray-1 height-190" />
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="bg-gray-1 bg-animation rounded height-20 w-60" />
                          <div className="bg-gray-1 height-35 width-35 rounded-circle" />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-xl-12 col-wd-6 d-md-none d-wd-block">
                  <div className="h-100 w-100 prodcut-box-shadow">
                    <div className="bg-white p-3">
                      <div className="pb-xl-2">
                        <div className="mb-2">
                          <div className="bg-gray-1 bg-animation rounded height-10 w-60" />
                        </div>
                        <div className="mb-3">
                          <div className="bg-gray-1 bg-animation rounded height-12 mb-1" />
                          <div className="bg-gray-1 bg-animation rounded height-12 w-80" />
                        </div>
                        <div className="mb-4">
                          <div className="bg-gray-1 height-190" />
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="bg-gray-1 bg-animation rounded height-20 w-60" />
                          <div className="bg-gray-1 height-35 width-35 rounded-circle" />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-xl-12 col-wd-6 d-md-none d-wd-block">
                  <div className="h-100 w-100 prodcut-box-shadow">
                    <div className="bg-white p-3">
                      <div className="pb-xl-2">
                        <div className="mb-2">
                          <div className="bg-gray-1 bg-animation rounded height-10 w-60" />
                        </div>
                        <div className="mb-3">
                          <div className="bg-gray-1 bg-animation rounded height-12 mb-1" />
                          <div className="bg-gray-1 bg-animation rounded height-12 w-80" />
                        </div>
                        <div className="mb-4">
                          <div className="bg-gray-1 height-190" />
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="bg-gray-1 bg-animation rounded height-20 w-60" />
                          <div className="bg-gray-1 height-35 width-35 rounded-circle" />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-wd-4 products-group-1">
              <ul className="row list-unstyled products-group no-gutters bg-white h-100 mb-0">
                <li className="col product-item remove-divider">
                  <div className="h-100 w-100 prodcut-box-shadow">
                    <div className="bg-white p-3">
                      <div className="d-flex flex-column">
                        <div className="mb-1">
                          <div className="mb-2">
                            <div className="bg-gray-1 bg-animation rounded height-10 w-40" />
                          </div>
                          <div className="mb-3">
                            <div className="bg-gray-1 bg-animation rounded height-12 mb-1 w-90" />
                            <div className="bg-gray-1 bg-animation rounded height-12 w-80" />
                          </div>
                        </div>
                        <div className="mb-4">
                          <div className="bg-gray-1 height-450" />
                        </div>
                        <div className="mb-4">
                          {/* Gallery */}
                          <div className="row mx-gutters-2">
                            <div className="col-auto">
                              <div className="bg-gray-1 width-60 height-60" />
                            </div>
                            <div className="col-auto">
                              <div className="bg-gray-1 width-60 height-60" />
                            </div>
                            <div className="col-auto">
                              <div className="bg-gray-1 width-60 height-60" />
                            </div>
                            <div className="col" />
                          </div>
                          {/* End Gallery */}
                        </div>
                        <div className="flex-center-between">
                          <div className="bg-gray-1 bg-animation rounded height-20 w-40" />
                          <div className="bg-gray-1 height-35 width-134 rounded-pill" />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-wd-4 d-md-flex d-wd-block">
              <ul className="row list-unstyled products-group no-gutters mb-0 w-100">
                <li className="col-xl-12 col-wd-6">
                  <div className="h-100 w-100 prodcut-box-shadow">
                    <div className="bg-white p-3">
                      <div className="pb-xl-2">
                        <div className="mb-2">
                          <div className="bg-gray-1 bg-animation rounded height-10 w-60" />
                        </div>
                        <div className="mb-3">
                          <div className="bg-gray-1 bg-animation rounded height-12 mb-1" />
                          <div className="bg-gray-1 bg-animation rounded height-12 w-80" />
                        </div>
                        <div className="mb-4">
                          <div className="bg-gray-1 height-190" />
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="bg-gray-1 bg-animation rounded height-20 w-60" />
                          <div className="bg-gray-1 height-35 width-35 rounded-circle" />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-xl-12 col-wd-6">
                  <div className="h-100 w-100 prodcut-box-shadow">
                    <div className="bg-white p-3">
                      <div className="pb-xl-2">
                        <div className="mb-2">
                          <div className="bg-gray-1 bg-animation rounded height-10 w-60" />
                        </div>
                        <div className="mb-3">
                          <div className="bg-gray-1 bg-animation rounded height-12 mb-1" />
                          <div className="bg-gray-1 bg-animation rounded height-12 w-80" />
                        </div>
                        <div className="mb-4">
                          <div className="bg-gray-1 height-190" />
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="bg-gray-1 bg-animation rounded height-20 w-60" />
                          <div className="bg-gray-1 height-35 width-35 rounded-circle" />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-xl-12 col-wd-6 d-md-none d-wd-block">
                  <div className="h-100 w-100 prodcut-box-shadow">
                    <div className="bg-white p-3">
                      <div className="pb-xl-2">
                        <div className="mb-2">
                          <div className="bg-gray-1 bg-animation rounded height-10 w-60" />
                        </div>
                        <div className="mb-3">
                          <div className="bg-gray-1 bg-animation rounded height-12 mb-1" />
                          <div className="bg-gray-1 bg-animation rounded height-12 w-80" />
                        </div>
                        <div className="mb-4">
                          <div className="bg-gray-1 height-190" />
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="bg-gray-1 bg-animation rounded height-20 w-60" />
                          <div className="bg-gray-1 height-35 width-35 rounded-circle" />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-xl-12 col-wd-6 d-md-none d-wd-block">
                  <div className="h-100 w-100 prodcut-box-shadow">
                    <div className="bg-white p-3">
                      <div className="pb-xl-2">
                        <div className="mb-2">
                          <div className="bg-gray-1 bg-animation rounded height-10 w-60" />
                        </div>
                        <div className="mb-3">
                          <div className="bg-gray-1 bg-animation rounded height-12 mb-1" />
                          <div className="bg-gray-1 bg-animation rounded height-12 w-80" />
                        </div>
                        <div className="mb-4">
                          <div className="bg-gray-1 height-190" />
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="bg-gray-1 bg-animation rounded height-20 w-60" />
                          <div className="bg-gray-1 height-35 width-35 rounded-circle" />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="tab-pane fade pt-2" id="Gpills-two-example1" role="tabpanel" aria-labelledby="Gpills-two-example1-tab">
          <div className="row no-gutters">
            <div className="col-md-3 col-wd-4 d-md-flex d-wd-block">
              <ul className="row list-unstyled products-group no-gutters mb-0 w-100">
                <li className="col-xl-12 col-wd-6">
                  <div className="h-100 w-100 prodcut-box-shadow">
                    <div className="bg-white p-3">
                      <div className="pb-xl-2">
                        <div className="mb-2">
                          <div className="bg-gray-1 bg-animation rounded height-10 w-60" />
                        </div>
                        <div className="mb-3">
                          <div className="bg-gray-1 bg-animation rounded height-12 mb-1" />
                          <div className="bg-gray-1 bg-animation rounded height-12 w-80" />
                        </div>
                        <div className="mb-4">
                          <div className="bg-gray-1 height-190" />
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="bg-gray-1 bg-animation rounded height-20 w-60" />
                          <div className="bg-gray-1 height-35 width-35 rounded-circle" />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-xl-12 col-wd-6">
                  <div className="h-100 w-100 prodcut-box-shadow">
                    <div className="bg-white p-3">
                      <div className="pb-xl-2">
                        <div className="mb-2">
                          <div className="bg-gray-1 bg-animation rounded height-10 w-60" />
                        </div>
                        <div className="mb-3">
                          <div className="bg-gray-1 bg-animation rounded height-12 mb-1" />
                          <div className="bg-gray-1 bg-animation rounded height-12 w-80" />
                        </div>
                        <div className="mb-4">
                          <div className="bg-gray-1 height-190" />
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="bg-gray-1 bg-animation rounded height-20 w-60" />
                          <div className="bg-gray-1 height-35 width-35 rounded-circle" />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-xl-12 col-wd-6 d-md-none d-wd-block">
                  <div className="h-100 w-100 prodcut-box-shadow">
                    <div className="bg-white p-3">
                      <div className="pb-xl-2">
                        <div className="mb-2">
                          <div className="bg-gray-1 bg-animation rounded height-10 w-60" />
                        </div>
                        <div className="mb-3">
                          <div className="bg-gray-1 bg-animation rounded height-12 mb-1" />
                          <div className="bg-gray-1 bg-animation rounded height-12 w-80" />
                        </div>
                        <div className="mb-4">
                          <div className="bg-gray-1 height-190" />
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="bg-gray-1 bg-animation rounded height-20 w-60" />
                          <div className="bg-gray-1 height-35 width-35 rounded-circle" />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-xl-12 col-wd-6 d-md-none d-wd-block">
                  <div className="h-100 w-100 prodcut-box-shadow">
                    <div className="bg-white p-3">
                      <div className="pb-xl-2">
                        <div className="mb-2">
                          <div className="bg-gray-1 bg-animation rounded height-10 w-60" />
                        </div>
                        <div className="mb-3">
                          <div className="bg-gray-1 bg-animation rounded height-12 mb-1" />
                          <div className="bg-gray-1 bg-animation rounded height-12 w-80" />
                        </div>
                        <div className="mb-4">
                          <div className="bg-gray-1 height-190" />
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="bg-gray-1 bg-animation rounded height-20 w-60" />
                          <div className="bg-gray-1 height-35 width-35 rounded-circle" />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-wd-4 products-group-1">
              <ul className="row list-unstyled products-group no-gutters bg-white h-100 mb-0">
                <li className="col product-item remove-divider">
                  <div className="h-100 w-100 prodcut-box-shadow">
                    <div className="bg-white p-3">
                      <div className="d-flex flex-column">
                        <div className="mb-1">
                          <div className="mb-2">
                            <div className="bg-gray-1 bg-animation rounded height-10 w-40" />
                          </div>
                          <div className="mb-3">
                            <div className="bg-gray-1 bg-animation rounded height-12 mb-1 w-90" />
                            <div className="bg-gray-1 bg-animation rounded height-12 w-80" />
                          </div>
                        </div>
                        <div className="mb-4">
                          <div className="bg-gray-1 height-450" />
                        </div>
                        <div className="mb-4">
                          {/* Gallery */}
                          <div className="row mx-gutters-2">
                            <div className="col-auto">
                              <div className="bg-gray-1 width-60 height-60" />
                            </div>
                            <div className="col-auto">
                              <div className="bg-gray-1 width-60 height-60" />
                            </div>
                            <div className="col-auto">
                              <div className="bg-gray-1 width-60 height-60" />
                            </div>
                            <div className="col" />
                          </div>
                          {/* End Gallery */}
                        </div>
                        <div className="flex-center-between">
                          <div className="bg-gray-1 bg-animation rounded height-20 w-40" />
                          <div className="bg-gray-1 height-35 width-134 rounded-pill" />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-wd-4 d-md-flex d-wd-block">
              <ul className="row list-unstyled products-group no-gutters mb-0 w-100">
                <li className="col-xl-12 col-wd-6">
                  <div className="h-100 w-100 prodcut-box-shadow">
                    <div className="bg-white p-3">
                      <div className="pb-xl-2">
                        <div className="mb-2">
                          <div className="bg-gray-1 bg-animation rounded height-10 w-60" />
                        </div>
                        <div className="mb-3">
                          <div className="bg-gray-1 bg-animation rounded height-12 mb-1" />
                          <div className="bg-gray-1 bg-animation rounded height-12 w-80" />
                        </div>
                        <div className="mb-4">
                          <div className="bg-gray-1 height-190" />
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="bg-gray-1 bg-animation rounded height-20 w-60" />
                          <div className="bg-gray-1 height-35 width-35 rounded-circle" />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-xl-12 col-wd-6">
                  <div className="h-100 w-100 prodcut-box-shadow">
                    <div className="bg-white p-3">
                      <div className="pb-xl-2">
                        <div className="mb-2">
                          <div className="bg-gray-1 bg-animation rounded height-10 w-60" />
                        </div>
                        <div className="mb-3">
                          <div className="bg-gray-1 bg-animation rounded height-12 mb-1" />
                          <div className="bg-gray-1 bg-animation rounded height-12 w-80" />
                        </div>
                        <div className="mb-4">
                          <div className="bg-gray-1 height-190" />
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="bg-gray-1 bg-animation rounded height-20 w-60" />
                          <div className="bg-gray-1 height-35 width-35 rounded-circle" />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-xl-12 col-wd-6 d-md-none d-wd-block">
                  <div className="h-100 w-100 prodcut-box-shadow">
                    <div className="bg-white p-3">
                      <div className="pb-xl-2">
                        <div className="mb-2">
                          <div className="bg-gray-1 bg-animation rounded height-10 w-60" />
                        </div>
                        <div className="mb-3">
                          <div className="bg-gray-1 bg-animation rounded height-12 mb-1" />
                          <div className="bg-gray-1 bg-animation rounded height-12 w-80" />
                        </div>
                        <div className="mb-4">
                          <div className="bg-gray-1 height-190" />
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="bg-gray-1 bg-animation rounded height-20 w-60" />
                          <div className="bg-gray-1 height-35 width-35 rounded-circle" />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-xl-12 col-wd-6 d-md-none d-wd-block">
                  <div className="h-100 w-100 prodcut-box-shadow">
                    <div className="bg-white p-3">
                      <div className="pb-xl-2">
                        <div className="mb-2">
                          <div className="bg-gray-1 bg-animation rounded height-10 w-60" />
                        </div>
                        <div className="mb-3">
                          <div className="bg-gray-1 bg-animation rounded height-12 mb-1" />
                          <div className="bg-gray-1 bg-animation rounded height-12 w-80" />
                        </div>
                        <div className="mb-4">
                          <div className="bg-gray-1 height-190" />
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="bg-gray-1 bg-animation rounded height-20 w-60" />
                          <div className="bg-gray-1 height-35 width-35 rounded-circle" />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="tab-pane fade pt-2" id="Gpills-three-example1" role="tabpanel" aria-labelledby="Gpills-three-example1-tab">
          <div className="row no-gutters">
            <div className="col-md-3 col-wd-4 d-md-flex d-wd-block">
              <ul className="row list-unstyled products-group no-gutters mb-0 w-100">
                <li className="col-xl-12 col-wd-6">
                  <div className="h-100 w-100 prodcut-box-shadow">
                    <div className="bg-white p-3">
                      <div className="pb-xl-2">
                        <div className="mb-2">
                          <div className="bg-gray-1 bg-animation rounded height-10 w-60" />
                        </div>
                        <div className="mb-3">
                          <div className="bg-gray-1 bg-animation rounded height-12 mb-1" />
                          <div className="bg-gray-1 bg-animation rounded height-12 w-80" />
                        </div>
                        <div className="mb-4">
                          <div className="bg-gray-1 height-190" />
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="bg-gray-1 bg-animation rounded height-20 w-60" />
                          <div className="bg-gray-1 height-35 width-35 rounded-circle" />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-xl-12 col-wd-6">
                  <div className="h-100 w-100 prodcut-box-shadow">
                    <div className="bg-white p-3">
                      <div className="pb-xl-2">
                        <div className="mb-2">
                          <div className="bg-gray-1 bg-animation rounded height-10 w-60" />
                        </div>
                        <div className="mb-3">
                          <div className="bg-gray-1 bg-animation rounded height-12 mb-1" />
                          <div className="bg-gray-1 bg-animation rounded height-12 w-80" />
                        </div>
                        <div className="mb-4">
                          <div className="bg-gray-1 height-190" />
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="bg-gray-1 bg-animation rounded height-20 w-60" />
                          <div className="bg-gray-1 height-35 width-35 rounded-circle" />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-xl-12 col-wd-6 d-md-none d-wd-block">
                  <div className="h-100 w-100 prodcut-box-shadow">
                    <div className="bg-white p-3">
                      <div className="pb-xl-2">
                        <div className="mb-2">
                          <div className="bg-gray-1 bg-animation rounded height-10 w-60" />
                        </div>
                        <div className="mb-3">
                          <div className="bg-gray-1 bg-animation rounded height-12 mb-1" />
                          <div className="bg-gray-1 bg-animation rounded height-12 w-80" />
                        </div>
                        <div className="mb-4">
                          <div className="bg-gray-1 height-190" />
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="bg-gray-1 bg-animation rounded height-20 w-60" />
                          <div className="bg-gray-1 height-35 width-35 rounded-circle" />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-xl-12 col-wd-6 d-md-none d-wd-block">
                  <div className="h-100 w-100 prodcut-box-shadow">
                    <div className="bg-white p-3">
                      <div className="pb-xl-2">
                        <div className="mb-2">
                          <div className="bg-gray-1 bg-animation rounded height-10 w-60" />
                        </div>
                        <div className="mb-3">
                          <div className="bg-gray-1 bg-animation rounded height-12 mb-1" />
                          <div className="bg-gray-1 bg-animation rounded height-12 w-80" />
                        </div>
                        <div className="mb-4">
                          <div className="bg-gray-1 height-190" />
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="bg-gray-1 bg-animation rounded height-20 w-60" />
                          <div className="bg-gray-1 height-35 width-35 rounded-circle" />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-wd-4 products-group-1">
              <ul className="row list-unstyled products-group no-gutters bg-white h-100 mb-0">
                <li className="col product-item remove-divider">
                  <div className="h-100 w-100 prodcut-box-shadow">
                    <div className="bg-white p-3">
                      <div className="d-flex flex-column">
                        <div className="mb-1">
                          <div className="mb-2">
                            <div className="bg-gray-1 bg-animation rounded height-10 w-40" />
                          </div>
                          <div className="mb-3">
                            <div className="bg-gray-1 bg-animation rounded height-12 mb-1 w-90" />
                            <div className="bg-gray-1 bg-animation rounded height-12 w-80" />
                          </div>
                        </div>
                        <div className="mb-4">
                          <div className="bg-gray-1 height-450" />
                        </div>
                        <div className="mb-4">
                          {/* Gallery */}
                          <div className="row mx-gutters-2">
                            <div className="col-auto">
                              <div className="bg-gray-1 width-60 height-60" />
                            </div>
                            <div className="col-auto">
                              <div className="bg-gray-1 width-60 height-60" />
                            </div>
                            <div className="col-auto">
                              <div className="bg-gray-1 width-60 height-60" />
                            </div>
                            <div className="col" />
                          </div>
                          {/* End Gallery */}
                        </div>
                        <div className="flex-center-between">
                          <div className="bg-gray-1 bg-animation rounded height-20 w-40" />
                          <div className="bg-gray-1 height-35 width-134 rounded-pill" />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-wd-4 d-md-flex d-wd-block">
              <ul className="row list-unstyled products-group no-gutters mb-0 w-100">
                <li className="col-xl-12 col-wd-6">
                  <div className="h-100 w-100 prodcut-box-shadow">
                    <div className="bg-white p-3">
                      <div className="pb-xl-2">
                        <div className="mb-2">
                          <div className="bg-gray-1 bg-animation rounded height-10 w-60" />
                        </div>
                        <div className="mb-3">
                          <div className="bg-gray-1 bg-animation rounded height-12 mb-1" />
                          <div className="bg-gray-1 bg-animation rounded height-12 w-80" />
                        </div>
                        <div className="mb-4">
                          <div className="bg-gray-1 height-190" />
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="bg-gray-1 bg-animation rounded height-20 w-60" />
                          <div className="bg-gray-1 height-35 width-35 rounded-circle" />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-xl-12 col-wd-6">
                  <div className="h-100 w-100 prodcut-box-shadow">
                    <div className="bg-white p-3">
                      <div className="pb-xl-2">
                        <div className="mb-2">
                          <div className="bg-gray-1 bg-animation rounded height-10 w-60" />
                        </div>
                        <div className="mb-3">
                          <div className="bg-gray-1 bg-animation rounded height-12 mb-1" />
                          <div className="bg-gray-1 bg-animation rounded height-12 w-80" />
                        </div>
                        <div className="mb-4">
                          <div className="bg-gray-1 height-190" />
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="bg-gray-1 bg-animation rounded height-20 w-60" />
                          <div className="bg-gray-1 height-35 width-35 rounded-circle" />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-xl-12 col-wd-6 d-md-none d-wd-block">
                  <div className="h-100 w-100 prodcut-box-shadow">
                    <div className="bg-white p-3">
                      <div className="pb-xl-2">
                        <div className="mb-2">
                          <div className="bg-gray-1 bg-animation rounded height-10 w-60" />
                        </div>
                        <div className="mb-3">
                          <div className="bg-gray-1 bg-animation rounded height-12 mb-1" />
                          <div className="bg-gray-1 bg-animation rounded height-12 w-80" />
                        </div>
                        <div className="mb-4">
                          <div className="bg-gray-1 height-190" />
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="bg-gray-1 bg-animation rounded height-20 w-60" />
                          <div className="bg-gray-1 height-35 width-35 rounded-circle" />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-xl-12 col-wd-6 d-md-none d-wd-block">
                  <div className="h-100 w-100 prodcut-box-shadow">
                    <div className="bg-white p-3">
                      <div className="pb-xl-2">
                        <div className="mb-2">
                          <div className="bg-gray-1 bg-animation rounded height-10 w-60" />
                        </div>
                        <div className="mb-3">
                          <div className="bg-gray-1 bg-animation rounded height-12 mb-1" />
                          <div className="bg-gray-1 bg-animation rounded height-12 w-80" />
                        </div>
                        <div className="mb-4">
                          <div className="bg-gray-1 height-190" />
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="bg-gray-1 bg-animation rounded height-20 w-60" />
                          <div className="bg-gray-1 height-35 width-35 rounded-circle" />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="tab-pane fade pt-2" id="Gpills-four-example1" role="tabpanel" aria-labelledby="Gpills-four-example1-tab">
          <div className="row no-gutters">
            <div className="col-md-3 col-wd-4 d-md-flex d-wd-block">
              <ul className="row list-unstyled products-group no-gutters mb-0 w-100">
                <li className="col-xl-12 col-wd-6">
                  <div className="h-100 w-100 prodcut-box-shadow">
                    <div className="bg-white p-3">
                      <div className="pb-xl-2">
                        <div className="mb-2">
                          <div className="bg-gray-1 bg-animation rounded height-10 w-60" />
                        </div>
                        <div className="mb-3">
                          <div className="bg-gray-1 bg-animation rounded height-12 mb-1" />
                          <div className="bg-gray-1 bg-animation rounded height-12 w-80" />
                        </div>
                        <div className="mb-4">
                          <div className="bg-gray-1 height-190" />
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="bg-gray-1 bg-animation rounded height-20 w-60" />
                          <div className="bg-gray-1 height-35 width-35 rounded-circle" />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-xl-12 col-wd-6">
                  <div className="h-100 w-100 prodcut-box-shadow">
                    <div className="bg-white p-3">
                      <div className="pb-xl-2">
                        <div className="mb-2">
                          <div className="bg-gray-1 bg-animation rounded height-10 w-60" />
                        </div>
                        <div className="mb-3">
                          <div className="bg-gray-1 bg-animation rounded height-12 mb-1" />
                          <div className="bg-gray-1 bg-animation rounded height-12 w-80" />
                        </div>
                        <div className="mb-4">
                          <div className="bg-gray-1 height-190" />
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="bg-gray-1 bg-animation rounded height-20 w-60" />
                          <div className="bg-gray-1 height-35 width-35 rounded-circle" />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-xl-12 col-wd-6 d-md-none d-wd-block">
                  <div className="h-100 w-100 prodcut-box-shadow">
                    <div className="bg-white p-3">
                      <div className="pb-xl-2">
                        <div className="mb-2">
                          <div className="bg-gray-1 bg-animation rounded height-10 w-60" />
                        </div>
                        <div className="mb-3">
                          <div className="bg-gray-1 bg-animation rounded height-12 mb-1" />
                          <div className="bg-gray-1 bg-animation rounded height-12 w-80" />
                        </div>
                        <div className="mb-4">
                          <div className="bg-gray-1 height-190" />
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="bg-gray-1 bg-animation rounded height-20 w-60" />
                          <div className="bg-gray-1 height-35 width-35 rounded-circle" />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-xl-12 col-wd-6 d-md-none d-wd-block">
                  <div className="h-100 w-100 prodcut-box-shadow">
                    <div className="bg-white p-3">
                      <div className="pb-xl-2">
                        <div className="mb-2">
                          <div className="bg-gray-1 bg-animation rounded height-10 w-60" />
                        </div>
                        <div className="mb-3">
                          <div className="bg-gray-1 bg-animation rounded height-12 mb-1" />
                          <div className="bg-gray-1 bg-animation rounded height-12 w-80" />
                        </div>
                        <div className="mb-4">
                          <div className="bg-gray-1 height-190" />
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="bg-gray-1 bg-animation rounded height-20 w-60" />
                          <div className="bg-gray-1 height-35 width-35 rounded-circle" />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-wd-4 products-group-1">
              <ul className="row list-unstyled products-group no-gutters bg-white h-100 mb-0">
                <li className="col product-item remove-divider">
                  <div className="h-100 w-100 prodcut-box-shadow">
                    <div className="bg-white p-3">
                      <div className="d-flex flex-column">
                        <div className="mb-1">
                          <div className="mb-2">
                            <div className="bg-gray-1 bg-animation rounded height-10 w-40" />
                          </div>
                          <div className="mb-3">
                            <div className="bg-gray-1 bg-animation rounded height-12 mb-1 w-90" />
                            <div className="bg-gray-1 bg-animation rounded height-12 w-80" />
                          </div>
                        </div>
                        <div className="mb-4">
                          <div className="bg-gray-1 height-450" />
                        </div>
                        <div className="mb-4">
                          {/* Gallery */}
                          <div className="row mx-gutters-2">
                            <div className="col-auto">
                              <div className="bg-gray-1 width-60 height-60" />
                            </div>
                            <div className="col-auto">
                              <div className="bg-gray-1 width-60 height-60" />
                            </div>
                            <div className="col-auto">
                              <div className="bg-gray-1 width-60 height-60" />
                            </div>
                            <div className="col" />
                          </div>
                          {/* End Gallery */}
                        </div>
                        <div className="flex-center-between">
                          <div className="bg-gray-1 bg-animation rounded height-20 w-40" />
                          <div className="bg-gray-1 height-35 width-134 rounded-pill" />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-wd-4 d-md-flex d-wd-block">
              <ul className="row list-unstyled products-group no-gutters mb-0 w-100">
                <li className="col-xl-12 col-wd-6">
                  <div className="h-100 w-100 prodcut-box-shadow">
                    <div className="bg-white p-3">
                      <div className="pb-xl-2">
                        <div className="mb-2">
                          <div className="bg-gray-1 bg-animation rounded height-10 w-60" />
                        </div>
                        <div className="mb-3">
                          <div className="bg-gray-1 bg-animation rounded height-12 mb-1" />
                          <div className="bg-gray-1 bg-animation rounded height-12 w-80" />
                        </div>
                        <div className="mb-4">
                          <div className="bg-gray-1 height-190" />
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="bg-gray-1 bg-animation rounded height-20 w-60" />
                          <div className="bg-gray-1 height-35 width-35 rounded-circle" />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-xl-12 col-wd-6">
                  <div className="h-100 w-100 prodcut-box-shadow">
                    <div className="bg-white p-3">
                      <div className="pb-xl-2">
                        <div className="mb-2">
                          <div className="bg-gray-1 bg-animation rounded height-10 w-60" />
                        </div>
                        <div className="mb-3">
                          <div className="bg-gray-1 bg-animation rounded height-12 mb-1" />
                          <div className="bg-gray-1 bg-animation rounded height-12 w-80" />
                        </div>
                        <div className="mb-4">
                          <div className="bg-gray-1 height-190" />
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="bg-gray-1 bg-animation rounded height-20 w-60" />
                          <div className="bg-gray-1 height-35 width-35 rounded-circle" />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-xl-12 col-wd-6 d-md-none d-wd-block">
                  <div className="h-100 w-100 prodcut-box-shadow">
                    <div className="bg-white p-3">
                      <div className="pb-xl-2">
                        <div className="mb-2">
                          <div className="bg-gray-1 bg-animation rounded height-10 w-60" />
                        </div>
                        <div className="mb-3">
                          <div className="bg-gray-1 bg-animation rounded height-12 mb-1" />
                          <div className="bg-gray-1 bg-animation rounded height-12 w-80" />
                        </div>
                        <div className="mb-4">
                          <div className="bg-gray-1 height-190" />
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="bg-gray-1 bg-animation rounded height-20 w-60" />
                          <div className="bg-gray-1 height-35 width-35 rounded-circle" />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-xl-12 col-wd-6 d-md-none d-wd-block">
                  <div className="h-100 w-100 prodcut-box-shadow">
                    <div className="bg-white p-3">
                      <div className="pb-xl-2">
                        <div className="mb-2">
                          <div className="bg-gray-1 bg-animation rounded height-10 w-60" />
                        </div>
                        <div className="mb-3">
                          <div className="bg-gray-1 bg-animation rounded height-12 mb-1" />
                          <div className="bg-gray-1 bg-animation rounded height-12 w-80" />
                        </div>
                        <div className="mb-4">
                          <div className="bg-gray-1 height-190" />
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="bg-gray-1 bg-animation rounded height-20 w-60" />
                          <div className="bg-gray-1 height-35 width-35 rounded-circle" />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="tab-pane fade pt-2" id="Gpills-five-example1" role="tabpanel" aria-labelledby="Gpills-five-example1-tab">
          <div className="row no-gutters">
            <div className="col-md-3 col-wd-4 d-md-flex d-wd-block">
              <ul className="row list-unstyled products-group no-gutters mb-0 w-100">
                <li className="col-xl-12 col-wd-6">
                  <div className="h-100 w-100 prodcut-box-shadow">
                    <div className="bg-white p-3">
                      <div className="pb-xl-2">
                        <div className="mb-2">
                          <div className="bg-gray-1 bg-animation rounded height-10 w-60" />
                        </div>
                        <div className="mb-3">
                          <div className="bg-gray-1 bg-animation rounded height-12 mb-1" />
                          <div className="bg-gray-1 bg-animation rounded height-12 w-80" />
                        </div>
                        <div className="mb-4">
                          <div className="bg-gray-1 height-190" />
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="bg-gray-1 bg-animation rounded height-20 w-60" />
                          <div className="bg-gray-1 height-35 width-35 rounded-circle" />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-xl-12 col-wd-6">
                  <div className="h-100 w-100 prodcut-box-shadow">
                    <div className="bg-white p-3">
                      <div className="pb-xl-2">
                        <div className="mb-2">
                          <div className="bg-gray-1 bg-animation rounded height-10 w-60" />
                        </div>
                        <div className="mb-3">
                          <div className="bg-gray-1 bg-animation rounded height-12 mb-1" />
                          <div className="bg-gray-1 bg-animation rounded height-12 w-80" />
                        </div>
                        <div className="mb-4">
                          <div className="bg-gray-1 height-190" />
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="bg-gray-1 bg-animation rounded height-20 w-60" />
                          <div className="bg-gray-1 height-35 width-35 rounded-circle" />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-xl-12 col-wd-6 d-md-none d-wd-block">
                  <div className="h-100 w-100 prodcut-box-shadow">
                    <div className="bg-white p-3">
                      <div className="pb-xl-2">
                        <div className="mb-2">
                          <div className="bg-gray-1 bg-animation rounded height-10 w-60" />
                        </div>
                        <div className="mb-3">
                          <div className="bg-gray-1 bg-animation rounded height-12 mb-1" />
                          <div className="bg-gray-1 bg-animation rounded height-12 w-80" />
                        </div>
                        <div className="mb-4">
                          <div className="bg-gray-1 height-190" />
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="bg-gray-1 bg-animation rounded height-20 w-60" />
                          <div className="bg-gray-1 height-35 width-35 rounded-circle" />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-xl-12 col-wd-6 d-md-none d-wd-block">
                  <div className="h-100 w-100 prodcut-box-shadow">
                    <div className="bg-white p-3">
                      <div className="pb-xl-2">
                        <div className="mb-2">
                          <div className="bg-gray-1 bg-animation rounded height-10 w-60" />
                        </div>
                        <div className="mb-3">
                          <div className="bg-gray-1 bg-animation rounded height-12 mb-1" />
                          <div className="bg-gray-1 bg-animation rounded height-12 w-80" />
                        </div>
                        <div className="mb-4">
                          <div className="bg-gray-1 height-190" />
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="bg-gray-1 bg-animation rounded height-20 w-60" />
                          <div className="bg-gray-1 height-35 width-35 rounded-circle" />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-wd-4 products-group-1">
              <ul className="row list-unstyled products-group no-gutters bg-white h-100 mb-0">
                <li className="col product-item remove-divider">
                  <div className="h-100 w-100 prodcut-box-shadow">
                    <div className="bg-white p-3">
                      <div className="d-flex flex-column">
                        <div className="mb-1">
                          <div className="mb-2">
                            <div className="bg-gray-1 bg-animation rounded height-10 w-40" />
                          </div>
                          <div className="mb-3">
                            <div className="bg-gray-1 bg-animation rounded height-12 mb-1 w-90" />
                            <div className="bg-gray-1 bg-animation rounded height-12 w-80" />
                          </div>
                        </div>
                        <div className="mb-4">
                          <div className="bg-gray-1 height-450" />
                        </div>
                        <div className="mb-4">
                          {/* Gallery */}
                          <div className="row mx-gutters-2">
                            <div className="col-auto">
                              <div className="bg-gray-1 width-60 height-60" />
                            </div>
                            <div className="col-auto">
                              <div className="bg-gray-1 width-60 height-60" />
                            </div>
                            <div className="col-auto">
                              <div className="bg-gray-1 width-60 height-60" />
                            </div>
                            <div className="col" />
                          </div>
                          {/* End Gallery */}
                        </div>
                        <div className="flex-center-between">
                          <div className="bg-gray-1 bg-animation rounded height-20 w-40" />
                          <div className="bg-gray-1 height-35 width-134 rounded-pill" />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-wd-4 d-md-flex d-wd-block">
              <ul className="row list-unstyled products-group no-gutters mb-0 w-100">
                <li className="col-xl-12 col-wd-6">
                  <div className="h-100 w-100 prodcut-box-shadow">
                    <div className="bg-white p-3">
                      <div className="pb-xl-2">
                        <div className="mb-2">
                          <div className="bg-gray-1 bg-animation rounded height-10 w-60" />
                        </div>
                        <div className="mb-3">
                          <div className="bg-gray-1 bg-animation rounded height-12 mb-1" />
                          <div className="bg-gray-1 bg-animation rounded height-12 w-80" />
                        </div>
                        <div className="mb-4">
                          <div className="bg-gray-1 height-190" />
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="bg-gray-1 bg-animation rounded height-20 w-60" />
                          <div className="bg-gray-1 height-35 width-35 rounded-circle" />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-xl-12 col-wd-6">
                  <div className="h-100 w-100 prodcut-box-shadow">
                    <div className="bg-white p-3">
                      <div className="pb-xl-2">
                        <div className="mb-2">
                          <div className="bg-gray-1 bg-animation rounded height-10 w-60" />
                        </div>
                        <div className="mb-3">
                          <div className="bg-gray-1 bg-animation rounded height-12 mb-1" />
                          <div className="bg-gray-1 bg-animation rounded height-12 w-80" />
                        </div>
                        <div className="mb-4">
                          <div className="bg-gray-1 height-190" />
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="bg-gray-1 bg-animation rounded height-20 w-60" />
                          <div className="bg-gray-1 height-35 width-35 rounded-circle" />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-xl-12 col-wd-6 d-md-none d-wd-block">
                  <div className="h-100 w-100 prodcut-box-shadow">
                    <div className="bg-white p-3">
                      <div className="pb-xl-2">
                        <div className="mb-2">
                          <div className="bg-gray-1 bg-animation rounded height-10 w-60" />
                        </div>
                        <div className="mb-3">
                          <div className="bg-gray-1 bg-animation rounded height-12 mb-1" />
                          <div className="bg-gray-1 bg-animation rounded height-12 w-80" />
                        </div>
                        <div className="mb-4">
                          <div className="bg-gray-1 height-190" />
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="bg-gray-1 bg-animation rounded height-20 w-60" />
                          <div className="bg-gray-1 height-35 width-35 rounded-circle" />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-xl-12 col-wd-6 d-md-none d-wd-block">
                  <div className="h-100 w-100 prodcut-box-shadow">
                    <div className="bg-white p-3">
                      <div className="pb-xl-2">
                        <div className="mb-2">
                          <div className="bg-gray-1 bg-animation rounded height-10 w-60" />
                        </div>
                        <div className="mb-3">
                          <div className="bg-gray-1 bg-animation rounded height-12 mb-1" />
                          <div className="bg-gray-1 bg-animation rounded height-12 w-80" />
                        </div>
                        <div className="mb-4">
                          <div className="bg-gray-1 height-190" />
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="bg-gray-1 bg-animation rounded height-20 w-60" />
                          <div className="bg-gray-1 height-35 width-35 rounded-circle" />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="tab-pane fade pt-2" id="Gpills-six-example1" role="tabpanel" aria-labelledby="Gpills-six-example1-tab">
          <div className="row no-gutters">
            <div className="col-md-3 col-wd-4 d-md-flex d-wd-block">
              <ul className="row list-unstyled products-group no-gutters mb-0 w-100">
                <li className="col-xl-12 col-wd-6">
                  <div className="h-100 w-100 prodcut-box-shadow">
                    <div className="bg-white p-3">
                      <div className="pb-xl-2">
                        <div className="mb-2">
                          <div className="bg-gray-1 bg-animation rounded height-10 w-60" />
                        </div>
                        <div className="mb-3">
                          <div className="bg-gray-1 bg-animation rounded height-12 mb-1" />
                          <div className="bg-gray-1 bg-animation rounded height-12 w-80" />
                        </div>
                        <div className="mb-4">
                          <div className="bg-gray-1 height-190" />
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="bg-gray-1 bg-animation rounded height-20 w-60" />
                          <div className="bg-gray-1 height-35 width-35 rounded-circle" />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-xl-12 col-wd-6">
                  <div className="h-100 w-100 prodcut-box-shadow">
                    <div className="bg-white p-3">
                      <div className="pb-xl-2">
                        <div className="mb-2">
                          <div className="bg-gray-1 bg-animation rounded height-10 w-60" />
                        </div>
                        <div className="mb-3">
                          <div className="bg-gray-1 bg-animation rounded height-12 mb-1" />
                          <div className="bg-gray-1 bg-animation rounded height-12 w-80" />
                        </div>
                        <div className="mb-4">
                          <div className="bg-gray-1 height-190" />
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="bg-gray-1 bg-animation rounded height-20 w-60" />
                          <div className="bg-gray-1 height-35 width-35 rounded-circle" />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-xl-12 col-wd-6 d-md-none d-wd-block">
                  <div className="h-100 w-100 prodcut-box-shadow">
                    <div className="bg-white p-3">
                      <div className="pb-xl-2">
                        <div className="mb-2">
                          <div className="bg-gray-1 bg-animation rounded height-10 w-60" />
                        </div>
                        <div className="mb-3">
                          <div className="bg-gray-1 bg-animation rounded height-12 mb-1" />
                          <div className="bg-gray-1 bg-animation rounded height-12 w-80" />
                        </div>
                        <div className="mb-4">
                          <div className="bg-gray-1 height-190" />
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="bg-gray-1 bg-animation rounded height-20 w-60" />
                          <div className="bg-gray-1 height-35 width-35 rounded-circle" />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-xl-12 col-wd-6 d-md-none d-wd-block">
                  <div className="h-100 w-100 prodcut-box-shadow">
                    <div className="bg-white p-3">
                      <div className="pb-xl-2">
                        <div className="mb-2">
                          <div className="bg-gray-1 bg-animation rounded height-10 w-60" />
                        </div>
                        <div className="mb-3">
                          <div className="bg-gray-1 bg-animation rounded height-12 mb-1" />
                          <div className="bg-gray-1 bg-animation rounded height-12 w-80" />
                        </div>
                        <div className="mb-4">
                          <div className="bg-gray-1 height-190" />
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="bg-gray-1 bg-animation rounded height-20 w-60" />
                          <div className="bg-gray-1 height-35 width-35 rounded-circle" />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-wd-4 products-group-1">
              <ul className="row list-unstyled products-group no-gutters bg-white h-100 mb-0">
                <li className="col product-item remove-divider">
                  <div className="h-100 w-100 prodcut-box-shadow">
                    <div className="bg-white p-3">
                      <div className="d-flex flex-column">
                        <div className="mb-1">
                          <div className="mb-2">
                            <div className="bg-gray-1 bg-animation rounded height-10 w-40" />
                          </div>
                          <div className="mb-3">
                            <div className="bg-gray-1 bg-animation rounded height-12 mb-1 w-90" />
                            <div className="bg-gray-1 bg-animation rounded height-12 w-80" />
                          </div>
                        </div>
                        <div className="mb-4">
                          <div className="bg-gray-1 height-450" />
                        </div>
                        <div className="mb-4">
                          {/* Gallery */}
                          <div className="row mx-gutters-2">
                            <div className="col-auto">
                              <div className="bg-gray-1 width-60 height-60" />
                            </div>
                            <div className="col-auto">
                              <div className="bg-gray-1 width-60 height-60" />
                            </div>
                            <div className="col-auto">
                              <div className="bg-gray-1 width-60 height-60" />
                            </div>
                            <div className="col" />
                          </div>
                          {/* End Gallery */}
                        </div>
                        <div className="flex-center-between">
                          <div className="bg-gray-1 bg-animation rounded height-20 w-40" />
                          <div className="bg-gray-1 height-35 width-134 rounded-pill" />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-wd-4 d-md-flex d-wd-block">
              <ul className="row list-unstyled products-group no-gutters mb-0 w-100">
                <li className="col-xl-12 col-wd-6">
                  <div className="h-100 w-100 prodcut-box-shadow">
                    <div className="bg-white p-3">
                      <div className="pb-xl-2">
                        <div className="mb-2">
                          <div className="bg-gray-1 bg-animation rounded height-10 w-60" />
                        </div>
                        <div className="mb-3">
                          <div className="bg-gray-1 bg-animation rounded height-12 mb-1" />
                          <div className="bg-gray-1 bg-animation rounded height-12 w-80" />
                        </div>
                        <div className="mb-4">
                          <div className="bg-gray-1 height-190" />
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="bg-gray-1 bg-animation rounded height-20 w-60" />
                          <div className="bg-gray-1 height-35 width-35 rounded-circle" />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-xl-12 col-wd-6">
                  <div className="h-100 w-100 prodcut-box-shadow">
                    <div className="bg-white p-3">
                      <div className="pb-xl-2">
                        <div className="mb-2">
                          <div className="bg-gray-1 bg-animation rounded height-10 w-60" />
                        </div>
                        <div className="mb-3">
                          <div className="bg-gray-1 bg-animation rounded height-12 mb-1" />
                          <div className="bg-gray-1 bg-animation rounded height-12 w-80" />
                        </div>
                        <div className="mb-4">
                          <div className="bg-gray-1 height-190" />
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="bg-gray-1 bg-animation rounded height-20 w-60" />
                          <div className="bg-gray-1 height-35 width-35 rounded-circle" />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-xl-12 col-wd-6 d-md-none d-wd-block">
                  <div className="h-100 w-100 prodcut-box-shadow">
                    <div className="bg-white p-3">
                      <div className="pb-xl-2">
                        <div className="mb-2">
                          <div className="bg-gray-1 bg-animation rounded height-10 w-60" />
                        </div>
                        <div className="mb-3">
                          <div className="bg-gray-1 bg-animation rounded height-12 mb-1" />
                          <div className="bg-gray-1 bg-animation rounded height-12 w-80" />
                        </div>
                        <div className="mb-4">
                          <div className="bg-gray-1 height-190" />
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="bg-gray-1 bg-animation rounded height-20 w-60" />
                          <div className="bg-gray-1 height-35 width-35 rounded-circle" />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-xl-12 col-wd-6 d-md-none d-wd-block">
                  <div className="h-100 w-100 prodcut-box-shadow">
                    <div className="bg-white p-3">
                      <div className="pb-xl-2">
                        <div className="mb-2">
                          <div className="bg-gray-1 bg-animation rounded height-10 w-60" />
                        </div>
                        <div className="mb-3">
                          <div className="bg-gray-1 bg-animation rounded height-12 mb-1" />
                          <div className="bg-gray-1 bg-animation rounded height-12 w-80" />
                        </div>
                        <div className="mb-4">
                          <div className="bg-gray-1 height-190" />
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="bg-gray-1 bg-animation rounded height-20 w-60" />
                          <div className="bg-gray-1 height-35 width-35 rounded-circle" />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="tab-pane fade pt-2" id="Gpills-seven-example1" role="tabpanel" aria-labelledby="Gpills-seven-example1-tab">
          <div className="row no-gutters">
            <div className="col-md-3 col-wd-4 d-md-flex d-wd-block">
              <ul className="row list-unstyled products-group no-gutters mb-0 w-100">
                <li className="col-xl-12 col-wd-6">
                  <div className="h-100 w-100 prodcut-box-shadow">
                    <div className="bg-white p-3">
                      <div className="pb-xl-2">
                        <div className="mb-2">
                          <div className="bg-gray-1 bg-animation rounded height-10 w-60" />
                        </div>
                        <div className="mb-3">
                          <div className="bg-gray-1 bg-animation rounded height-12 mb-1" />
                          <div className="bg-gray-1 bg-animation rounded height-12 w-80" />
                        </div>
                        <div className="mb-4">
                          <div className="bg-gray-1 height-190" />
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="bg-gray-1 bg-animation rounded height-20 w-60" />
                          <div className="bg-gray-1 height-35 width-35 rounded-circle" />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-xl-12 col-wd-6">
                  <div className="h-100 w-100 prodcut-box-shadow">
                    <div className="bg-white p-3">
                      <div className="pb-xl-2">
                        <div className="mb-2">
                          <div className="bg-gray-1 bg-animation rounded height-10 w-60" />
                        </div>
                        <div className="mb-3">
                          <div className="bg-gray-1 bg-animation rounded height-12 mb-1" />
                          <div className="bg-gray-1 bg-animation rounded height-12 w-80" />
                        </div>
                        <div className="mb-4">
                          <div className="bg-gray-1 height-190" />
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="bg-gray-1 bg-animation rounded height-20 w-60" />
                          <div className="bg-gray-1 height-35 width-35 rounded-circle" />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-xl-12 col-wd-6 d-md-none d-wd-block">
                  <div className="h-100 w-100 prodcut-box-shadow">
                    <div className="bg-white p-3">
                      <div className="pb-xl-2">
                        <div className="mb-2">
                          <div className="bg-gray-1 bg-animation rounded height-10 w-60" />
                        </div>
                        <div className="mb-3">
                          <div className="bg-gray-1 bg-animation rounded height-12 mb-1" />
                          <div className="bg-gray-1 bg-animation rounded height-12 w-80" />
                        </div>
                        <div className="mb-4">
                          <div className="bg-gray-1 height-190" />
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="bg-gray-1 bg-animation rounded height-20 w-60" />
                          <div className="bg-gray-1 height-35 width-35 rounded-circle" />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-xl-12 col-wd-6 d-md-none d-wd-block">
                  <div className="h-100 w-100 prodcut-box-shadow">
                    <div className="bg-white p-3">
                      <div className="pb-xl-2">
                        <div className="mb-2">
                          <div className="bg-gray-1 bg-animation rounded height-10 w-60" />
                        </div>
                        <div className="mb-3">
                          <div className="bg-gray-1 bg-animation rounded height-12 mb-1" />
                          <div className="bg-gray-1 bg-animation rounded height-12 w-80" />
                        </div>
                        <div className="mb-4">
                          <div className="bg-gray-1 height-190" />
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="bg-gray-1 bg-animation rounded height-20 w-60" />
                          <div className="bg-gray-1 height-35 width-35 rounded-circle" />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-wd-4 products-group-1">
              <ul className="row list-unstyled products-group no-gutters bg-white h-100 mb-0">
                <li className="col product-item remove-divider">
                  <div className="h-100 w-100 prodcut-box-shadow">
                    <div className="bg-white p-3">
                      <div className="d-flex flex-column">
                        <div className="mb-1">
                          <div className="mb-2">
                            <div className="bg-gray-1 bg-animation rounded height-10 w-40" />
                          </div>
                          <div className="mb-3">
                            <div className="bg-gray-1 bg-animation rounded height-12 mb-1 w-90" />
                            <div className="bg-gray-1 bg-animation rounded height-12 w-80" />
                          </div>
                        </div>
                        <div className="mb-4">
                          <div className="bg-gray-1 height-450" />
                        </div>
                        <div className="mb-4">
                          {/* Gallery */}
                          <div className="row mx-gutters-2">
                            <div className="col-auto">
                              <div className="bg-gray-1 width-60 height-60" />
                            </div>
                            <div className="col-auto">
                              <div className="bg-gray-1 width-60 height-60" />
                            </div>
                            <div className="col-auto">
                              <div className="bg-gray-1 width-60 height-60" />
                            </div>
                            <div className="col" />
                          </div>
                          {/* End Gallery */}
                        </div>
                        <div className="flex-center-between">
                          <div className="bg-gray-1 bg-animation rounded height-20 w-40" />
                          <div className="bg-gray-1 height-35 width-134 rounded-pill" />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-wd-4 d-md-flex d-wd-block">
              <ul className="row list-unstyled products-group no-gutters mb-0 w-100">
                <li className="col-xl-12 col-wd-6">
                  <div className="h-100 w-100 prodcut-box-shadow">
                    <div className="bg-white p-3">
                      <div className="pb-xl-2">
                        <div className="mb-2">
                          <div className="bg-gray-1 bg-animation rounded height-10 w-60" />
                        </div>
                        <div className="mb-3">
                          <div className="bg-gray-1 bg-animation rounded height-12 mb-1" />
                          <div className="bg-gray-1 bg-animation rounded height-12 w-80" />
                        </div>
                        <div className="mb-4">
                          <div className="bg-gray-1 height-190" />
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="bg-gray-1 bg-animation rounded height-20 w-60" />
                          <div className="bg-gray-1 height-35 width-35 rounded-circle" />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-xl-12 col-wd-6">
                  <div className="h-100 w-100 prodcut-box-shadow">
                    <div className="bg-white p-3">
                      <div className="pb-xl-2">
                        <div className="mb-2">
                          <div className="bg-gray-1 bg-animation rounded height-10 w-60" />
                        </div>
                        <div className="mb-3">
                          <div className="bg-gray-1 bg-animation rounded height-12 mb-1" />
                          <div className="bg-gray-1 bg-animation rounded height-12 w-80" />
                        </div>
                        <div className="mb-4">
                          <div className="bg-gray-1 height-190" />
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="bg-gray-1 bg-animation rounded height-20 w-60" />
                          <div className="bg-gray-1 height-35 width-35 rounded-circle" />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-xl-12 col-wd-6 d-md-none d-wd-block">
                  <div className="h-100 w-100 prodcut-box-shadow">
                    <div className="bg-white p-3">
                      <div className="pb-xl-2">
                        <div className="mb-2">
                          <div className="bg-gray-1 bg-animation rounded height-10 w-60" />
                        </div>
                        <div className="mb-3">
                          <div className="bg-gray-1 bg-animation rounded height-12 mb-1" />
                          <div className="bg-gray-1 bg-animation rounded height-12 w-80" />
                        </div>
                        <div className="mb-4">
                          <div className="bg-gray-1 height-190" />
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="bg-gray-1 bg-animation rounded height-20 w-60" />
                          <div className="bg-gray-1 height-35 width-35 rounded-circle" />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-xl-12 col-wd-6 d-md-none d-wd-block">
                  <div className="h-100 w-100 prodcut-box-shadow">
                    <div className="bg-white p-3">
                      <div className="pb-xl-2">
                        <div className="mb-2">
                          <div className="bg-gray-1 bg-animation rounded height-10 w-60" />
                        </div>
                        <div className="mb-3">
                          <div className="bg-gray-1 bg-animation rounded height-12 mb-1" />
                          <div className="bg-gray-1 bg-animation rounded height-12 w-80" />
                        </div>
                        <div className="mb-4">
                          <div className="bg-gray-1 height-190" />
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="bg-gray-1 bg-animation rounded height-20 w-60" />
                          <div className="bg-gray-1 height-35 width-35 rounded-circle" />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="tab-pane fade pt-2" id="Gpills-eight-example1" role="tabpanel" aria-labelledby="Gpills-eight-example1-tab">
          <div className="row no-gutters">
            <div className="col-md-3 col-wd-4 d-md-flex d-wd-block">
              <ul className="row list-unstyled products-group no-gutters mb-0 w-100">
                <li className="col-xl-12 col-wd-6">
                  <div className="h-100 w-100 prodcut-box-shadow">
                    <div className="bg-white p-3">
                      <div className="pb-xl-2">
                        <div className="mb-2">
                          <div className="bg-gray-1 bg-animation rounded height-10 w-60" />
                        </div>
                        <div className="mb-3">
                          <div className="bg-gray-1 bg-animation rounded height-12 mb-1" />
                          <div className="bg-gray-1 bg-animation rounded height-12 w-80" />
                        </div>
                        <div className="mb-4">
                          <div className="bg-gray-1 height-190" />
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="bg-gray-1 bg-animation rounded height-20 w-60" />
                          <div className="bg-gray-1 height-35 width-35 rounded-circle" />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-xl-12 col-wd-6">
                  <div className="h-100 w-100 prodcut-box-shadow">
                    <div className="bg-white p-3">
                      <div className="pb-xl-2">
                        <div className="mb-2">
                          <div className="bg-gray-1 bg-animation rounded height-10 w-60" />
                        </div>
                        <div className="mb-3">
                          <div className="bg-gray-1 bg-animation rounded height-12 mb-1" />
                          <div className="bg-gray-1 bg-animation rounded height-12 w-80" />
                        </div>
                        <div className="mb-4">
                          <div className="bg-gray-1 height-190" />
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="bg-gray-1 bg-animation rounded height-20 w-60" />
                          <div className="bg-gray-1 height-35 width-35 rounded-circle" />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-xl-12 col-wd-6 d-md-none d-wd-block">
                  <div className="h-100 w-100 prodcut-box-shadow">
                    <div className="bg-white p-3">
                      <div className="pb-xl-2">
                        <div className="mb-2">
                          <div className="bg-gray-1 bg-animation rounded height-10 w-60" />
                        </div>
                        <div className="mb-3">
                          <div className="bg-gray-1 bg-animation rounded height-12 mb-1" />
                          <div className="bg-gray-1 bg-animation rounded height-12 w-80" />
                        </div>
                        <div className="mb-4">
                          <div className="bg-gray-1 height-190" />
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="bg-gray-1 bg-animation rounded height-20 w-60" />
                          <div className="bg-gray-1 height-35 width-35 rounded-circle" />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-xl-12 col-wd-6 d-md-none d-wd-block">
                  <div className="h-100 w-100 prodcut-box-shadow">
                    <div className="bg-white p-3">
                      <div className="pb-xl-2">
                        <div className="mb-2">
                          <div className="bg-gray-1 bg-animation rounded height-10 w-60" />
                        </div>
                        <div className="mb-3">
                          <div className="bg-gray-1 bg-animation rounded height-12 mb-1" />
                          <div className="bg-gray-1 bg-animation rounded height-12 w-80" />
                        </div>
                        <div className="mb-4">
                          <div className="bg-gray-1 height-190" />
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="bg-gray-1 bg-animation rounded height-20 w-60" />
                          <div className="bg-gray-1 height-35 width-35 rounded-circle" />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-wd-4 products-group-1">
              <ul className="row list-unstyled products-group no-gutters bg-white h-100 mb-0">
                <li className="col product-item remove-divider">
                  <div className="h-100 w-100 prodcut-box-shadow">
                    <div className="bg-white p-3">
                      <div className="d-flex flex-column">
                        <div className="mb-1">
                          <div className="mb-2">
                            <div className="bg-gray-1 bg-animation rounded height-10 w-40" />
                          </div>
                          <div className="mb-3">
                            <div className="bg-gray-1 bg-animation rounded height-12 mb-1 w-90" />
                            <div className="bg-gray-1 bg-animation rounded height-12 w-80" />
                          </div>
                        </div>
                        <div className="mb-4">
                          <div className="bg-gray-1 height-450" />
                        </div>
                        <div className="mb-4">
                          {/* Gallery */}
                          <div className="row mx-gutters-2">
                            <div className="col-auto">
                              <div className="bg-gray-1 width-60 height-60" />
                            </div>
                            <div className="col-auto">
                              <div className="bg-gray-1 width-60 height-60" />
                            </div>
                            <div className="col-auto">
                              <div className="bg-gray-1 width-60 height-60" />
                            </div>
                            <div className="col" />
                          </div>
                          {/* End Gallery */}
                        </div>
                        <div className="flex-center-between">
                          <div className="bg-gray-1 bg-animation rounded height-20 w-40" />
                          <div className="bg-gray-1 height-35 width-134 rounded-pill" />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-wd-4 d-md-flex d-wd-block">
              <ul className="row list-unstyled products-group no-gutters mb-0 w-100">
                <li className="col-xl-12 col-wd-6">
                  <div className="h-100 w-100 prodcut-box-shadow">
                    <div className="bg-white p-3">
                      <div className="pb-xl-2">
                        <div className="mb-2">
                          <div className="bg-gray-1 bg-animation rounded height-10 w-60" />
                        </div>
                        <div className="mb-3">
                          <div className="bg-gray-1 bg-animation rounded height-12 mb-1" />
                          <div className="bg-gray-1 bg-animation rounded height-12 w-80" />
                        </div>
                        <div className="mb-4">
                          <div className="bg-gray-1 height-190" />
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="bg-gray-1 bg-animation rounded height-20 w-60" />
                          <div className="bg-gray-1 height-35 width-35 rounded-circle" />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-xl-12 col-wd-6">
                  <div className="h-100 w-100 prodcut-box-shadow">
                    <div className="bg-white p-3">
                      <div className="pb-xl-2">
                        <div className="mb-2">
                          <div className="bg-gray-1 bg-animation rounded height-10 w-60" />
                        </div>
                        <div className="mb-3">
                          <div className="bg-gray-1 bg-animation rounded height-12 mb-1" />
                          <div className="bg-gray-1 bg-animation rounded height-12 w-80" />
                        </div>
                        <div className="mb-4">
                          <div className="bg-gray-1 height-190" />
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="bg-gray-1 bg-animation rounded height-20 w-60" />
                          <div className="bg-gray-1 height-35 width-35 rounded-circle" />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-xl-12 col-wd-6 d-md-none d-wd-block">
                  <div className="h-100 w-100 prodcut-box-shadow">
                    <div className="bg-white p-3">
                      <div className="pb-xl-2">
                        <div className="mb-2">
                          <div className="bg-gray-1 bg-animation rounded height-10 w-60" />
                        </div>
                        <div className="mb-3">
                          <div className="bg-gray-1 bg-animation rounded height-12 mb-1" />
                          <div className="bg-gray-1 bg-animation rounded height-12 w-80" />
                        </div>
                        <div className="mb-4">
                          <div className="bg-gray-1 height-190" />
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="bg-gray-1 bg-animation rounded height-20 w-60" />
                          <div className="bg-gray-1 height-35 width-35 rounded-circle" />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-xl-12 col-wd-6 d-md-none d-wd-block">
                  <div className="h-100 w-100 prodcut-box-shadow">
                    <div className="bg-white p-3">
                      <div className="pb-xl-2">
                        <div className="mb-2">
                          <div className="bg-gray-1 bg-animation rounded height-10 w-60" />
                        </div>
                        <div className="mb-3">
                          <div className="bg-gray-1 bg-animation rounded height-12 mb-1" />
                          <div className="bg-gray-1 bg-animation rounded height-12 w-80" />
                        </div>
                        <div className="mb-4">
                          <div className="bg-gray-1 height-190" />
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="bg-gray-1 bg-animation rounded height-20 w-60" />
                          <div className="bg-gray-1 height-35 width-35 rounded-circle" />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="tab-pane fade pt-2" id="Gpills-nine-example1" role="tabpanel" aria-labelledby="Gpills-nine-example1-tab">
          <div className="row no-gutters">
            <div className="col-md-3 col-wd-4 d-md-flex d-wd-block">
              <ul className="row list-unstyled products-group no-gutters mb-0 w-100">
                <li className="col-xl-12 col-wd-6">
                  <div className="h-100 w-100 prodcut-box-shadow">
                    <div className="bg-white p-3">
                      <div className="pb-xl-2">
                        <div className="mb-2">
                          <div className="bg-gray-1 bg-animation rounded height-10 w-60" />
                        </div>
                        <div className="mb-3">
                          <div className="bg-gray-1 bg-animation rounded height-12 mb-1" />
                          <div className="bg-gray-1 bg-animation rounded height-12 w-80" />
                        </div>
                        <div className="mb-4">
                          <div className="bg-gray-1 height-190" />
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="bg-gray-1 bg-animation rounded height-20 w-60" />
                          <div className="bg-gray-1 height-35 width-35 rounded-circle" />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-xl-12 col-wd-6">
                  <div className="h-100 w-100 prodcut-box-shadow">
                    <div className="bg-white p-3">
                      <div className="pb-xl-2">
                        <div className="mb-2">
                          <div className="bg-gray-1 bg-animation rounded height-10 w-60" />
                        </div>
                        <div className="mb-3">
                          <div className="bg-gray-1 bg-animation rounded height-12 mb-1" />
                          <div className="bg-gray-1 bg-animation rounded height-12 w-80" />
                        </div>
                        <div className="mb-4">
                          <div className="bg-gray-1 height-190" />
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="bg-gray-1 bg-animation rounded height-20 w-60" />
                          <div className="bg-gray-1 height-35 width-35 rounded-circle" />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-xl-12 col-wd-6 d-md-none d-wd-block">
                  <div className="h-100 w-100 prodcut-box-shadow">
                    <div className="bg-white p-3">
                      <div className="pb-xl-2">
                        <div className="mb-2">
                          <div className="bg-gray-1 bg-animation rounded height-10 w-60" />
                        </div>
                        <div className="mb-3">
                          <div className="bg-gray-1 bg-animation rounded height-12 mb-1" />
                          <div className="bg-gray-1 bg-animation rounded height-12 w-80" />
                        </div>
                        <div className="mb-4">
                          <div className="bg-gray-1 height-190" />
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="bg-gray-1 bg-animation rounded height-20 w-60" />
                          <div className="bg-gray-1 height-35 width-35 rounded-circle" />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-xl-12 col-wd-6 d-md-none d-wd-block">
                  <div className="h-100 w-100 prodcut-box-shadow">
                    <div className="bg-white p-3">
                      <div className="pb-xl-2">
                        <div className="mb-2">
                          <div className="bg-gray-1 bg-animation rounded height-10 w-60" />
                        </div>
                        <div className="mb-3">
                          <div className="bg-gray-1 bg-animation rounded height-12 mb-1" />
                          <div className="bg-gray-1 bg-animation rounded height-12 w-80" />
                        </div>
                        <div className="mb-4">
                          <div className="bg-gray-1 height-190" />
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="bg-gray-1 bg-animation rounded height-20 w-60" />
                          <div className="bg-gray-1 height-35 width-35 rounded-circle" />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-wd-4 products-group-1">
              <ul className="row list-unstyled products-group no-gutters bg-white h-100 mb-0">
                <li className="col product-item remove-divider">
                  <div className="h-100 w-100 prodcut-box-shadow">
                    <div className="bg-white p-3">
                      <div className="d-flex flex-column">
                        <div className="mb-1">
                          <div className="mb-2">
                            <div className="bg-gray-1 bg-animation rounded height-10 w-40" />
                          </div>
                          <div className="mb-3">
                            <div className="bg-gray-1 bg-animation rounded height-12 mb-1 w-90" />
                            <div className="bg-gray-1 bg-animation rounded height-12 w-80" />
                          </div>
                        </div>
                        <div className="mb-4">
                          <div className="bg-gray-1 height-450" />
                        </div>
                        <div className="mb-4">
                          {/* Gallery */}
                          <div className="row mx-gutters-2">
                            <div className="col-auto">
                              <div className="bg-gray-1 width-60 height-60" />
                            </div>
                            <div className="col-auto">
                              <div className="bg-gray-1 width-60 height-60" />
                            </div>
                            <div className="col-auto">
                              <div className="bg-gray-1 width-60 height-60" />
                            </div>
                            <div className="col" />
                          </div>
                          {/* End Gallery */}
                        </div>
                        <div className="flex-center-between">
                          <div className="bg-gray-1 bg-animation rounded height-20 w-40" />
                          <div className="bg-gray-1 height-35 width-134 rounded-pill" />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-wd-4 d-md-flex d-wd-block">
              <ul className="row list-unstyled products-group no-gutters mb-0 w-100">
                <li className="col-xl-12 col-wd-6">
                  <div className="h-100 w-100 prodcut-box-shadow">
                    <div className="bg-white p-3">
                      <div className="pb-xl-2">
                        <div className="mb-2">
                          <div className="bg-gray-1 bg-animation rounded height-10 w-60" />
                        </div>
                        <div className="mb-3">
                          <div className="bg-gray-1 bg-animation rounded height-12 mb-1" />
                          <div className="bg-gray-1 bg-animation rounded height-12 w-80" />
                        </div>
                        <div className="mb-4">
                          <div className="bg-gray-1 height-190" />
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="bg-gray-1 bg-animation rounded height-20 w-60" />
                          <div className="bg-gray-1 height-35 width-35 rounded-circle" />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-xl-12 col-wd-6">
                  <div className="h-100 w-100 prodcut-box-shadow">
                    <div className="bg-white p-3">
                      <div className="pb-xl-2">
                        <div className="mb-2">
                          <div className="bg-gray-1 bg-animation rounded height-10 w-60" />
                        </div>
                        <div className="mb-3">
                          <div className="bg-gray-1 bg-animation rounded height-12 mb-1" />
                          <div className="bg-gray-1 bg-animation rounded height-12 w-80" />
                        </div>
                        <div className="mb-4">
                          <div className="bg-gray-1 height-190" />
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="bg-gray-1 bg-animation rounded height-20 w-60" />
                          <div className="bg-gray-1 height-35 width-35 rounded-circle" />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-xl-12 col-wd-6 d-md-none d-wd-block">
                  <div className="h-100 w-100 prodcut-box-shadow">
                    <div className="bg-white p-3">
                      <div className="pb-xl-2">
                        <div className="mb-2">
                          <div className="bg-gray-1 bg-animation rounded height-10 w-60" />
                        </div>
                        <div className="mb-3">
                          <div className="bg-gray-1 bg-animation rounded height-12 mb-1" />
                          <div className="bg-gray-1 bg-animation rounded height-12 w-80" />
                        </div>
                        <div className="mb-4">
                          <div className="bg-gray-1 height-190" />
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="bg-gray-1 bg-animation rounded height-20 w-60" />
                          <div className="bg-gray-1 height-35 width-35 rounded-circle" />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-xl-12 col-wd-6 d-md-none d-wd-block">
                  <div className="h-100 w-100 prodcut-box-shadow">
                    <div className="bg-white p-3">
                      <div className="pb-xl-2">
                        <div className="mb-2">
                          <div className="bg-gray-1 bg-animation rounded height-10 w-60" />
                        </div>
                        <div className="mb-3">
                          <div className="bg-gray-1 bg-animation rounded height-12 mb-1" />
                          <div className="bg-gray-1 bg-animation rounded height-12 w-80" />
                        </div>
                        <div className="mb-4">
                          <div className="bg-gray-1 height-190" />
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="bg-gray-1 bg-animation rounded height-20 w-60" />
                          <div className="bg-gray-1 height-35 width-35 rounded-circle" />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* End Tab Content */}
    </div>
    {/* End Features Section */}
  </div>
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
    <div className="mb-6">
      <a href="../shop/shop.html" className="d-block text-gray-90">
        <div style={{backgroundImage: 'url(../../assets/img/1400X206/img1.jpg)'}}>
          <div className="space-top-2-md p-4 pt-6 pt-md-8 pt-lg-6 pt-xl-8 pb-lg-4 px-xl-8 px-lg-6">
            <div className="flex-horizontal-center mt-lg-3 mt-xl-0 overflow-auto overflow-md-visble">
              <h1 className="text-lh-38 font-size-32 font-weight-light mb-0 flex-shrink-0 flex-md-shrink-1">SHOP AND <strong>SAVE BIG</strong> ON HOTTEST TABLETS</h1>
              <div className="ml-5 flex-content-center flex-shrink-0">
                <div className="bg-primary rounded-lg px-6 py-2">
                  <em className="font-size-14 font-weight-light">STARTING AT</em>
                  <div className="font-size-30 font-weight-bold text-lh-1">
                    <sup>$</sup>79<sup>99</sup>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
    {/* End Full banner */}
    {/* Recently viewed */}
    <div className="mb-6">
      <div className="position-relative">
        <div className="border-bottom border-color-1 mb-2">
          <h3 className="section-title mb-0 pb-2 font-size-22">Recently Viewed</h3>
        </div>
        <div className="js-slick-carousel u-slick position-static overflow-hidden u-slick-overflow-visble pb-7 pt-2 px-1" data-pagi-classes="text-center right-0 bottom-1 left-0 u-slick__pagination u-slick__pagination--long mb-0 z-index-n1 mt-3 mt-md-0" data-slides-show={7} data-slides-scroll={1} data-arrows-classes="position-absolute top-0 font-size-17 u-slick__arrow-normal top-10" data-arrow-left-classes="fa fa-angle-left right-1" data-arrow-right-classes="fa fa-angle-right right-0" data-responsive="[{
                        &quot;breakpoint&quot;: 1400,
                        &quot;settings&quot;: {
                          &quot;slidesToShow&quot;: 6
                        }
                      }, {
                          &quot;breakpoint&quot;: 1200,
                          &quot;settings&quot;: {
                            &quot;slidesToShow&quot;: 4
                          }
                      }, {
                        &quot;breakpoint&quot;: 992,
                        &quot;settings&quot;: {
                          &quot;slidesToShow&quot;: 3
                        }
                      }, {
                        &quot;breakpoint&quot;: 768,
                        &quot;settings&quot;: {
                          &quot;slidesToShow&quot;: 2
                        }
                      }, {
                        &quot;breakpoint&quot;: 554,
                        &quot;settings&quot;: {
                          &quot;slidesToShow&quot;: 2
                        }
                      }]">
          <div className="js-slide products-group">
            <div className="product-item">
              <div className="product-item__outer h-100">
                <div className="product-item__inner px-wd-4 p-2 p-md-3">
                  <div className="product-item__body pb-xl-2">
                    <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                    <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Wireless Audio System Multiroom 360 degree Full base audio</a></h5>
                    <div className="mb-2">
                      <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="../../assets/img/212X200/img1.jpg" alt="Image Description" /></a>
                    </div>
                    <div className="flex-center-between mb-1">
                      <div className="prodcut-price">
                        <div className="text-gray-100">$685,00</div>
                      </div>
                      <div className="d-none d-xl-block prodcut-add-cart">
                        <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                      </div>
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
          </div>
          <div className="js-slide products-group">
            <div className="product-item">
              <div className="product-item__outer h-100">
                <div className="product-item__inner px-wd-4 p-2 p-md-3">
                  <div className="product-item__body pb-xl-2">
                    <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                    <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Wireless Audio System Multiroom 360 degree Full base audio</a></h5>
                    <div className="mb-2">
                      <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="../../assets/img/212X200/img2.jpg" alt="Image Description" /></a>
                    </div>
                    <div className="flex-center-between mb-1">
                      <div className="prodcut-price">
                        <div className="text-gray-100">$685,00</div>
                      </div>
                      <div className="d-none d-xl-block prodcut-add-cart">
                        <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                      </div>
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
          </div>
          <div className="js-slide products-group">
            <div className="product-item">
              <div className="product-item__outer h-100">
                <div className="product-item__inner px-wd-4 p-2 p-md-3">
                  <div className="product-item__body pb-xl-2">
                    <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                    <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Wireless Audio System Multiroom 360 degree Full base audio</a></h5>
                    <div className="mb-2">
                      <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="../../assets/img/212X200/img3.jpg" alt="Image Description" /></a>
                    </div>
                    <div className="flex-center-between mb-1">
                      <div className="prodcut-price">
                        <div className="text-gray-100">$685,00</div>
                      </div>
                      <div className="d-none d-xl-block prodcut-add-cart">
                        <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                      </div>
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
          </div>
          <div className="js-slide products-group">
            <div className="product-item">
              <div className="product-item__outer h-100">
                <div className="product-item__inner px-wd-4 p-2 p-md-3">
                  <div className="product-item__body pb-xl-2">
                    <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                    <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Wireless Audio System Multiroom 360 degree Full base audio</a></h5>
                    <div className="mb-2">
                      <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="../../assets/img/212X200/img4.jpg" alt="Image Description" /></a>
                    </div>
                    <div className="flex-center-between mb-1">
                      <div className="prodcut-price">
                        <div className="text-gray-100">$685,00</div>
                      </div>
                      <div className="d-none d-xl-block prodcut-add-cart">
                        <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                      </div>
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
          </div>
          <div className="js-slide products-group">
            <div className="product-item">
              <div className="product-item__outer h-100">
                <div className="product-item__inner px-wd-4 p-2 p-md-3">
                  <div className="product-item__body pb-xl-2">
                    <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                    <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Wireless Audio System Multiroom 360 degree Full base audio</a></h5>
                    <div className="mb-2">
                      <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="../../assets/img/212X200/img5.jpg" alt="Image Description" /></a>
                    </div>
                    <div className="flex-center-between mb-1">
                      <div className="prodcut-price">
                        <div className="text-gray-100">$685,00</div>
                      </div>
                      <div className="d-none d-xl-block prodcut-add-cart">
                        <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                      </div>
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
          </div>
          <div className="js-slide products-group">
            <div className="product-item">
              <div className="product-item__outer h-100">
                <div className="product-item__inner px-wd-4 p-2 p-md-3">
                  <div className="product-item__body pb-xl-2">
                    <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                    <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Wireless Audio System Multiroom 360 degree Full base audio</a></h5>
                    <div className="mb-2">
                      <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="../../assets/img/212X200/img6.jpg" alt="Image Description" /></a>
                    </div>
                    <div className="flex-center-between mb-1">
                      <div className="prodcut-price">
                        <div className="text-gray-100">$685,00</div>
                      </div>
                      <div className="d-none d-xl-block prodcut-add-cart">
                        <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                      </div>
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
          </div>
          <div className="js-slide products-group">
            <div className="product-item">
              <div className="product-item__outer h-100">
                <div className="product-item__inner px-wd-4 p-2 p-md-3">
                  <div className="product-item__body pb-xl-2">
                    <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                    <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Wireless Audio System Multiroom 360 degree Full base audio</a></h5>
                    <div className="mb-2">
                      <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="../../assets/img/212X200/img7.jpg" alt="Image Description" /></a>
                    </div>
                    <div className="flex-center-between mb-1">
                      <div className="prodcut-price">
                        <div className="text-gray-100">$685,00</div>
                      </div>
                      <div className="d-none d-xl-block prodcut-add-cart">
                        <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                      </div>
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
          </div>
          <div className="js-slide products-group">
            <div className="product-item">
              <div className="product-item__outer h-100">
                <div className="product-item__inner px-wd-4 p-2 p-md-3">
                  <div className="product-item__body pb-xl-2">
                    <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                    <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Wireless Audio System Multiroom 360 degree Full base audio</a></h5>
                    <div className="mb-2">
                      <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="../../assets/img/212X200/img1.jpg" alt="Image Description" /></a>
                    </div>
                    <div className="flex-center-between mb-1">
                      <div className="prodcut-price">
                        <div className="text-gray-100">$685,00</div>
                      </div>
                      <div className="d-none d-xl-block prodcut-add-cart">
                        <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                      </div>
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
          </div>
          <div className="js-slide products-group">
            <div className="product-item">
              <div className="product-item__outer h-100">
                <div className="product-item__inner px-wd-4 p-2 p-md-3">
                  <div className="product-item__body pb-xl-2">
                    <div className="mb-2"><a href="../shop/product-categories-7-column-full-width.html" className="font-size-12 text-gray-5">Speakers</a></div>
                    <h5 className="mb-1 product-item__title"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">Wireless Audio System Multiroom 360 degree Full base audio</a></h5>
                    <div className="mb-2">
                      <a href="../shop/single-product-fullwidth.html" className="d-block text-center"><img className="img-fluid" src="../../assets/img/212X200/img1.jpg" alt="Image Description" /></a>
                    </div>
                    <div className="flex-center-between mb-1">
                      <div className="prodcut-price">
                        <div className="text-gray-100">$685,00</div>
                      </div>
                      <div className="d-none d-xl-block prodcut-add-cart">
                        <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover"><i className="ec ec-add-to-cart" /></a>
                      </div>
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
          </div>
        </div>
      </div>
    </div>
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
