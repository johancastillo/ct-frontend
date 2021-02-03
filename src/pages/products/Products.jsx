import { useState } from 'react'
import ProductCard from '../../components/product-card/ProductCard'
import data from '../../data.json'

const Products = () => {
  const [products, setProducts] = useState(data)

  return (
    <div className="container mt-4">
      <div className="gallery">

        {
          products.map(product => {
            return (
              <ProductCard
                productID={product.id}
                image={product.image}
                title={product.title}
                stars={product.stars}
                brand={product.brand}
                category={product.category}
                description={product.description}
                price={product.price}
              />
            )
          })
        }




      </div>
    </div>
  )
}

export default Products
