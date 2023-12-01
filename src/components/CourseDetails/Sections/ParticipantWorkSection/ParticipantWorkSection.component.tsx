import Ribbon from "../../Ribbon/Ribbon.component";
import {
  LeftSideImgs,
  ParticipantWorkWrapper,
  RightSideImgs,
} from "./ParticipantWorkSection.styles";
import test_img from "/assets/Carousel/slide2.jpg";
const ParticipantWorkSection = () => {
  return (
    <>
      <Ribbon type="AfterCourse" title="Participant Work" />
      <ParticipantWorkWrapper>
        <LeftSideImgs>
          <img src={test_img} alt="" />
          <img src={test_img} alt="" />
        </LeftSideImgs>
        <RightSideImgs>
          <img src={test_img} alt="" />
          <img src={test_img} alt="" />
          <img src={test_img} alt="" />
          <img src={test_img} alt="" />
          <img src={test_img} alt="" />
          <img src={test_img} alt="" />
        </RightSideImgs>
      </ParticipantWorkWrapper>
    </>
  );
};

export default ParticipantWorkSection;
