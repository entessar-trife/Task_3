import { TestimonialsData } from "../../Data/TestimonialsCardData"
import CardComponent from "../CardComponent/CardComponent"
import TitleComponent from "../TitleComponent/TitleComponent"
import "./TestimonialsSection.css"
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { useEffect, useState } from "react"

function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 992);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const cardsPerSlide = isMobile ? 1 : 3;
  const totalSlides = Math.ceil(TestimonialsData.length / cardsPerSlide);
  const start = index * cardsPerSlide;
  const end = start + cardsPerSlide;
  const currentCards = TestimonialsData.slice(start, end);

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
      <section className="testimonialsSection pb-200 px-162">
        <TitleComponent
          txt="Their Happy Words 🤗"
          title="Our Testimonials"
          desc="Our testimonials are heartfelt reflections of the 
          nurturing environment we provide, 
          where children flourish both academically and emotionally"
        />
        <div className="slider">

          {!isMobile &&
            <button className="border" onClick={goToPrevious} >
              <FaArrowLeftLong />
            </button>
          }

          {currentCards.map((e, idx) => (
            <CardComponent
              key={idx}
              showImg={e.showImg}
              imgSrc={e.imgSrc}
              title={e.title}
              showStar={e.showStar}
              desc={e.desc}
            />
          ))}


          {!isMobile &&
            <button className="border" onClick={goToNext} >
              <FaArrowRightLong />
            </button>
          }

          {isMobile &&
            <div className="mobileBtns">
              <button className="border" onClick={goToPrevious}>
                <FaArrowLeftLong />
              </button>
              <button className="border" onClick={goToNext}>
                <FaArrowRightLong />
              </button>
            </div>
          }
        </div>
      </section>
    </>
  )
}

export default TestimonialsSection
