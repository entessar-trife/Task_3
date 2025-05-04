import { TeamMembersCardData } from "../../Data/TeamMembersCardData"
import TeamMemberCard from "../TeamMemberCard/TeamMemberCard"
import TitleComponent from "../TitleComponent/TitleComponent"
import "./TeamMembersSection.css"

function TeamMembersSection() {
  return (
    <>
      <section className="teamMembersSection px-162 pb-200">
        <TitleComponent
          txt="Our Teachers With Experties"
          title="Our Team Members"
          desc="At Little Learners Academy, 
          our teaching team is the heart of our educational journey. 
          We take great pride in employing highly qualified and 
          passionate educators who possess a deep understanding 
          of early childhood development. 
          Our teachers create a warm and engaging atmosphere, 
          encouraging curiosity, instilling confidence, 
          and fostering a love for learning."
        />
        <div className="teamMembersCards">
          {TeamMembersCardData.map((e, index) => {
            return (
              <TeamMemberCard
                key={index}
                imgSrc={e.imgSrc}
                memberName={e.memberName}
                Qualification={e.Qualification}
                desc={e.desc}
              />
            )
          })}
        </div>
      </section>
    </>
  )
}

export default TeamMembersSection