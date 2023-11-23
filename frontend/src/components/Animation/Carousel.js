import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Box, Image, Flex, Button, HStack } from '@chakra-ui/react';

const Carousel = ({ images, intervalDuration, imageSize, carouselSize, ...props }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  let imageInterval;

  const handleDotClick = (index) => {
    // Clear existing interval
    clearInterval(imageInterval);

    // Update current image index
    setCurrentImageIndex(index);

    // Start a new interval
    startImageInterval();
  };

  const startImageInterval = () => {
    imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, intervalDuration);
  };

  useEffect(() => {
    // Start initial interval
    startImageInterval();

    return () => {
      // Clear interval on component unmount
      clearInterval(imageInterval);
    };

  }, [images, intervalDuration]); // Updated dependency array

  return (
    <Flex position="relative" direction="column" {...carouselSize}>

      <Flex
        key={currentImageIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        mb={4}
        {...carouselSize}
        position="relative"
      >
        {images.map((image, index) => (
          <Box
            key={index}
            display={index === currentImageIndex ? 'block' : 'none'}
            position="relative"
            boxShadow="2xl"
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
          </Box>
        ))}

        {/* Overlayed Buttons at the Bottom */}
        <Flex position="absolute" bottom={3} left="50%" transform="translateX(-50%)">
          <HStack spacing={2}>
            {images.map((_, index) => (
              <Button
                key={index}
                borderRadius="full"
                height={2}
                onClick={() => handleDotClick(index)}
                variant={currentImageIndex === index ? 'solid' : 'outline'}
              ></Button>
            ))}
          </HStack>
        </Flex>

      </Flex>

    </Flex>
  );
};

export default Carousel;
