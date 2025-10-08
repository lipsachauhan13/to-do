import React from 'react'

import Header from '../Header/Header'

import Sidebar from '../Sidebar/Sidebar';

function Home() {
  return (
    <div>
      <Header />


      <div className='col-md-10'>
        <Sidebar />
        <div className='content p-3'>

          <p>Hello</p>
          
        </div>

      </div>

    </div>
  )
}

export default Home