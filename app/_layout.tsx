import { AuthProvider } from "@/context/authProvider";
import { Slot } from "expo-router";
import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";

export default function RootLayout() {
  return (
    <AuthProvider>
        <SafeAreaView style={styles.conatiner}>
          <ImageBackground
            source={require("../assets/images/fondo-2.jpg")}
            style={styles.background}
          >
            <Slot />
          </ImageBackground>

        </SafeAreaView>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: "contain",
    justifyContent: "center",
    alignItems: "center",
  },
});
