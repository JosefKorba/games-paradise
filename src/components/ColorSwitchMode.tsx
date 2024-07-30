import { HStack, Switch, useColorMode } from "@chakra-ui/react";
import { MdDarkMode } from "react-icons/md";

const ColorSwitchMode = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        colorScheme="red"
        size='lg'
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <MdDarkMode />
    </HStack>
  );
};

export default ColorSwitchMode;
