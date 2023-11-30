import React from 'react'
import list from "../components/Watch_container"
import Watch from './Watch'

function Watch_dis() {
  return (
    <section>
        {
        list.map((item)=>(
            <Watch item={item}/>
        ))
}
    </section>
  )
}

export default Watch_dis
