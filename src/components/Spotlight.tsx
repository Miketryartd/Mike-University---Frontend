import { useState } from "react";
import img_1 from "../assets/images/image_1.png";
import img_2 from "../assets/images/image_2.png";
import img_3 from "../assets/images/image_3.png";
import img_4 from "../assets/images/image_4.png";
import img_5 from "../assets/images/image_5.png";

export default function Spotlight() {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    { src: img_1, alt: "Computer Lab", caption: "State-of-the-Art Computer Laboratories" },
    { src: img_2, alt: "Library", caption: "Comprehensive Academic Library & Study Hub" },
    { src: img_3, alt: "Lesson", caption: "Interactive Lectures & World-Class Faculty" },
    { src: img_4, alt: "Outside", caption: "Spacious & Modern Campus Architecture" },
    { src: img_5, alt: "Gym Seminar", caption: "Athletic Facilities & Student Wellness Center" }
  ];

  const handlePrev = () => {
    setCurrentImage((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="flex items-center justify-center p-4 bg-gray-100">
      <div className="relative w-full max-w-3xl overflow-hidden rounded-2xl ">
        <div className="relative h-96 w-full overflow-hidden">
          <img
            loading="lazy"
            className="h-full w-full object-cover transition-all duration-500"
            src={images[currentImage].src}
            alt={images[currentImage].alt}
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 text-white">
            <p className="text-lg font-semibold tracking-wide drop-shadow-md">
              {images[currentImage].caption}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-gray-200/20 px-6 py-4">
          <div className="flex gap-1.5">
            {images.map((_, index) => (
              <span
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentImage ? "w-6 bg-red-600" : "w-2 bg-gray-400/50"
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="rounded-lg cursor-pointer border border-gray-300 px-4 py-2 text-sm font-medium transition hover:bg-gray-100 active:scale-95"
            >
              Prev
            </button>
            <button
              onClick={handleNext}
              className="rounded-lg bg-red-400 cursor-pointer px-4 py-2 text-sm font-medium text-white transition hover:bg-red-600 active:scale-95"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}