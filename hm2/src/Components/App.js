import React from "react";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            arr: [],
            inputValue: "",
            validInput: "",
            changeItemValue: "",
            setDisabled: true,

        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => this.setState({ arr: json }))
    }

    deleteHandler(id) {
        const newArr = this.state.arr;
        newArr.splice(id, 1);
        this.setState({ arr: newArr })
    }

    onChangeInputForm = (e) => {
        if (this.testValue(e.target.value)) {
            this.setState({
                setDisabled: false,
                validInput: e.target.value
            });
        } else {
            this.setState({
                setDisabled: true,
            });
        }
        this.setState({ inputValue: e.target.value })
    }

    sendItem() {
        const oldArr = this.state.arr;


        oldArr.unshift({
            userId: oldArr.length,
            id: oldArr.length - (oldArr.length - 1),
            title: 'Новый итем',
            body: this.state.validInput
        });


        const newArr = oldArr;
        this.setState({
            arr: newArr,
            setDisabled: true,
            inputValue: "",
            validInput: "",
        });
    }

    changeItem(i) {
        const item = this.state.arr[i];
        item.body = this.state.changeItemValue;
        
        const newArr = this.state.arr;

        this.setState({arr:newArr})
    }

    changeItemValue = (e) => {
        this.setState({changeItemValue: e.target.value})
    }

    testValue(val) {
        return /^([а-я]+[А-Я][а-я]*|[а-я]*[А-Я][а-я]+)/.test(val) && (val.length >= 2 && val.length <= 7);
    }

    render() {
        return (
<<<<<<< HEAD
            <div className="container">
                <form>
                    <input
                        className="form-control"
                        name="inputValue"
                        type="text"
                        value={this.state.inputValue}
                        onChange={this.onChangeInputForm}
                    ></input>
                    <button type="button" disabled={this.state.setDisabled} onClick={() => this.sendItem()}>Добавить</button>
                </form>

                <ul>
                    {this.state.arr.map((item, i) =>
                        <li key={i} className="list-group-item list-group-item-action">
                            <div className="card-body">
                                <p className="text-muted">{item.id}</p>
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text">{item.body}</p>
                                <button className="btn-primary" onClick={() => this.deleteHandler(i)}>Удалить</button>
                                <input 
                                    className="form-control"
                                    name="changeItem"
                                    type="text"
                                    value={this.props.changeItemValue}
                                    onChange={this.changeItemValue}
                                ></input>
                                <button className="btn-primary" onClick={() => this.changeItem(i)}>Изменить</button>
                            </div>
                        </li>)}
                </ul>
            </div>
        )
    }
}

export default App;
