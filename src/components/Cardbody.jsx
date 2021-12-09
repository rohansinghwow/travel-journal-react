import React from 'react'

export default function Cardbody(){
	return(

		<div className="card-body">
                    <div className="card-small">
                        <span className=" country-name uppercase"><img src="./locate.png" alt="" srcset=""> JAPAN</span><span class="underline">View on Google Maps</span>
                    </div>
                    <div className="card-title">
                        <h1>Mount Fiji</h1>
                    </div>
    
                    <div className="card-dates">
                        <span>12 Jan, 2021 - 24 Jan, 2021</span>
                    </div>
    
                    <div className="card-para">
                        <p>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
                    </div>
         </div>

		)
}