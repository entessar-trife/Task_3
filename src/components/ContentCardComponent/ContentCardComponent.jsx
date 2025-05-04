import "./ContentCardComponent.css"

function ContentCardComponent({ imgSrc, title, desc }) {
  return (
    <>
      <div className='contentCardComponent border box-shadow' data-aos="flip-right">
        <div className='contentCardTitle'>
          <img src={imgSrc} className='border' alt="icon" />
          <h3> {title} </h3>
        </div>
        <p className='fs-20'> {desc} </p>
      </div>
    </>
  )
}

export default ContentCardComponent