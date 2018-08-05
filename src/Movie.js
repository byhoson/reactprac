import React, { Component } from 'react'
import './Movie.css'

class Movie extends Component {
    render() {
        return (
            <div>
                <p>{this.props.title}</p>
                <MoviePoster img={this.props.img} />
            </div>
        )
    }
}

class MoviePoster extends Component {

    componentWillMount() {
        console.log('will mount')
    }

    componentDidMount() {
        console.log('did mount')
    }

    render() {
        return <img src={this.props.img} />
    }
}

export default Movie