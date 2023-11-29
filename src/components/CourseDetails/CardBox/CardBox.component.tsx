import { CardBoxWrapper } from "./CardBox.styles";

export type CardBoxProps = {
    sources: string[];
}

// Remark will fail UI if more than two images
export const CardBox = ({ sources }: CardBoxProps) => {
    return(
        <CardBoxWrapper>
            <span></span>
            {sources.map((source, index) => (
                <img src={source} key={index} />
            ))}
        </CardBoxWrapper>
    );
}