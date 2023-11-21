import React from 'react';
import { Box, Text, Image, TableContainer, Thead, Tr, Th, Table, Tbody, Td } from '@chakra-ui/react';

const EBikeCard = (props) => {
  const {
    imageSrc,
    pedalAssistance,
    gears,
    brakes,
    suspension,
    charge,
    motor,
    battery,
    maxSpeed,
    tyres,
    netWeight,
    maxLoad,
    range,
  } = props;

  return (
    <Box maxWidth="30%">
      <Image width={"100%"} mb={70} src={imageSrc} />
      <TableContainer maxWidth={"100%"} fontSize={"lg"}>
        <Table variant='simple'>
          <Thead>
            <Tr>
              <Th fontSize={"xl"}>Model</Th>
              <Th fontSize={"xl"}>TOUR</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Pedal Assistance</Td>
              <Td>{pedalAssistance}</Td>
            </Tr>
            <Tr>
              <Td>Gears</Td>
              <Td>{gears}</Td>
            </Tr>
            <Tr>
              <Td>Brakes</Td>
              <Td>{brakes}</Td>
            </Tr>
            <Tr>
              <Td>Suspension</Td>
              <Td>{suspension}</Td>
            </Tr>
            <Tr>
              <Td>Charge</Td>
              <Td>{charge}</Td>
            </Tr>
            <Tr>
              <Td>Motor</Td>
              <Td>{motor}</Td>
            </Tr>
            <Tr>
              <Td>Battery</Td>
              <Td>{battery}</Td>
            </Tr>
            <Tr>
              <Td>Max speed (with assistance)</Td>
              <Td>{maxSpeed}</Td>
            </Tr>
            <Tr>
              <Td>Tyres</Td>
              <Td>{tyres}</Td>
            </Tr>
            <Tr>
              <Td>Net Weight</Td>
              <Td>{netWeight}</Td>
            </Tr>
            <Tr>
              <Td>Max load</Td>
              <Td>{maxLoad}</Td>
            </Tr>
            <Tr>
              <Td>Range (PAS mode)</Td>
              <Td>{range}</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default EBikeCard;
