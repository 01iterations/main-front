import Nav from "../../components/Nav/nav.component";
// import LogoVideo from '../../assets/home/sample.mp4'
import HighLight1 from "../../assets/home/Highlight-02.png";
import HighLight2 from "../../assets/home/Highlight-03.png";
import HighLight3 from "../../assets/home/Highlight-04.png";
import HighLight4 from "../../assets/home/Highlight-05.png";
import ImageSlider from "../../components/imageSlider/imageSlider.component";

// const ImgTest = styled.img`
//     width: 100vw;
//     height: 100vh;
//     border: 1px solid red;
// `;

function Home() {
    return (
        <>
            <Nav />
            <ImageSlider
                images={[HighLight1, HighLight2, HighLight3, HighLight4]}
            />
        </>
    );
}

export default Home;
