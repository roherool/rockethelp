import { VStack } from 'native-base';

import { Header } from '../components/Header';
import { Input } from '../components/Input';
import { Button } from '../components/Button';

export function Register() {
  return (
    <VStack flex={1} bg="gray.600" p={6}>
      <Header title="Nova solicitação" />

      <Input 
        mt={4}
        placeholder="Número do patrimônio"
      />

      <Input
        flex={1}
        mt={5}
        multiline
        textAlignVertical="top"
        placeholder='Descrição do problema'
      />

      <Button 
        title='Cadastrar' 
        mt={5}
      />
    </VStack>
  );
}