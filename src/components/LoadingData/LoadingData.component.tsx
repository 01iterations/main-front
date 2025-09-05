// import LogoVideo from '../../assets/home/sample.mp4'
import HighLight1 from "/assets/home/Highlight-02.webp";
import HighLight2 from "/assets/home/Highlight-03.webp";
import HighLight3 from "/assets/home/Highlight-04.webp";
import HighLight4 from "/assets/home/Highlight-05.webp";
import ImageSlider from "../imageSlider/imageSlider.component";
import { LoadingContainer, LoadingDataProps } from "./LoadingData.styles";



function LoadingData({ isLoading }: LoadingDataProps) {
    return (
        <LoadingContainer isLoading={isLoading} data-testid="loading-container">
            <ImageSlider
                images={[HighLight1, HighLight2, HighLight3, HighLight4]}
            />
        </LoadingContainer>
    );
}

export default LoadingData;
