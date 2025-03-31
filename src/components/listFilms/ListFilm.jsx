import React from 'react'
import CardFilm from '../cardFilm/CardFilm'

const ListFilm = ({films, rechercheTitre ,rechercheRate}) => {
  return (
    <div style={{display:"flex", flexWrap:"wrap", gap:"20px", justifyContent:"center"}}>
        {films
        .filter((films)=>
          films.title.toLowerCase().includes(rechercheTitre.toLowerCase())
        && films.rate >= rechercheRate
        )
        .map((films)=>(
        <CardFilm films={films} key={films.id} rechercheRate={rechercheRate}/>
        ))}
    </div>
  )
}

export default ListFilm