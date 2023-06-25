import './HeroCard.css'


import {  useHistory } from 'react-router-dom'
const HeroCard=({heroState}) => {
  
    const id=heroState.id

    const history=useHistory()
    const setId = ({id}) => {
       
         history.push(`/extraDetails/${id}`)
      };
   
   return (
       <div className="card" style={{color:"yellow"}}>
            <div className="card__title">{heroState.name}</div>
           
            <div className="card__body">
            <p style={{color:"black",fontWeight:"800"}}>Gender:{heroState.appearance.gender}</p>
                    <p style={{color:"black",fontWeight:"800"}}>Race:{heroState.appearance.race}</p>
                    <p style={{color:"black",fontWeight:"800"}}>Occupation:{heroState.work.occupation}</p>
                    <p style={{color:"black",fontWeight:"800"}}>Publisher:{heroState.biography.publisher}</p>
                    <button class="button" onClick={() =>setId({id})}>More Details</button>
                <div className="card__image">
                
            
                    <img src={heroState.images.sm} alt="superhero images"/>
                    
                </div>
                 
                
            </div>
           
       </div>
  
       
   )
}

export default HeroCard

