import React from 'react'
import imgs from "../images/Roofing-Advertisement.jpeg"
function Choice() {
  return (
    <div>
        <div className='choice'>
        <img src={imgs} className='choice-img' width={500} height={560}></img>
        <div className='para-box'>
        <h1>Why Choose <i>S.K ENGINEERS..?</i></h1>
<h3>1. Expertise You Can Trust: Our team consists of certified and experienced roofing professionals who are passionate about delivering quality craftsmanship.</h3>
<h3>2. Personalized Solutions: We understand that every home is unique. That's why we offer personalized roofing solutions tailored to meet your specific needs and budget.</h3>
<h3>3. Quality Materials: We believe in using only the best materials for every project. This commitment ensures durability, longevity, and customer satisfaction.</h3>
<h3>4. Transparent Communication: We believe in clear and open communication with our clients. From project inception to completion, you'll be informed and involved every step of the way.</h3>
</div>
        </div>
    </div>
  )
}

export default Choice;
