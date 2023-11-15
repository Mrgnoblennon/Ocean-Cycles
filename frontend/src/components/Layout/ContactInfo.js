import React from 'react';
import { Box, Text, Heading, VStack, HStack, Icon, Button} from '@chakra-ui/react';

// React Icons
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { MdEmail } from "react-icons/md";

// Google Maps Api
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const ContactInfo = () => {

  const mapContainerStyle = {
    width: "75%",
    height: "500px",
  };

  const center = {
    lat: -32.0569, // Replace with the actual latitude of your location
    lng: 115.7439, // Replace with the actual longitude of your location
  };

  return (
    <div>
      <Heading mb={4} color={"cyan.300"}>Contact Info</Heading>
    
      <HStack mb={3}>
        <Button bg={"red.500"} borderRadius={"full"}>
          <Icon as={FaLocationDot} boxSize={4}/>
        </Button>
        <Text fontSize={"xl"} fontWeight={"semibold"} color={"green"}>2 Phillimore Street, Fremantle 6160 WA</Text>
      </HStack>

      <HStack mb={3}>
        <Button bg={"blue.400"} borderRadius={"full"}>
          <Icon as={MdOutlinePhoneIphone} boxSize={4}/>
        </Button>
        <Text fontSize={"xl"} fontWeight={"semibold"} color={"green"}>+61 492 911 242</Text>
      </HStack>

      <HStack mb={10}>
        <Button bg={"green.400"} borderRadius={"full"}>
          <Icon as={MdEmail} boxSize={4}/>
        </Button>
        <Text fontSize={"xl"} fontWeight={"semibold"} color={"green"}>info@oceancycles.com.au</Text>
      </HStack>

      <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
        <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={15}>
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>

    </div>
  );
};

export default ContactInfo;
