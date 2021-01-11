import React from 'react'

import banner from './banner.png'
import product1 from './products/1.png'
import product2 from './products/2.png'
import product3 from './products/3.png'


const Slider = () => {
  return (
    <div className="mb-5">
    <div className="bg-img-hero" style={{ backgroundImage: `url(${banner})` }}>
      <div className="container min-height-420 overflow-hidden">
        <div className="js-slick-carousel u-slick" data-pagi-classes="text-center position-absolute right-0 bottom-0 left-0 u-slick__pagination u-slick__pagination--long justify-content-start mb-3 mb-md-4 offset-xl-3 pl-2 pb-1">
          <div className="js-slide bg-img-hero-center">
            <div className="row min-height-420 py-7 py-md-0">
              <div className="offset-xl-3 col-xl-4 col-6 mt-md-8">
                <h1 className="font-size-64 text-lh-57 font-weight-light text-white" data-scs-animation-in="fadeInUp">
                  THE NEW <span className="d-block font-size-55">STANDARD</span>
                </h1>
                <h6 className="font-size-15 font-weight-bold mb-3 text-white" data-scs-animation-in="fadeInUp" data-scs-animation-delay={200}>
                  UNDER FAVORABLE SMARTWATCHES
                </h6>
                <div className="mb-4" data-scs-animation-in="fadeInUp" data-scs-animation-delay={300}>
                  <span className="font-size-13 text-white">FROM</span>
                  <div className="font-size-50 font-weight-bold text-lh-45 text-white">
                    <sup>$</sup>749<sup>99</sup>
                  </div>
                </div>
                <a href="../shop/single-product-fullwidth.html" className="btn btn-primary transition-3d-hover rounded-lg font-weight-normal py-2 px-md-7 px-3 font-size-16" data-scs-animation-in="fadeInUp" data-scs-animation-delay={400}>
                  Start Buying
                </a>
              </div>
              <div className="col-xl-5 col-6  d-flex align-items-center" data-scs-animation-in="zoomIn" data-scs-animation-delay={500}>
                <img className="img-fluid" src={product1} alt="Image Description" />
              </div>
            </div>
          </div>

          <div className="js-slide bg-img-hero-center" data-animation-delay={0}>
            <div className="row min-height-420 py-7 py-md-0">
              <div className="offset-xl-3 col-xl-4 col-6 mt-md-8">
                <h1 className="font-size-64 text-lh-57 font-weight-light text-white" data-scs-animation-in="fadeInUp">
                  THE NEW <span className="d-block font-size-55">STANDARD</span>
                </h1>
                <h6 className="font-size-15 font-weight-bold mb-3 text-white" data-scs-animation-in="fadeInUp" data-scs-animation-delay={200}>
                  UNDER FAVORABLE SMARTWATCHES
                </h6>
                <div className="mb-4" data-scs-animation-in="fadeInUp" data-scs-animation-delay={300}>
                  <span className="font-size-13 text-white">FROM</span>
                  <div className="font-size-50 font-weight-bold text-lh-45 text-white">
                    <sup>$</sup>749<sup>99</sup>
                  </div>
                </div>
                <a href="../shop/single-product-fullwidth.html" className="btn btn-primary transition-3d-hover rounded-lg font-weight-normal py-2 px-md-7 px-3 font-size-16" data-scs-animation-in="fadeInUp" data-scs-animation-delay={400}>
                  Start Buying
                </a>
              </div>
              <div className="col-xl-5 col-6  d-flex align-items-center" data-scs-animation-in="fadeInUp" data-scs-animation-delay={500}>
                <img className="img-fluid" src={product2} alt="Image Description" />
              </div>
            </div>
          </div>

          <div className="js-slide bg-img-hero-center" data-animation-delay={0}>
            <div className="row min-height-420 py-7 py-md-0">
              <div className="offset-xl-3 col-xl-4 col-6 mt-md-8">
                <h1 className="font-size-64 text-lh-57 font-weight-light text-white" data-scs-animation-in="fadeInUp">
                  THE NEW <span className="d-block font-size-55">STANDARD</span>
                </h1>
                <h6 className="font-size-15 font-weight-bold mb-3" data-scs-animation-in="fadeInUp" data-scs-animation-delay={200}>
                  UNDER FAVORABLE SMARTWATCHES
                </h6>
                <div className="mb-4" data-scs-animation-in="fadeInUp" data-scs-animation-delay={300}>
                  <span className="font-size-13 text-white">FROM</span>
                  <div className="font-size-50 font-weight-bold text-lh-45 text-white">
                    <sup>$</sup>749<sup>99</sup>
                  </div>
                </div>
                <a href="../shop/single-product-fullwidth.html" className="btn btn-primary transition-3d-hover rounded-lg font-weight-normal py-2 px-md-7 px-3 font-size-15" data-scs-animation-in="fadeInUp" data-scs-animation-delay={400}>
                  Start Buying
                </a>
              </div>
              <div className="col-xl-5 col-6  d-flex align-items-center" data-scs-animation-in="fadeInRight" data-scs-animation-delay={500}>
                <img className="img-fluid" src={product3} alt="Image Description" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Slider
