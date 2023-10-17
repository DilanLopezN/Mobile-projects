import { Text, Pressable, IPressableProps } from "native-base";

type GroupProps = IPressableProps &  {
  name: string
  isActive: boolean
}

export function Group({name,isActive, ...rest} : GroupProps) {
  return (
    <Pressable
    mr={3}
    w={24}
    h={19}
    bg="gray.600"
    rounded="md"
    justifyContent="center"
    alignItems="center"
    justifyItems="center"
    overflow="hidden"
    isPressed={isActive}
    _pressed={{
      borderColor: "gree.300",
      borderWidth: 1
    }}
    {...rest}
    >
      <Text
    color={isActive? "green.500" : "green.200"}
    textTransform="uppercase"
    fontSize="xs"
    fontWeight="bold"
    >
      {name}
    </Text>

    </Pressable>
    
  )
}