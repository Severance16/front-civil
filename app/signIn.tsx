import LoginForm from "@/components/login/LoginForm";
import LoginToRegister from "@/components/login/LoginToRegister";
import { Image, StyleSheet, View } from "react-native";

export default function signIn() {
  
  return (
    <View style={styles.logoContainer}>
      <Image
        style={styles.tinyLogo}
        source={require('../assets/images/logo-gris-oscuro.png')}
      />
      <LoginForm />
      <LoginToRegister/>
    </View>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    width: "100%",
    alignItems: "center",
    gap: 20
  },
  tinyLogo: {
    width: 180,
    height: 145,
  },

});


// Colores:
// #EFAD29
// #FFFFFF
// #5B5B5E
// #262829
// #F1C16D
// #034A44