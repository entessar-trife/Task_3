import "./HistoryCardComponent.css"

function HistoryCardComponent({ year, title, desc }) {
  return (
    <>
      <div className='historyCardComponent'>
        <div className="cardLine">
          <div className="line"></div>
          <div className='historyShape border box-shadow'>
            <img src="/Task_3/images/AbstractDesign(1).png" alt="card shape" />
            <h6> {year} </h6>
          </div>
        </div>
        <div className='historyContent'>
          <h6> {title} </h6>
          <p className="fs-20"> {desc} </p>
        </div>
      </div>
    </>
  )
}

export default HistoryCardComponent