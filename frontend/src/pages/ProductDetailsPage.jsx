import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import api from '../services/api.js';
import Loader from '../components/Loader.jsx';
import Message from '../components/Message.jsx';
import Toast from '../components/Toast.jsx';
import { addItem } from '../redux/slices/cartSlice.js';

const ProductDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [qty, setQty] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [toastMessage, setToastMessage] = useState('');

  useEffect(() => {
    const loadProduct = async () => {
      try {
        setLoading(true);
        const { data } = await api.get(`/products/${id}`);
        setProduct(data);
        setLoading(false);
      } catch (err) {
        setError(err.response?.data?.message || err.message);
        setLoading(false);
      }
    };
    loadProduct();
  }, [id]);

  const increase = () => {
    if (product && qty < product.countInStock) {
      setQty((prev) => prev + 1);
    }
  };

  const decrease = () => {
    if (qty > 1) {
      setQty((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    dispatch(addItem({
      product: product._id,
      name: product.name,
      image: product.image,
      price: product.price,
      countInStock: product.countInStock,
      quantity: qty,
    }));
    setToastMessage(`${product.name} added to cart`);
  };

  const handleBuyNow = () => {
    handleAddToCart();
    navigate('/cart');
  };

  return (
    <section className="space-y-8">
      <Toast message={toastMessage} show={Boolean(toastMessage)} onClose={() => setToastMessage('')} />
      {loading ? (
        <Loader />
      ) : error ? (
        <Message type="error">{error}</Message>
      ) : (
        <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="card-surface overflow-hidden p-0">
            <img src={product.image} alt={product.name} className="h-[520px] w-full object-cover" />
          </div>
          <div className="space-y-6 rounded-[32px] bg-white p-8 shadow-[0_40px_120px_rgba(30,136,229,0.08)]">
            <div className="space-y-4">
              <span className="inline-flex rounded-full bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-700">{product.category}</span>
              <h1 className="text-4xl font-semibold text-slate-900">{product.name}</h1>
              <p className="max-w-2xl text-lg text-slate-600">{product.description}</p>
            </div>
            <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-slate-500">Price</p>
                  <p className="mt-2 text-3xl font-semibold text-slate-900">₹{product.price.toFixed(0)}</p>
                </div>
                <div className="space-y-3">
                  <p className="text-sm text-slate-500">Stock</p>
                  <p className={`text-sm font-semibold ${product.countInStock ? 'text-slate-900' : 'text-rose-500'}`}>
                    {product.countInStock ? `${product.countInStock} available` : 'Out of stock'}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3 rounded-full bg-slate-100 px-4 py-3">
                <button onClick={decrease} className="rounded-full bg-white px-3 py-2 text-xl shadow-sm transition hover:bg-slate-200">-</button>
                <span className="text-xl font-semibold text-slate-900">{qty}</span>
                <button onClick={increase} className="rounded-full bg-white px-3 py-2 text-xl shadow-sm transition hover:bg-slate-200">+</button>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <button onClick={handleAddToCart} className="btn-primary">Add to Cart</button>
                <button onClick={handleBuyNow} className="btn-secondary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductDetailsPage;
