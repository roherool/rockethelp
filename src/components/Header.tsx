import { 
  Box,
  Heading, 
  HStack, 
  IconButton, 
  StyledProps, 
  useTheme 
} from 'native-base';
import { CaretLeft } from 'phosphor-react-native';
import { useNavigation } from '@react-navigation/native';

type Props = StyledProps & {
  title: string;
}

export function Header({ title, ...rest}: Props) {
  const { colors } = useTheme();
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <HStack
      alignItems="center"
      bg="gray.600"
      justifyContent="space-between"
      pb={6}
      pt={12}
      w="full"
      {...rest}
    >
        <IconButton
          icon={<CaretLeft color={colors.gray[200]} size={24} />} 
          onPress={handleGoBack}
        />

        <Heading 
          color="gray.100"
          flex={1}
          ml={-12}
          fontSize="lg"
          textAlign="center"
        >
          {title}
        </Heading>
    </HStack>
  );
}