import ImgBox from "../../ImgBox/ImgBox.component";
import Paragraph from "../../Paragraph/Paragraph.component";
// import { IntroSectionWrapper } from "./IntroSection.styles";

export type IntroSectionProps = {
  src: string;
  intro: string;
};

export const IntroSection = ({ src, intro }: IntroSectionProps) => {
  return (
    <>
      <ImgBox src={src} />
      <Paragraph content={intro} italic={true}/>
    </>
  );
};

export default IntroSection;
