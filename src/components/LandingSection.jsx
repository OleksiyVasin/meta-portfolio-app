import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Oleksiy Vasin!";
const bio1 = "Frontend Development Lead";
const bio2 = "React, Salesforce Commerce Cloud, 15+ years";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={8}>
      <VStack spacing={3}>
        <Avatar
          name="Oleksiy Vasin"
          src="https://avatars.githubusercontent.com/u/1741189?v=4"
          size="2xl"
        />
        <Heading as="h1" size="md">
          {greeting}
        </Heading>
      </VStack>
      <Heading as="h2" size="2xl">
        {bio1}
      </Heading>
      <Heading as="h2" size="2xl">
        {bio2}
      </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
