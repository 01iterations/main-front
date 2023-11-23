import styled from "styled-components";

export const ImageSliderContainer = styled.div`

background-color: black;

width: 100%;
height: 100%;
/* border:1px solid red; */
display: flex;
justify-content: center;
img{
    /* width: 100%; */
    /* height: 100%; */
    
}


`

// export const sizes = {
//     xsmall: "320px",
//     small: "480px",
//     medium: "768px",
//     large: "1024px",
//     xlarge: "1200px",
//     xxlarge: "1440px",
// };

// export const devices = {
//     xsmall: `(max-width: ${sizes.xsmall})`,
//     small: `(min-width: ${sizes.xsmall}) and (max-width: ${sizes.small})`,
//     medium: `(min-width: ${sizes.small}) and (max-width: ${sizes.medium})`,
//     large: `(min-width: ${sizes.medium}) and (max-width: ${sizes.large})`,
//     xlarge: `(min-width: ${sizes.large}) and (max-width: ${sizes.xlarge})`,
//     xxlarge: `(min-width: ${sizes.xlarge}) and (max-width: ${sizes.xxlarge})`,
// };



// export const ImageSliderContainer = styled.div`
//     cursor: url("../../../public/icons/01itersWhite.png"), auto;
//     width: 100%;
//     height: 100vh;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     background-color: #000;

//     & img {
//         /* border: 1px solid white; */
//         object-fit: contain;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         margin-top: -50px;
//         /* width: 100%; */
//         @media ${devices.xxlarge}{
//             transform: scale(0.8);
//         }
//         @media ${devices.xlarge}{
//             transform: scale(0.6);
//         }
//         @media ${devices.large}{
//             transform: scale(0.55);
//         }
//         @media ${devices.small} {
//             transform: scale(0.4);
//         }
//         /* height: 100%; */
//     }
// `;
