import React from 'react'
import ProfilePic from "../assets/john-doe-image.png"
import {AiFillStar} from "react-icons/ai"

const Testimonial = () => {
  return (
    <div className='work-section-wrapper'>
        <div className='work-secton-top'>
            <p className='primary-subheading'>Testimonial</p>
            <h1 className='primary-heading'>What They Are Saying
            </h1>
            <p className='primary-text'>
                This is one of the finest restaurant delivery service i have tried
                and it is delivering food on time and i am really happy with it.
            </p>
            <div className='testimonial-section-bottom'>
                <img src= {ProfilePic} alt=""/>
                <p>
                    This restaurant serves really good food 
                </p>
                <div className='testimonials-stars-container'>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>


                </div>
                <h2>Abin Francis</h2>
            </div>

        </div>
      
    </div>
  )
}

export default Testimonial
