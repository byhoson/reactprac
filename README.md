# this is the clone of movie app from nomad academy react course

## component lifecycle
1. Render: componentWillMount -> render -> componentDidMount
2. Update: componentWillReceiveProps -> shouldComponentUpdate -> (same as render)
 - componentWillReceiveProps will be called once the component gets the props
 - shouldComponentUpdate will return true if there are any changes in props

## state
- you can't mutate state directly. Instead, you should use this.setState( {the state object to be updated} ).
- In order to initialize state, you have to put it after super() in the constructor, as this.super = { the state object }

## stateless functional component
``` javascript
function MoviePoster({poster}) {
    return (
        <img src = {poster} />
    )
}
```