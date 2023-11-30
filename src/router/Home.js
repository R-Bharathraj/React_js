import React from 'react'
import { Link } from 'react-router-dom'
import { Output } from './link'

const Home = () => {
  return (
    <>
    <Output/>
    <div>
      Home
    </div>
    <Link to="/" >back</Link>
    </>
  )
}

export default Home
