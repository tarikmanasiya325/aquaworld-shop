import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { registerUser } from '../redux/slices/authSlice.js';
import Message from '../components/Message.jsx';

const RegisterPage = () => {
  const [name, setName] = useState('');
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
    dispatch(registerUser({ name, email, password }));
  };

  return (
    <section className="mx-auto max-w-md space-y-6 rounded-[32px] bg-white p-8 shadow-[0_40px_120px_rgba(30,136,229,0.08)]">
      <div className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-700">Create your account</p>
        <h1 className="text-3xl font-semibold text-slate-900">Register for Aquarium Store</h1>
      </div>
      {auth.error && <Message type="error">{auth.error}</Message>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block">
          <span className="text-sm font-medium text-slate-700">Name</span>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 shadow-sm focus:border-cyan-300 focus:ring-2 focus:ring-cyan-100" />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-slate-700">Email</span>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 shadow-sm focus:border-cyan-300 focus:ring-2 focus:ring-cyan-100" />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-slate-700">Password</span>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 shadow-sm focus:border-cyan-300 focus:ring-2 focus:ring-cyan-100" />
        </label>
        <button type="submit" className="btn-primary w-full py-3">Register</button>
      </form>
      <p className="text-sm text-slate-500">Already have an account? <Link to="/login" className="font-semibold text-cyan-700">Login</Link>.</p>
    </section>
  );
};

export default RegisterPage;
