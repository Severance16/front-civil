import LoginForm from "@/components/LoginForm";
import React from "react";
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function signIn() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.conatiner}>
        <ImageBackground
          source={require("../assets/images/desing.jpg")}
          style={styles.background}
        >
          <LoginForm />
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
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
});
