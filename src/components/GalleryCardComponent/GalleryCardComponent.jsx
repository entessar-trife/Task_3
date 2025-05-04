import { useEffect, useState } from "react";
import "./GalleryCardComponent.css"
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

function GalleryCardComponent({ title, desc, images }) {
  const [index, setIndex] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(getCardsPerSlide());

  function getCardsPerSlide() {
    const width = window.innerWidth;
    if (width <= 768) return 1;
    if (width <= 992) return 2;
    return 4;
  }

  useEffect(() => {
    const handleResize = () => {
      setCardsPerSlide(getCardsPerSlide());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = Math.ceil(images.length / cardsPerSlide);
  const start = index * cardsPerSlide;
  const end = start + cardsPerSlide;

  let currentCards = images.slice(start, end);

  const goToPrevious = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setIndex((prevIndex) =>
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <div className="galleryCardComponent border box-shadow" data-aos="fade-up">
        <div className="gallerySectionImages">
          {currentCards.map((img, idx) => {
            return (
              <img key={idx} src={img} alt={`${title} image`} />
            )
          })}
        </div>
        <div>
          <div className="galleryCardTitle">
            <h6> {title} </h6>
            <div className="gallerySectionBtns">
              <button className="border" onClick={goToPrevious}>
                <FaArrowLeftLong />
              </button>
              <button className="border" onClick={goToNext}>
                <FaArrowRightLong />
              </button>
            </div>
          </div>
          <p> {desc} </p>
        </div>
      </div>
    </>
  )
}

export default GalleryCardComponent