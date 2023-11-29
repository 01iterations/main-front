import BulletList from "../../BulletList/BulletList.component";
import Paragraph from "../../Paragraph/Paragraph.component";
import Ribbon from "../../Ribbon/Ribbon.component";
// import { PrerequisiteSectionWrapper } from "./PrerequisiteSection.styles";

export type PrerequisiteSectionProps = {
  prerequisites: string[];
  deliverable: string;
};

export const PrerequisiteSection = ({
  prerequisites,
  deliverable
}: PrerequisiteSectionProps) => {
  return (
    <>
      <Ribbon type='prerequisites' title='Prerequisites'/>
      <BulletList listItems={prerequisites} />
      <Paragraph content={deliverable} italic={true} underlined={true} />
    </>
  );
};

export default PrerequisiteSection;
