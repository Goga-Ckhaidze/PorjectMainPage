import React from 'react';
import './ContactUs.css';

function ContactUs() {
  return (
    <>
    <div className="contactUsWelcomeDiv">
      <div className="imageOverlay"></div>
      <div className="welcomeText">
        <h1 className="welcomeTitle">Jobs</h1>
        <p className="welcomeDescribe">Explore New Openings at Cotmac</p>
      </div>
    </div>

    <div className="container-1500">
    <div className='robotFlex'>
      <div className='miniRobot'></div>
      <div className='texts'>
        <div>
        <h1 className='miniTitlee'>We're a Great Place to Work</h1>
        <p className='miniText'>At Cotmac we foster an inclusive and supportive workplace culture. We ensure that every member of our team feels appreciated, supported, and empowered to flourish both personally and professionally. We invite you to join us and become a valued member of the Cotmac family.</p>
        </div>
      </div>
    </div>

    <div className='teamImage'></div>


  <div className="workFlex">
    <div className="workImage"></div>
    <div className='workTexts'>
      <div>
        <h1 className='workTitle'>WORK WITH US?</h1>
        <p className='workText'>Cotmac provides an enabling culture for employees to learn, collaborate, innovate, and grow in the organisation. Our employees take pride in their work and continuously strive to set new benchmarks for quality and customer satisfaction.</p>
        <p className='workText ptop'>We believe that the skills, experience, and attitude of our employees makes Cotmac a leader in industrial automation. We offer an open and responsive work environment where innovative ideas are encouraged and recognised. ‘Fun’ and ‘Rewards’ are an integral part of our work culture.</p>
      </div>
    </div>
  </div>
</div>
    

    </>
  );
}

export default ContactUs;
