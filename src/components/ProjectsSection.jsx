import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Little Lemon",
    description:
      "Restaurant website with table booking, built in React as part of the Meta Front-End Developer Professional Certificate.",
    url: "https://github.com/OleksiyVasin/little-lemon-website",
    getImageSrc: () => require("../images/photo1.jpg"),
  },
  {
    title: "Commerce Cloud storefronts",
    description:
      "Salesforce Commerce Cloud storefronts for global fashion brands, leading frontend delivery at Astound Digital.",
    url: "https://www.linkedin.com/in/oleksiy-vasin-638a4451",
    getImageSrc: () => require("../images/photo2.jpg"),
  },
  {
    title: "Christopher & Banks",
    description:
      "Frontend for a national women's apparel retailer: UI from mockups, CSS/HTML layout, and jQuery modules.",
    url: "https://www.christopherandbanks.com/",
    getImageSrc: () => require("../images/photo3.jpg"),
  },
  {
    title: "This portfolio",
    description:
      "Single-page React portfolio with Chakra UI, Formik, and Yup — header, bio, project cards, and a validated contact form.",
    url: "https://github.com/OleksiyVasin",
    getImageSrc: () => require("../images/photo4.jpg"),
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            url={project.url}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
