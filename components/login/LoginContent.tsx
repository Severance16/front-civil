import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import LoginForm from './LoginForm';

export default function LoginContent() {
  return (
    <>
        <View style={styles.logoContainer}>
            <Image
                style={styles.tinyLogo}
                source={require('../../assets/images/logo-gris-oscuro.png')}
            />
            <LoginForm />
        </View>
    </>
  )
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
    }
  });
