import { FeaturesCardData } from "../../Data/FeaturesCardData"
import ContentCardComponent from "../ContentCardComponent/ContentCardComponent"
import TitleComponent from "../TitleComponent/TitleComponent"
import "./FeaturesSection.css"

function FeaturesSection() {
  return (
    <>
      <section className="px-162 pb-200">
        <TitleComponent
          txt="Our Features"
          title="Our special Features"
          desc="Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!"
        />

        <div className='featuresCards'>
          {FeaturesCardData.map((e, index) => {
            return (
              <ContentCardComponent
                key={index}
                showImg={e.showImg}
                imgSrc={e.imgSrc}
                title={e.title}
                desc={e.desc}
              />
            )
          })
          }
        </div>
      </section>
    </>
  )
}

export default FeaturesSection