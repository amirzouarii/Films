import React from 'react'
import { Button, Card } from 'react-bootstrap'
import './CardFilm.css'
import FilterRate from '../filterRate/FilterRate'

const CardFilm = ({films}) => {
  return (
    <div className='movie-card'>
         <Card className='carte'>
      <Card.Img className='poster' variant="top" src={films.posterURL} />
      <Card.Body>
        <Card.Title className='titre'>{films.title}</Card.Title>
        <Card.Text className='description'>
          {films.description}
        </Card.Text>
        <FilterRate rate={films.rate} isRating={false} />

        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default CardFilm