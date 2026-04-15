import { useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import api from '../services/api.js';
import Loader from '../components/Loader.jsx';
import Message from '../components/Message.jsx';
import ProductCard from '../components/ProductCard.jsx';
import SkeletonCard from '../components/SkeletonCard.jsx';
import Toast from '../components/Toast.jsx';
import { addItem } from '../redux/slices/cartSlice.js';

const categorySlugMap = {
  'live-fish': 'Live Fish',
  'live-plants': 'Live Plants',
  'aquarium-tank': 'Aquarium Tank',
  filters: 'Filters',
  'fish-food': 'Fish Food',
  accessories: 'Accessories',
};

const ProductPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [keyword, setKeyword] = useState(searchParams.get('keyword') || '');
  const [toastMessage, setToastMessage] = useState('');

  const activeCategory = useMemo(() => category || searchParams.get('category') || '', [category, searchParams]);
  const lookupCategory = categorySlugMap[activeCategory] ?? activeCategory;

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        const query = new URLSearchParams();
        if (keyword) query.set('keyword', keyword);
        if (lookupCategory) query.set('category', lookupCategory);
        const response = await api.get(`/products?${query.toString()}`);
        setProducts(response.data.slice(0, 10));
        setLoading(false);
      } catch (err) {
        const message = err.response?.data?.message || err.message;
        setError(message === 'Network Error'
          ? 'Unable to load products. Please make sure the backend server is running and refresh the page.'
          : message);
        setLoading(false);
      }
    };
    loadProducts();
  }, [keyword, lookupCategory]);

  const handleSearch = (value) => {
    setKeyword(value);
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      if (value) next.set('keyword', value);
      else next.delete('keyword');
      return next;
    });
  };

  const handleCategoryChange = (value) => {
    if (!value) {
      navigate('/products');
      return;
    }
    navigate(`/categories/${value}`);
  };

  const handleAddToCart = (product) => {
    dispatch(addItem({
      product: product._id,
      name: product.name,
      image: product.image,
      price: product.price,
      countInStock: product.countInStock,
      quantity: 1,
    }));
    setToastMessage(`${product.name} added to cart`);
  };

  return (
    <section className="space-y-8">
      <Toast message={toastMessage} show={Boolean(toastMessage)} onClose={() => setToastMessage('')} />

      <div className="rounded-[32px] bg-white p-8 shadow-[0_40px_120px_rgba(30,136,229,0.08)]">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-700">Shop Aquarium</p>
            <h1 className="mt-3 text-4xl font-semibold text-slate-900">Premium aquarium essentials</h1>
            <p className="mt-3 max-w-2xl text-base text-slate-500">Handpicked fish, tanks, food, and accessories for your aquatic lifestyle.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              value={keyword}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search products..."
              className="rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-900 shadow-sm focus:border-cyan-300 focus:ring-2 focus:ring-cyan-100"
            />
            <select
              value={activeCategory}
              onChange={(e) => handleCategoryChange(e.target.value)}
              className="rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-slate-900 shadow-sm focus:border-cyan-300 focus:ring-2 focus:ring-cyan-100"
            >
              <option value="">All Categories</option>
              <option value="fish-food">Fish Food</option>
              <option value="accessories">Accessories</option>
              <option value="live-fish">Live Fish</option>
              <option value="live-plants">Live Plants</option>
              <option value="aquarium-tank">Aquarium Tank</option>
              <option value="filters">Filters</option>
            </select>
          </div>
        </div>
      </div>

      {loading ? (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, idx) => <SkeletonCard key={idx} />)}
        </div>
      ) : error ? (
        <Message type="error">{error}</Message>
      ) : products.length === 0 ? (
        <Message type="info">No products found for this category. Try another category or search term.</Message>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} onAddToCart={handleAddToCart} />
          ))}
        </div>
      )}
    </section>
  );
};

export default ProductPage;
