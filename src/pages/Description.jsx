import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { moviesData } from '../moviesdata';
import { Button } from 'react-bootstrap';

const Description = () => {
    // recuperer de l'url
    const params = useParams();
    console.log(params);
    // recuperer le film qui correspond a l'id
    const[movie, setMovie] = React.useState({});

    //mettre a jour le state du film par/port de l'id
    useEffect(() => {
        setMovie(moviesData.find((el) => el.id === Number(params.id)));
    }, [params.id]);

    const navigate = useNavigate();


  return (
    <div className='container'>
        <h1>{movie.title}</h1>
        <p>{movie.description}</p>
        <div>
            <iframe src="{movie.trailer}" frameborder="0"></iframe></div>

            <Button onClick={() => navigate('/')}>Retourner</Button>
        </div>

        
  )
}

export default Description