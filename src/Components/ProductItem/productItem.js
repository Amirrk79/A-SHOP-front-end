import './style.css'
import { Link } from 'react-router-dom'

function Product({ product }) {
  return (
    <div class='product'>
      <div>
        <img class='img' src={product.image} alt='product' />
      </div>
      <div class='info'>
        <div class='title'>{product.title}</div>
        <div class='price'>${product.price}</div>
      </div>
      <Link
        to={{
          pathname: `products/${product.id}`,
          state: { id: product.id },
        }}
        class='shop-now'
      >
        SHOP NOW
      </Link>
    </div>
  )
}

export default Product
