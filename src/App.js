import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListFilm from './components/listFilms/ListFilm';
import { moviesData } from './moviesdata';
import { useState } from 'react';
import AddFilm from './components/AddFilm/AddFilm';
import FilterTitre from './components/filterTitre/FilterTitre';
import FilterRate from './components/filterRate/FilterRate';

function App() {
  const [films, setFilms] = useState(moviesData);
  // console.log(films);
  const ajouterFilm = (newFilm) => {
    setFilms([...films, newFilm]);
  }

  const [rechercheTitre, setRechercheTitre] = useState("");
  const[rechercheRate, setRechercheRate] = useState(1);

  
  return (
    <div className="App">
     <h1>Movie App</h1>
      <h2>List of Movies</h2>
      <FilterTitre 
      rechercheTitre={rechercheTitre} 
      setRechercheTitre={setRechercheTitre}/>
      <FilterRate
       rechercheRate={rechercheRate} 
       setRechercheRate={setRechercheRate} 
       isRating={true}/>
      <AddFilm ajouterFilm={ajouterFilm}/>
      <ListFilm films={films} rechercheTitre={rechercheTitre}  rechercheRate={rechercheRate} setRechercheRate={setRechercheRate} />

    </div>
  );
}

export default App;
