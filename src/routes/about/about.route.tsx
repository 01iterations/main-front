import Nav from "../../components/Nav/nav.component";
import {
  AboutContainer,
  AboutParagraph,
  AboutText,
  SideImg,
} from "./about.style";

export function About() {
  return (
    <AboutContainer>
      <Nav />
      <SideImg src="/assets/home/Highlight-04.png" alt="" />
      <AboutText>
        <AboutParagraph>
          <h1>01</h1>
          <p>
            <strong>Iterations </strong>
            is a prominent global architectural design platform, with a strong
            presence in London and the USA. Our multidisciplinary practice
            encompasses architectural design, interior design, and visualization
            services. We've transitioned from collaborating with renowned
            designers in Egypt to working with reputable corporates and design
            studios in Europe and the Arabian Peninsula, handling various
            project types and roles. Our team includes certified instructors in
            Corona Renderer who hold professional Autodesk certifications
            acquired in Saint-Petersburg., highlighting our commitment to
            expertise and quality. --- project types and roles. Our team
            includes certified instructors in Corona Renderer who hold
            professional Autodesk certifications acquired in Saint-Petersburg.,
            highlighting our commitment to expertise and quality. project types
            and roles. Our team includes certified instructors in Corona
            Renderer who hold professional Autodesk certifications acquired in
            Saint-Petersburg., highlighting our commitment to expertise and
            quality. `
          </p>
        </AboutParagraph>
        <AboutParagraph>
          <p>
            The name “01Iterations” draws inspiration from binary numbers 0 and
            1, historically used in early computing for problem-solving. We
            embrace the power of iteration in design, employing simple tools to
            generate a wide range of design options, both intricate and
            straightforward.
          </p>
        </AboutParagraph>
        <AboutParagraph>
          <p>
            At 01Iterations, our design philosophy revolves around iterative
            evolution. We believe that effective and innovative designs emerge
            through a cyclical process of refinement and enhancement. By
            continually iterating and refining concepts, we uncover new
            dimensions of creativity and efficiency. We value the equilibrium
            between simplicity and complexity, recognizing that every design
            element, whether minimalist or intricate, contributes significantly
            to the project's overarching vision.
          </p>
        </AboutParagraph>
      </AboutText>
      <SideImg src="/assets/home/Highlight-02.png" alt="" />
    </AboutContainer>
  );
}
