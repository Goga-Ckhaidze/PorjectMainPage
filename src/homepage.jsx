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

    const slides = Array.from({ length: 8 }, (_, i) => `Slide ${i + 1}`);
      
  return (
    <>
    <section className="welcomeSection">
      <div className="welcomeVideoDiv">
        <img src="/images/xxxxx.png" alt="" className='welcomeMainImage' />

        <div className="carouselOverlay">
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={30}
            slidesPerView={1}
            loop
          >
            <SwiperSlide>
              <div className="carouselItem">
                <img src="/images/automaxxx.png" className='automaxxx' alt="" />
                <p className='papalam'>Streamlining Key Industries Globally With Transformative Factory Automation Solutions</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="carouselItem">
              <img src="/images/automaxxx.png" className='automaxxx' alt="" />
              <p className='papalam'>Delivering Decisive Solutions for Diverse Global Challenges Across Industries</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="carouselItem">
              <img src="/images/automaxxx.png" className='automaxxx' alt="" />
              <p className='papalam'>Optimising Crucial Production Processes With Top-Tier Integration Expertise</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>

        <section className="welcomeSection z">
      <div className="welcomeVideoDiv">
        <img src="/images/juja.png" alt="" className='welcomeMainImage' />

        <div className="carouselOverlay">
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={30}
            slidesPerView={1}
            loop
          >
            <SwiperSlide>
              <div className="carouselItem">
                <img src="/images/automaxxx.png" className='automaxxx' alt="" />
                <p className='papalam'>Streamlining Key Industries Globally With Transformative Factory Automation Solutions</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="carouselItem">
              <img src="/images/automaxxx.png" className='automaxxx' alt="" />
              <p className='papalam'>Delivering Decisive Solutions for Diverse Global Challenges Across Industries</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="carouselItem">
              <img src="/images/automaxxx.png" className='automaxxx' alt="" />
              <p className='papalam'>Optimising Crucial Production Processes With Top-Tier Integration Expertise</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>

            <section className="welcomeSection v">
      <div className="welcomeVideoDiv">
        <img src="/images/jujeqsa.png" alt="" className='welcomeMainImage' />

        <div className="carouselOverlay">
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={30}
            slidesPerView={1}
            loop
          >
            <SwiperSlide>
              <div className="carouselItem">
                <img src="/images/automaxxx.png" className='automaxxx' alt="" />
                <p className='uu'>Streamlining Key Industries Globally With Transformative Factory Automation Solutions</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="carouselItem">
              <img src="/images/automaxxx.png" className='automaxxx' alt="" />
              <p className='uu'>Delivering Decisive Solutions for Diverse Global Challenges Across Industries</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="carouselItem">
              <img src="/images/automaxxx.png" className='automaxxx' alt="" />
              <p className='uu'>Optimising Crucial Production Processes With Top-Tier Integration Expertise</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>


    

    <section className='middleSection'>
      <div className="container-1200">

        <h1 className='ourTitle'><span className='ourSpan'>OUR</span> PRODUCTS</h1>
        <p className='ourText'>We are glad to introduce as Distributon and Service Provider of <span className='bold'>SIEMENS</span> & <span className='bold'>EXOR</span> products.<br/> We Have Wide Range Of Following Major Products</p>
        
        <div className="flexProducts">
          <div className="products-25">
            <div className='imgCenter'>
              <img src="/images/vaaaaa.png" alt="" className='ourImages' />
            </div>
            <h1 className='ourMiniTitle'>PLC</h1>
              <p className='ourMiniText'><span className='ourSpan'>A progammable</span> logic controller is an industrial digital computer Used to perform logical operations</p>
          </div>
          <div className="products-25">
          <div className='imgCenter'>
            <img src="/images/vaaaaaa.png" alt="" className='ourImages' />
          </div>
          <h1 className='ourMiniTitle'>HMI</h1>
            <p className='ourMiniText'><span className='ourSpan'>Human</span> machine interface is a display device used to provide process visualization and animation</p>
          </div>
          <div className="products-25">
          <div className='imgCenter'>
            <img src="/images/vaaa.jpg" alt="" className='ourImages' />
          </div>
          <h1 className='ourMiniTitle'>SCADA</h1>
            <p className='ourMiniText'><span className="ourSpan">Supervisory</span> control and data acquistion system for high-level process supervisory management</p>
          </div>
          <div className="products-25">
          <div className='imgCenter'>
            <img src="/images/vaaaa.png" alt="" className='ourImages' />
          </div>
          <h1 className='ourMiniTitle'>DRIVES</h1>
          <p className='ourMiniText'><span className="ourSpan">A variable-frequency</span> drive used to facillate electro-mechanical movement in machine</p>
          </div>
        </div>

        <div className="pnone"></div>

        <div className="middleImageDiv">
          <img src="/images/xx.png" alt="" className='middleImage' />
        </div>
        </div>

<div className='ourServices'>
  <h1 className='servicesTitle'>OUR SERVICES</h1>
  <p className='servicesText'>Automax industries is a leading Engineering and Software services provider company for <br/>global projects in Plant / Equipment / Machine and Process Automation.</p>
  <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        spaceBetween={30}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
          1600: {
            slidesPerView: 4,
          },
        }}
        >
      <SwiperSlide>
          <div className="carouselItem">
            <div className="ourImageDiv">
              <img src="/images/b1.PNG" className='ourImage' alt="" />
            </div>
            <p className='serviceText'>PANEL <br/> MANUACTURING</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="carouselItem">
            <div className="ourImageDiv">
              <img src="/images/b2.PNG" className='ourImage' alt="" />
            </div>
            <p className='serviceText'>PROCESS <br/> AUTOMATION</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="carouselItem">
            <div className="ourImageDiv">
              <img src="/images/b3.PNG" className='ourImage' alt="" />
            </div>
            <p className='serviceText'>MACHINE <br/> RETROFITTING</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="carouselItem">
            <div className="ourImageDiv">
              <img src="/images/b4.PNG" className='ourImage' alt="" />
            </div>
            <p className='serviceText'>PROGRAM <br/> TROUBLESHOOTING</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="carouselItem">
            <div className="ourImageDiv">
              <img src="/images/b1.PNG" className='ourImage' alt="" />
            </div>
            <p className='serviceText'>PANEL <br/> MANUACTURING</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="carouselItem">
            <div className="ourImageDiv">
              <img src="/images/b2.PNG" className='ourImage' alt="" />
            </div>
            <p className='serviceText'>PROCESS <br/> AUTOMATION</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="carouselItem">
            <div className="ourImageDiv">
              <img src="/images/b3.PNG" className='ourImage' alt="" />
            </div>
            <p className='serviceText'>MACHINE <br/> RETROFITTING</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="carouselItem">
            <div className="ourImageDiv">
              <img src="/images/b4.PNG" className='ourImage' alt="" />
            </div>
            <p className='serviceText'>PROGRAM <br/> TROUBLESHOOTING</p>
          </div>
        </SwiperSlide>

    </Swiper>
    <div className="centerDiv">
    <button className='button'>LEARN MORE</button>
    </div>
    </div>

     <div className="container-1500">   
        <div className='aboutCompany'>
      <h1 className='clientTitle'><span className='ourSpan'>OUR </span>CLIENTS</h1>
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
          <img src={url} alt={`companyLogo-${i}`} className="logo jkl" />
          <div className='w100'>
          <img src={url} alt={`companyLogo-${i}`} className="logo" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
      </div>
      </div>

<div className="tb35"></div>

      <div className="centerDiv">
        <button className='button'>LEARN MORE</button>
      </div>

      <div className='tb50'></div>

<div className="container-1500">

    <h1 className='recentTitle'><span className='ourSpan'>RECENT</span> PROJECTS</h1>


    <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        spaceBetween={30}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
        >
      <SwiperSlide>
      <div className="carouselItem">
            <div className="ourImageDiv">
              <img src="/images/o1.PNG" className='ourImagee' alt="" />
            </div>
            <p className='recentP'>1 January, 2020</p>

            <h1 className='recentH1'>WIRE EXTRUDER</h1>
          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="carouselItem">
            <div className="ourImageDiv">
              <img src="/images/o2.PNG" className='ourImagee' alt="" />
            </div>
            <p className='recentP'>1 January, 2020</p>

            <h1 className='recentH1'>ALCO BOTTELING UNIT</h1>
          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="carouselItem">
            <div className="ourImageDiv">
              <img src="/images/o3.PNG" className='ourImagee' alt="" />
            </div>
            <p className='recentP'>1 January, 2020</p>

            <h1 className='recentH1'>PRESS MACHINE</h1>
          </div>
        </SwiperSlide>
       
        <SwiperSlide>
      <div className="carouselItem">
            <div className="ourImageDiv">
              <img src="/images/o1.PNG" className='ourImagee' alt="" />
            </div>
            <p className='recentP'>1 January, 2020</p>

            <h1 className='recentH1'>WIRE EXTRUDER</h1>
          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="carouselItem">
            <div className="ourImageDiv">
              <img src="/images/o2.PNG" className='ourImagee' alt="" />
            </div>
            <p className='recentP'>1 January, 2020</p>

            <h1 className='recentH1'>ALCO BOTTELING UNIT</h1>
          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="carouselItem">
            <div className="ourImageDiv">
              <img src="/images/o3.PNG" className='ourImagee' alt="" />
            </div>
            <p className='recentP'>1 January, 2020</p>

            <h1 className='recentH1'>PRESS MACHINE</h1>
          </div>
        </SwiperSlide>

    </Swiper>

    <div className="centerDiv">
        <button className='button'>LEARN MORE</button>
      </div>

    </div>

    <div className="tb50"></div>

    <div className="contactDiv">
      <div className="container-1000">
      <h1 className='contactTitle'><span className='ourSpan'>CONTACT</span> FOR HIRE</h1>
      <p className='contactText'> For products & service support, please contact us</p>
      <p className='contactText pb'>Management Co. at +91-7018229954</p>

      <div className="contactFlex">
        <div className="contact-33">
          <input type="text" className='contactInput' placeholder='👨‍👨 Name*' />
        </div>
        <div className="contact-33">
        <input type="text" className='contactInput' placeholder='📩 Email*' />
        </div>
        <div className="contact-33">
        <input type="text" className='contactInput' placeholder='📞 Phone No*' />
        </div>
      </div>
      <div className='contactAreaDiv'>
        <textarea className='contactArea' placeholder='💬 Message*'></textarea>
      </div>
      <div className='centerDiv'>
      <input type="checkbox" className='contactCheckbox' />
      <p className='contactMiniText'>Subscribe To Our Newsletter</p>

      <div className='pt20'>
        <button className='button'>SUBMIT</button>
        </div>

      </div>
      </div>
    </div>



</section>
</>
  );
}

export default App;
