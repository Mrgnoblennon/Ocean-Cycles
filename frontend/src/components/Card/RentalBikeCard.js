import React from 'react';
import { Box, Image, Text, Flex} from '@chakra-ui/react';

const RentalBikeCard = () => {
  return (
    <Box width={300} height={400}>
      <Box width={300} height={250} borderStyle={"solid"} borderWidth={3}>
        <Image
          width="100%"
          height="100%"
          src='https://media.istockphoto.com/id/1268356101/vector/bike-icon-vector-logo-design-template-flat-style-trendy.jpg?s=612x612&w=0&k=20&c=owNTrvMMdpQQMcp4EQkIcaH9Jr2xy5KGkTxeULAQRPk='
          style={{ objectFit: 'cover' }}
        />
      </Box>
 
        <Flex width={"100%"} height={150} bg={'purple.200'} alignItems={'center'} justifyContent={'center'}>
          <Text>Model: </Text>
          
        </Flex>

    </Box>
  );
};

export default RentalBikeCard;
