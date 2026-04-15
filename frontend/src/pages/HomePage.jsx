import { Link } from 'react-router-dom';

const categories = [
  { name: 'Live Fish', url: '/categories/live-fish', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO0927MLtjCQqUl04e680lbPv-KixhxrgROg&s' },
  { name: 'Live Plants', url: '/categories/live-plants', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFzOKYLiWFRiPAT1kdCxWXF5bVM8rS7qKFpA&s' },
  { name: 'Aquarium Tank', url: '/categories/aquarium-tank', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmeMZVtq3pH1-TSQW09GFJvQqO6UGrpYJxjw&s' },
  { name: 'Filters', url: '/categories/filters', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Y2Bxy9yqjgm9iSNbXorz0sre_NW2p2Qvqw&s'},
  { name: 'Fish Food', url: '/categories/fish-food', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_-w7ujb93EveRDqSD0zctbx-vJAySs1453A&s' },
  { name: 'Accessories', url: '/categories/accessories', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUMPc3nZog_ED7LaOVnPTX0H0GLS83IU5BNA&s' },
];

const HomePage = () => {
  return (
    <div className="space-y-16">
      <section className="overflow-hidden rounded-[32px] bg-white shadow-[0_40px_120px_rgba(30,136,229,0.12)]">
        <div className="relative">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2JpeZ8c6GMTurvTO2O-aLBzi4aDWI_faGPQ&s" alt="Aquarium banner" className="h-[460px] w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-900/20 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-12 lg:px-20">
            <span className="mb-5 inline-flex rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700 backdrop-blur-sm">Premium Aquarium Care</span>
            <h1 className="max-w-3xl text-5xl font-semibold leading-tight text-white sm:text-6xl">Best Aquarium Fish & Accessories</h1>
            <p className="mt-6 max-w-2xl text-lg text-slate-200">Fresh live fish, plants, and premium aquarium essentials delivered with fast service and expert care.</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/products" className="btn-primary">Shop Now</Link>
              <Link to="/categories" className="btn-secondary">Browse Categories</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-700">Explore categories</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900">Find the perfect aquarium collection</h2>
          </div>
          <Link to="/products" className="btn-secondary">View All Products</Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => (
            <Link key={category.name} to={category.url} className="card-surface group overflow-hidden">
              <div className="relative h-64 overflow-hidden rounded-[28px]">
                <img src={category.image} alt={category.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="space-y-2 p-6">
                <h3 className="text-xl font-semibold text-slate-900">{category.name}</h3>
                <p className="text-sm text-slate-500">Fresh selection of products for {category.name.toLowerCase()}.</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
