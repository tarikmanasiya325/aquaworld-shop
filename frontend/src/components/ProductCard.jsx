import { Link } from 'react-router-dom';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <article className="card-surface overflow-hidden bg-white p-0">
      <Link to={`/products/${product._id}`} className="block overflow-hidden rounded-[28px]">
        <img src={product.image} alt={product.name} className="h-64 w-full object-cover transition duration-500 hover:scale-105" />
      </Link>
      <div className="space-y-4 p-6">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-slate-900">{product.name}</h3>
          <p className="text-sm text-slate-500 overflow-hidden text-ellipsis">{product.description}</p>
        </div>
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-700">{product.category}</p>
            <p className="mt-1 text-2xl font-semibold text-slate-900">₹{product.price.toFixed(0)}</p>
          </div>
          <button
            onClick={() => onAddToCart?.(product)}
            className="btn-primary text-sm"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
