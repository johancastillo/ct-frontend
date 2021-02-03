import { Link } from 'react-router-dom'

const starsValidator: any = {
  0: { 1: "icon-star-void", 2: "icon-star-void", 3: "icon-star-void", 4: "icon-star-void", 5: "icon-star-void" },
  0.5: { 1: "icon-star-half", 2: "icon-star-void", 3: "icon-star-void", 4: "icon-star-void", 5: "icon-star-void" },
  1: { 1: "icon-star-full", 2: "icon-star-void", 3: "icon-star-void", 4: "icon-star-void", 5: "icon-star-void" },
  1.5: { 1: "icon-star-full", 2: "icon-star-half", 3: "icon-star-void", 4: "icon-star-void", 5: "icon-star-void" },
  2: { 1: "icon-star-full", 2: "icon-star-full", 3: "icon-star-void", 4: "icon-star-void", 5: "icon-star-void" },
  2.5: { 1: "icon-star-full", 2: "icon-star-full", 3: "icon-star-half", 4: "icon-star-void", 5: "icon-star-void" },
  3: { 1: "icon-star-full", 2: "icon-star-full", 3: "icon-star-full", 4: "icon-star-void", 5: "icon-star-void" },
  3.5: { 1: "icon-star-full", 2: "icon-star-full", 3: "icon-star-full", 4: "icon-star-half", 5: "icon-star-void" },
  4: { 1: "icon-star-full", 2: "icon-star-full", 3: "icon-star-full", 4: "icon-star-full", 5: "icon-star-void" },
  4.5: { 1: "icon-star-full", 2: "icon-star-full", 3: "icon-star-full", 4: "icon-star-full", 5: "icon-star-half" },
  5: { 1: "icon-star-full", 2: "icon-star-full", 3: "icon-star-full", 4: "icon-star-full", 5: "icon-star-full" }
}


const ProductCard = ({ productID, title, image, stars, category, price, brand, description }: any) => {

  const boxStars = starsValidator[stars]

  return (
    <div className="card" style={{ width: '100%', border: '2px solid #e7eaf3;' }}>

      <Link to="/product-details" style={{ background: '#F8F8F8' }}>
        <img src={image} className="card-img-top" alt="..." />
      </Link>
      <div className="card-body p-0">
        <div className="p-4">
          <h5 className="card-title">{title}</h5>

          <div className="d-flex justify-content-between">
            <div className="d-flex">
              {/* Stars Start */}
              <div className="box-icons">
                <span className={`stars ${boxStars[1]}`}></span>
                <span className={`stars ${boxStars[2]}`}></span>
                <span className={`stars ${boxStars[3]}`}></span>
                <span className={`stars ${boxStars[4]}`}></span>
                <span className={`stars ${boxStars[5]}`}></span>
              </div>
              {/* Stars End */}


              <span style={{ marginLeft: "10px" }}>
                {stars}
              </span>
            </div>

            <div>
              <span className="icon-heart-void" style={{ fontSize: "22px" }}></span>
            </div>
          </div>

          <div className="mt-2">
            <span className="badge bg-danger category">
              {category}
            </span>
          </div>

          <p className="card-text pt-2">
            {description}
          </p>
        </div>
        <div className="card-footer d-flex justify-content-between align-items-center">
          <div className="">
            <span style={{ marginLeft: '5px' }}>{brand}</span>
          </div>

          <div className="price">

            <button type="button" className="btn btn-outline-dark">
              <span className="icon-cart" style={{fontSize: '20px'}}></span>
              <span className="price" style={{ marginLeft: '8px' }}>{`$${price} USD`} </span>
            </button>

          </div>
        </div>

      </div>
    </div>
  )
}

export default ProductCard

