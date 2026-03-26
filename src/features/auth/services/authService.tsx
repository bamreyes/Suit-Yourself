import { supabase } from "@/services/api/client";

export const authService = {
  login: async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;
    return data.user;
  },
  logout: async () => {
    const { error } = await supabase.auth.signOut();

    if (error) throw error;
  },
};
