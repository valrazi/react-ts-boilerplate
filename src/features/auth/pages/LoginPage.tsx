import { useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@components/ui/Button';
import Card from '@components/ui/Card';
import Input from '@components/ui/Input';
import { authService } from '@features/auth/services/auth.service';
import { LoginSchema } from '@features/auth/schemas/login.schema';
import { useAuthStore } from '@features/auth/store/useAuthStore';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string>('');
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const parsed = LoginSchema.safeParse({ email, password });
    if (!parsed.success) {
      setError(parsed.error.errors[0]?.message ?? 'Invalid credentials');
      return;
    }

    const session = await authService.login(parsed.data);
    login(session);
    navigate('/dashboard');
  };

  return (
    <Card>
      <h1 className="mb-4 text-2xl font-semibold">Login</h1>
      <form className="space-y-3" onSubmit={handleSubmit}>
        <Input label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={error}
        />
        <Button type="submit" className="w-full">
          Sign in
        </Button>
      </form>
    </Card>
  );
}
