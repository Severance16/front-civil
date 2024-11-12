import RegisterForm from '@/components/register/RegisterForm'
import RegisterToLogin from '@/components/register/RegisterToLogin'
import React from 'react'
import { Text, View } from 'react-native'

export default function SignUp() {
  return (
    <View>
        <RegisterForm/>
        <RegisterToLogin />
    </View>
  )
}
