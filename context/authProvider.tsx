import { router } from "expo-router";
import { createContext, ReactNode, useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";

export interface AuthContextProps {
  userToken: string | null;
  loading: boolean;
  signIn: (token: string) => Promise<void>;
  signOut: () => Promise<void>;
}
const AuthContext = createContext<AuthContextProps | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [userToken, setUserToken] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Cargar el token almacenado al iniciar la aplicación
    const loadToken = async () => {
      const token = await SecureStore.getItemAsync("userToken");
      setUserToken(token);
      setLoading(false);
    };

    loadToken();
  }, []);

  const signIn = async (token: string) => {
    await SecureStore.setItemAsync("userToken", token);
    setUserToken(token);
  };

  const signOut = async () => {
    await SecureStore.deleteItemAsync("userToken");
    setUserToken(null);
  };

  return (
    <AuthContext.Provider value={{ userToken, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext