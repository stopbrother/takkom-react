import { supabase } from "../supabaseClient";

export const signInWithGoogle = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${import.meta.env.VITE_PUBLIC_BASE_URL}/auth/callback`
    }
  });

  if (error) console.error(error);

  return data;
};

export const signOut = async () => {
  await supabase.auth.signOut();
};
