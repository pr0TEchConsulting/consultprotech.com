"use client"
import Image from 'next/image';
import Head from 'next/head';
import { useState } from 'react';
import Header from '@/components/Header/Header';
import ContactForm from '@/components/ContactForm/ContactForm';

export default function Home() {
  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <>
    <Header/>
      <div className="proTechHOmeBody">
        <div className="container">
          <div className="topBanner">
            <figure>
              <Image src="/static/assets/images/proTechHomeTopBanner.jpg" alt="Top Banner" layout="responsive" width={1200} height={400} />
            </figure>
            <div className="topBannerContent">
              <h1>We help Business thrive with technology.</h1>
              <p>Pro Tech Consultancy is your one stop shop for all things tech. Whether you need to build a custom software solution, design a new brand, or create an AI chatbot, we have got you covered.</p>
              <button className="btn btn-primary getStarted">Get Started</button>
            </div>
          </div>

          <div className="ourServices">
            <h2>Our Services</h2>
            <div className="servicesCardBox">
              <div className="servicesCard">
                <figure>
                  <Image src="/static/assets/images/code.svg" alt="Software Development" layout="responsive" width={100} height={100} />
                </figure>
                <h2>Software Development</h2>
                <p>Build Custom Software Solutions that Solve Complex Business Problems</p>
              </div>
              <div className="servicesCard">
                <figure>
                  <Image src="/static/assets/images/Paint_tray.svg" alt="Graphic Designs" layout="responsive" width={100} height={100} />
                </figure>
                <h2>Graphic Designs</h2>
                <p>Create Beautiful, Impact Designs that Bring Your Brand to Life.</p>
              </div>
              <div className="servicesCard">
                <figure>
                  <Image src="/static/assets/images/chatbot (2).svg" alt="AI Chatbots" layout="responsive" width={100} height={100} />
                </figure>
                <h2>AI Chatbot Creations</h2>
                <p>Develop AI Chatbots that Provide Exceptional Customer Service and Support.</p>
              </div>
            </div>
          </div>

          <div className="homeFeatureBox">
            <div className="featureCard">
              <figure>
                <Image src="/static/assets/images/companyWebsite.png" alt="Company Website" layout="responsive" width={1000} height={300} />
              </figure>
              <h2>Company Website</h2>
              <p>An Interactive Website for a Marketing Agency.</p>
            </div>
            <div className="featureCard">
              <figure>
                <Image src="/static/assets/images/eCommerceApp.png" alt="E-Commerce App" layout="responsive" width={1000} height={300} />
              </figure>
              <h2>E-Commerce App</h2>
              <p>A Sleek Mobile App for a Clothing Brand.</p>
            </div>
            <div className="featureCard">
              <figure>
                <Image src="/static/assets/images/healthCareDashboard.png" alt="HealthCare Dashboard" layout="responsive" width={1000} height={300} />
              </figure>
              <h2>HealthCare Dashboard</h2>
              <p>A User-Friendly Dashboard for Managing Patient Data.</p>
            </div>
          </div>

          <div className="ourCleintReviewBox">
            <h1>What Our Clients Say</h1>
            <div className="reviewBox">
              <div className="ratingUserName">Sarah Johnson</div>
              <div className="ratingDate">June 12, 2023</div>
              <div className="noOfStarGot">
                {[...Array(5)].map((_, i) => (
                  <figure key={i}>
                    <Image src="/static/assets/images/star (4).svg" alt={`Star ${i + 1}`} layout="intrinsic" width={20} height={20} />
                  </figure>
                ))}
              </div>
              <p>Pro Tech Consultancy was a pleasure to work with. They communicated clearly, delivered high-quality work, and were able to adapt to changing requirements as needed. Highly recommend them for any software development project.</p>
            </div>
            <div className="reviewBox">
              <div className="ratingUserName">David Smith</div>
              <div className="ratingDate">May 21, 2023</div>
              <div className="noOfStarGot">
                {[...Array(5)].map((_, i) => (
                  <figure key={i}>
                    <Image src="/static/assets/images/star (4).svg" alt={`Star ${i + 1}`} layout="intrinsic" width={20} height={20} />
                  </figure>
                ))}
              </div>
              <p>The team at Pro Tech Consultancy helped us create a beautiful, intuitive e-commerce app that has been well-received by our customers. They were professional, responsive, and delivered the project on time and within budget. We look forward to working with them again in the future.</p>
            </div>
            <div className="reviewBox">
              <div className="ratingUserName">Emily Davis</div>
              <div className="ratingDate">June 12, 2023</div>
              <div className="noOfStarGot">
                {[...Array(5)].map((_, i) => (
                  <figure key={i}>
                    <Image src="/static/assets/images/star (4).svg" alt={`Star ${i + 1}`} layout="intrinsic" width={20} height={20} />
                  </figure>
                ))}
              </div>
              <p>We hired Pro Tech Consultancy to create a new brand identity for our company, including a new logo, color scheme, and visual style. They did an excellent job capturing our vision and bringing it to life. The final designs were modern, versatile, and aligned with our brand values. We're thrilled with the results and would definitely recommend them for graphic design services.</p>
            </div>
          </div>

          <div className="readyToTakeBusinessNextLevel">
            <h1>Ready To Take Your Business to the Next Level?</h1>
            <button className="btn btn-primary contactUs" onClick={() => setShowContactForm(!showContactForm)}>Contact Us</button>
          </div>
          {showContactForm && <ContactForm/>}
        </div>
      </div>
    </>
  );
}
