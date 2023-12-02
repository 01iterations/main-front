import { CourseType } from "../../types/courseDetails";
import cover_img from "/assets/courses/course_2/cover.png";
import module1_img from "/assets/courses/course_2/2.jpg";
import module2_img from "/assets/courses/course_2/1.png";
import module3_img from "/assets/courses/course_2/3.jpg";
import module4_img from "/assets/courses/course_2/4.jpg";
import module5_img from "/assets/courses/course_2/5.jpg";

export const course2Data: CourseType = {
  name: "Mastering Architectural Visualization with Volumetrics and Atmosphere using Corona Renderer",
  Intro: {
    src: cover_img, // Add cover image source if available
    intro:
      "The 'Mastering Architectural Visualization with Volumetrics and Atmosphere using Corona Renderer' workshop offered by 01 Iterations is a specialized program designed to provide participants with an in-depth understanding of incorporating volumetrics and atmospheric effects in architectural visualization using the powerful Corona Renderer. This workshop will focus on the intricacies of volumetric materials and global volumetric effects to enhance the overall ambiance and realism of architectural scenes.",
  },
  modules: [
    {
      moduleName: "Fundamentals of Volumetrics",
      moduleNumber: 1,
      moduleType: "img",
      sources: [module1_img],
      lastModule: false,
      moduleItems: [
        "Understanding the core principles of volumetrics and its role in architectural visualization.",
        "Exploring how volumetrics interact with the environment to create atmospheric effects.",
        "Delving into the science of light interaction within volumetric spaces and how it influences the perception of space.",
      ],
    },
    {
      moduleName: "Corona Renderer Volumetric Material",
      moduleNumber: 2,
      moduleType: "img",
      sources: [module2_img],
      lastModule: false,
      moduleItems: [
        "In-depth exploration of Corona Renderer's volumetric material.",
        "Learning to manipulate properties and settings to create various volumetric effects such as fog, haze, and light beams.",
        "Hands-on exercises to understand the behavior of light when passing through volumetric materials.",
      ],
    },
    {
      moduleName: "Global Volumetric Effects in Corona Renderer",
      moduleNumber: 3,
      moduleType: "img",
      sources: [module3_img],
      lastModule: false,
      moduleItems: [
        "Understanding the concept and implementation of global volumetric effects within Corona Renderer.",
        "Exploring how global volumetric effects affect the entire scene's atmosphere and ambiance.",
        "Learning to control and fine-tune global volumetric effects for optimal visual impact in architectural scenes.",
      ],
    },
    {
      moduleName: "Integrating Volumetrics into Architectural Scenes",
      moduleNumber: 4,
      moduleType: "img",
      sources: [module4_img],
      lastModule: false,
      moduleItems: [
        "Hands-on demonstrations of integrating volumetrics seamlessly into architectural visualization projects.",
        "Applying volumetric effects to enhance specific design elements and create desired moods within the space.",
        "Experimenting with volumetrics to achieve various atmospheric conditions such as mist, fog, and sunlight streaming through windows.",
      ],
    },
    {
      moduleName: "Case Studies and Best Practices",
      moduleNumber: 5,
      moduleType: "img",
      sources: [module5_img],
      lastModule: true,
      moduleItems: [
        "Analyzing real-world case studies where volumetrics and atmospheric effects have been effectively utilized in architectural visualization.",
        "Discussing best practices and tips for optimizing the use of volumetrics to achieve desired visual outcomes.",
        "Encouraging participants to share their work and receive constructive feedback to further enhance their understanding and skills.",
      ],
    },
  ],
  prerequisites: [
    "Basic knowledge of architectural visualization concepts and 3D rendering.",
    "Familiarity with Corona Renderer interface is recommended but not mandatory.",
  ],
  link: "https://docs.google.com/forms/d/e/1FAIpQLSc-lvlKAyFou2Y36LOWMYkQ-veHtIW44mY8QdRGq3uAUwhSHw/viewform?usp=sharing",
  deliverable:
    "By the end of this workshop, participants will have a comprehensive understanding of volumetrics and atmospheric effects, enabling them to create visually stunning and atmospheric architectural visualizations using Corona Renderer. They will gain practical skills in utilizing volumetric materials and global volumetric effects to elevate the realism and immersive experience of their rendered scenes.",
  price: "", // Add pricing information if available
  currency: "", // Add currency information if available
};
