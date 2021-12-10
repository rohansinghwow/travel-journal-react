import React from 'react'

//importing modules

import Cardbody from './Cardbody'
import Cardimage from './Cardimage'
import data from '../data'


export default function Card(){

    const mapdata = data.map(item=>{
        return(
            <>
            
            <Cardbody item={item}/>
            </>

        )
    })
	
	return (

    
    <>
            {mapdata}
      </>

		)
}