import React, { useState, useEffect } from "react"
// import 'bootstrap/dist/css/bootstrap.min.css';
import './asssets/search.css';
import MovieList from './MovieList'
import MovieListHeading from "./MovieListHeading";
import SearchBox from './searchBox'
import AddFavourites from "./AddToFavorites"

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('')
    const [favourite, setFavourites] = useState([])

    const getMovieRequest = async (searchValue) => {
        const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`;

        const response = await fetch(url);
        const responseJson = await response.json();

        if (responseJson.Search) {
            setMovies(responseJson.Search);
        }
    };

    useEffect(() => {
        getMovieRequest(searchValue);
    }, [searchValue]);

    return (
        <div className='container-fluid movie-app'>
            <div className='row dd-flex align-items-center mt-4 mb-4'>
                <MovieListHeading heading='Movies' />
                <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
            </div>
            <div className="row">
                <MovieList movies={movies} favouriteComponent={AddFavourites} />
            </div>
        </div>
    );
};

export default App;