import { Link } from 'react-router-dom';

const categories = [
  { title: 'Live Fish', path: '/categories/live-fish', description: 'Fresh and healthy ornamental fish for your aquarium. Perfect for beginners and experts to create a vibrant underwater world.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO0927MLtjCQqUl04e680lbPv-KixhxrgROg&s' },
  { title: 'Live Plants', path: '/categories/live-plants', description: 'Natural aquatic plants that enhance beauty, oxygen levels, and balance in your aquarium ecosystem.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFzOKYLiWFRiPAT1kdCxWXF5bVM8rS7qKFpA&s' },
  { title: 'Aquarium Tank', path: '/categories/aquarium-tank', description: 'High-quality glass tanks in different sizes and designs to build the perfect home for your aquatic life.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmeMZVtq3pH1-TSQW09GFJvQqO6UGrpYJxjw&s' },
  { title: 'Filters and Pumps', path: '/categories/filters', description: 'Efficient filtration systems to keep your aquarium water clean, clear, and safe for fish health.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Y2Bxy9yqjgm9iSNbXorz0sre_NW2p2Qvqw&s' },
  { title: 'Fish Food', path: '/categories/fish-food', description: 'Nutritious and balanced fish food for all species to ensure healthy growth and bright colors.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_-w7ujb93EveRDqSD0zctbx-vJAySs1453A&s' },
  { title: 'Accessories', path: '/categories/accessories', description: 'Essential aquarium tools and decorations including lights, air pumps, gravel, and ornaments.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUMPc3nZog_ED7LaOVnPTX0H0GLS83IU5BNA&s' },
];

const CategoriesPage = () => {
  return (
    <section className="space-y-8">
      <div className="rounded-[32px] bg-white p-8 shadow-[0_40px_120px_rgba(30,136,229,0.08)]">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-700">Browse categories</p>
        <h1 className="mt-4 text-4xl font-semibold text-slate-900">Shop by aquarium category</h1>
        <p className="mt-3 max-w-2xl text-base text-slate-500">Discover curated products for every aquarium need, from live fish to premium accessories.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {categories.map((category) => (
          <Link key={category.title} to={category.path} className="card-surface overflow-hidden p-0">
            <div className="relative h-64 overflow-hidden">
              <img src={category.image} alt={category.title} className="h-full w-full object-cover transition duration-500 hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h2 className="text-2xl font-semibold">{category.title}</h2>
              </div>
            </div>
            <div className="p-6">
              <p className="text-slate-500">{category.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoriesPage;
