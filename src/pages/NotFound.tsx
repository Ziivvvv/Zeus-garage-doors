import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50">
      <div className="text-center px-4">
        <p className="text-blue-900 font-semibold text-sm uppercase tracking-widest mb-3">404 — Page Not Found</p>
        <h1 className="mb-4 text-5xl font-bold text-slate-900 font-display">Oops.</h1>
        <p className="mb-8 text-lg text-slate-600 max-w-sm mx-auto">
          That page doesn't exist. Let's get your garage door fixed instead.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-blue-900 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
