import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';
import { Parallax } from 'react-parallax';

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
  "https://cotmac.io/wp-content/uploads/2024/07/Cotmac_PatnerLogo-28.png",
  "https://cotmac.io/wp-content/uploads/2024/07/Cotmac_PatnerLogo-29.png",
  "https://cotmac.io/wp-content/uploads/2024/07/Cotmac_PatnerLogo-30.png",
  "https://cotmac.io/wp-content/uploads/2024/07/Cotmac_PatnerLogo-31.png",
  "https://cotmac.io/wp-content/uploads/2024/07/Cotmac_PatnerLogo-32.png",
  "https://cotmac.io/wp-content/uploads/2024/07/Cotmac_PatnerLogo-27.png",
  "https://cotmac.io/wp-content/uploads/2024/07/Cotmac_PatnerLogo-34.png",
  "https://cotmac.io/wp-content/uploads/2024/07/Cotmac_PatnerLogo-35.png",
  "https://cotmac.io/wp-content/uploads/2024/07/Cotmac_PatnerLogo-36.png",
  "https://cotmac.io/wp-content/uploads/2024/07/Cotmac_PatnerLogo-37.png",
];

function App() {
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
      slidesPerView={3}
      breakpoints={{
        640: { slidesPerView: 3 },
        768: { slidesPerView: 4 },
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
      slidesPerView={3}
      breakpoints={{
        640: { slidesPerView: 3 },
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
  <div style={{ height: 620 }}>
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
      <div className='miniCard'>
        <img src="https://cotmac.io/wp-content/uploads/2024/02/Cotmac-FoodBeverages-1.png" alt="" />
        <h1 className='miniTitle'>Food & <br/> Baverages</h1>
      </div>
      <div className='miniCard'>
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
    </section>

    </>
  );
}

export default App;
