import Card from '@components/ui/Card';
import Button from '@components/ui/Button';
import { useAuthStore } from '@features/auth/store/useAuthStore';

export default function DashboardPage() {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  return (
    <Card>
      <h1 className="mb-2 text-2xl font-semibold">Dashboard</h1>
      <p className="mb-4 text-slate-700">Welcome {user?.name ?? 'Guest'}.</p>
      <Button variant="danger" onClick={logout}>
        Logout
      </Button>
    </Card>
  );
}
