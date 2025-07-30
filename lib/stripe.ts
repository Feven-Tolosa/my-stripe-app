import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-11-15', // or the latest API version
})

export default stripe

// 3. Frontend (Components and Pages):
// Load Stripe.js: In your main layout or a specific payment page, load Stripe.js using loadStripe from @stripe/stripe-js to initialize the Stripe client.

//     import { loadStripe } from '@stripe/stripe-js';
// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);
