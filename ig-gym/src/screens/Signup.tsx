import { VStack, Image, Text, Center, Heading, ScrollView } from 'native-base'
import LogoSvg from '@assets/logo.svg'
import BackgroundImg from '@assets/background.png'
import { Input } from '@components/Input'
import { Button } from '@components/Button'

export function Signup() {
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}
    showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} bg="gray.700" px={10} pb={16}>
        <Image
          source={BackgroundImg}
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
            Crie sua Conta
          </Heading>
        </Center>

        
        <Input
          placeholder="Nome"
        />

        <Input
          keyboardType="email-address"
          autoCapitalize="none"
          placeholder="E-mail"
        />
        <Input secureTextEntry placeholder="Senha" />

        <Button title="Criar e Acessar" />

        <Center mt={24}>
          <Text color="gray.100" fontSize="md" mb={3} fontFamily="body">
            Já possui acesso?
          </Text>

          <Button title="Realizar Login" variant="outline" />
        </Center>
      </VStack>
    </ScrollView>
  )
}
