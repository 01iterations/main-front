import { RibbonWrapper } from "./Ribbon.styles";

export type RibbonProps = {
  type: "module" | "prerequisites" | "participantWork";
  title: string;
  content?: string;
};

export const Ribbon = ({ type, title, content }: RibbonProps) => {
  return (
    <RibbonWrapper>
      <span></span>
      <h1>
        {type === "module" || type === "prerequisites" ? (
          <strong>{title}: </strong>
        ) : (
          title
        )}
        {type === "module" && <>{content}</>}
      </h1>
    </RibbonWrapper>
  );
};

export default Ribbon;
