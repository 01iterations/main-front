import { useEffect, useState } from "react";
import { ImageSliderContainer } from "./imgSlider.styles";
type PropsType = {
    images: string[];
};

// function wait(ms: number): void {
//     const start = Date.now();
//     let now = start;
//     while (now - start < ms) {
//         now = Date.now();
//     }
// }

export function ImageSlider({ images }: PropsType) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        console.log({ currentImageIndex });
        console.log({ currentImg: images[currentImageIndex] });
    }, [currentImageIndex]);

    useEffect(() => {
        console.log("HEY");
        console.log(images);
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => {
                const nextIndex = (prevIndex + 1) % images.length;
                if (nextIndex === images.length) {
                    //   clearInterval(interval);
                    // wait(1500);
                    //   setCurrentImageIndex(0);
                }
                return nextIndex;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [images]);

    return (
        <>
            <ImageSliderContainer>
                <img
                    src={images[currentImageIndex]}
                    alt="current slide image"
                />
            </ImageSliderContainer>
        </>
    );
}

export default ImageSlider;
