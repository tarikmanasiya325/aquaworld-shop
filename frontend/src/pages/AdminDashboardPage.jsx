import { useState, useEffect } from 'react';
import api from '../services/api.js';
import Loader from '../components/Loader.jsx';
import Message from '../components/Message.jsx';

const AdminDashboardPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const { data } = await api.get('/products');
        setProducts(data);
        setLoading(false);
      } catch (err) {
        setError(err.response?.data?.message || err.message);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <section className="space-y-8">
      <div className="rounded-[32px] bg-white p-8 shadow-[0_40px_120px_rgba(30,136,229,0.08)]">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-slate-900">Admin Dashboard</h1>
            <p className="mt-2 text-slate-500">Manage product listings and review orders with ease.</p>
          </div>
          <button className="btn-primary">New Product</button>
        </div>
      </div>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message type="error">{error}</Message>
      ) : (
        <div className="space-y-4">
          {products.map((product) => (
            <div key={product._id} className="card-surface flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-xl font-semibold text-slate-900">{product.name}</h2>
                <p className="mt-2 text-sm text-slate-500">{product.category}</p>
              </div>
              <div className="flex flex-wrap items-center gap-3 text-slate-700">
                <span className="text-lg font-semibold">₹{product.price.toFixed(0)}</span>
                <button className="rounded-full border border-cyan-300 px-4 py-2 text-sm font-semibold text-cyan-700 transition hover:bg-cyan-50">Edit</button>
                <button className="rounded-full border border-rose-300 px-4 py-2 text-sm font-semibold text-rose-600 transition hover:bg-rose-50">Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default AdminDashboardPage;
