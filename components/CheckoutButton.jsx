// components/CheckoutButton.js
import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

function CheckoutButton({ items }) {
  const handleClick = async () => {
    const stripe = await stripePromise
    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ items }),
    })
    const { sessionId } = await response.json()
    await stripe.redirectToCheckout({ sessionId })
  }

  return <button onClick={handleClick}>Proceed to Checkout</button>
}

export default CheckoutButton
