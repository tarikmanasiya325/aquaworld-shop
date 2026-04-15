import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addItem, removeItem } from '../redux/slices/cartSlice.js';

const CartPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);

  const total = cart.cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleQuantity = (item, delta) => {
    const nextQty = item.quantity + delta;
    if (nextQty < 1 || nextQty > item.countInStock) return;
    dispatch(addItem({ ...item, quantity: nextQty }));
  };

  return (
    <section className="space-y-8">
      <div className="rounded-[32px] bg-white p-8 shadow-[0_40px_120px_rgba(30,136,229,0.08)]">
        <h1 className="text-3xl font-semibold text-slate-900">My Cart</h1>
        <p className="mt-2 text-slate-500">Review your selected aquarium products and continue to checkout.</p>
      </div>

      {cart.cartItems.length === 0 ? (
        <div className="rounded-[32px] bg-white p-8 shadow-[0_40px_120px_rgba(30,136,229,0.08)] text-slate-600">
          <p className="text-lg">Your cart is empty.</p>
          <Link to="/products" className="mt-6 inline-flex rounded-full bg-gradient-to-r from-[#1e88e5] to-[#00bcd4] px-6 py-3 text-sm font-semibold text-white shadow-lg">Browse Products</Link>
        </div>
      ) : (
        <div className="grid gap-8 xl:grid-cols-[1.6fr,0.9fr]">
          <div className="space-y-6">
            {cart.cartItems.map((item) => (
              <div key={item.product} className="card-surface flex flex-col gap-4 p-6 sm:flex-row sm:items-center">
                <img src={item.image} alt={item.name} className="h-28 w-28 rounded-3xl object-cover" />
                <div className="flex-1 space-y-2">
                  <Link to={`/products/${item.product}`} className="text-xl font-semibold text-slate-900 hover:text-cyan-600">{item.name}</Link>
                  <p className="text-sm text-slate-500 line-clamp-2">₹{item.price.toFixed(0)} each</p>
                  <div className="flex items-center gap-3">
                    <button onClick={() => handleQuantity(item, -1)} className="rounded-full border border-slate-200 bg-white px-3 py-2 text-lg text-slate-700 transition hover:bg-slate-100">-</button>
                    <span className="w-12 text-center text-sm font-semibold text-slate-900">{item.quantity}</span>
                    <button onClick={() => handleQuantity(item, 1)} className="rounded-full border border-slate-200 bg-white px-3 py-2 text-lg text-slate-700 transition hover:bg-slate-100">+</button>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-between gap-3 text-slate-900 sm:items-end">
                  <p className="text-lg font-semibold">₹{(item.price * item.quantity).toFixed(0)}</p>
                  <button onClick={() => dispatch(removeItem(item.product))} className="text-sm font-semibold text-rose-600 transition hover:text-rose-500">Remove</button>
                </div>
              </div>
            ))}
          </div>

          <div className="card-surface space-y-6 rounded-[28px] border border-slate-200 p-6">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-700">Order Summary</p>
              <p className="mt-4 text-3xl font-semibold text-slate-900">Total ₹{total.toFixed(0)}</p>
            </div>
            <div className="space-y-4 rounded-3xl bg-slate-50 p-5">
              <div className="flex items-center justify-between text-sm text-slate-600">
                <span>Estimated shipping</span>
                <span>₹99</span>
              </div>
              <div className="flex items-center justify-between text-sm text-slate-600">
                <span>Tax estimate</span>
                <span>₹0</span>
              </div>
            </div>
            <button onClick={() => navigate('/checkout')} className="btn-primary w-full">Checkout</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default CartPage;
