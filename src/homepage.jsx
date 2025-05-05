import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';
import { Parallax } from 'react-parallax';
import React, { useEffect, useRef, useState } from 'react';


function App() {

  const logoUrls1 = [
    "https://cotmac.io/wp-content/uploads/2024/07/Cotmac_PatnerLogo-15.png",
    "https://cotmac.io/wp-content/uploads/2024/07/Cotmac_PatnerLogo-16.png",
    "https://cotmac.io/wp-content/uploads/2024/07/Cotmac_PatnerLogo-17.png",
    "https://cotmac.io/wp-content/uploads/2024/07/Cotmac_PatnerLogo-19.png",
    "https://cotmac.io/wp-content/uploads/2024/07/Cotmac_PatnerLogo-20.png",
    "https://cotmac.io/wp-content/uploads/2024/07/Cotmac_PatnerLogo-21.png",
    "https://cotmac.io/wp-content/uploads/2024/07/Cotmac_PatnerLogo-22.png",
    "https://cotmac.io/wp-content/uploads/2024/07/Cotmac_PatnerLogo-23.png",
    "https://cotmac.io/wp-content/uploads/2024/07/Cotmac_PatnerLogo-24.png",
    "https://cotmac.io/wp-content/uploads/2024/07/Cotmac_PatnerLogo-25.png",
    "https://cotmac.io/wp-content/uploads/2024/07/Cotmac_PatnerLogo-26.png",
  ];
  
  const logoUrls2 = [
    "https://cotmac.io/wp-content/uploads/2024/07/Cotmac_PatnerLogo-27.png",
    "https://cotmac.io/wp-content/uploads/2024/07/Cotmac_PatnerLogo-30.png",
    "https://cotmac.io/wp-content/uploads/2024/07/Cotmac_PatnerLogo-31.png",
    "https://cotmac.io/wp-content/uploads/2024/07/Cotmac_PatnerLogo-32.png",
    "https://cotmac.io/wp-content/uploads/2024/07/Cotmac_PatnerLogo-27.png",
    "https://cotmac.io/wp-content/uploads/2024/07/Cotmac_PatnerLogo-34.png",
    "https://cotmac.io/wp-content/uploads/2024/07/Cotmac_PatnerLogo-35.png",
    "https://cotmac.io/wp-content/uploads/2024/07/Cotmac_PatnerLogo-36.png",
    "https://cotmac.io/wp-content/uploads/2024/07/Cotmac_PatnerLogo-37.png",
  ];

  // zzz
  
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);
  
  const stats = [
    { value: 1000, label: "Employees Globally", img: "https://cotmac.io/wp-content/uploads/2024/02/Cotmac-WorldWideStaff.png" },
    { value: 70, label: "Country Serviced", img: "https://cotmac.io/wp-content/uploads/2024/02/Cotmac-Global.png" },
    { value: 11000, label: "Projects Delivered", img: "https://cotmac.io/wp-content/uploads/2024/03/Delivered-Icon.png" },
    { value: 30, label: "Years of Legacy", img: "https://cotmac.io/wp-content/uploads/2024/02/Cotmac-Successful.png" },
  ];
  
  const [counts, setCounts] = useState(stats.map(() => 0));
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animate) {
          setAnimate(true);
        }
      },
      { threshold: 0.4 }
    );
  
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
  
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [animate]);
  
  useEffect(() => {
    if (!animate) return;
  
    const duration = 1000;
    const startTime = performance.now();
  
    const animateCounts = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
  
      const newCounts = stats.map(stat =>
        Math.floor(stat.value * progress)
      );
  
      setCounts(newCounts);
  
      if (progress < 1) {
        requestAnimationFrame(animateCounts);
      }
    };
  
    requestAnimationFrame(animateCounts);
  }, [animate]);
  
  const scrollTestimonials = (direction) => {
    const container = document.getElementById("testimonial-scroll");
    const scrollAmount = 400;
  
    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };
  return (
    <>
    <section className="welcomeSection">
      <div className="welcomeVideoDiv">
        <video
          className="welcomeVideo"
          autoPlay
          muted
          loop
          playsInline
          src="https://cotmac.io/wp-content/uploads/2024/08/Cotmac-Video-Banner-03.mp4"
        ></video>

        <div className="carouselOverlay">
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={30}
            slidesPerView={1}
            loop
          >
            <SwiperSlide>
              <div className="carouselItem">This is Slide 1</div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="carouselItem">Welcome to Slide 2</div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="carouselItem">Explore Slide 3</div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>

    <section className='middleSection'>
      <div className="container-1200">
        <div className='aboutCompany'>
      <h1 className='clientTitle'>CLIENTS</h1>
      <p className='clientDescribe'>We deliver advanced & tailored automation solutions to some of the most respected companies across the world.</p>
      </div>
      <div className='companyLogos'>
      <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      loop={true}
      spaceBetween={20}
      slidesPerView={1}
      breakpoints={{
        640: { slidesPerView: 2 },
        800: { slidesPerView: 4 },
        1024: { slidesPerView: 5 }
      }}
    >
      {logoUrls1.map((url, i) => (
        <SwiperSlide key={i}>
          <img src={url} alt={`companyLogo-${i}`} className="logo" />
        </SwiperSlide>
      ))}
    </Swiper>
      </div>

      <div className='aboutCompany'>
      <h1 className='clientTitle'>PARTNERS</h1>
      <p className='clientDescribe'>We partner with leading global companies to build sophisticated automation solutions tailored for a wide range of requirements.</p>
      </div>
      <div className='companyLogos'>
      <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      loop={true}
      spaceBetween={20}
      slidesPerView={1}
      breakpoints={{
        640: { slidesPerView: 2 },
        768: { slidesPerView: 4 },
        1024: { slidesPerView: 5 }
      }}
    >
      {logoUrls2.map((url, i) => (
        <SwiperSlide key={i}>
          <img src={url} alt={`companyLogo-${i}`} className="logo" />
        </SwiperSlide>
      ))}
    </Swiper>
      </div> 
      </div>
      <div className='tb50'></div>

      <Parallax bgImage="thumb-1920-959317.jpg" strength={300}>
  <div className='height' style={{ height: 620 }}>
    <div className='container-500'>
    <h1 style={{ color: '#ffffff', textAlign: 'center', paddingTop: '75px', fontSize: '34px'}}>
    Industries
    </h1>

    <p style={{ color: '#ffffff', textAlign: 'center', paddingTop: '25px', fontSize: '17px'}}>We cater to diverse industries, enabling them to optimise their processes through innovative automation solutions.</p>
    </div>
  <div className='tb50'></div>

  <div className="container-1200">
    <div className='miniCards'>
      <div className='miniCard'>
        <img src="https://cotmac.io/wp-content/uploads/2024/02/Cotmac-Energy-1.png" alt="" />
        <h1 className='miniTitle'>Automotive <br/> Sector</h1>
      </div>
      <div className='miniCard'>
        <img src="https://cotmac.io/wp-content/uploads/2024/02/Cotmac-Cement-Metal-Minings-1.png" alt="" />
        <h1 className='miniTitle'>Cement <br/> Industry</h1>
      </div>
      <div className='miniCard'>
        <img src="https://cotmac.io/wp-content/uploads/2024/02/Cotmac-Data-Center-1.png" alt="" />
        <h1 className='miniTitle'>Data <br/> Centers</h1>
      </div>
      <div className='miniCard'>
        <img src="https://cotmac.io/wp-content/uploads/2024/02/Cotmac-Energy-1.png" alt="" />
        <h1 className='miniTitle'>Energy <br/> Sector</h1>
      </div>
      <div className='miniCard top50top'>
        <img src="https://cotmac.io/wp-content/uploads/2024/02/Cotmac-FoodBeverages-1.png" alt="" />
        <h1 className='miniTitle'>Food & <br/> Baverages</h1>
      </div>
      <div className='miniCard top50top'>
        <img src="https://cotmac.io/wp-content/uploads/2024/02/Cotmac-Intralogsitics-1.png" alt="" />
        <h1 className='miniTitle'>Intralogistics <br/> Automation</h1>
      </div>

      <div className='miniCard top50'>
        <img src="https://cotmac.io/wp-content/uploads/2024/02/Cotmac-Energy-1.png" alt="" />
        <h1 className='miniTitle'>Automotive <br/> Sector</h1>
      </div>
      <div className='miniCard top50'>
        <img src="https://cotmac.io/wp-content/uploads/2024/02/Cotmac-Cement-Metal-Minings-1.png" alt="" />
        <h1 className='miniTitle'>Cement <br/> Industry</h1>
      </div>
      <div className='miniCard top50'>
        <img src="https://cotmac.io/wp-content/uploads/2024/02/Cotmac-Data-Center-1.png" alt="" />
        <h1 className='miniTitle'>Data <br/> Centers</h1>
      </div>
      <div className='miniCard top50'>
        <img src="https://cotmac.io/wp-content/uploads/2024/02/Cotmac-Energy-1.png" alt="" />
        <h1 className='miniTitle'>Energy <br/> Sector</h1>
      </div>
      <div className='miniCard top50'>
        <img src="https://cotmac.io/wp-content/uploads/2024/02/Cotmac-FoodBeverages-1.png" alt="" />
        <h1 className='miniTitle'>Food & <br/> Baverages</h1>
      </div>
      <div className='miniCard top50'>
        <img src="https://cotmac.io/wp-content/uploads/2024/02/Cotmac-Intralogsitics-1.png" alt="" />
        <h1 className='miniTitle'>Intralogistics <br/> Automation</h1>
      </div>
    </div>
    </div>
  </div>
</Parallax>

<div className="tb50"></div>

<div className='solutionsDiv'>
<h1 className='solutionsTitle'>Solutions</h1>
<p className='solutionsDescribe'>At Cotmac, efficiency meets innovation & cutting-edge technology transforms possibilities into realities. Our end-to-end automation solutions define industry standards with seamless integration of hardware & software.</p>
</div>



<div className="container-1200">
  <div className='solutionMiniDivs'>
    <div className='solutionMiniDiv a'>
      <img className='solutionMiniDivImages' src="https://cotmac.io/wp-content/uploads/2024/02/Cotmac-Automation.jpg" alt="" />
      <div className='hoverDiv'>
      <div className='same'>
      <h1 className='hoverTitle'>Automation</h1>
      <p className='cw'>Driving efficiency and cost savings through factory and process automation solutions.</p>
      </div>
      </div>
    </div>
    <div className='solutionMiniDiv b'>
      <img className='solutionMiniDivImages' src="https://cotmac.io/wp-content/uploads/2024/02/CotmacAutomation-Consulting05.jpg" alt="" />
      <div className='hoverDiv'>
      <div className='same'>
      <h1 className='hoverTitle'>Automation Consulting</h1>
      <p className='cw'>What are the driving factors behind successful execution of automation projects?</p>
      </div>
      </div>
    </div>
    <div className='solutionMiniDiv c'>
      <img className='solutionMiniDivImages' src="https://cotmac.io/wp-content/uploads/2024/02/CotmacControlPanel02.jpg" alt="" />
      <div className='hoverDiv'>
      <div className='same'>
      <h1 className='hoverTitle'>Control Panels</h1>
      <p className='cw'>Complete range of automation and LT Panel solutions across industries delivered across the globe.</p>
      </div>
      </div>
    </div>
    <div className='solutionMiniDiv d'>
      <img className='solutionMiniDivImages' src="https://cotmac.io/wp-content/uploads/2024/02/CotmacEngineeringServices04.jpg" alt="" />
      <div className='hoverDiv'>
      <div className='same'>
      <h1 className='hoverTitle'>Engineering Services</h1>
      <p className='cw'>Engineering services for control automation, plant engineering and design across industries.</p>
      </div>
      </div>
    </div>
    <div className='solutionMiniDiv e'>
      <img className='solutionMiniDivImages' src="https://cotmac.io/wp-content/uploads/2024/02/CotmacGlobal10.jpg" alt="" />
      <div className='hoverDiv'>
      <div className='same'>
      <h1 className='hoverTitle'>Global Engineering Outsourcing</h1>
      <p className='cw'>A bench strength of 350+ engineers for customers keen to outsource skilled engineering resources/ manpower.</p>
      </div>
      </div>
    </div>
    <div className='solutionMiniDiv f'>
      <img className='solutionMiniDivImages' src="https://cotmac.io/wp-content/uploads/2024/02/CotmacEPlan03.jpg" alt="" />
      <div className='hoverDiv'>
      <div className='same'>
      <h1 className='hoverTitle'>Industrial Software</h1>
      <p className='cw'>Cotmac provides design and engineering services, software sales & support and training services.</p>
      </div>
      </div>
    </div>
    <div className='solutionMiniDiv g'>
      <img className='solutionMiniDivImages' src="https://cotmac.io/wp-content/uploads/2024/02/CotmacVision09.jpg" alt="" />
      <div className='hoverDiv'>
      <div className='same'>
      <h1 className='hoverTitle'>Machine Vision</h1>
      <p className='cw'>Cotmac is the largest Authorized Solution Partner (ASP) for Cognex, a global leader in providing vision systems.</p>
      </div>
      </div>
    </div>
    <div className='solutionMiniDiv h'>
      <img className='solutionMiniDivImages' src="https://cotmac.io/wp-content/uploads/2024/02/CotmacPartnerProducts07.jpg" alt="" />
      <div className='hoverDiv'>
      <div className='same'>
      <h1 className='hoverTitle'>Partner Products</h1>
      <p className='cw'>Cotmac represents world-class brands in India – Lapp Kabel, Omron, Phoenix Contact and Siemens Switchgears.</p>
      </div>
      </div>
    </div>
    <div className='solutionMiniDiv i'>
      <img className='solutionMiniDivImages' src="https://cotmac.io/wp-content/uploads/2024/02/CotmacRepair08.jpg" alt="" />
      <div className='hoverDiv'>
        <div className='same'>
      <h1 className='hoverTitle'>Repairs and Service Centers</h1>
      <p className='cw'>Cotmac offers industrial automation products repair services across a vast spectrum of hardware products.</p>
      </div>
      </div>
    </div>

  </div>
</div>

<div className="tb50"></div>

<div className='solutionsDiv'>
<h1 className='solutionsTitle'>CERTIFICANTIOONS</h1>
<p className='solutionsDescribe'>Our processes & solutions comply with stringent quality & industry standards set by international certification organizations.</p>
</div>

<div className='imagesTogetherContainer'>
  <img className='imagesTogether' src="https://cotmac.io/wp-content/uploads/2025/04/Frame-9.png" alt="" />
</div>

<div className="clientSayImage" id="testimonialsSection">
  <div className="container-1500">
    <div className="containerr">
      <h1 className="clientTitlee">WHAT CLIENTS SAY</h1>
      <p className="clientDescribee">
        First-hand testimonials by clients that echo the success stories of our partnerships, highlighting the experiences that define our collaborative journey.
      </p>
    </div>

    <div className="testimonial-wrapper">
      <div className="testimonial-scroll-wrapper" id="testimonial-scroll">
        <div className="testimonial-card">
          <p>During our association, Cotmac have demonstrated cooperation, flexibility, quality and customer commitment to meet our project requirements.</p>
          <h1>Umesh Upadhye</h1>
          <p>Regional Vice President(SCM) || MAN Diesel & Turbo India Pvt. Ltd.</p>
        </div>
        <div className="testimonial-card">
          <p>Cotmac has an excellent team. They demonstrated the patience to understand our requirements.</p>
          <h1>Ravi Kumar</h1>
          <p>P Manager - Instr (Engg) Dept. || Aurobindo Pharma Ltd.</p>
        </div>
        <div className="testimonial-card">
          <p>Cotmac has an excellent team. They demonstrated the patience to understand our requirements.</p>
          <h1>Ravi Kumar</h1>
          <p>P Manager - Instr (Engg) Dept. || Aurobindo Pharma Ltd.</p>
        </div>
      </div>

      <div className="scrollButtons">
        <button onClick={() => scrollTestimonials('left')}>&larr;</button>
        <button onClick={() => scrollTestimonials('right')}>&rarr;</button>
      </div>
    </div>
  </div>
</div>


<div className='exelenceDiv'>
  <h1 className='exelenceTitle'>Excellence, Effectiveness and Efficiency</h1>
</div>

<div className='container-1500' ref={sectionRef}>
      <div className='lastFlex'>
        {stats.map((stat, index) => (
          <div className='w-25' key={index}>
            <img src={stat.img} alt="" />
            <h1 className='blue'>{counts[index]}+</h1>
            <h1 className='blue'>{stat.label}</h1>
          </div>
        ))}
      </div>
    </div>
<div className='tb50'></div>

<hr className='hrr' />

<div className="tb50"></div>
</section>
</>
  );
}

export default App;
