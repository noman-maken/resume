import { FaEnvelope, FaWhatsapp, FaLocationArrow, FaLinkedin, FaGithub} from 'react-icons/fa';

const Header = () => {
    return(
        
        <header id="header">
            <div className="about">
                <div className="profile">
                    <div className="outline">
                        <img src="./img/Noman.jpg" alt="Muhammad Noman Aslam Maken"/>
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
    )
};


export default Header;
