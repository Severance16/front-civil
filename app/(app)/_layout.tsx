import useAuth from '@/hooks/useAuth'
import { Redirect, Stack } from 'expo-router'
import React from 'react'
import { Text } from 'react-native'

export default function AppLayout() {
  const { userToken, loading } = useAuth()

  if (loading) {
    return <Text>Cargando...</Text>
  }

  if (!userToken) {
    return <Redirect href={"/signIn"} />
  }

  return <Stack />
}
