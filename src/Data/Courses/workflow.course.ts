import { CourseType } from "../../types/courseDetails";
import cover_img from "/assets/courses/course_1/cover.png";
import module1_img from "/assets/courses/course_1/module_1.png";
import module2_img from "/assets/courses/course_1/module_2.png";
import module3_img from "/assets/courses/course_1/module_3.png";
import module4_img from "/assets/courses/course_1/module_4.png";
import card1_img from "/assets/courses/course_1/card1.png";
import card2_img from "/assets/courses/course_1/card2.png";

import participant_work_1 from "/assets/courses/course_1/participant-work/1.jpeg";
import participant_work_2 from "/assets/courses/course_1/participant-work/2.jpeg";
import participant_work_3 from "/assets/courses/course_1/participant-work/3.jpeg";
import participant_work_4 from "/assets/courses/course_1/participant-work/4.jpeg";
import participant_work_5 from "/assets/courses/course_1/participant-work/5.jpeg";
import participant_work_6 from "/assets/courses/course_1/participant-work/6.jpeg";
// import participant_work_7 from "/assets/courses/course_1/participant-work/7.jpeg";





export const course1Data: CourseType = {
  name: "Architectural Visualization with Corona Renderer",
  Intro: {
    src: cover_img,
    intro:
      "The 'Architectural Visualization with Corona Renderer' course offered by 01 Iterations is a comprehensive program designed to equip participants with the skills and knowledge needed to create stunning architectural visualizations using the powerful Corona Renderer. This course will cover essential aspects of rendering, composition, lighting, material application, and scene optimization.",
  },
  modules: [
    {
      moduleName: "INTRODUCTION TO PHOTOGRAPHY / ARCHVIZ AND FURTHER DEBATES",
      moduleNumber: 0,
      moduleType: "cards",
      sources: [card2_img, card1_img],
      lastModule: false,
      moduleItems: [
        "Encouraging people to think about photorealism",
        "Are we copying real life or how cameras work when we make images?",
        "Are we copying real life or how cameras work when we make images?",
        "Explaining certain camera features that help show things we can't normally see",
        "Talking about photographers who have a unique way of making images",
        "Breaking free from traditional methods to enhance our visualizations",
      ],
    },
    {
      moduleName: "Introduction to Corona Renderer / Camera And Composition",
      moduleNumber: 1,
      moduleType: "img",
      sources: [module1_img],
      lastModule: false,
      moduleItems: [
        "Understanding the fundamentals of the Corona Renderer and its logical workings.",
        "Exploring the Corona Renderer interface and the Virtual Frame Buffer (VFB).",
        "Analyzing photography references and mastering composition techniques such as the rule of thirds.",
        "Learning about Corona Camera placement, depth of field, and motion blur for effective visualization.",
      ],
    },
    {
      moduleName: "Introduction to Natural and Artificial Lighting",
      moduleNumber: 2,
      moduleType: "img",
      sources: [module2_img],
      lastModule: false,
      moduleItems: [
        "Gaining an in-depth understanding of different lighting conditions and their effects on architectural visualization.",
        "Exploring the Corona sun, Corona sky, and High Dynamic Range Imaging (HDRI) for realistic lighting.",
        "Understanding white balance and its impact on scene illumination.",
        "Implementing artificial lighting using Corona Lights and Corona ray switch to achieve desired lighting effects.",
      ],
    },
    {
      moduleName: "Introduction to material analysis and creation",
      moduleNumber: 3,
      moduleType: "img",
      sources: [module3_img],
      lastModule: false,
      moduleItems: [
        "Delving into the critical role of materials in architectural visualization.",
        "Differentiating between various material types and comprehending their physical properties.",
        "Exploring albedo and its significance in material rendering.",
        "Understanding fundamental material properties such as reflection, refraction, bump, etc.",
        "Mastering the creation of complex materials using Composite, Blend, Corona Layered Material, and Mix techniques.",
      ],
    },
    {
      moduleName: "Tips and tricks for workflow and Scene Optimization",
      moduleNumber: 4,
      moduleType: "img",
      sources: [module4_img],
      lastModule: false,
      moduleItems: [
        "Focusing on optimizing scenes to improve workflow and minimize rendering time.",
        "Identifying common file problems that consume excessive memory and hinder smooth operations.",
        "Addressing prevalent rendering issues that cause noise in the output.",
        "Providing valuable tips and tricks to enhance efficiency and productivity in scene management.",
        "Emphasizing the necessity of a strong understanding of the 3ds Studio Max interface for effective scene optimization.",
      ],
    },
  ],
  prerequisites: [
    "Basic knowledge of 3D modeling and visualization concepts is strongly recommended.",
    "Familiarity with 3ds Studio Max interface is strongly recommended.",
  ],
  deliverable:
    "By the end of this course, participants will have honed their skills in using Corona Renderer, creating compelling compositions, mastering lighting techniques, applying materials effectively, and optimizing scenes for efficient architectural visualization.",
  participantsWork: [
    participant_work_1,
    participant_work_2,
    participant_work_3,
    participant_work_4,
    participant_work_5,
    participant_work_6,
    // participant_work_7,
  ],
  feedback: [
    {
      authorName: "Mohamed Shahin",
      authorImg: "",
      authorJobTitle: "Mohamed.shahine15@gmail.com",
      rating: 5,
      feedback: "A great course with the artist Ahmed Fahmy, I learned a lot about the camera, lighting and the extent of their impact on the spaces and how to get to the mood I want the result was fantastic",
    },
    {
      authorName: "Mohamed Hesham",
      authorImg: "",
      authorJobTitle: "Mohamadhesham324@gmail.com",
      rating: 5,
      feedback: "A very thorough course explaining the entire rendering workflow. The technical and theoretical parts were equally beneficial and I would recommend for anyone looking to learn corona rendering",
    },
    {
      authorName: "Mahmoud Wael",
      authorImg: "",
      authorJobTitle: "Mahmoud_wael@outlook.com",
      rating: 5,
      feedback:"The course was very informative in terms of  how to create high quality renders. Learnt how to create realistic materials, adjust shots lighting and how it could affect the over shot mood, and finally the importance of the camera positioning on the shot quality "
    }
  ],
  price: "", // Add pricing information if available
  currency: "", // Add currency information if available
};
