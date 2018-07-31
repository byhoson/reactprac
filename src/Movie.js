import React, { Component } from 'react'

class Movie extends Component {
    render() {
        return (
            <div>
                <p>some movie here</p>
                <MoviePoster />
            </div>
        )
    }
}

class MoviePoster extends Component {
    render() {
        return <img src="https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg" />
    }
}

export default Movie