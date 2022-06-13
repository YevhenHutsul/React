import React from "react";


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
            <ul className="list-group">
                {this.state.arr.map((item, index) =>
                    <li key={index} className="list-group-item list-group-item-action">
                        <div className="card-body">
                            <p className="text-muted">{item.id}</p>
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text">{item.body}</p>
                        </div>
                    </li>)}
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