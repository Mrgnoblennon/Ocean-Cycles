// Carousel.js
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Box, Image, Flex, Button, Progress, HStack } from '@chakra-ui/react';





const Carousel = ({ images, intervalDuration, imageSize, carouselSize, ...props }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
    if (progress !== 100) { 
      setProgress(0); 
    } // Reset progress when changing images
  };

  useEffect(() => {
    let progressInterval;
    let imageInterval;

    // Automatically change image every intervalDuration milliseconds
    imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      if (progress !== 100) {
        setProgress(0); // Reset progress when changing images
      }
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
    <Flex direction={"column"}  {...carouselSize}>

      <Flex
        key={currentImageIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        mb={4}
        {...carouselSize}
      >
        {images.map((image, index) => (

          <Box 
            key={index} 
            display={index === currentImageIndex ? 'block' : 'none'} 
            position="relative" 
            borderStyle={'solid'} 
            borderWidth={30} 
            borderRadius={30}
            borderColor={"green.200"}
            boxShadow={"xl"}
          >
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <Image
                src={image}
                alt={`Image ${index + 1}`}
                boxSize={imageSize}
                objectFit="cover"
              />
            </motion.div>
            <Box position="absolute" bottom="0" left="0" right="0">
              <Progress value={progress} colorScheme="purple" size="sm" />
            </Box>
          </Box>
        ))}
      </Flex>

      {/* Buttons */}

      <HStack display={"none"} spacing={2} mt={2} alignItems="center" ml={"20%"}>
        {images.map((_, index) => (
          <Button borderRadius={"full"} size={"xs"} key={index} onClick={() => handleDotClick(index)} variant={currentImageIndex === index ? 'solid' : 'outline'}>
            
          </Button>
        ))}
      </HStack>

    </Flex>
  );
};

export default Carousel;
