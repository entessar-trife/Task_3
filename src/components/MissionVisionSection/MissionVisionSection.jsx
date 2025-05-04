import { MissionVisionCardData } from "../../Data/MissionVisionCardData"
import CardComponent from "../CardComponent/CardComponent"
import TitleComponent from "../TitleComponent/TitleComponent"
import "./MissionVisionSection.css"

function MissionVisionSection() {
  return (
    <>
      <section className="missionVisionSection px-162 pb-200">
        <TitleComponent
          txt="Mission & Visions"
          title="Our Mission & Visions"
          desc="We are here to provide a nurturing and inclusive environment where young minds can thrive, fostering a love for learning and personal growth."
        />
        <div className="MissionVisionCards">
          {MissionVisionCardData.map((e, index) => {
            return (
              <CardComponent
                key={index}
                imgFirst={e.imgFirst}
                showImg={e.showImg}
                imgSrc={e.imgSrc}
                title={e.title}
                desc={e.desc}
              />
            )
          })}
        </div>
      </section>
    </>
  )
}

export default MissionVisionSection