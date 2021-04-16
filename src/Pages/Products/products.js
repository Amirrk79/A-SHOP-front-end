import Layout from '../../Components/Layout/layout'
import loadProducts from '../../Redux/actions/loadProducts'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './style.css'
import { Row, Col } from 'reactstrap'
import Product from '../../Components/ProductItem/productItem'

const axios = require('axios').default

function Products() {
  const [loading, setLoading] = useState(true)

  const dispatch = useDispatch()
  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then(function (response) {
        dispatch(loadProducts(response.data))
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

  const products = useSelector((state) => state.products)

  return (
    <div>
      <Layout>
        {loading ? (
          <div class='loading-div'>
            <Row noGutters>
              <div class='loading'></div>
            </Row>
          </div>
        ) : (
          <div class='products'>
            <Row noGutters>
              {products.map((product) => {
                return (
                  <Col xl='4' lg='4' md='6' sm='6' xs='12'>
                    <Product product={product} />
                  </Col>
                )
              })}
            </Row>
          </div>
        )}
      </Layout>
    </div>
  )
}

export default Products
