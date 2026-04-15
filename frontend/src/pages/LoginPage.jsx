import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { loginUser } from '../redux/slices/authSlice.js';
import Message from '../components/Message.jsx';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (auth.userInfo) {
      navigate('/dashboard');
    }
  }, [auth.userInfo, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };

  return (
    <section className="mx-auto max-w-md space-y-6 rounded-[32px] bg-white p-8 shadow-[0_40px_120px_rgba(30,136,229,0.08)]">
      <div className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-700">Welcome back</p>
        <h1 className="text-3xl font-semibold text-slate-900">Login to your account</h1>
      </div>
      {auth.error && <Message type="error">{auth.error}</Message>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block">
          <span className="text-sm font-medium text-slate-700">Email</span>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 shadow-sm focus:border-cyan-300 focus:ring-2 focus:ring-cyan-100" />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-slate-700">Password</span>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 shadow-sm focus:border-cyan-300 focus:ring-2 focus:ring-cyan-100" />
        </label>
        <button type="submit" className="btn-primary w-full py-3">Login</button>
      </form>
      <p className="text-sm text-slate-500">New customer? <Link to="/register" className="font-semibold text-cyan-700">Create an account</Link>.</p>
    </section>
  );
};

export default LoginPage;
