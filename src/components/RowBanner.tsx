import React from 'react'

import product1 from './products/1.png'
import product2 from './products/2.png'

const RowBanner = () => {
  return (
    <div className="mb-5">
      <div className="row">

        
        <div className="col-md-6 mb-4 mb-xl-0">
          <a href="../shop/shop.html" className="d-black text-gray-90">
            <div className="min-height-132 py-1 d-flex bg-gray-1 align-items-center">
              <div className="col-6 col-xl-5 col-wd-6 pr-0">
                <img className="img-fluid p-5" src={product1} alt="Image Description" />
              </div>
              <div className="col-6 col-xl-7 col-wd-6">
                <div className="mb-2 pb-1 font-size-18 font-weight-light text-ls-n1 text-lh-23">
                  CATCH BIG <strong>DEALS</strong> ON THE CAMERAS
                </div>
                <div className="link text-gray-90 font-weight-bold font-size-15">
                  Shop now
                  <span className="link__icon ml-1">
                    <span className="link__icon-inner"><i className="ec ec-arrow-right-categproes" /></span>
                  </span>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div className="col-md-6 mb-4 mb-xl-0">
          <a href="../shop/shop.html" className="d-black text-gray-90">
            <div className="min-height-132 py-1 d-flex bg-gray-1 align-items-center">
              <div className="col-6 col-xl-5 col-wd-6 pr-0">
                <img className="img-fluid p-5" src={product2} alt="Image Description" />
              </div>
              <div className="col-6 col-xl-7 col-wd-6">
                <div className="mb-2 pb-1 font-size-18 font-weight-light text-ls-n1 text-lh-23">
                  CATCH BIG <strong>DEALS</strong> ON THE CAMERAS
                </div>
                <div className="link text-gray-90 font-weight-bold font-size-15">
                  Shop now
                  <span className="link__icon ml-1">
                    <span className="link__icon-inner"><i className="ec ec-arrow-right-categproes" /></span>
                  </span>
                </div>
              </div>
            </div>
          </a>
        </div>

      </div>
    </div>
  )
}

export default RowBanner

