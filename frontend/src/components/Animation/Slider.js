import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image, Text, Button, Box, Flex} from '@chakra-ui/react';

const slides = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/3507802/pexels-photo-3507802.jpeg',
    heading: 'Ocean Cycles',
    description: 'Looking for a Ride?',
    button: 'Book Now',
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/5864786/pexels-photo-5864786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    heading: 'Ocean Cycles',
    description: 'Check out our Pricing',
    button: 'Prices',
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/210117/pexels-photo-210117.jpeg',
    heading: 'Ocean Cycles',
    description: 'Want to get in Touch?',
    button: 'Contact Us',
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide < slides.length - 1 ? prevSlide + 1 : 0));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 15000);

    return () => {
      clearInterval(interval);
    };
  }, [currentSlide]);

  return (
    <Box bg={"gray.500"} height="auto" mb={200}>
      <AnimatePresence mode="wait">


        <motion.img
          key={currentSlide}
          src={slides[currentSlide].image}
          alt={`Slide ${currentSlide + 1}`}
          style={{width : "100%", height: 1000}}
          initial={{ x: 2200}}
          animate={{ x: 0}}
          exit={{ x: -2200}}
        />

          <Flex direction={'column'} alignItems={'center'} position={"absolute"} top={80} left={"30%"}>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay : 2}}
            >
             <Text fontSize={'9xl'} fontWeight={"medium"} textColor={"white"} textShadow='0 0 20px black'>{slides[currentSlide].heading}</Text>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay : 3}}
            >
              <Text fontSize={'3xl'} fontWeight={"medium"} textColor={"white"} textShadow='0 0 20px black' mb={150}>{slides[currentSlide].description}</Text>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay : 4}}
            >
              <Button bg={"blue.500"}>{slides[currentSlide].button}</Button>
            </motion.div>

          </Flex>

      </AnimatePresence>
    </Box>
  );
};

export default Slider;
