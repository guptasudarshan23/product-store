import { Button, Container, Flex, HStack, useColorMode } from "@chakra-ui/react"
import { Link } from "react-router-dom";
import { Text } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
import { PlusSquareIcon } from "@chakra-ui/icons";
import { MdOutlineDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Container maxW={"1140"} px={4} >
            <Flex
                h={16}
                alignItems={"center"}
                justifyContent={"space-between"}
                flexDir={{
                    base: "column",
                    sm: "row",
                }}
            >
                <Link to={"/"}>
                    <HStack spacing={2}>
                        <Text
                            fontSize={{ base: "22", sm: "28" }}
                            fontWeight={"bold"}
                            textTransform={"uppercase"}
                            bgGradient={"linear(to-r, cyan.400, blue.500)"}
                            bgClip={"text"}
                        >
                            Product Store
                        </Text>
                        <FaShoppingCart size={22} color="blue" />
                    </HStack>
                </Link>


                <HStack spacing={2} alignItems={"center"}>
                    <Link to={"/create"}>
                        <Button>
                            <PlusSquareIcon fontSize={20} />
                        </Button>
                    </Link>
                    <Button onClick={toggleColorMode}>
                        {colorMode === "light" ? <MdOutlineDarkMode /> : <CiLight />}
                    </Button>
                </HStack>
            </Flex>
        </Container>
    )
}

export default Navbar 