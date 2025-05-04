import "./TeamMemberCard.css"
import { MdEmail } from "react-icons/md";

function TeamMemberCard({ imgSrc, memberName, Qualification, desc }) {
  return (
    <>
      <div className="teamMemberCard border box-shadow" data-aos="flip-right">
        <div className="memberCardTitle">
          <div className="memberName">
            <img src={imgSrc} alt="member image" />
            <h4> {memberName} </h4>
          </div>
          <MdEmail className="border" />
        </div>
        <div className="memberCardDesc border">
          <h5> {Qualification} </h5>
          <p className="fs-20"> {desc} </p>
        </div>
      </div>
    </>
  )
}

export default TeamMemberCard