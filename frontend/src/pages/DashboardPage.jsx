import { useSelector } from 'react-redux';

const DashboardPage = () => {
  const auth = useSelector((state) => state.auth);

  return (
    <section className="space-y-8">
      <div className="rounded-[32px] bg-white p-8 shadow-[0_40px_120px_rgba(30,136,229,0.08)]">
        <h1 className="text-3xl font-semibold text-slate-900">Your Dashboard</h1>
        <p className="mt-2 text-slate-500">Manage your account, orders, and aquarium favorites all in one place.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="card-surface p-8">
          <h2 className="text-xl font-semibold text-slate-900">Account Details</h2>
          <p className="mt-4 text-slate-600">Name: <span className="font-semibold text-slate-900">{auth.userInfo?.name || 'Guest'}</span></p>
          <p className="mt-2 text-slate-600">Email: <span className="font-semibold text-slate-900">{auth.userInfo?.email || 'Not signed in'}</span></p>
          <p className="mt-2 text-slate-600">Status: <span className="font-semibold text-slate-900">{auth.userInfo ? 'Active' : 'Visitor'}</span></p>
        </div>
        <div className="card-surface p-8">
          <h2 className="text-xl font-semibold text-slate-900">Orders & Support</h2>
          <p className="mt-4 text-slate-600">View your past orders and track shipping updates. For help, contact customer support for aquarium care guidance.</p>
          <div className="mt-6 rounded-3xl bg-cyan-50 p-5 text-slate-700">
            <p className="font-semibold text-cyan-800">Need assistance?</p>
            <p className="mt-2 text-sm">Reach out via support or explore product advice in your dashboard.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPage;
