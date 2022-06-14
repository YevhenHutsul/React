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

    deleteHandler(id) {
        const newArr = this.state.arr;
        newArr.splice(id,1);
        this.setState({arr:newArr})
    }

    render() {
        return (
            <ul>
                {this.state.arr.map((item,i) =>
                    <li key={i} className="list-group-item list-group-item-action">
                        <div className="card-body">
                            <p className="text-muted">{item.id}</p>
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text">{item.body}</p>
                            <button className="btn-primary" onClick={() => this.deleteHandler(i)}>Удалить</button>
                        </div>
                    </li>)}
            </ul>
        )
    }
}

export default App;
