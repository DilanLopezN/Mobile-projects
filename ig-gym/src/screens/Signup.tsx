import { VStack, Image, Text, Center, Heading, ScrollView } from 'native-base'
import { useNavigation } from '@react-navigation/native'
import { useForm, Controller } from 'react-hook-form'
import { AuthNavigatorRoutesProps } from '@routes/auth.routes'
import LogoSvg from '@assets/logo.svg'
import BackgroundImg from '@assets/background.png'
import { Input } from '@components/Input'
import { Button } from '@components/Button'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"


type FormDataProps = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string
}

const SignUpSchema = yup.object({
  name: yup.string().required('Informe o nome'),
  email: yup.string().required('Informe o e-mail').email('E-mail inválido'),
  password: yup.string().required('Informe a senha').min(6, 'Deve possuir ao menos 6 digitos'),
  confirmPassword: yup.string().required('Confirme a senha').oneOf([yup.ref('password'), ''], 'A senha deve ser a mesma')
 
})

export function Signup() {
  const { control, handleSubmit, formState: {errors} } = useForm<FormDataProps>({
    resolver: yupResolver(SignUpSchema)
  })

  const navigation = useNavigation<AuthNavigatorRoutesProps>()


  function handleSignUp({name,email,password}: FormDataProps) {

  }


  function handleGoBack() {
    navigation.goBack()
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
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
            Crie sua Conta
          </Heading>
        </Center>

        <Controller
  
          control={control}
          name="name"
          render={({field: {onChange}}) => <Input 
          errorMessage={errors.name?.message}
          placeholder="Nome" onChangeText={onChange} />}
        />

          <Controller
    
          control={control}
          name="email"
          render={({field: {onChange}}) => (   <Input
            keyboardType="email-address"
            autoCapitalize="none"
            placeholder="E-mail"
            errorMessage={errors.email?.message}
            onChangeText={onChange}
          />)}
        />


<Controller
          control={control}
          name="password"
          render={({field: {onChange}}) => (   <Input
            secureTextEntry
            placeholder="Senha"
            onChangeText={onChange}
            errorMessage={errors.password?.message}
            onSubmitEditing={handleSubmit(handleSignUp)}
            returnKeyType='send'
          />)}
        />
     
      

        <Button onPress={handleSubmit(handleSignUp)} title="Criar e Acessar" />

        <Center mt={24}>
          <Text color="gray.100" fontSize="md" mb={3} fontFamily="body">
            Já possui acesso?
          </Text>

          <Button
            title="Realizar Login"
            variant="outline"
            onPress={handleGoBack}
          />
        </Center>
      </VStack>
    </ScrollView>
  )
}
