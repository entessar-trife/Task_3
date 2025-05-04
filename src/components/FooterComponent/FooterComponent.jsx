import { Link } from "react-router-dom"
import "./FooterComponent.css"
import { bottomLinks, contactLinks, FooterData, footerIcons } from "../../Data/FooterData";


function FooterComponent({ logo, txt }) {

  return (
    <>
      <footer className="border box-shadow">
        <div className="topFooter" data-aos="fade-up">
          <div className="contactInfo">
            <img src={logo} alt="logo" />
            <p className="fs-20"> {txt} </p>
            <div className="contactLinks">
              {
                contactLinks.map((e, index) => {
                  return (
                    <Link key={index} to="/">
                      <span className="footerIcon border"> {e.icon} </span>
                      <span className="fs-20"> {e.link} </span>
                    </Link>
                  )
                })
              }
            </div>
          </div>

          <div className="footerLinks">
            {FooterData.map((e, index) => (
              <div key={index}>
                <h4> {e.title} </h4>
                <ul>
                  {e.links.map((link, id) => (
                    <li key={id}>
                      <Link to="/" className="fs-20">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        <div className="bottomFooter" data-aos="fade-up">
          <div className="bottomFooterLinks">
            {bottomLinks.map((link, index) => (
              <Link to={link.path}> {link.name} </Link>
            ))}
          </div>
          <div className="footerIcons" >
            {footerIcons.map((icon, index) => (
              <Link to={icon.path} className="border">
                {icon.iconName}
              </Link>
            ))}
          </div>
        </div>

        <div className="copyRight fs-20" data-aos="fade-up">
          Copyright © [2023] Little Learners Academy.
          All rights reserved.
        </div>
      </footer>

    </>
  )
}

export default FooterComponent