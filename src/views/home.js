import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Senior Applications Producer</title>
        <meta property="og:title" content="Senior Applications Producer" />
      </Helmet>
    </div>
  )
}

export default Home
