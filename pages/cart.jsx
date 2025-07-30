// pages/cart.js
import CheckoutButton from '../components/CheckoutButton'

function CartPage() {
  const cartItems = [{ name: 'Product A', price: 10, quantity: 1 }] // Example cart items
  return (
    <div>
      <h1>Your Cart</h1>
      <CheckoutButton items={cartItems} />
    </div>
  )
}

export default CartPage
