import AwardsSection from '../components/AwardsSection/AwardsSection'
import HeroComponent2 from '../components/HeroComponent2/HeroComponent2'
import HistorySection from '../components/HistorySection/HistorySection'
import MissionVisionSection from '../components/MissionVisionSection/MissionVisionSection'
import TeamMembersSection from '../components/TeamMembersSection/TeamMembersSection'

function About() {
  return (
    <>
      <HeroComponent2
        txt="Overview"
        title="Welcome to Little Learners Academy"
        desc="A leading kinder garden school dedicated to providing a nurturing and stimulating environment for young learners. With a commitment to excellence in early education, we believe in shaping curious minds and building a strong foundation for a lifelong love of learning. Our holistic approach fosters intellectual, social, emotional, and physical development, ensuring that each child reaches their full potential."
      />
      <MissionVisionSection />
      <AwardsSection />
      <HistorySection />
      <TeamMembersSection />
    </>
  )
}

export default About