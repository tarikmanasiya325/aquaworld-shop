const Message = ({ children, type = 'info' }) => {
  const color = type === 'error' ? 'bg-rose-500 text-white' : 'bg-slate-800 text-slate-100';
  return <div className={`rounded-lg p-4 ${color}`}>{children}</div>;
};

export default Message;
