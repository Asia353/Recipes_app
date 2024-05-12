import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { supabase } from "../api/supabaseClient";
import { Session } from "@supabase/supabase-js";

type AuthContextType = { session: Session | null; isLoading: boolean } | null;

const AuthContext = createContext<AuthContextType>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [isSessionLoading, setSessionLoading] = useState(true);

  useEffect(() => {
    const registerSession = async () => {
      try {
        const payload = await supabase.auth.getSession();
        if (payload.data.session) setSession(payload.data.session);

        supabase.auth.onAuthStateChange((_, session) => {
          setSession(session);
        });
      } catch (error) {
        console.error(error);
      } finally {
        setSessionLoading(false);
      }
    };
    registerSession();
  }, []);

  return (
    <AuthContext.Provider value={{ session, isLoading: isSessionLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return authContext;
};
