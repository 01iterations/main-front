import { ParagraphWrapper } from "./Paragraph.styles";

export type ParagraphProps = {
  content: string;
  underlined?: boolean;
  bold?: boolean;
  italic?: boolean;
};

export const Paragraph = ({ content, underlined, bold, italic }: ParagraphProps) => {
  return (
    <ParagraphWrapper
      style={{
        textDecoration: underlined ? "underline" : "",
        fontWeight: bold ? "bold" : "",
        fontStyle: italic ? "italic" : "",
      }}
    >
      {content}
    </ParagraphWrapper>
  );
};

export default Paragraph;
