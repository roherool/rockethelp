import { useState } from 'react';
import { HStack, IconButton, VStack, useTheme, Text, Heading } from 'native-base';
import { SignOut } from 'phosphor-react-native';

import Logo from '../assets/logo_secondary.svg'
import { Filter } from '../components/Filter';

export function Home() {
  const [statusSelected, setStatusSelected] = useState<'open' | 'closed'>('open')

  const { colors } = useTheme();

  return (
    <VStack flex={1} bg="gray.700" pb={6} >
      <HStack
        alignItems="center"
        bg="gray.600"
        justifyContent="space-between"
        pb={5}
        pt={12}
        px={6}
        w="full"
      >
        <Logo />

        <IconButton icon={<SignOut size={26} color={colors.gray[300]}/>} />
      </HStack>

      <VStack flex={1} px={6}>
        <HStack
          alignItems="center"
          justifyContent="space-between"
          mb={4}
          mt={8}
          w="full"
        >
          <Heading color="gray.100">
            Meus chamados
          </Heading>
          <Text color="gray.200">
            3
          </Text>
        </HStack>

        <HStack space={3} mb={8}>
        <Filter 
          type="open"
          title="em andamento"
          onPress={() => setStatusSelected('open')}
        />

        <Filter 
          type="closed"
          title="finalizados"
          onPress={() => setStatusSelected('closed')}
        />
      </HStack>
      </VStack>
    </VStack>
  );
}