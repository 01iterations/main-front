import Nav from "../../components/Nav/nav.component";
import {
  ApplyBtn,
  BulletPoints,
  CardsSection,
  CenterWrapper,
  CourseDetailsWrapper,
  ImgSection,
  Paragraph,
  Ribbon,
  SquareImg,
} from "./courseDetails.styles";
import cover from "/assets/courses/course_1/cover.png";
import module1_img from "/assets/courses/course_1/module_1.png";
import module2_img from "/assets/courses/course_1/module_2.png";
import module3_img from "/assets/courses/course_1/module_3.png";
import module4_img from "/assets/courses/course_1/module_4.png";
import card1_img from "/assets/courses/course_1/card1.png";
import card2_img from "/assets/courses/course_1/card2.png";


function CourseDetails() {
  return (
    <CourseDetailsWrapper>
      <Nav />
      <CenterWrapper>
      <ImgSection>
        <span></span>
        <SquareImg src={cover} />
        </ImgSection>
        <Paragraph>
          The “Architectural Visualization with Corona Renderer” course offered
          by 01 Iterations is a comprehensive program designed to equip
          participants with the skills and knowledge needed to create stunning
          architectural visualizations using the powerful Corona Renderer. This
          course will cover essential aspects of rendering, composition,
          lighting, material application, and scene optimization.
        </Paragraph>
        <Ribbon>
          <h1>
            <strong>MODULE 0: </strong>INTRODUCTION TO PHOTOGRAPHY / ARCHVIZ AND
            FURTHER DEBATES
          </h1>
        </Ribbon>
        <BulletPoints>
          <li>Encouraging people to think about photorealism</li>
          <li>
            Are we copying real life or how cameras work when we make images?
          </li>
          <li>
            Are we copying real life or how cameras work when we make images?
          </li>
          <li>
            Explaining certain camera features that help shows things we can't
            normally see
          </li>
          <li>
            Talking about photographers who have unique way of making images
          </li>
          <li>
            Breaking free from traditional methods to enhance our visualizations
          </li>
        </BulletPoints>
        <CardsSection>
          <span></span>
          <img src={card2_img} alt="break the chains" />
          <img src={card1_img} alt="photo realism" />

        </CardsSection>

        <Ribbon>
          <h2>
            <strong>MODULE 1: </strong> Introduction to Corona Renderer / Camera
            And Composition
          </h2>
        </Ribbon>
        <BulletPoints>
          <li>
            Understanding the fundamentals of the Corona Renderer and its
            logical workings.
          </li>
          <li>
            Exploring the Corona Renderer interface and the Virtual Frame Buffer
            (VFB).
          </li>
          <li>
            Analyzing photography references and mastering composition
            techniques such as the rule of thirds.
          </li>
          <li>
            Learning about Corona Camera placement, depth of field, and motion
            blur for effective visualization.
          </li>
        </BulletPoints>
        <ImgSection>
        <span></span>
        <SquareImg src={module1_img} />
        </ImgSection>
        <Ribbon>
          <h2>
            <strong>MODULE 2: </strong> Introduction to Natural and Artificial
            Lighting
          </h2>
        </Ribbon>
        <BulletPoints>
          <li>
            Gaining an in-depth understanding of different lighting conditions
            and their effects on architectural visualization.
          </li>
          <li>
            Exploring the Corona sun, Corona sky, and High Dynamic Range Imaging
            (HDRI) for realistic lighting.
          </li>
          <li>
            Understanding white balance and its impact on scene illumination.
          </li>
          <li>
            Implementing artificial lighting using Corona Lights and Corona ray
            switch to achieve desired lighting effects.
          </li>
        </BulletPoints>
        <ImgSection>
        <span></span>
        <SquareImg src={module2_img} />
        </ImgSection>

        <Ribbon>
          <h2>
            <strong>MODULE 3: </strong> Introduction to material analysis and
            creation
          </h2>
        </Ribbon>
        <BulletPoints>
          <li>
            Delving into the critical role of materials in architectural
            visualization.
          </li>
          <li>
            Differentiating between various material types and comprehending
            their physical properties.
          </li>
          <li>Exploring albedo and its significance in material rendering.</li>
          <li>
            Understanding fundamental material properties such as reflection,
            refraction, bump, etc.
          </li>
          <li>
            Mastering the creation of complex materials using Composite, Blend,
            Corona Layered Material, and Mix techniques.
          </li>
        </BulletPoints>
        <ImgSection>
        <span></span>
        <SquareImg src={module3_img} />
        </ImgSection>

        <Ribbon>
          <span></span>
          <h2>
            <strong>MODULE 4: </strong> Tips and tricks for workflow and Scene
            Optimization
          </h2>
        </Ribbon>
        <BulletPoints>
          <li>
            Focusing on optimizing scenes to improve workflow and minimize
            rendering time
          </li>
          <li>
            Identifying common file problems that consume excessive memory and
            hinder smooth operations.
          </li>
          <li>
            Addressing prevalent rendering issues that cause noise in the
            output.
          </li>
          <li>
            Providing valuable tips and tricks to enhance efficiency and
            productivity in scene management.
          </li>
          <li>
            Emphasizing the necessity of a strong understanding of the 3ds
            Studio Max interface for effective scene optimization.
          </li>
        </BulletPoints>
        <ImgSection>
        <span></span>
        <SquareImg src={module4_img} />
        </ImgSection>
        <Paragraph style={{textDecoration: 'underline'}}>
          Basic knowledge of 3D modeling and visualization concepts is strongly
          recommended Familiarity with 3ds Studio Max interface is strongly
          recommended. By the end of this course, participants will have honed
          their skills in using Corona Renderer, creating compelling
          compositions, mastering lighting techniques, applying materials
          effectively, and optimizing scenes for efficient architectural
          visualization.
        </Paragraph>
        <ApplyBtn>
          Enroll Now
        </ApplyBtn>
      </CenterWrapper>
    </CourseDetailsWrapper>
  );
}

export default CourseDetails;
