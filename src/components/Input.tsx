import { Input as InputBase, IInputProps } from 'native-base';

export function Input({...rest}: IInputProps) {
  return (
    <InputBase 
      bg="gray.700"
      h={14}
      size="md"
      borderWidth={0}
      fontSize="md"
      fontFamily="body"
      color="white"
      placeholderTextColor="gray.300"
      _focus={{ 
        bg: "gray.700",
        borderColor: "green.500", 
        borderWidth: 1 
      }}
      {...rest}
    />
  );
}