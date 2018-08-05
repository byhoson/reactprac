# this is the clone of movie app from nomad academy react course

## component lifecycle
1. Render: componentWillMount -> render -> componentDidMount
2. Update: componentWillReceiveProps -> shouldComponentUpdate
 - componentWillReceiveProps will be called once the component gets the props
 - shouldComponentUpdate will return true if there are any changes in props
