import React from 'react'

const Home = () => {
    return (
        <div>
            <section id="hero-area">
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <div className="block wow fadeInUp" data-wow-delay=".3s">

                        <section className="cd-intro">
                            <h1 className="wow fadeInUp animated cd-headline slide" data-wow-delay=".4s">
                                <span>HI, MY NAME IS Rakesh Jain & I AM A</span><br/>
                                <span className="cd-words-wrapper">
                                    <b className="is-visible">DEVELOPER</b>
                                    <b>DESIGNER</b>
                                </span>
                            </h1>
                        </section>
                        <h2 className="wow fadeInUp animated" data-wow-delay=".6s">
                            With 3 years experience, I've occupied many roles including web and mobile application developer,<br/>                            software engineer. This site showcases some of my work.
                        </h2>
                        <a className="btn-lines dark light wow fadeInUp animated smooth-scroll btn btn-default btn-green" data-wow-delay=".9s" href="#works"
                            data-section="#works">View Works</a>

                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="about">
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-sm-6">
                    <div className="block wow fadeInLeft" data-wow-delay=".3s" data-wow-duration="500ms">
                        <h2>
                            ABOUT ME
                        </h2>
                        <p>
                            Hello, I’m a Software Engineer from California, USA. I hold a master degree of Computer Engineering from the California State
                            University, Fullerton. I have worked on various development projects academically as well as
                            profesionally ranging from medical to finance.
                        </p>
                    </div>

                </div>
                <div className="col-md-6 col-sm-6">
                    <div className="block wow fadeInRight" data-wow-delay=".3s" data-wow-duration="500ms">
                        <img src="images/about/about.jpg" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="works" className="works">
        <div className="container">
            <div className="section-heading">
                <h1 className="title wow fadeInDown" data-wow-delay=".3s">Latest Works</h1>
                <p className="wow fadeInDown" data-wow-delay=".5s">
                    This secition shows all the projects recently worked on or still working on. Projects have various diversity which includes
                    <br/> Software Engineering, Web Design, Application Concept/ Prototype, Libraries and Wireframes .
                </p>
            </div>
            <div className="row">
                    <div className="col-sm-3">
                            <figure className="wow fadeInLeft animated portfolio-item" data-wow-duration="500ms" data-wow-delay="0ms">
                                <div className="img-wrapper">
                                    <img src="images/projects/github-search.png" className="img-responsive" alt="this is a title"/>
                                    <div className="overlay">
                                        <div className="buttons">
                                            <a rel="gallery" className="fancybox" href="https://github.com/rakeshvora2007/github-search-using-react">Demo</a>
                                            <a target="_blank" href="">Details</a>
                                        </div>
                                    </div>
                                </div>
                                <figcaption>
                                    <h4>
                                        <a href="https://github.com/rakeshvora2007/github-search-using-react">
                                                                   Github Search Application
                                                               </a>
                                    </h4>
                                    <p>
                                        React and Redux project
                                    </p>
                                </figcaption>
                            </figure>
                        </div>
                <div className="col-sm-3">
                    <figure className="wow fadeInLeft animated portfolio-item" data-wow-duration="500ms" data-wow-delay="0ms">
                        <div className="img-wrapper">
                            <img src="images/projects/WeatherApplication.png" className="img-responsive" alt="this is a title"/>
                            <div className="overlay">
                                <div className="buttons">
                                    <a rel="gallery" className="fancybox" href="https://github.com/rakeshvora2007/weather-app-using-react-and-redux">Demo</a>
                                    <a target="_blank" href="">Details</a>
                                </div>
                            </div>
                        </div>
                        <figcaption>
                            <h4>
                                <a href="https://github.com/rakeshvora2007/weather-app-using-react-and-redux">
                                                           Weather Search Application
                                                       </a>
                            </h4>
                            <p>
                                React and Redux project
                            </p>
                        </figcaption>
                    </figure>
                </div>
                <div className="col-sm-3">
                    <figure className="wow fadeInLeft animated portfolio-item" data-wow-duration="500ms" data-wow-delay="0ms">
                        <div className="img-wrapper">
                            <img src="images/projects/YoutubeSearch.png" className="img-responsive" alt="this is a title"/>
                            <div className="overlay">
                                <div className="buttons">
                                    <a rel="gallery" className="fancybox" href="https://github.com/rakeshvora2007/youtube-search-using-react">Demo</a>
                                    <a target="_blank" href="">Details</a>
                                </div>
                            </div>
                        </div>
                        <figcaption>
                            <h4>
                                <a href="https://github.com/rakeshvora2007/youtube-search-using-react">
                                                   Youtube Search Application
                                               </a>
                            </h4>
                            <p>
                                React Project
                            </p>
                        </figcaption>
                    </figure>
                </div>
                <div className="col-sm-3">
                    <figure className="wow fadeInLeft animated portfolio-item" data-wow-duration="500ms" data-wow-delay="0ms">
                        <div className="img-wrapper">
                            <img src="images/projects/bulletin-board.png" className="img-responsive" alt="this is a title"/>
                            <div className="overlay">
                                <div className="buttons">
                                    <a rel="gallery" className="fancybox" href="https://github.com/rakeshvora2007/React-Projects/tree/master/Bulletin%20Board%20Application/bulletin-board">Demo</a>
                                    <a target="_blank" href="">Details</a>
                                </div>
                            </div>
                        </div>
                        <figcaption>
                            <h4>
                                <a href="https://github.com/rakeshvora2007/React-Projects/tree/master/Bulletin%20Board%20Application/bulletin-board">
                                            Bulletin Board Application
                                        </a>
                            </h4>
                            <p>
                                React Project
                            </p>
                        </figcaption>
                    </figure>
                </div>
                </div>
                <div className="row">
                <div className="col-sm-3">
                    <figure className="wow fadeInLeft animated" data-wow-duration="500ms" data-wow-delay="300ms">
                        <div className="img-wrapper">
                            <img src="images/projects/simple-todos.png" className="img-responsive" alt="this is a title"/>
                            <div className="overlay">
                                <div className="buttons">
                                    <a rel="gallery" className="fancybox" href="https://github.com/rakeshvora2007/Meteor-Projects/tree/master/simple-todos">Demo</a>
                                    <a target="_blank" href="">Details</a>
                                </div>
                            </div>
                        </div>
                        <figcaption>
                            <h4>
                                <a href="https://github.com/rakeshvora2007/Meteor-Projects/tree/master/simple-todos">
                                            Simple Todos
                                        </a>
                            </h4>
                            <p>
                                Meteor Project
                            </p>
                        </figcaption>
                    </figure>
                </div>

                <div className="col-sm-3">
                    <figure className="wow fadeInLeft animated" data-wow-duration="500ms" data-wow-delay="300ms">
                        <div className="img-wrapper">
                            <img src="images/projects/quiet-earth.png" className="img-responsive" alt=""/>
                            <div className="overlay">
                                <div className="buttons">
                                    <a rel="gallery" className="fancybox" href="https://github.com/rakeshvora2007/Meteor-Projects/tree/master/Quietearth">Demo</a>
                                    <a target="_blank" href="">Details</a>
                                </div>
                            </div>
                        </div>
                        <figcaption>
                            <h4>
                                <a href="https://github.com/rakeshvora2007/Meteor-Projects/tree/master/Quietearth">
                                            Quiet Earth
                                        </a>
                            </h4>
                            <p>
                                Meteor Project
                            </p>
                        </figcaption>
                    </figure>
                </div>

                <div className="col-sm-3">
                    <figure className="wow fadeInLeft animated" data-wow-duration="500ms" data-wow-delay="600ms">
                        <div className="img-wrapper">
                            <img src="images/projects/snippets.png" className="img-responsive" alt=""/>
                            <div className="overlay">
                                <div className="buttons">
                                    <a rel="gallery" className="fancybox" href="https://github.com/rakeshvora2007/Meteor-Projects/tree/master/Snippets">Demo</a>
                                    <a target="_blank" href="">Details</a>
                                </div>
                            </div>
                        </div>
                        <figcaption>
                            <h4>
                                <a href="https://github.com/rakeshvora2007/Meteor-Projects/tree/master/Snippets">
                                            Snippets
                                        </a>
                            </h4>
                            <p>
                                Meteor Project
                            </p>
                        </figcaption>
                    </figure>
                </div>
                <div className="col-sm-3">
                    <figure className="wow fadeInLeft animated portfolio-item" data-wow-duration="500ms" data-wow-delay="0ms">
                        <div className="img-wrapper">
                            <img src="images/projects/android.png" className="img-responsive" alt="this is a title"/>
                            <div className="overlay">
                                <div className="buttons">
                                    <a rel="gallery" className="fancybox" href="https://github.com/rakeshvora2007/Adobe-Xd-Projects/blob/master/Android%20proto.xd">Demo</a>
                                    <a target="_blank" href="">Details</a>
                                </div>
                            </div>
                        </div>
                        <figcaption>
                            <h4>
                                <a href="https://github.com/rakeshvora2007/Adobe-Xd-Projects/blob/master/Android%20proto.xd">
                                                    Adobe Xd
                                                </a>
                            </h4>
                            <p>
                                Android Prototype Project
                            </p>
                        </figcaption>
                    </figure>
                </div>
                </div>
                <div className="row">
                <div className="col-sm-3">
                    <figure className="wow fadeInLeft animated" data-wow-duration="500ms" data-wow-delay="300ms">
                        <div className="img-wrapper">
                            <img src="images/projects/ios.png" className="img-responsive" alt="this is a title"/>
                            <div className="overlay">
                                <div className="buttons">
                                    <a rel="gallery" className="fancybox" href="https://github.com/rakeshvora2007/Adobe-Xd-Projects/blob/master/iOS%20proto.xd">Demo</a>
                                    <a target="_blank" href="">Details</a>
                                </div>
                            </div>
                        </div>
                        <figcaption>
                            <h4>
                                <a href="https://github.com/rakeshvora2007/Adobe-Xd-Projects/blob/master/iOS%20proto.xd">
                                                    Adobe Xd
                                                </a>
                            </h4>
                            <p>
                                iOS Prototype Project
                            </p>
                        </figcaption>
                    </figure>
                </div>
            </div>

        </div>
    </section>
    <section id="feature">
        <div className="container">
            <div className="section-heading">
                <h1 className="title wow fadeInDown" data-wow-delay=".3s">Skills</h1>
                <p className="wow fadeInDown" data-wow-delay=".5s">
                    Wide range of skill set ranging from requirement gathering, design, development, testing, documentation to maintenance
                </p>
            </div>
            <div className="row">
                <div className="col-md-4 col-lg-4 col-xs-12">
                    <div className="media wow fadeInUp animated" data-wow-duration="500ms" data-wow-delay="300ms">
                        <div className="media-left">
                            <div className="icon">
                                <i className="ion-coffee"></i>
                            </div>
                        </div>
                        <div className="media-body">
                            <h4 className="media-heading">Coding</h4>
                            <p>Java, JavaScript, React, Redux, Nodejs</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-lg-4 col-xs-12">
                    <div className="media wow fadeInDown animated" data-wow-duration="500ms" data-wow-delay="600ms">
                        <div className="media-left">
                            <div className="icon">
                                <i className="ion-ios-infinite"></i>
                            </div>
                        </div>
                        <div className="media-body">
                            <h4 className="media-heading">Unique Ideas</h4>
                            <p>Identifying the Need, Creating a Solution</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-lg-4 col-xs-12">
                    <div className="media wow fadeInDown animated" data-wow-duration="500ms" data-wow-delay="900ms">
                        <div className="media-left">
                            <div className="icon">
                                <i className="ion-clipboard"></i>
                            </div>
                        </div>
                        <div className="media-body">
                            <h4 className="media-heading">Documentation</h4>
                            <p>Quip, Trello, Markdown, Dropbox paper</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-lg-4 col-xs-12">
                    <div className="media wow fadeInDown animated" data-wow-duration="500ms" data-wow-delay="1200ms">
                        <div className="media-left">
                            <div className="icon">
                                <i className="ion-edit"></i>
                            </div>
                        </div>
                        <div className="media-body">
                            <h4 className="media-heading">Design</h4>
                            <p>Adobe XD, UML, DFD</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-lg-4 col-xs-12">
                    <div className="media wow fadeInDown animated" data-wow-duration="500ms" data-wow-delay="1500ms">
                        <div className="media-left">
                            <div className="icon">
                                <i className="ion-checkmark-circled"></i>
                            </div>
                        </div>
                        <div className="media-body">
                            <h4 className="media-heading">Testing</h4>
                            <p>jUnit, Mocha, Chai, Selenium</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-lg-4 col-xs-12">
                    <div className="media wow fadeInDown animated" data-wow-duration="500ms" data-wow-delay="1800ms">
                        <div className="media-left">
                            <div className="icon">
                                <i className="ion-settings"></i>
                            </div>
                        </div>
                        <div className="media-body">
                            <h4 className="media-heading">Support</h4>
                            <p>Onsite as well as weekly maintenance</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="call-to-action">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="block">
                        <h2 className="title wow fadeInDown" data-wow-delay=".3s" data-wow-duration="500ms">SO WHAT YOU THINK ?</h2>
                            <p className="wow fadeInDown" data-wow-delay=".5s" data-wow-duration="500ms">Contact me for any queries or live work, contract projects<br/>I always try to reach within 24
                                hours and hope to reply as soon as possible.</p>
                            <a href="contact.html" className="btn btn-default btn-contact wow fadeInDown" data-wow-delay=".7s" data-wow-duration="500ms">Contact With Me</a>
                    </div>
                </div>

            </div>
        </div>
    </section>
        </div>
    )
}

export default Home
