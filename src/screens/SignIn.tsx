import { VStack, Heading, Icon, useTheme } from 'native-base'
import { Envelope } from 'phosphor-react-native'

import Logo from '../assets/logo_primary.svg'
import { Input } from '../components/Input'

export function SignIn() {
  const { colors } = useTheme();
  return (
    <VStack flex={1} alignItems="center" bg="gray.600" px={8} pt={24}>
      <Logo />

      <Heading color={'gray.100'} fontSize="xl" mb={6} mt={20}>
        Acesse sua conta
      </Heading>

      <Input 
        placeholder="E-mail" 
        mb={4}
        InputLeftElement={<Icon as={<Envelope color={colors.gray[300]} />} />}
      />
      <Input placeholder="Senha" />

    </VStack>
  )
}
