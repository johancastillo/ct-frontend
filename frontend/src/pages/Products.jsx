import { useState, useEffect } from 'react'
import ProductCard from '../components/ProductCard'
import data from '../data.json'

import axios from 'axios'

const Products = () => {
  const [products, setProducts] = useState(data)

  useEffect(() => {
    const url = "http://172.20.43.106:8085/api/anuncios"
    
    axios.get(url)
    .then(
      response => setProducts(response.data)
    )
    .catch(
      err => console.log(err)
    )
  }, [])

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
