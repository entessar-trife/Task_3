import { useEffect, useState } from "react";
import "./BannerComponent.css"
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

function BannerComponent() {
  const [scrolling, setScrolling] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [])

  return (
    <>
      <div className={`banner border ${scrolling ? "scrolled" : ""}`}>
        <Link className="fs-20">
          Admission is Open, Grab your seat now
          <FaArrowRightLong />
        </Link>
        <img src="/Task_3/images/banner/Design(1).png" className="design_1" alt="Design(1)" />
        <img src="/Task_3/images/banner/Design(2).png" className="design_2" alt="Design(2)" />
        <img src="/Task_3/images/banner/Design(3).png" className="design_3" alt="Design(3)" />
        <img src="/Task_3/images/banner/Design(4).png" className="design_4" alt="Design(4)" />
      </div>
    </>
  )
}

export default BannerComponent