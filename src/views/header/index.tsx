import { FaEnvelope, FaWhatsapp, FaLocationArrow, FaLinkedin, FaGithub } from 'react-icons/fa';

const Header = () => {
    return (

        <header id="header">
            <div className="about">
                <div className="profile">
                    <div className="outline">
                        <img src="./img/Noman.jpg" alt="Muhammad Noman Aslam Maken" />
                    </div>
                </div>
                <div className="summary">
                    <h1>Muhammad Noman Aslam</h1>
                    <span>Web Developer</span>
                    <p>Experienced web developer with 4 years of backend development experience using core PHP. Skilled in creating robust server-side solutions, managing databases, integrating APIs, and scripting. Seeking new opportunities.</p>
                </div>
            </div>
            <div className="info">
                <ul>
                    <li>
                        <div className="icon">
                            <FaEnvelope />
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
                            <FaLocationArrow />
                        </div>
                        <address>Lahore, Punjab Pakistan</address>
                    </li>
                    <li>
                        <div className="icon">
                            <FaLinkedin />
                        </div>
                        <a href="https://pk.linkedin.com/in/muhammad-noman-aslam-maken-2ab81b178">Muhammad Noman Aslam</a>
                    </li>
                    <li>
                        <div className="icon">
                            <FaGithub />
                        </div>
                        <a href="https://github.com/noman-maken">noman-maken</a>
                    </li>
                </ul>
            </div>
        </header>
    )
};


export default Header;
