import { HStack, Switch, useColorMode } from "@chakra-ui/react";

const ColorSwitchMode = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        colorScheme="red"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
    </HStack>
  );
};

export default ColorSwitchMode;
