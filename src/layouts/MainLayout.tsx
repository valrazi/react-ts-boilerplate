import { Link, Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <div className="min-h-screen">
      <header className="bg-slate-900 px-6 py-4 text-white">
        <nav className="flex gap-4">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/products">Products</Link>
        </nav>
      </header>
      <main className="mx-auto max-w-5xl p-6">
        <Outlet />
      </main>
    </div>
  );
}
