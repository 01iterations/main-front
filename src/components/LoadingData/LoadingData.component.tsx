// import LogoVideo from '../../assets/home/sample.mp4'
import HighLight1 from "/assets/home/Highlight-02.png";
import HighLight2 from "/assets/home/Highlight-03.png";
import HighLight3 from "/assets/home/Highlight-04.png";
import HighLight4 from "/assets/home/Highlight-05.png";
import ImageSlider from "../imageSlider/imageSlider.component";
import { LoadingContainer, LoadingDataProps } from "./LoadingData.styles";



function LoadingData({isLoading}: LoadingDataProps) {
    return (
        <LoadingContainer isLoading={isLoading}>
            <ImageSlider
                images={[HighLight1, HighLight2, HighLight3, HighLight4]}
            />
        </LoadingContainer>
    );
}

export default LoadingData;
