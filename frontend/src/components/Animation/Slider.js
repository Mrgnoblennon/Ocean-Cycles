import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image, Text, Button, Box, Flex, Link } from '@chakra-ui/react';

const slides = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/3507802/pexels-photo-3507802.jpeg',
    heading: 'Ocean Cycles',
    description: 'Looking for a Ride?',
    button: 'Book Now',
    href: '/book',
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/5864786/pexels-photo-5864786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    heading: 'Ocean Cycles',
    description: 'Check out our Pricing',
    button: 'Prices',
    href: '/prices',
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/210117/pexels-photo-210117.jpeg',
    heading: 'Ocean Cycles',
    description: 'Want to get in Touch?',
    button: 'Contact Us',
    href: '/contact',
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
    <Box height="auto" mb={200} position="relative">
      <AnimatePresence mode="wait">
      <motion.div
          key={currentSlide}
          style={{
            position: 'relative',
            width: '100%',
            height: '1000px',
            overflow: 'hidden',
          }}
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{opacity: 0}}
          transition={{ ease: 'easeInOut', duration: 0.5 }}
        >
          <Image
            src={slides[currentSlide].image}
            alt={`Slide ${currentSlide + 1}`}
            style={{ width: '100%', height: '100%', objectFit: 'cover'}}
          />
          <Box
            position="absolute"
            top="0"
            left="0"
            width="100%"
            height="100%"
            bg="black"
            opacity="0.3"
          />
        </motion.div>

        <Flex direction={'column'} alignItems={'center'} position={'absolute'} top={{base: 40, md: 80}} left={{base: '22%', md: '30%'}}>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}>
            <Text fontSize={{base: '4xl', md: '9xl'}} fontWeight={'medium'} textColor={'white'} textShadow="0 0 20px black">
              {slides[currentSlide].heading}
            </Text>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3 }}>
            <Text fontSize={{base: 'lg', md: '3xl'}} fontWeight={'medium'} textColor={'white'} textShadow="0 0 20px black" mb={150}>
              {slides[currentSlide].description}
            </Text>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 4 }}>
            <Link href={slides[currentSlide].href} style={{ textDecoration: 'none' }}>
              <Button size={{base: 'sm'}} color="white" bg={'teal.600'}>{slides[currentSlide].button}</Button>
            </Link>
          </motion.div>
        </Flex>
      </AnimatePresence>
    </Box>
  );
};

export default Slider;
