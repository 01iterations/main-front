import BulletList from "../../BulletList/BulletList.component";
import { CardBox } from "../../CardBox/CardBox.component";
import ImgBox from "../../ImgBox/ImgBox.component";
import Ribbon from "../../Ribbon/Ribbon.component";
// import { ModuleSectionWrapper } from "./ModuleSection.styles";

export type ModuleSectionProps = {
  moduleNumber: number;
  moduleName: string;
  moduleItems: string[];
  moduleType: "img" | "cards";
  sources: string[];
  lastModule : boolean
};

const ModuleSection = ({
  moduleName,
  moduleNumber,
  moduleType,
  lastModule,
  moduleItems,
  sources
}: ModuleSectionProps) => {
  return (
    <>
      <Ribbon
        type="module"
        title={`Module ${moduleNumber}`}
        content={moduleName}
      />
      <BulletList listItems={moduleItems} />
      {moduleType === "img" && (
          <ImgBox src={sources[0]} ribbon={lastModule}/>
      )}
      {moduleType === "cards" && (
          <CardBox sources={sources} />
      )}
    </>
  );
};

export default ModuleSection;
