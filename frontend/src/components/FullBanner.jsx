


const FullBanner = () => {
  return(
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
  )
}

export default FullBanner


