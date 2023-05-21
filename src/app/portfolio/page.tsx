import Link from "next/link";
import { FaBriefcase} from 'react-icons/fa';
import Header from '@/views/header'


const portfolio = () =>{

    return (
        <div id="resume" className="portfolio">
             <Header/>
        <main id="main">
            <div className="content">
                <div className="title">
                    <div className="icon">
                    < FaBriefcase/>
                    </div>
                    <h2>Portfolio</h2>
                </div>
                <div className="grid">
                    <div className="item">
                    <div className="featured-img">
                            <Link href="#">
                                <img src="./img/1.jpg"
                                    alt="Muhammad Noman Aslam - Portfolio" />
                            </Link>
                        </div>
                        <h3 className="universal-title">ITSOLPRO</h3>
                    </div>
                    
                    <div className="item">
                    <div className="featured-img">
                            <Link href="#">
                                <img src="./img/2.jpg"
                                    alt="Muhammad Noman Aslam - Portfolio" />
                            </Link>
                        </div>
                        <h3 className="universal-title">ITSOL</h3>
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