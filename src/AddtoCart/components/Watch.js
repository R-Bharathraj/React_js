import React from 'react'
import "../styles/watch_con.css"
function Watch({item}) {
    const {title,price,img}=item
  return (
    <div className='container' >
        <div className='main_con'>
      <div >
        <img src={img} className='img_watch'></img>
      </div>
      <div>
        <h3>{title}</h3>
        <h2>₹ {price}</h2>
        <button >Add to Cart</button>
      </div>
      </div>
    </div>
  )
}

export default Watch
