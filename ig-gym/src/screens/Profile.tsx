import { useState } from 'react'
import {Alert, Platform}from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import * as FileSystem from 'expo-file-system';

import { ScreenHeader } from '@components/ScreenHeader'
import { UserPhoto } from '@components/UserPhoto'
import {
  Center,
  ScrollView,
  VStack,
  Skeleton,
  Text,
  Heading,
  useToast
} from 'native-base'
import { TouchableOpacity } from 'react-native'
import { Input } from '@components/Input'
import { Button } from '@components/Button'

export function Profile() {
  const [photoIsLoading, setPhotoIsLoading] = useState(false)
  const [userPhoto, setUserPhoto] = useState(
    'https://github.com/DilanLopezN.png'
  )

  const toast = useToast()

  async function handlePickUserPhoto() {
    setPhotoIsLoading(true)

    try {
      const { canceled, assets } = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        aspect: [4, 4],
        allowsEditing: true
      })

      if (canceled) {
        return
      } 

        const photoInfo = await FileSystem.getInfoAsync(assets[0].uri)

        if(Platform.OS === 'android' && photoInfo.exists && (photoInfo.size  / 1024 / 1024 > 5) ) {
          return toast.show({ title: 'Foto excede 5mb escolha outra por favor', placement: 'top', bgColor: 'red.500'})
        }


        if(Platform.OS === 'ios' && photoInfo.exists && (photoInfo.size  / 1024 / 1024 > 8) ) {
          return toast.show({ title: 'Foto excede 5mb escolha outra por favor', placement: 'top', bgColor: 'red.500'})
        }

          setUserPhoto(assets[0].uri)
    
    } catch (error) {
      console.log(error)
    } finally {
      setPhotoIsLoading(false)
    }
  }

  const PHOTO_SIZE = 33
  return (
    <VStack flex={1}>
      <ScreenHeader title="Perfil" />
      <ScrollView contentContainerStyle={{ paddingBottom: 36 }}>
        <Center mt={6} px={10}>
          {photoIsLoading ? (
            <Skeleton
              w={PHOTO_SIZE}
              h={PHOTO_SIZE}
              rounded="full"
              startColor="gray.500"
              endColor="gray.400"
            />
          ) : (
            <UserPhoto
              source={{ uri: userPhoto }}
              alt="Foto do usuário"
              size={PHOTO_SIZE}
            />
          )}

          <TouchableOpacity onPress={handlePickUserPhoto}>
            <Text
              color="green.500"
              fontWeight="bold"
              fontSize="md"
              mb={8}
              mt={12}
            >
              Alterar foto
            </Text>
          </TouchableOpacity>

          <Input placeholder="Nome" bg="gray.600" />

          <Input placeholder="E-mail" bg="gray.600" isDisabled />
        </Center>

        <VStack px={10} mt={12} mb={8}>
          <Heading   fontFamily="heading" color="gray.200" fontSize="md" mb={2}>
            Alterar senha
          </Heading>

          <Input placeholder="Senha antiga" bg="gray.600" secureTextEntry />

          <Input placeholder="Nova senha" bg="gray.600" secureTextEntry />

          <Input
            placeholder="Confirme nova senha"
            bg="gray.600"
            secureTextEntry
          />

          <Button title="Atualizar" mt={4} />
        </VStack>
      </ScrollView>
    </VStack>
  )
}
