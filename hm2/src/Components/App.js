import React from "react";
import List from "./List";

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            arr: []
        }

    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => this.setState({ arr: json }))
    }


    render() {
        return (
            <ul>
                {this.state.arr.map(item => <List data={item} />)}
            </ul>
        )
    }
}

export default App;