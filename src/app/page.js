"use client"
import Image from 'next/image';
import Head from 'next/head';
import { useState } from 'react';
import Header from '@/components/Header/Header';
import ContactForm from '@/components/ContactForm/ContactForm';

export default function Home() {
  const [showContactForm, setShowContactForm] = useState(false);
  const handleLeadForm = () => {
    setShowContactForm(prev => !prev)
  }
  showContactForm ? document.body.classList.add('active') : document.body.classList.remove('active')
  return (
    <>

    <div className={showContactForm ? 'overlay' : ''}></div>

    <Header />
    <div className="proTechHOmeBody">
            <div className="container">
                <div className="topBanner">
                    <figure>
                        <img src="static/assets/images/proTechHomeTopBanner.jpg" className="img-responsive" />
                    </figure>
                    <div className="topBannerContent">
                        <h1>We help Business thrive with technology.</h1>
                        <p>Pro Tech Consultancy is your one stop shop for all things tech. wheather you need to build a custom software solution design a new brand or create an AI chatbot, We have got you covered.</p>
                        <button className="btn btn-primary getStarted">Get Started</button>
                    </div>
                </div>
                <div className="ourServices">
                    <h2>Our Services</h2>
                    <div className="servicesCardBox">
                        <div className="servicesCard">
                            <figure>
                                <img src="static/assets/images/code.svg" />
                            </figure>
                            <h2>Software Development</h2>
                            <p>Build Customs Software Solutions that Solves Complex Business Problems</p>
                        </div>
                        <div className="servicesCard">
                            <figure>
                                <img src="static/assets/images/Paint_tray.svg" />
                            </figure>
                            <h2>Graphic Designs</h2>
                            <p>Create Buautiful, impact designs that bring your brand to life.</p>
                        </div>
                        <div className="servicesCard">
                            <figure>
                                <img src="static/assets/images/chatbot (2).svg" />
                            </figure>
                            <h2>AI Chatbot Creations</h2>
                            <p>Develop AI Chatbots that provides exceptional Customer service and support.</p>
                        </div>
                    </div>
                </div>
                <div className="homeFeatureBox">
                    <div className="featureCard">
                        <figure>
                            <img src="static/assets/images/companyWebsite.png" className="img-responsive" />
                        </figure>
                        <h2>Company Website</h2>
                        <p>An Interactive Website for a marketing agency.</p>

                    </div>
                    <div className="featureCard">
                        <figure>
                            <img src="static/assets/images/eCommerceApp.png" className="img-responsive" />
                        </figure>
                        <h2>E-Commerce App</h2>
                        <p>A sleek mobile app for a clothing brand.</p>

                    </div>
                    <div className="featureCard">
                        <figure>
                            <img src="static/assets/images/healthCareDashboard.png" className="img-responsive" />
                        </figure>
                        <h2>HealthCare Dashboard</h2>
                        <p>A USer-friendly dashboard for managing patient data.</p>

                    </div>

                </div>
                <div className="ourCleintReviewBox">
                    <h1>what Our Clients Say</h1>
                    <div className="reviewBox">
                        <div className="ratingUserName">Sarah Johnson</div>
                        <div className="ratingDate">June 12, 2023</div>
                        <div className="noOfStarGot">
                            <figure>
                                <img src="static/assets/images/star (4).svg" className="img-responsive" />
                            </figure>
                            <figure>
                                <img src="static/assets/images/star (4).svg" className="img-responsive" />
                            </figure>
                            <figure>
                                <img src="static/assets/images/star (4).svg" className="img-responsive" />
                            </figure>
                            <figure>
                                <img src="static/assets/images/star (4).svg" className="img-responsive" />
                            </figure>
                            <figure>
                                <img src="static/assets/images/star (4).svg" className="img-responsive" />
                            </figure>
                        </div>
                        <p>Pro Tech Consultancy was a plessure to work with. They communicated clearly, delivered high-quality work, and were able to adapt to changing requirements as needed, thighly recommend them for any software development project</p>
                    </div>
                    <div className="reviewBox">
                        <div className="ratingUserName">David Smith</div>
                        <div className="ratingDate">May 21, 2023</div>
                        <div className="noOfStarGot">
                            <figure>
                                <img src="static/assets/images/star (4).svg" className="img-responsive" />
                            </figure>
                            <figure>
                                <img src="static/assets/images/star (4).svg" className="img-responsive" />
                            </figure>
                            <figure>
                                <img src="static/assets/images/star (4).svg" className="img-responsive" />
                            </figure>
                            <figure>
                                <img src="static/assets/images/star (4).svg" className="img-responsive" />
                            </figure>
                            <figure>
                                <img src="static/assets/images/star (4).svg" className="img-responsive" />
                            </figure>
                        </div>
                        <p>The team at Pro Tech Consultancy helped us create a beautiful, intuitive e-commerce app that has been wel-received by our customers. They were professional responsive, and delivered the project on time and within budget. We look forward to working with them again in the future</p>
                    </div>
                    <div className="reviewBox">
                        <div className="ratingUserName">Emily Devis</div>
                        <div className="ratingDate">June 12, 2023</div>
                        <div className="noOfStarGot">
                            <figure>
                                <img src="static/assets/images/star (4).svg" className="img-responsive" />
                            </figure>
                            <figure>
                                <img src="static/assets/images/star (4).svg" className="img-responsive" />
                            </figure>
                            <figure>
                                <img src="static/assets/images/star (4).svg" className="img-responsive" />
                            </figure>
                            <figure>
                                <img src="static/assets/images/star (4).svg" className="img-responsive" />
                            </figure>
                            <figure>
                                <img src="static/assets/images/star (4).svg" className="img-responsive" />
                            </figure>
                        </div>
                        <p>We hired Pro Tech Consultancy to create a new brand identity for cur company, including a new logo, color scheme, and visual style. They did an excellent job capturing our vision and bringing it to life. The final designs were modern versatile, and agroc with our brand values. We're thrilled with the results and would definitely recommend them for graphic design services</p>
                    </div>
                </div>
                <div className="readyToTakeBusinessNextLevel">
                    <h1>Ready To Take Your Business to the Next Level ?</h1>
                    <button className="btn btn-primary contactUs" onClick={handleLeadForm}> Contact Us</button>
                </div>
             
            </div>
         </div>
          {showContactForm && <ContactForm handleLeadForm={handleLeadForm}/>}
    </>
  );
}
