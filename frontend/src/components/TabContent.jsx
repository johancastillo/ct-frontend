import axios from "axios"
import { useEffect, useState } from "react"
import ProductCard from "./ProductCard"

const TabContent = () => {
  const iterations = [1, 2, 3, 4]
  const [masVendidos, setMasVendidos] = useState([])
  
  useEffect(() => {
    axios.get('http://172.20.43.106:8085/api/anuncios/masvendidos?page=1&qty=8')
    .then(
      response => setMasVendidos(response.data)
    )
    .catch(
      err => console.log(err)
    )
  }, [])

  return (
    <div className="tab-content" id="pills-tabContent">
      <div className="tab-pane fade pt-2 show active" id="pills-one-example1" role="tabpanel" aria-labelledby="pills-one-example1-tab">
        <ul className="row list-unstyled products-group no-gutters">

          {
            iterations.map(
              product => {
                return (
                  <li className="col-6 col-md-3 product-item px-2 pb-3">
                    <ProductCard
                      title="3 pack Ron Añejo Cacique"
                      image="https://d13lnhwm7sh4hi.cloudfront.net/wp-content/uploads/2021/01/20131358/scaciquerondeoro1000x1000-1-300x300.png"
                      brand="Cocacola"
                      stars={4}
                      category="Licores"
                      price={23}
                      footer={false}
                    />
                  </li>
                )
              }
            )
          }

        </ul>

      </div>

      <div className="tab-pane fade pt-2" id="pills-two-example1" role="tabpanel" aria-labelledby="pills-two-example1-tab">

        <ul className="row list-unstyled products-group no-gutters">

        {
            masVendidos.map(
              product => {
                return (
                  <li className="col-6 col-md-3 product-item px-2 pb-3">
                    <ProductCard
                      title={product.title}
                      image={product.image}
                      brand={product.brand}
                      stars={2}
                      category={product.category}
                      price={product.price}
                      footer={false}
                    />
                  </li>
                )
              }
            )
          }

        </ul>
      </div>

      <div className="tab-pane fade pt-2" id="pills-three-example1" role="tabpanel" aria-labelledby="pills-three-example1-tab">

        <ul className="row list-unstyled products-group no-gutters">

          <li className="col-6 col-wd-3 col-md-4 product-item">
            <h1>Item 3-1</h1>
          </li>

          <li className="col-6 col-wd-3 col-md-4 product-item">
            <h1>Item 3-2</h1>
          </li>

          <li className="col-6 col-wd-3 col-md-4 product-item remove-divider-xl">
            <h1>Item 3-3</h1>
          </li>

          <li className="col-6 col-wd-3 col-md-4 product-item remove-divider-wd">
            <h1>Item 3-4</h1>
          </li>

          <li className="col-6 col-wd-3 col-md-4 product-item">
            <h1>Item 3-5</h1>
          </li>

          <li className="col-6 col-wd-3 col-md-4 product-item remove-divider-xl">
            <h1>item 3-6</h1>
          </li>

          <li className="col-6 col-wd-3 col-md-4 product-item d-xl-none d-wd-block remove-divider-xl">
            <h1>Item 3-7</h1>
          </li>

          <li className="col-6 col-wd-3 col-md-4 product-item d-xl-none d-wd-block remove-divider-wd">
            <h1>Item 3-8</h1>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default TabContent
