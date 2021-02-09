import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'wouter'

const PromotionCard = () => {
  const [promotion, setPromotion] = useState({})
  const [progress, setProgress] = useState(0) 

  useEffect(() => {
    try {
      const action = async () => {

        const response = await axios.get('http://localhost:3004/oferts/1')
        // console.log(response.data)
        setPromotion(response.data)
      }

      action()

    } catch (error) {
      console.log(error)
    }
  }, [])

  useEffect(() => {
    const operation = (promotion.already_sold * 100) / promotion.initial_amount
    
    setProgress(parseInt(operation))
    console.log(progress)
  }, [promotion])


  return (
    <div className="col-md-auto mb-6 mb-md-0">
      <div className="p-3 border border-width-2 border-primary borders-radius-20 bg-white min-width-370">
        <div className="d-flex justify-content-between align-items-center m-1 ml-2">
          <h3 className="font-size-22 mb-0 font-weight-normal text-lh-28 max-width-120">Oferta especial</h3>
          <div className="d-flex align-items-center flex-column justify-content-center bg-primary rounded-pill height-75 width-75 text-lh-1">
            <span className="font-size-12">Descuento</span>

            <div className="font-size-20 font-weight-bold">
              {`${promotion.discount}%`}
            </div>
          </div>
        </div>
        <div className="mb-4">

          <Link href="/">
            <a className="d-block text-center">
              <img className="img-fluid" src={promotion.image} alt="Image Description" />
            </a>
          </Link>

        </div>

        <h5 className="mb-2 font-size-14 text-center mx-auto max-width-180 text-lh-18"><a href="../shop/single-product-fullwidth.html" className="text-blue font-weight-bold">
          {promotion.title}
        </a></h5>
        <div className="d-flex align-items-center justify-content-center mb-3">
          <del className="font-size-18 mr-2 text-gray-2">{`$${promotion.price}`}</del>
          <ins className="font-size-30 text-red text-decoration-none">{`$${promotion.price_ofert}`}</ins>
        </div>
        <div className="mb-3 mx-2">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <span>Disponible: <strong>{promotion.in_stock}</strong></span>
            <span>Vendidos: <strong>{promotion.already_sold}</strong></span>
          </div>

          <div class="progress" style={{height: '1.2rem', fontSize: '14px'}}>
            <div class="progress-bar bg-primary" role="progressbar" style={{width: `${progress}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
              <strong>{`${progress}%`}</strong>
            </div>
          </div>

        </div>
        <div className="mb-2">
          <h6 className="font-size-15 text-gray-2 text-center mb-3">La oferta termina en:</h6>
          <div className="js-countdown d-flex justify-content-center" data-end-date="2020/11/30" data-hours-format="%H" data-minutes-format="%M" data-seconds-format="%S">
            <div className="text-lh-1">
              <div className="text-gray-2 font-size-30 bg-gray-4 py-2 px-2 rounded-sm mb-2 text-center">
                <span className="js-cd-hours">00</span>
              </div>
              <div className="text-gray-2 font-size-12 text-center">HORAS</div>
            </div>

            <div className="mx-1 pt-1 text-gray-2 font-size-24">:</div>

            <div className="text-lh-1">
              <div className="text-gray-2 font-size-30 bg-gray-4 py-2 px-2 rounded-sm mb-2 text-center">
                <span className="js-cd-minutes">00</span>
              </div>
              <div className="text-gray-2 font-size-12 text-center">MINUTOS</div>
            </div>

            <div className="mx-1 pt-1 text-gray-2 font-size-24">:</div>
            <div className="text-lh-1">
              <div className="text-gray-2 font-size-30 bg-gray-4 py-2 px-2 rounded-sm mb-2 text-center">
                <span className="js-cd-seconds">00</span>
              </div>
              <div className="text-gray-2 font-size-12 text-center">SEGUNDOS</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PromotionCard
