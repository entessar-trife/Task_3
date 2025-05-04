import { useState } from "react";
import "./FAQCardComponent.css"
import { FaPlus, FaMinus } from "react-icons/fa6";

function FAQCardComponent({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false)
  const hideContent = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <div className={`FAQCardComponent border ${isOpen ? "open" : ""}`} data-aos="fade-up">
        <div className="question">
          <h3> {question} </h3>
          {isOpen &&
            <FaMinus
              className="border"
              onClick={hideContent}
            />
          }
          {!isOpen &&
            <FaPlus
              className="border"
              onClick={hideContent}
            />
          }
        </div>
        {isOpen &&
          <p className="answer fs-20"> {answer}
          </p>}
      </div>
    </>
  )
}

export default FAQCardComponent