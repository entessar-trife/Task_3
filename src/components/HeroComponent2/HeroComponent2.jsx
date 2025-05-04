import TitleComponent from "../TitleComponent/TitleComponent"
import "./HeroComponent2.css"

function HeroComponent2({ txt, title, desc }) {
  return (
    <>
      <section className="heroSection" data-aos="zoom-in">
        <div className="heroComponent2 border">
          <img src="/Task_3/images/AbstractDesign.png" alt="hero image" />
          <TitleComponent
            txt={txt}
            title={title}
            desc={desc}
          />
        </div>
      </section>
    </>
  )
}

export default HeroComponent2