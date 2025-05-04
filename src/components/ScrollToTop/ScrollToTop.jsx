import React, { useState } from "react";
import "./ScrollToTop.css";
import { IoMdArrowUp } from "react-icons/io";

export default function ScrollToTop() {
  // State to manage the visibility of the button
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  window.onscroll = handleScroll;

  // Function to scroll back to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`scrollToTop ${isVisible ? "ScrollShow" : ""}`}
    >
      <IoMdArrowUp />
    </button>
  );
}
