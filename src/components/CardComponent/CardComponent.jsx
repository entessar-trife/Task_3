import "./CardComponent.css"
import { FaStar, FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function CardComponent({ imgFirst, showImg, imgSrc, title, showStar, desc, showBtn }) {
  return (
    <>
      <div className='cardComponent border box-shadow' data-aos="flip-right">
        <div className='cardTitle'>
          {imgFirst ?
            <>
              <h3> {title} </h3>
              {showImg &&
                <img src={imgSrc}
                  className='border'
                  alt="icon" />}
            </>
            :
            <>
              {showImg &&
                <img src={imgSrc}
                  className='border'
                  alt="icon" />}
              <h3> {title} </h3>
            </>
          }
        </div>
        {showStar &&
          <div className='stars'>
            {[...Array(5)].map((index) =>
              (<FaStar key={index} />))
            }
          </div>}
        <p className='fs-20'> {desc} </p>
        {showBtn &&
          <button className='border fs-20'>
            <Link to="/">
              Learn More <FaArrowRightLong />
            </Link>
          </button>
        }
      </div>
    </>
  )
}

export default CardComponent