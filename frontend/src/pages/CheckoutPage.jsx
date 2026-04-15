import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import api from '../services/api.js';
import { clearCart } from '../redux/slices/cartSlice.js';
import Message from '../components/Message.jsx';

const CheckoutPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const auth = useSelector((state) => state.auth);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  const orderTotal = cart.cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleSubmit = async () => {
    if (!auth.userInfo) {
      navigate('/login');
      return;
    }
    try {
      setStatus('loading');
      await api.post('/orders', { orderItems: cart.cartItems, totalPrice: orderTotal });
      dispatch(clearCart());
      setStatus('succeeded');
    } catch (err) {
      setError(err.response?.data?.message || err.message);
      setStatus('failed');
    }
  };

  return (
    <section className="space-y-8">
      <div className="rounded-[32px] bg-white p-8 shadow-[0_40px_120px_rgba(30,136,229,0.08)]">
        <h1 className="text-3xl font-semibold text-slate-900">Checkout</h1>
        <p className="mt-2 text-slate-500">Confirm your order details and complete your purchase securely.</p>
      </div>

      {error && <Message type="error">{error}</Message>}

      <div className="grid gap-8 xl:grid-cols-[1.5fr,0.85fr]">
        <div className="rounded-[32px] bg-white p-8 shadow-[0_40px_120px_rgba(30,136,229,0.08)]">
          <h2 className="text-xl font-semibold text-slate-900">Order Details</h2>
          <div className="mt-6 space-y-4 text-slate-600">
            <div className="rounded-3xl bg-slate-50 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">Customer</p>
              <p className="mt-2 text-lg text-slate-900">{auth.userInfo?.name || 'Guest'}</p>
              <p className="text-sm text-slate-500">{auth.userInfo?.email || 'Please login to complete checkout'}</p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">Shipping</p>
              <p className="mt-2 text-lg text-slate-900">Standard Delivery</p>
              <p className="text-sm text-slate-500">Delivered within 3-5 business days.</p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">Items</p>
              <p className="mt-2 text-sm text-slate-600">{cart.cartItems.length} product(s) in your cart.</p>
            </div>
          </div>
        </div>

        <div className="rounded-[32px] bg-white p-8 shadow-[0_40px_120px_rgba(30,136,229,0.08)]">
          <h2 className="text-xl font-semibold text-slate-900">Summary</h2>
          <div className="mt-6 space-y-4 rounded-3xl bg-slate-50 p-5">
            <div className="flex justify-between text-slate-600">
              <span>Subtotal</span>
              <span>₹{orderTotal.toFixed(0)}</span>
            </div>
            <div className="flex justify-between text-slate-600">
              <span>Shipping</span>
              <span>₹99</span>
            </div>
            <div className="flex justify-between text-slate-900">
              <span className="font-semibold">Total</span>
              <span className="font-semibold">₹{(orderTotal + 99).toFixed(0)}</span>
            </div>
          </div>
          <button onClick={handleSubmit} disabled={cart.cartItems.length === 0 || status === 'loading'} className="btn-primary w-full py-4 disabled:cursor-not-allowed disabled:opacity-60">
            {status === 'loading' ? 'Processing…' : 'Place Order'}
          </button>
          {status === 'succeeded' && <Message>Your order has been placed successfully.</Message>}
        </div>
      </div>
    </section>
  );
};

export default CheckoutPage;
