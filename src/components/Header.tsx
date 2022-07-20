import { 
  Heading, 
  HStack, 
  IconButton, 
  StyledProps, 
  useTheme 
} from 'native-base';
import { CaretLeft } from 'phosphor-react-native';

type Props = StyledProps & {
  title: string;
}

export function Header({ title, ...rest}: Props) {
  const { colors } = useTheme();

  return (
    <HStack
      alignItems="Center"
      bg="gray.600"
      justifyContent="space-between"
      pb={6}
      pt={12}
      w="full"
      {...rest}
    >
      <IconButton 
        icon={<CaretLeft color={colors.gray[200]} size={24} />} 
      />

      <Heading 
        color="gray.100"
        flex={1}
        fontSize="lg"
        ml={-6}
        textAlign="center"
      >
        {title}
      </Heading>
    </HStack>
  );
}