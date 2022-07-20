import { Box, HStack, Text, useTheme } from 'native-base';

export interface OrderProps {
  id: string;
  patrimony: string;
  when: string;
  status: 'open' | 'closed';
}

type Props = {
  data: OrderProps;
}

export function Order({ data, ...rest}: Props) {
  const { colors } = useTheme();

  const statusColor = data.status === "open" ? colors.secondary[700] : colors.green[300];

  return (
    <HStack
      alignItems="center"
      bg="gray.600"
      justifyContent="space-between"
      mb={4}
      rounded="sm"
      overflow="hidden"
    >
      <Box bg={statusColor} h="full" w={2} />
      <Text 
        color="white" 
        fontSize="md"
        {...rest}
      >
        Patrimônio: {data.patrimony}
      </Text>
    </HStack>
  );
}