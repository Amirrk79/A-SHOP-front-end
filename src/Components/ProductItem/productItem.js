import './style.css'

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
      <div class='shop-now'>SHOP NOW</div>
    </div>
  )
}

export default Product
