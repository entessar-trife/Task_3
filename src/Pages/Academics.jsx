import FeaturesSection from '../components/FeaturesSection/FeaturesSection'
import GallerySection from '../components/GallerySection/GallerySection'
import HeroComponent2 from '../components/HeroComponent2/HeroComponent2'
import StudentsSection from '../components/StudentsSection/StudentsSection'

function Academics() {
  return (
    <>
      <HeroComponent2
        txt="Academics"
        title="Nurturing Young Minds for Success"
        desc="Welcome to our Academics page, where we take pride in providing a comprehensive and stimulating educational experience for your child. Our kindergarten school's academic program is thoughtfully designed to foster a love for learning while building a strong foundation of essential skills and knowledge. From language arts and mathematics to science and social studies, our curriculum is carefully crafted to spark curiosity and encourage active exploration."
      />
      <FeaturesSection />
      <StudentsSection />
      <GallerySection />
    </>
  )
}

export default Academics