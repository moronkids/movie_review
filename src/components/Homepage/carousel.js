import React, {useState} from "react";
import IconCarousel from 'assets/images/carousel.svg'
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
const items = [
  {
    src: `${IconCarousel}`,
    // altText: "Slide 1",
    // caption: "Slide 1",
    width: "100%",
    height: "auto",
  },
  {
    src: `${IconCarousel}`,
    // altText: "Slide 1",
    // caption: "Slide 1",
    width: "100%",
    height: "auto",
  },
  {
    // src: `${IconCarousel}`,
    src: `${IconCarousel}`,
    altText: "Slide 1",
    // altText: "Slide 1",
    // caption: "Slide 1",
    width: "100%",
    height: "auto",
  },
];
const CarouselLayout = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
        className="position-relative"
      >
        <img
          className="mx-auto cover"
          src={item.src}
          alt={item.altText}
          width={item.width}
          height={item.height}
        />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });
  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
};

export default CarouselLayout;
