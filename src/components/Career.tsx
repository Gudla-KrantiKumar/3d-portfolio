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
                <h4>CYber security intern</h4>
                <h5>Internship</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              I am currently working as a Cyber security Intern at a startup, where I am gaining hands-on experience in building and deploying web applications.
               I am responsible for developing new features, maintaining existing code, and collaborating with the team to deliver high-quality products.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B-Tech</h4>
                <h5>KL University</h5>
              </div>
              <h3>2023–27</h3>
            </div>
            <p>
              Computer science and Engineer (june 2023 – june 2024).I am currently pursuing/completed my B.Tech in Computer science and Engineering from KL University. 
              During my B.Tech, I gained strong technical knowledge in my core subjects and developed problem-solving, teamwork, and communication skills.
              I also worked on academic projects, presentations, and practical assignments that improved my hands-on experience.
              My B.Tech has helped me build a solid foundation for starting my professional career.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Intermediate</h4>
                <h5>Tirumala junior college</h5>
              </div>
              <h3>2021–23</h3>
            </div>
            <p>
              june 2021 – june 2023. I completed my Intermediate in the MPC stream 
              (Mathematics, Physics, Chemistry) from [College Name], Andhra Pradesh. 
              During this period, I developed strong analytical and problem-solving skills. 
              I focused mainly on mathematics and science subjects, 
              which helped build my foundation for engineering studies
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Schooling</h4>
                <h5>Ravindra Bharathi school</h5>
              </div>
              <h3>2010-20</h3>
            </div>
            <p>
              I completed my schooling from Ravindra Bharathi School . During my school years, I developed a strong academic 
              foundation and learned important values such as discipline, teamwork, and time management. 
              My schooling played an important role in shaping my communication skills and overall personality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
