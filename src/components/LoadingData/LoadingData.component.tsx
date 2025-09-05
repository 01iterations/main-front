// import LogoVideo from '../../assets/home/sample.mp4'
const HighLight1 = "https://res.cloudinary.com/dwfgm5onf/image/upload/v1757088332/01iterations/assets_home_01.jpg";
const HighLight2 = "https://res.cloudinary.com/dwfgm5onf/image/upload/v1757088336/01iterations/assets_home_02.jpg";
const HighLight3 = "https://res.cloudinary.com/dwfgm5onf/image/upload/v1757088339/01iterations/assets_home_03.jpg";
const HighLight4 = "https://res.cloudinary.com/dwfgm5onf/image/upload/v1757088343/01iterations/assets_home_04.jpg";
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
