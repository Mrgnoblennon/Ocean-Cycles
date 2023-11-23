import { Box, Flex, Link, Spacer, Image, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerBody, useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon } from '@chakra-ui/icons';

// Replace the path with the actual path to your SVG logo
import Logo from '../../ocean-cycles.png';

function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="blue.200" p={4} color="white" width={"100%"}>
      <Flex alignItems={"center"}>

        <Link href="/">
          <Image src={Logo} alt="Ocean Cycles Logo" height={{base: 10, md: 20}} />
        </Link>

        <Spacer />

        {/* Hamburger icon to open the mobile menu */}
        <Box display={{ base: "block", md: "none" }} onClick={onOpen} cursor="pointer">
          <HamburgerIcon boxSize={6} />
        </Box>

        {/* Navigation links */}
        <Flex display={{ base: "none", md: "flex" }} alignItems="center">
          <Link href="/" color="black" marginLeft={{ base: 0, md: 10 }} fontSize={"lg"}>
            Home
          </Link>
          <Link href="/about" color="black" marginLeft={{ base: 0, md: 10 }} fontSize={"lg"}>
            About
          </Link>
          <Link href="/ebikes" color="black" marginLeft={{ base: 0, md: 10 }} fontSize={"lg"}>
            E Bikes
          </Link>
          <Link href="/prices" color="black" marginLeft={{ base: 0, md: 10 }} fontSize={"lg"}>
            Prices
          </Link>
          <Link href="/book" color="black" marginLeft={{ base: 0, md: 10 }} fontSize={"lg"}>
            Book Now
          </Link>
          <Link href="/contact" color="black" marginLeft={{ base: 0, md: 10 }} fontSize={"lg"}>
            Contact Us
          </Link>
        </Flex>

      {/* Drawer component for the mobile menu */}
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay>
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerBody>
                {/* Mobile Navigation links */}
                <Flex direction="column" align="center">
                  <Link href="/" color="black" fontSize={"lg"} mb={4}>
                    Home
                  </Link>
                  <Link href="/about" color="black" fontSize={"lg"} mb={4}>
                    About
                  </Link>
                  <Link href="/ebikes" color="black" fontSize={"lg"} mb={4}>
                    E Bikes
                  </Link>
                  <Link href="/prices" color="black" fontSize={"lg"} mb={4}>
                    Prices
                  </Link>
                  <Link href="/book" color="black" fontSize={"lg"} mb={4}>
                    Book Now
                  </Link>
                  <Link href="/contact" color="black" fontSize={"lg"} mb={4}>
                    Contact Us
                  </Link>
                </Flex>
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>

      </Flex>
    </Box>
  );
}

export default Header;
