import React from 'react'
import { Form } from 'react-bootstrap'

const FilterTitre = ({rechercheTitre , setRechercheTitre}) => {
  return (
    <div className='container m-4'>
      <h2>Recherche</h2>
      <Form.Control type="text" placeholder="Recherche par titre" value={rechercheTitre} onChange={(e) =>setRechercheTitre(e.target.value)} />

    </div>
  );
}

export default FilterTitre