import { BulletPoints } from "./BulletList.styles";

export type BulletListProps = {
  listItems: string[];
};

export const BulletList = ({ listItems }: BulletListProps) => {
  return (
    <BulletPoints>
      {listItems.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </BulletPoints>
  );
};
export default BulletList;
