import { RibbonWrapper } from "./Ribbon.styles";

export type RibbonProps = {
  type: "module" | "prerequisites" | "participantWork" | "AfterCourse";
  title: string;
  content?: string;
};

export const Ribbon = ({ type, title, content }: RibbonProps) => {
  return (
    <RibbonWrapper style={{ backgroundColor: `${type === 'AfterCourse' ? '#f37229' : 'rgba(0, 0, 0, 0.15)'}` }}>
      <span ></span>
      <h1 style={{ fontFamily: `${type === 'AfterCourse' ? 'franklin-gothic' : ''}`}}>
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
