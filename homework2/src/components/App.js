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


    render(){
        return (
            <ul>
                {this.state.arr.map(item => <List data={item}/>)}
            </ul>
        )
    }
}

//(item,index) => {
//    <li key={index}>
//        <div className="card-body">
//            <h5 className="card-title">{item.title}</h5>
//            <p className="card-text">{item.text}</p>
//        </div>
//    </li>
//}

export default App;