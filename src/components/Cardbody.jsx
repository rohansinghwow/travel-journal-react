import React from 'react'
import Cardimage from './Cardimage';

export default function Cardbody(props){

    const {title,location,googleMapsUrl,startDate,endDate,description,imageUrl} = props.item;

	return(
    <>
        <Cardimage image={imageUrl}/>
		<div className="card-body">
                    <div className="card-small">
                        <span className="country-name uppercase"><img src="./locate.png" alt="" srcset=""/>{location}</span><span class="underline">View on Google Maps</span>
                    </div>
                    <div className="card-title">
                        <h1>{title}</h1>
                    </div>
    
                    <div className="card-dates">
                        <span>{startDate} - {endDate}</span>
                    </div>
    
                    <div className="card-para">
                        <p>{description}</p>
                    </div>
        </div>
    </>

		)
}