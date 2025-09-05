// import LogoVideo from '../../assets/home/sample.mp4'
// import HighLight1 from "/assets/home/Highlight-02.webp";
// import HighLight2 from "/assets/home/Highlight-03.webp";
// import HighLight3 from "/assets/home/Highlight-04.webp";
// import HighLight4 from "/assets/home/Highlight-05.webp";
const HighLight1 = "https://res.cloudinary.com/dwfgm5onf/image/upload/v1757088332/01iterations/assets_home_01.jpg";
const HighLight2 = "https://res.cloudinary.com/dwfgm5onf/image/upload/v1757088336/01iterations/assets_home_02.jpg";
const HighLight3 = "https://res.cloudinary.com/dwfgm5onf/image/upload/v1757088339/01iterations/assets_home_03.jpg";
const HighLight4 = "https://res.cloudinary.com/dwfgm5onf/image/upload/v1757088343/01iterations/assets_home_04.jpg";
const HomeNavLogo = "https://res.cloudinary.com/dwfgm5onf/image/upload/v1757088346/01iterations/assets_home_home-nav-logo.png";

import ImageSlider from "../../components/imageSlider/imageSlider.component";
import {
  AnimationSection,
  HomeContainer,
  HomeNav,
  Logo,
  NavItems,
} from "./home.styles";
import { useNavigate } from "react-router-dom";
import { useHomeLoading } from "../../hooks/useLoading.hook";
import LoadingData from "../../components/LoadingData/LoadingData.component";

// const ImgTest = styled.img`
//     width: 100vw;
//     height: 100vh;
//     border: 1px solid red;
// `;

function Home() {
  const navigate = useNavigate();

  // Define all image URLs that need to load before showing the page
  const imageUrls = [
    HighLight1,
    HighLight2,
    HighLight3,
    HighLight4,
    HomeNavLogo
  ];

  const loading = useHomeLoading(imageUrls, 3000);

  if (loading) {
    return <LoadingData isLoading={loading} />;
  }
  return (
    <HomeContainer>
      <AnimationSection>
        <ImageSlider
          images={[HighLight1, HighLight2, HighLight3, HighLight4]}
        />
      </AnimationSection>
      <HomeNav>
        <Logo src={HomeNavLogo} />
        <NavItems>
          <h3 onClick={() => navigate("/")}>Home</h3>
          <h3 onClick={() => navigate("/projects")}>Projects</h3>
          <h3 onClick={() => navigate("/courses")}>Courses</h3>
          <h3 onClick={() => navigate("/about")}>About</h3>
          {/* <h3 onClick={() => navigate("/")}>Contact</h3> */}
        </NavItems>
      </HomeNav>
    </HomeContainer>
  );
}

export default Home;
