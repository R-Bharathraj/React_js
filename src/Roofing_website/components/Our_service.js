import React from 'react'
import "../style/our-product.css"
import img1 from "../images/service-img-1.jpg"
import img2 from "../images/service-img-2.jpg"
import img3 from "../images/service-img-3.jpg"
import img4 from "../images/service-img-4.jpg"
import img5 from "../images/service-img-5.jpg"
import img6 from "../images/service-img-6.jpg"

function Our_service() {
  return (
    <div className='service-box'>
    <div className='bg-img'>  
    </div>
    <div className='service-title'>
      <h1>OUR SERVICES</h1>
      <p></p>
      </div>
      {/* <div className='service-explain'>
<h4>1. Roof Repair and Maintenance: Addressing leaks, damaged shingles, and other issues promptly to prevent further damage.</h4>
<h4>2. Roof Replacement: Installing high-quality roofing materials to enhance the curb appeal and longevity of your home.</h4>
<h4>3. New Roof Installation: Building roofs from the ground up, incorporating the latest industry standards and trends.</h4>
<h4>4. Emergency Roofing Services: We understand that roofing issues can happen at any time. That's why we offer 24/7 emergency services to address urgent concerns.</h4>


      </div> */}
      <div className='service-img'>
        <div className='img-box'>
        <img src={img1} className='img1'width={370} height={240}/>

        <div className='overlay'><a href='http://hariomroofing.com/services/roof-and-wall-cladding/'>View</a></div>

        <div className='service-name-box'>
        <span className='black-box'></span>
        <label className='service-name'>Roof and Wall Cladding</label>
        </div>
        </div>

        <div className='img-box'>
        <img src={img2} className='img1' width={370} height={240}/>

        <div className='overlay'><a href='#'>View</a></div>

        <div className='service-name-box'>
        <span className='black-box'></span>
        <label className='service-name'>Zincalume Steel</label>
        </div>
        </div>
        <div className='img-box'>
        <img src={img3} className='img1' width={370} height={240}/>
        <div className='overlay'><a href='#'>View</a></div>
        <div className='service-name-box'>
        <span className='black-box'></span>
        <label className='service-name'>Color Coated Sheet Coil</label>
        </div>
        </div>
        <div className='img-box'>
        <img src={img4} className='img1'width={370} height={240}/>
        <div className='overlay'><a href='#'>View</a></div>
        <div className='service-name-box'>
        <span className='black-box'></span>
        <label className='service-name'>Structural Solution</label>
        </div>
        </div>
        <div className='img-box'>
        <img src={img5} className='img1'width={370} height={240}/>
        <div className='overlay'><a href='#'>View</a></div>
        <div className='service-name-box'>
        <span className='black-box'></span>
        <label className='service-name'>Smart Building Solution</label>
        </div>
        </div>
        <div className='img-box'>
        <img src={img6} className='img1'width={370} height={240}/>
        <div className='overlay'><a href='#'>View</a></div>
        <div className='service-name-box'>
        <span className='black-box'></span>
        <label className='service-name'>Butler buildings Systems</label>
        </div>
        
      </div>
       
      
    </div>
    <label className='view'>
      <span>View for More</span></label>
    </div>
  )
}

export default Our_service
