import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelance Web Developer</h4>
                <h5>hailmogambo.in</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Designed and developed responsive, modern UI using React.js and Next.js, ensuring optimal user experience across devices. Collaborated with backend developers to integrate APIs, including payment gateway interfaces.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in Computer Science and Engineering</h4>
                <h5>Lovely Professional University</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Pursuing Bachelor of Technology with a CGPA of 6.7. Focused on Data Structures and Algorithms, DBMS, Operating Systems, Computer Networks, OOPS, and Cloud Computing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
