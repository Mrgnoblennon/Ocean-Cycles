import React from 'react';
import { Box, Heading, Link, Flex, Spacer } from '@chakra-ui/react';


const Header = () => {
  return (
    <Box bg="blue.200" p={4} color="white" >

      <Flex alignItems={"center"}>
      <Heading as="h1" size="xl">
        <Link to="/" color="white">
          Ocean Cycles
        </Link>
      </Heading>

      <Spacer/>

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
        <Link href="/booknow" color="black" marginLeft={10} fontSize={"lg"}>
          Book Now
        </Link>
        <Link href="/contact" color="black" marginLeft={10} fontSize={"lg"}>
          Contact Us
        </Link>
      </nav>
      </Flex>
    </Box>
  );
};

export default Header;
