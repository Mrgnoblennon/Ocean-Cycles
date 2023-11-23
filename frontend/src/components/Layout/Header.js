import { Box, Flex, Link, Spacer, Image } from "@chakra-ui/react";

// Replace the path with the actual path to your SVG logo
import Logo from '../../ocean-cycles.png';

function Header() {
  return (
    <Box bg="blue.200" p={4} color="white">
      <Flex alignItems={"center"}>

        <Link href="/">
          <Image src={Logo} alt="Ocean Cycles Logo" height={20} />
        </Link>

        <Spacer />

        <nav>
          <Link href="/" color="black" marginLeft={10} fontSize={"lg"}>
            Home
          </Link>
          <Link href="/about" color="black" marginLeft={10} fontSize={"lg"}>
            About
          </Link>
          <Link href="/ebikes" color="black" marginLeft={10} fontSize={"lg"}>
            E Bikes
          </Link>
          <Link href="/prices" color="black" marginLeft={10} fontSize={"lg"}>
            Prices
          </Link>
          <Link href="/book" color="black" marginLeft={10} fontSize={"lg"}>
            Book Now
          </Link>
          <Link href="/contact" color="black" marginLeft={10} fontSize={"lg"}>
            Contact Us
          </Link>
        </nav>
      </Flex>
    </Box>
  );
}

export default Header;
