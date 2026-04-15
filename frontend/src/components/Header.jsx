import { Link, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/slices/authSlice.js';

const Header = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const cart = useSelector((state) => state.cart);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/90 shadow-sm backdrop-blur-sm">
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="text-xl font-semibold tracking-tight text-slate-900">Aquarium Store</Link>
        <nav className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
          <NavLink to="/" className={({ isActive }) => `transition hover:text-cyan-600 ${isActive ? 'text-cyan-700 font-semibold' : ''}`}>Home</NavLink>
          <NavLink to="/products" className={({ isActive }) => `transition hover:text-cyan-600 ${isActive ? 'text-cyan-700 font-semibold' : ''}`}>Shop</NavLink>
          <NavLink to="/categories" className={({ isActive }) => `transition hover:text-cyan-600 ${isActive ? 'text-cyan-700 font-semibold' : ''}`}>Categories</NavLink>
          <NavLink to="/cart" className={({ isActive }) => `transition hover:text-cyan-600 ${isActive ? 'text-cyan-700 font-semibold' : ''}`}>Cart ({cart.cartItems.length})</NavLink>
        </nav>
        <div className="flex items-center gap-3">
          <Link to="/cart" className="inline-flex items-center gap-2 rounded-full bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700 transition hover:bg-cyan-100">
            <span>🛒</span>
            <span>{cart.cartItems.length} item{cart.cartItems.length === 1 ? '' : 's'}</span>
          </Link>
          {auth.userInfo ? (
            <div className="flex items-center gap-3">
              <Link to="/dashboard" className="text-sm font-medium text-slate-700 transition hover:text-cyan-600">{auth.userInfo.name}</Link>
              <button onClick={handleLogout} className="rounded-full bg-gradient-to-r from-[#1e88e5] to-[#00bcd4] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-cyan-200/40">Logout</button>
            </div>
          ) : (
            <Link to="/login" className="rounded-full bg-gradient-to-r from-[#1e88e5] to-[#00bcd4] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-cyan-200/40">Login</Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
