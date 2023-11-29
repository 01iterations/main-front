import { ImgSection, SquareImg } from "./ImgBox.styles";

export type ImgBoxProps = {
  src: string;
  ribbon?: boolean;
};
export const ImgBox = ({ src, ribbon }: ImgBoxProps) => {
  return (
    <ImgSection>
      {ribbon && <span></span>}
      <SquareImg src={src} />
    </ImgSection>
  );
};

export default ImgBox;
