
const ProductCard = ({image, title}:any) => {
  return (
    <div className="card" style={{ width: '100%' }}>
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">

        <h4 className="card-text">
          {title}
        </h4>

        <div>
          <span className="icon-star-full"></span>
          <span className="icon-star-full"></span>
          <span className="icon-star-full"></span>
          <span className="icon-star-half"></span>
          <span className="icon-star-void"></span>
        </div>
        
      </div>
    </div>
  )
}

export default ProductCard
