import { useEffect, useState } from "react";
import TitleComponent from "../TitleComponent/TitleComponent"
import "./AwardsSection.css"
import ContentCardComponent from "../ContentCardComponent/ContentCardComponent";
import { AwardsCardData } from "../../Data/AwardsCardData";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

function AwardsSection() {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 992);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const cardsPerSlide = isMobile ? 1 : 3;
  const totalSlides = Math.ceil(AwardsCardData.length / cardsPerSlide);
  const start = index * cardsPerSlide;
  const end = start + cardsPerSlide;
  const currentCards = AwardsCardData.slice(start, end);

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
      <section className="awardsSection px-162 pb-200">
        <TitleComponent
          txt="Our Achievements"
          title="Our Awards and Recognitions"
          desc="Little Learners Academy takes pride in our commitment to delivering high-quality education and outstanding student experiences. We are honored to have received various awards and recognitions for our dedication to early childhood education. These accolades reflect our team's relentless efforts in creating an exceptional learning environment for our students."
        />

        <div className="awardsCards">
          {currentCards.map((e, index) => (
            <ContentCardComponent
              key={index}
              imgSrc={e.imgSrc}
              title={e.title}
              desc={e.desc}
            />
          ))}
        </div>

        <div className="moreAwards">
          <span> 8 More Awards </span>
          <div className="awardsSectionBtns">
            <button className="border" onClick={goToPrevious}>
              <FaArrowLeftLong />
            </button>
            <button className="border" onClick={goToNext}>
              <FaArrowRightLong />
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default AwardsSection