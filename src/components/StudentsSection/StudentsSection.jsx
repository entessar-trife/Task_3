import { StudentsCardData } from "../../Data/StudentsCardData"
import StudentsCardComponent from "../StudentsCardComponent/StudentsCardComponent"
import TitleComponent from "../TitleComponent/TitleComponent"
import "./StudentsSection.css"

function StudentsSection() {
  return (
    <>
      <section className="px-162 pb-200">
        <TitleComponent
          txt="Our Features"
          title="What Students Learn"
          desc="At Little Learners Academy, 
                we strive to cultivate a love for learning and equip 
                children with essential skills for their future success. 
                Our academic programs cover a wide range of subjects, 
                allowing students to develop a strong foundation and discover 
                their interests.Some key areas of learning include"
        />

        <div className="studentsCards">
          {StudentsCardData.map((e, index) => {
            return (
              <StudentsCardComponent
                key={index}
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

export default StudentsSection