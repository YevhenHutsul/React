import React from "react";

class List extends React.Component{
    constructor(){
        super()
        this.state = {
            delete: false
        }
        this.deleteHandler = this.deleteHandler.bind(this)
    }

    deleteHandler(){
        this.setState({delete: true})
    }


    render(){
        return this.state.delete === true ? "" : (
                <li key={this.props.data.id} className="list-group-item list-group-item-action">
                    <div className="card-body">
                        <p className="text-muted">{this.props.data.id}</p>
                        <h5 className="card-title">{this.props.data.title}</h5>
                        <p className="card-text">{this.props.data.body}</p>
                        <button className="btn-primary" onClick={this.deleteHandler}>Удалить</button>
                    </div>
                </li>)
    }
}

export default List;