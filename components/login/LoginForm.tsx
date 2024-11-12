import React, { useState } from "react";
import {
  Alert,
  Button,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import useAuth from "@/hooks/useAuth";
import clientAxios from "@/clients/clientAxios";
import { isAxiosError } from "axios";
import { useRouter } from "expo-router";

export default function LoginForm() {
  const { signIn } = useAuth();
  const router = useRouter()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visiblePass, setVisiblePass] = useState(true);

  const login = async () => {
    try {
      const { data } = await clientAxios.post("/auth/login", {
        email,
        password,
      });

      signIn(data)
      router.replace("/(app)")
    } catch (error) {
      if (isAxiosError(error) && error.response) {
        Alert.alert(error.response.data.error);
      }
    }
  };
  const changeVisibilityPass = () => {
    setVisiblePass(!visiblePass);
  };
  return (
    <>
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <MaterialCommunityIcons
            name="account-outline"
            size={20}
            color="#EFAD29"
          />
          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputContainer}>
          <MaterialCommunityIcons
            name="lock-outline"
            size={20}
            color="#EFAD29"
          />
          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            placeholder="Contraseña"
            keyboardType="default"
            secureTextEntry={visiblePass}
            autoCapitalize="none"
          />
          <TouchableOpacity onPress={changeVisibilityPass}>
            {visiblePass ? (
              <MaterialCommunityIcons
                name="eye-outline"
                size={20}
                color="#EFAD29"
              />
            ) : (
              <MaterialCommunityIcons
                name="eye-off-outline"
                size={20}
                color="#EFAD29"
              />
            )}
          </TouchableOpacity>
        </View>
      </View>

      <Button
        title="Iniciar sesión"
        onPress={login}
        accessibilityLabel="Iniciar sesión"
        color={"#EFAD29"}
      />
    </>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    width: 200,
    margin: 10,
  },
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 2,
    borderBottomWidth: 0.3,
    borderColor: "#5B5B5E",
  },
  input: {
    flex: 1,
    width: 150,
    margin: 0,
    paddingHorizontal: 8,
    paddingVertical: 6,
    color: "#262829",
  },
});