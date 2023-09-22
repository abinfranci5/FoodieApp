import React from 'react'
import PickMeals from "../assets/pick-meals-image.png"
import ChooseMeals from "../assets/choose-image.png";
import DeliveryMeals from "../assets/delivery-image.png";

const Work = () => {

    const workInfoDate = [
        {
        image: PickMeals,
        title: "Pick Meals",
        text : "Hello i am abin francis",
        },
        {
            image: ChooseMeals,
            title: "Choose How Often",
            text : "Hello i am abin francis",
         },
        {
                image: DeliveryMeals,
                title: "Fast Deliveries",
                text : "Hello i am abin francis",
        },
              
    ];
  return (
    <div className='work-section-wrapper'>
        <div className='work-section-top'>
            <p className='primary-subheading'>Work</p>
            <h1 className='primary-heading'>How it Works</h1>
            <p className='primary-text'>Hey i am Abin Francis</p>
        </div>
        <div className='work-section-bottom'>
            {workInfoDate.map((data)=>(
                <div className='work-section-info'>
                    <div className='info-boxes-img-container'>
                        <img src= {data.image} alt = ""/>
                        </div>
                        <h2>{data.title}</h2> 
                        <p>{data.text}</p>
                        </div>
            ))}
        </div>
      
    </div>
  )
}

export default Work
