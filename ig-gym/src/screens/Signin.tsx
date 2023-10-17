import { VStack, Image, Text, Center, Heading, ScrollView } from 'native-base'
import { useNavigation }from '@react-navigation/native'
import {AuthNavigatorRoutesProps}from '@routes/auth.routes'
import LogoSvg from '@assets/logo.svg'
import BackgroundImg from '@assets/background.png'
import { Input } from '@components/Input'
import { Button } from '@components/Button'

export function Signin() {

  const navigation = useNavigation<AuthNavigatorRoutesProps>()

  function handleNewAccount () {
    navigation.navigate('signUp')
  }


  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}
    showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} px={10} pb={16}>
        <Image
          source={BackgroundImg}
          defaultSource={BackgroundImg}
          alt="Pessoas treinando"
          resizeMode="contain"
          position="absolute"
        />

        <Center my={24}>
          <LogoSvg />

          <Text color="gray.100" fontSize="sm">
            Treine sua mente e seu corpo
          </Text>
        </Center>

        <Center>
          <Heading fontSize="xl" fontFamily="heading" mb={6} color="gray.100">
            Acesse sua conta
          </Heading>
        </Center>

        <Input
          keyboardType="email-address"
          autoCapitalize="none"
          placeholder="E-mail"
        />
        <Input secureTextEntry placeholder="Senha" />

        <Button title="Acessar" />

        <Center mt={24}>
          <Text color="gray.100" fontSize="md" mb={3} fontFamily="body">
            Ainda não em acesso?
          </Text>

          <Button title="Criar conta" variant="outline" 
          onPress={handleNewAccount}
          />
        </Center>
      </VStack>
    </ScrollView>
  )
}
