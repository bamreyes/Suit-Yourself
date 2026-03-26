import { useAuthContext } from "@/context/AuthContext";
import { authService } from "@/features/auth/services/authService";
import { useState } from "react";

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { setUser } = useAuthContext();

  const login = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      const user = await authService.login(email, password);
      setUser(user);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setLoading(true);
    try {
      authService.logout;
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { login, logout, loading, error };
};
