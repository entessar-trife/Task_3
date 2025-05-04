import "./StudentsCardComponent.css"

function StudentsCardComponent({ imgSrc, title, desc }) {
  return (
    <div className="studentsCardComponent border box-shadow" data-aos="flip-right">
      <div className="studentsCardContent">
        <img src={imgSrc} alt="card image" />
        <h6> {title} </h6>
        <p className="fs-20"> {desc} </p>
        <div className="cardShape">
        </div>
      </div>
    </div>
  )
}

export default StudentsCardComponent