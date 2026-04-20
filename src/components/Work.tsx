import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "PEIP: Electoral Intelligence Platform",
    category: "Full-Stack Decision Intelligence System",
    tools: "React.js, Node.js, MongoDB, Framer Motion, Chart.js",
    link: "https://predictive-electoral-intelligence-p.vercel.app/",
    image: "/images/peip_preview.png"
  },
  {
    title: "AEGIS-IV: Tactical Fusion Dashboard",
    category: "Real-time GEOINT & Intelligence Fusion",
    tools: "React.js, Node.js, Leaflet.js, Socket.io, Amazon S3",
    link: "https://fusion-dashboard-beta.vercel.app",
    image: "/images/aegis_preview.png"
  },
  {
    title: "Hail! Mogambo Platform",
    category: "Entertainment Booking Website",
    tools: "React.js, Node.js, Express.js, Web Technologies",
    link: "https://hailmogambo.in/",
    image: "/images/hailmogambo_preview.png"
  },
  {
    title: "Full-Stack Ride Booking App",
    category: "Real-time Trip Booking",
    tools: "React.js, Node.js, Express.js, MongoDB, Socket.io",
    link: "https://github.com/Ayushjha1622/Uber-Clone",
  },
  {
    title: "Helpdesk Ticketing System",
    category: "Workflow Automation",
    tools: "React.js, Tailwind CSS, Node.js, MongoDB",
    link: "https://github.com/Ayushjha1622/Projects/tree/main/HelpDesk",
  },
  {
    title: "AI Interview Strategy Planner",
    category: "AI SaaS Platform",
    tools: "Node.js, Express.js, Puppeteer, AI Services",
    link: "https://github.com/Ayushjha1622/GenAI-Project",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage link={project.link} alt={project.title} image={project.image} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
