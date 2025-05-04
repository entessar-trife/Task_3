import BenefitsSection from "../components/BenefitsSection/BenefitsSection"
import FAQSection from "../components/FAQSection/FAQSection"
import HeroComponent from "../components/HeroComponent/HeroComponent"
import NavigateSection from "../components/NavigateSection/NavigateSection"
import TestimonialsSection from "../components/TestimonialsSection/TestimonialsSection"

function Home() {
  return (
    <>
      <HeroComponent
        heroImg="/Task_3/images/heroImage.png"
        heroDesc="Our kinder garden school provides a nurturing and
            stimulating environment, fostering a love for
            learning that lasts a lifetime. Join us as we embark on an
            exciting educational journey together!"
      />
      <BenefitsSection />
      <TestimonialsSection />
      <FAQSection />
      <NavigateSection />
    </>
  )
}

export default Home