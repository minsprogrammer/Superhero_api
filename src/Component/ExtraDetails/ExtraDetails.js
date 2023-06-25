import "./ExtraDetails.css"
import React from 'react'
import { useState,useEffect } from "react"
import { useParams,useHistory } from "react-router-dom"
import Progressbar from "../Progress_bar/Progress_bar"
export default function ExtraDetails( ) {
    const { id }=useParams()
    
    const [getPowerStats,setPowerStats]=useState([])
    const [getAppearance,setAppearance]=useState([])
    const [getHeight,setHeight]=useState([])
    const [getWeight,setWeight]=useState([])
    const [getBiography,setBiography]=useState([])
 
    const [getConnection,setConnection]=useState([])
    const history=useHistory()
    const goBack=() =>{
        history.push('/')
    }
    // "connections": {
    //     "groupAffiliation": "Bureau for Paranormal Research and Defense",
    //     "relatives": "Edith Howard (wife, deceased)"
    //     },
     useEffect(() =>{
               (
                 async() =>{
                      try {
                       
                       
                       
                        const response=await fetch(`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${id}.json`)
                        const data=await response.json()
                         console.log(data.appearance.height[1])
                      
                        setPowerStats(data.powerstats)
                        setAppearance(data.appearance)
                        setHeight(data.appearance.height[1])
                        setWeight(data.appearance.weight[1])
                        setBiography(data.biography)
                      
                        setConnection(data.connections)
                       
                      }
                      catch(e)
                      {
                         console.log(e)
                         
                      }
                 })  ()
          
  
     },[id])
  
    return (
        
          <div className="ExtraDetails">
          
          
        
          <h3>STRENGTH:<Progressbar bgcolor="darkblue" progress={getPowerStats.strength}  height={30} /></h3>
          <h3>INTELLIGENCE: <Progressbar bgcolor="darkgreen" progress={getPowerStats.intelligence}  height={30} /></h3>
          <h3>SPEED:<Progressbar bgcolor="darkred" progress={getPowerStats.speed}  height={30} /></h3>
          <h3>DURABILITY:<Progressbar bgcolor="rgb(231,84,128)" progress={getPowerStats.durability}  height={30} /></h3>
          <h3>POWER:<Progressbar bgcolor="orange" progress={getPowerStats.power}  height={30} /></h3>
           <h3>COMBAT:<Progressbar bgcolor="rgb(139, 128, 0)" progress={getPowerStats.combat}  height={30} /></h3>
        
        
           <h3>HEIGHT:<br/>{getHeight}</h3>
           <br/>
           <h3>WEIGHT: <br/>{getWeight}</h3>
           <br/>
            <h3>EYECOLOR: <br/>{getAppearance.eyeColor}</h3>
            <br/>
            <h3>HAIRCOLOR: <br/>{getAppearance.hairColor}</h3>
            <br/>
            <h3>FULL NAME: <br/>{getBiography.fullName}</h3>
            <br/>
            <h3>ALTER EGOS: <br/>{getBiography.alterEgos}</h3>
            <br/>
            <h3>PLACE OF BIRTH:  <br/>{getBiography.placeOfBirth}</h3>
            <br/>
            <h3>FIRST APPEARANCE: <br/> {getBiography.firstAppearance}</h3>
            <br/>
            <h3>ALIGNMENT:  <br/>{getBiography.alignment}</h3>
            <br/>
           
            <h3>GROUP AFFLIATION: <br/> {getConnection.groupAffliation}</h3>
            <br/>
            <h3>RELATIVES:  <br/>{getConnection.relatives}</h3>
            <br/>
            <button className="button_style" onClick={() =>goBack()}>Go Back</button>
          
           
    

        </div>
       
        
       
    )
}
