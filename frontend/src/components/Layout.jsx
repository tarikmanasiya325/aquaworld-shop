import Header from './Header.jsx';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <main className="container mx-auto px-4 py-10 sm:px-6 lg:px-8">{children}</main>
      <footer className="border-t border-slate-200 bg-white py-8 text-center text-sm text-slate-500">
        <p>© 2026 Aquarium Store. Built with React, Node, and MongoDB.</p>
      </footer>
    </div>
  );
};

export default Layout;
