import React from 'react'
import './brand.css'
import {google,dropbox,shopify,slack,atlassian} from './imports'

const Brand = () => {
  return (
    <div className='gpt3_brand section_padding'>
      <div className=''>
        <img src={google} alt='google'/>
      </div>
      <div className=''>
        <img src={dropbox} alt='dropbox'/>
      </div>
      <div className=''>
        <img src={atlassian} alt='atlassian'/>
      </div>
      <div className=''>
        <img src={shopify} alt='shopify'/>
      </div>
      <div className=''>
        <img src={slack} alt='slack'/>
      </div>
      
    </div>
  )
}

export default Brand
