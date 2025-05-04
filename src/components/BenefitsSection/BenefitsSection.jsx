import "./BenefitsSection.css"
import TitleComponent from '../TitleComponent/TitleComponent'
import { BenefitsCardData } from '../../Data/BenefitsCardData'
import ContentCardComponent from "../ContentCardComponent/ContentCardComponent"

function BenefitsSection() {
  return (
    <>
      <section className='benefitsSection pb-200 px-162'>
        <TitleComponent
          txt="Children Deserve Bright Future"
          title="Our Benefits"
          desc="With a dedicated team of
                experienced educators, state-of-the-art facilities, 
                and a comprehensive curriculum, we aim to lay a strong 
                foundation for your child's future."
        />
        <div className='benefitsCards'>
          {
            BenefitsCardData.map((e, index) => {
              return (
                <ContentCardComponent
                  key={index}
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

export default BenefitsSection