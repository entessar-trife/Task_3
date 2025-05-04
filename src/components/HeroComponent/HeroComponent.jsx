import CountUp from "react-countup"
import "./HeroComponent.css"

function HeroComponent({ heroImg, heroDesc }) {
  return (
    <>
      <section className="heroComponent pb-200 px-162" data-aos="zoom-in">
        <img src={heroImg} alt="hero image" />
        <div className="rightSide">
          <span className="title"> Welcome to Little Learners Academy </span>
          <h2> Where Young Minds Blossom and
            <span> Dreams Take Flight. </span>
          </h2>
          <p className="fs-20"> {heroDesc} </p>
          <div className="heroCount border">
            <div className="counter">
              <div className="count">
                <span> + </span>
                <CountUp
                  start={0}
                  end={7000}
                  duration={3}
                  formattingFn={(val) => Math.floor(val).toString()}
                />
              </div>
              <span> Students Passed Out </span>
            </div>
            <div className="counter">
              <div className="count">
                <span> + </span>
                <CountUp
                  start={0}
                  end={37}
                  duration={3}
                />
              </div>
              <span> Awards & Recognitions </span>
            </div>
            <div className="counter">
              <div className="count">
                <span> + </span>
                <CountUp
                  start={0}
                  end={15}
                  duration={3}
                />
              </div>
              <span> Experience Educators </span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HeroComponent