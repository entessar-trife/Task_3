import "./TitleComponent.css"

function TitleComponent({ txt, title, desc }) {
  return (
    <>
      <div className='titleComponent' data-aos="zoom-in">
        <div>
          <div className='smallTitle'> {txt} </div>
          <h2> {title} </h2>
        </div>
        <p className='fs-20'> {desc} </p>
      </div>
    </>
  )
}

export default TitleComponent