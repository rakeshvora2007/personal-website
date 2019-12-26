import React from 'react'

const Contact = () => {
    return (
        <section id="contact-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="block">
                            <h2 className="subtitle wow fadeInDown" data-wow-duration="500ms" data-wow-delay=".3s">Contact With Me</h2>
                            <p className="subtitle-des wow fadeInDown" data-wow-duration="500ms" data-wow-delay=".5s">
                                Leave your details and message. I will get back to you within 24 Hours.
                            </p>
                            <div className="contact-form">
                                <form id="contact-form" method="post" action="sendmail.php" role="form">

                                    <div className="form-group wow fadeInDown" data-wow-duration="500ms" data-wow-delay=".6s">
                                        <input type="text" placeholder="Your Name" className="form-control" name="name" id="name">
                                    </div>

                                    <div className="form-group wow fadeInDown" data-wow-duration="500ms" data-wow-delay=".8s">
                                        <input type="email" placeholder="Your Email" className="form-control" name="email" id="email" >
                                    </div>

                                    <div className="form-group wow fadeInDown" data-wow-duration="500ms" data-wow-delay="1s">
                                        <input type="text" placeholder="Subject" className="form-control" name="subject" id="subject">
                                    </div>

                                    <div className="form-group wow fadeInDown" data-wow-duration="500ms" data-wow-delay="1.2s">
                                        <textarea rows="6" placeholder="Message" className="form-control" name="message" id="message"></textarea>
                                    </div>


                                    <div id="submit" className="wow fadeInDown" data-wow-duration="500ms" data-wow-delay="1.4s">
                                        <input type="submit" id="contact-submit" className="btn btn-default btn-send" value="Send Message">
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row address-details">
                    <div className="col-md-4">
                        <div className="address wow fadeInLeft" data-wow-duration="500ms" data-wow-delay=".3s">
                            <i className="ion-ios-location-outline"></i>
                            <h5>2404 E Nutwood Ave, CA <br>United States of America,92831</h5>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="email wow fadeInLeft" data-wow-duration="500ms" data-wow-delay=".7s">
                            <i className="ion-ios-email-outline"></i>
                            <p>rakeshvora2007@gmail.com<br>mail@rakeshjain.me</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="phone wow fadeInLeft" data-wow-duration="500ms" data-wow-delay=".9s">
                            <i className="ion-ios-telephone-outline"></i>
                            <p>+1 657-253-9782</p>
                            <p>+91 982-180-3881</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
