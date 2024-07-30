import { HStack, Image } from "@chakra-ui/react"
import logo from "../assets/images/logo_.png"
import ColorSwitchMode from "./ColorSwitchMode"


const NavBar = () => {
  return (
    <HStack justifyContent="space-between" p={4}>
        <Image src={logo} boxSize="6rem"/>
        <ColorSwitchMode  />
    </HStack>    
  )
}

export default NavBar