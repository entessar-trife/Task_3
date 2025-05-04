import { HistoryCardData } from "../../Data/HistoryCardData"
import HistoryCardComponent from "../HistoryCardComponent/HistoryCardComponent"
import TitleComponent from "../TitleComponent/TitleComponent"
import "./HistorySection.css"

function HistorySection() {
  return (
    <>
      <section className="px-162 pb-200">
        <TitleComponent
          txt="Our Progressive Journey"
          title="Our History"
          desc="Founded with a passion for early education 
                in 2005, our kindergarten school boasts a rich 
                history of empowering young learners to reach their 
                potential through innovative teaching methods 
                and a supportive learning environment"
        />
        <div className='historyCards border box-shadow' data-aos="zoom-in" >
          {HistoryCardData.map((card, index) => {
            return (
              <HistoryCardComponent
                key={index}
                year={card.year}
                title={card.title}
                desc={card.desc}
              />
            )
          })}
        </div>

      </section>

    </>
  )
}

export default HistorySection