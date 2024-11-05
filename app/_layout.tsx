import { AuthProvider } from "@/context/authProvider";
import { Slot } from "expo-router";

export default function RootLayout() {
  return (
    <AuthProvider>
        <Slot />
    </AuthProvider>
  );
}
