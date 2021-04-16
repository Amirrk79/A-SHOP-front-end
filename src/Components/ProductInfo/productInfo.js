import Layout from '../Layout/layout'
import { useLocation } from 'react-router-dom'
import loadProduct from '../../Redux/actions/loadProduct'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'reactstrap'
import { useState } from 'react'
import './styles.css'

const axios = require('axios').default

function ProductInfo() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  const { state } = useLocation()
  const productUrl = `https://fakestoreapi.com/products/${state.id}`
  const product = useSelector((state) => state.product)
  useEffect(() => {
    axios
      .get(productUrl)
      .then(function (response) {
        dispatch(loadProduct(response.data))
        setLoading(false)
      })
      .catch(function (error) {
        setLoading(true)
        // handle error
      })
      .then(function () {
        // always executed
      })
  }, [])
  return (
    <div>
      <Layout>
        {loading ? (
          <div class='loading-div'>
            <div class='loading'></div>
          </div>
        ) : (
          <div class='product-info'>
            <Row noGutters>
              <Col
                xl={{ size: '3', offset: '2' }}
                lg={{ size: '3', offset: '2' }}
                md={{ size: '3', offset: '1' }}
                sm={{ size: '6', offset: '3' }}
              >
                <img class='img-product' src={product.image} alt='img' />
              </Col>
              <Col
                xl={{ size: '3', offset: '2' }}
                lg={{ size: '3', offset: '2' }}
                md={{ size: '3', offset: '1' }}
                sm={{ size: '6', offset: '3' }}
              >
                <div class='information'>
                  <div class='product-info-title'>{product.title}</div>
                  <div class='product-info-informations'>
                    {product.description}
                  </div>
                  <div class='price'>${product.price}</div>
                  <button class='add-to-cart-btn'>Add to Cart</button>
                </div>
              </Col>
            </Row>
          </div>
        )}
      </Layout>
    </div>
  )
}

export default ProductInfo
