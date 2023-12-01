// import LogoVideo from '../../assets/home/sample.mp4'
// import HighLight1 from "/assets/home/Highlight-02.png";
// import HighLight2 from "/assets/home/Highlight-03.png";
// import HighLight3 from "/assets/home/Highlight-04.png";
// import HighLight4 from "/assets/home/Highlight-05.png";
import HighLight1 from "/assets/home/01.jpg";
import HighLight2 from "/assets/home/02.jpg";
import HighLight3 from "/assets/home/03.jpg";
import HighLight4 from "/assets/home/04.jpg";
import HomeNavLogo from "/assets/home/home-nav-logo.png";

import ImageSlider from "../../components/imageSlider/imageSlider.component";
import {
  AnimationSection,
  HomeContainer,
  HomeNav,
  Logo,
  NavItems,
} from "./home.styles";
import { useNavigate } from "react-router-dom";
import useLoading from "../../hooks/useLoading.hook";
import LoadingData from "../../components/LoadingData/LoadingData.component";

// const ImgTest = styled.img`
//     width: 100vw;
//     height: 100vh;
//     border: 1px solid red;
// `;

function Home() {
    const navigate = useNavigate();
    const loading = useLoading(4000);
    if(loading){
        return <LoadingData isLoading={loading} />
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
