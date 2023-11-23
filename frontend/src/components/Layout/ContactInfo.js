import React from 'react';
import { Box, Text, Heading, VStack, HStack, Icon, Button, useBreakpointValue} from '@chakra-ui/react';

// React Icons
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { MdEmail } from "react-icons/md";

// Google Maps Api
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const ContactInfo = () => {

  const handleLocationClick = () => {
    const businessAddress = "Ocean Cycles";
  
    // Open the location in Google Maps
    window.open(`https://www.google.com/maps?q=${encodeURIComponent(businessAddress)}`, "_blank");
  };

  const handlePhoneClick = () => {
    const phoneNumber = "+61 492 911 242";

    // Use the "tel:" protocol to initiate a phone call
    window.open(`tel:${phoneNumber}`);
  };

  const handleEmailClick = () => {
    const emailAddress = "info@oceancycles.com.au";

    // Use the "mailto:" protocol to open the default email client
    window.location.href = `mailto:${emailAddress}`;
  };

  const center = {
    lat: -32.05489943429922, // Replace with the actual latitude of your location
    lng: 115.74195832510732, // Replace with the actual longitude of your location
  };

  const mapContainerStyle = useBreakpointValue({
    base: {
      width: "300px",
      height: "300px",
    },
    md: {
      width: "75%",
      height: "500px",
    },
  });

  return (
    <Box>
      <Heading fontSize={{base: "lg", md: "3xl"}} mb={4} color={"blue.300"}>Contact Info</Heading>
    
      <HStack mb={3}>
        <Button bg={"red.500"} borderRadius={"full"} onClick={handleLocationClick} size={{base: "sm", md: "md"}}>
          <Icon as={FaLocationDot} boxSize={{base: 3, md: 4}}/>
        </Button>
        <Text fontSize={{base: "sm", md: "xl"}} fontWeight={"semibold"} color={"green"}>2 Phillimore Street, Fremantle 6160 WA</Text>
      </HStack>

      <HStack mb={3}>
        <Button bg={"blue.400"} borderRadius={"full"} onClick={handlePhoneClick} size={{base: "sm", md: "md"}}>
          <Icon as={MdOutlinePhoneIphone} boxSize={{base: 3, md: 4}}/>
        </Button>
        <Text fontSize={{base: "sm", md: "xl"}} fontWeight={"semibold"} color={"green"}>+61 492 911 242</Text>
      </HStack>

      <HStack mb={10}>
        <Button bg={"green.400"} borderRadius={"full"} onClick={handleEmailClick} size={{base: "sm", md: "md"}}>
          <Icon as={MdEmail} boxSize={{base: 3, md: 4}}/>
        </Button>
        <Text fontSize={{base: "sm", md: "xl"}} fontWeight={"semibold"} color={"green"}>info@oceancycles.com.au</Text>
      </HStack>

      <LoadScript googleMapsApiKey="">
        <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={15}>
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>

    </Box>
  );
};

export default ContactInfo;
