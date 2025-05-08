import React from 'react'

function Footer() {
  return (
    <section className='footer'>
    <div className='container-1400'>

      <div className="footerSecondFlex">
        <div className="width-25">
          <img src="/images/automaxxx.png" className='footerLogo' alt="" />
          <div className='footerFirstDiv'>
          <h1 className='footerMiniTitles lk'>Follow US</h1>

          <a href="https://www.facebook.com/"><img src="/images/fb.png" alt="" className='logoUrl' /></a>
          <a href="https://www.instagram.com/"><img src="/images/inst.png" alt="" className='logoUrl' /></a>
          <a href="https://x.com/"><img src="/images/twiter.png" alt="" className='logoUrl' /></a>
          </div>
        </div>
        <div className="width-25">
          <h2 className='footerMiniTitles'>Quick Links</h2>
          <li className='li'><a href="" className='aHref'>HOME</a></li>
          <li className='li'><a href="" className='aHref'>ABOUTS</a></li>
          <li className='li'><a href="" className='aHref'>SERVICE</a></li>
          <li className='li'><a href="" className='aHref'>PRODUCTS</a></li>
          <li className='li'><a href="" className='aHref'>OUR CLIENTS</a></li>
          <li className='li'><a href="" className='aHref'>RECENT PROJECTS</a></li>
          <li className='li'><a href="" className='aHref'>CONTACT US</a></li>
        </div>
        <div className="width-25 ch">
        <h2 className='footerMiniTitles'>Office - Ambala</h2>
        <div className='fl'>
          <div className='iconsDiv'>📞</div><p className='footerP'>+91-8168295889</p>
          </div>
          <div className='fl'>
            <div className='iconsDiv'>📩</div><p className='footerP'>purchase@autmaxindustries.com</p>
          </div>
          <div className='fl'>
            <div className='iconsDiv'>📩</div><p className='footerP'>admin@autmaxindustries.com</p>
            </div>
            <div className='fl'>
              <div className='iconsDiv'>📍</div><p className='footerP'>28/1 Ranjeet Nagar, Ambala Cantt 133001</p>
              </div>
              </div>
        <div className="width-25">
          <h2 className='footerMiniTitles'>Office - Haridwar</h2>
          <div className='fl'>
            <div className='iconsDiv'>📞</div><p className='footerP'>+91-7018229954</p>
          </div>
          <div className='fl'>
            <div className='iconsDiv'>📩</div><p className='footerP'>sales@automaxindustries.com</p>
          </div>
          <div className='fl'>
            <div className='iconsDiv'>📩</div><p className='footerP'>admin@automaxindustries.com</p>
          </div>
          <div className='fl'>
            <div className='iconsDiv'>📍</div><p className='footerP'>203 A3, ghraunda, near denso chowk, bahadrabad, Haridwar 249402</p>
        </div>
        </div>
      </div>
      </div>

      <hr className='hr' />

<div className="container-1400">
<p className='copyright'>© 2020 - automaxindustries - All Rights Reserved.</p>
    
</div>
</section>
  )
}

export default Footer