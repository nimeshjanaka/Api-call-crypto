import React from 'react'
import './card1.css';

const Card1 = () => {
  return (
   <>
   <div className='my-4 bg-primary rounded-x1 py-2'>
    <div className='p1'>
      <h2>Cross-Domain Arbitrage Tracker</h2>
      <div className='p2'>
      <p>Optimal arbitrage calculated for </p>
      <span className='rounded-md p-1 bg-odosgray02 inline-block'>
          "34,866,461" "paths"
      </span>
      
      </div>
      </div>
    </div>
    <div>
    <div className='grid grid-cols-3 gap-2 mb-8'>
      <div className='text-center bg-primary rounded-x1 py-2'>
        <span className='text-white odos-subtitle-3'>
          "34.4382"
           "DAI"
        </span>
      </div>
    </div>
    <div className='grid grid-cols-3 gap-2 mb-8'>
      <div className='text-center bg-primary rounded-x1 py-2'>
        <span className='text-white odos-subtitle-3'>
          "34.4382"
           "DAI"
        </span>
      </div>
    </div>
    <div className='grid grid-cols-3 gap-2 mb-8'>
      <div className='text-center bg-primary rounded-x1 py-2'>
        <span className='text-white odos-subtitle-3'>
          "34.4382"
           "DAI"
        </span>
      </div>
    </div>

    </div>
    
   
    </>
  )
}

export default Card1