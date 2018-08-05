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

    constructor() {
        super()
        this.state = {
            greeting: 'hello'
        }
    }


    componentDidMount() {
        setTimeout(() => {
            this.setState({
                greeting: 'hello again'
            })
        }, 1000)
    }

    render() {
        return (
            <div>
                <p>{this.state.greeting}</p>
                <img src={this.props.img} />
            </div>
        )
    }
}

export default Movie