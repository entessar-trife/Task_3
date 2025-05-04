import { MdEmail } from "react-icons/md";
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

export const contactLinks = [
  { icon: <MdEmail />, link: "hello@littlelearners.com" },
  { icon: <FaPhone />, link: "+91 91813 23 2309" },
  { icon: <FaLocationDot />, link: "Somewhere in the World" },
]

export const FooterData = [
  {
    title: "Home",
    links: ["Features", "Our Testimonials", "FAQ"]
  },
  {
    title: "About Us",
    links: ["Our Mission", "Our Vision",
      "Awards and Recognitions", "History", "Teachers"]
  },
  {
    title: "Academics",
    links: ["Special Features", "Gallery"]
  },
  {
    title: "Contact Us",
    links: ["Information", "Map & Direction"]
  }
]


export const bottomLinks = [
  { name: "Terms of Service", path: "/" },
  { name: "Privacy Policy", path: "/" },
  { name: "Cookie Policy", path: "/" }
]
export const footerIcons = [
  { iconName: <FaFacebook />, path: "/" },
  { iconName: <FaTwitter />, path: "/" },
  { iconName: <FaLinkedin />, path: "/" }
]