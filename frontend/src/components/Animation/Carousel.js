// Carousel.js
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Box, Image, Flex, Button, Progress, HStack } from '@chakra-ui/react';

const images = [
  'https://framerusercontent.com/images/8tL9Ugx1oNnZz0n5DhdCUMZa88.jpg?scale-down-to=512',
  'https://framerusercontent.com/images/cXOVRvtKBz4ycf04v44oZbVFpU.jpg?scale-down-to=512',
  'https://framerusercontent.com/images/Eg5cXFrMatm4lGzj0KpJTnnTp0.jpg?scale-down-to=512',
  // Add more image URLs as needed
];

const intervalDuration = 8000; // Set the interval duration in milliseconds

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
    setProgress(0); // Reset progress when changing images
  };

  useEffect(() => {
    let progressInterval;
    let imageInterval;

    // Automatically change image every intervalDuration milliseconds
    imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setProgress(0); // Reset progress when changing images
    }, intervalDuration);

    // Update the progress every 10 milliseconds based on interval duration
    const progressIncrement = (10 / intervalDuration) * 100;
    progressInterval = setInterval(() => {
      setProgress((prevProgress) => Math.min(prevProgress + progressIncrement, 100));
    }, 10);

    return () => {
      clearInterval(imageInterval);
      clearInterval(progressInterval);
    };

  }, []); // Empty dependency array ensures that the effect runs only once on component mount

  return (
    <Box>
      <Flex justify="center" align="center" direction="column">
        <Flex
          key={currentImageIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }} // Adjust the transition duration for a smoother fade
          mb={4}
        >
          {images.map((image, index) => (
            <Box key={index} display={index === currentImageIndex ? 'block' : 'none'} position="relative" borderStyle={'solid'} borderWidth={15}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }} // Adjust the transition duration for a smoother fade
              >
                <Image
                  src={image}
                  alt={`Image ${index + 1}`}
                  boxSize="300px"
                  objectFit="cover"
                />
              </motion.div>
              <Box position="absolute" bottom="0" left="0" right="0">
                <Progress value={progress} colorScheme="purple" size="sm" />
              </Box>
            </Box>
          ))}
        </Flex>
        <HStack spacing={2} mt={2}>
          {images.map((_, index) => (
            <Button key={index} onClick={() => handleDotClick(index)} size="sm" variant={currentImageIndex === index ? 'solid' : 'outline'}>
              
            </Button>
          ))}
        </HStack>
      </Flex>
    </Box>
  );
};

export default Carousel;
