import Ribbon from "../../Ribbon/Ribbon.component";
import {
  LeftSideImgs,
  ParticipantWorkWrapper,
  RightSideImgs,
} from "./ParticipantWorkSection.styles";

export type ParticipantWorkSectionProps = {
  sources: string[];
};
const ParticipantWorkSection = ({ sources }: ParticipantWorkSectionProps) => {
  return (
    <>
      <Ribbon type="AfterCourse" title="Participants' Work" />
      <ParticipantWorkWrapper>
        <LeftSideImgs>
            {sources.slice(0,4).map((source, index) => (
              <img key={index} src={source} alt="" />
            ))}
        </LeftSideImgs>
        <RightSideImgs>
            {sources.slice(4).map((source, index) => (
              <img key={index} src={source} alt="" />
            ))}
        </RightSideImgs>
      </ParticipantWorkWrapper>
    </>
  );
};

export default ParticipantWorkSection;
