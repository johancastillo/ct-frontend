
const quantity = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const CategoryCarousel = () => {
  return (
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

          {
            quantity.map((product) => {
              return (
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
                              <a href="../shop/single-product-fullwidth.html" className="btn-add-cart btn-primary transition-3d-hover">
                                <i className="icon-cart" />
                              </a>
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
              )
            })
          }














        </div>
      </div>
    </div>
  )
}

export default CategoryCarousel


