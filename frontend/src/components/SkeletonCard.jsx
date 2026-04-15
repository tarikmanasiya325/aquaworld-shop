const SkeletonCard = () => {
  return (
    <div className="animate-pulse rounded-[28px] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/40">
      <div className="mb-5 h-56 rounded-3xl bg-slate-200"></div>
      <div className="h-5 w-3/4 rounded-full bg-slate-200"></div>
      <div className="mt-4 h-4 w-1/2 rounded-full bg-slate-200"></div>
      <div className="mt-6 h-10 w-1/3 rounded-full bg-slate-200"></div>
    </div>
  );
};

export default SkeletonCard;
