import { Heading, HStack, Image, Text, VStack, Box, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc, url }) => {
  return (
    <Box backgroundColor="white" textColor="black" rounded="3xl" overflow="hidden">
      <VStack spacing={3} alignItems="stretch">
        <Image src={imageSrc} alt={title} />
        <Box paddingX={4} paddingBottom={5}>
          <Heading paddingY={3} size="md">
            {title}
          </Heading>
          <Text>{description}</Text>
          <Link
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            mt={3}
            display="inline-flex"
          >
            <HStack spacing={2}>
              <Text fontWeight="bold">See more</Text>
              <FontAwesomeIcon icon={faArrowRight} />
            </HStack>
          </Link>
        </Box>
      </VStack>
    </Box>
  );
};

export default Card;
