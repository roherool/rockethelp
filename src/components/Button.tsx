import { Button as ButtonBase, IButtonProps, Heading } from 'native-base';

interface Props extends IButtonProps {
  title: string;
}

export function Button({ title, ...rest}: Props) {
  return (
    <ButtonBase
      bg="green.700"
      fontSize="sm"
      h={14}
      rounded="sm"
      _pressed={{ bg: "green.500"}}
      {...rest}
    >
      <Heading color="white" fontSize="sm">
        {title}
      </Heading>
    </ButtonBase>
  );
}