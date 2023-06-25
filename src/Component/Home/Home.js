import React,{useState,useEffect} from 'react'
import HeroCard from "../HeroCard/HeroCard"
export default function Home() {
    const [heroes,setHeroes]=useState([])
  const [allHeroes,setAllHeroes]=useState([])
  useEffect(() =>{
        (
      
          async() =>{
            let superHeroData;
            try {
             
              const response=await fetch('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json')
              const data=await response.json()
            
               superHeroData=data
              setHeroes(superHeroData)
              setAllHeroes(superHeroData)
            }
            catch(e)
            {
              console.log(e)
              superHeroData=[]
            } 
          }) ()
  },[])
  const filterCards =event =>{
     const value=event.target.value.toLowerCase();
     const filteredHeroes=allHeroes.filter(
       hero =>(`${hero.name}`.toLocaleLowerCase().includes(value))
     );
     setHeroes(filteredHeroes)
  }
    return (
        <div>
                 <input className="search-box" placeholder="Search..." onInput={filterCards}/>
        <div className="card-container">
        {
           heroes.map((hero,index) =>(
              <HeroCard  heroState={hero} key={index} />
           ))
        }
        </div>
        </div>
  
    )
}
