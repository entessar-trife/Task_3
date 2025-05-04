import { useState } from "react"
import { GalleryCardData } from "../../Data/GalleryCardData"
import GalleryCardComponent from "../GalleryCardComponent/GalleryCardComponent"
import TitleComponent from "../TitleComponent/TitleComponent"
import "./GallerySection.css"

function GallerySection() {
  const [activeFilter, setActiveFilter] = useState("All")

  const filters = ["All", "Classrooms", "Library", "Science Lab",
    "Computer Lab", "Garden and Nature Area"]
  const filteredCards = activeFilter === "All" ?
    GalleryCardData :
    GalleryCardData.filter(card => card.title === activeFilter)

  return (
    <>
      <section className="gallerySection px-162 pb-200">
        <TitleComponent
          txt="Our Gallery"
          title="Our Rooms Gallery"
          desc="Step into our Gallery and immerse yourself in a visual journey of cherished moments and unforgettable experiences at our kindergarten school."
        />
        <ul className="filters" data-aos="fade-up">
          {filters.map((filter, index) => {
            return (
              <li
                key={index}
                className={activeFilter == filter ? "active" : ""}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </li>
            )
          })}
        </ul>
        <div className="galleryCards">
          {filteredCards.map((card, index) => {
            return (
              <GalleryCardComponent
                key={index}
                images={card.images}
                title={card.title}
                desc={card.desc}
              />
            )
          })}
        </div>
      </section>
    </>
  )
}

export default GallerySection