import Image from 'next/image'
import Link from 'next/link'
import { FaPlus , FaBriefcase, FaEnvelope, FaWhatsapp, FaLocationArrow, FaLinkedin, FaGithub, FaBrain, FaGraduationCap, FaChessKnight} from 'react-icons/fa';





export default function Home() {
  return (
    <div id="resume">
        <header id="header">
            <div className="about">
                <div className="profile">
                    <div className="outline">
                        <img src="./img/Noman.png" alt="Muhammad Noman Aslam"/>
                    </div>
                </div>
                <div className="summary">
                    <h1>Muhammad Noman Aslam</h1>
                    <span>Web Developer</span>
                    <p>I am an experienced web developer with a focus on backend development using core PHP. With over 4 years of experience, I specialize in creating robust and efficient server-side solutions. I have a deep understanding of core PHP and can effectively handle tasks such as database management, API integrations, and server-side scripting. I am skilled in developing dynamic and responsive websites, and I have the ability to convert various file formats into functional web components. I am currently seeking new opportunities to apply my backend development skills and contribute to the success of projects as a web developer.
                    </p>
                </div>
            </div>
            <div className="info">
                <ul>
                    <li>
                        <div className="icon">
                          <FaEnvelope/>
                        </div>
                        <a href="mailto:mnomanaslam6@gmail.com">mnomanaslam6@gmail.com</a>
                    </li>
                    <li>
                        <div className="icon">
                            <FaWhatsapp />
                        </div>
                        <a href="https://wa.me/+923416902120?text=Greetings, Muhammad Noman Aslam">+923416902120</a>
                    </li>
                    <li>
                        <div className="icon">
                            <FaLocationArrow/>
                        </div>
                        <address>Lahore, Punjab Pakistan</address>
                    </li>
                    <li>
                        <div className="icon">
                           <FaLinkedin/>
                        </div>
                        <a href="https://pk.linkedin.com/in/muhammad-noman-aslam-maken-2ab81b178">Muhammad Noman Aslam</a>
                    </li>
                    <li>
                        <div className="icon">
                            <FaGithub/>
                        </div>
                        <a href="https://github.com/noman-maken">noman-maken</a>
                    </li>
                </ul>
            </div>
        </header>
        <main id="main">
            <div className="content">
                <div className="title">
                    <div className="icon">

                    < FaBriefcase/>

                    </div>
                    <h2>WORK EXPERIENCE</h2>
                </div>
              
              <div className="experience">
                <h3 className="universal-title">PHP Developer (Internship)</h3>
                <span className="universal-date">12-09-2018 to 01-04-2019</span>
                <ul className="details">
                  <li>Gained valuable experience in designing, developing, and maintaining web applications using core PHP</li>
                  <li>Prepared for a successful career in web development</li>
                </ul>
              </div>
              <div className="experience">
                <h3 className="universal-title">PHP Developer</h3>
                <span className="universal-date">03-05-2019 to 01-02-2020</span>
                <ul className="details">
                  <li>Designed and developed web applications for various clients</li>
                  <li>Wrote clean and efficient code</li>
                  <li>Integrated payment gateways</li>
                  <li>Worked collaboratively with cross-functional teams for seamless front-end and back-end integration</li>
                  <li>Stayed up-to-date with the latest industry trends and technologies</li>
                  <li>Exceeded client expectations with high-quality work</li>
                </ul>
              </div>
              <div className="experience">
                <h3 className="universal-title">PHP and WordPress Website Developer</h3>
                <span className="universal-date">03-05-2019 to 01-02-2020</span>
                <ul className="details">
                  <li>Focused on WordPress website development</li>
                  <li>Created custom themes and plugins</li>
                  <li>Utilized WordPress tools for optimal website performance</li>
                  <li>Worked on PHP-based web development projects</li>
                  <li>Created dynamic and responsive websites using MySQL and JavaScript</li>
                </ul>
              </div>
              <div className="experience">
                <h3 className="universal-title">PHP Developer</h3>
                <span className="universal-date">17-08-2021 to 10-01-2023</span>
                <ul className="details">
                  <li>Design, develop, and maintain web applications using core PHP</li>
                  <li>Integrate databases and payment gateways</li>
                  <li>Collaborate with cross-functional teams</li>
                  <li>Stay updated with the latest industry trends</li>
                  <li>Continuous improvement of skills to meet or exceed client expectations</li>
                </ul>
              </div>

              <div className="experience">
                <h3 className="universal-title">Full Stack Developer at THE VISAMTION</h3>
                <span className="universal-date">17-03-2023 to Ongoing</span>
                <ul className="details">
                <li>Designing, developing, and maintaining full-stack web applications using core PHP</li>
                <li>Integrating databases, payment gateways, and APIs</li>
                <li>Collaborating with cross-functional teams to ensure seamless integration and functionality</li>
                <li>Implementing Gmail synchronization and integration</li>
                <li>Developing and maintaining company portals</li>
                <li>Creating and customizing WordPress websites</li>
                <li>Staying updated with the latest industry trends and technologies</li>
                <li>Continuously improving skills to meet and exceed client expectations</li>

                </ul>
              </div>
            
            <br></br>
                <div className="additional-skills">
                    <div className="title">
                        <div className="icon">
                           <FaPlus />
                        </div>
                        <h2>ADITTIONAL SKILLS</h2>
                    </div>
                    <ul className="skills-list">
                    <li>jQuery</li>
                    <li>Tailwind CSS</li>
                    <li>Bootstrap</li>
                    <li>WordPress</li>
                    <li>API Integration</li>
                    <li>Payment Integration</li>
                    <li>MySQL</li>
                    <li>TypeScript</li>

                    </ul>
                </div>
            </div>
            <aside className="sidebar">
                <div className="title">
                    <div className="icon">
                        <FaBrain/>
                    </div>
                    <h2>SKILLS</h2>
                </div>
                <div className="skills">
                    <div className="html">
                        <h3 className="skill-title">HTML5</h3>
                        <div className="progress-outline">
                            <div className="progress"></div>
                        </div>
                    </div>
                    <div className="css">
                        <h3 className="skill-title">CSS3</h3>
                        <div className="progress-outline">
                            <div className="progress"></div>
                        </div>
                    </div>
                    <div className="javascript">
                        <h3 className="skill-title">JAVASCRIPT</h3>
                        <div className="progress-outline">
                            <div className="progress"></div>
                        </div>
                    </div>
                    
                    <div className="php">
                        <h3 className="skill-title">PHP</h3>
                        <div className="progress-outline">
                            <div className="progress"></div>
                        </div>
                    </div>
                   
                    <div className="sql">
                        <h3 className="skill-title">SQL</h3>
                        <div className="progress-outline">
                            <div className="progress"></div>
                        </div>
                    </div>
                    <div className="wp">
                        <h3 className="skill-title">WORDPRESS</h3>
                        <div className="progress-outline">
                            <div className="progress"></div>
                        </div>
                    </div>
                    <div className="ai">
                        <h3 className="skill-title">Artificial Intelligence</h3>
                        <div className="progress-outline">
                            <div className="progress"></div>
                        </div>
                    </div>
                    <div className="ai">
                        <h3 className="skill-title">Next JS</h3>
                        <div className="progress-outline">
                            <div className="progress"></div>
                        </div>
                    </div>
                </div>
                <div className="education">
                    <div className="title">
                        <div className="icon">
                            <FaGraduationCap/>
                        </div>
                        <h2>EDUCATION</h2>
                    </div>
                    <div className="edu-box">
                        <h3 className="universal-title">BS in Software Engineering</h3>
                        <h4 className="universal-name" data-text="(Continue)">Virtual University of Pakistan </h4>
                        <span className="universal-date">07/2019 - ONGOING (Final Semester)</span>
                    </div>
                </div>
                <div className="interest">
                    <div className="title">
                        <div className="icon">
                            <FaChessKnight/>
                        </div>
                        <h2>INTEREST</h2>
                    </div>
                    <div className="interest-list">

                    <ul className="skills-list">
                    <li>Learn Coding</li>
                    <li>Open Source Contributions</li>
                    <li>Tech Blogging</li>
                    <li>Continuous Learning</li>
                    <li>Problem Solving</li>
                    <li>Work on Complex Tasks</li>
                    

                    </ul>
                       
                    </div>
                </div>
            </aside>
        </main>
        <div id="portfolio">
            <Link href="./portfolio">Portfolio</Link>
        </div>
    </div>
  )
}
