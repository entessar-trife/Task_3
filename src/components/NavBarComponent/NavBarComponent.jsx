import { Link, NavLink } from "react-router-dom"
import "./NavBarComponent.css"
import { HiBars3BottomRight } from "react-icons/hi2";
import { NavLinks } from "../../Data/NavLinksData";
import { useEffect, useState } from "react"
import { MdClose } from "react-icons/md";

function NavBarComponent({ logo }) {
  const [menuOpen, setMenuOpen] = useState(false)
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
      <nav className={`border ${scrolling ? "scrolled" : ""}`}>
        <Link>
          <img className={`${scrolling ? "scrolled" : ""}`} src={logo} alt="Logo" />
        </Link>

        <div className={`responsiveNav ${menuOpen ? "open" : ""}`}>
          {
            NavLinks.map((e, index) => {
              return (
                <NavLink
                  key={index}
                  to={e.link}
                  onClick={() => setMenuOpen(!open)}
                  className={({ isActive }) =>
                    `navLink fs-20 ${isActive ? "activeLink" : ""}`}>
                  {e.title}
                </NavLink>
              )
            })
          }
          <MdClose
            className="closeNavBtn"
            onClick={() => setMenuOpen(!menuOpen)} />
        </div>
        <button className="openNavBtn">
          <HiBars3BottomRight
            onClick={() => setMenuOpen(!menuOpen)} />
        </button>
      </nav>
    </>
  )
}

export default NavBarComponent