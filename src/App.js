import React, { Component } from 'react';
import Movie from './Movie'

const movies = [
    {
        title: "movie1",
        img: "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
    },
    {
        title: "movie2",
        img: "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
    },
    {
        title: "movie3",
        img: "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
    }
]

class App extends Component {
    render() {
        return (
            <div className="App">
                <Movie title={movies[0].title} img={movies[0].img} />
                <Movie title={movies[1].title} img={movies[1].img} />
                <Movie title={movies[2].title} img={movies[2].img} />
            </div>
        );
    }
}

export default App;
