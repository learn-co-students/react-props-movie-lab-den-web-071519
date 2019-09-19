import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    const movieList = movieData.map((movie) =>
          <MovieCard title={movie.title}
                     IMDBRating={movie.IMDBRating}
                     genres={movie.genres}
                     poster={movie.poster}/>
    );
    return movieList
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
