import { FAQCardData } from "../../Data/FAQCardData"
import FAQCardComponent from "../FAQCardComponent/FAQCardComponent"
import TitleComponent from "../TitleComponent/TitleComponent"
import "./FAQSection.css"

function FAQSection() {
  return (
    <>
      <section className="px-162 pb-200">
        <TitleComponent
          txt="Solutions For The Doubts"
          title="Frequently Asked Questions"
          desc="Find all the essential information you need 
          in our FAQ section, designed to address the most 
          frequently asked questions and help you make informed 
          decisions for your child's education."
        />
        <div className="FAQCards">
          <div className="cards">
            {FAQCardData.slice(0, 4).map((e, index) => {
              return (
                <FAQCardComponent
                  key={index}
                  question={e.question}
                  answer={e.answer} />
              )
            })}
          </div>
          <div className="cards">
            {FAQCardData.slice(4, 8).map((e, index) => {
              return (
                <FAQCardComponent
                  key={index}
                  question={e.question}
                  answer={e.answer} />
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default FAQSection