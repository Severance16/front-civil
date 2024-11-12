
import LoginContent from "@/components/login/LoginContent";
import LoginForm from "@/components/login/LoginForm";
import React from "react";
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function signIn() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.conatiner}>
        <ImageBackground
          source={require("../assets/images/fondo-2.jpg")}
          style={styles.background}
        >
          <LoginContent/>
        </ImageBackground>
        
      </SafeAreaView>
    </SafeAreaProvider>
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


// Colores:
// #EFAD29
// #FFFFFF
// #5B5B5E
// #262829
// #F1C16D
// #034A44