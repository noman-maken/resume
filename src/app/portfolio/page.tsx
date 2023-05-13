import Link from "next/link";
import { FaPlus , FaBriefcase, FaEnvelope, FaWhatsapp, FaLocationArrow, FaLinkedin, FaGithub, FaBrain, FaGraduationCap, FaChessKnight} from 'react-icons/fa';


const portfolio = () =>{

    return (
        <div id="resume" className="portfolio">
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
                        <i className="fa fa-light fa-briefcase"></i>
                    </div>
                    <h2>Portfolio</h2>
                </div>
                <div className="grid">
                    <div className="item">
                    <div className="featured-img">
                            <Link href="#">
                                <img src="./img/1.png"
                                    alt="Muhammad Noman Aslam - Portfolio" />
                            </Link>
                        </div>
                        <h3 className="universal-title">ITSOLPRO</h3>
                    </div>
                    
                </div>
            </div>
        </main>
        <div id="portfolio">
            <Link href="./"><i className="fa-solid fa-angle-left"></i> Back</Link>
        </div>
    </div>
    );

}
export default portfolio;