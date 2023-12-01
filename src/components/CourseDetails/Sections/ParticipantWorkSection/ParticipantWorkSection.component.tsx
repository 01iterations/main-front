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
      <Ribbon type="AfterCourse" title="Participant Work" />
      <ParticipantWorkWrapper>
        <LeftSideImgs>
            {sources.slice(0,2).map((source, index) => (
              <img key={index} src={source} alt="" />
            ))}
        </LeftSideImgs>
        <RightSideImgs>
            {sources.slice(2).map((source, index) => (
              <img key={index} src={source} alt="" />
            ))}
        </RightSideImgs>
      </ParticipantWorkWrapper>
    </>
  );
};

export default ParticipantWorkSection;
