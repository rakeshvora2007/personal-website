import React from 'react'

const Footer = () => {
    return (
        <footer id="footer">
            <div className="container">
                <div className="col-md-8">
                    <p className="copyright">Copyright: <span>2020</span> . Design and Developed by <a href="https://github.com/rakeshvora2007">Rakesh Jain</a></p>
                </div>
                <div className="col-md-4">
                    <ul className="social">
                        <li>
                            <a href="#" className="Facebook">
                                <i className="ion-social-facebook"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/rakeshvora2007" className="Twitter">
                                <i className="ion-social-github"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/rakesh-jain/" className="Linkedin">
                                <i className="ion-social-linkedin"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://plus.google.com/108511926173369056184" className="Google Plus">
                                <i className="ion-social-googleplus"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
